(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    this.showProductsPerPage();
    this.showMoreProducts();
    this.fancyboxVideoBanner();
    this.loadOptionForProductCard(this.context);
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    this.reviewShow();
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;

    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $paginatorContainer.html($(content.paginator).find('.pagination').children());
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');

      if ($('#product-listing-container .product').length > 0) {
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.context, 'product-listing-container');
      }

      _this.showProductsPerPage();

      _this.showMoreProducts();

      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.showProductsPerPage = function showProductsPerPage() {
    this.reviewShow();

    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");

      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };

  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          function reviewShow(x) {
            var limit = document.querySelectorAll('.productSku1');
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
                // console.log(item.innerHTML)
                $(item1.nextElementSibling).empty();
                var review3 = [];
                var filteredAr = review2.filter(function (item) {
                  return item['Product SKU'] === item1.innerHTML;
                });
                filteredAr.forEach(function (rev) {
                  review3.push(rev['Review rate']);
                });
                var reviewAvg = Math.round(review3.reduce(function (a, b) {
                  return a + b;
                }, 0) / review3.length * 10) / 10; // console.log(reviewAvg)
                // console.log()

                $(item1.nextElementSibling).append("\n                                <style>    .checked {\n                                    color: rgb(255, 210, 0);\n                            \n                            }\n                            .fa-star-o {\n                                color: rgb(255, 210, 0);\n                        \n                            }\n                            @media (min-width: 768px) {\n                                .checking {\n                                    display: flex;\n                                    gap:5px;\n                                }\n                            }\n                            </style>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                                \n                                <span>\n                                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                            </span>\n                            <div>\n                                " + review3.length + " Rese\xF1as\n                            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
              }); //   console.log(review2)
            }).catch(function (err) {
              console.log(err);
            });
          }

          if ($(data).find('#product-listing-container .productListing').length > 0) {
            $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
            reviewShow();
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();

            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }

            nextPage = $(".pagination-item--current").next();

            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
            }

            if ($(data).find('#product-listing-container .product').length > 0) {
              Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
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

  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }

    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
  };

  _proto.reviewShow = function reviewShow() {
    var limit = document.querySelectorAll('.productSku1');
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
        // console.log(item.innerHTML)
        $(item1.nextElementSibling).empty();
        var review3 = [];
        var filterArr = review2.filter(function (item) {
          return item['Product SKU'] === item1.innerHTML;
        });
        filterArr.forEach(function (goku) {
          review3.push(goku['Review rate']);
        });
        var reviewAvg = Math.round(review3.reduce(function (a, b) {
          return a + b;
        }, 0) / review3.length * 10) / 10; // console.log(reviewAvg)
        // console.log()

        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            @media (min-width: 768px) {\n                .checking {\n                    display: flex;\n                    gap:5px;\n                }\n            }\n            @media (min-width: 1025px) {\n                .checking {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1425px) {\n                .checking {\n                    display: flex;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n                <span>\n                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n            </span>\n            <div>\n                " + review3.length + " Rese\xF1as\n            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      }); //   console.log(review2)
    }).catch(function (err) {
      console.log(err);
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInNob3dNb3JlUHJvZHVjdHMiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwicmV2aWV3U2hvdyIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJHBhZ2luYXRvckNvbnRhaW5lciIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJwYWdpbmF0b3IiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJmaW5kIiwiY2hpbGRyZW4iLCJ0cmlnZ2VySGFuZGxlciIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImMiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJhdHRyIiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsIngiLCJyZXZpZXcyIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicHVzaCIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW1wdHkiLCJyZXZpZXczIiwiZmlsdGVyZWRBciIsImZpbHRlciIsIml0ZW0iLCJpbm5lckhUTUwiLCJyZXYiLCJyZXZpZXdBdmciLCJNYXRoIiwicm91bmQiLCJyZWR1Y2UiLCJhIiwiYiIsImFwcGVuZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNsYXNzIiwiYmx1ciIsIk51bWJlciIsInRleHQiLCJmYW5jeWJveCIsImZpbHRlckFyciIsImdva3UiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtJQUNOQyx3RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmOztJQUVBLElBQUlDLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxNQUFwQixHQUE2QixDQUFqQyxFQUFvQztNQUNoQyxLQUFLQyxpQkFBTDtJQUNILENBRkQsTUFFTztNQUNILEtBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7TUFDQUMsZ0VBQUssQ0FBQ0MsRUFBTixDQUFTLGtCQUFULEVBQTZCLEtBQUtILGNBQWxDO0lBQ0g7O0lBRUQsS0FBS0ksbUJBQUw7SUFDQSxLQUFLQyxnQkFBTDtJQUNBLEtBQUtDLG1C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QUFPQSxTQUFQLEdBQWtCLFVBQWxCLEdBQThCLFlBL0JyQiw4REFnQ1QsT0FBT0EsU0FBUCxHQUFrQixVQUFsQixHQUE4QixZQWhDckIsOERBaUNULE9BQU9BLFNBQVAsR0FBa0IsVUFBbEIsR0FBOEIsWUFqQ3JCLG9GQW9DakNOLE9BQU8sQ0FBQ25GLE1BcEN5QixxQ0FBbkMsRUFkcUIsQ0FvRHJCO01BQ0gsQ0FyREQsRUFEVyxDQXVEWDtJQUNELENBdEVILEVBeUVHZ0csS0F6RUgsQ0F5RVMsVUFBQ0MsR0FBRCxFQUFTO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0lBQ0gsQ0EzRUg7RUE0RUgsQzs7O0VBeFRpQ1UsZ0QiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XHJcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xyXG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XHJcbmltcG9ydCBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkJztcclxuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XHJcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xyXG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xyXG4gICAgICAgIHRoaXMubG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKHRoaXMuY29udGV4dCk7XHJcblxyXG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcclxuICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUoKTtcclxuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3U2hvdygpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbicpO1xyXG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xyXG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XHJcbiAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICAkc2hvd01vcmVDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpLmNoaWxkcmVuKCkpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCl7XHJcbiAgICAgICAgdGhpcy5yZXZpZXdTaG93KClcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB2YXIgYyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIik7XHJcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbWl0LCBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoKGUpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vcmVQcm9kdWN0cygpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAgcmV2aWV3U2hvdyh4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0U2t1MScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9NTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTAwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTE1MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5pbm5lckhUTUwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEFyID0gcmV2aWV3Mi5maWx0ZXIoaXRlbSA9PiBpdGVtWydQcm9kdWN0IFNLVSddID09PSBpdGVtMS5pbm5lckhUTUwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRBci5mb3JFYWNoKChyZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3My5wdXNoKHJldlsnUmV2aWV3IHJhdGUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldmlld0F2ZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmEtc3Rhci1vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gUmVzZcOxYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgPGRpdj4ke3Jldmlld0F2Z308L2Rpdj5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmV2aWV3MilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3U2hvdygpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpIDw9IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYW5jeWJveFZpZGVvQmFubmVyKCl7XHJcbiAgICAgICAgaWYgKCQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcclxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcclxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xyXG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV2aWV3U2hvdygpIHtcclxuICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFNrdTEnKTtcclxuICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICAgLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgbGltaXQuZm9yRWFjaCgoaXRlbTEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MyA9IFtdXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckFyciA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyQXJyLmZvckVhY2goKGdva3UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV2aWV3QXZnKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZhLXN0YXItbyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MjVweCkge1xyXG4gICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDAuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMS41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDMuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoNC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+ICAgICAgXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IFJlc2XDsWFzXHJcbiAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmV2aWV3MilcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9