(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context, wrapper) {
  if (context.themeSettings.haloAddOptionForProduct == true) {
    var callProductOption = function callProductOption() {
      product_class.each(function (index, element) {
        var productId = $(element).data("product-id");
        list.push(productId.toString());
      });

      if (list.length > 0) {
        getProductOption(list).then(function (data) {
          renderOption(data);
          $.each(list, function (idx, item) {
            var arr = {},
                productId = list[idx];
            product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
              var txt = $(element).data('product-swatch-value');

              if (arr[txt]) {
                $(element).remove();
              } else {
                arr[txt] = true;
              }
            });

            if (product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length > 4) {
              var countMoreOption = product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length - 4,
                  productLink = product_wrapper.find('[data-product-id="' + productId + '"]').find('.card-link').attr('href');
              product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
                if (index >= 4) {
                  $(element).remove();
                }
              });

              if (product_wrapper.find('.card-option-' + productId + ' .form-field .showmore').length < 1) {
                product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)').append('<a href="' + productLink + '" class="showmore">+' + countMoreOption + '</a>');
              }
            }
          });
        });
      }
    };

    var getProductOption = function getProductOption(list) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                    query SeveralProductsByID {\n                      site {\n                        products(entityIds: [" + list + "], first: 50) {\n                          edges {\n                            node {\n                              entityId\n                              name\n                               productOptions(first: 50) {\n                                edges {\n                                  node {\n                                    entityId\n                                    displayName\n                                    isRequired\n                                    ... on MultipleChoiceOption {\n                                      displayStyle\n                                      values {\n                                        edges {\n                                          node {\n                                            entityId\n                                            label\n                                            isDefault\n                                            ... on SwatchOptionValue {\n                                              hexColors\n                                              imageUrl(width: 50)\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };

    var renderOption = function renderOption(data) {
      var aFilter = data.site.products.edges;
      $.each(aFilter, function (index, element) {
        var productId = aFilter[index].node.entityId,
            productFieldColor = product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)'),
            productFieldSize = product_wrapper.find('.card-option-' + productId + ' .form-field--size'),
            aFilter2 = aFilter[index].node.productOptions.edges;
        var aFilter3 = aFilter2.filter(function (item) {
          return item.node.displayStyle === 'Swatch';
        });
        var aFilter5 = aFilter2.filter(function (item) {
          return item.node.displayName === context.themeSettings.haloAddOptionForProduct2;
        });

        if (aFilter3.length > 0) {
          var aFilter4 = aFilter3[0].node.values.edges;
          $.each(aFilter4, function (idx, element) {
            var titleVar = aFilter4[idx].node.label,
                idVar = aFilter4[idx].node.entityId,
                lengthColorVar = aFilter4[idx].node.hexColors.length,
                color1 = aFilter4[idx].node.hexColors[0],
                color2 = aFilter4[idx].node.hexColors[1],
                color3 = aFilter4[idx].node.hexColors[2],
                img = aFilter4[idx].node.imageUrl;

            if (lengthColorVar == 2) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span></span></label>');
            } else if (lengthColorVar === 3) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span><span style="background-color:' + color3 + '"></span></span></label>');
            } else if (Boolean(color1)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color" title="' + titleVar + '" style="background-color: ' + color1 + '"></span></label>');
            } else if (Boolean(img)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--pattern" title="' + titleVar + '" style="background-image: url(' + img + ')"></span></label>');
            }
          });
        } else {
          productFieldColor.remove();
        }

        if (aFilter5.length > 0) {
          if (productFieldSize.length < 1) {
            product_wrapper.find('.card-option-' + productId + '').append('<div class="form-field form-field--size"><label class="form-option">' + context.themeSettings.haloAddOptionForProductText.toString() + '</label></div>');
          }
        }

        if (aFilter5.length == 0 && aFilter3.length == 0) {
          product_wrapper.find('.card-option-' + productId + '').remove();
        }
      });
    };

    var token = context.token,
        product_wrapper = $('#' + wrapper),
        product_class = product_wrapper.find('.card');
    var list = [];
    callProductOption();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js":
/*!***************************************************************************!*\
  !*** ./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  ParallaxScroll.init();
});
var ParallaxScroll = {
  showLogs: !1,
  round: 1e3,
  init: function init() {
    return this._log("init"), this._inited ? (this._log("Already Inited"), void (this._inited = !0)) : (this._requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(), void this._onScroll(!0));
  },
  _inited: !1,
  _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
  _requestAnimationFrame: null,
  _log: function _log(a) {
    this.showLogs && console.log("Parallax Scroll / " + a);
  },
  _onScroll: function _onScroll(a) {
    var b = $(document).scrollTop(),
        c = $(window).height();
    this._log("onScroll " + b), $("[data-parallax]").each($.proxy(function (d, e) {
      var f = $(e),
          g = [],
          h = !1,
          i = f.data("style");
      void 0 == i && (i = f.attr("style") || "", f.data("style", i));
      var k,
          j = [f.data("parallax")];

      for (k = 2; f.data("parallax" + k); k++) {
        j.push(f.data("parallax-" + k));
      }

      var l = j.length;

      for (k = 0; k < l; k++) {
        var m = j[k],
            n = m["from-scroll"];
        void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n = 0 | n;
        var o = m.distance,
            p = m["to-scroll"];
        void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
        var q = m.easing,
            r = m["easing-return"];

        if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
          var s = m.duration;
          void 0 == s && (s = o), s = Math.max(0 | s, 1);
          var t = m["duration-return"];
          void 0 == t && (t = s), o = 1;
          var u = f.data("current-time");
          void 0 == u && (u = 0);
        }

        void 0 == p && (p = n + o), p = 0 | p;
        var v = m.smoothness;
        void 0 == v && (v = 30), v = 0 | v, (a || 0 == v) && (v = 1), v = 0 | v;
        var w = b;
        w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
          var b = 0,
              c = m[a];

          if (void 0 != c) {
            "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c = 0 | c;
            var d = f.data("_" + a);
            void 0 == d && (d = b);
            var e = (c - b) * ((w - n) / (p - n)) + b,
                i = d + (e - d) / v;

            if (q && u > 0 && u <= s) {
              var j = b;
              "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s);
            }

            i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0);
          }
        }, this));
      }

      if (h) {
        if (void 0 != g.z) {
          var x = m.perspective;
          void 0 == x && (x = 800);
          var y = f.parent();
          y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"));
        }

        void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
        var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
            A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
            B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
            C = z + " " + A + " " + B + ";";
        this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i);
      }
    }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/parallax/jquery.parallax-scroll.min */ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);

  function Home(context) {
    return _PageManager.call(this, context) || this;
  }

  var _proto = Home.prototype;

  _proto.onReady = function onReady() {
    this.countDownHeroCarousel();
    this.customPaging();
    this.loadProductByCategory();
    this.loadProductTabByCategory();
    this.loadProductByCategoryWithBanner();
    this.fancyboxVideoBanner();
    this.faqsToggle();
    this.recentBlogSlider();
    this.homeSpecialProduct();
    this.homeParallaxBanner();
    this.loadOptionForProductCard();
    this.customerReviewCarousel();
    this.homeProductRecommended();
  };

  _proto.countDownHeroCarousel = function countDownHeroCarousel() {
    $('.heroCarousel-countdown').each(function (index, element) {
      $(element).parents('.slick-slide').addClass('has-count-down');
      var countDown = $(element).data('carousel-countdown'),
          countDownDate = new Date(countDown).getTime(),
          seft = $(element);
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDownDate - now;

        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.html('');
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
              minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
              seconds = Math.floor(distance % (1000 * 60) / 1000);
          var strCountDown = "<span class='num'>" + days + "<span>DAYS</span></span><span class='num'>" + hours + "<span>HOURS</span></span><span class='num'>" + minutes + "<span>MINS</span></span><span class='num'>" + seconds + "<span>SECS</span></span>";
          seft.html(strCountDown);
        }
      }, 1000);
    });
  };

  _proto.customPaging = function customPaging() {
    var heroCustom = $('.heroCarousel-custom');
    var heroCustomSlide = $('.heroCarousel-custom .slick-dots li');
    heroCustom.slick({
      dots: true,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: heroCustom.data('autoplay'),
      infinite: true,
      asNavFor: ".heroCarousel"
    }); //ADA

    $('.heroCarousel-custom .slick-dots li').each(function (i) {
      var slide = $(this).find('button').text();
      $(this).find('button').text('0' + slide).addClass('slick-dots-item');
    });
    heroCustom.on('afterChange', function (event, slider, i) {
      var pos = $(slider.$slides[i]).find('div[data-position]').data('position');

      if (pos === 'right') {
        heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
      } else {
        heroCustom.removeClass('heroCarousel-customRight').addClass('heroCarousel-customLeft');
      }
    });

    if ($('.heroCarousel-slide--first .heroCarousel-content-wrapper .heroCarousel-content--right').length) {
      heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
    }
  };

  _proto.loadProductByCategory = function loadProductByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-2'
    };

    if ($('.halo-block[data-category-id]').length > 0) {
      var header_height = $('.header').height();
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            setFlag = false;

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          $('.halo-block[data-category-id]').each(function (index, element) {
            var wrap = $(element).find('.productCarousel'),
                catId = $(element).data('data-category'),
                catUrl = $(element).data('category-url'),
                blockId = $(element).attr('id');

            if (!$('#product-by-cate-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.halo-block[data-category-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 2
          }
        }]
      });
    }
  };

  _proto.loadProductTabByCategory = function loadProductTabByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-3'
    };

    if ($('.productCarousel-tabs').length > 0) {
      if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
        Array.from($('.tab-content.is-active')).forEach(function (item) {
          var $itemEle = $(item);
          var block = $itemEle,
              wrap = block.find('.productCarousel'),
              catId = block.data('tab-category-id'),
              catUrl = block.data('tab-category-url'),
              blockId = block.attr('id');

          if (catUrl.includes("http")) {
            if (location.host.includes("en.superhairpieces.es")) {
              catUrl = catUrl.replace("//superhairpieces.es", "//en.superhairpieces.es");
            }
          }

          if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
            block.find('.loadingOverlay').show();
            loadCategory(catId, catUrl, options, wrap, blockId);
          }
        });
      }
    }

    function reviewShow(x) {
      var limit = document.querySelectorAll('.reviewCard1');
      var review2 = [];
      Promise.all([fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=500").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1000").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1500").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      })]).then(function (r) {
        limit.forEach(function (item1) {
          $(item1.nextElementSibling).empty();
          var review3 = [];
          var vidu = review2.filter(function (item) {
            return item['Product SKU'] === item1.innerHTML;
          });
          vidu.forEach(function (goku) {
            review3.push(goku['Review rate']);
          });
          var reviewAvg = Math.round(review3.reduce(function (a, b) {
            return a + b;
          }, 0) / review3.length * 10) / 10;
          $(item1.nextElementSibling).append("\n                    <style>    .checked {\n                        color: rgb(255, 210, 0);\n                \n                }\n                .fa-star-o {\n                    color: rgb(255, 210, 0);\n            \n                }\n                @media (min-width: 768px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                @media (min-width: 1025px) {\n                    .productReview2 {\n                        display: unset;\n                    }\n                }\n                @media (min-width: 1400px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                </style>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                    \n                    <span>\n                    <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                </span>\n                <div style=padding-left:5px;>\n                    " + review3.length + " Commentaires\n                </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
        });
      }).catch(function (err) {
        console.log(err);
      });
    } //     function reviewShow(x) {
    //         var limit = document.querySelectorAll('.reviewCard1');
    //         for (let i = 0; i < limit.length; i++) {
    //             let review3=[]
    //             let review2 = []
    //             // console.log(limit[i].innerHTML)
    //             fetch(`https://shp-webserver.glitch.me/get-teamdesk`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     "table": "Review",
    //                     "options":`?filter=[Product SKU]='${limit[i].innerHTML}'`
    //                 })
    //             })
    //             .then(r=>r.json())
    //             .then(r=> review2.push(...r))
    //             .then(r => {
    //                 $(limit[i].nextElementSibling).empty()
    //                 // const goku1 = review2.filter(item => item['Product SKU'] === limit[i].innerHTML)
    //                 // console.log(review2)
    //                 // console.log(review2.length)
    //                 for (let i=0; i<review2.length; i++) {
    //                     review3.push(review2[i]['Review rate'])
    //                 }
    //                 // review2.forEach((rev) => {
    //                 //     review3.push(rev['Review rate'])
    //                 // })
    //                 const reviewAvg = Math.round((review3.reduce((a,b ) => a+ b, 0)/review3.length) * 10)/10
    //                 $(limit[i].nextElementSibling).append(`
    //                 <style>    .checked {
    //                     color: rgb(255, 210, 0);
    //             }
    //             .fa-star-o {
    //                 color: rgb(255, 210, 0);
    //             }
    //             @media (min-width: 768px) {
    //                 .productReview2 {
    //                     display: flex;
    //                 }
    //             }
    //             @media (min-width: 1025px) {
    //                 .productReview2 {
    //                     display: unset;
    //                 }
    //             }
    //             @media (min-width: 1400px) {
    //                 .productReview2 {
    //                     display: flex;
    //                 }
    //             }
    //             </style>
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    //                 <span>
    //                 <span class="fa fa-star`+(0.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    //                 <span class="fa fa-star`+(1.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    //                 <span class="fa fa-star`+(2.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    //                 <span class="fa fa-star`+(3.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    //                 <span class="fa fa-star`+(4.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>      
    //             </span>
    //             <div style=padding-left:5px;>
    //                 ${review3.length} Reseñas
    //             </div>`)
    //             })
    //         }
    // //         limit.forEach((item1) => {
    // //             let review3=[]
    // //             let review2 = []
    // //             fetch(`https://shp-webserver.glitch.me/get-teamdesk`, {
    // //                 method: 'POST',
    // //                 headers: {
    // //                     'Content-Type': 'application/json',
    // //                     'Accept': 'application/json'
    // //                 },
    // //                 body: JSON.stringify({
    // //                     "table": "Review",
    // //                     "options":`?filter=[Product SKU]='${item1.innerHTML}'`
    // //                 })
    // //             })
    // //             .then(r=>r.json())
    // //             .then(r=> review2.push(...r))
    // //             .then(r => {
    // //                 $(item1.nextElementSibling).empty()
    // //                 const goku1 = review2.filter(item => item['Product SKU'] === item1.innerHTML)
    // //                 goku1.forEach((rev) => {
    // //                                         review3.push(rev['Review rate'])
    // //                                     })
    // //                 const reviewAvg = Math.round((review3.reduce((a,b ) => a+ b, 0)/review3.length) * 10)/10
    // //                 $(item1.nextElementSibling).append(`
    // //                 <style>    .checked {
    // //                     color: rgb(255, 210, 0);
    // //             }
    // //             .fa-star-o {
    // //                 color: rgb(255, 210, 0);
    // //             }
    // //             @media (min-width: 768px) {
    // //                 .productReview2 {
    // //                     display: flex;
    // //                 }
    // //             }
    // //             @media (min-width: 1025px) {
    // //                 .productReview2 {
    // //                     display: unset;
    // //                 }
    // //             }
    // //             @media (min-width: 1400px) {
    // //                 .productReview2 {
    // //                     display: flex;
    // //                 }
    // //             }
    // //             </style>
    // // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    // //                 <span>
    // //                 <span class="fa fa-star`+(0.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(1.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(2.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(3.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(4.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>      
    // //             </span>
    // //             <div style=padding-left:5px;>
    // //                 ${review3.length} Reseñas
    // //             </div>`)
    // //             })
    // //         })
    // //         let review2 = []
    // //         fetch(`https://shp-webserver.glitch.me/get-teamdesk`, {
    // //             method: 'POST',
    // //             headers: {
    // //                 'Content-Type': 'application/json',
    // //                 'Accept': 'application/json'
    // //             },
    // //             body: JSON.stringify({
    // //                 "table": "Review",
    // //                 "options":``
    // //             })
    // //         })
    // //         .then(r=>r.json())
    // //         .then(r=> review2.push(...r))
    // //         .then((r) => {
    // //             limit.forEach((item1) => {
    // //                 $(item1.nextElementSibling).empty()
    // //                 let review3 = []
    // //                 const filteredAr = review2.filter(item => item['Product SKU'] === item1.innerHTML)
    // //                 filteredAr.forEach((rev) => {
    // //                     review3.push(rev['Review rate'])
    // //                 })
    // //                 const reviewAvg = Math.round((review3.reduce((a,b ) => a+ b, 0)/review3.length) * 10)/10
    // //                 $(item1.nextElementSibling).append(`
    // //                 <style>    .checked {
    // //                     color: rgb(255, 210, 0);
    // //             }
    // //             .fa-star-o {
    // //                 color: rgb(255, 210, 0);
    // //             }
    // //             @media (min-width: 768px) {
    // //                 .productReview2 {
    // //                     display: flex;
    // //                 }
    // //             }
    // //             @media (min-width: 1025px) {
    // //                 .productReview2 {
    // //                     display: unset;
    // //                 }
    // //             }
    // //             @media (min-width: 1400px) {
    // //                 .productReview2 {
    // //                     display: flex;
    // //                 }
    // //             }
    // //             </style>
    // // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    // //                 <span>
    // //                 <span class="fa fa-star`+(0.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(1.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(2.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(3.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>
    // //                 <span class="fa fa-star`+(4.5 <= reviewAvg? ' checked': ' fa-star-o') + `"></span>      
    // //             </span>
    // //             <div style=padding-left:5px;>
    // //                 ${review3.length} Reseñas
    // //             </div>`)
    // //                 // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
    // //             })
    // //           })
    // //           .catch((err) => {
    // //               console.log(err);
    // //           });
    //     }


    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.tab-content').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
          reviewShow();
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: false,
        arrows: true,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-tab1 slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-tab2 slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 2
          }
        }]
      });
    }
  };

  _proto.loadProductByCategoryWithBanner = function loadProductByCategoryWithBanner() {
    var context = this.context;
    var options = {
      template: 'products/carousel-4'
    };

    if ($('.halo-block[data-category-with-banner-id]').length > 0) {
      var header_height = $('.header').height();
      var $tabSorting = $('.tab-sorting .tab-title');
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            setFlag = false;

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          $('.halo-block[data-category-with-banner-id]').each(function (index, element) {
            if ($('.home-layout-2').length && !$(element).hasClass('home2-flash-deals')) {
              var wrap = $(element).find('.tabContent-new .productCarousel');
            } else {
              var wrap = $(element).find('.productCarousel');
            }

            var catId = $(element).data('category-with-banner-id'),
                catUrl = $(element).data('category-with-banner-url'),
                blockId = $(element).attr('id');

            if (!$('#product-with-banner-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
      $tabSorting.on('click', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget);
        var dataTab = $target.data('tab');
        var $thisBlock = $target.closest('.halo-block-product');
        var wrap = $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel'),
            catId = $target.data('cate-id'),
            catUrl = $target.data('cate-url'),
            blockId = $thisBlock.find('.tabContent-' + dataTab).attr('id');

        if (dataTab == 'viewall') {
          window.location.href = $target.attr('href');
          return;
        }

        $thisBlock.find('.tab-sorting').removeClass('is-active');
        $target.parent().addClass('is-active');
        $thisBlock.find('.tab-content').removeClass('is-active');
        $thisBlock.find('.tabContent-' + dataTab).addClass('is-active');
        console.log('aff');

        if (!$target.hasClass('is-loaded')) {
          $target.addClass('is-loaded');
          loadCategory(catId, catUrl, options, wrap, blockId);
        } else {
          $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel').slick('refresh');
        }
      });

      if ($('.countDowntimer').length) {
        var countDownDate = new Date($('.countDowntimer').attr('data-count-down')).getTime();
        var countdownfunction = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;

          if (distance < 0) {
            clearInterval(countdownfunction);
            $(".countDowntimer").html('');
          } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var strCountDown = "<div class='clock-item'><span class='num'>" + days + "</span><span class='text'>d</span></div><div class='clock-item'><span class='num'>" + hours + ":</span></div><div class='clock-item'><span class='num'>" + minutes + ":</span></div><div class='clock-item'><span class='num'>" + seconds + "</span></div>";
            $(".countDowntimer").html(strCountDown);
          }
        }, 1000);
      }
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);

          if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners')) {
            if ($('.home-layout-2').length) {
              if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('home2-flash-deals')) {
                labelFlashDeals(wrap);
                slickCarousel4(wrap);
              } else {
                slickCarousel3(wrap);
              }
            } else {
              slickCarousel(wrap);
            }
          } else if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners2')) {
            slickCarousel2(wrap);
          }

          wrap.parents('.halo-block[data-category-with-banner-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }

    function slickCarousel2(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 2
          }
        }]
      });
    }

    function slickCarousel3(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }

    function slickCarousel4(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }

    function labelFlashDeals(wrap) {
      var $itemSide = wrap.find('.productCarousel-slide');
      $itemSide.each(function (index, element) {
        var $thisLabel = $(element).find('.sale-badge');

        if ($thisLabel.length) {
          var label = $thisLabel.find('.text').data('sale');
          $(element).find('.card-price').addClass('has-labelSale').append('<div class="card-label-sale"><span>-' + label + '</span></div>');
          $thisLabel.remove();
        }
      });
    }
  };

  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length > 0) {
      $(".video-block-image[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }

    if ($(".button-popup-video[data-fancybox]").length > 0) {
      $(".button-popup-video[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
  };

  _proto.faqsToggle = function faqsToggle() {
    $('.halo-short-faqs .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.halo-short-faqs .card .title').not($target).removeClass('collapsed');

      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }

      $('.halo-short-faqs .card').each(function (index, element) {
        if ($(element).find('.title').hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };

  _proto.recentBlogSlider = function recentBlogSlider() {
    if ($(window).width() <= 1024) {
      if ($('.halo-recent-post').length) {
        if ($('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick('unslick');
        }
      }
    } else {
      if ($('.halo-recent-post').length) {
        if (!$('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick();
        }
      }
    }

    $(window).resize(function () {
      if ($(window).width() <= 1024) {
        if ($('.halo-recent-post').length) {
          if ($('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick('unslick');
          }
        }
      } else {
        if ($('.halo-recent-post').length) {
          if (!$('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick();
          }
        }
      }
    });
  };

  _proto.homeSpecialProduct = function homeSpecialProduct() {
    var context = this.context;

    if (context.themeSettings.home_product_block_special == true) {
      var productId = $('[data-special-product-id]').data('special-product-id'),
          setFlag = false;
      var options = {
        template: 'halothemes/products/halo-special-product-tmp'
      };
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            header_height = $('.header').height();

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          if (!$('.halo-spacial-product .productView').length) {
            var viewingProduct = function viewingProduct(wrapper) {
              if (wrapper.length > 0) {
                var viewerText = context.themeSettings.product_viewingProduct_text,
                    numbersViewer_text = context.themeSettings.product_viewingProduct_viewer,
                    numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
                setInterval(function () {
                  var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
                  wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
                  wrapper.removeClass('u-hiddenVisually');
                }, 10000);
              }
            };

            var countDownProduct = function countDownProduct(wrapper) {
              if (wrapper.length > 0) {
                var countDown = wrapper.data('countdown'),
                    countDownDate = new Date(countDown).getTime(),
                    seft = wrapper;
                var countdownfunction = setInterval(function () {
                  var now = new Date().getTime(),
                      distance = countDownDate - now;

                  if (distance < 0) {
                    clearInterval(countdownfunction);
                    seft.remove();
                  } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                        minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
                        seconds = Math.floor(distance % (1000 * 60) / 1000),
                        strCountDown = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited time offer, end in:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + 's</span>';
                    seft.html(strCountDown);
                  }
                }, 1000);
              }
            };

            var soldProduct = function soldProduct(wrapper) {
              if (wrapper.length > 0) {
                var numbersProduct_text = context.themeSettings.product_soldProduct_products,
                    numbersHours_text = context.themeSettings.product_soldProduct_hours,
                    soldProductText = context.themeSettings.product_soldProduct_text,
                    soldProductText2 = context.themeSettings.product_soldProduct_hours_text;
                var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
                    numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
                    numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
                    numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
                wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span>' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
                wrapper.removeClass('u-hiddenVisually').show();
              }
            };

            var initThumbnailsHeight = function initThumbnailsHeight($scope) {
              var el = $($scope);
              var $carousel_nav = el.find('.productView-nav'),
                  $carousel_for = el.find('.productView-for');

              if ($carousel_for.find('.slick-arrow').length > 0) {
                $carousel_for.parent().addClass('arrows-visible');
              } else {
                $carousel_for.parent().addClass('arrows-disable');
              }
            };

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.product.getById(productId, options, function (err, response) {
              setFlag = false;
              var scope = '.halo-spacial-product';

              if (!$(scope).find('.productView').length) {
                $(scope).html(response);
                soldProduct($(scope).find('.productView-soldProduct'));
                viewingProduct($(scope).find('.productView-ViewingProduct'));
                countDownProduct($(scope).find('.productView-countDown'));
                $(scope).find('[data-slick]').slick();
                $(scope).find('.productView-for').get(0).slick.setPosition();
                initThumbnailsHeight(scope);
                Object(_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__["default"])($(scope), context);
                Object(_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__["default"])($(scope).find('[data-slick]'));
                $(scope).on('click', '.dropdown-menu-button', function (event) {
                  var $target = $(event.currentTarget);

                  if ($target.hasClass('is-open')) {
                    $target.removeClass('is-open').attr('aria-expanded', false);
                    $target.siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                  } else {
                    $target.addClass('is-open').attr('aria-expanded', true);
                    $target.siblings('.dropdown-menu').addClass('is-open').attr('aria-hidden', false);
                  }

                  event.stopPropagation();
                });
                $(document).on('click', function (event) {
                  if ($(scope).find('.dropdown-menu-button').hasClass('is-open')) {
                    if ($(event.target).closest('.dropdown-menu-button').length === 0 && $(event.target).closest('.dropdown-menu').length === 0) {
                      $(scope).find('.dropdown-menu-button').removeClass('is-open').attr('aria-expanded', false);
                      $(scope).find('.dropdown-menu-button').siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                    }
                  }
                });
                var productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_7__["default"]($(scope), context);
                productDetails.setProductVariant();
                return productDetails;
              }
            });
          }

          setFlag = false;
        }
      });
    }
  };

  _proto.homeParallaxBanner = function homeParallaxBanner() {
    if ($('#halo_parralax_banners').length > 0) {
      var wrap = $('#halo_parralax_banners'),
          image = wrap.find('[data-image]').data('image');
      wrap.find('[data-image]').css('background-image', 'url(' + image + ')');
    }
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var context = this.context;

    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }

    if ($('.halo-block .productGrid').length > 0) {
      $('.halo-block .productGrid').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }
  } // Banner parallax 2
  ;

  _proto.customerReviewCarousel = function customerReviewCarousel() {
    if ($('#halo_parralax_banners .halo-row').length) {
      if (!$('#halo_parralax_banners .halo-row').hasClass('slick-slider')) {
        $('#halo_parralax_banners .halo-row').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              arrows: true
            }
          }]
        });
      }
    }
  };

  _proto.homeProductRecommended = function homeProductRecommended() {
    var $homePGF = $('.home2-block-recommended');
    var $homePGF_grid = $homePGF.find('.productGrid');
    var homePGF_itemLength = $homePGF_grid.find('.product').length;
    var $homePGF_btnBlock = $('.homePGF_btn');
    var $homePGF_btn = $('.homePGF_btn a');
    var dataColumn = $homePGF_grid.data('columns');
    var tt_productShow;

    if ($homePGF.length && homePGF_itemLength > 0) {
      var fWidth = window.innerWidth;

      if (fWidth > 1279 && homePGF_itemLength > 10) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 1279 && fWidth > 991 && homePGF_itemLength > 8) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 991 && fWidth > 767 && homePGF_itemLength > 6) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 767 && homePGF_itemLength > 4) {
        $homePGF_btnBlock.addClass('is-show');
      }

      $homePGF_btn.on('click', function (e) {
        e.preventDefault();
        var wWidth = window.innerWidth;

        if (wWidth > 1279) {
          tt_productShow = 10;
        } else if (wWidth <= 1279 && wWidth > 991) {
          tt_productShow = 8;
        } else if (wWidth <= 991 && wWidth > 767) {
          tt_productShow = 6;
        } else {
          tt_productShow = 4;
        }

        if ($homePGF_grid.find('.product:hidden').length > 0) {
          $homePGF_grid.find('.product:hidden:lt(' + tt_productShow + ')').css('display', 'inline-block');

          if ($homePGF_grid.find('.product:hidden').length == 0) {
            $homePGF_btn.text('No More Products').attr('disabled', '').addClass('disable');
          }
        }
      });
    }
  };

  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvcGFyYWxsYXgvanF1ZXJ5LnBhcmFsbGF4LXNjcm9sbC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwicHJveHkiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwiaiIsImwiLCJtIiwibiIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJ0b3AiLCJvIiwiZGlzdGFuY2UiLCJwIiwicSIsImVhc2luZyIsInIiLCJzIiwiZHVyYXRpb24iLCJ0IiwidSIsInYiLCJzbW9vdGhuZXNzIiwidyIsIm1pbiIsIm1hcCIsImNlaWwiLCJ6IiwieCIsInBlcnNwZWN0aXZlIiwieSIsInBhcmVudCIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNjYWxlIiwiQSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsIkIiLCJDIiwiSG9tZSIsIm9uUmVhZHkiLCJjb3VudERvd25IZXJvQ2Fyb3VzZWwiLCJjdXN0b21QYWdpbmciLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImZhcXNUb2dnbGUiLCJyZWNlbnRCbG9nU2xpZGVyIiwiaG9tZVNwZWNpYWxQcm9kdWN0IiwiaG9tZVBhcmFsbGF4QmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCIsImhvbWVQcm9kdWN0UmVjb21tZW5kZWQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJodG1sIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsImhlcm9DdXN0b20iLCJoZXJvQ3VzdG9tU2xpZGUiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJhc05hdkZvciIsInNsaWRlIiwidGV4dCIsIm9uIiwiZXZlbnQiLCJzbGlkZXIiLCJwb3MiLCIkc2xpZGVzIiwicmVtb3ZlQ2xhc3MiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJoZWFkZXJfaGVpZ2h0Iiwic2Nyb2xsIiwic2V0RmxhZyIsIndyYXAiLCJjYXRJZCIsImNhdFVybCIsImJsb2NrSWQiLCJsb2FkQ2F0ZWdvcnkiLCJpZCIsInVybCIsIm9wdGlvbiIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3BvbnNlIiwic2xpY2tDYXJvdXNlbCIsImhhbG9BZGRPcHRpb24iLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicGFyc2VJbnQiLCJob21lX3Byb2R1Y3RfYmxvY2tfY29sIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIiRpdGVtRWxlIiwiYmxvY2siLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiaG9zdCIsInJlcGxhY2UiLCJzaG93IiwicmV2aWV3U2hvdyIsImxpbWl0IiwicXVlcnlTZWxlY3RvckFsbCIsInJldmlldzIiLCJQcm9taXNlIiwiYWxsIiwiaXRlbTEiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJlbXB0eSIsInJldmlldzMiLCJ2aWR1IiwiaW5uZXJIVE1MIiwiZ29rdSIsInJldmlld0F2ZyIsInJlZHVjZSIsImNhdGNoIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wiLCIkdGFiU29ydGluZyIsImhhc0NsYXNzIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFUYWIiLCIkdGhpc0Jsb2NrIiwiY2xvc2VzdCIsImhyZWYiLCJsYWJlbEZsYXNoRGVhbHMiLCJzbGlja0Nhcm91c2VsNCIsInNsaWNrQ2Fyb3VzZWwzIiwic2xpY2tDYXJvdXNlbDIiLCJob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sIiwiJGl0ZW1TaWRlIiwiJHRoaXNMYWJlbCIsImZhbmN5Ym94Iiwibm90Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsIndpZHRoIiwicmVzaXplIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3NwZWNpYWwiLCJ2aWV3aW5nUHJvZHVjdCIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwicGFyc2UiLCJudW1iZXJzVmlld2VySXRlbSIsInJhbmRvbSIsImNvdW50RG93blByb2R1Y3QiLCJzb2xkUHJvZHVjdCIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiaW5pdFRodW1ibmFpbHNIZWlnaHQiLCIkc2NvcGUiLCJlbCIsIiRjYXJvdXNlbF9uYXYiLCIkY2Fyb3VzZWxfZm9yIiwicHJvZHVjdCIsImdldEJ5SWQiLCJzY29wZSIsImdldCIsInNldFBvc2l0aW9uIiwiaGFsb05vdGlmeU1lIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsInNpYmxpbmdzIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiaW1hZ2UiLCJjc3MiLCIkcHJvZFdyYXBJZCIsImFkYXB0aXZlSGVpZ2h0IiwiJGhvbWVQR0YiLCIkaG9tZVBHRl9ncmlkIiwiaG9tZVBHRl9pdGVtTGVuZ3RoIiwiJGhvbWVQR0ZfYnRuQmxvY2siLCIkaG9tZVBHRl9idG4iLCJkYXRhQ29sdW1uIiwidHRfcHJvZHVjdFNob3ciLCJmV2lkdGgiLCJpbm5lcldpZHRoIiwid1dpZHRoIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztBQUVlLHlFQUFTQyxPQUFULEVBQWtCQyxPQUFsQixFQUEyQjtFQUN0QyxJQUFJRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0JDLHVCQUF0QixJQUFpRCxJQUFyRCxFQUEyRDtJQUFBLElBTTlDQyxpQkFOOEMsR0FNdkQsU0FBU0EsaUJBQVQsR0FBNkI7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7UUFDbkMsSUFBSUMsU0FBUyxHQUFHQyxDQUFDLENBQUNGLE9BQUQsQ0FBRCxDQUFXRyxJQUFYLENBQWdCLFlBQWhCLENBQWhCO1FBRUFDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixTQUFTLENBQUNLLFFBQVYsRUFBVjtNQUNILENBSkQ7O01BTUEsSUFBR0YsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBakIsRUFBbUI7UUFDZkMsZ0JBQWdCLENBQUNKLElBQUQsQ0FBaEIsQ0FBdUJLLElBQXZCLENBQTRCLFVBQUFOLElBQUksRUFBSTtVQUNoQ08sWUFBWSxDQUFDUCxJQUFELENBQVo7VUFFQUQsQ0FBQyxDQUFDSixJQUFGLENBQU9NLElBQVAsRUFBYSxVQUFDTyxHQUFELEVBQU1DLElBQU4sRUFBZTtZQUN4QixJQUFJQyxHQUFHLEdBQUcsRUFBVjtZQUFBLElBQ0laLFNBQVMsR0FBR0csSUFBSSxDQUFDTyxHQUFELENBRHBCO1lBR0FHLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUIsa0JBQWdCZCxTQUFoQixHQUEwQixzQkFBL0MsRUFBdUVILElBQXZFLENBQTRFLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtjQUM1RixJQUFJZ0IsR0FBRyxHQUFHZCxDQUFDLENBQUNGLE9BQUQsQ0FBRCxDQUFXRyxJQUFYLENBQWdCLHNCQUFoQixDQUFWOztjQUVBLElBQUlVLEdBQUcsQ0FBQ0csR0FBRCxDQUFQLEVBQWE7Z0JBQ1RkLENBQUMsQ0FBQ0YsT0FBRCxDQUFELENBQVdpQixNQUFYO2NBQ0gsQ0FGRCxNQUVPO2dCQUNISixHQUFHLENBQUNHLEdBQUQsQ0FBSCxHQUFXLElBQVg7Y0FDSDtZQUNKLENBUkQ7O1lBVUEsSUFBR0YsZUFBZSxDQUFDQyxJQUFoQixDQUFxQixrQkFBZ0JkLFNBQWhCLEdBQTBCLHNCQUEvQyxFQUF1RU0sTUFBdkUsR0FBZ0YsQ0FBbkYsRUFBcUY7Y0FDakYsSUFBSVcsZUFBZSxHQUFJSixlQUFlLENBQUNDLElBQWhCLENBQXFCLGtCQUFnQmQsU0FBaEIsR0FBMEIsc0JBQS9DLEVBQXVFTSxNQUF2RSxHQUFnRixDQUF2RztjQUFBLElBQ0lZLFdBQVcsR0FBR0wsZUFBZSxDQUFDQyxJQUFoQixDQUFxQix1QkFBcUJkLFNBQXJCLEdBQStCLElBQXBELEVBQTBEYyxJQUExRCxDQUErRCxZQUEvRCxFQUE2RUssSUFBN0UsQ0FBa0YsTUFBbEYsQ0FEbEI7Y0FHQU4sZUFBZSxDQUFDQyxJQUFoQixDQUFxQixrQkFBZ0JkLFNBQWhCLEdBQTBCLHNCQUEvQyxFQUF1RUgsSUFBdkUsQ0FBNEUsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO2dCQUM1RixJQUFHRCxLQUFLLElBQUksQ0FBWixFQUFjO2tCQUNWRyxDQUFDLENBQUNGLE9BQUQsQ0FBRCxDQUFXaUIsTUFBWDtnQkFDSDtjQUNKLENBSkQ7O2NBTUEsSUFBR0gsZUFBZSxDQUFDQyxJQUFoQixDQUFxQixrQkFBZ0JkLFNBQWhCLEdBQTBCLHdCQUEvQyxFQUF5RU0sTUFBekUsR0FBa0YsQ0FBckYsRUFBdUY7Z0JBQ25GTyxlQUFlLENBQUNDLElBQWhCLENBQXFCLGtCQUFnQmQsU0FBaEIsR0FBMEIscUNBQS9DLEVBQXNGb0IsTUFBdEYsQ0FBNkYsY0FBWUYsV0FBWixHQUF3QixzQkFBeEIsR0FBK0NELGVBQS9DLEdBQStELE1BQTVKO2NBQ0g7WUFDSjtVQUNKLENBNUJEO1FBOEJILENBakNEO01Ba0NIO0lBQ0osQ0FqRHNEOztJQUFBLElBbUQ5Q1YsZ0JBbkQ4QyxHQW1EdkQsU0FBU0EsZ0JBQVQsQ0FBMEJKLElBQTFCLEVBQStCO01BQzNCLE9BQU9kLEtBQUssQ0FBQyxVQUFELEVBQWE7UUFDckJnQyxNQUFNLEVBQUUsTUFEYTtRQUVyQkMsT0FBTyxFQUFFO1VBQ1AsZ0JBQWdCLGtCQURUO1VBRVAsaUJBQWlCLFlBQVlDO1FBRnRCLENBRlk7UUFNckJDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7VUFDbkJDLEtBQUssRUFBRSxtSUFHc0J4QixJQUh0QjtRQURZLENBQWY7TUFOZSxDQUFiLENBQUwsQ0E4Q0pLLElBOUNJLENBOENDLFVBQUFvQixHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7TUFBQSxDQTlDSixFQThDb0JyQixJQTlDcEIsQ0E4Q3lCLFVBQUFvQixHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDMUIsSUFBUjtNQUFBLENBOUM1QixDQUFQO0lBK0NILENBbkdzRDs7SUFBQSxJQXFHOUNPLFlBckc4QyxHQXFHdkQsU0FBU0EsWUFBVCxDQUFzQlAsSUFBdEIsRUFBMkI7TUFDdkIsSUFBSTRCLE9BQU8sR0FBRzVCLElBQUksQ0FBQzZCLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsS0FBakM7TUFFQWhDLENBQUMsQ0FBQ0osSUFBRixDQUFPaUMsT0FBUCxFQUFnQixVQUFDaEMsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO1FBQ2hDLElBQUlDLFNBQVMsR0FBRzhCLE9BQU8sQ0FBQ2hDLEtBQUQsQ0FBUCxDQUFlb0MsSUFBZixDQUFvQkMsUUFBcEM7UUFBQSxJQUNJQyxpQkFBaUIsR0FBR3ZCLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUIsa0JBQWdCZCxTQUFoQixHQUEwQixxQ0FBL0MsQ0FEeEI7UUFBQSxJQUVJcUMsZ0JBQWdCLEdBQUd4QixlQUFlLENBQUNDLElBQWhCLENBQXFCLGtCQUFnQmQsU0FBaEIsR0FBMEIsb0JBQS9DLENBRnZCO1FBQUEsSUFHSXNDLFFBQVEsR0FBR1IsT0FBTyxDQUFDaEMsS0FBRCxDQUFQLENBQWVvQyxJQUFmLENBQW9CSyxjQUFwQixDQUFtQ04sS0FIbEQ7UUFLQSxJQUFJTyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixVQUFVOUIsSUFBVixFQUFnQjtVQUMzQyxPQUFPQSxJQUFJLENBQUN1QixJQUFMLENBQVVRLFlBQVYsS0FBMkIsUUFBbEM7UUFDSCxDQUZjLENBQWY7UUFJQSxJQUFJQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQixVQUFVOUIsSUFBVixFQUFnQjtVQUMzQyxPQUFPQSxJQUFJLENBQUN1QixJQUFMLENBQVVVLFdBQVYsS0FBMEJyRCxPQUFPLENBQUNFLGFBQVIsQ0FBc0JvRCx3QkFBdkQ7UUFDSCxDQUZjLENBQWY7O1FBSUEsSUFBR0wsUUFBUSxDQUFDbEMsTUFBVCxHQUFrQixDQUFyQixFQUF1QjtVQUNuQixJQUFJd0MsUUFBUSxHQUFHTixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlOLElBQVosQ0FBaUJhLE1BQWpCLENBQXdCZCxLQUF2QztVQUVBaEMsQ0FBQyxDQUFDSixJQUFGLENBQU9pRCxRQUFQLEVBQWlCLFVBQUNwQyxHQUFELEVBQU1YLE9BQU4sRUFBa0I7WUFDL0IsSUFBSWlELFFBQVEsR0FBR0YsUUFBUSxDQUFDcEMsR0FBRCxDQUFSLENBQWN3QixJQUFkLENBQW1CZSxLQUFsQztZQUFBLElBQ0lDLEtBQUssR0FBR0osUUFBUSxDQUFDcEMsR0FBRCxDQUFSLENBQWN3QixJQUFkLENBQW1CQyxRQUQvQjtZQUFBLElBRUlnQixjQUFjLEdBQUdMLFFBQVEsQ0FBQ3BDLEdBQUQsQ0FBUixDQUFjd0IsSUFBZCxDQUFtQmtCLFNBQW5CLENBQTZCOUMsTUFGbEQ7WUFBQSxJQUdJK0MsTUFBTSxHQUFHUCxRQUFRLENBQUNwQyxHQUFELENBQVIsQ0FBY3dCLElBQWQsQ0FBbUJrQixTQUFuQixDQUE2QixDQUE3QixDQUhiO1lBQUEsSUFJSUUsTUFBTSxHQUFHUixRQUFRLENBQUNwQyxHQUFELENBQVIsQ0FBY3dCLElBQWQsQ0FBbUJrQixTQUFuQixDQUE2QixDQUE3QixDQUpiO1lBQUEsSUFLSUcsTUFBTSxHQUFHVCxRQUFRLENBQUNwQyxHQUFELENBQVIsQ0FBY3dCLElBQWQsQ0FBbUJrQixTQUFuQixDQUE2QixDQUE3QixDQUxiO1lBQUEsSUFNSUksR0FBRyxHQUFHVixRQUFRLENBQUNwQyxHQUFELENBQVIsQ0FBY3dCLElBQWQsQ0FBbUJ1QixRQU43Qjs7WUFRQSxJQUFHTixjQUFjLElBQUksQ0FBckIsRUFBdUI7Y0FDbkJmLGlCQUFpQixDQUFDaEIsTUFBbEIsQ0FBeUIsOEVBQTRFOEIsS0FBNUUsR0FBa0Ysc0NBQWxGLEdBQXlIRixRQUF6SCxHQUFrSSx5R0FBbEksR0FBNE9BLFFBQTVPLEdBQXFQLGtDQUFyUCxHQUF3UkssTUFBeFIsR0FBK1IseUNBQS9SLEdBQXlVQyxNQUF6VSxHQUFnViwwQkFBelc7WUFDSCxDQUZELE1BRU8sSUFBR0gsY0FBYyxLQUFLLENBQXRCLEVBQXdCO2NBQzNCZixpQkFBaUIsQ0FBQ2hCLE1BQWxCLENBQXlCLDhFQUE0RThCLEtBQTVFLEdBQWtGLHNDQUFsRixHQUF5SEYsUUFBekgsR0FBa0kseUdBQWxJLEdBQTRPQSxRQUE1TyxHQUFxUCxrQ0FBclAsR0FBd1JLLE1BQXhSLEdBQStSLHlDQUEvUixHQUF5VUMsTUFBelUsR0FBZ1YseUNBQWhWLEdBQTBYQyxNQUExWCxHQUFpWSwwQkFBMVo7WUFDSCxDQUZNLE1BRUEsSUFBR0csT0FBTyxDQUFDTCxNQUFELENBQVYsRUFBbUI7Y0FDdEJqQixpQkFBaUIsQ0FBQ2hCLE1BQWxCLENBQXlCLDhFQUE0RThCLEtBQTVFLEdBQWtGLHNDQUFsRixHQUF5SEYsUUFBekgsR0FBa0ksNkVBQWxJLEdBQWdOQSxRQUFoTixHQUF5Tiw2QkFBek4sR0FBdVBLLE1BQXZQLEdBQThQLG1CQUF2UjtZQUNILENBRk0sTUFFQSxJQUFHSyxPQUFPLENBQUNGLEdBQUQsQ0FBVixFQUFnQjtjQUNuQnBCLGlCQUFpQixDQUFDaEIsTUFBbEIsQ0FBeUIsOEVBQTRFOEIsS0FBNUUsR0FBa0Ysc0NBQWxGLEdBQXlIRixRQUF6SCxHQUFrSSwrRUFBbEksR0FBa05BLFFBQWxOLEdBQTJOLGlDQUEzTixHQUE2UFEsR0FBN1AsR0FBaVEsb0JBQTFSO1lBQ0g7VUFDSixDQWxCRDtRQW1CSCxDQXRCRCxNQXNCTTtVQUNGcEIsaUJBQWlCLENBQUNwQixNQUFsQjtRQUNIOztRQUVELElBQUcyQixRQUFRLENBQUNyQyxNQUFULEdBQWtCLENBQXJCLEVBQXVCO1VBQ25CLElBQUcrQixnQkFBZ0IsQ0FBQy9CLE1BQWpCLEdBQTBCLENBQTdCLEVBQStCO1lBQzNCTyxlQUFlLENBQUNDLElBQWhCLENBQXFCLGtCQUFnQmQsU0FBaEIsR0FBMEIsRUFBL0MsRUFBbURvQixNQUFuRCxDQUEwRCx5RUFBdUU3QixPQUFPLENBQUNFLGFBQVIsQ0FBc0JrRSwyQkFBdEIsQ0FBa0R0RCxRQUFsRCxFQUF2RSxHQUFvSSxnQkFBOUw7VUFDSDtRQUNKOztRQUVELElBQUlzQyxRQUFRLENBQUNyQyxNQUFULElBQW1CLENBQXBCLElBQTJCa0MsUUFBUSxDQUFDbEMsTUFBVCxJQUFtQixDQUFqRCxFQUFvRDtVQUNoRE8sZUFBZSxDQUFDQyxJQUFoQixDQUFxQixrQkFBZ0JkLFNBQWhCLEdBQTBCLEVBQS9DLEVBQW1EZ0IsTUFBbkQ7UUFDSDtNQUNKLENBakREO0lBa0RILENBMUpzRDs7SUFDdkQsSUFBTU8sS0FBSyxHQUFHaEMsT0FBTyxDQUFDZ0MsS0FBdEI7SUFBQSxJQUNJVixlQUFlLEdBQUdaLENBQUMsQ0FBQyxNQUFJVCxPQUFMLENBRHZCO0lBQUEsSUFFSUksYUFBYSxHQUFHaUIsZUFBZSxDQUFDQyxJQUFoQixDQUFxQixPQUFyQixDQUZwQjtJQUdBLElBQUtYLElBQUksR0FBRyxFQUFaO0lBd0pBUixpQkFBaUI7RUFDcEI7QUFDSixDOzs7Ozs7Ozs7Ozs7QUNsS0RNLDBDQUFDLENBQUMsWUFBVTtFQUFDMkQsY0FBYyxDQUFDQyxJQUFmO0FBQXNCLENBQWxDLENBQUQ7QUFBcUMsSUFBSUQsY0FBYyxHQUFDO0VBQUNFLFFBQVEsRUFBQyxDQUFDLENBQVg7RUFBYUMsS0FBSyxFQUFDLEdBQW5CO0VBQXVCRixJQUFJLEVBQUMsZ0JBQVU7SUFBQyxPQUFPLEtBQUtHLElBQUwsQ0FBVSxNQUFWLEdBQWtCLEtBQUtDLE9BQUwsSUFBYyxLQUFLRCxJQUFMLENBQVUsZ0JBQVYsR0FBNEIsTUFBSyxLQUFLQyxPQUFMLEdBQWEsQ0FBQyxDQUFuQixDQUExQyxLQUFrRSxLQUFLQyxzQkFBTCxHQUE0QixZQUFVO01BQUMsT0FBT0MsTUFBTSxDQUFDQyxxQkFBUCxJQUE4QkQsTUFBTSxDQUFDRSwyQkFBckMsSUFBa0VGLE1BQU0sQ0FBQ0csd0JBQXpFLElBQW1HSCxNQUFNLENBQUNJLHNCQUExRyxJQUFrSUosTUFBTSxDQUFDSyx1QkFBekksSUFBa0ssVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7UUFBQ1AsTUFBTSxDQUFDUSxVQUFQLENBQWtCRixDQUFsQixFQUFvQixNQUFJLEVBQXhCO01BQTRCLENBQW5OO0lBQW9OLENBQS9OLEVBQTVCLEVBQThQLEtBQUssS0FBS0csU0FBTCxDQUFlLENBQUMsQ0FBaEIsQ0FBclUsQ0FBekI7RUFBa1gsQ0FBelo7RUFBMFpYLE9BQU8sRUFBQyxDQUFDLENBQW5hO0VBQXFhWSxXQUFXLEVBQUMsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxTQUFiLEVBQXVCLFNBQXZCLEVBQWlDLFNBQWpDLEVBQTJDLFFBQTNDLEVBQW9ELFFBQXBELEVBQTZELFFBQTdELEVBQXNFLE9BQXRFLENBQWpiO0VBQWdnQlgsc0JBQXNCLEVBQUMsSUFBdmhCO0VBQTRoQkYsSUFBSSxFQUFDLGNBQVNTLENBQVQsRUFBVztJQUFDLEtBQUtYLFFBQUwsSUFBZWdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFxQk4sQ0FBakMsQ0FBZjtFQUFtRCxDQUFobUI7RUFBaW1CRyxTQUFTLEVBQUMsbUJBQVNILENBQVQsRUFBVztJQUFDLElBQUlDLENBQUMsR0FBQ3pFLENBQUMsQ0FBQytFLFFBQUQsQ0FBRCxDQUFZQyxTQUFaLEVBQU47SUFBQSxJQUE4QkMsQ0FBQyxHQUFDakYsQ0FBQyxDQUFDa0UsTUFBRCxDQUFELENBQVVnQixNQUFWLEVBQWhDO0lBQW1ELEtBQUtuQixJQUFMLENBQVUsY0FBWVUsQ0FBdEIsR0FBeUJ6RSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkosSUFBckIsQ0FBMEJJLENBQUMsQ0FBQ21GLEtBQUYsQ0FBUSxVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYTtNQUFDLElBQUlDLENBQUMsR0FBQ3RGLENBQUMsQ0FBQ3FGLENBQUQsQ0FBUDtNQUFBLElBQVdFLENBQUMsR0FBQyxFQUFiO01BQUEsSUFBZ0JDLENBQUMsR0FBQyxDQUFDLENBQW5CO01BQUEsSUFBcUJDLENBQUMsR0FBQ0gsQ0FBQyxDQUFDckYsSUFBRixDQUFPLE9BQVAsQ0FBdkI7TUFBdUMsS0FBSyxDQUFMLElBQVF3RixDQUFSLEtBQVlBLENBQUMsR0FBQ0gsQ0FBQyxDQUFDcEUsSUFBRixDQUFPLE9BQVAsS0FBaUIsRUFBbkIsRUFBc0JvRSxDQUFDLENBQUNyRixJQUFGLENBQU8sT0FBUCxFQUFld0YsQ0FBZixDQUFsQztNQUFxRCxJQUFJQyxDQUFKO01BQUEsSUFBTUMsQ0FBQyxHQUFDLENBQUNMLENBQUMsQ0FBQ3JGLElBQUYsQ0FBTyxVQUFQLENBQUQsQ0FBUjs7TUFBNkIsS0FBSXlGLENBQUMsR0FBQyxDQUFOLEVBQVFKLENBQUMsQ0FBQ3JGLElBQUYsQ0FBTyxhQUFXeUYsQ0FBbEIsQ0FBUixFQUE2QkEsQ0FBQyxFQUE5QjtRQUFpQ0MsQ0FBQyxDQUFDeEYsSUFBRixDQUFPbUYsQ0FBQyxDQUFDckYsSUFBRixDQUFPLGNBQVl5RixDQUFuQixDQUFQO01BQWpDOztNQUErRCxJQUFJRSxDQUFDLEdBQUNELENBQUMsQ0FBQ3RGLE1BQVI7O01BQWUsS0FBSXFGLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ0UsQ0FBVixFQUFZRixDQUFDLEVBQWIsRUFBZ0I7UUFBQyxJQUFJRyxDQUFDLEdBQUNGLENBQUMsQ0FBQ0QsQ0FBRCxDQUFQO1FBQUEsSUFBV0ksQ0FBQyxHQUFDRCxDQUFDLENBQUMsYUFBRCxDQUFkO1FBQThCLEtBQUssQ0FBTCxJQUFRQyxDQUFSLEtBQVlBLENBQUMsR0FBQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFXaEcsQ0FBQyxDQUFDcUYsQ0FBRCxDQUFELENBQUtZLE1BQUwsR0FBY0MsR0FBZCxHQUFrQmpCLENBQTdCLENBQWQsR0FBK0NhLENBQUMsR0FBQyxJQUFFQSxDQUFuRDtRQUFxRCxJQUFJSyxDQUFDLEdBQUNOLENBQUMsQ0FBQ08sUUFBUjtRQUFBLElBQWlCQyxDQUFDLEdBQUNSLENBQUMsQ0FBQyxXQUFELENBQXBCO1FBQWtDLEtBQUssQ0FBTCxJQUFRTSxDQUFSLElBQVcsS0FBSyxDQUFMLElBQVFFLENBQW5CLEtBQXVCRixDQUFDLEdBQUNsQixDQUF6QixHQUE0QmtCLENBQUMsR0FBQ0osSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBRUcsQ0FBWCxFQUFhLENBQWIsQ0FBOUI7UUFBOEMsSUFBSUcsQ0FBQyxHQUFDVCxDQUFDLENBQUNVLE1BQVI7UUFBQSxJQUFlQyxDQUFDLEdBQUNYLENBQUMsQ0FBQyxlQUFELENBQWxCOztRQUFvQyxJQUFHLEtBQUssQ0FBTCxJQUFRUyxDQUFSLElBQVd0RyxDQUFDLENBQUN1RyxNQUFiLElBQXFCdkcsQ0FBQyxDQUFDdUcsTUFBRixDQUFTRCxDQUFULENBQXJCLEtBQW1DQSxDQUFDLEdBQUMsSUFBckMsR0FBMkMsS0FBSyxDQUFMLElBQVFFLENBQVIsSUFBV3hHLENBQUMsQ0FBQ3VHLE1BQWIsSUFBcUJ2RyxDQUFDLENBQUN1RyxNQUFGLENBQVNDLENBQVQsQ0FBckIsS0FBbUNBLENBQUMsR0FBQ0YsQ0FBckMsQ0FBM0MsRUFBbUZBLENBQXRGLEVBQXdGO1VBQUMsSUFBSUcsQ0FBQyxHQUFDWixDQUFDLENBQUNhLFFBQVI7VUFBaUIsS0FBSyxDQUFMLElBQVFELENBQVIsS0FBWUEsQ0FBQyxHQUFDTixDQUFkLEdBQWlCTSxDQUFDLEdBQUNWLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQUVTLENBQVgsRUFBYSxDQUFiLENBQW5CO1VBQW1DLElBQUlFLENBQUMsR0FBQ2QsQ0FBQyxDQUFDLGlCQUFELENBQVA7VUFBMkIsS0FBSyxDQUFMLElBQVFjLENBQVIsS0FBWUEsQ0FBQyxHQUFDRixDQUFkLEdBQWlCTixDQUFDLEdBQUMsQ0FBbkI7VUFBcUIsSUFBSVMsQ0FBQyxHQUFDdEIsQ0FBQyxDQUFDckYsSUFBRixDQUFPLGNBQVAsQ0FBTjtVQUE2QixLQUFLLENBQUwsSUFBUTJHLENBQVIsS0FBWUEsQ0FBQyxHQUFDLENBQWQ7UUFBaUI7O1FBQUEsS0FBSyxDQUFMLElBQVFQLENBQVIsS0FBWUEsQ0FBQyxHQUFDUCxDQUFDLEdBQUNLLENBQWhCLEdBQW1CRSxDQUFDLEdBQUMsSUFBRUEsQ0FBdkI7UUFBeUIsSUFBSVEsQ0FBQyxHQUFDaEIsQ0FBQyxDQUFDaUIsVUFBUjtRQUFtQixLQUFLLENBQUwsSUFBUUQsQ0FBUixLQUFZQSxDQUFDLEdBQUMsRUFBZCxHQUFrQkEsQ0FBQyxHQUFDLElBQUVBLENBQXRCLEVBQXdCLENBQUNyQyxDQUFDLElBQUUsS0FBR3FDLENBQVAsTUFBWUEsQ0FBQyxHQUFDLENBQWQsQ0FBeEIsRUFBeUNBLENBQUMsR0FBQyxJQUFFQSxDQUE3QztRQUErQyxJQUFJRSxDQUFDLEdBQUN0QyxDQUFOO1FBQVFzQyxDQUFDLEdBQUNoQixJQUFJLENBQUNDLEdBQUwsQ0FBU2UsQ0FBVCxFQUFXakIsQ0FBWCxDQUFGLEVBQWdCaUIsQ0FBQyxHQUFDaEIsSUFBSSxDQUFDaUIsR0FBTCxDQUFTRCxDQUFULEVBQVdWLENBQVgsQ0FBbEIsRUFBZ0NDLENBQUMsS0FBRyxLQUFLLENBQUwsSUFBUWhCLENBQUMsQ0FBQ3JGLElBQUYsQ0FBTyxNQUFQLENBQVIsSUFBd0JxRixDQUFDLENBQUNyRixJQUFGLENBQU8sTUFBUCxFQUFjLE1BQWQsQ0FBeEIsRUFBOEM4RyxDQUFDLEdBQUNqQixDQUFGLEtBQU0sVUFBUVIsQ0FBQyxDQUFDckYsSUFBRixDQUFPLE1BQVAsQ0FBUixJQUF3QjJHLENBQUMsR0FBQyxDQUFGLEVBQUl0QixDQUFDLENBQUNyRixJQUFGLENBQU8sTUFBUCxFQUFjLElBQWQsQ0FBNUIsSUFBaUQyRyxDQUFDLEVBQXhELENBQTlDLEVBQTBHRyxDQUFDLEdBQUNWLENBQUYsS0FBTSxRQUFNZixDQUFDLENBQUNyRixJQUFGLENBQU8sTUFBUCxDQUFOLElBQXNCMkcsQ0FBQyxHQUFDLENBQUYsRUFBSXRCLENBQUMsQ0FBQ3JGLElBQUYsQ0FBTyxNQUFQLEVBQWMsTUFBZCxDQUExQixJQUFpRDJHLENBQUMsRUFBeEQsQ0FBMUcsRUFBc0twQyxDQUFDLEtBQUdvQyxDQUFDLEdBQUNILENBQUwsQ0FBdkssRUFBK0tuQixDQUFDLENBQUNyRixJQUFGLENBQU8sY0FBUCxFQUFzQjJHLENBQXRCLENBQWxMLENBQWpDLEVBQTZPLEtBQUtoQyxXQUFMLENBQWlCcUMsR0FBakIsQ0FBcUJqSCxDQUFDLENBQUNtRixLQUFGLENBQVEsVUFBU1gsQ0FBVCxFQUFXO1VBQUMsSUFBSUMsQ0FBQyxHQUFDLENBQU47VUFBQSxJQUFRUSxDQUFDLEdBQUNZLENBQUMsQ0FBQ3JCLENBQUQsQ0FBWDs7VUFBZSxJQUFHLEtBQUssQ0FBTCxJQUFRUyxDQUFYLEVBQWE7WUFBQyxXQUFTVCxDQUFULElBQVksWUFBVUEsQ0FBdEIsSUFBeUIsWUFBVUEsQ0FBbkMsSUFBc0MsWUFBVUEsQ0FBaEQsR0FBa0RDLENBQUMsR0FBQyxDQUFwRCxHQUFzRFEsQ0FBQyxHQUFDLElBQUVBLENBQTFEO1lBQTRELElBQUlHLENBQUMsR0FBQ0UsQ0FBQyxDQUFDckYsSUFBRixDQUFPLE1BQUl1RSxDQUFYLENBQU47WUFBb0IsS0FBSyxDQUFMLElBQVFZLENBQVIsS0FBWUEsQ0FBQyxHQUFDWCxDQUFkO1lBQWlCLElBQUlZLENBQUMsR0FBQyxDQUFDSixDQUFDLEdBQUNSLENBQUgsS0FBTyxDQUFDc0MsQ0FBQyxHQUFDakIsQ0FBSCxLQUFPTyxDQUFDLEdBQUNQLENBQVQsQ0FBUCxJQUFvQnJCLENBQTFCO1lBQUEsSUFBNEJnQixDQUFDLEdBQUNMLENBQUMsR0FBQyxDQUFDQyxDQUFDLEdBQUNELENBQUgsSUFBTXlCLENBQXRDOztZQUF3QyxJQUFHUCxDQUFDLElBQUVNLENBQUMsR0FBQyxDQUFMLElBQVFBLENBQUMsSUFBRUgsQ0FBZCxFQUFnQjtjQUFDLElBQUlkLENBQUMsR0FBQ2xCLENBQU47Y0FBUSxVQUFRYSxDQUFDLENBQUNyRixJQUFGLENBQU8sTUFBUCxDQUFSLEtBQXlCMEYsQ0FBQyxHQUFDVixDQUFGLEVBQUlBLENBQUMsR0FBQyxDQUFDQSxDQUFQLEVBQVNxQixDQUFDLEdBQUNFLENBQVgsRUFBYUMsQ0FBQyxHQUFDRSxDQUF4QyxHQUEyQ2xCLENBQUMsR0FBQ3pGLENBQUMsQ0FBQ3VHLE1BQUYsQ0FBU0QsQ0FBVCxFQUFZLElBQVosRUFBaUJNLENBQWpCLEVBQW1CakIsQ0FBbkIsRUFBcUJWLENBQXJCLEVBQXVCd0IsQ0FBdkIsQ0FBN0M7WUFBdUU7O1lBQUFoQixDQUFDLEdBQUNNLElBQUksQ0FBQ21CLElBQUwsQ0FBVXpCLENBQUMsR0FBQyxLQUFLM0IsS0FBakIsSUFBd0IsS0FBS0EsS0FBL0IsRUFBcUMyQixDQUFDLElBQUVMLENBQUgsSUFBTUMsQ0FBQyxJQUFFSixDQUFULEtBQWFRLENBQUMsR0FBQ1IsQ0FBZixDQUFyQyxFQUF1RE0sQ0FBQyxDQUFDZixDQUFELENBQUQsS0FBT2UsQ0FBQyxDQUFDZixDQUFELENBQUQsR0FBSyxDQUFaLENBQXZELEVBQXNFZSxDQUFDLENBQUNmLENBQUQsQ0FBRCxJQUFNaUIsQ0FBNUUsRUFBOEVMLENBQUMsSUFBRUcsQ0FBQyxDQUFDZixDQUFELENBQUosS0FBVWMsQ0FBQyxDQUFDckYsSUFBRixDQUFPLE1BQUl1RSxDQUFYLEVBQWFlLENBQUMsQ0FBQ2YsQ0FBRCxDQUFkLEdBQW1CZ0IsQ0FBQyxHQUFDLENBQUMsQ0FBaEMsQ0FBOUU7VUFBaUg7UUFBQyxDQUE1WSxFQUE2WSxJQUE3WSxDQUFyQixDQUE3TztNQUFzcEI7O01BQUEsSUFBR0EsQ0FBSCxFQUFLO1FBQUMsSUFBRyxLQUFLLENBQUwsSUFBUUQsQ0FBQyxDQUFDNEIsQ0FBYixFQUFlO1VBQUMsSUFBSUMsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDd0IsV0FBUjtVQUFvQixLQUFLLENBQUwsSUFBUUQsQ0FBUixLQUFZQSxDQUFDLEdBQUMsR0FBZDtVQUFtQixJQUFJRSxDQUFDLEdBQUNoQyxDQUFDLENBQUNpQyxNQUFGLEVBQU47VUFBaUJELENBQUMsQ0FBQ3JILElBQUYsQ0FBTyxPQUFQLEtBQWlCcUgsQ0FBQyxDQUFDckgsSUFBRixDQUFPLE9BQVAsRUFBZXFILENBQUMsQ0FBQ3BHLElBQUYsQ0FBTyxPQUFQLEtBQWlCLEVBQWhDLENBQWpCLEVBQXFEb0csQ0FBQyxDQUFDcEcsSUFBRixDQUFPLE9BQVAsRUFBZSxpQkFBZWtHLENBQWYsR0FBaUIsMEJBQWpCLEdBQTRDQSxDQUE1QyxHQUE4QyxNQUE5QyxHQUFxREUsQ0FBQyxDQUFDckgsSUFBRixDQUFPLE9BQVAsQ0FBcEUsQ0FBckQ7UUFBMEk7O1FBQUEsS0FBSyxDQUFMLElBQVFzRixDQUFDLENBQUNpQyxNQUFWLEtBQW1CakMsQ0FBQyxDQUFDaUMsTUFBRixHQUFTLENBQTVCLEdBQStCLEtBQUssQ0FBTCxJQUFRakMsQ0FBQyxDQUFDa0MsTUFBVixLQUFtQmxDLENBQUMsQ0FBQ2tDLE1BQUYsR0FBUyxDQUE1QixDQUEvQixFQUE4RCxLQUFLLENBQUwsSUFBUWxDLENBQUMsQ0FBQ21DLE1BQVYsS0FBbUJuQyxDQUFDLENBQUNtQyxNQUFGLEdBQVMsQ0FBNUIsQ0FBOUQsRUFBNkYsS0FBSyxDQUFMLElBQVFuQyxDQUFDLENBQUNvQyxLQUFWLEtBQWtCcEMsQ0FBQyxDQUFDaUMsTUFBRixJQUFVakMsQ0FBQyxDQUFDb0MsS0FBWixFQUFrQnBDLENBQUMsQ0FBQ2tDLE1BQUYsSUFBVWxDLENBQUMsQ0FBQ29DLEtBQTlCLEVBQW9DcEMsQ0FBQyxDQUFDbUMsTUFBRixJQUFVbkMsQ0FBQyxDQUFDb0MsS0FBbEUsQ0FBN0Y7UUFBc0ssSUFBSVIsQ0FBQyxHQUFDLGtCQUFnQjVCLENBQUMsQ0FBQzZCLENBQUYsR0FBSTdCLENBQUMsQ0FBQzZCLENBQU4sR0FBUSxDQUF4QixJQUEyQixNQUEzQixJQUFtQzdCLENBQUMsQ0FBQytCLENBQUYsR0FBSS9CLENBQUMsQ0FBQytCLENBQU4sR0FBUSxDQUEzQyxJQUE4QyxNQUE5QyxJQUFzRC9CLENBQUMsQ0FBQzRCLENBQUYsR0FBSTVCLENBQUMsQ0FBQzRCLENBQU4sR0FBUSxDQUE5RCxJQUFpRSxLQUF2RTtRQUFBLElBQTZFUyxDQUFDLEdBQUMsY0FBWXJDLENBQUMsQ0FBQ3NDLE9BQUYsR0FBVXRDLENBQUMsQ0FBQ3NDLE9BQVosR0FBb0IsQ0FBaEMsSUFBbUMsZUFBbkMsSUFBb0R0QyxDQUFDLENBQUN1QyxPQUFGLEdBQVV2QyxDQUFDLENBQUN1QyxPQUFaLEdBQW9CLENBQXhFLElBQTJFLGVBQTNFLElBQTRGdkMsQ0FBQyxDQUFDd0MsT0FBRixHQUFVeEMsQ0FBQyxDQUFDd0MsT0FBWixHQUFvQixDQUFoSCxJQUFtSCxNQUFsTTtRQUFBLElBQXlNQyxDQUFDLEdBQUMsWUFBVXpDLENBQUMsQ0FBQ2lDLE1BQVosR0FBbUIsV0FBbkIsR0FBK0JqQyxDQUFDLENBQUNrQyxNQUFqQyxHQUF3QyxXQUF4QyxHQUFvRGxDLENBQUMsQ0FBQ21DLE1BQXRELEdBQTZELEdBQXhRO1FBQUEsSUFBNFFPLENBQUMsR0FBQ2QsQ0FBQyxHQUFDLEdBQUYsR0FBTVMsQ0FBTixHQUFRLEdBQVIsR0FBWUksQ0FBWixHQUFjLEdBQTVSO1FBQWdTLEtBQUtqRSxJQUFMLENBQVVrRSxDQUFWLEdBQWEzQyxDQUFDLENBQUNwRSxJQUFGLENBQU8sT0FBUCxFQUFlLGVBQWErRyxDQUFiLEdBQWUscUJBQWYsR0FBcUNBLENBQXJDLEdBQXVDLEdBQXZDLEdBQTJDeEMsQ0FBMUQsQ0FBYjtNQUEwRTtJQUFDLENBQWxvRSxFQUFtb0UsSUFBbm9FLENBQTFCLENBQXpCLEVBQTZyRXZCLE1BQU0sQ0FBQ0MscUJBQVAsR0FBNkJELE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkJuRSxDQUFDLENBQUNtRixLQUFGLENBQVEsS0FBS1IsU0FBYixFQUF1QixJQUF2QixFQUE0QixDQUFDLENBQTdCLENBQTdCLENBQTdCLEdBQTJGLEtBQUtWLHNCQUFMLENBQTRCakUsQ0FBQyxDQUFDbUYsS0FBRixDQUFRLEtBQUtSLFNBQWIsRUFBdUIsSUFBdkIsRUFBNEIsQ0FBQyxDQUE3QixDQUE1QixDQUF4eEU7RUFBcTFFO0FBQS8vRixDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCdUQsSTs7O0VBQ2pCLGNBQVk1SSxPQUFaLEVBQXFCO0lBQUEsT0FDakIsd0JBQU1BLE9BQU4sQ0FEaUI7RUFFcEI7Ozs7U0FFRDZJLE8sR0FBQSxtQkFBVTtJQUNOLEtBQUtDLHFCQUFMO0lBQ0EsS0FBS0MsWUFBTDtJQUNBLEtBQUtDLHFCQUFMO0lBQ0EsS0FBS0Msd0JBQUw7SUFDQSxLQUFLQywrQkFBTDtJQUNBLEtBQUtDLG1CQUFMO0lBQ0EsS0FBS0MsVUFBTDtJQUNBLEtBQUtDLGdCQUFMO0lBQ0EsS0FBS0Msa0JBQUw7SUFDQSxLQUFLQyxrQkFBTDtJQUNBLEtBQUtDLHdCQUFMO0lBQ0EsS0FBS0Msc0JBQUw7SUFDQSxLQUFLQyxzQkFBTDtFQUNILEM7O1NBRURaLHFCLEdBQUEsaUNBQXdCO0lBQ3BCcEksQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJKLElBQTdCLENBQWtDLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtNQUNsREUsQ0FBQyxDQUFDRixPQUFELENBQUQsQ0FBV21KLE9BQVgsQ0FBbUIsY0FBbkIsRUFBbUNDLFFBQW5DLENBQTRDLGdCQUE1QztNQUVBLElBQUlDLFNBQVMsR0FBR25KLENBQUMsQ0FBQ0YsT0FBRCxDQUFELENBQVdHLElBQVgsQ0FBZ0Isb0JBQWhCLENBQWhCO01BQUEsSUFDSW1KLGFBQWEsR0FBRyxJQUFJQyxJQUFKLENBQVNGLFNBQVQsRUFBb0JHLE9BQXBCLEVBRHBCO01BQUEsSUFFSUMsSUFBSSxHQUFHdkosQ0FBQyxDQUFDRixPQUFELENBRlo7TUFJQSxJQUFJMEosaUJBQWlCLEdBQUdDLFdBQVcsQ0FBQyxZQUFXO1FBQzNDLElBQUlDLEdBQUcsR0FBRyxJQUFJTCxJQUFKLEdBQVdDLE9BQVgsRUFBVjtRQUFBLElBQ0FsRCxRQUFRLEdBQUdnRCxhQUFhLEdBQUdNLEdBRDNCOztRQUdBLElBQUl0RCxRQUFRLEdBQUcsQ0FBZixFQUFrQjtVQUNkdUQsYUFBYSxDQUFDSCxpQkFBRCxDQUFiO1VBQ0FELElBQUksQ0FBQ0ssSUFBTCxDQUFVLEVBQVY7UUFDSCxDQUhELE1BR087VUFDSCxJQUFJQyxJQUFJLEdBQUc5RCxJQUFJLENBQUMrRCxLQUFMLENBQVcxRCxRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFuQixDQUFYO1VBQUEsSUFDSTJELEtBQUssR0FBR2hFLElBQUksQ0FBQytELEtBQUwsQ0FBWTFELFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVQsSUFBc0MsT0FBTyxFQUFQLEdBQVksRUFBbEQsQ0FBWCxDQURaO1VBQUEsSUFFSTRELE9BQU8sR0FBR2pFLElBQUksQ0FBQytELEtBQUwsQ0FBWTFELFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFULElBQWlDLE9BQU8sRUFBeEMsQ0FBWCxDQUZkO1VBQUEsSUFHSTZELE9BQU8sR0FBR2xFLElBQUksQ0FBQytELEtBQUwsQ0FBWTFELFFBQVEsSUFBSSxPQUFPLEVBQVgsQ0FBVCxHQUEyQixJQUF0QyxDQUhkO1VBS0EsSUFBSThELFlBQVksR0FBRyx1QkFBcUJMLElBQXJCLEdBQTBCLDRDQUExQixHQUF1RUUsS0FBdkUsR0FBNkUsNkNBQTdFLEdBQTJIQyxPQUEzSCxHQUFtSSw0Q0FBbkksR0FBZ0xDLE9BQWhMLEdBQXdMLDBCQUEzTTtVQUVBVixJQUFJLENBQUNLLElBQUwsQ0FBVU0sWUFBVjtRQUNIO01BQ0osQ0FqQmtDLEVBaUJoQyxJQWpCZ0MsQ0FBbkM7SUFrQkgsQ0F6QkQ7RUEwQkgsQzs7U0FFRDdCLFksR0FBQSx3QkFBYztJQUNWLElBQU04QixVQUFVLEdBQUduSyxDQUFDLENBQUMsc0JBQUQsQ0FBcEI7SUFDQSxJQUFNb0ssZUFBZSxHQUFHcEssQ0FBQyxDQUFDLHFDQUFELENBQXpCO0lBQ0FtSyxVQUFVLENBQUNFLEtBQVgsQ0FBaUI7TUFDYkMsSUFBSSxFQUFFLElBRE87TUFFYkMsTUFBTSxFQUFFLEtBRks7TUFHYkMsV0FBVyxFQUFFLElBSEE7TUFJYkMsWUFBWSxFQUFFLENBSkQ7TUFLYkMsY0FBYyxFQUFFLENBTEg7TUFNYkMsUUFBUSxFQUFFLEtBTkc7TUFPYkMsYUFBYSxFQUFFVCxVQUFVLENBQUNsSyxJQUFYLENBQWdCLFVBQWhCLENBUEY7TUFRYjRLLFFBQVEsRUFBRSxJQVJHO01BU2JDLFFBQVEsRUFBRTtJQVRHLENBQWpCLEVBSFUsQ0FjVjs7SUFDQTlLLENBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDSixJQUF6QyxDQUE4QyxVQUFTNkYsQ0FBVCxFQUFXO01BQ3JELElBQUlzRixLQUFLLEdBQUcvSyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLElBQVIsQ0FBYSxRQUFiLEVBQXVCbUssSUFBdkIsRUFBWjtNQUNBaEwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxJQUFSLENBQWEsUUFBYixFQUF1Qm1LLElBQXZCLENBQTRCLE1BQU1ELEtBQWxDLEVBQXlDN0IsUUFBekMsQ0FBa0QsaUJBQWxEO0lBQ0gsQ0FIRDtJQUtBaUIsVUFBVSxDQUFDYyxFQUFYLENBQWMsYUFBZCxFQUE2QixVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0IxRixDQUFoQixFQUFzQjtNQUMvQyxJQUFJMkYsR0FBRyxHQUFHcEwsQ0FBQyxDQUFDbUwsTUFBTSxDQUFDRSxPQUFQLENBQWU1RixDQUFmLENBQUQsQ0FBRCxDQUFxQjVFLElBQXJCLENBQTBCLG9CQUExQixFQUFnRFosSUFBaEQsQ0FBcUQsVUFBckQsQ0FBVjs7TUFFQSxJQUFHbUwsR0FBRyxLQUFLLE9BQVgsRUFBbUI7UUFDZmpCLFVBQVUsQ0FBQ21CLFdBQVgsQ0FBdUIseUJBQXZCLEVBQWtEcEMsUUFBbEQsQ0FBMkQsMEJBQTNEO01BQ0gsQ0FGRCxNQUVNO1FBQ0ZpQixVQUFVLENBQUNtQixXQUFYLENBQXVCLDBCQUF2QixFQUFtRHBDLFFBQW5ELENBQTRELHlCQUE1RDtNQUNIO0lBQ0osQ0FSRDs7SUFVQSxJQUFJbEosQ0FBQyxDQUFDLHVGQUFELENBQUQsQ0FBMkZLLE1BQS9GLEVBQXVHO01BQ25HOEosVUFBVSxDQUFDbUIsV0FBWCxDQUF1Qix5QkFBdkIsRUFBa0RwQyxRQUFsRCxDQUEyRCwwQkFBM0Q7SUFDSDtFQUNKLEM7O1NBRURaLHFCLEdBQUEsaUNBQXVCO0lBQ25CLElBQU1oSixPQUFPLEdBQUcsS0FBS0EsT0FBckI7SUFFQSxJQUFNaU0sT0FBTyxHQUFHO01BQ1pDLFFBQVEsRUFBRTtJQURFLENBQWhCOztJQUlBLElBQUd4TCxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0ssTUFBbkMsR0FBNEMsQ0FBL0MsRUFBaUQ7TUFDN0MsSUFBS29MLGFBQWEsR0FBR3pMLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWtGLE1BQWIsRUFBckI7TUFFQWxGLENBQUMsQ0FBQ2tFLE1BQUQsQ0FBRCxDQUFVK0csRUFBVixDQUFhLGFBQWIsRUFBNEIsWUFBVztRQUNuQyxJQUFJUyxNQUFNLEdBQUcxTCxDQUFDLENBQUNrRSxNQUFELENBQUQsQ0FBVWMsU0FBVixFQUFiO1FBQUEsSUFDSTJHLE9BQU8sR0FBRyxLQURkOztRQUdBLElBQUlELE1BQU0sR0FBR0QsYUFBYixFQUE0QjtVQUN4QkUsT0FBTyxHQUFHLElBQVY7UUFDSDs7UUFFRCxJQUFHQSxPQUFILEVBQVc7VUFDUDNMLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DSixJQUFuQyxDQUF3QyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7WUFDeEQsSUFBSThMLElBQUksR0FBRzVMLENBQUMsQ0FBQ0YsT0FBRCxDQUFELENBQVdlLElBQVgsQ0FBZ0Isa0JBQWhCLENBQVg7WUFBQSxJQUNJZ0wsS0FBSyxHQUFHN0wsQ0FBQyxDQUFDRixPQUFELENBQUQsQ0FBV0csSUFBWCxDQUFnQixlQUFoQixDQURaO1lBQUEsSUFFSTZMLE1BQU0sR0FBRzlMLENBQUMsQ0FBQ0YsT0FBRCxDQUFELENBQVdHLElBQVgsQ0FBZ0IsY0FBaEIsQ0FGYjtZQUFBLElBR0k4TCxPQUFPLEdBQUcvTCxDQUFDLENBQUNGLE9BQUQsQ0FBRCxDQUFXb0IsSUFBWCxDQUFnQixJQUFoQixDQUhkOztZQUtBLElBQUcsQ0FBQ2xCLENBQUMsQ0FBQyxzQkFBb0I2TCxLQUFwQixHQUEwQiwwQ0FBM0IsQ0FBRCxDQUF3RXhMLE1BQTVFLEVBQW1GO2NBQy9FMkwsWUFBWSxDQUFDSCxLQUFELEVBQVFDLE1BQVIsRUFBZ0JQLE9BQWhCLEVBQXlCSyxJQUF6QixFQUErQkcsT0FBL0IsQ0FBWjtZQUNIO1VBQ0osQ0FURDtVQVdBSixPQUFPLEdBQUcsS0FBVjtRQUNIO01BQ0osQ0F0QkQ7SUF1Qkg7O0lBRUQsU0FBU0ssWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEJDLEdBQTFCLEVBQStCQyxNQUEvQixFQUF1Q1AsSUFBdkMsRUFBNkNHLE9BQTdDLEVBQXFEO01BQ2pESyxrRUFBSyxDQUFDQyxHQUFOLENBQVVDLE9BQVYsQ0FBa0JKLEdBQWxCLEVBQXVCQyxNQUF2QixFQUErQixVQUFDSSxHQUFELEVBQU1DLFFBQU4sRUFBbUI7UUFDOUMsSUFBRyxDQUFDWixJQUFJLENBQUMvSyxJQUFMLENBQVUsd0JBQVYsRUFBb0NSLE1BQXhDLEVBQStDO1VBQzNDdUwsSUFBSSxDQUFDaEMsSUFBTCxDQUFVNEMsUUFBVjtVQUNBQyxhQUFhLENBQUNiLElBQUQsQ0FBYjtVQUNBQSxJQUFJLENBQUMzQyxPQUFMLENBQWEsK0JBQWIsRUFBOENwSSxJQUE5QyxDQUFtRCxpQkFBbkQsRUFBc0VFLE1BQXRFO1VBRUEyTCx1RkFBYSxDQUFDcE4sT0FBRCxFQUFVeU0sT0FBVixDQUFiO1FBQ0g7TUFDSixDQVJEO0lBU0g7O0lBRUQsU0FBU1UsYUFBVCxDQUF1QmIsSUFBdkIsRUFBNEI7TUFDeEJBLElBQUksQ0FBQ3ZCLEtBQUwsQ0FBVztRQUNQQyxJQUFJLEVBQUUsSUFEQztRQUVQQyxNQUFNLEVBQUUsS0FGRDtRQUdQTSxRQUFRLEVBQUUsS0FISDtRQUlQTCxXQUFXLEVBQUUsSUFKTjtRQUtQQyxZQUFZLEVBQUUsQ0FMUDtRQU1QQyxjQUFjLEVBQUUsQ0FOVDtRQU9QaUMsU0FBUyxFQUFFLDhIQVBKO1FBUVBDLFNBQVMsRUFBRSxrSUFSSjtRQVNQQyxVQUFVLEVBQUUsQ0FDWjtVQUNJQyxVQUFVLEVBQUUsSUFEaEI7VUFFSUMsUUFBUSxFQUFFO1lBQ054QyxNQUFNLEVBQUUsSUFERjtZQUVORSxZQUFZLEVBQUV1QyxRQUFRLENBQUMxTixPQUFPLENBQUNFLGFBQVIsQ0FBc0J5TixzQkFBdkI7VUFGaEI7UUFGZCxDQURZLEVBUVo7VUFDSUgsVUFBVSxFQUFFLEdBRGhCO1VBRUlDLFFBQVEsRUFBRTtZQUNOdEMsWUFBWSxFQUFFdUMsUUFBUSxDQUFDMU4sT0FBTyxDQUFDRSxhQUFSLENBQXNCeU4sc0JBQXZCLENBQVIsR0FBeUQ7VUFEakU7UUFGZCxDQVJZLEVBY1o7VUFDSUgsVUFBVSxFQUFFLEdBRGhCO1VBRUlDLFFBQVEsRUFBRTtZQUNOdEMsWUFBWSxFQUFFdUMsUUFBUSxDQUFDMU4sT0FBTyxDQUFDRSxhQUFSLENBQXNCeU4sc0JBQXZCLENBQVIsR0FBeUQ7VUFEakU7UUFGZCxDQWRZO01BVEwsQ0FBWDtJQThCSDtFQUNKLEM7O1NBRUQxRSx3QixHQUFBLG9DQUEwQjtJQUN0QixJQUFNakosT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0lBRUEsSUFBTWlNLE9BQU8sR0FBRztNQUNaQyxRQUFRLEVBQUU7SUFERSxDQUFoQjs7SUFHQSxJQUFHeEwsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJLLE1BQTNCLEdBQW9DLENBQXZDLEVBQXlDO01BQ3JDLElBQUcsQ0FBQ0wsQ0FBQyxDQUFDLHNGQUFELENBQUQsQ0FBMEZLLE1BQTlGLEVBQXFHO1FBQ2pHNk0sS0FBSyxDQUFDQyxJQUFOLENBQVduTixDQUFDLENBQUMsd0JBQUQsQ0FBWixFQUF3Q29OLE9BQXhDLENBQWdELFVBQUMxTSxJQUFELEVBQVU7VUFDdEQsSUFBSTJNLFFBQVEsR0FBR3JOLENBQUMsQ0FBQ1UsSUFBRCxDQUFoQjtVQUNBLElBQUk0TSxLQUFLLEdBQUdELFFBQVo7VUFBQSxJQUNBekIsSUFBSSxHQUFHMEIsS0FBSyxDQUFDek0sSUFBTixDQUFXLGtCQUFYLENBRFA7VUFBQSxJQUVBZ0wsS0FBSyxHQUFHeUIsS0FBSyxDQUFDck4sSUFBTixDQUFXLGlCQUFYLENBRlI7VUFBQSxJQUdBNkwsTUFBTSxHQUFHd0IsS0FBSyxDQUFDck4sSUFBTixDQUFXLGtCQUFYLENBSFQ7VUFBQSxJQUlBOEwsT0FBTyxHQUFHdUIsS0FBSyxDQUFDcE0sSUFBTixDQUFXLElBQVgsQ0FKVjs7VUFNQSxJQUFJNEssTUFBTSxDQUFDeUIsUUFBUCxDQUFnQixNQUFoQixDQUFKLEVBQTZCO1lBQ3pCLElBQUlDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRixRQUFkLENBQXVCLHVCQUF2QixDQUFKLEVBQXFEO2NBQ2pEekIsTUFBTSxHQUFHQSxNQUFNLENBQUM0QixPQUFQLENBQWUsc0JBQWYsRUFBc0MseUJBQXRDLENBQVQ7WUFDSDtVQUNKOztVQUNMLElBQUcsQ0FBQzFOLENBQUMsQ0FBQyxzRkFBRCxDQUFELENBQTBGSyxNQUE5RixFQUFxRztZQUNqR2lOLEtBQUssQ0FBQ3pNLElBQU4sQ0FBVyxpQkFBWCxFQUE4QjhNLElBQTlCO1lBQ0EzQixZQUFZLENBQUNILEtBQUQsRUFBUUMsTUFBUixFQUFnQlAsT0FBaEIsRUFBeUJLLElBQXpCLEVBQStCRyxPQUEvQixDQUFaO1VBQ0g7UUFDQSxDQWpCRDtNQWtCSDtJQUNKOztJQUVELFNBQVM2QixVQUFULENBQW9CeEcsQ0FBcEIsRUFBdUI7TUFDbkIsSUFBSXlHLEtBQUssR0FBRzlJLFFBQVEsQ0FBQytJLGdCQUFULENBQTBCLGNBQTFCLENBQVo7TUFFQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDtNQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNSN08sS0FBSyxDQUFDLGtHQUFELENBQUwsQ0FBMEdtQixJQUExRyxDQUErRyxVQUFBaUcsQ0FBQztRQUFBLE9BQUlBLENBQUMsQ0FBQzVFLElBQUYsRUFBSjtNQUFBLENBQWhILEVBQThIckIsSUFBOUgsQ0FBbUksVUFBQWlHLENBQUMsRUFBRTtRQUVwSHVILE9BQU8sQ0FBQzVOLElBQVIsT0FBQTROLE9BQU8sRUFBU3ZILENBQVQsQ0FBUDtNQUFtQixDQUZyQyxDQURRLEVBSVJwSCxLQUFLLENBQUMsMkdBQUQsQ0FBTCxDQUFtSG1CLElBQW5ILENBQXdILFVBQUFpRyxDQUFDO1FBQUEsT0FBSUEsQ0FBQyxDQUFDNUUsSUFBRixFQUFKO01BQUEsQ0FBekgsRUFBdUlyQixJQUF2SSxDQUE0SSxVQUFBaUcsQ0FBQyxFQUFFO1FBRTdIdUgsT0FBTyxDQUFDNU4sSUFBUixPQUFBNE4sT0FBTyxFQUFTdkgsQ0FBVCxDQUFQO01BQW1CLENBRnJDLENBSlEsRUFPUnBILEtBQUssQ0FBQyw0R0FBRCxDQUFMLENBQW9IbUIsSUFBcEgsQ0FBeUgsVUFBQWlHLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUM1RSxJQUFGLEVBQUo7TUFBQSxDQUExSCxFQUF3SXJCLElBQXhJLENBQTZJLFVBQUFpRyxDQUFDLEVBQUU7UUFFOUh1SCxPQUFPLENBQUM1TixJQUFSLE9BQUE0TixPQUFPLEVBQVN2SCxDQUFULENBQVA7TUFBbUIsQ0FGckMsQ0FQUSxFQVVScEgsS0FBSyxDQUFDLDRHQUFELENBQUwsQ0FBb0htQixJQUFwSCxDQUF5SCxVQUFBaUcsQ0FBQztRQUFBLE9BQUlBLENBQUMsQ0FBQzVFLElBQUYsRUFBSjtNQUFBLENBQTFILEVBQXdJckIsSUFBeEksQ0FBNkksVUFBQWlHLENBQUMsRUFBRTtRQUU5SHVILE9BQU8sQ0FBQzVOLElBQVIsT0FBQTROLE9BQU8sRUFBU3ZILENBQVQsQ0FBUDtNQUFtQixDQUZyQyxDQVZRLENBQVosRUFjR2pHLElBZEgsQ0FjUSxVQUFDaUcsQ0FBRCxFQUFPO1FBQ1hxSCxLQUFLLENBQUNULE9BQU4sQ0FBYyxVQUFDYyxLQUFELEVBQVc7VUFDckJsTyxDQUFDLENBQUNrTyxLQUFLLENBQUNDLGtCQUFQLENBQUQsQ0FBNEJDLEtBQTVCO1VBRUEsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7VUFFQSxJQUFNQyxJQUFJLEdBQUdQLE9BQU8sQ0FBQ3ZMLE1BQVIsQ0FBZSxVQUFBOUIsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQyxhQUFELENBQUosS0FBd0J3TixLQUFLLENBQUNLLFNBQWxDO1VBQUEsQ0FBbkIsQ0FBYjtVQUNBRCxJQUFJLENBQUNsQixPQUFMLENBQWEsVUFBQ29CLElBQUQsRUFBVTtZQUNuQkgsT0FBTyxDQUFDbE8sSUFBUixDQUFhcU8sSUFBSSxDQUFDLGFBQUQsQ0FBakI7VUFDSCxDQUZEO1VBR0EsSUFBTUMsU0FBUyxHQUFHMUksSUFBSSxDQUFDakMsS0FBTCxDQUFZdUssT0FBTyxDQUFDSyxNQUFSLENBQWUsVUFBQ2xLLENBQUQsRUFBR0MsQ0FBSDtZQUFBLE9BQVVELENBQUMsR0FBRUMsQ0FBYjtVQUFBLENBQWYsRUFBK0IsQ0FBL0IsSUFBa0M0SixPQUFPLENBQUNoTyxNQUEzQyxHQUFxRCxFQUFoRSxJQUFvRSxFQUF0RjtVQUVBTCxDQUFDLENBQUNrTyxLQUFLLENBQUNDLGtCQUFQLENBQUQsQ0FBNEJoTixNQUE1QixDQUFtQywrOUJBNEJULE9BQU9zTixTQUFQLEdBQWtCLFVBQWxCLEdBQThCLFlBNUJyQixrRUE2QlQsT0FBT0EsU0FBUCxHQUFrQixVQUFsQixHQUE4QixZQTdCckIsa0VBOEJULE9BQU9BLFNBQVAsR0FBa0IsVUFBbEIsR0FBOEIsWUE5QnJCLGtFQStCVCxPQUFPQSxTQUFQLEdBQWtCLFVBQWxCLEdBQThCLFlBL0JyQixrRUFnQ1QsT0FBT0EsU0FBUCxHQUFrQixVQUFsQixHQUE4QixZQWhDckIsd0hBbUNqQ0osT0FBTyxDQUFDaE8sTUFuQ3lCLDJDQUFuQyxFQVhxQixDQWdEckI7UUFDSCxDQWpERDtNQW1ERCxDQWxFSCxFQXFFR3NPLEtBckVILENBcUVTLFVBQUNwQyxHQUFELEVBQVM7UUFDWjFILE9BQU8sQ0FBQ0MsR0FBUixDQUFZeUgsR0FBWjtNQUNILENBdkVIO0lBd0VILENBekdxQixDQTBHMUI7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBR0E7SUFDQTtJQUNBO0lBQ0E7OztJQUNJLFNBQVNQLFlBQVQsQ0FBc0JDLEVBQXRCLEVBQTBC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LGFBQWEsQ0FBQ3JTLElBQWQsQ0FBbUIsd0JBQXNCMFMsY0FBdEIsR0FBcUMsR0FBeEQsRUFBNkRULEdBQTdELENBQWlFLFNBQWpFLEVBQTRFLGNBQTVFOztVQUVBLElBQUlJLGFBQWEsQ0FBQ3JTLElBQWQsQ0FBbUIsaUJBQW5CLEVBQXNDUixNQUF0QyxJQUFnRCxDQUFwRCxFQUF1RDtZQUNuRGdULFlBQVksQ0FBQ3JJLElBQWIsQ0FBa0Isa0JBQWxCLEVBQXNDOUosSUFBdEMsQ0FBMkMsVUFBM0MsRUFBdUQsRUFBdkQsRUFBMkRnSSxRQUEzRCxDQUFvRSxTQUFwRTtVQUNIO1FBQ0o7TUFDSixDQXhCRDtJQXlCSDtFQUNKLEM7OztFQS9vQzZCeUsscUQiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB3cmFwcGVyKSB7XG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY29udGV4dC50b2tlbixcbiAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlciA9ICQoJyMnK3dyYXBwZXIpLFxuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcyA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZCcpO1xuICAgICAgICB2YXIgIGxpc3QgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBjYWxsUHJvZHVjdE9wdGlvbigpIHtcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJChlbGVtZW50KS5kYXRhKFwicHJvZHVjdC1pZFwiKTtcblxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChwcm9kdWN0SWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYobGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBnZXRQcm9kdWN0T3B0aW9uKGxpc3QpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbihkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gobGlzdCwgKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9IGxpc3RbaWR4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eHQgPSAkKGVsZW1lbnQpLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW3R4dF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclt0eHRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggPiA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRNb3JlT3B0aW9uICA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoIC0gNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpbmsgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnW2RhdGEtcHJvZHVjdC1pZD1cIicrcHJvZHVjdElkKydcIl0nKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZCAuc2hvd21vcmUnKS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKS5hcHBlbmQoJzxhIGhyZWY9XCInK3Byb2R1Y3RMaW5rKydcIiBjbGFzcz1cInNob3dtb3JlXCI+KycrY291bnRNb3JlT3B0aW9uKyc8L2E+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJvZHVjdE9wdGlvbihsaXN0KXtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xuICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbYCtsaXN0K2BdLCBmaXJzdDogNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyhmaXJzdDogNTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfSksXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJPcHRpb24oZGF0YSl7XG4gICAgICAgICAgICB2YXIgYUZpbHRlciA9IGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcztcblxuICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXIsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSBhRmlsdGVyW2luZGV4XS5ub2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvciA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJyksXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZFNpemUgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQtLXNpemUnKSxcbiAgICAgICAgICAgICAgICAgICAgYUZpbHRlcjIgPSBhRmlsdGVyW2luZGV4XS5ub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXIzID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheVN0eWxlID09PSAnU3dhdGNoJztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNSA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlOYW1lID09PSBjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNCA9IGFGaWx0ZXIzWzBdLm5vZGUudmFsdWVzLmVkZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChhRmlsdGVyNCwgKGlkeCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aENvbG9yVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9ycy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IxID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nID0gYUZpbHRlcjRbaWR4XS5ub2RlLmltYWdlVXJsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsZW5ndGhDb2xvclZhciA9PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYobGVuZ3RoQ29sb3JWYXIgPT09IDMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjMrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGNvbG9yMSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3JcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJytjb2xvcjErJ1wiPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oaW1nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnK2ltZysnKVwiPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXI1Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0RmllbGRTaXplLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zaXplXCI+PGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb25cIj4nK2NvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQudG9TdHJpbmcoKSsnPC9sYWJlbD48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKChhRmlsdGVyNS5sZW5ndGggPT0gMCkgJiYgKGFGaWx0ZXIzLmxlbmd0aCA9PSAwKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbFByb2R1Y3RPcHRpb24oKTtcbiAgICB9XG59XG4iLCIkKGZ1bmN0aW9uKCl7UGFyYWxsYXhTY3JvbGwuaW5pdCgpfSk7dmFyIFBhcmFsbGF4U2Nyb2xsPXtzaG93TG9nczohMSxyb3VuZDoxZTMsaW5pdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9sb2coXCJpbml0XCIpLHRoaXMuX2luaXRlZD8odGhpcy5fbG9nKFwiQWxyZWFkeSBJbml0ZWRcIiksdm9pZCh0aGlzLl9pbml0ZWQ9ITApKToodGhpcy5fcmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGEsYil7d2luZG93LnNldFRpbWVvdXQoYSwxZTMvNjApfX0oKSx2b2lkIHRoaXMuX29uU2Nyb2xsKCEwKSl9LF9pbml0ZWQ6ITEsX3Byb3BlcnRpZXM6W1wieFwiLFwieVwiLFwielwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiLFwicm90YXRlWlwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNjYWxlWlwiLFwic2NhbGVcIl0sX3JlcXVlc3RBbmltYXRpb25GcmFtZTpudWxsLF9sb2c6ZnVuY3Rpb24oYSl7dGhpcy5zaG93TG9ncyYmY29uc29sZS5sb2coXCJQYXJhbGxheCBTY3JvbGwgLyBcIithKX0sX29uU2Nyb2xsOmZ1bmN0aW9uKGEpe3ZhciBiPSQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpLGM9JCh3aW5kb3cpLmhlaWdodCgpO3RoaXMuX2xvZyhcIm9uU2Nyb2xsIFwiK2IpLCQoXCJbZGF0YS1wYXJhbGxheF1cIikuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGQsZSl7dmFyIGY9JChlKSxnPVtdLGg9ITEsaT1mLmRhdGEoXCJzdHlsZVwiKTt2b2lkIDA9PWkmJihpPWYuYXR0cihcInN0eWxlXCIpfHxcIlwiLGYuZGF0YShcInN0eWxlXCIsaSkpO3ZhciBrLGo9W2YuZGF0YShcInBhcmFsbGF4XCIpXTtmb3Ioaz0yO2YuZGF0YShcInBhcmFsbGF4XCIrayk7aysrKWoucHVzaChmLmRhdGEoXCJwYXJhbGxheC1cIitrKSk7dmFyIGw9ai5sZW5ndGg7Zm9yKGs9MDtrPGw7aysrKXt2YXIgbT1qW2tdLG49bVtcImZyb20tc2Nyb2xsXCJdO3ZvaWQgMD09biYmKG49TWF0aC5tYXgoMCwkKGUpLm9mZnNldCgpLnRvcC1jKSksbj0wfG47dmFyIG89bS5kaXN0YW5jZSxwPW1bXCJ0by1zY3JvbGxcIl07dm9pZCAwPT1vJiZ2b2lkIDA9PXAmJihvPWMpLG89TWF0aC5tYXgoMHxvLDEpO3ZhciBxPW0uZWFzaW5nLHI9bVtcImVhc2luZy1yZXR1cm5cIl07aWYodm9pZCAwIT1xJiYkLmVhc2luZyYmJC5lYXNpbmdbcV18fChxPW51bGwpLHZvaWQgMCE9ciYmJC5lYXNpbmcmJiQuZWFzaW5nW3JdfHwocj1xKSxxKXt2YXIgcz1tLmR1cmF0aW9uO3ZvaWQgMD09cyYmKHM9bykscz1NYXRoLm1heCgwfHMsMSk7dmFyIHQ9bVtcImR1cmF0aW9uLXJldHVyblwiXTt2b2lkIDA9PXQmJih0PXMpLG89MTt2YXIgdT1mLmRhdGEoXCJjdXJyZW50LXRpbWVcIik7dm9pZCAwPT11JiYodT0wKX12b2lkIDA9PXAmJihwPW4rbykscD0wfHA7dmFyIHY9bS5zbW9vdGhuZXNzO3ZvaWQgMD09diYmKHY9MzApLHY9MHx2LChhfHwwPT12KSYmKHY9MSksdj0wfHY7dmFyIHc9Yjt3PU1hdGgubWF4KHcsbiksdz1NYXRoLm1pbih3LHApLHEmJih2b2lkIDA9PWYuZGF0YShcInNlbnNcIikmJmYuZGF0YShcInNlbnNcIixcImJhY2tcIiksdz5uJiYoXCJiYWNrXCI9PWYuZGF0YShcInNlbnNcIik/KHU9MSxmLmRhdGEoXCJzZW5zXCIsXCJnb1wiKSk6dSsrKSx3PHAmJihcImdvXCI9PWYuZGF0YShcInNlbnNcIik/KHU9MSxmLmRhdGEoXCJzZW5zXCIsXCJiYWNrXCIpKTp1KyspLGEmJih1PXMpLGYuZGF0YShcImN1cnJlbnQtdGltZVwiLHUpKSx0aGlzLl9wcm9wZXJ0aWVzLm1hcCgkLnByb3h5KGZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1tW2FdO2lmKHZvaWQgMCE9Yyl7XCJzY2FsZVwiPT1hfHxcInNjYWxlWFwiPT1hfHxcInNjYWxlWVwiPT1hfHxcInNjYWxlWlwiPT1hP2I9MTpjPTB8Yzt2YXIgZD1mLmRhdGEoXCJfXCIrYSk7dm9pZCAwPT1kJiYoZD1iKTt2YXIgZT0oYy1iKSooKHctbikvKHAtbikpK2IsaT1kKyhlLWQpL3Y7aWYocSYmdT4wJiZ1PD1zKXt2YXIgaj1iO1wiYmFja1wiPT1mLmRhdGEoXCJzZW5zXCIpJiYoaj1jLGM9LWMscT1yLHM9dCksaT0kLmVhc2luZ1txXShudWxsLHUsaixjLHMpfWk9TWF0aC5jZWlsKGkqdGhpcy5yb3VuZCkvdGhpcy5yb3VuZCxpPT1kJiZlPT1jJiYoaT1jKSxnW2FdfHwoZ1thXT0wKSxnW2FdKz1pLGQhPWdbYV0mJihmLmRhdGEoXCJfXCIrYSxnW2FdKSxoPSEwKX19LHRoaXMpKX1pZihoKXtpZih2b2lkIDAhPWcueil7dmFyIHg9bS5wZXJzcGVjdGl2ZTt2b2lkIDA9PXgmJih4PTgwMCk7dmFyIHk9Zi5wYXJlbnQoKTt5LmRhdGEoXCJzdHlsZVwiKXx8eS5kYXRhKFwic3R5bGVcIix5LmF0dHIoXCJzdHlsZVwiKXx8XCJcIikseS5hdHRyKFwic3R5bGVcIixcInBlcnNwZWN0aXZlOlwiK3grXCJweDsgLXdlYmtpdC1wZXJzcGVjdGl2ZTpcIit4K1wicHg7IFwiK3kuZGF0YShcInN0eWxlXCIpKX12b2lkIDA9PWcuc2NhbGVYJiYoZy5zY2FsZVg9MSksdm9pZCAwPT1nLnNjYWxlWSYmKGcuc2NhbGVZPTEpLHZvaWQgMD09Zy5zY2FsZVomJihnLnNjYWxlWj0xKSx2b2lkIDAhPWcuc2NhbGUmJihnLnNjYWxlWCo9Zy5zY2FsZSxnLnNjYWxlWSo9Zy5zY2FsZSxnLnNjYWxlWio9Zy5zY2FsZSk7dmFyIHo9XCJ0cmFuc2xhdGUzZChcIisoZy54P2cueDowKStcInB4LCBcIisoZy55P2cueTowKStcInB4LCBcIisoZy56P2cuejowKStcInB4KVwiLEE9XCJyb3RhdGVYKFwiKyhnLnJvdGF0ZVg/Zy5yb3RhdGVYOjApK1wiZGVnKSByb3RhdGVZKFwiKyhnLnJvdGF0ZVk/Zy5yb3RhdGVZOjApK1wiZGVnKSByb3RhdGVaKFwiKyhnLnJvdGF0ZVo/Zy5yb3RhdGVaOjApK1wiZGVnKVwiLEI9XCJzY2FsZVgoXCIrZy5zY2FsZVgrXCIpIHNjYWxlWShcIitnLnNjYWxlWStcIikgc2NhbGVaKFwiK2cuc2NhbGVaK1wiKVwiLEM9eitcIiBcIitBK1wiIFwiK0IrXCI7XCI7dGhpcy5fbG9nKEMpLGYuYXR0cihcInN0eWxlXCIsXCJ0cmFuc2Zvcm06XCIrQytcIiAtd2Via2l0LXRyYW5zZm9ybTpcIitDK1wiIFwiK2kpfX0sdGhpcykpLHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgkLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMsITEpKTp0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoJC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzLCExKSl9fTtcbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcclxuaW1wb3J0IGZhbmN5Ym94IGZyb20gJy4vaGFsb3RoZW1lcy9qcXVlcnkuZmFuY3lib3gubWluJztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XHJcbmltcG9ydCBwYXJhbGxheCBmcm9tICcuL2hhbG90aGVtZXMvcGFyYWxsYXgvanF1ZXJ5LnBhcmFsbGF4LXNjcm9sbC5taW4nO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBtb2RhbFR5cGVzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgaGFsb1lvdXR1YmVDYXJvdXNlbCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1ZpZGVvJztcclxuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkhlcm9DYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tUGFnaW5nKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkoKTtcclxuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpO1xyXG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuZmFxc1RvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMucmVjZW50QmxvZ1NsaWRlcigpO1xyXG4gICAgICAgIHRoaXMuaG9tZVNwZWNpYWxQcm9kdWN0KCk7XHJcbiAgICAgICAgdGhpcy5ob21lUGFyYWxsYXhCYW5uZXIoKTtcclxuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50RG93bkhlcm9DYXJvdXNlbCgpIHtcclxuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWNvdW50ZG93bicpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50cygnLnNsaWNrLXNsaWRlJykuYWRkQ2xhc3MoJ2hhcy1jb3VudC1kb3duJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJChlbGVtZW50KS5kYXRhKCdjYXJvdXNlbC1jb3VudGRvd24nKSxcclxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHNlZnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPHNwYW4gY2xhc3M9J251bSc+XCIrZGF5cytcIjxzcGFuPkRBWVM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK2hvdXJzK1wiPHNwYW4+SE9VUlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI8c3Bhbj5NSU5TPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIitzZWNvbmRzK1wiPHNwYW4+U0VDUzwvc3Bhbj48L3NwYW4+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21QYWdpbmcoKXtcclxuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tID0gJCgnLmhlcm9DYXJvdXNlbC1jdXN0b20nKTtcclxuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tU2xpZGUgPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpO1xyXG4gICAgICAgIGhlcm9DdXN0b20uc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiBoZXJvQ3VzdG9tLmRhdGEoJ2F1dG9wbGF5JyksXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogXCIuaGVyb0Nhcm91c2VsXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0FEQVxyXG4gICAgICAgICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tIC5zbGljay1kb3RzIGxpJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKS5maW5kKCdidXR0b24nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgnMCcgKyBzbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWRvdHMtaXRlbScpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhlcm9DdXN0b20ub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGlkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmZpbmQoJ2RpdltkYXRhLXBvc2l0aW9uXScpLmRhdGEoJ3Bvc2l0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICBpZihwb3MgPT09ICdyaWdodCcpe1xyXG4gICAgICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCQoJy5oZXJvQ2Fyb3VzZWwtc2xpZGUtLWZpcnN0IC5oZXJvQ2Fyb3VzZWwtY29udGVudC13cmFwcGVyIC5oZXJvQ2Fyb3VzZWwtY29udGVudC0tcmlnaHQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZigkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdkYXRhLWNhdGVnb3J5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1jYXRlLScrY2F0SWQrJyAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbCkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbCkgLSAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKCQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicycpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oJCgnLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0ICRpdGVtRWxlID0gJChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBibG9jayA9ICRpdGVtRWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRVcmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKFwiZW4uc3VwZXJoYWlycGllY2VzLmVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBjYXRVcmwucmVwbGFjZShcIi8vc3VwZXJoYWlycGllY2VzLmVzXCIsXCIvL2VuLnN1cGVyaGFpcnBpZWNlcy5lc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXZpZXdTaG93KHgpIHtcclxuICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlld0NhcmQxJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IHJldmlldzIgPSBbXVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW1pdC5mb3JFYWNoKChpdGVtMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkdSA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZHUuZm9yRWFjaCgoZ29rdSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmEtc3Rhci1vIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMS41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMi41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMy41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoNC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXBhZGRpbmctbGVmdDo1cHg7PlxyXG4gICAgICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IENvbW1lbnRhaXJlc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+YClcclxuICAgICAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAvLyAgICAgZnVuY3Rpb24gcmV2aWV3U2hvdyh4KSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXdDYXJkMScpO1xyXG5cclxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW1pdC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHJldmlldzM9W11cclxuICAgIC8vICAgICAgICAgICAgIGxldCByZXZpZXcyID0gW11cclxuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxpbWl0W2ldLmlubmVySFRNTClcclxuICAgIC8vICAgICAgICAgICAgIGZldGNoKGBodHRwczovL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiOiBcIlJldmlld1wiLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIjpgP2ZpbHRlcj1bUHJvZHVjdCBTS1VdPScke2xpbWl0W2ldLmlubmVySFRNTH0nYFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4ocj0+ci5qc29uKCkpXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4ocj0+IHJldmlldzIucHVzaCguLi5yKSlcclxuICAgIC8vICAgICAgICAgICAgIC50aGVuKHIgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICQobGltaXRbaV0ubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgZ29rdTEgPSByZXZpZXcyLmZpbHRlcihpdGVtID0+IGl0ZW1bJ1Byb2R1Y3QgU0tVJ10gPT09IGxpbWl0W2ldLmlubmVySFRNTClcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXZpZXcyKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldmlldzIubGVuZ3RoKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxyZXZpZXcyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChyZXZpZXcyW2ldWydSZXZpZXcgcmF0ZSddKVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gcmV2aWV3Mi5mb3JFYWNoKChyZXYpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyAgICAgcmV2aWV3My5wdXNoKHJldlsnUmV2aWV3IHJhdGUnXSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcclxuICAgIC8vICAgICAgICAgICAgICAgICAkKGxpbWl0W2ldLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAvLyA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcclxuICAgIC8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9cGFkZGluZy1sZWZ0OjVweDs+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gUmVzZcOxYXNcclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAvLyAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vIC8vICAgICAgICAgICAgIGxldCByZXZpZXczPVtdXHJcbiAgICAvLyAvLyAgICAgICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXHJcblxyXG4gICAgLy8gLy8gICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vc2hwLXdlYnNlcnZlci5nbGl0Y2gubWUvZ2V0LXRlYW1kZXNrYCwge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCI6IFwiUmV2aWV3XCIsXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOmA/ZmlsdGVyPVtQcm9kdWN0IFNLVV09JyR7aXRlbTEuaW5uZXJIVE1MfSdgXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAgIC8vIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAudGhlbihyPT5yLmpzb24oKSlcclxuXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAudGhlbihyPT4gcmV2aWV3Mi5wdXNoKC4uLnIpKVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgLnRoZW4ociA9PiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICBjb25zdCBnb2t1MSA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIGdva3UxLmZvckVhY2goKHJldikgPT4ge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChyZXZbJ1JldmlldyByYXRlJ10pXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vIC8vICAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vIC8vICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vIC8vICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vIC8vICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAvLyAvLyA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcclxuICAgIC8vIC8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgIC8vIC8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9cGFkZGluZy1sZWZ0OjVweDs+XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gUmVzZcOxYXNcclxuICAgIC8vIC8vICAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAvLyAvLyAgICAgICAgICAgICB9KVxyXG5cclxuICAgIC8vIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAvLyAgICAgICAgIGxldCByZXZpZXcyID0gW11cclxuICAgIC8vIC8vICAgICAgICAgZmV0Y2goYGh0dHBzOi8vc2hwLXdlYnNlcnZlci5nbGl0Y2gubWUvZ2V0LXRlYW1kZXNrYCwge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAvLyAvLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAvLyAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIFwidGFibGVcIjogXCJSZXZpZXdcIixcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIjpgYFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vIC8vICAgICAgICAgfSlcclxuICAgIC8vIC8vICAgICAgICAgLnRoZW4ocj0+ci5qc29uKCkpXHJcbiAgICAvLyAvLyAgICAgICAgIC50aGVuKHI9PiByZXZpZXcyLnB1c2goLi4ucikpXHJcbiAgICAvLyAvLyAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICBsaW1pdC5mb3JFYWNoKChpdGVtMSkgPT4ge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcbiAgICBcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRBciA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIGZpbHRlcmVkQXIuZm9yRWFjaCgocmV2KSA9PiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChyZXZbJ1JldmlldyByYXRlJ10pXHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwXHJcblxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgLmZhLXN0YXItbyB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAvLyAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gLy8gICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgIC8vIC8vIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDAuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDIuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDMuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgLy8gLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxyXG4gICAgLy8gLy8gICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgLy8gLy8gICAgICAgICAgICAgPGRpdiBzdHlsZT1wYWRkaW5nLWxlZnQ6NXB4Oz5cclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAke3JldmlldzMubGVuZ3RofSBSZXNlw7Fhc1xyXG4gICAgLy8gLy8gICAgICAgICAgICAgPC9kaXY+YClcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXHJcbiAgICAvLyAvLyAgICAgICAgICAgICB9KVxyXG5cclxuICAgIC8vIC8vICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAvLyAvLyAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIC8vIC8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vIC8vICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLnRhYi1jb250ZW50JykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3U2hvdygpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay10YWIxIHNsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stdGFiMiBzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpIC0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyKCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwcm9kdWN0cy9jYXJvdXNlbC00J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgY29uc3QgJHRhYlNvcnRpbmcgPSAkKCcudGFiLXNvcnRpbmcgLnRhYi10aXRsZScpO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IGhlYWRlcl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcuaG9tZS1sYXlvdXQtMicpLmxlbmd0aCAmJiAhJChlbGVtZW50KS5oYXNDbGFzcygnaG9tZTItZmxhc2gtZGVhbHMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy50YWJDb250ZW50LW5ldyAucHJvZHVjdENhcm91c2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0SWQgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC13aXRoLWJhbm5lci0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHRhYlNvcnRpbmcub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVGFiID0gJHRhcmdldC5kYXRhKCd0YWInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzQmxvY2sgPSAkdGFyZ2V0LmNsb3Nlc3QoJy5oYWxvLWJsb2NrLXByb2R1Y3QnKTtcclxuICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIrJyAucHJvZHVjdENhcm91c2VsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhVGFiID09ICd2aWV3YWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1zb3J0aW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZmJylcclxuICAgICAgICAgICAgICAgIGlmKCEkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1sb2FkZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIrJyAucHJvZHVjdENhcm91c2VsJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLmNvdW50RG93bnRpbWVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCAkKCcuY291bnREb3dudGltZXInKS5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitkYXlzK1wiPC9zcGFuPjxzcGFuIGNsYXNzPSd0ZXh0Jz5kPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2hvdXJzK1wiOjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIittaW51dGVzK1wiOjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitzZWNvbmRzK1wiPC9zcGFuPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNvdW50RG93bnRpbWVyXCIpLmh0bWwoc3RyQ291bnREb3duKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVycycpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ob21lLWxheW91dC0yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxGbGFzaERlYWxzKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWw0KHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDMod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaGFsby1ibG9jay1wcm9kdWN0LWJhbm5lcnMyJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMih3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMih3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbDMod3JhcCl7XHJcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsNCh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsYWJlbEZsYXNoRGVhbHMod3JhcCkge1xyXG4gICAgICAgICAgICBjb25zdCAkaXRlbVNpZGUgPSB3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcclxuXHJcbiAgICAgICAgICAgICRpdGVtU2lkZS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXNMYWJlbCA9ICQoZWxlbWVudCkuZmluZCgnLnNhbGUtYmFkZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXNMYWJlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9ICR0aGlzTGFiZWwuZmluZCgnLnRleHQnKS5kYXRhKCdzYWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNhcmQtcHJpY2UnKS5hZGRDbGFzcygnaGFzLWxhYmVsU2FsZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNhcmQtbGFiZWwtc2FsZVwiPjxzcGFuPi0nK2xhYmVsKyc8L3NwYW4+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNMYWJlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcclxuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xyXG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxyXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xyXG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxyXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYXFzVG9nZ2xlKCl7XHJcbiAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5oYWxvLXNob3J0LWZhcXMgLmNhcmQgLnRpdGxlJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZigkKGVsZW1lbnQpLmZpbmQoJy50aXRsZScpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VudEJsb2dTbGlkZXIoKXtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXJlY2VudC1wb3N0Jykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXJlY2VudC1wb3N0Jykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhvbWVTcGVjaWFsUHJvZHVjdCgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGlmKGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tkYXRhLXNwZWNpYWwtcHJvZHVjdC1pZF0nKS5kYXRhKCdzcGVjaWFsLXByb2R1Y3QtaWQnKSxcclxuICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPXtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLXNwZWNpYWwtcHJvZHVjdC10bXAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEkKCcuaGFsby1zcGFjaWFsLXByb2R1Y3QgLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0VmlldycpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuaHRtbChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1zb2xkUHJvZHVjdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3aW5nUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnREb3duUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctY291bnREb3duJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1mb3InKS5nZXQoMCkuc2xpY2suc2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRodW1ibmFpbHNIZWlnaHQoc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9Ob3RpZnlNZSgkKHNjb3BlKSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudS1idXR0b24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHNjb3BlKS5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudS1idXR0b24nKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGggPT09IDApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoc2NvcGUpLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdERldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmlld2luZ1Byb2R1Y3Qod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod3JhcHBlci5sZW5ndGggPiAwKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpZXdlclRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF90ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyX3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzVmlld2VyX3RleHQgKyBcIl1cIik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNWaWV3ZXJMaXN0Lmxlbmd0aCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV5ZVwiLz48L3N2Zz4nICsgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgXCIgXCIgKyB2aWV3ZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3VudERvd25Qcm9kdWN0KHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50RG93biA9IHdyYXBwZXIuZGF0YSgnY291bnRkb3duJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VmdCA9IHdyYXBwZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tYmVsbFwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj48c3Bhbj5MaW1pdGVkIHRpbWUgb2ZmZXIsIGVuZCBpbjo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzb2xkUHJvZHVjdCh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQyID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0TGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1Byb2R1Y3RfdGV4dCArIFwiXVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNQcm9kdWN0SXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1Byb2R1Y3RMaXN0Lmxlbmd0aCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzSG91cnNfdGV4dCArIFwiXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc0hvdXJzTGlzdC5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWZpcmVcIi8+PC9zdmc+PHNwYW4+JyArIG51bWJlcnNQcm9kdWN0TGlzdFtudW1iZXJzUHJvZHVjdEl0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQgKyBcIiBcIiArIG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc0hvdXJzSXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dDIgKyAnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRUaHVtYm5haWxzSGVpZ2h0KCRzY29wZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYXJvdXNlbF9uYXYgPSBlbC5maW5kKCcucHJvZHVjdFZpZXctbmF2JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2ZvciA9IGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1mb3InKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGNhcm91c2VsX2Zvci5maW5kKCcuc2xpY2stYXJyb3cnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2Zvci5wYXJlbnQoKS5hZGRDbGFzcygnYXJyb3dzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2Zvci5wYXJlbnQoKS5hZGRDbGFzcygnYXJyb3dzLWRpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZVBhcmFsbGF4QmFubmVyKCl7XHJcbiAgICAgICAgaWYoJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgd3JhcCA9ICQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMnKSxcclxuICAgICAgICAgICAgICAgIGltYWdlID0gd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5kYXRhKCdpbWFnZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcraW1hZ2UrJyknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdENhcm91c2VsJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigkKCcuaGFsby1ibG9jayAucHJvZHVjdEdyaWQnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2sgLnByb2R1Y3RHcmlkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJhbm5lciBwYXJhbGxheCAyXHJcbiAgICBjdXN0b21lclJldmlld0Nhcm91c2VsKCkge1xyXG4gICAgICAgIGlmICgkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoISQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhvbWVQcm9kdWN0UmVjb21tZW5kZWQoKSB7XHJcbiAgICAgICAgY29uc3QgJGhvbWVQR0YgPSAkKCcuaG9tZTItYmxvY2stcmVjb21tZW5kZWQnKTtcclxuICAgICAgICBjb25zdCAkaG9tZVBHRl9ncmlkID0gJGhvbWVQR0YuZmluZCgnLnByb2R1Y3RHcmlkJyk7XHJcbiAgICAgICAgY29uc3QgaG9tZVBHRl9pdGVtTGVuZ3RoID0gJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdCcpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG5CbG9jayA9ICQoJy5ob21lUEdGX2J0bicpO1xyXG4gICAgICAgIGNvbnN0ICRob21lUEdGX2J0biA9ICQoJy5ob21lUEdGX2J0biBhJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YUNvbHVtbiA9ICRob21lUEdGX2dyaWQuZGF0YSgnY29sdW1ucycpO1xyXG4gICAgICAgIGxldCB0dF9wcm9kdWN0U2hvdztcclxuXHJcbiAgICAgICAgaWYgKCRob21lUEdGLmxlbmd0aCAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZXaWR0aCA+IDEyNzkgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZldpZHRoIDw9IDEyNzkgJiYgZldpZHRoID4gOTkxICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZldpZHRoIDw9IDk5MSAmJiBmV2lkdGggPiA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gNzY3ICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRob21lUEdGX2J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdXaWR0aCA+IDEyNzkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod1dpZHRoIDw9IDEyNzkgJiYgd1dpZHRoID4gOTkxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHRfcHJvZHVjdFNob3cgPSA4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod1dpZHRoIDw9IDk5MSAmJiB3V2lkdGggPiA3NjcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuOmx0KCcrdHRfcHJvZHVjdFNob3crJyknKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0OmhpZGRlbicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRob21lUEdGX2J0bi50ZXh0KCdObyBNb3JlIFByb2R1Y3RzJykuYXR0cignZGlzYWJsZWQnLCAnJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9