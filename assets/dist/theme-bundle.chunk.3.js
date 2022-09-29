(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");




function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (function ($scope, context) {
  var thisProuctId = parseInt(context.productId),
      $relateTab = $('#halo-related-products'),
      $bundle = $('#halo-bundle-products'),
      $bundleList = $bundle.find('.halo-product-list');
  var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('#modal')[0];
  var currency = context.money;
  showBundle();
  $(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    $('.halo-toggle-options').not($target).removeClass('is-focus');
    $('.halo-detail-options').not($target.next('.halo-detail-options')).removeClass('is-open');

    if (!$target.next('.halo-detail-options').hasClass('is-open')) {
      $target.addClass('is-focus');
      $target.next('.halo-detail-options').addClass('is-open');
    } else {
      $target.next('.halo-detail-options').removeClass('is-open');
      $target.removeClass('is-focus');
    }
  });
  $(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    $('.halo-detail-options').removeClass('is-open');
    $('.halo-toggle-options').removeClass('is-focus');
  });
  $(document).on('click', function (event) {
    if ($('.halo-detail-options').hasClass('is-open')) {
      if ($(event.target).closest('.halo-detail-options').length === 0 && $(event.target).closest('.halo-toggle-options').length === 0) {
        $('.halo-detail-options').removeClass('is-open');
        $('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  $(document).on('change', '.halo-detail-checkbox', function (event) {
    var $target = $(event.currentTarget),
        id = $target.attr('id').replace('fbt_product', ''),
        product = $('.halo-product-item[data-product-id="' + id + '"]');

    if ($target.is(':checked') == false) {
      product.removeClass('isChecked');
      product.find('.halo-product-iconAdd').removeClass('halo-product-iconChecked');
    } else {
      product.addClass('isChecked');
      product.find('.halo-product-iconAdd').addClass('halo-product-iconChecked');
    }

    totalPrice();
  });
  $(document).on('click', '#halo-addAll', function (event) {
    event.preventDefault();
    var $form = $('form', $bundle);
    var arrPro = new Array();
    $('.halo-detail-checkbox').each(function (index, val) {
      if ($(val).is(':checked')) {
        arrPro.push(index);
      }
    });
    var check = false;

    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }

    if (check) {
      if (arrPro.length > 0) {
        var k = arrPro.length;
        $bundle.find('.loadingOverlay').show();
        addToCart($form, 0, arrPro, k);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';

      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_4__["showAlertModal"])(tmp.textContent || tmp.innerText);
      }
    }

    event.preventDefault();
  });

  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/products/halo-bundle-products-tmp',
        options: 'halothemes/products/halo-bundle-products-options'
      }
    };
    var prodBundleId = [],
        totalBlock = '';
    firstItem();

    if ($bundle.hasClass('halo-bundle-login')) {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text">Log in for pricing</span>\
                            </div>\
                        </div>';
    } else {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text">Total:</span>\
                                <span class="price"></span>\
                            </div>\
                            <a class="button button--primary halo-product-total-button" id="halo-addAll" href="#">Add All To Cart</a>\
                        </div>';
    }

    $bundle.find('.bundle-product-right').append(totalBlock);
    $.each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    prodBundleId = $.grep(prodBundleId, function (value) {
      return value != thisProuctId;
    });

    if ($bundle.length > 0 && prodBundleId.length == 0) {
      var num = 0,
          list = [];
      $relateTab.find('.card').each(function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = $(val).data('product-id');

        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }

            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;

            if (num == $relateTab.find('.card').length) {
              showList(list);
            }
          });
        }
      });
    } else if ($bundle.length > 0 && prodBundleId.length > 0) {
      var num = 0,
          list = [],
          listFilter = $.unique(prodBundleId);
      $.each(listFilter, function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = val;

        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }

            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;

            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }

  function firstItem() {
    var firstItem = $bundleList.find('.halo-product-itemFirst'),
        pId = firstItem.data('product-id'),
        form = firstItem.find('form'),
        hasOptions = form.find('[data-fbt-option-change]').length,
        hasDefaultOptions = form.find('[data-default]').length;

    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes(form, attributesData);

        if (hasDefaultOptions) {
          updateView(form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }

  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      $bundleList.append(response.item);

      if (response.options.trim() != "") {
        var pId = $(response.item).data('product-id'),
            $form = $bundleList.find('.halo-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = $('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = $(response.options).find('[data-default]').length;

        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            if (response != undefined) {
              var attributesData = response.data || {};
              var attributesContent = response.content || {};
              updateProductAttributes($form, attributesData);

              if (hasDefaultOptions) {
                updateView($form, attributesData, attributesContent);
              } else {
                updateDefaultAttributesForOOS(attributesData);
              }
            }
          });
        }

        setProductVariant();
      }
    });
    productOptions();
    showSlickSlider($bundleList);

    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }

    $bundle.removeClass('halo-block-disable');
  }

  function showSlickSlider(wrap) {
    if (wrap.length > 0) {
      wrap.slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href='#slick-arrow-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href='#slick-arrow-prev'></use></svg>",
        responsive: [{
          breakpoint: 1600,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 5,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }
  }

  function checkProduct(form, arrPro) {
    var check = true;

    for (var i = 0; i < arrPro.length; i++) {
      var k = arrPro[i],
          $form = $(form[k]);

      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);

        if (check == false) {
          return false;
        }
      }
    }

    return check;
  }

  function checkBeforeAdd($attributes) {
    var check = true,
        att = "";
    $attributes.find('input:text, input:password, input:file, textarea').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('input:radio, input:checkbox').each(function (index, element) {
      if (att != $(element).attr("name")) {
        att = $(element).attr("name");

        if (!$(element).prop('required')) {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {}
          }

          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }

          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }

  function addToCart(form, i, arrP, k) {
    if (window.FormData === undefined) {
      return;
    }

    var prod = arrP[i];
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[prod])), function (err, response) {
      var errorMessage = err || response.data.error;

      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
        k = k - 1;
      }

      i++;

      if (i >= arrP.length) {
        $bundle.find('.loadingOverlay').hide();
        modal.$modal.removeClass().addClass('modal modal--preview modal--previewMini modal--previewMini2');
        modal.open({
          size: 'small'
        });

        if ($(".modal-background:visible").length > 0) {
          $('.modal-background:visible').hide();
        }

        var response;

        if (k > 0) {
          response = '<div class="modal-header">\
                        <h2 class="modal-header-title">\
                            Ok, ' + k + ' item was added to your cart. What\'s next?\
                        </h2>\
                    </div>\
                    <div class="modal-body">\
                        <div class="previewCart previewCart2">\
                            <section class="previewCartCheckout previewCartCheckout2">\
                                <a href="/checkout.php" class="button button--primary">\
                                    Proceed To Checkout\
                                </a>\
                                <p class="previewCartCheckout-autoClose" data-auto-close="10">Auto close after <span class="count"></span>s</p>\
                            </section>\
                        </div>\
                    </div>';
        } else {
          response = '<div class="modal-header">\
                        <h2 class="modal-header-title">\
                            Ok, ' + k + ' item was added to your cart. What\'s next?\
                        </h2>\
                    </div>\
                    <div class="modal-body">\
                        <div class="previewCart previewCart2">\
                            <section class="previewCartCheckout previewCartCheckout2">\
                                <p class="previewCartCheckout-text">Sorry! We don\'t have enough product for your selection!</p>\
                                <p class="previewCartCheckout-autoClose" data-auto-close="10">Auto close after <span class="count"></span>s</p>\
                            </section>\
                        </div>\
                    </div>';
        }

        var $body = $('body');
        var quantity = parseInt($body.find('.cartDesktop .cart-quantity').text()) + k;
        $body.trigger('cart-quantity-update', quantity);
        modal.updateContent(response);
        return;
      }

      addToCart(form, i, arrP, k);
    });
  }

  function totalPrice() {
    var total = 0,
        symbol,
        symbolChange,
        decimalPlaces,
        decimalSeparator,
        thousandsSeparator,
        symbolLocation,
        curr,
        token1,
        token2,
        length;
    decimalPlaces = currency.decimal_places;
    decimalSeparator = currency.decimal_token;
    thousandsSeparator = currency.thousands_token;
    symbolLocation = currency.currency_location;
    symbol = currency.currency_token;
    $bundleList.find('.halo-product-item.isChecked').each(function (index, val) {
      var price = parseFloat($(val).find('[data-price-value]').attr('data-price-value'));
      total = total + price;
    });

    if ($('.productView-price > .price-section > .price.price--withTax', $scope).length) {
      curr = $('.productView-price > .price-section > .price.price--withTax', $scope).text();
    } else {
      curr = $('.productView-price > .price-section > .price.price--withoutTax', $scope).text();
    }

    symbolChange = curr.replace(/[0-9]/g, "").replace(".", "").replace(",", "");

    if (symbol != symbolChange) {
      symbol = symbolChange;
      token1 = curr.indexOf('.');
      token2 = curr.indexOf(',');
      length = curr.length - 1;

      if (curr.indexOf(symbol) != -1) {
        symbolLocation = curr.indexOf(symbol);
      }

      if (token1 < token2) {
        thousandsSeparator = '.';
        decimalSeparator = ',';

        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token2;
        } else {
          decimalPlaces = length - token2 - 1;
        }
      } else {
        thousandsSeparator = ',';
        decimalSeparator = '.';

        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token1;
        } else {
          decimalPlaces = length - token1 - 1;
        }
      }
    }

    if (total == 0) {
      $bundle.find('#halo-addAll').attr('disabled', true);
    } else {
      $bundle.find('#halo-addAll').attr('disabled', false);
    }

    total = formatMoney(total, decimalPlaces, decimalSeparator, thousandsSeparator);

    if (symbolLocation == "left" || symbolLocation == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }

    $bundle.find('.halo-product-total .price').html(total);
  }

  function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }

  ;

  function productOptions() {
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }

    var $form = $('form', $bundle),
        $productOptionsElement = $('[data-fbt-option-change]', $form);
    $(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }

  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');

      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });

        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;

        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');

        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;

            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }

          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];

            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              $(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }

          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }

          return;
        }

        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }

  function productOptionsChanged(event) {
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }

    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);

      if (!$bundle.hasClass('halo-bundle-login')) {
        totalPrice();
      }
    });
    return false;
  }

  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";

    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }

    $('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);

      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }

  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();

    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);

      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }

  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }

  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }

  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }

  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');

      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    }
  }

  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }

    var viewModel = getViewModel($scope);
    showMessageBox(data.stock_message || data.purchasing_message, $scope);

    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      if (data.stock <= parseInt(context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
        viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
        viewModel.$stockLeft.text(data.stock);
      } else {
        viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
      }
    }

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }

    var productId = $('[name="product_id"]', $scope).val(),
        product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
        productCheckbox = product.find('.halo-detail-checkbox');

    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);

      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);

        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }

  function updateDefaultAttributesForOOS($scope, data) {
    var productId = $('[name="product_id"]', $scope).val(),
        product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
        productCheckbox = product.find('.halo-detail-checkbox');

    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);

      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);

        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }

  function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      priceData: {
        $div: $('[data-price-value]', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      $stockLeft: $('[data-stock-left]', $scope),
      $stockLeftWrapper: $('.productView-optionsStock', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      $sku: $('[data-product-sku]'),
      $upc: $('[data-product-upc]'),
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  function showMessageBox(message, $scope) {
    var $messageBox = $('.productAttributes-message', $scope);

    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }

  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.with_tax.value);
    }

    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.without_tax.value);
    }

    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];

        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e);
    }

    return formData;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloNextProducts.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloNextProducts.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  if ($('.productView-nextProducts').length) {
    var getProduct = function getProduct(arr) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                query MyQuery {\n                    site {\n                        products (entityIds: [" + arr + "]) {\n                          edges {\n                            product: node {\n                              ...ProductFields\n                              }\n                            }\n                        }\n                        currency (currencyCode: " + curCode + ") {\n                            display {\n                                symbol\n                                symbolPlacement\n                                decimalToken\n                                thousandsToken\n                                decimalPlaces\n                            }\n                        }\n                    }\n                }\n                fragment ProductFields on Product {\n                    id\n                    entityId\n                    name\n                    path\n                    defaultImage {\n                        img70px: url(width: 70)\n                        altText\n                    }\n                    prices {\n                        priceRange {\n                            min {\n                                ...MoneyFields\n                            }\n                            max {\n                                ...MoneyFields\n                            }\n                        }\n                        retailPrice {\n                            ...MoneyFields\n                        }\n                        basePrice {\n                            ...MoneyFields\n                        }\n                        price {\n                            ...MoneyFields\n                        }\n                    }\n                }\n                fragment MoneyFields on Money {\n                    value\n                    currencyCode\n                }\n            "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };

    var formatMoney = function formatMoney(n, c, d, t) {
      var c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d == undefined ? "." : d,
          t = t == undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
          j = (j = i.length) > 3 ? j % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    var renderProduct = function renderProduct(product, curDisplay) {
      if (product != undefined) {
        $.each(product, function (index, element) {
          var item = element.product,
              symbol = curDisplay.symbol,
              symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
              decimalToken = curDisplay.decimalToken,
              decimalPlaces = curDisplay.decimalPlaces,
              thousandsToken = curDisplay.thousandsToken;
          var title, price;

          if (context.themeSettings.halo_card_title == 'ellipsis') {
            title = '<a href="' + item.path + '" class="card-ellipsis" style="-webkit-box-orient: vertical;">' + item.name + '</a>';
          } else {
            title = '<a href="' + item.path + '">' + item.name + '</a>';
          }

          if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
            if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
              var priceMin = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              var priceMax = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                    </div>\
                                    <div class="price-section price-section--withoutTax">\
                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceMin + ' - ' + priceMax + '</span>\
                                    </div>';
            } else {
              var priceDef = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");

              if (item.prices.retailPrice == null) {
                if (item.prices.basePrice.value > item.prices.price.value) {
                  var priceBas = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceBas + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              } else {
                if (item.prices.retailPrice.value > item.prices.price.value) {
                  var priceRet = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceRet + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              }
            }
          } else {
            price = '<p translate>Log in for pricing</p>';
          }

          var html_card = '<div class="card card-custom" data-product-id="' + item.entityId + '">\
                                        <div class="card-image">\
                                            <a class="card-link" href="' + item.path + '">\
                                                <img src="' + item.defaultImage.img70px + '" alt="' + item.name + '" title="' + item.name + '" />\
                                            </a>\
                                        </div>\
                                        <div class="card-content">\
                                            <h4 class="card-title">' + title + '</h4>\
                                            <div class="card-price" data-test-info-type="price">' + price + '</div>\
                                        </div>\
                                    </div>';

          if (item.entityId == prevId) {
            if (item.path !== undefined) {
              $prodIcons.find('.prev-icon').attr('href', item.path);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(html_card);
            } else {
              $prodIcons.find('.prev-icon').remove();
              $prodWrap.find('#prev-product-modal').remove();
            }
          }

          if (item.entityId == nextId) {
            if (item.path !== undefined) {
              $prodIcons.find('.next-icon').attr('href', item.path);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(html_card);
            } else {
              $prodIcons.find('.next-icon').remove();
              $prodWrap.find('#next-product-modal').remove();
            }
          }
        });
      }
    };

    var token = context.token;
    var curCode = $('.body').data('currency-code');
    var productId = $('.productView-nextProducts').data('product-id'),
        nextId = productId + 1,
        prevId = productId - 1,
        nextLink,
        prevLink,
        list;
    var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
        $prodIcons = $('.productView-nextProducts .next-prev-icons');

    if (prevId != undefined && nextId != undefined) {
      list = [prevId, nextId];
      getProduct(list).then(function (data) {
        renderProduct(data.site.products.edges, data.site.currency.display);
      });
    }

    $prodIcons.on('mouseover', function () {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function () {
      $prodWrap.removeClass('is-active');
    });
    $('.next-icon', $prodIcons).on('mouseover', function () {
      $('#prev-product-modal').removeClass('is-show');
      $('#next-product-modal').addClass('is-show');
    });
    $('.prev-icon', $prodIcons).on('mouseover', function () {
      $('#next-product-modal').removeClass('is-show');
      $('#prev-product-modal').addClass('is-show');
    });
    $prodWrap.on('mouseover', function () {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function () {
      $prodWrap.removeClass('is-active');
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context, el) {
  var $popup = $('.lookbook-popup');
  var $el = el;
  var $options = {
    template: 'halothemes/products/halo-lookbook-tmp'
  };
  $el.find('.item .item-point').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.target).data('product-id'),
        position = $(event.target).offset(),
        container = $el.offset();

    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }

        $popup.html(response);
      });

      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 100,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }

      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.close-product', function (event) {
    event.preventDefault();

    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('.item .item-point').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _bigcommerce_stencil_utils_src_lib_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils/src/lib/request.js */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");







/* harmony default export */ __webpack_exports__["default"] = (function ($scope, context) {
  var offsetScroll = $scope.find('[data-cart-item-add]'),
      scroll = offsetScroll.offset().top + offsetScroll.outerHeight(true);
  var showPrice = context.themeSettings.restrict_to_login;
  var previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#previewModal')[0],
      $sticky = $('.sticky-add-to-cart'),
      $stickyClose = $sticky.find('.sticky-product-close'),
      $stickyExpand = $sticky.find('.sticky-product-expand'),
      $prodId = $sticky.find('[data-cart-item-add-2] [name="product_id"]').val(),
      $prodPrice = $sticky.find('.sticky-price'),
      $prodOptions = $sticky.find('.sticky-options'),
      $prodOptionLabel = $prodOptions.find('.sticky-options-label'),
      $prodOptionDropdown = $prodOptions.find('.sticky-options-dropdown'),
      $imageWrapper = $sticky.find('.sticky-image'),
      $prodBtn = $sticky.find('.sticky-actions .button'),
      $prodWLBtn = $sticky.find('.sticky-wishlist'),
      waitMessage = $prodBtn.data('waitMessage'),
      originalBtnVal = $prodBtn.text(),
      $body = $('body');

  function loadSticky() {
    if (context.themeSettings.halo_sticky_add_to_cart == true && $sticky.length > 0) {
      loadOptions();
      $(window).scroll(function () {
        if ($(window).scrollTop() > scroll + 100) {
          if (!$sticky.hasClass('show-sticky')) {
            $sticky.addClass('show-sticky');

            if ($body.hasClass('page-type-product')) {
              $body.addClass('openStickyAddToCart');
            }
          }
        } else {
          $sticky.removeClass('show-sticky hidden-sticky show-full-sticky');

          if ($body.hasClass('page-type-product')) {
            $body.removeClass('openStickyAddToCart');
          }
        }
      });
      $prodOptionLabel.on('click', function (event) {
        $prodOptionDropdown.toggleClass('is-open');
      });
      $prodOptionDropdown.on('click', '.option-item', function (event) {
        var $target = $(event.currentTarget);

        if (!$target.hasClass('is-select')) {
          var optionLabel = $target.find('.option-itemWrapper').html(),
              optionAttr = $target.data('variant-attr');
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange($prodId, optionAttr, function (err, response) {
            var productAttributesData = response.data || {};
            updateView(productAttributesData);
          });
          $prodOptionDropdown.find('.option-item').removeClass('is-select');
          $target.addClass('is-select');
          $prodOptionLabel.find('.text').html(optionLabel);
          $prodOptionDropdown.removeClass('is-open');
        }
      });
      $stickyClose.on('click', function (event) {
        event.preventDefault();

        if ($sticky.hasClass('show-full-sticky')) {
          $sticky.removeClass('show-full-sticky');
        } else {
          $sticky.addClass('hidden-sticky');

          if ($body.hasClass('page-type-product')) {
            $body.removeClass('openStickyAddToCart');
          }
        }
      });
      $stickyExpand.on('click', function (event) {
        event.preventDefault();
        $sticky.addClass('show-full-sticky');
      });
      $prodBtn.on('click', function (event) {
        event.preventDefault();
        var attr = $prodBtn.attr('disabled2');

        if (typeof attr !== typeof undefined && attr !== false) {
          var form = $('form[data-cart-item-add]', $scope),
              height = $(window).scrollTop(),
              formHeight = form.offset().top + form.height() / 2;

          if (height > formHeight) {
            $('body,html').animate({
              scrollTop: form.offset().top - 50
            }, 700);
          }
        } else {
          addToCart();
        }
      });
      $prodWLBtn.on('click', function (event) {
        event.preventDefault();
        var $this_wl = $(event.currentTarget),
            url_awl = $this_wl.attr('href');
        $.post(url_awl).done(function () {
          window.location.href = url_awl;
        });
      });
      $(document).on('click', function (event) {
        if ($prodOptionDropdown.hasClass('is-open')) {
          if ($(event.target).closest('.sticky-options-dropdown').length === 0 && $(event.target).closest('.sticky-options-label').length === 0) {
            $prodOptionDropdown.removeClass('is-open');
          }
        }
      });
    }
  }

  loadSticky();

  function loadOptions() {
    if ($prodOptions.length > 0) {
      (function () {
        var decrementRows = function decrementRows(dLength) {
          var currenIndex = dLength - 1;
          rows[currenIndex] += 1;

          if (rows[currenIndex] < rowLimits[currenIndex] === false) {
            if (currenIndex === 0) {
              isNewOptionsReady = true;
            } else {
              rows[currenIndex] = 0;
              decrementRows(currenIndex);
            }
          }
        };

        var rows = [],
            rowLimits = [],
            rowObjects = [],
            newOptions = [];
        $('[data-product-attribute]', $scope).each(function (index, element) {
          var id = $(element).data('product-option-id'),
              type = $(element).data('product-attribute');

          if (type === 'input-checkbox' || type === 'product-list' || type === 'date' || type === 'input-file' || type === 'input-text' || type === 'input-number' || type === 'textarea') {} else {
            rows.push(0);

            if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch') {
              rowLimits.push($(element).find('.form-radio').length);
            }

            if (type === 'set-select') {
              rowLimits.push($(element).find('.form-select option:not(:first-child)').length);
            }

            var rowObject = [];

            if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch') {
              $(element).find('.form-radio').each(function (index2, element2) {
                rowObject.push({
                  attribute: id,
                  attributeValue: $(element2).attr('value'),
                  attributeLabel: $(element2).attr('name'),
                  attributeName: $(element2).attr('data-title'),
                  attributeIndex: $(element2).attr('data-index'),
                  invisible: false,
                  instock: true
                });
              });
            }

            if (type === 'set-select') {
              var setLabel = $(element).find('.form-select').attr('name');
              $(element).find('.form-select option:not(:first-child)').each(function (index2, element2) {
                rowObject.push({
                  attribute: id,
                  attributeValue: $(element2).attr('value'),
                  attributeLabel: setLabel,
                  attributeName: $(element2).attr('data-title'),
                  attributeIndex: $(element2).attr('data-index'),
                  invisible: false,
                  instock: true
                });
              });
            }

            rowObjects.push(rowObject);
          }
        });
        var isNewOptionsReady = false;
        var currentOptionIndex = 0;

        while (isNewOptionsReady === false) {
          newOptions[currentOptionIndex] = {
            attributes: [],
            label: '',
            name: '',
            position: ''
          };
          rows.forEach(function (r, rIndex) {
            newOptions[currentOptionIndex].attributes.push(rowObjects[rIndex][r]);
            newOptions[currentOptionIndex].label += rowObjects[rIndex][r].attributeLabel + " ";
            newOptions[currentOptionIndex].name += "<span>" + rowObjects[rIndex][r].attributeName + "</span>";
            newOptions[currentOptionIndex].position += "" + rowObjects[rIndex][r].attributeIndex;
          });
          decrementRows(rows.length);
          currentOptionIndex += 1;
        }

        var currentNewOptionIndex = 0;
        newOptions.forEach(function (newOption, newOptionIndex, newEl) {
          var attributeString = '';
          newOption.attributes.forEach(function (attribute) {
            attributeString = attributeString + ("&attribute[" + attribute.attribute + "]=") + attribute.attributeValue;
          });
          $(document.createElement("div")).attr({
            class: 'option-item',
            'data-variant-index': newOption.position,
            'data-variant-attr': attributeString
          }).append('<div class="option-itemWrapper">' + newOption.name + '</div>').appendTo($prodOptionDropdown);
        });
      })();
    }
  }

  function addToCart() {
    var $form = $('[data-cart-item-add-2]');
    var sku = $form.find('.sticky-actions').attr('data-product-sku-add');
    var att = $form.find('.option-item.is-select').data('variant-attr');
    var options = {
      template: 'cart/preview'
    };
    var url;

    if (sku != undefined && sku != null && sku != '') {
      url = "/cart.php?action=add&sku=" + sku + "&qty=1";
    } else {
      url = "/cart.php?action=add&product_id=" + $prodId + att;
    }

    $prodBtn.text(waitMessage).prop('disabled', true);
    Object(_bigcommerce_stencil_utils_src_lib_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(encodeURI(url), {
      method: 'POST',
      requestOptions: options
    }, function (err, response) {
      if (err) {
        throw new Error(err);
      }

      var errorMessage = err;

      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["showAlertModal"])(tmp.textContent || tmp.innerText);
      }

      $prodBtn.text(originalBtnVal).prop('disabled', false);

      if (previewModal) {
        if (context.themeSettings.halo_add_to_cart_popup === 'normal') {
          previewModal.$modal.removeClass().addClass('modal modal--preview');
          previewModal.open({
            size: 'large'
          });
        } else if (context.themeSettings.halo_add_to_cart_popup === 'mini') {
          previewModal.$modal.removeClass().addClass('modal modal--preview modal--previewMini');
          previewModal.open({
            size: 'small'
          });

          if ($(".modal-background:visible").length > 0) {
            $('.modal-background:visible').hide();
          }
        }

        updateCartContent(previewModal, response);
      } else {
        redirectTo(response.data.cart_item.cart_url || context.urls.cart);
      }
    });
  }

  function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  function updateCartContent(modal, response) {
    var quantity = parseInt($body.find('.cartDesktop .cart-quantity').text()) + 1;
    $body.trigger('cart-quantity-update', quantity);
    modal.updateContent(response);
  }

  function showVariantImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      return mainImageUrl;
    }
  }

  function updateView(data) {
    var inStock = data.instock,
        image = data.image,
        sku = data.sku,
        price = data.price;

    if (inStock) {
      $prodBtn.attr('disabled', false);
      $prodOptionLabel.removeClass('option-hidden').addClass('option-visible');
    } else {
      $prodBtn.attr('disabled', true);
      $prodOptionLabel.removeClass('option-visible').addClass('option-hidden');
    }

    if (image != undefined && image !== null && image !== '') {
      $imageWrapper.find('img').attr('srcset', showVariantImage(image));
    }

    if (sku) {
      $('[data-product-sku-add]').attr('data-product-sku-add', sku);
    }

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(price)) {
      updatePriceView(price);
    }
  }

  function updatePriceView(price) {
    if (price.with_tax) {
      $('.price-label', $prodPrice).show();
      $('[data-product-price-with-tax]', $prodPrice).html(price.with_tax.formatted);
    }

    if (price.without_tax) {
      $('.price-label', $prodPrice).show();
      $('[data-product-price-without-tax]', $prodPrice).html(price.without_tax.formatted);
    }

    if (price.rrp_with_tax) {
      $('.rrp-price--withTax', $prodPrice).show();
      $('[data-product-rrp-with-tax]', $prodPrice).html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      $('.rrp-price--withoutTax', $prodPrice).show();
      $('[data-product-rrp-price-without-tax]', $prodPrice).html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      $('.price-section--saving', $prodPrice).show();
      $('[data-product-price-saved]', $prodPrice).html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      $('.price-label', $prodPrice).hide();
      $('.non-sale-price--withTax', $prodPrice).show();
      $('.price-now-label', $prodPrice).show();
      $('[data-product-non-sale-price-with-tax]', $prodPrice).html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      $('.price-label', $prodPrice).hide();
      $('.non-sale-price--withoutTax', $prodPrice).show();
      $('.price-now-label', $prodPrice).show();
      $('[data-product-non-sale-price-without-tax]', $prodPrice).html(price.non_sale_price_without_tax.formatted);
    }
  }

  window.onload = function () {
    if ($('.sticky-add-to-cart').length > 0) {
      if ($(window).scrollTop() > scroll - 160) {
        if (!$('.sticky-add-to-cart').hasClass('show-sticky')) {
          $('.sticky-add-to-cart').addClass('show-sticky');

          if ($('body').hasClass('page-type-product')) {
            $('body').addClass('openStickyAddToCart');
          }
        }
      }
    }
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* harmony import */ var _halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNextProducts */ "./assets/js/theme/halothemes/haloNextProducts.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */















var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();
    this.productCustomTab(); // this.productTabToggle();

    this.compareColors();
    this.productViewInfoTabs();
    this.soldProduct($('.productView-soldProduct'));
    this.viewingProduct($('.productView-ViewingProduct'));
    this.countDownProduct($('.productView-countDown'));
    this.loadOptionForProductCard();
    this.reviewShow();
    Object(_halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    Object(_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_11__["default"])($('.productView'), this.context);
    Object(_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context, $('.productView-lookbook'));
    Object(_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_9__["default"])($('.productView-slick'), this.context);
    Object(_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_13__["default"])($('.productView-slick'), this.context);
    Object(_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_12__["default"])($('.productView-slick [data-slick]'));
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  _proto.reviewShow = function reviewShow(x) {
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
        var filteredAr = review2.filter(function (item) {
          return item['Product SKU'] === item1.innerHTML;
        });
        filteredAr.forEach(function (rev) {
          review3.push(rev['Review rate']);
        });
        var reviewAvg = Math.round(review3.reduce(function (a, b) {
          return a + b;
        }, 0) / review3.length * 10) / 10;
        $(item1.nextElementSibling).append("\n                <style>    .checked {\n                    color: rgb(255, 210, 0);\n            \n            }\n            .fa-star-o {\n                color: rgb(255, 210, 0);\n        \n            }\n            @media (min-width: 768px) {\n                .productReview2 {\n                    display: flex;\n                }\n            }\n            @media (min-width: 1025px) {\n                .productReview2 {\n                    display: unset;\n                }\n            }\n            @media (min-width: 1400px) {\n                .productReview2 {\n                    display: flex;\n                }\n            }\n            </style>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                \n                <span>\n                <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n            </span>\n            <div style=padding-left:5px;>\n                " + review3.length + "  Rese\xF1as\n            </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
      });
    }).catch(function (err) {
      console.log(err);
    });
  };

  _proto.productCustomTab = function productCustomTab() {
    if ($('.productView-description [data-custom-tab]').length > 0) {
      $('.productView-description [data-custom-tab]').appendTo('#halo-custom-tab .card-body');
      $('#halo-custom-tab').removeClass('u-hiddenVisually');
      $('.productView-shortDesc [data-custom-tab]').remove();
      $('#halo-productView-description .productView-tabs .card-body').addClass('has-customTab');
    } else {
      $('#halo-productView-description .productView-tabs .card.warranty .title').addClass('no-customTab');
    }
  } // productTabToggle(){
  //     $('.productView-tabs .card .title').on('click', event => {
  //         event.preventDefault();
  //         var $target = $(event.currentTarget);
  //         $('.productView-tabs .card .title').not($target).removeClass('collapsed');
  //         if($target.hasClass('collapsed')){
  //             $target.removeClass('collapsed');
  //         } else{
  //             $target.addClass('collapsed');
  //         }
  //         $('.productView-tabs .card').each((index, element) =>{
  //             if($('.title', element).hasClass('collapsed')){
  //                 $(element).find('.collapse').slideDown("slow");
  //             } else{
  //                 $(element).find('.collapse').slideUp("slow");
  //             }
  //         });
  //     });
  //     $('.productView-tabs .card:nth-child(1) .title').trigger('click');
  // }
  ;

  _proto.soldProduct = function soldProduct($wrapper) {
    if ($wrapper.length > 0) {
      var numbersProduct_text = this.context.themeSettings.product_soldProduct_products,
          numbersHours_text = this.context.themeSettings.product_soldProduct_hours,
          soldProductText = this.context.themeSettings.product_soldProduct_text,
          soldProductText2 = this.context.themeSettings.product_soldProduct_hours_text;
      var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
          numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
          numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
          numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
      $wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span class="text">' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
      $wrapper.show();
    }
  };

  _proto.countDownProduct = function countDownProduct($wrapper) {
    if ($wrapper.length > 0) {
      var countDown = $wrapper.data('countdown'),
          countDownDate = new Date(countDown).getTime(),
          seft = $wrapper;
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

  _proto.viewingProduct = function viewingProduct($wrapper) {
    if ($wrapper.length > 0) {
      var viewerText = this.context.themeSettings.product_viewingProduct_text,
          numbersViewer_text = this.context.themeSettings.product_viewingProduct_viewer,
          numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
      setInterval(function () {
        var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
        $wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
        $wrapper.removeClass('u-hiddenVisually').show();
      }, 10000);
    }
  };

  _proto.compareColors = function compareColors() {
    var $swatchWrapper = $('.halo-compareColors-swatch'),
        $imageWrapper = $('.halo-compareColors-image'),
        $textWrapper = $('.halo-compareColors-text');
    $('.form-option', $swatchWrapper).on('click', function (event) {
      var $this = $(event.currentTarget);
      $this.toggleClass('show-color');
      var title = $this.find('.form-option-variant').attr('title'),
          id = $this.data('product-swatch-value'),
          $color,
          $color2,
          $color3,
          $img,
          $pattern;

      if ($this.hasClass('show-color')) {
        if ($this.find('.form-option-variant--color').length) {
          $color = $this.find('.form-option-variant--color').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color" style="' + $color + ';"></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color2').length) {
          $color = $this.find('.form-option-variant--color2 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color2 span:nth-child(2)').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color color2"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color3').length) {
          $color = $this.find('.form-option-variant--color3 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color3 span:nth-child(2)').attr('style');
          $color3 = $this.find('.form-option-variant--color3 span:nth-child(3)').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color color3"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span><span style="' + $color3 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--pattern').length) {
          $img = $this.find('.form-option-variant--pattern').attr('style');
          $pattern = $this.find('.form-option-variant--pattern').attr('data-pattern');
          $imageWrapper.append('<div class="item item-partern item-' + id + '"><span class="image"><img src=' + $pattern + ' alt=' + title + ' title=' + title + '></span><span class="title">' + title + '</span></div>');
        }
      } else {
        $('.item-' + id + '', $imageWrapper).remove();
      }

      if ($imageWrapper.children().length > 0) {
        $textWrapper.hide();
      } else {
        $textWrapper.show();
      }

      if ($(window).width() >= 1025) {
        var el = document.getElementById('color-swatch-image');
        new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
          animation: 150
        });
      }
    });
  };

  _proto.productViewInfoTabs = function productViewInfoTabs() {
    $('.productView-infoTabs .productView-infoTab a').on('click', function (event) {
      event.preventDefault();
      var $block = $(event.currentTarget).attr('href');
      $('html, body').animate({
        scrollTop: $($block).offset().top - $('.header').height()
      }, 700);

      if ($block == '#halo-productView-description') {
        if (!$('.productView-tabs .card:nth-child(1) .title').hasClass('collapsed')) {
          $('.productView-tabs .card:nth-child(1) .title').trigger('click');
        }
      }
    });
    $('.productView-moreDesc a').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#halo-productView-description').offset().top - $('.header').height()
      }, 700);

      if (!$('.productView-tabs .card:nth-child(1) .title').hasClass('collapsed')) {
        $('.productView-tabs .card:nth-child(1) .title').trigger('click');
      }
    });
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var _this3 = this;

    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__["default"])(_this3.context, $prodWrapId);
      });
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#tab-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');

      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#tab-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #tab-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #tab-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9OZXh0UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJjb250ZXh0Iiwid3JhcHBlciIsInRoZW1lU2V0dGluZ3MiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImNhbGxQcm9kdWN0T3B0aW9uIiwicHJvZHVjdF9jbGFzcyIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJwcm9kdWN0SWQiLCIkIiwiZGF0YSIsImxpc3QiLCJwdXNoIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRQcm9kdWN0T3B0aW9uIiwidGhlbiIsInJlbmRlck9wdGlvbiIsImlkeCIsIml0ZW0iLCJhcnIiLCJwcm9kdWN0X3dyYXBwZXIiLCJmaW5kIiwidHh0IiwicmVtb3ZlIiwiY291bnRNb3JlT3B0aW9uIiwicHJvZHVjdExpbmsiLCJhdHRyIiwiYXBwZW5kIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcyIsImpzb24iLCJhRmlsdGVyIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJub2RlIiwiZW50aXR5SWQiLCJwcm9kdWN0RmllbGRDb2xvciIsInByb2R1Y3RGaWVsZFNpemUiLCJhRmlsdGVyMiIsInByb2R1Y3RPcHRpb25zIiwiYUZpbHRlcjMiLCJmaWx0ZXIiLCJkaXNwbGF5U3R5bGUiLCJhRmlsdGVyNSIsImRpc3BsYXlOYW1lIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyIiwiYUZpbHRlcjQiLCJ2YWx1ZXMiLCJ0aXRsZVZhciIsImxhYmVsIiwiaWRWYXIiLCJsZW5ndGhDb2xvclZhciIsImhleENvbG9ycyIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yMyIsImltZyIsImltYWdlVXJsIiwiQm9vbGVhbiIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dCIsIiRzY29wZSIsInRoaXNQcm91Y3RJZCIsInBhcnNlSW50IiwiJHJlbGF0ZVRhYiIsIiRidW5kbGUiLCIkYnVuZGxlTGlzdCIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwiY3VycmVuY3kiLCJtb25leSIsInNob3dCdW5kbGUiLCJkb2N1bWVudCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwibm90IiwicmVtb3ZlQ2xhc3MiLCJuZXh0IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInRhcmdldCIsImNsb3Nlc3QiLCJpZCIsInJlcGxhY2UiLCJwcm9kdWN0IiwiaXMiLCJ0b3RhbFByaWNlIiwiJGZvcm0iLCJhcnJQcm8iLCJBcnJheSIsInZhbCIsImNoZWNrIiwiY2hlY2tQcm9kdWN0IiwiayIsInNob3ciLCJhZGRUb0NhcnQiLCJlcnJvck1lc3NhZ2UiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic2hvd0FsZXJ0TW9kYWwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2RCdW5kbGVJZCIsInRvdGFsQmxvY2siLCJmaXJzdEl0ZW0iLCJwcm9kdWN0Q3VzdG9tRmllbGRzIiwib2JqIiwibmFtZSIsInBhcnNlIiwidmFsdWUiLCJncmVwIiwibnVtIiwicElkIiwidW5kZWZpbmVkIiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJmb3JFYWNoIiwic2hvd0xpc3QiLCJsaXN0RmlsdGVyIiwidW5pcXVlIiwiZm9ybSIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVwZGF0ZVZpZXciLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsInRyaW0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaHRtbCIsInNldFByb2R1Y3RWYXJpYW50Iiwic2hvd1NsaWNrU2xpZGVyIiwid3JhcCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibW9iaWxlRmlyc3QiLCJpbmZpbml0ZSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJpIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsImF0dCIsInByb3AiLCJmb2N1cyIsImFyclAiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInByb2QiLCJjYXJ0IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImVycm9yIiwiYWxlcnQiLCJoaWRlIiwiJG1vZGFsIiwib3BlbiIsInNpemUiLCIkYm9keSIsInF1YW50aXR5IiwidGV4dCIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50IiwidG90YWwiLCJzeW1ib2wiLCJzeW1ib2xDaGFuZ2UiLCJkZWNpbWFsUGxhY2VzIiwiZGVjaW1hbFNlcGFyYXRvciIsInRob3VzYW5kc1NlcGFyYXRvciIsInN5bWJvbExvY2F0aW9uIiwiY3VyciIsInRva2VuMSIsInRva2VuMiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbF90b2tlbiIsInRob3VzYW5kc190b2tlbiIsImN1cnJlbmN5X2xvY2F0aW9uIiwiY3VycmVuY3lfdG9rZW4iLCJwcmljZSIsInBhcnNlRmxvYXQiLCJpbmRleE9mIiwiZm9ybWF0TW9uZXkiLCJuIiwiYyIsImQiLCJ0IiwiaXNOYU4iLCJNYXRoIiwiYWJzIiwicyIsIlN0cmluZyIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImpvaW4iLCJjaGVja2VkIiwibGFiZWxzIiwidGl0bGUiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJpbWFnZSIsIm1haW5JbWFnZVVybCIsInRvb2xzIiwiaW1hZ2VTcmNzZXQiLCJnZXRTcmNzZXQiLCJwcm9kdWN0Z2FsbGVyeV9zaXplIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwic3RvY2siLCJoYWxvX3N0b2NrX2xldmVsX2xpbWl0IiwiJHN0b2NrTGVmdFdyYXBwZXIiLCIkc3RvY2tMZWZ0IiwidXBkYXRlUHJpY2VWaWV3IiwicHJvZHVjdENoZWNrYm94IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJwcmljZURhdGEiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRza3UiLCIkdXBjIiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJmb3JtRGF0YSIsImtleSIsIkZpbGUiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImdldFByb2R1Y3QiLCJjdXJDb2RlIiwicmVuZGVyUHJvZHVjdCIsImN1ckRpc3BsYXkiLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsVG9rZW4iLCJ0aG91c2FuZHNUb2tlbiIsImhhbG9fY2FyZF90aXRsZSIsInBhdGgiLCJyZXN0cmljdF90b19sb2dpbiIsInByaWNlcyIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJwcmljZV9yYW5nZXMiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VEZWYiLCJyZXRhaWxQcmljZSIsImJhc2VQcmljZSIsInByaWNlQmFzIiwicHJpY2VSZXQiLCJodG1sX2NhcmQiLCJkZWZhdWx0SW1hZ2UiLCJpbWc3MHB4IiwicHJldklkIiwiJHByb2RJY29ucyIsIiRwcm9kV3JhcCIsIm5leHRJZCIsIm5leHRMaW5rIiwicHJldkxpbmsiLCJkaXNwbGF5IiwiZWwiLCIkcG9wdXAiLCIkZWwiLCIkb3B0aW9ucyIsImVtcHR5IiwiJHByb2RJZCIsInBvc2l0aW9uIiwib2Zmc2V0IiwiY29udGFpbmVyIiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0Iiwib2Zmc2V0U2Nyb2xsIiwic2Nyb2xsIiwib3V0ZXJIZWlnaHQiLCJzaG93UHJpY2UiLCJwcmV2aWV3TW9kYWwiLCIkc3RpY2t5IiwiJHN0aWNreUNsb3NlIiwiJHN0aWNreUV4cGFuZCIsIiRwcm9kUHJpY2UiLCIkcHJvZE9wdGlvbnMiLCIkcHJvZE9wdGlvbkxhYmVsIiwiJHByb2RPcHRpb25Ecm9wZG93biIsIiRpbWFnZVdyYXBwZXIiLCIkcHJvZEJ0biIsIiRwcm9kV0xCdG4iLCJ3YWl0TWVzc2FnZSIsIm9yaWdpbmFsQnRuVmFsIiwibG9hZFN0aWNreSIsImhhbG9fc3RpY2t5X2FkZF90b19jYXJ0IiwibG9hZE9wdGlvbnMiLCJzY3JvbGxUb3AiLCJ0b2dnbGVDbGFzcyIsIm9wdGlvbkF0dHIiLCJoZWlnaHQiLCJmb3JtSGVpZ2h0IiwiYW5pbWF0ZSIsIiR0aGlzX3dsIiwidXJsX2F3bCIsInBvc3QiLCJkb25lIiwibG9jYXRpb24iLCJocmVmIiwiZGVjcmVtZW50Um93cyIsImRMZW5ndGgiLCJjdXJyZW5JbmRleCIsInJvd3MiLCJyb3dMaW1pdHMiLCJpc05ld09wdGlvbnNSZWFkeSIsInJvd09iamVjdHMiLCJuZXdPcHRpb25zIiwicm93T2JqZWN0IiwiaW5kZXgyIiwiZWxlbWVudDIiLCJhdHRyaWJ1dGVWYWx1ZSIsImF0dHJpYnV0ZUxhYmVsIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZUluZGV4IiwiaW52aXNpYmxlIiwic2V0TGFiZWwiLCJjdXJyZW50T3B0aW9uSW5kZXgiLCJhdHRyaWJ1dGVzIiwiciIsInJJbmRleCIsImN1cnJlbnROZXdPcHRpb25JbmRleCIsIm5ld09wdGlvbiIsIm5ld09wdGlvbkluZGV4IiwibmV3RWwiLCJhdHRyaWJ1dGVTdHJpbmciLCJjbGFzcyIsImFwcGVuZFRvIiwic2t1IiwidXJsIiwicmVxdWVzdCIsImVuY29kZVVSSSIsInJlcXVlc3RPcHRpb25zIiwiRXJyb3IiLCJoYWxvX2FkZF90b19jYXJ0X3BvcHVwIiwidXBkYXRlQ2FydENvbnRlbnQiLCJyZWRpcmVjdFRvIiwiY2FydF9pdGVtIiwiY2FydF91cmwiLCJ1cmxzIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJpZnJhbWVTZGsiLCJzaG93VmFyaWFudEltYWdlIiwiaW5TdG9jayIsIm9ubG9hZCIsIlByb2R1Y3QiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJvblJlYWR5IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwiY2xhc3NpZnlGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJwcm9kdWN0Q3VzdG9tVGFiIiwiY29tcGFyZUNvbG9ycyIsInByb2R1Y3RWaWV3SW5mb1RhYnMiLCJzb2xkUHJvZHVjdCIsInZpZXdpbmdQcm9kdWN0IiwiY291bnREb3duUHJvZHVjdCIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsInJldmlld1Nob3ciLCJoYWxvTmV4dFByb2R1Y3RzIiwiaGFsb1N0aWNreUFkZFRvQ2FydCIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCJoYWxvQnVuZGxlUHJvZHVjdHMiLCJoYWxvTm90aWZ5TWUiLCJoYWxvWW91dHViZUNhcm91c2VsIiwibGltaXQiLCJyZXZpZXcyIiwiUHJvbWlzZSIsImFsbCIsIml0ZW0xIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicmV2aWV3MyIsImZpbHRlcmVkQXIiLCJyZXYiLCJyZXZpZXdBdmciLCJyb3VuZCIsInJlZHVjZSIsImEiLCJiIiwiY2F0Y2giLCJsb2ciLCIkd3JhcHBlciIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsImZsb29yIiwicmFuZG9tIiwibnVtYmVyc0hvdXJzTGlzdCIsIm51bWJlcnNIb3Vyc0l0ZW0iLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiY2xlYXJJbnRlcnZhbCIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RyQ291bnREb3duIiwidmlld2VyVGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJudW1iZXJzVmlld2VySXRlbSIsIiRzd2F0Y2hXcmFwcGVyIiwiJHRleHRXcmFwcGVyIiwiJHRoaXMiLCIkY29sb3IiLCIkY29sb3IyIiwiJGNvbG9yMyIsIiRpbWciLCIkcGF0dGVybiIsImdldEVsZW1lbnRCeUlkIiwiU29ydGFibGUiLCJhbmltYXRpb24iLCIkYmxvY2siLCIkcHJvZFdyYXBJZCIsImhhbG9BZGRPcHRpb24iLCJQYWdlTWFuYWdlciIsIm5vZCIsInN1Ym1pdCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiJGNvbnRlbnQiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImNsaWNrIiwiaGFzaCIsIiRuZXh0TGluayIsIiRwcmV2TGluayIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsImNiIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImlzSW5pdGlhbGl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0Es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QTBCSWdmLGNBMUJKLEdBMEJJLDBCQUFpQjtJQUNiLEtBQUtOLE9BQUwsQ0FBYWhmLFdBQWIsQ0FBeUIsV0FBekI7SUFDQSxLQUFLaWYsWUFBTCxDQUFrQkcsY0FBbEIsQ0FBaUNqZixRQUFqQyxDQUEwQyxXQUExQztFQUNILENBN0JMOztFQUFBLE9BK0JJK2UsVUEvQkosR0ErQkksc0JBQWE7SUFDVCxLQUFLRixPQUFMLENBQWF0ZixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLEtBQUt5ZixjQUFMLENBQW9CSSxJQUFwQixDQUF5QixJQUF6QixDQUF6QjtFQUNILENBakNMOztFQUFBO0FBQUE7QUFvQ2UsU0FBUzdILFlBQVQsR0FBd0I7RUFDbkMsSUFBTThILFNBQVMsR0FBRyxlQUFsQjtFQUNBLElBQU1DLGFBQWEsR0FBR3RrQixDQUFDLFlBQVVxa0IsU0FBVixPQUF2QjtFQUVBQyxhQUFhLENBQUMxa0IsSUFBZCxDQUFtQixVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7SUFDbkMsSUFBTW9XLEdBQUcsR0FBR2xXLENBQUMsQ0FBQ0YsT0FBRCxDQUFiO0lBQ0EsSUFBTXlrQixhQUFhLEdBQUdyTyxHQUFHLENBQUNqVyxJQUFKLENBQVNva0IsU0FBVCxhQUErQlgsWUFBckQ7O0lBRUEsSUFBSWEsYUFBSixFQUFtQjtNQUNmO0lBQ0g7O0lBRURyTyxHQUFHLENBQUNqVyxJQUFKLENBQVNva0IsU0FBVCxFQUFvQixJQUFJWCxZQUFKLENBQWlCeE4sR0FBakIsQ0FBcEI7RUFDSCxDQVREO0FBVUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgd3JhcHBlcikge1xuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW4sXG4gICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIgPSAkKCcjJyt3cmFwcGVyKSxcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQnKTtcbiAgICAgICAgdmFyICBsaXN0ID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gY2FsbFByb2R1Y3RPcHRpb24oKSB7XG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoZWxlbWVudCkuZGF0YShcInByb2R1Y3QtaWRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocHJvZHVjdElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKGxpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZ2V0UHJvZHVjdE9wdGlvbihsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb24oZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGxpc3QsIChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSBsaXN0W2lkeF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LXN3YXRjaC12YWx1ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbdHh0XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoID4gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50TW9yZU9wdGlvbiAgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCAtIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaW5rID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJ1tkYXRhLXByb2R1Y3QtaWQ9XCInK3Byb2R1Y3RJZCsnXCJdJykuZmluZCgnLmNhcmQtbGluaycpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPj0gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQgLnNob3dtb3JlJykubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJykuYXBwZW5kKCc8YSBocmVmPVwiJytwcm9kdWN0TGluaysnXCIgY2xhc3M9XCJzaG93bW9yZVwiPisnK2NvdW50TW9yZU9wdGlvbisnPC9hPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RPcHRpb24obGlzdCl7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSBTZXZlcmFsUHJvZHVjdHNCeUlEIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogW2ArbGlzdCtgXSwgZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleENvbG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsKHdpZHRoOiA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH0pLFxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uKGRhdGEpe1xuICAgICAgICAgICAgdmFyIGFGaWx0ZXIgPSBkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXM7XG5cbiAgICAgICAgICAgICQuZWFjaChhRmlsdGVyLCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gYUZpbHRlcltpbmRleF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRTaXplID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkLS1zaXplJyksXG4gICAgICAgICAgICAgICAgICAgIGFGaWx0ZXIyID0gYUZpbHRlcltpbmRleF0ubm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcztcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyMyA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlTdHlsZSA9PT0gJ1N3YXRjaCc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjUgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5TmFtZSA9PT0gY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXIzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjQgPSBhRmlsdGVyM1swXS5ub2RlLnZhbHVlcy5lZGdlcztcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYUZpbHRlcjQsIChpZHgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZVZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhDb2xvclZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMSA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjMgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5pbWFnZVVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGVuZ3RoQ29sb3JWYXIgPT0gMil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlbmd0aENvbG9yVmFyID09PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IzKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihjb2xvcjEpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcrY29sb3IxKydcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGltZykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJytpbWcrJylcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyNS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdEZpZWxkU2l6ZS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2l6ZVwiPjxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uXCI+Jytjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RUZXh0LnRvU3RyaW5nKCkrJzwvbGFiZWw+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigoYUZpbHRlcjUubGVuZ3RoID09IDApICYmIChhRmlsdGVyMy5sZW5ndGggPT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxQcm9kdWN0T3B0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRoaXNQcm91Y3RJZCA9IHBhcnNlSW50KGNvbnRleHQucHJvZHVjdElkKSxcbiAgICAgICAgJHJlbGF0ZVRhYiA9ICQoJyNoYWxvLXJlbGF0ZWQtcHJvZHVjdHMnKSxcbiAgICAgICAgJGJ1bmRsZSA9ICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLFxuICAgICAgICAkYnVuZGxlTGlzdCA9ICRidW5kbGUuZmluZCgnLmhhbG8tcHJvZHVjdC1saXN0Jyk7XG5cbiAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF07XG5cbiAgICB2YXIgY3VycmVuY3kgPSBjb250ZXh0Lm1vbmV5O1xuXG4gICAgc2hvd0J1bmRsZSgpO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLXRvZ2dsZS1vcHRpb25zJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5ub3QoJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgIGlmICghJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgICAgICAkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLW9wdGlvbi1jbG9zZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICgkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5oYWxvLWRldGFpbC1vcHRpb25zJykubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykubGVuZ3RoID09PSAwKSl7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmhhbG8tZGV0YWlsLWNoZWNrYm94JywgZXZlbnQgPT4ge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpZCA9ICR0YXJnZXQuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsJycpLFxuICAgICAgICAgICAgcHJvZHVjdCA9ICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvZHVjdC5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaWNvbkFkZCcpLnJlbW92ZUNsYXNzKCdoYWxvLXByb2R1Y3QtaWNvbkNoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdC5maW5kKCcuaGFsby1wcm9kdWN0LWljb25BZGQnKS5hZGRDbGFzcygnaGFsby1wcm9kdWN0LWljb25DaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2hhbG8tYWRkQWxsJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRidW5kbGUpO1xuICAgICAgICB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94JykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodmFsKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIGFyclByby5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrUHJvZHVjdCgkZm9ybSwgYXJyUHJvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBhcnJQcm8ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoJGZvcm0sIDAsIGFyclBybywgayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLic7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93QnVuZGxlKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW06ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tYnVuZGxlLXByb2R1Y3RzLXRtcCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tYnVuZGxlLXByb2R1Y3RzLW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwcm9kQnVuZGxlSWQgPSBbXSxcbiAgICAgICAgICAgIHRvdGFsQmxvY2sgPSAnJztcblxuICAgICAgICBmaXJzdEl0ZW0oKTtcblxuICAgICAgICAgaWYoJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbEJsb2NrID0gJzxkaXYgY2xhc3M9XCJoYWxvLXByb2R1Y3QtdG90YWxcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPkxvZyBpbiBmb3IgcHJpY2luZzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b3RhbEJsb2NrID0gJzxkaXYgY2xhc3M9XCJoYWxvLXByb2R1Y3QtdG90YWxcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlRvdGFsOjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgaGFsby1wcm9kdWN0LXRvdGFsLWJ1dHRvblwiIGlkPVwiaGFsby1hZGRBbGxcIiBocmVmPVwiI1wiPkFkZCBBbGwgVG8gQ2FydDwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgICRidW5kbGUuZmluZCgnLmJ1bmRsZS1wcm9kdWN0LXJpZ2h0JykuYXBwZW5kKHRvdGFsQmxvY2spO1xuXG4gICAgICAgICQuZWFjaChjb250ZXh0LnByb2R1Y3RDdXN0b21GaWVsZHMsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSAnX19idW5kbGVpZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9kQnVuZGxlSWQgPSBKU09OLnBhcnNlKCdbJytvYmoudmFsdWUrJ10nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvZEJ1bmRsZUlkID0gJC5ncmVwKHByb2RCdW5kbGVJZCwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT0gdGhpc1Byb3VjdElkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJGJ1bmRsZS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIG51bSA9IDAsXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuXG4gICAgICAgICAgICAkcmVsYXRlVGFiLmZpbmQoJy5jYXJkJykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJcIlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9ICQodmFsKS5kYXRhKCdwcm9kdWN0LWlkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaW5kZXggPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSAkcmVsYXRlVGFiLmZpbmQoJy5jYXJkJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJGJ1bmRsZS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtID0gMCxcbiAgICAgICAgICAgICAgICBsaXN0ID0gW10sXG4gICAgICAgICAgICAgICAgbGlzdEZpbHRlciA9ICQudW5pcXVlKHByb2RCdW5kbGVJZCk7XG5cbiAgICAgICAgICAgICQuZWFjaChsaXN0RmlsdGVyLCAoaW5kZXgsIHZhbCkgPT57XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIlwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcElkID0gdmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmluZGV4ID09IGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gcHJvZEJ1bmRsZUlkLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RJdGVtKCl7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbUZpcnN0JyksXG4gICAgICAgICAgICBwSWQgPSBmaXJzdEl0ZW0uZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgZm9ybSA9IGZpcnN0SXRlbS5maW5kKCdmb3JtJyksXG4gICAgICAgICAgICBoYXNPcHRpb25zID0gZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgsXG4gICAgICAgICAgICBoYXNEZWZhdWx0T3B0aW9ucyA9IGZvcm0uZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCBmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0xpc3QobGlzdCl7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gZWxlbWVudC5kYXRhO1xuXG4gICAgICAgICAgICAkYnVuZGxlTGlzdC5hcHBlbmQocmVzcG9uc2UuaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9ICQocmVzcG9uc2UuaXRlbSkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgICAgICRmb3JtID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwSWQgKyAnXCJdIGZvcm0nKTtcblxuICAgICAgICAgICAgICAgICRmb3JtLmFwcGVuZChyZXNwb25zZS5vcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvZHVjdE9wdGlvbnMoKTtcbiAgICAgICAgc2hvd1NsaWNrU2xpZGVyKCRidW5kbGVMaXN0KTtcblxuICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkYnVuZGxlLnJlbW92ZUNsYXNzKCdoYWxvLWJsb2NrLWRpc2FibGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93U2xpY2tTbGlkZXIod3JhcCl7XG4gICAgICAgIGlmKHdyYXAubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPScjc2xpY2stYXJyb3ctbmV4dCc+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9JyNzbGljay1hcnJvdy1wcmV2Jz48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvZHVjdChmb3JtLCBhcnJQcm8pIHtcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyclByby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGsgPSBhcnJQcm9baV0sXG4gICAgICAgICAgICAgICAgJGZvcm0gPSAkKGZvcm1ba10pO1xuXG4gICAgICAgICAgICBpZiAoJGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQmVmb3JlQWRkKCRhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBjaGVjayA9IHRydWUsXG4gICAgICAgICAgICBhdHQgPSBcIlwiO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnRleHQsIGlucHV0OnBhc3N3b3JkLCBpbnB1dDpmaWxlLCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkKGVsZW1lbnQpLnByb3AoJ3JlcXVpcmVkJykpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChhdHQgIT0gJChlbGVtZW50KS5hdHRyKFwibmFtZVwiKSkge1xuICAgICAgICAgICAgICAgIGF0dCA9ICQoZWxlbWVudCkuYXR0cihcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKCEkKGVsZW1lbnQpLnByb3AoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGZvcm0sIGksIGFyclAsIGspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvZCA9IGFyclBbaV07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1bcHJvZF0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgayA9IGsgLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgIGlmIChpID49IGFyclAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBtb2RhbC4kbW9kYWwucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnbW9kYWwgbW9kYWwtLXByZXZpZXcgbW9kYWwtLXByZXZpZXdNaW5pIG1vZGFsLS1wcmV2aWV3TWluaTInKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKHsgc2l6ZTogJ3NtYWxsJyB9KTtcblxuICAgICAgICAgICAgICAgIGlmKCQoXCIubW9kYWwtYmFja2dyb3VuZDp2aXNpYmxlXCIpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYmFja2dyb3VuZDp2aXNpYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZTtcblxuICAgICAgICAgICAgICAgIGlmKGsgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rLCAnK2srJyBpdGVtIHdhcyBhZGRlZCB0byB5b3VyIGNhcnQuIFdoYXRcXCdzIG5leHQ/XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdDYXJ0IHByZXZpZXdDYXJ0MlwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcmV2aWV3Q2FydENoZWNrb3V0IHByZXZpZXdDYXJ0Q2hlY2tvdXQyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jaGVja291dC5waHBcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2VlZCBUbyBDaGVja291dFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQtYXV0b0Nsb3NlXCIgZGF0YS1hdXRvLWNsb3NlPVwiMTBcIj5BdXRvIGNsb3NlIGFmdGVyIDxzcGFuIGNsYXNzPVwiY291bnRcIj48L3NwYW4+czwvcD5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2ssICcraysnIGl0ZW0gd2FzIGFkZGVkIHRvIHlvdXIgY2FydC4gV2hhdFxcJ3MgbmV4dD9cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0NhcnQgcHJldmlld0NhcnQyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQgcHJldmlld0NhcnRDaGVja291dDJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQtdGV4dFwiPlNvcnJ5ISBXZSBkb25cXCd0IGhhdmUgZW5vdWdoIHByb2R1Y3QgZm9yIHlvdXIgc2VsZWN0aW9uITwvcD5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQtYXV0b0Nsb3NlXCIgZGF0YS1hdXRvLWNsb3NlPVwiMTBcIj5BdXRvIGNsb3NlIGFmdGVyIDxzcGFuIGNsYXNzPVwiY291bnRcIj48L3NwYW4+czwvcD5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHBhcnNlSW50KCRib2R5LmZpbmQoJy5jYXJ0RGVza3RvcCAuY2FydC1xdWFudGl0eScpLnRleHQoKSkgKyBrO1xuXG4gICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclAsIGspO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3RhbFByaWNlKCkge1xuICAgICAgICB2YXIgdG90YWwgPSAwLFxuICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgc3ltYm9sQ2hhbmdlLFxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IsXG4gICAgICAgICAgICBzeW1ib2xMb2NhdGlvbixcbiAgICAgICAgICAgIGN1cnIsXG4gICAgICAgICAgICB0b2tlbjEsXG4gICAgICAgICAgICB0b2tlbjIsXG4gICAgICAgICAgICBsZW5ndGg7XG5cbiAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGN1cnJlbmN5LmRlY2ltYWxfcGxhY2VzO1xuICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gY3VycmVuY3kuZGVjaW1hbF90b2tlbjtcbiAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yID0gY3VycmVuY3kudGhvdXNhbmRzX3Rva2VuO1xuICAgICAgICBzeW1ib2xMb2NhdGlvbiA9IGN1cnJlbmN5LmN1cnJlbmN5X2xvY2F0aW9uO1xuICAgICAgICBzeW1ib2wgPSBjdXJyZW5jeS5jdXJyZW5jeV90b2tlbjtcblxuICAgICAgICAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW0uaXNDaGVja2VkJykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHByaWNlID0gcGFyc2VGbG9hdCgkKHZhbCkuZmluZCgnW2RhdGEtcHJpY2UtdmFsdWVdJykuYXR0cignZGF0YS1wcmljZS12YWx1ZScpKTtcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0Vmlldy1wcmljZSA+IC5wcmljZS1zZWN0aW9uID4gLnByaWNlLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnIgPSAkKCcucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aFRheCcsICRzY29wZSkudGV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VyciA9ICQoJy5wcm9kdWN0Vmlldy1wcmljZSA+IC5wcmljZS1zZWN0aW9uID4gLnByaWNlLnByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKS50ZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzeW1ib2xDaGFuZ2UgPSBjdXJyLnJlcGxhY2UoL1swLTldL2csIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpLnJlcGxhY2UoXCIsXCIsIFwiXCIpO1xuXG4gICAgICAgIGlmKHN5bWJvbCAhPSBzeW1ib2xDaGFuZ2Upe1xuICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9sQ2hhbmdlO1xuICAgICAgICAgICAgdG9rZW4xID0gKGN1cnIuaW5kZXhPZignLicpKTtcbiAgICAgICAgICAgIHRva2VuMiA9IChjdXJyLmluZGV4T2YoJywnKSk7XG4gICAgICAgICAgICBsZW5ndGggPSBjdXJyLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChjdXJyLmluZGV4T2Yoc3ltYm9sKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbExvY2F0aW9uID0gY3Vyci5pbmRleE9mKHN5bWJvbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbjEgPCB0b2tlbjIpIHtcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSAnLic7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9ICcsJztcblxuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSAwIHx8IHN5bWJvbExvY2F0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMiAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSAnLCc7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9ICcuJztcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sTG9jYXRpb24gPT0gMCB8fCBzeW1ib2xMb2NhdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gbGVuZ3RoIC0gdG9rZW4xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjEgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRvdGFsID09IDApe1xuICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcjaGFsby1hZGRBbGwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkYnVuZGxlLmZpbmQoJyNoYWxvLWFkZEFsbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG90YWwgPSBmb3JtYXRNb25leSh0b3RhbCwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFNlcGFyYXRvciwgdGhvdXNhbmRzU2VwYXJhdG9yKTtcblxuICAgICAgICBpZiAoc3ltYm9sTG9jYXRpb24gPT0gXCJsZWZ0XCIgfHwgc3ltYm9sTG9jYXRpb24gPT0gMCl7XG4gICAgICAgICAgICB0b3RhbCA9IHN5bWJvbCArIHRvdGFsO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5maW5kKCcuaGFsby1wcm9kdWN0LXRvdGFsIC5wcmljZScpLmh0bWwodG90YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG4sIGMsIGQsIHQpIHtcbiAgICAgICAgdmFyIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcblxuICAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm9kdWN0T3B0aW9ucygpIHtcbiAgICAgICAgaWYoISRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJGJ1bmRsZSksXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LCBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KGxhYmVsLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRzY29wZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCAkc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS5pbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBkYXRhLmltYWdlLmRhdGEsIHsgJzF4JzogY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RnYWxsZXJ5X3NpemUgfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCRzY29wZSwgZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XG5cbiAgICAgICAgc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmIChfLmlzTnVtYmVyKGRhdGEuc3RvY2spKSB7XG4gICAgICAgICAgICBpZigoZGF0YS5zdG9jayA8PSBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19zdG9ja19sZXZlbF9saW1pdCkpICYmIChkYXRhLnN0b2NrID4gMCkpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJyksXG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3ggPSBwcm9kdWN0LmZpbmQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpO1xuXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQgaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpLFxuICAgICAgICAgICAgcHJvZHVjdCA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLFxuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94ID0gcHJvZHVjdC5maW5kKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKTtcblxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgcHJvZHVjdC5yZW1vdmVDbGFzcygnaXNDaGVja2VkIGhhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlRGF0YToge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJ1tkYXRhLXByaWNlLXZhbHVlXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHN0b2NrTGVmdDogJCgnW2RhdGEtc3RvY2stbGVmdF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHN0b2NrTGVmdFdyYXBwZXI6ICQoJy5wcm9kdWN0Vmlldy1vcHRpb25zU3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScpLFxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UsICRzY29wZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VEYXRhLiRkaXYuYXR0cignZGF0YS1wcmljZS12YWx1ZScsIHByaWNlLndpdGhfdGF4LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlRGF0YS4kZGl2LmF0dHIoJ2RhdGEtcHJpY2UtdmFsdWUnLCBwcmljZS53aXRob3V0X3RheC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgaWYgKCQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuO1xuICAgICAgICBjb25zdCBjdXJDb2RlID0gJCgnLmJvZHknKS5kYXRhKCdjdXJyZW5jeS1jb2RlJyk7XG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgbmV4dElkID0gcHJvZHVjdElkICsgMSxcbiAgICAgICAgICAgIHByZXZJZCA9IHByb2R1Y3RJZCAtIDEsXG4gICAgICAgICAgICBuZXh0TGluaywgcHJldkxpbmssIGxpc3Q7XG5cbiAgICAgICAgY29uc3QgJHByb2RXcmFwID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cyAubmV4dC1wcmV2LW1vZGFsJyksXG4gICAgICAgIFx0JHByb2RJY29ucyA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1pY29ucycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3QoYXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgIHF1ZXJ5IE15UXVlcnkge1xuICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChlbnRpdHlJZHM6IFtgK2FycitgXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3kgKGN1cnJlbmN5Q29kZTogYCtjdXJDb2RlK2ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzcwcHg6IHVybCh3aWR0aDogNzApXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9KSxcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByZXZJZCAhPSB1bmRlZmluZWQgJiYgbmV4dElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGlzdCA9IFtwcmV2SWQsIG5leHRJZF07XG5cbiAgICAgICAgICAgIGdldFByb2R1Y3QobGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9kdWN0KGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcywgZGF0YS5zaXRlLmN1cnJlbmN5LmRpc3BsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRNb25leShuLCBjLCBkLCB0KSB7XG4gICAgICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgICAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxuICAgICAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICAgICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJQcm9kdWN0KHByb2R1Y3QsIGN1ckRpc3BsYXkpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICQuZWFjaChwcm9kdWN0LCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGN1ckRpc3BsYXkuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50ID0gY3VyRGlzcGxheS5zeW1ib2xQbGFjZW1lbnQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlbiA9IGN1ckRpc3BsYXkuZGVjaW1hbFRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGN1ckRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuID0gY3VyRGlzcGxheS50aG91c2FuZHNUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlLCBwcmljZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fY2FyZF90aXRsZSA9PSAnZWxsaXBzaXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICc8YSBocmVmPVwiJytpdGVtLnBhdGgrJ1wiIGNsYXNzPVwiY2FyZC1lbGxpcHNpc1wiIHN0eWxlPVwiLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcIj4nK2l0ZW0ubmFtZSsnPC9hPic7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnPGEgaHJlZj1cIicraXRlbS5wYXRoKydcIj4nK2l0ZW0ubmFtZSsnPC9hPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmJvZHknKS5oYXNDbGFzcygnaXMtbG9naW4nKSB8fCBjb250ZXh0LnRoZW1lU2V0dGluZ3MucmVzdHJpY3RfdG9fbG9naW4gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSA8IGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlICYmIGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcmljZV9yYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZU1pbiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTWF4ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlTWluKycgLSAnK3ByaWNlTWF4Kyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZURlZiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLmJhc2VQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUJhcyA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5iYXNlUHJpY2UudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPicrcHJpY2VCYXMrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVJldCA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj4nK3ByaWNlUmV0Kyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPHAgdHJhbnNsYXRlPkxvZyBpbiBmb3IgcHJpY2luZzwvcD4nO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbF9jYXJkID0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtY3VzdG9tXCIgZGF0YS1wcm9kdWN0LWlkPVwiJytpdGVtLmVudGl0eUlkKydcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWxpbmtcIiBocmVmPVwiJytpdGVtLnBhdGgrJ1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicraXRlbS5kZWZhdWx0SW1hZ2UuaW1nNzBweCsnXCIgYWx0PVwiJytpdGVtLm5hbWUrJ1wiIHRpdGxlPVwiJytpdGVtLm5hbWUrJ1wiIC8+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPicrdGl0bGUrJzwvaDQ+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcHJpY2VcIiBkYXRhLXRlc3QtaW5mby10eXBlPVwicHJpY2VcIj4nK3ByaWNlKyc8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVudGl0eUlkID09IHByZXZJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChodG1sX2NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVudGl0eUlkID09IG5leHRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5wYXRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLmF0dHIoJ2hyZWYnLCBpdGVtLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQoaHRtbF9jYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcubmV4dC1pY29uJywgJHByb2RJY29ucykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgIFx0JCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcmV2LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgXHQkKCcjcHJldi1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHByb2RXcmFwLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgZWwpIHtcbiAgICB2YXIgJHBvcHVwID0gJCgnLmxvb2tib29rLXBvcHVwJyk7XG4gICAgdmFyICRlbCA9IGVsO1xuXG4gICAgY29uc3QgJG9wdGlvbnMgPSB7XG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLWxvb2tib29rLXRtcCdcbiAgICB9O1xuXG4gICAgJGVsLmZpbmQoJy5pdGVtIC5pdGVtLXBvaW50Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5lbXB0eSgpO1xuXG4gICAgICAgIHZhciAkcHJvZElkID0gJChldmVudC50YXJnZXQpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJChldmVudC50YXJnZXQpLm9mZnNldCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gJGVsLm9mZnNldCgpO1xuXG4gICAgICAgIGlmKCRwcm9kSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRwb3B1cC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTUxKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgLSAxMDAsICdsZWZ0JzogcG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lci5sZWZ0ICsgMzB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgKyAxNSwgJ2xlZnQnOiAxNX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXByb2R1Y3QnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgaWYoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5pdGVtIC5pdGVtLXBvaW50JykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9saWIvcmVxdWVzdC5qcyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgY29udGV4dCkge1xuICAgIHZhciBvZmZzZXRTY3JvbGwgPSAkc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKSxcbiAgICAgICAgc2Nyb2xsID0gb2Zmc2V0U2Nyb2xsLm9mZnNldCgpLnRvcCArIG9mZnNldFNjcm9sbC5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgIGNvbnN0IHNob3dQcmljZSA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5yZXN0cmljdF90b19sb2dpbjtcblxuICAgIGNvbnN0IHByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdLFxuICAgICAgICAkc3RpY2t5ID0gJCgnLnN0aWNreS1hZGQtdG8tY2FydCcpLFxuICAgICAgICAkc3RpY2t5Q2xvc2UgPSAkc3RpY2t5LmZpbmQoJy5zdGlja3ktcHJvZHVjdC1jbG9zZScpLFxuICAgICAgICAkc3RpY2t5RXhwYW5kID0gJHN0aWNreS5maW5kKCcuc3RpY2t5LXByb2R1Y3QtZXhwYW5kJyksXG4gICAgICAgICRwcm9kSWQgPSAkc3RpY2t5LmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGQtMl0gW25hbWU9XCJwcm9kdWN0X2lkXCJdJykudmFsKCksXG4gICAgICAgICRwcm9kUHJpY2UgPSAkc3RpY2t5LmZpbmQoJy5zdGlja3ktcHJpY2UnKSxcbiAgICAgICAgJHByb2RPcHRpb25zID0gJHN0aWNreS5maW5kKCcuc3RpY2t5LW9wdGlvbnMnKSxcbiAgICAgICAgJHByb2RPcHRpb25MYWJlbCA9ICRwcm9kT3B0aW9ucy5maW5kKCcuc3RpY2t5LW9wdGlvbnMtbGFiZWwnKSxcbiAgICAgICAgJHByb2RPcHRpb25Ecm9wZG93biA9ICRwcm9kT3B0aW9ucy5maW5kKCcuc3RpY2t5LW9wdGlvbnMtZHJvcGRvd24nKSxcbiAgICAgICAgJGltYWdlV3JhcHBlciA9ICRzdGlja3kuZmluZCgnLnN0aWNreS1pbWFnZScpLFxuICAgICAgICAkcHJvZEJ0biA9ICRzdGlja3kuZmluZCgnLnN0aWNreS1hY3Rpb25zIC5idXR0b24nKSxcbiAgICAgICAgJHByb2RXTEJ0biA9ICRzdGlja3kuZmluZCgnLnN0aWNreS13aXNobGlzdCcpLFxuICAgICAgICB3YWl0TWVzc2FnZSA9ICRwcm9kQnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyksXG4gICAgICAgIG9yaWdpbmFsQnRuVmFsID0gJHByb2RCdG4udGV4dCgpLFxuICAgICAgICAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgIGZ1bmN0aW9uIGxvYWRTdGlja3koKSB7XG4gICAgICAgIGlmKChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19zdGlja3lfYWRkX3RvX2NhcnQgPT0gdHJ1ZSkgJiYgKCRzdGlja3kubGVuZ3RoID4gMCkpe1xuICAgICAgICAgICAgbG9hZE9wdGlvbnMoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsICsgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJHN0aWNreS5oYXNDbGFzcygnc2hvdy1zdGlja3knKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHN0aWNreS5hZGRDbGFzcygnc2hvdy1zdGlja3knKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdwYWdlLXR5cGUtcHJvZHVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ29wZW5TdGlja3lBZGRUb0NhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdGlja3kucmVtb3ZlQ2xhc3MoJ3Nob3ctc3RpY2t5IGhpZGRlbi1zdGlja3kgc2hvdy1mdWxsLXN0aWNreScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygncGFnZS10eXBlLXByb2R1Y3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW5TdGlja3lBZGRUb0NhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkcHJvZE9wdGlvbkxhYmVsLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAkcHJvZE9wdGlvbkRyb3Bkb3duLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHByb2RPcHRpb25Ecm9wZG93bi5vbignY2xpY2snLCAnLm9wdGlvbi1pdGVtJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGlmICghJHRhcmdldC5oYXNDbGFzcygnaXMtc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbkxhYmVsID0gJHRhcmdldC5maW5kKCcub3B0aW9uLWl0ZW1XcmFwcGVyJykuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uQXR0ciA9ICR0YXJnZXQuZGF0YSgndmFyaWFudC1hdHRyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSgkcHJvZElkLCBvcHRpb25BdHRyLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHByb2RPcHRpb25Ecm9wZG93bi5maW5kKCcub3B0aW9uLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2lzLXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAkcHJvZE9wdGlvbkxhYmVsLmZpbmQoJy50ZXh0JykuaHRtbChvcHRpb25MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kT3B0aW9uRHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHN0aWNreUNsb3NlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYoJHN0aWNreS5oYXNDbGFzcygnc2hvdy1mdWxsLXN0aWNreScpKXtcbiAgICAgICAgICAgICAgICAgICAgJHN0aWNreS5yZW1vdmVDbGFzcygnc2hvdy1mdWxsLXN0aWNreScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJHN0aWNreS5hZGRDbGFzcygnaGlkZGVuLXN0aWNreScpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRib2R5Lmhhc0NsYXNzKCdwYWdlLXR5cGUtcHJvZHVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnb3BlblN0aWNreUFkZFRvQ2FydCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRzdGlja3lFeHBhbmQub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAkc3RpY2t5LmFkZENsYXNzKCdzaG93LWZ1bGwtc3RpY2t5Jyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHByb2RCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9ICRwcm9kQnRuLmF0dHIoJ2Rpc2FibGVkMicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIGF0dHIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1IZWlnaHQgPSBmb3JtLm9mZnNldCgpLnRvcCArIGZvcm0uaGVpZ2h0KCkvMjtcblxuICAgICAgICAgICAgICAgICAgICBpZihoZWlnaHQgPiBmb3JtSGVpZ2h0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogZm9ybS5vZmZzZXQoKS50b3AgLSA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRwcm9kV0xCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRoaXNfd2wgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgICAgICAgICB1cmxfYXdsID0gJHRoaXNfd2wuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAgICAgJC5wb3N0KHVybF9hd2wpLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybF9hd2w7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgkcHJvZE9wdGlvbkRyb3Bkb3duLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnN0aWNreS1vcHRpb25zLWRyb3Bkb3duJykubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5zdGlja3ktb3B0aW9ucy1sYWJlbCcpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kT3B0aW9uRHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRTdGlja3koKTtcblxuICAgIGZ1bmN0aW9uIGxvYWRPcHRpb25zKCkge1xuICAgICAgICBpZiAoJHByb2RPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBbXSxcbiAgICAgICAgICAgICAgICByb3dMaW1pdHMgPSBbXSxcbiAgICAgICAgICAgICAgICByb3dPYmplY3RzID0gW10sXG4gICAgICAgICAgICAgICAgbmV3T3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nLCAkc2NvcGUpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LW9wdGlvbi1pZCcpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0JyB8fCB0eXBlID09PSAnZGF0ZScgfHwgdHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJyB8fCB0eXBlID09PSAndGV4dGFyZWEnKXt9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKDApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0xpbWl0cy5wdXNoKCQoZWxlbWVudCkuZmluZCgnLmZvcm0tcmFkaW8nKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93TGltaXRzLnB1c2goJChlbGVtZW50KS5maW5kKCcuZm9ybS1zZWxlY3Qgb3B0aW9uOm5vdCg6Zmlyc3QtY2hpbGQpJykubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd09iamVjdCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmZvcm0tcmFkaW8nKS5lYWNoKChpbmRleDIsIGVsZW1lbnQyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93T2JqZWN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogJChlbGVtZW50MikuYXR0cigndmFsdWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTGFiZWw6ICQoZWxlbWVudDIpLmF0dHIoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJChlbGVtZW50MikuYXR0cignZGF0YS10aXRsZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVJbmRleDogJChlbGVtZW50MikuYXR0cignZGF0YS1pbmRleCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0b2NrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V0TGFiZWwgPSAkKGVsZW1lbnQpLmZpbmQoJy5mb3JtLXNlbGVjdCcpLmF0dHIoJ25hbWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuZm9ybS1zZWxlY3Qgb3B0aW9uOm5vdCg6Zmlyc3QtY2hpbGQpJykuZWFjaCgoaW5kZXgyLCBlbGVtZW50MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd09iamVjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6ICQoZWxlbWVudDIpLmF0dHIoJ3ZhbHVlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUxhYmVsOiBzZXRMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogJChlbGVtZW50MikuYXR0cignZGF0YS10aXRsZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVJbmRleDogJChlbGVtZW50MikuYXR0cignZGF0YS1pbmRleCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0b2NrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByb3dPYmplY3RzLnB1c2gocm93T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGlzTmV3T3B0aW9uc1JlYWR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlY3JlbWVudFJvd3MoZExlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbkluZGV4ID0gZExlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgcm93c1tjdXJyZW5JbmRleF0gKz0gMTtcblxuICAgICAgICAgICAgICAgIGlmICgocm93c1tjdXJyZW5JbmRleF0gPCByb3dMaW1pdHNbY3VycmVuSW5kZXhdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc05ld09wdGlvbnNSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzW2N1cnJlbkluZGV4XSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3JlbWVudFJvd3MoY3VycmVuSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudE9wdGlvbkluZGV4ID0gMDtcblxuICAgICAgICAgICAgd2hpbGUgKGlzTmV3T3B0aW9uc1JlYWR5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG5ld09wdGlvbnNbY3VycmVudE9wdGlvbkluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcm93cy5mb3JFYWNoKChyLCBySW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uc1tjdXJyZW50T3B0aW9uSW5kZXhdLmF0dHJpYnV0ZXMucHVzaChyb3dPYmplY3RzW3JJbmRleF1bcl0pO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb25zW2N1cnJlbnRPcHRpb25JbmRleF0ubGFiZWwgKz0gYCR7cm93T2JqZWN0c1tySW5kZXhdW3JdLmF0dHJpYnV0ZUxhYmVsfSBgO1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb25zW2N1cnJlbnRPcHRpb25JbmRleF0ubmFtZSArPSBgPHNwYW4+JHtyb3dPYmplY3RzW3JJbmRleF1bcl0uYXR0cmlidXRlTmFtZX08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uc1tjdXJyZW50T3B0aW9uSW5kZXhdLnBvc2l0aW9uICs9IGAke3Jvd09iamVjdHNbckluZGV4XVtyXS5hdHRyaWJ1dGVJbmRleH1gO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZGVjcmVtZW50Um93cyhyb3dzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uSW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGN1cnJlbnROZXdPcHRpb25JbmRleCA9IDA7XG5cbiAgICAgICAgICAgIG5ld09wdGlvbnMuZm9yRWFjaCgobmV3T3B0aW9uLCBuZXdPcHRpb25JbmRleCwgbmV3RWwpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlU3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgICAgICBuZXdPcHRpb24uYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVN0cmluZyA9IGF0dHJpYnV0ZVN0cmluZyArIGAmYXR0cmlidXRlWyR7YXR0cmlidXRlLmF0dHJpYnV0ZX1dPWAgKyBhdHRyaWJ1dGUuYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ29wdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdmFyaWFudC1pbmRleCc6IG5ld09wdGlvbi5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdmFyaWFudC1hdHRyJzogYXR0cmlidXRlU3RyaW5nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCc8ZGl2IGNsYXNzPVwib3B0aW9uLWl0ZW1XcmFwcGVyXCI+JytuZXdPcHRpb24ubmFtZSsnPC9kaXY+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJHByb2RPcHRpb25Ecm9wZG93bik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvQ2FydCgpIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkLTJdJyk7XG4gICAgICAgIHZhciBza3UgPSAkZm9ybS5maW5kKCcuc3RpY2t5LWFjdGlvbnMnKS5hdHRyKCdkYXRhLXByb2R1Y3Qtc2t1LWFkZCcpO1xuICAgICAgICB2YXIgYXR0ID0gJGZvcm0uZmluZCgnLm9wdGlvbi1pdGVtLmlzLXNlbGVjdCcpLmRhdGEoJ3ZhcmlhbnQtYXR0cicpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHVybDtcblxuICAgICAgICBpZiAoc2t1ICE9IHVuZGVmaW5lZCAmJiBza3UgIT0gbnVsbCAmJiBza3UgIT0gJycpIHtcbiAgICAgICAgICAgIHVybCA9IGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9YCArIHNrdSArIGAmcXR5PTFgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gYC9jYXJ0LnBocD9hY3Rpb249YWRkJnByb2R1Y3RfaWQ9YCArICRwcm9kSWQgKyBhdHQ7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZEJ0blxuICAgICAgICAgICAgLnRleHQod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICByZXF1ZXN0KGVuY29kZVVSSSh1cmwpLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnI7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHByb2RCdG5cbiAgICAgICAgICAgICAgICAudGV4dChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmIChwcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fYWRkX3RvX2NhcnRfcG9wdXAgPT09ICdub3JtYWwnKXtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld01vZGFsLiRtb2RhbC5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdtb2RhbCBtb2RhbC0tcHJldmlldycpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3TW9kYWwub3Blbih7IHNpemU6ICdsYXJnZScgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19hZGRfdG9fY2FydF9wb3B1cCA9PT0gJ21pbmknKXtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld01vZGFsLiRtb2RhbC5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdtb2RhbCBtb2RhbC0tcHJldmlldyBtb2RhbC0tcHJldmlld01pbmknKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld01vZGFsLm9wZW4oeyBzaXplOiAnc21hbGwnIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCQoXCIubW9kYWwtYmFja2dyb3VuZDp2aXNpYmxlXCIpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJhY2tncm91bmQ6dmlzaWJsZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnRDb250ZW50KHByZXZpZXdNb2RhbCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IGNvbnRleHQudXJscy5jYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCByZXNwb25zZSkge1xuICAgICAgICBjb25zdCBxdWFudGl0eSA9IHBhcnNlSW50KCRib2R5LmZpbmQoJy5jYXJ0RGVza3RvcCAuY2FydC1xdWFudGl0eScpLnRleHQoKSkgKyAxO1xuXG4gICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dWYXJpYW50SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLCB7ICcxeCc6IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0Z2FsbGVyeV9zaXplIH0sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gbWFpbkltYWdlVXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldyhkYXRhKXtcbiAgICAgICAgdmFyIGluU3RvY2sgPSBkYXRhLmluc3RvY2ssXG4gICAgICAgICAgICBpbWFnZSA9IGRhdGEuaW1hZ2UsXG4gICAgICAgICAgICBza3UgPSBkYXRhLnNrdSxcbiAgICAgICAgICAgIHByaWNlID0gZGF0YS5wcmljZTtcblxuICAgICAgICBpZihpblN0b2NrKXtcbiAgICAgICAgICAgICRwcm9kQnRuLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJHByb2RPcHRpb25MYWJlbC5yZW1vdmVDbGFzcygnb3B0aW9uLWhpZGRlbicpLmFkZENsYXNzKCdvcHRpb24tdmlzaWJsZScpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkcHJvZEJ0bi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgJHByb2RPcHRpb25MYWJlbC5yZW1vdmVDbGFzcygnb3B0aW9uLXZpc2libGUnKS5hZGRDbGFzcygnb3B0aW9uLWhpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlICE9IHVuZGVmaW5lZCAmJiBpbWFnZSAhPT0gbnVsbCAmJiBpbWFnZSAhPT0gJycpIHtcbiAgICAgICAgICAgICRpbWFnZVdyYXBwZXIuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0Jywgc2hvd1ZhcmlhbnRJbWFnZShpbWFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNrdSkge1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1za3UtYWRkXScpLmF0dHIoJ2RhdGEtcHJvZHVjdC1za3UtYWRkJywgc2t1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KHByaWNlKSkge1xuICAgICAgICAgICAgdXBkYXRlUHJpY2VWaWV3KHByaWNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyhwcmljZSl7XG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgJCgnLnByaWNlLWxhYmVsJywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkcHJvZFByaWNlKS5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICQoJy5wcmljZS1sYWJlbCcsICRwcm9kUHJpY2UpLnNob3coKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHByb2RQcmljZSkuaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRwcm9kUHJpY2UpLnNob3coKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRwcm9kUHJpY2UpLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHByb2RQcmljZSkuaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRwcm9kUHJpY2UpLnNob3coKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHByb2RQcmljZSkuaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICAkKCcucHJpY2UtbGFiZWwnLCAkcHJvZFByaWNlKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkcHJvZFByaWNlKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcucHJpY2Utbm93LWxhYmVsJywgJHByb2RQcmljZSkuc2hvdygpO1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkcHJvZFByaWNlKS5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICQoJy5wcmljZS1sYWJlbCcsICRwcm9kUHJpY2UpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRwcm9kUHJpY2UpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkcHJvZFByaWNlKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRwcm9kUHJpY2UpLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQoJy5zdGlja3ktYWRkLXRvLWNhcnQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsIC0gMTYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcuc3RpY2t5LWFkZC10by1jYXJ0JykuaGFzQ2xhc3MoJ3Nob3ctc3RpY2t5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnN0aWNreS1hZGQtdG8tY2FydCcpLmFkZENsYXNzKCdzaG93LXN0aWNreScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2UtdHlwZS1wcm9kdWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3BlblN0aWNreUFkZFRvQ2FydCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcclxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xyXG4gKi9cclxuaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcclxuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XHJcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xyXG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XHJcbmltcG9ydCBoYWxvQnVuZGxlUHJvZHVjdHMgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9CdW5kbGVQcm9kdWN0cyc7XHJcbmltcG9ydCBoYWxvTmV4dFByb2R1Y3RzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvTmV4dFByb2R1Y3RzJztcclxuaW1wb3J0IGhhbG9TdGlja3lBZGRUb0NhcnQgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnQnO1xyXG5pbXBvcnQgaGFsb1lvdXR1YmVDYXJvdXNlbCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1ZpZGVvJztcclxuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcclxuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxyXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XHJcblxyXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xyXG5cclxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcclxuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KCRyZXZpZXdGb3JtKTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RDdXN0b21UYWIoKTtcclxuICAgICAgICAvLyB0aGlzLnByb2R1Y3RUYWJUb2dnbGUoKTtcclxuICAgICAgICB0aGlzLmNvbXBhcmVDb2xvcnMoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RWaWV3SW5mb1RhYnMoKTtcclxuICAgICAgICB0aGlzLnNvbGRQcm9kdWN0KCQoJy5wcm9kdWN0Vmlldy1zb2xkUHJvZHVjdCcpKTtcclxuICAgICAgICB0aGlzLnZpZXdpbmdQcm9kdWN0KCQoJy5wcm9kdWN0Vmlldy1WaWV3aW5nUHJvZHVjdCcpKTtcclxuICAgICAgICB0aGlzLmNvdW50RG93blByb2R1Y3QoJCgnLnByb2R1Y3RWaWV3LWNvdW50RG93bicpKTtcclxuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3U2hvdygpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFsb05leHRQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGhhbG9TdGlja3lBZGRUb0NhcnQoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vayh0aGlzLmNvbnRleHQsICQoJy5wcm9kdWN0Vmlldy1sb29rYm9vaycpKTtcclxuICAgICAgICBoYWxvQnVuZGxlUHJvZHVjdHMoJCgnLnByb2R1Y3RWaWV3LXNsaWNrJyksIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgaGFsb05vdGlmeU1lKCQoJy5wcm9kdWN0Vmlldy1zbGljaycpLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGhhbG9Zb3V0dWJlQ2Fyb3VzZWwoJCgnLnByb2R1Y3RWaWV3LXNsaWNrIFtkYXRhLXNsaWNrXScpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcclxuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXZpZXdTaG93KHgpIHtcclxuICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3Q2FyZDEnKTtcclxuXHJcbiAgICAgICAgbGV0IHJldmlldzIgPSBbXVxyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb25cIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD01MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xMDAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuZW1wdHkoKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRBciA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBci5mb3JFYWNoKChyZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2gocmV2WydSZXZpZXcgcmF0ZSddKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcclxuXHJcbiAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLmNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmEtc3Rhci1vIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDAuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMS41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhcmArKDMuNSA8PSByZXZpZXdBdmc/ICcgY2hlY2tlZCc6ICcgZmEtc3Rhci1vJykgKyBgXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoNC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+ICAgICAgXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1wYWRkaW5nLWxlZnQ6NXB4Oz5cclxuICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9ICBSZXNlw7Fhc1xyXG4gICAgICAgICAgICA8L2Rpdj5gKVxyXG4gICAgICAgICAgICAgICAgLy8gJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgPGRpdj4ke3Jldmlld0F2Z308L2Rpdj5gKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RDdXN0b21UYWIoKXtcclxuICAgICAgICBpZigkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gW2RhdGEtY3VzdG9tLXRhYl0nKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIFtkYXRhLWN1c3RvbS10YWJdJykuYXBwZW5kVG8oJyNoYWxvLWN1c3RvbS10YWIgLmNhcmQtYm9keScpO1xyXG4gICAgICAgICAgICAkKCcjaGFsby1jdXN0b20tdGFiJykucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXNob3J0RGVzYyBbZGF0YS1jdXN0b20tdGFiXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKCcjaGFsby1wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAucHJvZHVjdFZpZXctdGFicyAuY2FyZC1ib2R5JykuYWRkQ2xhc3MoJ2hhcy1jdXN0b21UYWInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjaGFsby1wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAucHJvZHVjdFZpZXctdGFicyAuY2FyZC53YXJyYW50eSAudGl0bGUnKS5hZGRDbGFzcygnbm8tY3VzdG9tVGFiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb2R1Y3RUYWJUb2dnbGUoKXtcclxuICAgIC8vICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgLy8gICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZCAudGl0bGUnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xyXG4gICAgLy8gICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PntcclxuICAgIC8vICAgICAgICAgICAgIGlmKCQoJy50aXRsZScsIGVsZW1lbnQpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZDpudGgtY2hpbGQoMSkgLnRpdGxlJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzb2xkUHJvZHVjdCgkd3JhcHBlcikge1xyXG4gICAgICAgIGlmKCR3cmFwcGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0X3RleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzX3RleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxyXG4gICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0MiA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dDtcclxuXHJcbiAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdExpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNQcm9kdWN0X3RleHQgKyBcIl1cIiksIFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzUHJvZHVjdExpc3QubGVuZ3RoKSksXHJcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzSG91cnNfdGV4dCArIFwiXVwiKSxcclxuICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0l0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNIb3Vyc0xpc3QubGVuZ3RoKSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAkd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWZpcmVcIi8+PC9zdmc+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JyArIG51bWJlcnNQcm9kdWN0TGlzdFtudW1iZXJzUHJvZHVjdEl0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQgKyBcIiBcIiArIG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc0hvdXJzSXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dDIgKyAnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAkd3JhcHBlci5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50RG93blByb2R1Y3QoJHdyYXBwZXIpIHtcclxuICAgICAgICBpZigkd3JhcHBlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudERvd24gPSAkd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcclxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHNlZnQgPSAkd3JhcHBlcjtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VmdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJDb3VudERvd24gPSAnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1iZWxsXCIvPjwvc3ZnPjxzcGFuIGNsYXNzPVwidGV4dFwiPjxzcGFuPkxpbWl0ZWQgdGltZSBvZmZlciwgZW5kIGluOjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JytkYXlzKydkIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+Jytob3VycysnaCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrbWludXRlcysnbSA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrc2Vjb25kcysnczwvc3Bhbj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZpZXdpbmdQcm9kdWN0KCR3cmFwcGVyKSB7XHJcbiAgICAgICAgaWYoJHdyYXBwZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCxcclxuICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJfdGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNWaWV3ZXJfdGV4dCArIFwiXVwiKTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBudW1iZXJzVmlld2VySXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1ZpZXdlckxpc3QubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuaHRtbCgnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1leWVcIi8+PC9zdmc+JyArIG51bWJlcnNWaWV3ZXJMaXN0W251bWJlcnNWaWV3ZXJJdGVtXSArIFwiIFwiICsgdmlld2VyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpLnNob3coKTtcclxuICAgICAgICAgICAgfSwgMTAwMDApOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBhcmVDb2xvcnMoKXtcclxuICAgICAgICBjb25zdCAkc3dhdGNoV3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtc3dhdGNoJyksXHJcbiAgICAgICAgICAgICRpbWFnZVdyYXBwZXIgPSAkKCcuaGFsby1jb21wYXJlQ29sb3JzLWltYWdlJyksXHJcbiAgICAgICAgICAgICR0ZXh0V3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtdGV4dCcpO1xyXG5cclxuICAgICAgICAkKCcuZm9ybS1vcHRpb24nLCAkc3dhdGNoV3JhcHBlcikub24oJ2NsaWNrJywgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdzaG93LWNvbG9yJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudCcpLmF0dHIoJ3RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICBpZCA9ICR0aGlzLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyksXHJcbiAgICAgICAgICAgICAgICAkY29sb3IsICRjb2xvcjIsICRjb2xvcjMsICRpbWcsICRwYXR0ZXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzaG93LWNvbG9yJykpe1xyXG4gICAgICAgICAgICAgICAgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3InKS5hdHRyKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXcmFwcGVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3JcIiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMicpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMiBzcGFuOm50aC1jaGlsZCgxKScpLmF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjIgc3BhbjpudGgtY2hpbGQoMiknKS5hdHRyKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1jb21wYXJlQ29sb3JzLWltYWdlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLWNvbG9yIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJjb2xvciBjb2xvcjJcIj48c3BhbiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyskY29sb3IyKyc7XCI+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICRjb2xvciA9ICAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzIHNwYW46bnRoLWNoaWxkKDEpJykuYXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29sb3IyID0gICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMgc3BhbjpudGgtY2hpbGQoMiknKS5hdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjMgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgzKScpLmF0dHIoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZVdyYXBwZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLWNvbG9yIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJjb2xvciBjb2xvcjNcIj48c3BhbiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyskY29sb3IyKyc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyskY29sb3IzKyc7XCI+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAkaW1nID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm4nKS5hdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYXR0ZXJuID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm4nKS5hdHRyKCdkYXRhLXBhdHRlcm4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tcGFydGVybiBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiaW1hZ2VcIj48aW1nIHNyYz0nKyRwYXR0ZXJuKycgYWx0PScrdGl0bGUrJyB0aXRsZT0nK3RpdGxlKyc+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5pdGVtLScraWQrJycsICRpbWFnZVdyYXBwZXIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigkaW1hZ2VXcmFwcGVyLmNoaWxkcmVuKCkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAkdGV4dFdyYXBwZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGV4dFdyYXBwZXIuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTAyNSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXN3YXRjaC1pbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBuZXcgU29ydGFibGUoZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9kdWN0Vmlld0luZm9UYWJzKCl7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWluZm9UYWJzIC5wcm9kdWN0Vmlldy1pbmZvVGFiIGEnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgJGJsb2NrID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJGJsb2NrKS5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIH0sIDcwMCk7XHJcblxyXG4gICAgICAgICAgICBpZigkYmxvY2sgPT0gJyNoYWxvLXByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICBpZighJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LW1vcmVEZXNjIGEnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJyNoYWxvLXByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJykub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxyXG4gICAgICAgICAgICB9LCA3MDApO1xyXG5cclxuICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkOm50aC1jaGlsZCgxKSAudGl0bGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xyXG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoKXtcclxuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24odGhpcy5jb250ZXh0LCAkcHJvZFdyYXBJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3RhYi1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXJldmlld1RhYkxpbmsnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyN0YWItcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3RhYi1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjdGFiLXJldmlld3NgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnJhdGluZ1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1JhdGluZyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRleHRcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53cml0ZVJldmlldy1mb3JtIFtuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0VtYWlsLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9