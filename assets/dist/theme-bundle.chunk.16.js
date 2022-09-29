(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content'); // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.fancyboxVideoBanner();
    Object(_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__["default"])();
    Object(_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__["default"])(this.context);
    this.reviewShow();
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

        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            @media (min-width: 768px) {\n                .checking {\n                    display: flex;\n                    gap:5px;\n                }\n            }\n            @media (min-width: 1025px) {\n                .checking {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1425px) {\n                .checking {\n                    display: flex;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n                <span>\n                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n            </span>\n            <div>\n                " + review3.length + " Rese\xF1as\n            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      }); //   console.log(review2)
    }).catch(function (err) {
      console.log(err);
    });
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    var $productListingContainer = $('#product-listing-container .productListing');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);

      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);

        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        $paginatorContainer.html($(content.paginator).find('.pagination').children());
        $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());

        _this5.showProducts(false);

        _this5.showProductsPerPage();

        _this5.showItem();

        _this5.showMoreProducts();

        if ($('#product-listing-container .product').length > 0) {
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context, 'product-listing-container');
        }
      }

      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
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
    var getUrlParameter = this.getUrlParameter('limit');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          function reviewShow() {
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

                $(item1.nextElementSibling).append("\n                                <style>    .checked {\n                                    color: rgb(255, 210, 0);\n                            \n                            }\n                            .fa-star-o {\n                                color: rgb(255, 210, 0);\n                        \n                            }\n                            @media (min-width: 768px) {\n                                .checking {\n                                    display: flex;\n                                    gap:5px;\n                                }\n                            }\n                            @media (min-width: 1025px) {\n                                .checking {\n                                    display: unset;\n                                }\n                            }\n                            @media (min-width: 1425px) {\n                                .checking {\n                                    display: flex;\n                                }\n                            }\n                            </style>\n                <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                                \n                                <span>\n                                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                            </span>\n                            <div>\n                                " + review3.length + " Rese\xF1as\n                            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
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
            nextPage = $(".pagination-item--current").next();

            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
              $('.pagination .pagination-info .end').text($('.pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                  productPerPage,
                  pageCurrent = parseInt($(".pagination-item--current > a").text());

              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.searchProductsPerPage;
              }

              $('.pagination .pagination-info .end').text(parseInt(productPerPage) * pageCurrent);
            }

            if ($(data).find('#product-listing-container .product').length > 0) {
              Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
  };

  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
        limit = this.getUrlParameter('limit'),
        productPerPage;

    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.searchProductsPerPage;
    }

    var start = 1,
        end = total,
        checkLastPage = false,
        lastPage = 1;
    var checkLink = $(".pagination-list .pagination-item--current").next();
    var pageNotLast = lastPage - 1;
    var totalNotLast = pageNotLast * productPerPage;
    var productsLastPage = total - totalNotLast;
    var currentPage = parseInt($('.pagination-item--current > a').text());
    var prevPage = currentPage - 1;

    if (checkLink.length === 0) {
      lastPage = parseInt($(".pagination-item--current").find("a").text());
      checkLastPage = true;
    } else {
      lastPage = parseInt(checkLink.find("a").text());
      checkLastPage = false;
    }

    if (total <= productPerPage) {
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    } else {
      if (currentPage <= 1) {
        end = productPerPage;
      } else {
        start = prevPage * productPerPage + 1;

        if (checkLastPage = true) {
          if ($('.pagination-list .pagination-item--next').length > 0) {
            end = totalNotLast + productsLastPage - 1;
          } else {
            end = totalNotLast + productsLastPage;
          }
        } else {
          end = currentPage * productPerPage;
        }
      }

      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
  };

  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length) {
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

    if ($(".button-popup-video[data-fancybox]").length) {
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

  _proto.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'featured-products');
    }

    if ($('#product-listing-container .product').length > 0) {
      Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
    }
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd0l0ZW0iLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TdGlja3lUb29sYmFyIiwicmV2aWV3U2hvdyIsImxpbWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2aWV3MiIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW1wdHkiLCJyZXZpZXczIiwiZmlsdGVyZWRBciIsImZpbHRlciIsIml0ZW0iLCJpbm5lckhUTUwiLCJyZXYiLCJyZXZpZXdBdmciLCJNYXRoIiwicm91bmQiLCJyZWR1Y2UiLCJhIiwiYiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvYWRUcmVlTm9kZXMiLCJjYiIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImRvbmUiLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIiRjb250ZW50TGlzdGluZ0NvbnRhaW5lciIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwiJGNvbnRlbnRDb3VudCIsIiRwYWdpbmF0b3JDb250YWluZXIiLCIkc2hvd01vcmVDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJzZWFyY2hQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJjb250ZW50TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29udGVudENvdW50IiwicGFnaW5hdG9yIiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkZm9ybSIsIm5vZCIsInN1Ym1pdCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIlVSTCIsImMiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJlbGVtZW50IiwiZSIsImdldFVybFBhcmFtZXRlciIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJhdHRyIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJibHVyIiwicHJvZHVjdFBlclBhZ2UiLCJwYWdlQ3VycmVudCIsInBhcnNlSW50IiwidW5kZWZpbmVkIiwidG90YWwiLCJzdGFydCIsImVuZCIsImNoZWNrTGFzdFBhZ2UiLCJsYXN0UGFnZSIsImNoZWNrTGluayIsInBhZ2VOb3RMYXN0IiwidG90YWxOb3RMYXN0IiwicHJvZHVjdHNMYXN0UGFnZSIsImN1cnJlbnRQYWdlIiwicHJldlBhZ2UiLCJmYW5jeWJveCIsInNQYXJhbSIsInNQYWdlVVJMIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNwbGl0Iiwic1BhcmFtZXRlck5hbWUiLCJpIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QixFQUF3QjtJQUNwQixJQUFJQyxRQUFRLEdBQUdDLGtCQUFrQixDQUFDbEssTUFBTSxDQUFDQyxRQUFQLENBQWdCa0ssTUFBaEIsQ0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBQUQsQ0FBakM7SUFBQSxJQUNJQyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlLEdBQWYsQ0FEcEI7SUFBQSxJQUVJQyxjQUZKO0lBQUEsSUFHSUMsQ0FISjs7SUFLQSxLQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdILGFBQWEsQ0FBQ2pLLE1BQTlCLEVBQXNDb0ssQ0FBQyxFQUF2QyxFQUEyQztNQUN2Q0QsY0FBYyxHQUFHRixhQUFhLENBQUNHLENBQUQsQ0FBYixDQUFpQkYsS0FBakIsQ0FBdUIsR0FBdkIsQ0FBakI7O01BRUEsSUFBSUMsY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQlAsTUFBMUIsRUFBa0M7UUFDOUIsT0FBT08sY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQnBCLFNBQXRCLEdBQWtDLElBQWxDLEdBQXlDb0IsY0FBYyxDQUFDLENBQUQsQ0FBOUQ7TUFDSDtJQUNKO0VBQ0osQzs7U0FFRHBJLHdCLEdBQUEsa0NBQXlCMUMsT0FBekIsRUFBaUM7SUFDN0IsSUFBR1gsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJzQixNQUE5QixHQUF1QyxDQUExQyxFQUE0QztNQUN4QzZHLHdGQUF1QixDQUFDeEgsT0FBRCxFQUFVLG1CQUFWLENBQXZCO0lBQ0g7O0lBRUQsSUFBR1gsQ0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNzQixNQUF6QyxHQUFrRCxDQUFyRCxFQUF1RDtNQUNuRDZHLHdGQUF1QixDQUFDeEgsT0FBRCxFQUFVLDJCQUFWLENBQXZCO0lBQ0g7RUFDSixDOzs7RUFsbkIrQmdMLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0ICdqc3RyZWUnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XHJcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xyXG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XHJcbmltcG9ydCBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkJztcclxuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xyXG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXHJcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxyXG4gICAgICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcclxuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xyXG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCBzcGFuJykuZGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb250ZW50KG5hdmlnYXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCBzcGFuJykuZGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxyXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xyXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxyXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW0oKTtcclxuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xyXG5cclxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XHJcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKCk7XHJcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIodGhpcy5jb250ZXh0KTtcclxuICAgICAgICB0aGlzLnJldmlld1Nob3coKVxyXG5cclxuICAgIH1cclxuICAgIHJldmlld1Nob3coKSB7XHJcbiAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RTa3UxJyk7XHJcbiAgICAgICAgbGV0IHJldmlldzIgPSBbXVxyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb25cIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD01MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xMDAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmlubmVySFRNTClcclxuICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJldmlldzMgPSBbXVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEFyID0gcmV2aWV3Mi5maWx0ZXIoaXRlbSA9PiBpdGVtWydQcm9kdWN0IFNLVSddID09PSBpdGVtMS5pbm5lckhUTUwpXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEFyLmZvckVhY2goKHJldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChyZXZbJ1JldmlldyByYXRlJ10pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnID0gTWF0aC5yb3VuZCgocmV2aWV3My5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3JldmlldzMubGVuZ3RoKSAqIDEwKS8xMFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldmlld0F2ZylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FwOjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAuY2hlY2tpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDI1cHgpIHtcclxuICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMi41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAke3JldmlldzMubGVuZ3RofSBSZXNlw7Fhc1xyXG4gICAgICAgICAgICA8L2Rpdj5gKVxyXG4gICAgICAgICAgICAgICAgLy8gJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgPGRpdj4ke3Jldmlld0F2Z308L2Rpdj5gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJldmlldzIpXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVHJlZU5vZGVzKG5vZGUsIGNiKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb3JlOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja2JveDoge1xyXG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcclxuICAgICAgICBjb25zdCAkY29udGVudExpc3RpbmdDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcclxuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbicpO1xyXG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb3VudDogJ3NlYXJjaC9jb250ZW50LWNvdW50JyxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgICAgICRjb250ZW50TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQuY29udGVudExpc3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgJHBhZ2luYXRvckNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uJykuY2hpbGRyZW4oKSk7XHJcbiAgICAgICAgICAgICAgICAkc2hvd01vcmVDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpLmNoaWxkcmVuKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QodGhpcy5jb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XHJcbiAgICAgICAgdGhpcy4kZm9ybSA9ICRmb3JtO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xyXG4gICAgICAgIHRoaXMucmV2aWV3U2hvdygpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xyXG4gICAgICAgICAgICBpZihjICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmFsdWUgPT0gYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0Jyk7XHJcblxyXG4gICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxyXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICAgICByZXZpZXdTaG93KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdFNrdTEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldmlldzIgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdC5mb3JFYWNoKChpdGVtMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRBciA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQXIuZm9yRWFjaCgocmV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChyZXZbJ1JldmlldyByYXRlJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXZpZXdBdmcgPSBNYXRoLnJvdW5kKChyZXZpZXczLnJlZHVjZSgoYSxiICkgPT4gYSsgYiwgMCkvcmV2aWV3My5sZW5ndGgpICogMTApLzEwXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXZpZXdBdmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXN0YXItbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNraW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDAuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDEuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDIuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDMuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDQuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3JldmlldzMubGVuZ3RofSBSZXNlw7Fhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXZpZXcyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmFwcGVuZCgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmNoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdTaG93KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKCQoZGF0YSkuZmluZChcIi5wYWdpbmF0aW9uLWxpc3RcIikuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYmx1cigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnZGlzYWJsZScpLnRleHQoJ05vIG1vcmUgcHJvZHVjdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBnZXRVcmxQYXJhbWV0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUN1cnJlbnQgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGFcIikudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBjb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KHBhcnNlSW50KHByb2R1Y3RQZXJQYWdlKSpwYWdlQ3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJdGVtKCkge1xyXG4gICAgICAgIHZhciB0b3RhbCA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSxcclxuICAgICAgICAgICAgbGltaXQgPSB0aGlzLmdldFVybFBhcmFtZXRlcignbGltaXQnKSxcclxuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2U7XHJcblxyXG4gICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3RhcnQgPSAxLFxyXG4gICAgICAgICAgICBlbmQgPSB0b3RhbCxcclxuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlLFxyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciBjaGVja0xpbmsgPSAkKFwiLnBhZ2luYXRpb24tbGlzdCAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcclxuICAgICAgICB2YXIgcGFnZU5vdExhc3QgPSBsYXN0UGFnZSAtIDE7XHJcbiAgICAgICAgdmFyIHRvdGFsTm90TGFzdCA9IHBhZ2VOb3RMYXN0ICogcHJvZHVjdFBlclBhZ2U7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RzTGFzdFBhZ2UgPSB0b3RhbCAtIHRvdGFsTm90TGFzdDtcclxuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XHJcbiAgICAgICAgdmFyIHByZXZQYWdlID0gY3VycmVudFBhZ2UgLSAxO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2tMaW5rLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KCQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLmZpbmQoXCJhXCIpLnRleHQoKSk7XHJcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxhc3RQYWdlID0gcGFyc2VJbnQoY2hlY2tMaW5rLmZpbmQoXCJhXCIpLnRleHQoKSk7XHJcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvdGFsIDw9IHByb2R1Y3RQZXJQYWdlKSB7XHJcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XHJcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgZW5kID0gcHJvZHVjdFBlclBhZ2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IChwcmV2UGFnZSAqIHByb2R1Y3RQZXJQYWdlKSArIDE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0xhc3RQYWdlID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0b3RhbE5vdExhc3QgKyBwcm9kdWN0c0xhc3RQYWdlIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5zdGFydCcpLnRleHQoc3RhcnQpO1xyXG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcclxuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcclxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcclxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xyXG4gICAgICAgIHZhciBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSksXHJcbiAgICAgICAgICAgIHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpLFxyXG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSxcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xyXG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=