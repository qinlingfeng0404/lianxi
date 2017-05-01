;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-arrow-left-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M699.387 875.591c0 0-413.412-317.444-413.412-317.444-28.734-22.061-28.734-69.891 0-91.951 0 0 413.412-317.444 413.412-317.444 26.633-20.453 59.942 5.128 59.942 46.038 0 0 0 634.827 0 634.827 0 40.847-33.307 66.43-59.942 45.976 0 0 0 0 0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-left-copy1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M324.613 148.409c0 0 413.412 317.444 413.412 317.444 28.734 22.060 28.734 69.89 0 91.951 0 0-413.412 317.444-413.412 317.444-26.633 20.453-59.941-5.128-59.942-46.038 0 0 0-634.826 0-634.826 0-40.847 33.308-66.43 59.941-45.976 0 0 0 0 0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sharp-arrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.702 941.937l-502.906-856.608 509.399 246.596 502.958-249.87z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M515.308 77.115l508.692 866.462-515.256-249.436-508.744 252.744z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)