/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/checkout.js":
/*!*******************************!*\
  !*** ./assets/js/checkout.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var allureException = ["coco", "rose", "adele", "angelina", "jessica", "selena", "taylor", "julia", "nicole", "gwyneth", "ev7914", "tl6814", "ev5714", "mo5514", "mo7608", "ev5512", "ev5706", "ev6810", "eg6612", "eh16", "mh2206", "sh5206", "ep3608", "mh2216", "maya", "noya"];
var cartItems = null;
var skus = [];
var teamdeskItems = null;
var teamdeskPOItems = null;
/**
 * Get the inventory and po from teamdesk
 */

function cartGetDelivery() {
  if (cartItems) {
    skus = cartItems.lineItems.physicalItems.map(function (i) {
      var sku = i.sku;

      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }

      return encodeURIComponent(sku);
    });
    fetch("//shp-webserver.glitch.me/get-teamdesk", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        table: 'Inventory',
        filter: "Any([SKU],'" + skus.join(",") + "')"
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      teamdeskItems = r;
      teamdeskPOItems = [];
      cartSetDelivery(); // fetch(`//shp-webserver.glitch.me/get-teamdesk`, {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //         table: 't_763479',
      //         options: `?filter=Any([SKU],'${skus.join(",")}') and [Incoming Quantity]>0 and [Arrival Due Date]>ToDate('1/1/1')&sort=Arrival Due Date//ASC`                        
      //     })
      // })
      // .then(r=>r.json())
      // .then(r=>{
      //     teamdeskPOItems = r;
      //     cartSetDelivery();
      // })
      // .catch(e=>{
      //     console.log(e);
      //     cartSetDelivery();
      // })
    }).catch(function (e) {
      return console.log(e);
    });
  }
}
/**
 * Fill in the delivery information
 */


function cartSetDelivery() {
  if (teamdeskItems) {
    var qtyChecked = [];

    var _loop = function _loop() {
      var _step$value = _step.value,
          index = _step$value[0],
          sku = _step$value[1];

      if (sku.indexOf("_N") == sku.length - 2) {
        sku = sku.slice(0, sku.length - 2);
      }

      var item = teamdeskItems.find(function (s) {
        return encodeURIComponent(s.SKU.toUpperCase()) == sku.toUpperCase();
      });

      if (item) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
          var qty = cartItems.lineItems.physicalItems[index].quantity;
          var buff = 0;

          if (qtyChecked[item.SKU]) {
            buff = qtyChecked[item.SKU];
            qtyChecked[item.SKU] += qty;
          } else {
            qtyChecked[item.SKU] = qty;
          }

          var content = "<strong>Tiempo estimado de env\xEDo:</strong><br/>";

          if (item["Total On Hand"] == item["Available Quantity"]) {
            if (Number(item["Quantity USA"]) > 0) {
              if (Number(item["Quantity USA"]) - buff > 0) {
                content += "En 3-4 d\xEDas: cantidad <strong>" + Math.min(item["Quantity USA"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity USA"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity USA"]);
              }
            }

            if (Number(item["Quantity Canada"]) > 0 && qty > 0) {
              if (Number(item["Quantity Canada"]) - buff > 0) {
                content += "En 5-8 d\xEDas: cantidad <strong>" + Math.min(item["Quantity Canada"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Quantity Canada"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Quantity Canada"]);
              }
            }
          } else {
            if (Number(item["Available Quantity"]) > 0) {
              if (Number(item["Available Quantity"]) - buff > 0) {
                content += "Dans 3-8 jours: cantidad <strong>" + Math.min(item["Available Quantity"] - buff, qty) + "</strong><br/>";
                qty = qty - Math.min(item["Available Quantity"] - buff, qty);
                buff = 0;
              } else {
                buff -= Number(item["Available Quantity"]);
              }
            }
          } // if (item["Virtual Quantity"] && qty>0) {                            
          //     if (item["Lock Status"]!="Locked for processing" && Number(item["Unlocked for sale quantity"]) > 0 && qty>0) {
          //         if (Number(item["Unlocked for sale quantity"])-buff > 0) {                                    
          //             content+=`1 week later: quantity <strong>${Math.min(item["Unlocked for sale quantity"]-buff, qty)}</strong><br/>`;                                    
          //             qty = qty - Math.min(item["Unlocked for sale quantity"]-buff, qty);                                    
          //             buff=0;
          //         } else {
          //             buff-=Number(item["Unlocked for sale quantity"]);
          //         }
          //     }
          //     let virtual={};                        
          //     if (Number(item["Quantity Incoming"])-2 > 0 && qty>0) {
          //         if (Number(item["Quantity Incoming"])-2 -buff > 0) {
          //             let inItems = teamdeskPOItems.filter(p=>p.SKU.toUpperCase() == item["SKU"].toUpperCase());
          //             let i=0, totalP=buff, tempqty = qty;
          //             while (i<inItems.length && tempqty>0) {
          //                 totalP+=Number(inItems[i]["Incoming Quantity"]);
          //                 tempqty = tempqty - Math.min(Number(inItems[i]["Incoming Quantity"]), tempqty);
          //                 i++;                                
          //             }
          //             if (i>0) {
          //                 let inItem = inItems[i-1];                                    
          //                 let mdiff = monthDiff(new Date(), new Date(inItem["Arrival Due Date"]));
          //                 if (mdiff==0) {                                    
          //                     if (allureException.includes(inItem["Part Number"])) {
          //                         mdiff+=3;
          //                     } else {
          //                         mdiff+=1;
          //                     }
          //                 } else if (allureException.includes(inItem["Part Number"])) {
          //                     mdiff+=2;
          //                 }
          //                 virtual[mdiff] = Math.min(totalP, qty);                                        
          //                 qty = tempqty;
          //                 buff=0;
          //             }
          //         } else {
          //             buff = buff - Number(item["Quantity Incoming"]) + 2;
          //         }
          //     }
          //     if (qty>0) {
          //         let m = item["Virtual Location"].slice(0,-1);
          //         if (virtual[m]) {
          //             virtual[m]+=qty;
          //         } else {
          //             virtual[m]=qty;
          //         }
          //     }
          //     // console.log(virtual);
          //     if (Object.keys(virtual).length > 0) {
          //         const options = {year: 'numeric', month: 'long'};
          //         let vkeys = Object.keys(virtual).sort(function(a,b) {
          //             return b-a;
          //         })                
          //         for (let key of vkeys) {
          //             if (Number(key)) {
          //                 let date = new Date();
          //                 date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
          //                 date.setMonth(date.getMonth()+Number(key));
          //                 content+=`${date.toLocaleDateString('en-US', options)}: quantity <strong>${virtual[key]}</strong><br/>`;
          //             } else {
          //                 content+=`${key.replace("_","-")} months later: quantity <strong>${virtual[key]}</strong><br/>`;
          //             }
          //         }
          //     }
          // }                     


          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<li class=\"product-option cart-delivery\">" + content + "</li>");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find(".product-body").append("\n                            <ul class=\"product-options\"><li class=\"product-option cart-delivery\">" + content + "</li></ul>\n                        ");
          }
        } else {
          var _qty = cartItems.lineItems.physicalItems[index].quantity;

          if (qtyChecked[item.SKU]) {
            qtyChecked[item.SKU] += _qty;
          } else {
            qtyChecked[item.SKU] = _qty;
          }
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").find(".cart-delivery").length == 0) {
        cmhRushItems = ['CMH', 'CMLACE', 'CMMONO', 'CMLACEPOLY', 'CMSKIN'];
        hairService = ["style#221", "style#222", "style#231", "style#232", "style#233", "style#234", "style#251", "style#331", "style#332", "style#334", "style#335", "style#341", "style#342", "style#343", "style#551", "style#552", "Style #Your_Own", "Online Services Pack"];
        var _content = "";

        if (cmhRushItems.includes(sku.toUpperCase())) {
          _content = "<strong>Tiempo estimado de env\xEDo:</strong><br/>Env\xEDo garantizado en 3 meses<br/>";
        } else if (hairService.includes(sku)) {
          _content = "<strong>Tiempo estimado de env\xEDo:</strong><br/>Dans 2-3 semaines<br/>";
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".productList").find("li.productList-item").eq(index).find("ul.product-options").append("<div class=\"cart-delivery\">" + _content + "</div>");
      }
    };

    for (var _iterator = _createForOfIteratorHelperLoose(skus.entries()), _step; !(_step = _iterator()).done;) {
      var cmhRushItems;
      var hairService;

      _loop();
    }
  }
}

window.addEventListener("DOMContentLoaded", function () {
  var _this = this;

  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getCart({
    includeOptions: true
  }, function (err, myCart) {
    if (err) {
      return;
    }

    if (myCart) {
      cartItems = {
        id: myCart.id,
        baseAmount: myCart.baseAmount,
        lineItems: myCart.lineItems
      };
      var checkInit = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#cart-edit-link").length > 0 && ".cart-section".length > 0) {
          _this.clearInterval(checkInit);

          cartGetDelivery();
          var baction = setInterval(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").length > 0) {
              clearInterval(baction);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cart-actions button").on("click", function () {
                setTimeout(function () {
                  cartSetDelivery();
                }, 500);
              });
            }
          }, 500);
        }
      }, 500);
    }
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api.js":
/*!************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");
/* harmony import */ var _api_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/countries */ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js");
/* harmony import */ var _api_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/product */ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js");
/* harmony import */ var _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/product-attributes */ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js");
/* harmony import */ var _api_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/search */ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/cart */ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js");






var internals = {};
/**
 * Convenience function to request a page via ajax
 *
 * @param url
 * @param options
 * @param callback
 */

internals.getPage = function (url, options, callback) {
  Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
    method: 'GET',
    requestOptions: options
  }, callback);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  country: new _api_countries__WEBPACK_IMPORTED_MODULE_1__["default"](),
  productAttributes: new _api_product_attributes__WEBPACK_IMPORTED_MODULE_3__["default"](),
  product: new _api_product__WEBPACK_IMPORTED_MODULE_2__["default"](),
  search: new _api_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  cart: new _api_cart__WEBPACK_IMPORTED_MODULE_5__["default"](),
  getPage: internals.getPage
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/base.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/request */ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js");


var _default = /*#__PURE__*/function () {
  /**
   * @Constructor
   */
  function _default(version) {
    this.remoteVersion = version || 'v1';
    this.remoteBaseEndpoint = '/remote/';
  }
  /**
   *
   * @param {String} url
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Boolean} remote
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.makeRequest = function makeRequest(url, method, options, remote, callback) {
    Object(_lib_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url, {
      method: method,
      remote: remote,
      requestOptions: options
    }, callback);
  }
  /**
   *
   * @param {String} endpoint
   * @param {String} method ['GET', 'POST', 'PUT', 'DELETE']
   * @param {Object} options
   * @param {Function} callback
   */
  ;

  _proto.remoteRequest = function remoteRequest(endpoint, method, options, callback) {
    var remoteUrl = this.remoteBaseEndpoint + this.remoteVersion + endpoint;
    this.makeRequest(remoteUrl, method, options, true, callback);
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/cart.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/cart.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  function _default() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  /**
   * Get a collection of Carts. For now, this will only return an array of a single cart as multiple carts per session
   * are not currently supported.
   *
   * @param options
   * @param {Function} callback
   */
  _proto.getCarts = function getCarts(options, callback) {
    if (options === void 0) {
      options = {};
    }

    var url = '/api/storefront/carts';

    if (options.includeOptions) {
      url = this.includeOptions(url);
    }

    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }
  /**
   * Get the current Cart's details, either with or without Product Option selections.
   * Can also be used to get a particular cart provided a cartId in the options.
   *
   * @param options
   * @param {Function} callback
   */
  ;

  _proto.getCart = function getCart(options, callback) {
    if (options === void 0) {
      options = {};
    }

    /* If no cart ID is provided, get the collection of carts and return the first one */
    if (!options.cartId) {
      return this.getCarts(options, function (err, response) {
        return callback(err, response[0]);
      });
    }

    var url = "/api/storefront/carts/" + options.cartId;

    if (options.includeOptions) {
      url = this.includeOptions(url);
    }

    this.makeRequest(url, 'GET', options, true, function (err, response) {
      callback(err, response);
    });
  }
  /**
   * Add the parameters to a URL needed to get product option details on cart line items
   * @param url
   */
  ;

  _proto.includeOptions = function includeOptions(url) {
    return url + "?include=lineItems.physicalItems.options,lineItems.digitalItems.options";
  }
  /**
   * Get a sum of the cart line item quantities
   *
   * @param options
   * @param {Function} callback
   */
  ;

  _proto.getCartQuantity = function getCartQuantity(options, callback) {
    if (options === void 0) {
      options = {};
    }

    this.getCart(options, function (err, response) {
      if (err) {
        return callback(err);
      }

      var quantity = 0;

      if (response) {
        var cart = response;
        var lineItemQuantities = [cart.lineItems.physicalItems, cart.lineItems.digitalItems, cart.lineItems.customItems].reduce(function (a, b) {
          return a.concat(b);
        }).filter(function (lineItem) {
          return !lineItem.parentId;
        }).map(function (lineItem) {
          return lineItem.quantity;
        }).reduce(function (accumulator, lineItemQuantity) {
          return accumulator + lineItemQuantity;
        }, 0);
        var giftCertificateQuantity = cart.lineItems.giftCertificates.length;
        quantity = lineItemQuantities + giftCertificateQuantity;
      }

      callback(null, quantity);
    });
  }
  /**
   * Add item to cart with options (variants)
   *
   * @param {FormData} formData
   * @param {Function} callback
   */
  ;

  _proto.itemAdd = function itemAdd(formData, callback) {
    this.remoteRequest('/cart/add', 'POST', {
      formData: formData
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-add-remote', emitData);
      callback(err, response);
    });
  }
  /**
   * Update cart item quantity
   *
   * @param {String|Object} itemId
   * @param {Number|Function} qty
   * @param {Function|null} callback
   */
  ;

  _proto.itemUpdate = function itemUpdate(itemId, qty, callback) {
    var callbackArg = callback;
    var items;

    if (Array.isArray(itemId) && typeof qty === 'function') {
      callbackArg = qty;
      items = itemId;
    } else {
      items = [{
        id: itemId,
        quantity: qty
      }];
    }

    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-update-remote', emitData);
      callbackArg(err, response);
    });
  }
  /**
   * Remove cart items
   *
   * Calls the internal update function with quantity: 0
   *
   * @param {String} itemId
   * @param {Function} callback
   */
  ;

  _proto.itemRemove = function itemRemove(itemId, callback) {
    var items = [{
      id: itemId,
      quantity: 0
    }];
    this.update(items, function (err, response) {
      var emitData = {
        items: items,
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart-item-remove-remote', emitData);
      callback(err, response);
    });
  }
  /**
   * Get giftwrapping options
   * @param {String} itemId
   * @param {Object|Function} options
   * @param {Function|null} callback
   */
  ;

  _proto.getItemGiftWrappingOptions = function getItemGiftWrappingOptions(itemId, options, callback) {
    var opts = options || {};
    var callbackArg = callback;

    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }

    this.remoteRequest("/gift-wrapping/" + itemId, 'GET', opts, callbackArg);
  }
  /**
   * Submit giftwrapping options
   *
   * @param {String} itemId
   * @param {Function} callback
   */
  ;

  _proto.submitItemGiftWrappingOption = function submitItemGiftWrappingOption(itemId, params, callback) {
    this.remoteRequest("/gift-wrapping/" + itemId, 'POST', {
      params: params
    }, callback);
  }
  /**
   * Update cart items
   *
   * @param {Array} items
   * @param {Function} callback
   */
  ;

  _proto.update = function update(items, callback) {
    var payload = {
      items: items
    };
    this.remoteRequest('/cart/update', 'POST', {
      params: payload
    }, callback);
  }
  /**
   * Get cart content
   *
   * @param {Object} options
   * @param {Function} callback
   */
  ;

  _proto.getContent = function getContent(options, callback) {
    var opts = options || {};
    var callbackArg = callback;

    if (typeof opts === 'function') {
      callbackArg = opts;
      opts = {};
    }

    this.makeRequest('/cart.php', 'GET', opts, false, callbackArg);
  }
  /**
   * Get cart shipping quote
   *
   * @param {Object} params
   * @param {String|Array|Object} renderWith
   * @param {Function} callback
   */
  ;

  _proto.getShippingQuotes = function getShippingQuotes(params, renderWith, callback) {
    var options = {
      params: params
    };
    var callbackArg = callback;
    var renderWithArg = renderWith;

    if (typeof callbackArg !== 'function') {
      callbackArg = renderWithArg;
      renderWithArg = null;
    }

    if (renderWithArg) {
      options.template = renderWithArg;
    }

    this.remoteRequest('/shipping-quote', 'GET', options, callbackArg);
  }
  /**
   * Submit shipping quote based on quoteId
   *
   * @param {Number} quoteId
   * @param {Function} callback
   */
  ;

  _proto.submitShippingQuote = function submitShippingQuote(quoteId, callback) {
    var options = {
      params: {
        shipping_method: quoteId
      }
    };
    this.remoteRequest('/shipping-quote', 'POST', options, callback);
  }
  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {String} code
   * @param {Function} callback
   */
  ;

  _proto.applyCode = function applyCode(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/apply-code', 'POST', options, callback);
  }
  /**
   * Apply a coupon code or gift certificate to the cart
   *
   * @param {Number} code
   * @param {Function} callback
   */
  ;

  _proto.applyGiftCertificate = function applyGiftCertificate(code, callback) {
    var options = {
      params: {
        code: code
      }
    };
    this.remoteRequest('/gift-certificates', 'POST', options, callback);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/countries.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/countries.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/country-states/';
    return _this;
  }
  /**
   *
   * Get country data by id wrapper
   *
   * @param {Number} id
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.getById = function getById(id, callback) {
    var url = this.endpoint + id;
    this.remoteRequest(url, 'GET', {}, callback);
  }
  /**
   * Get country data by country name
   * @param name
   * @param callback
   */
  ;

  _proto.getByName = function getByName(name, callback) {
    var url = this.endpoint + name;
    this.remoteRequest(url, 'GET', {}, callback);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product-attributes.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/product-attributes/';
    _this.inCartEndpoint = '/configure-options/';
    return _this;
  }
  /**
   * @param {Number} productId
   * @param {Object} params
   * @param callback
   */


  var _proto = _default.prototype;

  _proto.optionChange = function optionChange(productId, params, template, callback) {
    if (template === void 0) {
      template = null;
    }

    var templateArg = template;
    var callbackArg = callback;

    if (typeof templateArg === 'function') {
      callbackArg = templateArg;
      templateArg = null;
    }

    var normalizedQs = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeQueryStringParams"])(params);
    this.remoteRequest(this.endpoint + productId, 'POST', {
      params: normalizedQs,
      template: templateArg
    }, function (err, response) {
      var emitData = {
        err: err,
        response: response
      };
      _hooks__WEBPACK_IMPORTED_MODULE_1__["default"].emit('product-options-change-remote', emitData);
      callbackArg(err, response);
    });
  }
  /**
   * @param {Number} itemId
   * @param {Object} params
   * @param callback
   */
  ;

  _proto.configureInCart = function configureInCart(itemId, params, callback) {
    this.remoteRequest(this.inCartEndpoint + itemId, 'GET', params, function (err, response) {
      callback(err, response);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/product.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/product.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/products.php?productId=';
    return _this;
  }
  /**
   *
   * @param {Number} productId
   * @param {Object} params
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.getById = function getById(productId, params, callback) {
    var url = this.endpoint + productId;
    var paramsArg = params;
    var callbackArg = callback;

    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }

    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/api/search.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/api/search.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/api/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_Base) {
  _inheritsLoose(_default, _Base);

  /**
   * @Constructor
   */
  function _default(version) {
    var _this;

    // call parent
    _this = _Base.call(this, version) || this; // set up class variables

    _this.endpoint = '/search.php?search_query=';
    return _this;
  }
  /**
   * Get search results
   * @param {String} query
   * @param {Object} params
   * @param {Function} callback
   */


  var _proto = _default.prototype;

  _proto.search = function search(query, params, callback) {
    var url = this.endpoint + encodeURIComponent(query);
    var paramsArg = params;
    var callbackArg = callback;

    if (typeof paramsArg === 'function') {
      callbackArg = paramsArg;
      paramsArg = {};
    }

    _hooks__WEBPACK_IMPORTED_MODULE_0__["default"].emit('search-quick-remote', query);
    this.makeRequest(url, 'GET', paramsArg, false, callbackArg);
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/cart */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js");
/* harmony import */ var _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/cookie */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js");
/* harmony import */ var _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/currency-selector */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js");
/* harmony import */ var _hooks_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/product */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js");
/* harmony import */ var _hooks_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js");
/* harmony import */ var _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/faceted-search */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js");
/* harmony import */ var _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/sort-by */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js");







var internals = {};
internals.classes = {
  cart: new _hooks_cart__WEBPACK_IMPORTED_MODULE_0__["default"](),
  cookie: new _hooks_cookie__WEBPACK_IMPORTED_MODULE_1__["default"](),
  currencySelector: new _hooks_currency_selector__WEBPACK_IMPORTED_MODULE_2__["default"](),
  product: new _hooks_product__WEBPACK_IMPORTED_MODULE_3__["default"](),
  search: new _hooks_search__WEBPACK_IMPORTED_MODULE_4__["default"](),
  facetedSearch: new _hooks_faceted_search__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sortBy: new _hooks_sort_by__WEBPACK_IMPORTED_MODULE_6__["default"]()
};

internals.parseHooks = function (hookName) {
  var hookType = hookName.split('-')[0];

  if (internals.classes[hookType] === undefined) {
    throw new Error(hookType + " is not a valid hookType");
  }

  return internals.classes[hookType];
};

var Hooks = /*#__PURE__*/function () {
  function Hooks() {}

  var _proto = Hooks.prototype;

  _proto.on = function on(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.on(hookName, callback);
  };

  _proto.off = function off(hookName, callback) {
    var hook = internals.parseHooks(hookName);
    return hook.off(hookName, callback);
  };

  _proto.emit = function emit(hookName) {
    var hook = internals.parseHooks(hookName);
    return hook.emit.apply(hook, arguments);
  };

  return Hooks;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Hooks());

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter2 */ "./node_modules/eventemitter2/lib/eventemitter2.js");
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(_default, _EventEmitter);

  function _default() {
    var _this;

    _this = _EventEmitter.call(this) || this;
    _this.$body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
    return _this;
  }

  return _default;
}(eventemitter2__WEBPACK_IMPORTED_MODULE_0___default.a);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cart.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.itemAdd();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.itemAdd = function itemAdd() {
    var _this2 = this;

    this.$body.on('submit', '[data-cart-item-add]', function (event) {
      _this2.emit('cart-item-add', event, event.target);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/cookie.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  function _default() {
    return _BaseHooks.apply(this, arguments) || this;
  }

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/currency-selector.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.currencySelector();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.currencySelector = function currencySelector() {
    var _this2 = this;

    this.$body.on('input', '[data-currency-selector-toggle]', function (event) {
      _this2.emit('currencySelector-toggle', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/faceted-search.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.searchEvents();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.searchEvents = function searchEvents() {
    var _this2 = this;

    this.$body.on('click', '[data-faceted-search-facet]', function (event) {
      _this2.emit('facetedSearch-facet-clicked', event);
    });
    this.$body.on('submit', '[data-faceted-search-range]', function (event) {
      _this2.emit('facetedSearch-range-submitted', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.optionsChange();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.optionsChange = function optionsChange() {
    var _this2 = this;

    this.$body.on('change', '[data-product-option-change]', function (event) {
      _this2.emit('product-option-change', event, event.target);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/search.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.quickSearch();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.quickSearch = function quickSearch() {
    var _this2 = this;

    this.$body.on('input', '[data-search-quick]', function (event) {
      _this2.emit('search-quick', event);
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/hooks/sort-by.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/base.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default = /*#__PURE__*/function (_BaseHooks) {
  _inheritsLoose(_default, _BaseHooks);

  /**
   * @Constructor
   */
  function _default() {
    var _this;

    // call parent
    _this = _BaseHooks.call(this) || this;

    _this.sortByEvents();

    return _this;
  }

  var _proto = _default.prototype;

  _proto.sortByEvents = function sortByEvents() {
    var _this2 = this;

    this.$body.on('submit', '[data-sort-by]', function (event) {
      _this2.emit('sortBy-submitted', event);
    });
    this.$body.on('change', '[data-sort-by] select', function (event) {
      _this2.emit('sortBy-select-changed', event);

      if (!event.isDefaultPrevented()) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).closest('form').trigger('submit');
      }
    });
  };

  return _default;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/request.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Checks whether or not the current method passed in is valid
 *
 * @param {string} method
 * @returns {boolean}
 */

function isValidHTTPMethod(method) {
  var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  return allowedMethods.indexOf(method) !== -1;
}

/* harmony default export */ __webpack_exports__["default"] = (function (relativeUrl, opts, callback) {
  var defaultOptions = {
    method: 'GET',
    remote: false,
    requestOptions: {
      baseUrl: null,
      formData: null,
      params: {},
      config: {},
      template: []
    }
  };
  var options = Object.assign({}, defaultOptions, opts);
  var data = options.requestOptions.formData ? options.requestOptions.formData : options.requestOptions.params;
  var headers = {
    'stencil-config': options.requestOptions.config ? JSON.stringify(options.requestOptions.config) : '{}',
    'stencil-options': '{}',
    'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
  };
  var requestedTemplate = options.requestOptions.template;
  var usingTemplates = false;
  var usingSections = false;
  var templates = []; // Not a valid method

  if (!isValidHTTPMethod(options.method)) {
    return callback(new Error('Not a valid HTTP method'));
  }

  if (typeof requestedTemplate === 'object' && !Array.isArray(requestedTemplate)) {
    var template;
    usingSections = true;
    templates = [];

    for (template in requestedTemplate) {
      if (requestedTemplate.hasOwnProperty(template)) {
        templates.push(requestedTemplate[template]);
      }
    }
  } else if (typeof requestedTemplate === 'string') {
    templates = [requestedTemplate];
  } else if (Array.isArray(requestedTemplate) && requestedTemplate.length > 0) {
    templates = requestedTemplate;
  }

  if (templates.length > 0) {
    usingTemplates = true;
    headers['stencil-options'] = JSON.stringify({
      render_with: templates.join(',')
    });
  }

  var url = relativeUrl;

  if (options.requestOptions.baseUrl) {
    url = "" + options.requestOptions.baseUrl + url;
  } // make ajax request using jquery


  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    method: options.method,
    url: url,
    xhrFields: {
      withCredentials: true
    },
    contentType: options.requestOptions.formData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: !options.requestOptions.formData,
    success: function success(response) {
      var ret;
      var content = options.remote ? response.content : response;

      if (usingTemplates) {
        // Remove the `components` prefix from the response if it's an object
        if (typeof content === 'object') {
          var keys = Object.keys(content);
          var key;

          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            key = _keys[_i];
            var cleanKey = key.replace(/^components\//, '');
            content[cleanKey] = content[key];
            delete content[key];
          }
        } // If using "sections", morph the content into the arbitrary keys => content object.


        if (usingSections) {
          var templateVariableNames = Object.keys(requestedTemplate);
          var templateVariable;

          for (var _i2 = 0, _templateVariableName = templateVariableNames; _i2 < _templateVariableName.length; _i2++) {
            templateVariable = _templateVariableName[_i2];
            content[templateVariable] = content[requestedTemplate[templateVariable]];
            delete content[requestedTemplate[templateVariable]];
          }
        }

        if (options.remote) {
          ret = response;
          ret.content = content;
        } else {
          ret = content;
        }
      } else {
        ret = response;
      }

      callback(null, ret);
    },
    error: function error(XHR, textStatus, err) {
      callback(err);
    },
    data: data,
    headers: headers
  });
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/lib/utils.js ***!
  \******************************************************************/
/*! exports provided: normalizeQueryStringParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQueryStringParams", function() { return normalizeQueryStringParams; });
// Utilities
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/**
 * Normalize querystring params. Remove empty array values
 * @param {string} params
 * @returns {string} Normalized querystring
 */


function normalizeQueryStringParams(params) {
  var qsParams = queryString.parse(params);

  var isValidParam = function isValidParam(value) {
    return value !== '' && value !== undefined;
  };

  var optionsCollection = Object.keys(qsParams).reduce(function (normalized, key) {
    var param;

    if (qsParams[key] instanceof Array) {
      var _param;

      var filtered = qsParams[key].filter(isValidParam);
      param = (_param = {}, _param[key] = filtered, _param);
    } else if (isValidParam(qsParams[key])) {
      var _param2;

      param = (_param2 = {}, _param2[key] = qsParams[key], _param2);
    }

    return Object.assign({}, normalized, param);
  }, {});
  var paramString = queryString.stringify(optionsCollection);
  return paramString;
}

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/main.js ***!
  \*************************************************************/
/*! exports provided: hooks, api, tools, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@bigcommerce/stencil-utils/src/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./node_modules/@bigcommerce/stencil-utils/src/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "api", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./node_modules/@bigcommerce/stencil-utils/src/tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return _tools__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var StencilUtils = {
  hooks: _hooks__WEBPACK_IMPORTED_MODULE_0__["default"],
  api: _api__WEBPACK_IMPORTED_MODULE_1__["default"],
  tools: _tools__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (StencilUtils);
/* global define */

(function (root) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") && root) {
    // Ignores below for https://github.com/eslint/eslint/issues/5150
    define(function () {
      // eslint-disable-line prefer-arrow-callback
      root.stencilUtils = StencilUtils; // eslint-disable-line no-param-reassign
    });
  } else if ( true && module.exports) {
    module.exports = StencilUtils;
  } else {
    window.stencilUtils = StencilUtils;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools.js":
/*!**************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/image */ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js");
/* harmony import */ var _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/imageSrcset */ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js");
/* harmony import */ var _tools_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/storage */ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  image: new _tools_image__WEBPACK_IMPORTED_MODULE_0__["default"](),
  imageSrcset: new _tools_imageSrcset__WEBPACK_IMPORTED_MODULE_1__["default"](),
  storage: new _tools_storage__WEBPACK_IMPORTED_MODULE_2__["default"]()
});

/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/image.js":
/*!********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/image.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  _proto.getSrc = function getSrc(path, dimensions) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/g;
    var size;

    if (typeof dimensions === 'object') {
      var width = dimensions.width || 100;
      var height = dimensions.height || 100;
      size = width + "x" + height;
    } else if (typeof dimensions === 'string' && sizeRegex.test(dimensions)) {
      // If dimensions is a string and match the NNNxNNN or NNNw format
      size = dimensions;
    } else {
      // Use the original image size
      size = 'original';
    }

    return path.replace('{:size}', size);
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/imageSrcset.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  _proto.getSrcset = function getSrcset(url, sizes) {
    // Regex to test size string is of the form 123x123 or 100w
    var sizeRegex = /(^\d+w$)|(^(\d+?)x(\d+?)$)/; // Regex to test to that srcset descriptor is of the form 1x 1.5x 2x OR 123w

    var descriptorRegex = /(^\d+w$)|(^([0-9](\.[0-9]+)?)x)$/;
    var srcsets = {};

    if (!sizes) {
      // Use default srcsets if none are provided
      srcsets = {
        '80w': '80w',
        '160w': '160w',
        '320w': '320w',
        '640w': '640w',
        '960w': '960w',
        '1280w': '1280w',
        '1920w': '1920w',
        '2560w': '2560w'
      };
    } else if (sizes === Object(sizes) && !Object.keys(sizes).some(function (descriptor) {
      return !(descriptorRegex.test(descriptor) && sizeRegex.test(sizes[descriptor]));
    })) {
      // If object consists of valid srcsets, use it instead
      srcsets = sizes; // If there's only one argument, return a `src` only (also works for `srcset`)

      if (Object.keys(srcsets).length === 1) {
        return url.replace('{:size}', srcsets[Object.keys(srcsets)[0]]);
      }
    } else {
      throw new Error('Invalid srcset descriptor or size');
    } // eslint-disable-next-line new-cap


    return Object.keys(srcsets).map(function (descriptor) {
      return [url.replace('{:size}', srcsets[descriptor]), descriptor].join(' ');
    }).join(', ');
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bigcommerce/stencil-utils/src/tools/storage.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
var _default = /*#__PURE__*/function () {
  function _default() {}

  var _proto = _default.prototype;

  /**
   * Check if a storage type (like localStorage or sessionStorage) is available for use
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
   * @param type
   * @returns boolean
   */
  _proto.storageAvailable = function storageAvailable(type) {
    var storage = window[type];

    try {
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && ( // everything except Firefox
      e.code === 22 || // Firefox
      e.code === 1014 || // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' || // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
    }
  };

  _proto.localStorageAvailable = function localStorageAvailable() {
    return this.storageAvailable('localStorage');
  };

  return _default;
}();



/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/eventemitter2/lib/eventemitter2.js":
/*!*********************************************************!*\
  !*** ./node_modules/eventemitter2/lib/eventemitter2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {

      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    configure.call(this, conf);
  }

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else if(typeof tree._listeners === 'function') {
          tree._listeners = [tree._listeners, listener];
        }
        else if (isArray(tree._listeners)) {

          tree._listeners.push(listener);

          if (!tree._listeners.warned) {

            var m = defaultMaxListeners;

            if (typeof this._events.maxListeners !== 'undefined') {
              m = this._events.maxListeners;
            }

            if (m > 0 && tree._listeners.length > m) {

              tree._listeners.warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                            'leak detected. %d listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit.',
                            tree._listeners.length);
              console.trace();
            }
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    this._events || init.call(this);
    this._events.maxListeners = n;
    if (!this._conf) this._conf = {};
    this._conf.maxListeners = n;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) { return false; }
    }

    // Loop through the *_all* functions and invoke them.
    if (this._all) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        this._all[i].apply(this, args);
      }
    }

    // If there is no 'error' event listener then throw.
    if (type === 'error') {

      if (!this._all &&
        !this._events.error &&
        !(this.wildcard && this.listenerTree.error)) {

        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }

    var handler;

    if(this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    }
    else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      if (arguments.length === 1) {
        handler.call(this);
      }
      else if (arguments.length > 1)
        switch (arguments.length) {
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      return true;
    }
    else if (handler) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        this.event = type;
        listeners[i].apply(this, args);
      }
      return (listeners.length > 0) || !!this._all;
    }
    else {
      return !!this._all;
    }

  };

  EventEmitter.prototype.on = function(type, listener) {

    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if(this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else if(typeof this._events[type] === 'function') {
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
    }
    else if (isArray(this._events[type])) {
      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (!this._events[type].warned) {

        var m = defaultMaxListeners;

        if (typeof this._events.maxListeners !== 'undefined') {
          m = this._events.maxListeners;
        }

        if (m > 0 && this._events[type].length > m) {

          this._events[type].warned = true;
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
          console.trace();
        }
      }
    }
    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {

    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if(!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          return this;
        }
      }
    } else {
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else {
      if (!this._events[type]) return this;
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if(this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return EventEmitter;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}();


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.min.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&l(i,n.prototype),i}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function m(e){return Object.keys(e).map(function(t){return e[t]})}function h(t){return Array.prototype.slice.call(t)}function g(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===z.indexOf(n)&&(z.push(n),_(n))}function v(t){return t&&"function"==typeof t.toPromise}function b(t){return v(t)?t.toPromise():Promise.resolve(t)}function y(t){return t&&Promise.resolve(t)===t}function w(t){return t instanceof Element||"object"===r(e=t)&&e.jquery;var e}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function C(t){var e=Q();return e?e.querySelector(t):null}function e(t){return C(".".concat(t))}function n(){var t=$();return h(t.querySelectorAll(".".concat(Y.icon)))}function k(){var t=n().filter(function(t){return vt(t)});return t.length?t[0]:null}function x(){return e(Y.title)}function P(){return e(Y.content)}function A(){return e(Y.image)}function B(){return e(Y["progress-steps"])}function S(){return e(Y["validation-message"])}function E(){return C(".".concat(Y.actions," .").concat(Y.confirm))}function O(){return C(".".concat(Y.actions," .").concat(Y.cancel))}function T(){return e(Y.actions)}function L(){return e(Y.header)}function j(){return e(Y.footer)}function q(){return e(Y["timer-progress-bar"])}function I(){return e(Y.close)}function V(){var t=h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return vt(t)})}function M(){return!J()&&!document.body.classList.contains(Y["no-backdrop"])}function R(){return $().hasAttribute("data-loading")}function H(e,t){var n;e.textContent="",t&&(n=(new DOMParser).parseFromString(t,"text/html"),h(n.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),h(n.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function D(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function N(t,e,n){var o,i;if(i=e,h((o=t).classList).forEach(function(t){-1===m(Y).indexOf(t)&&-1===m(Z).indexOf(t)&&-1===m(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return _("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));mt(t,e.customClass[n])}}var U="SweetAlert2:",_=function(t){console.warn("".concat(U," ").concat(t))},F=function(t){console.error("".concat(U," ").concat(t))},z=[],W=function(t){return"function"==typeof t?t():t},K=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Y=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Z=t(["success","warning","info","question","error"]),Q=function(){return document.body.querySelector(".".concat(Y.container))},$=function(){return e(Y.popup)},J=function(){return document.body.classList.contains(Y["toast-shown"])},X={previousBodyPadding:null};function G(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return gt(t,Y[e]);case"checkbox":return t.querySelector(".".concat(Y.checkbox," input"));case"radio":return t.querySelector(".".concat(Y.radio," input:checked"))||t.querySelector(".".concat(Y.radio," input:first-child"));case"range":return t.querySelector(".".concat(Y.range," input"));default:return gt(t,Y.input)}}function tt(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function et(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function nt(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function ot(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function it(t){t.style.opacity="",t.style.display="none"}function rt(t,e,n){e?ot(t,n):it(t)}function at(t){return!!(t.scrollHeight>t.clientHeight)}function ct(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function st(t,e){var n=1<arguments.length&&void 0!==e&&e,o=q();vt(o)&&(n&&(o.style.transition="none",o.style.width="100%"),setTimeout(function(){o.style.transition="width ".concat(t/1e3,"s linear"),o.style.width="0%"},10))}function ut(){return"undefined"==typeof window||"undefined"==typeof document}function lt(t){sn.isVisible()&&ft!==t.target.value&&sn.resetValidationMessage(),ft=t.target.value}function dt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?wt(t,e):t&&H(e,t)}function pt(t,e){var n=T(),o=E(),i=O();e.showConfirmButton||e.showCancelButton||it(n),N(n,e,"actions"),xt(o,"confirm",e),xt(i,"cancel",e),e.buttonsStyling?function(t,e,n){mt([t,e],Y.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor);n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);{var o;R()||(o=window.getComputedStyle(t).getPropertyValue("background-color"),t.style.borderLeftColor=o,t.style.borderRightColor=o)}}(o,i,e):(ht([o,i],Y.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor=""),e.reverseButtons&&o.parentNode.insertBefore(i,o)}var ft,mt=function(t,e){et(t,e,!0)},ht=function(t,e){et(t,e,!1)},gt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(D(t.childNodes[n],e))return t.childNodes[n]},vt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},bt='\n <div aria-labelledby="'.concat(Y.title,'" aria-describedby="').concat(Y.content,'" class="').concat(Y.popup,'" tabindex="-1">\n   <div class="').concat(Y.header,'">\n     <ul class="').concat(Y["progress-steps"],'"></ul>\n     <div class="').concat(Y.icon," ").concat(Z.error,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.question,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.warning,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.info,'"></div>\n     <div class="').concat(Y.icon," ").concat(Z.success,'"></div>\n     <img class="').concat(Y.image,'" />\n     <h2 class="').concat(Y.title,'" id="').concat(Y.title,'"></h2>\n     <button type="button" class="').concat(Y.close,'"></button>\n   </div>\n   <div class="').concat(Y.content,'">\n     <div id="').concat(Y.content,'" class="').concat(Y["html-container"],'"></div>\n     <input class="').concat(Y.input,'" />\n     <input type="file" class="').concat(Y.file,'" />\n     <div class="').concat(Y.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(Y.select,'"></select>\n     <div class="').concat(Y.radio,'"></div>\n     <label for="').concat(Y.checkbox,'" class="').concat(Y.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(Y.label,'"></span>\n     </label>\n     <textarea class="').concat(Y.textarea,'"></textarea>\n     <div class="').concat(Y["validation-message"],'" id="').concat(Y["validation-message"],'"></div>\n   </div>\n   <div class="').concat(Y.actions,'">\n     <button type="button" class="').concat(Y.confirm,'">OK</button>\n     <button type="button" class="').concat(Y.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(Y.footer,'"></div>\n   <div class="').concat(Y["timer-progress-bar-container"],'">\n     <div class="').concat(Y["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),yt=function(t){var e,n,o,i,r,a,c,s,u,l,d,p,f,m,h,g=!!(e=Q())&&(e.parentNode.removeChild(e),ht([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0);ut()?F("SweetAlert2 requires document to initialize"):((n=document.createElement("div")).className=Y.container,g&&mt(n,Y["no-transition"]),H(n,bt),(o="string"==typeof(i=t.target)?document.querySelector(i):i).appendChild(n),r=t,(a=$()).setAttribute("role",r.toast?"alert":"dialog"),a.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||a.setAttribute("aria-modal","true"),c=o,"rtl"===window.getComputedStyle(c).direction&&mt(Q(),Y.rtl),s=P(),u=gt(s,Y.input),l=gt(s,Y.file),d=s.querySelector(".".concat(Y.range," input")),p=s.querySelector(".".concat(Y.range," output")),f=gt(s,Y.select),m=s.querySelector(".".concat(Y.checkbox," input")),h=gt(s,Y.textarea),u.oninput=lt,l.onchange=lt,f.onchange=lt,m.onchange=lt,h.oninput=lt,d.oninput=function(t){lt(t),p.value=d.value},d.onchange=function(t){lt(t),d.nextSibling.value=d.value})},wt=function(t,e){t.jquery?Ct(e,t):H(e,t.toString())},Ct=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},kt=function(){if(ut())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function xt(t,e,n){var o;rt(t,n["show".concat((o=e).charAt(0).toUpperCase()+o.slice(1),"Button")],"inline-block"),H(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=Y[e],N(t,n,"".concat(e,"Button")),mt(t,n["".concat(e,"ButtonClass")])}function Pt(t,e){var n,o,i,r,a,c,s,u,l=Q();l&&(n=l,"string"==typeof(o=e.backdrop)?n.style.background=o:o||mt([document.documentElement,document.body],Y["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),i=l,(r=e.position)in Y?mt(i,Y[r]):(_('The "position" parameter is not valid, defaulting to "center"'),mt(i,Y.center)),a=l,!(c=e.grow)||"string"!=typeof c||(s="grow-".concat(c))in Y&&mt(a,Y[s]),N(l,e,"container"),(u=document.body.getAttribute("data-swal2-queue-step"))&&(l.setAttribute("data-queue-step",u),document.body.removeAttribute("data-swal2-queue-step")))}function At(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var Bt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},St=["input","file","range","select","radio","checkbox","textarea"],Et=function(t){if(!jt[t.input])return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Lt(t.input),n=jt[t.input](e,t);ot(n),setTimeout(function(){tt(n)})},Ot=function(t,e){var n=G(P(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},Tt=function(t){var e=Lt(t.input);t.customClass&&mt(e,t.customClass.input)},Lt=function(t){var e=Y[t]?Y[t]:Y.input;return gt(P(),e)},jt={};jt.text=jt.email=jt.password=jt.number=jt.tel=jt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:y(e.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),At(t,e),t.type=e.input,t},jt.file=function(t,e){return At(t,e),t},jt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,t},jt.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),H(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),t},jt.radio=function(t){return t.textContent="",t},jt.checkbox=function(t,e){var n=G(P(),"checkbox");n.value=1,n.id=Y.checkbox,n.checked=Boolean(e.inputValue);var o=t.querySelector("span");return H(o,e.inputPlaceholder),t},jt.textarea=function(e,t){var n,o;return e.value=t.inputValue,At(e,t),"MutationObserver"in window&&(n=parseInt(window.getComputedStyle($()).width),o=parseInt(window.getComputedStyle($()).paddingLeft)+parseInt(window.getComputedStyle($()).paddingRight),new MutationObserver(function(){var t=e.offsetWidth+o;$().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function qt(t,e){var n,o,i,r,a,c=P().querySelector("#".concat(Y.content));e.html?(dt(e.html,c),ot(c,"block")):e.text?(c.textContent=e.text,ot(c,"block")):it(c),n=t,o=e,i=P(),r=Bt.innerParams.get(n),a=!r||o.input!==r.input,St.forEach(function(t){var e=Y[t],n=gt(i,e);Ot(t,o.inputAttributes),n.className=e,a&&it(n)}),o.input&&(a&&Et(o),Tt(o)),N(P(),e,"content")}function It(){return Q()&&Q().getAttribute("data-queue-step")}function Vt(t,s){var u=B();if(!s.progressSteps||0===s.progressSteps.length)return it(u),0;ot(u),u.textContent="";var l=parseInt(void 0===s.currentProgressStep?It():s.currentProgressStep);l>=s.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.progressSteps.forEach(function(t,e){var n,o,i,r,a,c=(n=t,o=document.createElement("li"),mt(o,Y["progress-step"]),H(o,n),o);u.appendChild(c),e===l&&mt(c,Y["active-progress-step"]),e!==s.progressSteps.length-1&&(r=s,a=document.createElement("li"),mt(a,Y["progress-step-line"]),r.progressStepsDistance&&(a.style.width=r.progressStepsDistance),i=a,u.appendChild(i))})}function Mt(t,e){var n,o,i,r,a,c,s,u,l=L();N(l,e,"header"),Vt(0,e),n=t,o=e,(r=Bt.innerParams.get(n))&&o.icon===r.icon&&k()?N(k(),o,"icon"):(Dt(),o.icon&&(-1!==Object.keys(Z).indexOf(o.icon)?(i=C(".".concat(Y.icon,".").concat(Z[o.icon])),ot(i),Ut(i,o),Nt(),N(i,o,"icon"),mt(i,o.showClass.icon)):F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon,'"')))),function(t){var e=A();if(!t.imageUrl)return it(e);ot(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),nt(e,"width",t.imageWidth),nt(e,"height",t.imageHeight),e.className=Y.image,N(e,t,"image")}(e),a=e,c=x(),rt(c,a.title||a.titleText),a.title&&dt(a.title,c),a.titleText&&(c.innerText=a.titleText),N(c,a,"title"),s=e,u=I(),H(u,s.closeButtonHtml),N(u,s,"closeButton"),rt(u,s.showCloseButton),u.setAttribute("aria-label",s.closeButtonAriaLabel)}function Rt(t,e){var n,o,i,r;n=e,o=$(),nt(o,"width",n.width),nt(o,"padding",n.padding),n.background&&(o.style.background=n.background),zt(o,n),Pt(0,e),Mt(t,e),qt(t,e),pt(0,e),i=e,r=j(),rt(r,i.footer),i.footer&&dt(i.footer,r),N(r,i,"footer"),"function"==typeof e.onRender&&e.onRender($())}function Ht(){return E()&&E().click()}var Dt=function(){for(var t=n(),e=0;e<t.length;e++)it(t[e])},Nt=function(){for(var t=$(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Ut=function(t,e){t.textContent="",e.iconHtml?H(t,_t(e.iconHtml)):"success"===e.icon?H(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?H(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):H(t,_t({question:"?",warning:"!",info:"i"}[e.icon]))},_t=function(t){return'<div class="'.concat(Y["icon-content"],'">').concat(t,"</div>")},Ft=[],zt=function(t,e){t.className="".concat(Y.popup," ").concat(vt(t)?e.showClass.popup:""),e.toast?(mt([document.documentElement,document.body],Y["toast-shown"]),mt(t,Y.toast)):mt(t,Y.modal),N(t,e,"popup"),"string"==typeof e.customClass&&mt(t,e.customClass),e.icon&&mt(t,Y["icon-".concat(e.icon)])};function Wt(){var t=$();t||sn.fire(),t=$();var e=T(),n=E();ot(e),ot(n,"inline-block"),mt([t,e],Y.loading),n.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Kt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Xt.restoreFocusTimeout=setTimeout(function(){Xt.previousActiveElement&&Xt.previousActiveElement.focus?(Xt.previousActiveElement.focus(),Xt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Yt(){if(Xt.timeout)return function(){var t=q(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),o=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(o,"%")}(),Xt.timeout.stop()}function Zt(){if(Xt.timeout){var t=Xt.timeout.start();return st(t),t}}function Qt(t){return Object.prototype.hasOwnProperty.call(Gt,t)}function $t(t){return ee[t]}function Jt(t){for(var e in t)Qt(i=e)||_('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==ne.indexOf(o)&&_('The parameter "'.concat(o,'" is incompatible with toasts'))),$t(n=e)&&g(n,$t(n));var n,o,i}var Xt={},Gt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,onRender:void 0,onClose:void 0,onAfterClose:void 0,onDestroy:void 0,scrollbarPadding:!0},te=["allowEscapeKey","allowOutsideClick","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","footer","hideClass","html","icon","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","text","title","titleText"],ee={animation:'showClass" and "hideClass'},ne=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],oe=Object.freeze({isValidParameter:Qt,isUpdatableParameter:function(t){return-1!==te.indexOf(t)},isDeprecatedParameter:$t,argsToParams:function(o){var i={};return"object"!==r(o[0])||w(o[0])?["title","html","icon"].forEach(function(t,e){var n=o[e];"string"==typeof n||w(n)?i[t]=n:void 0!==n&&F("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(n)))}):s(i,o[0]),i},isVisible:function(){return vt($())},clickConfirm:Ht,clickCancel:function(){return O()&&O().click()},getContainer:Q,getPopup:$,getTitle:x,getContent:P,getHtmlContainer:function(){return e(Y["html-container"])},getImage:A,getIcon:k,getIcons:n,getCloseButton:I,getActions:T,getConfirmButton:E,getCancelButton:O,getHeader:L,getFooter:j,getTimerProgressBar:q,getFocusableElements:V,getValidationMessage:S,isLoading:R,fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=u(n);return p(this,o?(t=u(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return c(i,[{key:"_main",value:function(t){return f(u(i.prototype),"_main",this).call(this,s({},r,t))}}]),i}(this)},queue:function(t){var r=this;Ft=t;function a(t,e){Ft=[],t(e)}var c=[];return new Promise(function(i){!function e(n,o){n<Ft.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Ft[n]).then(function(t){void 0!==t.value?(c.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:c})}(0)})},getQueueStep:It,insertQueueStep:function(t,e){return e&&e<Ft.length?Ft.splice(e,0,t):Ft.push(t)},deleteQueueStep:function(t){void 0!==Ft[t]&&Ft.splice(t,1)},showLoading:Wt,enableLoading:Wt,getTimerLeft:function(){return Xt.timeout&&Xt.timeout.getTimerLeft()},stopTimer:Yt,resumeTimer:Zt,toggleTimer:function(){var t=Xt.timeout;return t&&(t.running?Yt:Zt)()},increaseTimer:function(t){if(Xt.timeout){var e=Xt.timeout.increase(t);return st(e,!0),e}},isTimerRunning:function(){return Xt.timeout&&Xt.timeout.isRunning()}});function ie(){var t,e=Bt.innerParams.get(this);e&&(t=Bt.domCache.get(this),e.showConfirmButton||(it(t.confirmButton),e.showCancelButton||it(t.actions)),ht([t.popup,t.actions],Y.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1)}function re(){null===X.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(X.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(X.previousBodyPadding+function(){var t=document.createElement("div");t.className=Y["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function ae(){return!!window.MSInputMethodContext&&!!document.documentMode}function ce(){var t=Q(),e=$();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var se=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||$().scrollHeight>window.innerHeight-44&&(Q().style.paddingBottom="".concat(44,"px"))},ue=function(){var e,t=Q();t.ontouchstart=function(t){e=le(t.target)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},le=function(t){var e=Q();return t===e||!(at(e)||"INPUT"===t.tagName||at(P())&&P().contains(t))},de={swalPromiseResolve:new WeakMap};function pe(t,e,n,o){var i;n?he(t,o):(Kt().then(function(){return he(t,o)}),Xt.keydownTarget.removeEventListener("keydown",Xt.keydownHandler,{capture:Xt.keydownListenerCapture}),Xt.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),M()&&(null!==X.previousBodyPadding&&(document.body.style.paddingRight="".concat(X.previousBodyPadding,"px"),X.previousBodyPadding=null),D(document.body,Y.iosfix)&&(i=parseInt(document.body.style.top,10),ht(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=-1*i),"undefined"!=typeof window&&ae()&&window.removeEventListener("resize",ce),h(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),ht([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"],Y["toast-column"]])}function fe(t){var e,n,o,i=$();i&&(e=Bt.innerParams.get(this))&&!D(i,e.hideClass.popup)&&(n=de.swalPromiseResolve.get(this),ht(i,e.showClass.popup),mt(i,e.hideClass.popup),o=Q(),ht(o,e.showClass.backdrop),mt(o,e.hideClass.backdrop),function(t,e,n){var o=Q(),i=kt&&ct(e),r=n.onClose,a=n.onAfterClose;if(r!==null&&typeof r==="function"){r(e)}if(i){me(t,e,o,a)}else{pe(t,o,J(),a)}}(this,i,e),void 0!==t?(t.isDismissed=void 0!==t.dismiss,t.isConfirmed=void 0===t.dismiss):t={isDismissed:!0,isConfirmed:!1},n(t||{}))}var me=function(t,e,n,o){Xt.swalCloseEventFinishedCallback=pe.bind(null,t,n,J(),o),e.addEventListener(kt,function(t){t.target===e&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback)})},he=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function ge(t,e,n){var o=Bt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function ve(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var be=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return c(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),ye={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function we(t){var e,n;(e=t).inputValidator||Object.keys(ye).forEach(function(t){e.input===t&&(e.inputValidator=ye[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&_("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=W(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(_('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),yt(t)}function Ce(t){var e=Q(),n=$();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;je(e,n,t),Te(e,n),M()&&(Le(e,t.scrollbarPadding,o),h(document.body.children).forEach(function(t){t===Q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,Q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),J()||Xt.previousActiveElement||(Xt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)}),ht(e,Y["no-transition"])}function ke(t){var e,n=$();t.target===n&&(e=Q(),n.removeEventListener(kt,ke),e.style.overflowY="auto")}function xe(t,e){"select"===e.input||"radio"===e.input?Me(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&(v(e.inputValue)||y(e.inputValue))&&Re(t,e)}function Pe(t,e){t.disableButtons(),e.input?Ne(t,e):Ue(t,e,!0)}function Ae(t,e){t.disableButtons(),e(K.cancel)}function Be(t,e){t.closePopup({value:e})}function Se(e,t,n,o){t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=function(t){return ze(e,t,o)},t.keydownTarget=n.keydownListenerCapture?window:$(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)}function Ee(t,e,n){var o=V(),i=0;if(i<o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();$().focus()}function Oe(t,e,n){Bt.innerParams.get(t).toast?Qe(t,e,n):(Je(e),Xe(e),Ge(t,e,n))}var Te=function(t,e){kt&&ct(e)?(t.style.overflowY="hidden",e.addEventListener(kt,ke)):t.style.overflowY="auto"},Le=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!D(document.body,Y.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),mt(document.body,Y.iosfix),ue(),se()),"undefined"!=typeof window&&ae()&&(ce(),window.addEventListener("resize",ce)),e&&"hidden"!==n&&re(),setTimeout(function(){t.scrollTop=0})},je=function(t,e,n){mt(t,n.showClass.backdrop),ot(e),mt(e,n.showClass.popup),mt([document.documentElement,document.body],Y.shown),n.heightAuto&&n.backdrop&&!n.toast&&mt([document.documentElement,document.body],Y["height-auto"])},qe=function(t){return t.checked?1:0},Ie=function(t){return t.checked?t.value:null},Ve=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Me=function(e,n){function o(t){return He[n.input](i,De(t),n)}var i=P();v(n.inputOptions)||y(n.inputOptions)?(Wt(),b(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Re=function(e,n){var o=e.getInput();it(o),b(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),ot(o),o.focus(),e.hideLoading()}).catch(function(t){F("Error in inputValue promise: ".concat(t)),o.value="",ot(o),o.focus(),e.hideLoading()})},He={select:function(t,e,i){function r(t,e,n){var o=document.createElement("option");o.value=n,H(o,e),i.inputValue.toString()===n.toString()&&(o.selected=!0),t.appendChild(o)}var a=gt(t,Y.select);e.forEach(function(t){var e,n=t[0],o=t[1];Array.isArray(o)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,a.appendChild(e),o.forEach(function(t){return r(e,t[1],t[0])})):r(a,o,n)}),a.focus()},radio:function(t,e,a){var c=gt(t,Y.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=Y.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");H(r,n),r.className=Y.label,i.appendChild(o),i.appendChild(r),c.appendChild(i)});var n=c.querySelectorAll("input");n.length&&n[0].focus()}},De=function o(n){var i=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach(function(t,e){var n=t;"object"===r(n)&&(n=o(n)),i.push([e,n])}):Object.keys(n).forEach(function(t){var e=n[t];"object"===r(e)&&(e=o(e)),i.push([t,e])}),i},Ne=function(e,n){var o=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qe(n);case"radio":return Ie(n);case"file":return Ve(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(e,n);n.inputValidator?(e.disableInput(),Promise.resolve().then(function(){return b(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Ue(e,n,o)})):e.getInput().checkValidity()?Ue(e,n,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Ue=function(e,t,n){t.showLoaderOnConfirm&&Wt(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return b(t.preConfirm(n,t.validationMessage))}).then(function(t){vt(S())||!1===t?e.hideLoading():Be(e,void 0===t?n:t)})):Be(e,n)},_e=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"],Fe=["Escape","Esc"],ze=function(t,e,n){var o=Bt.innerParams.get(t);o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?We(t,e,o):"Tab"===e.key?Ke(e,o):-1!==_e.indexOf(e.key)?Ye():-1!==Fe.indexOf(e.key)&&Ze(e,o,n)},We=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Ht(),e.preventDefault()}},Ke=function(t){for(var e=t.target,n=V(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?Ee(0,o,-1):Ee(0,o,1),t.stopPropagation(),t.preventDefault()},Ye=function(){var t=E(),e=O();document.activeElement===t&&vt(e)?e.focus():document.activeElement===e&&vt(t)&&t.focus()},Ze=function(t,e,n){W(e.allowEscapeKey)&&(t.preventDefault(),n(K.esc))},Qe=function(e,t,n){t.popup.onclick=function(){var t=Bt.innerParams.get(e);t.showConfirmButton||t.showCancelButton||t.showCloseButton||t.input||n(K.close)}},$e=!1,Je=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&($e=!0)}}},Xe=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||($e=!0)}}},Ge=function(n,o,i){o.container.onclick=function(t){var e=Bt.innerParams.get(n);$e?$e=!1:t.target===o.container&&W(e.allowOutsideClick)&&i(K.backdrop)}};var tn=function(t,e,n){var o=q();it(o),e.timer&&(t.timeout=new be(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ot(o),setTimeout(function(){t.timeout.running&&st(e.timer)})))},en=function(t,e){if(!e.toast)return W(e.allowEnterKey)?e.focusCancel&&vt(t.cancelButton)?t.cancelButton.focus():e.focusConfirm&&vt(t.confirmButton)?t.confirmButton.focus():void Ee(0,-1,1):nn()},nn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};var on,rn=function(t){for(var e in t)t[e]=new WeakMap},an=Object.freeze({hideLoading:ie,disableLoading:ie,getInput:function(t){var e=Bt.innerParams.get(t||this),n=Bt.domCache.get(t||this);return n?G(n.content,e.input):null},close:fe,closePopup:fe,closeModal:fe,closeToast:fe,enableButtons:function(){ge(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){ge(this,["confirmButton","cancelButton"],!0)},enableInput:function(){return ve(this.getInput(),!1)},disableInput:function(){return ve(this.getInput(),!0)},showValidationMessage:function(t){var e=Bt.domCache.get(this);H(e.validationMessage,t);var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),ot(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",Y["validation-message"]),tt(o),mt(o,Y.inputerror))},resetValidationMessage:function(){var t=Bt.domCache.get(this);t.validationMessage&&it(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ht(e,Y.inputerror))},getProgressSteps:function(){return Bt.domCache.get(this).progressSteps},_main:function(t){Jt(t),Xt.currentInstance&&Xt.currentInstance._destroy(),Xt.currentInstance=this;var e=function(t){var e=s({},Gt.showClass,t.showClass),n=s({},Gt.hideClass,t.hideClass),o=s({},Gt,t);if(o.showClass=e,o.hideClass=n,t.animation===false){o.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"};o.hideClass={}}return o}(t);we(e),Object.freeze(e),Xt.timeout&&(Xt.timeout.stop(),delete Xt.timeout),clearTimeout(Xt.restoreFocusTimeout);var n=function(t){var e={popup:$(),container:Q(),content:P(),actions:T(),confirmButton:E(),cancelButton:O(),closeButton:I(),validationMessage:S(),progressSteps:B()};return Bt.domCache.set(t,e),e}(this);return Rt(this,e),Bt.innerParams.set(this,e),function(n,o,i){return new Promise(function(t){var e=function t(e){n.closePopup({dismiss:e})};de.swalPromiseResolve.set(n,t);o.confirmButton.onclick=function(){return Pe(n,i)};o.cancelButton.onclick=function(){return Ae(n,e)};o.closeButton.onclick=function(){return e(K.close)};Oe(n,o,e);Se(n,Xt,i,e);if(i.toast&&(i.input||i.footer||i.showCloseButton)){mt(document.body,Y["toast-column"])}else{ht(document.body,Y["toast-column"])}xe(n,i);Ce(i);tn(Xt,i,e);en(o,i);setTimeout(function(){o.container.scrollTop=0})})}(this,n,e)},update:function(e){var t=$(),n=Bt.innerParams.get(this);if(!t||D(t,n.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){sn.isUpdatableParameter(t)?o[t]=e[t]:_('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var i=s({},n,o);Rt(this,i),Bt.innerParams.set(this,i),Object.defineProperties(this,{params:{value:s({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=Bt.domCache.get(this),e=Bt.innerParams.get(this);e&&(t.popup&&Xt.swalCloseEventFinishedCallback&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback),Xt.deferDisposalTimer&&(clearTimeout(Xt.deferDisposalTimer),delete Xt.deferDisposalTimer),"function"==typeof e.onDestroy&&e.onDestroy(),delete this.params,delete Xt.keydownHandler,delete Xt.keydownTarget,rn(Bt),rn(de))}}),cn=function(){function r(){if(a(this,r),"undefined"!=typeof window){"undefined"==typeof Promise&&F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),on=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);Bt.promise.set(this,i)}}return c(r,[{key:"then",value:function(t){return Bt.promise.get(this).then(t)}},{key:"finally",value:function(t){return Bt.promise.get(this).finally(t)}}]),r}();s(cn.prototype,an),s(cn,oe),Object.keys(an).forEach(function(t){cn[t]=function(){if(on)return on[t].apply(on,arguments)}}),cn.DismissReason=K,cn.version="9.17.2";var sn=cn;return sn.default=sn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2FwaS9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvcHJvZHVjdC1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvYXBpL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9hcGkvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2hvb2tzL2N1cnJlbmN5LXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3MvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3Mvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvaG9va3Mvc29ydC1ieS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL2xpYi9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscy9zcmMvdG9vbHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy90b29scy9pbWFnZVNyY3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMvc3JjL3Rvb2xzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlY29kZS11cmktY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIyL2xpYi9ldmVudGVtaXR0ZXIyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIl0sIm5hbWVzIjpbImFsbHVyZUV4Y2VwdGlvbiIsImNhcnRJdGVtcyIsInNrdXMiLCJ0ZWFtZGVza0l0ZW1zIiwidGVhbWRlc2tQT0l0ZW1zIiwiY2FydEdldERlbGl2ZXJ5IiwibGluZUl0ZW1zIiwicGh5c2ljYWxJdGVtcyIsIm1hcCIsImkiLCJza3UiLCJpbmRleE9mIiwibGVuZ3RoIiwic2xpY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRhYmxlIiwiZmlsdGVyIiwiam9pbiIsInRoZW4iLCJyIiwianNvbiIsImNhcnRTZXREZWxpdmVyeSIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJxdHlDaGVja2VkIiwiaW5kZXgiLCJpdGVtIiwiZmluZCIsInMiLCJTS1UiLCJ0b1VwcGVyQ2FzZSIsIiQiLCJlcSIsInF0eSIsInF1YW50aXR5IiwiYnVmZiIsImNvbnRlbnQiLCJOdW1iZXIiLCJNYXRoIiwibWluIiwiYXBwZW5kIiwiY21oUnVzaEl0ZW1zIiwiaGFpclNlcnZpY2UiLCJpbmNsdWRlcyIsImVudHJpZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiZ2V0Q2FydCIsImluY2x1ZGVPcHRpb25zIiwiZXJyIiwibXlDYXJ0IiwiaWQiLCJiYXNlQW1vdW50IiwiY2hlY2tJbml0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYmFjdGlvbiIsIm9uIiwic2V0VGltZW91dCIsImludGVybmFscyIsImdldFBhZ2UiLCJ1cmwiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwicmVxdWVzdE9wdGlvbnMiLCJjb3VudHJ5IiwiQ291bnRyeUFwaSIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiUHJvZHVjdEF0dHJpYnV0ZXNBcGkiLCJwcm9kdWN0IiwiUHJvZHVjdEFwaSIsInNlYXJjaCIsIlNlYXJjaEFwaSIsIkNhcnRBcGkiLCJ2ZXJzaW9uIiwicmVtb3RlVmVyc2lvbiIsInJlbW90ZUJhc2VFbmRwb2ludCIsIm1ha2VSZXF1ZXN0IiwicmVtb3RlIiwicmVtb3RlUmVxdWVzdCIsImVuZHBvaW50IiwicmVtb3RlVXJsIiwiZ2V0Q2FydHMiLCJyZXNwb25zZSIsImNhcnRJZCIsImdldENhcnRRdWFudGl0eSIsImxpbmVJdGVtUXVhbnRpdGllcyIsImRpZ2l0YWxJdGVtcyIsImN1c3RvbUl0ZW1zIiwicmVkdWNlIiwiYSIsImIiLCJjb25jYXQiLCJsaW5lSXRlbSIsInBhcmVudElkIiwiYWNjdW11bGF0b3IiLCJsaW5lSXRlbVF1YW50aXR5IiwiZ2lmdENlcnRpZmljYXRlUXVhbnRpdHkiLCJnaWZ0Q2VydGlmaWNhdGVzIiwiaXRlbUFkZCIsImZvcm1EYXRhIiwiZW1pdERhdGEiLCJIb29rcyIsImVtaXQiLCJpdGVtVXBkYXRlIiwiaXRlbUlkIiwiY2FsbGJhY2tBcmciLCJpdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInVwZGF0ZSIsIml0ZW1SZW1vdmUiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIm9wdHMiLCJzdWJtaXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9uIiwicGFyYW1zIiwicGF5bG9hZCIsImdldENvbnRlbnQiLCJnZXRTaGlwcGluZ1F1b3RlcyIsInJlbmRlcldpdGgiLCJyZW5kZXJXaXRoQXJnIiwidGVtcGxhdGUiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwicXVvdGVJZCIsInNoaXBwaW5nX21ldGhvZCIsImFwcGx5Q29kZSIsImNvZGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsIkJhc2UiLCJnZXRCeUlkIiwiZ2V0QnlOYW1lIiwibmFtZSIsImluQ2FydEVuZHBvaW50Iiwib3B0aW9uQ2hhbmdlIiwicHJvZHVjdElkIiwidGVtcGxhdGVBcmciLCJub3JtYWxpemVkUXMiLCJub3JtYWxpemVRdWVyeVN0cmluZ1BhcmFtcyIsImNvbmZpZ3VyZUluQ2FydCIsInBhcmFtc0FyZyIsInF1ZXJ5IiwiY2xhc3NlcyIsIkNhcnRIb29rcyIsImNvb2tpZSIsIkNvb2tpZUhvb2tzIiwiY3VycmVuY3lTZWxlY3RvciIsIkN1cnJlbmN5U2VsZWN0b3JIb29rcyIsIlByb2R1Y3RIb29rcyIsIlNlYXJjaEhvb2tzIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2hIb29rcyIsInNvcnRCeSIsIlNvcnRCeUhvb2tzIiwicGFyc2VIb29rcyIsImhvb2tOYW1lIiwiaG9va1R5cGUiLCJzcGxpdCIsInVuZGVmaW5lZCIsIkVycm9yIiwiaG9vayIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwiJGJvZHkiLCJFdmVudEVtaXR0ZXIiLCJldmVudCIsInRhcmdldCIsIkJhc2VIb29rcyIsInNlYXJjaEV2ZW50cyIsIm9wdGlvbnNDaGFuZ2UiLCJxdWlja1NlYXJjaCIsInNvcnRCeUV2ZW50cyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwidHJpZ2dlciIsImlzVmFsaWRIVFRQTWV0aG9kIiwiYWxsb3dlZE1ldGhvZHMiLCJyZWxhdGl2ZVVybCIsImRlZmF1bHRPcHRpb25zIiwiYmFzZVVybCIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJCQ0RhdGEiLCJjc3JmX3Rva2VuIiwicmVxdWVzdGVkVGVtcGxhdGUiLCJ1c2luZ1RlbXBsYXRlcyIsInVzaW5nU2VjdGlvbnMiLCJ0ZW1wbGF0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJyZW5kZXJfd2l0aCIsImFqYXgiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsInJldCIsImtleXMiLCJrZXkiLCJjbGVhbktleSIsInJlcGxhY2UiLCJ0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMiLCJ0ZW1wbGF0ZVZhcmlhYmxlIiwiZXJyb3IiLCJYSFIiLCJ0ZXh0U3RhdHVzIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwicXNQYXJhbXMiLCJwYXJzZSIsImlzVmFsaWRQYXJhbSIsInZhbHVlIiwib3B0aW9uc0NvbGxlY3Rpb24iLCJub3JtYWxpemVkIiwicGFyYW0iLCJmaWx0ZXJlZCIsInBhcmFtU3RyaW5nIiwiU3RlbmNpbFV0aWxzIiwiaG9va3MiLCJ0b29scyIsInJvb3QiLCJkZWZpbmUiLCJzdGVuY2lsVXRpbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1hZ2UiLCJJbWFnZVRvb2wiLCJpbWFnZVNyY3NldCIsIkltYWdlU3Jjc2V0VG9vbCIsInN0b3JhZ2UiLCJTdG9yYWdlVG9vbHMiLCJnZXRTcmMiLCJwYXRoIiwiZGltZW5zaW9ucyIsInNpemVSZWdleCIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInRlc3QiLCJnZXRTcmNzZXQiLCJzaXplcyIsImRlc2NyaXB0b3JSZWdleCIsInNyY3NldHMiLCJzb21lIiwiZGVzY3JpcHRvciIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiRE9NRXhjZXB0aW9uIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUE7QUFDQTtBQUVBLElBQUlBLGVBQWUsR0FBRyxDQUNsQixNQURrQixFQUVsQixNQUZrQixFQUdsQixPQUhrQixFQUlsQixVQUprQixFQUtsQixTQUxrQixFQU1sQixRQU5rQixFQU9sQixRQVBrQixFQVFsQixPQVJrQixFQVNsQixRQVRrQixFQVVsQixTQVZrQixFQVdsQixRQVhrQixFQVlsQixRQVprQixFQWFsQixRQWJrQixFQWNsQixRQWRrQixFQWVsQixRQWZrQixFQWdCbEIsUUFoQmtCLEVBaUJsQixRQWpCa0IsRUFrQmxCLFFBbEJrQixFQW1CbEIsUUFuQmtCLEVBb0JsQixNQXBCa0IsRUFxQmxCLFFBckJrQixFQXNCbEIsUUF0QmtC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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTzs7QUFFNUI7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0Qzs7QUFFQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSxJ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QiwyQ0FBMkMsbUJBQW1CLGdGQUFnRixrQkFBa0IsVUFBVSxpQ0FBaUMsaUNBQWlDLE9BQU8sb0RBQW9ELGFBQWEsd0RBQXdELGVBQWUsU0FBUyxJQUFJLDhHQUE4RyxrQkFBa0IsT0FBTyw0SUFBNEksOEJBQThCLE9BQU8sNkRBQTZELCtCQUErQixvQkFBb0IsY0FBYyxVQUFVLEdBQUcsK0JBQStCLG1DQUFtQyxnQkFBZ0Isa0NBQWtDLGdCQUFnQixpQ0FBaUMsbUJBQW1CLFVBQVUsYUFBYSxvREFBb0Qsb0NBQW9DLEtBQUssb0NBQW9DLFFBQVEsTUFBTSxXQUFXLFFBQVEsc0JBQXNCLHdCQUF3QixFQUFFLEVBQUUsV0FBVyxvQkFBb0IscUNBQXFDLHFMQUFxTCxTQUFTLG1DQUFtQyxxTUFBcU0sRUFBRSxVQUFVLE1BQU0sb0VBQW9FLFFBQVEsVUFBVSwyQ0FBMkMsRUFBRSxxQkFBcUIsdURBQXVELDJWQUEyVixnQkFBZ0IsYUFBYSx5Q0FBeUMsbVBBQW1QLDhDQUE4QyxJQUFJLHNCQUFzQixzREFBc0QsOEJBQThCLFFBQVEsbURBQW1ELEVBQUUsOEJBQThCLHdCQUF3QixhQUFhLDZCQUE2QixxQ0FBcUMsRUFBRSxnQ0FBZ0Msd0NBQXdDLEtBQUssR0FBRyxnRUFBZ0UsaUJBQWlCLHdDQUF3Qyx5Q0FBeUMsVUFBVSxxQkFBcUIsMEc7Ozs7Ozs7Ozs7O0FDQXYyeEM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9jaGVja291dC5qc1wiKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBfLCB7IG1pbiB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuXHJcbnZhciBhbGx1cmVFeGNlcHRpb24gPSBbXHJcbiAgICBcImNvY29cIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJhZGVsZVwiLFxyXG4gICAgXCJhbmdlbGluYVwiLFxyXG4gICAgXCJqZXNzaWNhXCIsXHJcbiAgICBcInNlbGVuYVwiLFxyXG4gICAgXCJ0YXlsb3JcIixcclxuICAgIFwianVsaWFcIixcclxuICAgIFwibmljb2xlXCIsXHJcbiAgICBcImd3eW5ldGhcIixcclxuICAgIFwiZXY3OTE0XCIsXHJcbiAgICBcInRsNjgxNFwiLFxyXG4gICAgXCJldjU3MTRcIixcclxuICAgIFwibW81NTE0XCIsXHJcbiAgICBcIm1vNzYwOFwiLFxyXG4gICAgXCJldjU1MTJcIixcclxuICAgIFwiZXY1NzA2XCIsXHJcbiAgICBcImV2NjgxMFwiLFxyXG4gICAgXCJlZzY2MTJcIixcclxuICAgIFwiZWgxNlwiLFxyXG4gICAgXCJtaDIyMDZcIixcclxuICAgIFwic2g1MjA2XCIsXHJcbiAgICBcImVwMzYwOFwiLFxyXG4gICAgXCJtaDIyMTZcIixcclxuICAgIFwibWF5YVwiLFxyXG4gICAgXCJub3lhXCIsXHJcbl07XHJcblxyXG52YXIgY2FydEl0ZW1zID0gbnVsbDtcclxudmFyIHNrdXM9W107XHJcbnZhciB0ZWFtZGVza0l0ZW1zID0gbnVsbDtcclxudmFyIHRlYW1kZXNrUE9JdGVtcyA9IG51bGw7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBpbnZlbnRvcnkgYW5kIHBvIGZyb20gdGVhbWRlc2tcclxuICovXHJcbiBmdW5jdGlvbiBjYXJ0R2V0RGVsaXZlcnkoKSB7ICAgIFxyXG4gICAgaWYgKGNhcnRJdGVtcykgeyAgICAgICAgXHJcbiAgICAgICAgc2t1cyA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5tYXAoaT0+e1xyXG4gICAgICAgICAgICBsZXQgc2t1ID0gaS5za3U7XHJcbiAgICAgICAgICAgIGlmIChza3UuaW5kZXhPZihcIl9OXCIpPT1za3UubGVuZ3RoLTIpIHtcclxuICAgICAgICAgICAgICAgIHNrdSA9IHNrdS5zbGljZSgwLHNrdS5sZW5ndGgtMik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc2t1KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZldGNoKGAvL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB0YWJsZTogJ0ludmVudG9yeScsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGBBbnkoW1NLVV0sJyR7c2t1cy5qb2luKFwiLFwiKX0nKWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHI9PnIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHI9PntcclxuICAgICAgICAgICAgdGVhbWRlc2tJdGVtcyA9IHI7ICBcclxuXHJcbiAgICAgICAgICAgIHRlYW1kZXNrUE9JdGVtcyA9IFtdOyAgICAgICBcclxuICAgICAgICAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIGZldGNoKGAvL3NocC13ZWJzZXJ2ZXIuZ2xpdGNoLm1lL2dldC10ZWFtZGVza2AsIHtcclxuICAgICAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0YWJsZTogJ3RfNzYzNDc5JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zOiBgP2ZpbHRlcj1BbnkoW1NLVV0sJyR7c2t1cy5qb2luKFwiLFwiKX0nKSBhbmQgW0luY29taW5nIFF1YW50aXR5XT4wIGFuZCBbQXJyaXZhbCBEdWUgRGF0ZV0+VG9EYXRlKCcxLzEvMScpJnNvcnQ9QXJyaXZhbCBEdWUgRGF0ZS8vQVNDYCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLnRoZW4ocj0+ci5qc29uKCkpXHJcbiAgICAgICAgICAgIC8vIC50aGVuKHI9PntcclxuICAgICAgICAgICAgLy8gICAgIHRlYW1kZXNrUE9JdGVtcyA9IHI7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXJ0U2V0RGVsaXZlcnkoKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gLmNhdGNoKGU9PntcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY2FydFNldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZT0+Y29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmlsbCBpbiB0aGUgZGVsaXZlcnkgaW5mb3JtYXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGNhcnRTZXREZWxpdmVyeSgpIHsgICAgICAgIFxyXG4gICAgaWYgKHRlYW1kZXNrSXRlbXMpIHtcclxuICAgICAgICBsZXQgcXR5Q2hlY2tlZD1bXTtcclxuICAgICAgICBmb3IgKGxldCBbaW5kZXgsIHNrdV0gb2Ygc2t1cy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKHNrdS5pbmRleE9mKFwiX05cIik9PXNrdS5sZW5ndGgtMikge1xyXG4gICAgICAgICAgICAgICAgc2t1ID0gc2t1LnNsaWNlKDAsc2t1Lmxlbmd0aC0yKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0ZWFtZGVza0l0ZW1zLmZpbmQocz0+ZW5jb2RlVVJJQ29tcG9uZW50KHMuU0tVLnRvVXBwZXJDYXNlKCkpPT1za3UudG9VcHBlckNhc2UoKSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmZpbmQoXCIuY2FydC1kZWxpdmVyeVwiKS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXR5ID0gY2FydEl0ZW1zLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zW2luZGV4XS5xdWFudGl0eTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidWZmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5Q2hlY2tlZFtpdGVtLlNLVV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiA9IHF0eUNoZWNrZWRbaXRlbS5TS1VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdHlDaGVja2VkW2l0ZW0uU0tVXSs9cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eUNoZWNrZWRbaXRlbS5TS1VdPXF0eTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ9YDxzdHJvbmc+VGllbXBvIGVzdGltYWRvIGRlIGVudsOtbzo8L3N0cm9uZz48YnIvPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW1wiVG90YWwgT24gSGFuZFwiXSA9PSBpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IFVTQVwiXSk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdKS1idWZmPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Kz1gRW4gMy00IGTDrWFzOiBjYW50aWRhZCA8c3Ryb25nPiR7TWF0aC5taW4oaXRlbVtcIlF1YW50aXR5IFVTQVwiXS1idWZmLCBxdHkpfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHkgPSBxdHkgLSBNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgVVNBXCJdLWJ1ZmYsIHF0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmLT1OdW1iZXIoaXRlbVtcIlF1YW50aXR5IFVTQVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiUXVhbnRpdHkgQ2FuYWRhXCJdKT4wICYmIHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBFbiA1LTggZMOtYXM6IGNhbnRpZGFkIDxzdHJvbmc+JHtNYXRoLm1pbihpdGVtW1wiUXVhbnRpdHkgQ2FuYWRhXCJdLWJ1ZmYsIHF0eSl9PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSA9IHF0eSAtIE1hdGgubWluKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0tYnVmZiwgcXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmYgLT0gTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBDYW5hZGFcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiQXZhaWxhYmxlIFF1YW50aXR5XCJdKT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0pLWJ1ZmY+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQrPWBEYW5zIDMtOCBqb3VyczogY2FudGlkYWQgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJBdmFpbGFibGUgUXVhbnRpdHlcIl0tYnVmZiwgcXR5KX08L3N0cm9uZz48YnIvPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXR5ID0gcXR5IC0gTWF0aC5taW4oaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXS1idWZmLCBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmY9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZiAtPSBOdW1iZXIoaXRlbVtcIkF2YWlsYWJsZSBRdWFudGl0eVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGl0ZW1bXCJWaXJ0dWFsIFF1YW50aXR5XCJdICYmIHF0eT4wKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaXRlbVtcIkxvY2sgU3RhdHVzXCJdIT1cIkxvY2tlZCBmb3IgcHJvY2Vzc2luZ1wiICYmIE51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pID4gMCAmJiBxdHk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKE51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pLWJ1ZmYgPiAwKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudCs9YDEgd2VlayBsYXRlcjogcXVhbnRpdHkgPHN0cm9uZz4ke01hdGgubWluKGl0ZW1bXCJVbmxvY2tlZCBmb3Igc2FsZSBxdWFudGl0eVwiXS1idWZmLCBxdHkpfTwvc3Ryb25nPjxici8+YDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBxdHkgPSBxdHkgLSBNYXRoLm1pbihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0tYnVmZiwgcXR5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBidWZmPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJ1ZmYtPU51bWJlcihpdGVtW1wiVW5sb2NrZWQgZm9yIHNhbGUgcXVhbnRpdHlcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB2aXJ0dWFsPXt9OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoTnVtYmVyKGl0ZW1bXCJRdWFudGl0eSBJbmNvbWluZ1wiXSktMiA+IDAgJiYgcXR5PjApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChOdW1iZXIoaXRlbVtcIlF1YW50aXR5IEluY29taW5nXCJdKS0yIC1idWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBpbkl0ZW1zID0gdGVhbWRlc2tQT0l0ZW1zLmZpbHRlcihwPT5wLlNLVS50b1VwcGVyQ2FzZSgpID09IGl0ZW1bXCJTS1VcIl0udG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGk9MCwgdG90YWxQPWJ1ZmYsIHRlbXBxdHkgPSBxdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2hpbGUgKGk8aW5JdGVtcy5sZW5ndGggJiYgdGVtcHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRvdGFsUCs9TnVtYmVyKGluSXRlbXNbaV1bXCJJbmNvbWluZyBRdWFudGl0eVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRlbXBxdHkgPSB0ZW1wcXR5IC0gTWF0aC5taW4oTnVtYmVyKGluSXRlbXNbaV1bXCJJbmNvbWluZyBRdWFudGl0eVwiXSksIHRlbXBxdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpKys7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGk+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaW5JdGVtID0gaW5JdGVtc1tpLTFdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgbWRpZmYgPSBtb250aERpZmYobmV3IERhdGUoKSwgbmV3IERhdGUoaW5JdGVtW1wiQXJyaXZhbCBEdWUgRGF0ZVwiXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAobWRpZmY9PTApIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChhbGx1cmVFeGNlcHRpb24uaW5jbHVkZXMoaW5JdGVtW1wiUGFydCBOdW1iZXJcIl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWRpZmYrPTM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFsbHVyZUV4Y2VwdGlvbi5pbmNsdWRlcyhpbkl0ZW1bXCJQYXJ0IE51bWJlclwiXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1kaWZmKz0yO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZpcnR1YWxbbWRpZmZdID0gTWF0aC5taW4odG90YWxQLCBxdHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcXR5ID0gdGVtcHF0eTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYnVmZj0wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnVmZiA9IGJ1ZmYgLSBOdW1iZXIoaXRlbVtcIlF1YW50aXR5IEluY29taW5nXCJdKSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHF0eT4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbSA9IGl0ZW1bXCJWaXJ0dWFsIExvY2F0aW9uXCJdLnNsaWNlKDAsLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHZpcnR1YWxbbV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2aXJ0dWFsW21dKz1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZpcnR1YWxbbV09cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZpcnR1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXModmlydHVhbCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZyd9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHZrZXlzID0gT2JqZWN0LmtleXModmlydHVhbCkuc29ydChmdW5jdGlvbihhLGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gYi1hO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBrZXkgb2YgdmtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoTnVtYmVyKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkrTnVtYmVyKGtleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50Kz1gJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKX06IHF1YW50aXR5IDxzdHJvbmc+JHt2aXJ0dWFsW2tleV19PC9zdHJvbmc+PGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQrPWAke2tleS5yZXBsYWNlKFwiX1wiLFwiLVwiKX0gbW9udGhzIGxhdGVyOiBxdWFudGl0eSA8c3Ryb25nPiR7dmlydHVhbFtrZXldfTwvc3Ryb25nPjxici8+YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0TGlzdFwiKS5maW5kKFwibGkucHJvZHVjdExpc3QtaXRlbVwiKS5lcShpbmRleCkuZmluZChcInVsLnByb2R1Y3Qtb3B0aW9uc1wiKS5hcHBlbmQoYDxsaSBjbGFzcz1cInByb2R1Y3Qtb3B0aW9uIGNhcnQtZGVsaXZlcnlcIj4ke2NvbnRlbnR9PC9saT5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwiLnByb2R1Y3QtYm9keVwiKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdC1vcHRpb25zXCI+PGxpIGNsYXNzPVwicHJvZHVjdC1vcHRpb24gY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2xpPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF0eSA9IGNhcnRJdGVtcy5saW5lSXRlbXMucGh5c2ljYWxJdGVtc1tpbmRleF0ucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF0eUNoZWNrZWRbaXRlbS5TS1VdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eUNoZWNrZWRbaXRlbS5TS1VdKz1xdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Q2hlY2tlZFtpdGVtLlNLVV09cXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgkKFwiLnByb2R1Y3RMaXN0XCIpLmZpbmQoXCJsaS5wcm9kdWN0TGlzdC1pdGVtXCIpLmVxKGluZGV4KS5maW5kKFwidWwucHJvZHVjdC1vcHRpb25zXCIpLmZpbmQoXCIuY2FydC1kZWxpdmVyeVwiKS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjbWhSdXNoSXRlbXMgPSBbJ0NNSCcsICdDTUxBQ0UnLCAnQ01NT05PJywgJ0NNTEFDRVBPTFknLCAnQ01TS0lOJ107XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFpclNlcnZpY2UgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIyMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjMxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyMzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzIzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMjM0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMyNTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzMyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzMzRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzMzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjMzQxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSMzNDJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInN0eWxlIzM0M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGUjNTUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZSM1NTJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN0eWxlICNZb3VyX093blwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFNlcnZpY2VzIFBhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtaFJ1c2hJdGVtcy5pbmNsdWRlcyhza3UudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PWA8c3Ryb25nPlRpZW1wbyBlc3RpbWFkbyBkZSBlbnbDrW86PC9zdHJvbmc+PGJyLz5FbnbDrW8gZ2FyYW50aXphZG8gZW4gMyBtZXNlczxici8+YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFpclNlcnZpY2UuaW5jbHVkZXMoc2t1KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9YDxzdHJvbmc+VGllbXBvIGVzdGltYWRvIGRlIGVudsOtbzo8L3N0cm9uZz48YnIvPkRhbnMgMi0zIHNlbWFpbmVzPGJyLz5gO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdExpc3RcIikuZmluZChcImxpLnByb2R1Y3RMaXN0LWl0ZW1cIikuZXEoaW5kZXgpLmZpbmQoXCJ1bC5wcm9kdWN0LW9wdGlvbnNcIikuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiY2FydC1kZWxpdmVyeVwiPiR7Y29udGVudH08L2Rpdj5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHsgICAgXHJcbiAgICB1dGlscy5hcGkuY2FydC5nZXRDYXJ0KHtpbmNsdWRlT3B0aW9uczogdHJ1ZX0sIChlcnIsIG15Q2FydCkgPT4geyAgICAgICAgXHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgaWYgKG15Q2FydCkge1xyXG4gICAgICAgICAgICBjYXJ0SXRlbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogbXlDYXJ0LmlkLFxyXG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudDogbXlDYXJ0LmJhc2VBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSXRlbXM6IG15Q2FydC5saW5lSXRlbXMsXHJcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjaGVja0luaXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIiNjYXJ0LWVkaXQtbGlua1wiKS5sZW5ndGg+MCAmJiAoXCIuY2FydC1zZWN0aW9uXCIpLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckludGVydmFsKGNoZWNrSW5pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydEdldERlbGl2ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhY3Rpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiLmNhcnQtYWN0aW9ucyBidXR0b25cIikubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcnQtYWN0aW9ucyBidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0U2V0RGVsaXZlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MDApOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tICcuL2xpYi9yZXF1ZXN0JztcblxuaW1wb3J0IENvdW50cnlBcGkgZnJvbSAnLi9hcGkvY291bnRyaWVzJztcbmltcG9ydCBQcm9kdWN0QXBpIGZyb20gJy4vYXBpL3Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBdHRyaWJ1dGVzQXBpIGZyb20gJy4vYXBpL3Byb2R1Y3QtYXR0cmlidXRlcyc7XG5pbXBvcnQgU2VhcmNoQXBpIGZyb20gJy4vYXBpL3NlYXJjaCc7XG5pbXBvcnQgQ2FydEFwaSBmcm9tICcuL2FwaS9jYXJ0JztcblxuY29uc3QgaW50ZXJuYWxzID0ge307XG5cbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVxdWVzdCBhIHBhZ2UgdmlhIGFqYXhcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbmludGVybmFscy5nZXRQYWdlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICByZXF1ZXN0KHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICByZXF1ZXN0T3B0aW9uczogb3B0aW9ucyxcbiAgICB9LCBjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY291bnRyeTogbmV3IENvdW50cnlBcGkoKSxcbiAgICBwcm9kdWN0QXR0cmlidXRlczogbmV3IFByb2R1Y3RBdHRyaWJ1dGVzQXBpKCksXG4gICAgcHJvZHVjdDogbmV3IFByb2R1Y3RBcGkoKSxcbiAgICBzZWFyY2g6IG5ldyBTZWFyY2hBcGkoKSxcbiAgICBjYXJ0OiBuZXcgQ2FydEFwaSgpLFxuICAgIGdldFBhZ2U6IGludGVybmFscy5nZXRQYWdlLFxufTtcbiIsImltcG9ydCByZXF1ZXN0IGZyb20gJy4uL2xpYi9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIHRoaXMucmVtb3RlVmVyc2lvbiA9IHZlcnNpb24gfHwgJ3YxJztcbiAgICAgICAgdGhpcy5yZW1vdGVCYXNlRW5kcG9pbnQgPSAnL3JlbW90ZS8nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJ11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3RlXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBtYWtlUmVxdWVzdCh1cmwsIG1ldGhvZCwgb3B0aW9ucywgcmVtb3RlLCBjYWxsYmFjaykge1xuICAgICAgICByZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJ11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgcmVtb3RlUmVxdWVzdChlbmRwb2ludCwgbWV0aG9kLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCByZW1vdGVVcmwgPSB0aGlzLnJlbW90ZUJhc2VFbmRwb2ludCArIHRoaXMucmVtb3RlVmVyc2lvbiArIGVuZHBvaW50O1xuXG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QocmVtb3RlVXJsLCBtZXRob2QsIG9wdGlvbnMsIHRydWUsIGNhbGxiYWNrKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IEhvb2tzIGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBHZXQgYSBjb2xsZWN0aW9uIG9mIENhcnRzLiBGb3Igbm93LCB0aGlzIHdpbGwgb25seSByZXR1cm4gYW4gYXJyYXkgb2YgYSBzaW5nbGUgY2FydCBhcyBtdWx0aXBsZSBjYXJ0cyBwZXIgc2Vzc2lvblxuICAgICAqIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRDYXJ0cyhvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB1cmwgPSAnL2FwaS9zdG9yZWZyb250L2NhcnRzJztcblxuICAgICAgICBpZiAob3B0aW9ucy5pbmNsdWRlT3B0aW9ucykge1xuICAgICAgICAgICAgdXJsID0gdGhpcy5pbmNsdWRlT3B0aW9ucyh1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCh1cmwsICdHRVQnLCBvcHRpb25zLCB0cnVlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBDYXJ0J3MgZGV0YWlscywgZWl0aGVyIHdpdGggb3Igd2l0aG91dCBQcm9kdWN0IE9wdGlvbiBzZWxlY3Rpb25zLlxuICAgICAqIENhbiBhbHNvIGJlIHVzZWQgdG8gZ2V0IGEgcGFydGljdWxhciBjYXJ0IHByb3ZpZGVkIGEgY2FydElkIGluIHRoZSBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldENhcnQob3B0aW9ucyA9IHt9LCBjYWxsYmFjaykge1xuICAgICAgICAvKiBJZiBubyBjYXJ0IElEIGlzIHByb3ZpZGVkLCBnZXQgdGhlIGNvbGxlY3Rpb24gb2YgY2FydHMgYW5kIHJldHVybiB0aGUgZmlyc3Qgb25lICovXG4gICAgICAgIGlmICghb3B0aW9ucy5jYXJ0SWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENhcnRzKG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiBjYWxsYmFjayhlcnIsIHJlc3BvbnNlWzBdKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJsID0gYC9hcGkvc3RvcmVmcm9udC9jYXJ0cy8ke29wdGlvbnMuY2FydElkfWA7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuaW5jbHVkZU9wdGlvbnModXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QodXJsLCAnR0VUJywgb3B0aW9ucywgdHJ1ZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHBhcmFtZXRlcnMgdG8gYSBVUkwgbmVlZGVkIHRvIGdldCBwcm9kdWN0IG9wdGlvbiBkZXRhaWxzIG9uIGNhcnQgbGluZSBpdGVtc1xuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBpbmNsdWRlT3B0aW9ucyh1cmwpIHtcbiAgICAgICAgcmV0dXJuIGAke3VybH0/aW5jbHVkZT1saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5vcHRpb25zLGxpbmVJdGVtcy5kaWdpdGFsSXRlbXMub3B0aW9uc2A7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgc3VtIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBxdWFudGl0aWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0Q2FydFF1YW50aXR5KG9wdGlvbnMgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSAwO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FydCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVJdGVtUXVhbnRpdGllcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgY2FydC5saW5lSXRlbXMuZGlnaXRhbEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBjYXJ0LmxpbmVJdGVtcy5jdXN0b21JdGVtcyxcbiAgICAgICAgICAgICAgICBdLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYikpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobGluZUl0ZW0gPT4gIWxpbmVJdGVtLnBhcmVudElkKVxuICAgICAgICAgICAgICAgICAgICAubWFwKGxpbmVJdGVtID0+IGxpbmVJdGVtLnF1YW50aXR5KVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgbGluZUl0ZW1RdWFudGl0eSkgPT4gYWNjdW11bGF0b3IgKyBsaW5lSXRlbVF1YW50aXR5LCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnaWZ0Q2VydGlmaWNhdGVRdWFudGl0eSA9IGNhcnQubGluZUl0ZW1zLmdpZnRDZXJ0aWZpY2F0ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gbGluZUl0ZW1RdWFudGl0aWVzICsgZ2lmdENlcnRpZmljYXRlUXVhbnRpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBpdGVtIHRvIGNhcnQgd2l0aCBvcHRpb25zICh2YXJpYW50cylcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBpdGVtQWRkKGZvcm1EYXRhLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9jYXJ0L2FkZCcsICdQT1NUJywgeyBmb3JtRGF0YSB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1pdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgSG9va3MuZW1pdCgnY2FydC1pdGVtLWFkZC1yZW1vdGUnLCBlbWl0RGF0YSk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgaXRlbSBxdWFudGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxGdW5jdGlvbn0gcXR5XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxudWxsfSBjYWxsYmFja1xuICAgICAqL1xuICAgIGl0ZW1VcGRhdGUoaXRlbUlkLCBxdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuICAgICAgICBsZXQgaXRlbXM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbUlkKSAmJiB0eXBlb2YgcXR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IHF0eTtcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbUlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbUlkLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogcXR5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUoaXRlbXMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbWl0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBIb29rcy5lbWl0KCdjYXJ0LWl0ZW0tdXBkYXRlLXJlbW90ZScsIGVtaXREYXRhKTtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgY2FydCBpdGVtc1xuICAgICAqXG4gICAgICogQ2FsbHMgdGhlIGludGVybmFsIHVwZGF0ZSBmdW5jdGlvbiB3aXRoIHF1YW50aXR5OiAwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBpdGVtUmVtb3ZlKGl0ZW1JZCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW1JZCxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy51cGRhdGUoaXRlbXMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbWl0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBIb29rcy5lbWl0KCdjYXJ0LWl0ZW0tcmVtb3ZlLXJlbW90ZScsIGVtaXREYXRhKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2lmdHdyYXBwaW5nIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufG51bGx9IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KGAvZ2lmdC13cmFwcGluZy8ke2l0ZW1JZH1gLCAnR0VUJywgb3B0cywgY2FsbGJhY2tBcmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBnaWZ0d3JhcHBpbmcgb3B0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgc3VibWl0SXRlbUdpZnRXcmFwcGluZ09wdGlvbihpdGVtSWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KGAvZ2lmdC13cmFwcGluZy8ke2l0ZW1JZH1gLCAnUE9TVCcsIHsgcGFyYW1zIH0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgY2FydCBpdGVtc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHVwZGF0ZShpdGVtcywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCgnL2NhcnQvdXBkYXRlJywgJ1BPU1QnLCB7IHBhcmFtczogcGF5bG9hZCB9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIGdldENvbnRlbnQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBsZXQgY2FsbGJhY2tBcmcgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrQXJnID0gb3B0cztcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QoJy9jYXJ0LnBocCcsICdHRVQnLCBvcHRzLCBmYWxzZSwgY2FsbGJhY2tBcmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IHNoaXBwaW5nIHF1b3RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8T2JqZWN0fSByZW5kZXJXaXRoXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsIHJlbmRlcldpdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuICAgICAgICBsZXQgcmVuZGVyV2l0aEFyZyA9IHJlbmRlcldpdGg7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFja0FyZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSByZW5kZXJXaXRoQXJnO1xuICAgICAgICAgICAgcmVuZGVyV2l0aEFyZyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVuZGVyV2l0aEFyZykge1xuICAgICAgICAgICAgb3B0aW9ucy50ZW1wbGF0ZSA9IHJlbmRlcldpdGhBcmc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9zaGlwcGluZy1xdW90ZScsICdHRVQnLCBvcHRpb25zLCBjYWxsYmFja0FyZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IHNoaXBwaW5nIHF1b3RlIGJhc2VkIG9uIHF1b3RlSWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBxdW90ZUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzaGlwcGluZ19tZXRob2Q6IHF1b3RlSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCgnL3NoaXBwaW5nLXF1b3RlJywgJ1BPU1QnLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBjb3Vwb24gY29kZSBvciBnaWZ0IGNlcnRpZmljYXRlIHRvIHRoZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29kZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgYXBwbHlDb2RlKGNvZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW90ZVJlcXVlc3QoJy9hcHBseS1jb2RlJywgJ1BPU1QnLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgYSBjb3Vwb24gY29kZSBvciBnaWZ0IGNlcnRpZmljYXRlIHRvIHRoZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29kZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCgnL2dpZnQtY2VydGlmaWNhdGVzJywgJ1BPU1QnLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlXG57XG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmVyc2lvbikge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcih2ZXJzaW9uKTtcblxuICAgICAgICAvLyBzZXQgdXAgY2xhc3MgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSAnL2NvdW50cnktc3RhdGVzLyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBHZXQgY291bnRyeSBkYXRhIGJ5IGlkIHdyYXBwZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0QnlJZChpZCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5lbmRwb2ludCArIGlkO1xuXG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCh1cmwsICdHRVQnLCB7fSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjb3VudHJ5IGRhdGEgYnkgY291bnRyeSBuYW1lXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBnZXRCeU5hbWUobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5lbmRwb2ludCArIG5hbWU7XG5cbiAgICAgICAgdGhpcy5yZW1vdGVSZXF1ZXN0KHVybCwgJ0dFVCcsIHt9LCBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBIb29rcyBmcm9tICcuLi9ob29rcyc7XG5pbXBvcnQgeyBub3JtYWxpemVRdWVyeVN0cmluZ1BhcmFtcyB9IGZyb20gJy4uL2xpYi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24pIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIodmVyc2lvbik7XG5cbiAgICAgICAgLy8gc2V0IHVwIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gJy9wcm9kdWN0LWF0dHJpYnV0ZXMvJztcbiAgICAgICAgdGhpcy5pbkNhcnRFbmRwb2ludCA9ICcvY29uZmlndXJlLW9wdGlvbnMvJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcHJvZHVjdElkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9wdGlvbkNoYW5nZShwcm9kdWN0SWQsIHBhcmFtcywgdGVtcGxhdGUgPSBudWxsLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgdGVtcGxhdGVBcmcgPSB0ZW1wbGF0ZTtcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZUFyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSB0ZW1wbGF0ZUFyZztcbiAgICAgICAgICAgIHRlbXBsYXRlQXJnID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRcyA9IG5vcm1hbGl6ZVF1ZXJ5U3RyaW5nUGFyYW1zKHBhcmFtcyk7XG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCh0aGlzLmVuZHBvaW50ICsgcHJvZHVjdElkLCAnUE9TVCcsIHsgcGFyYW1zOiBub3JtYWxpemVkUXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZUFyZyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1pdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgSG9va3MuZW1pdCgncHJvZHVjdC1vcHRpb25zLWNoYW5nZS1yZW1vdGUnLCBlbWl0RGF0YSk7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyhlcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBjb25maWd1cmVJbkNhcnQoaXRlbUlkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3RlUmVxdWVzdCh0aGlzLmluQ2FydEVuZHBvaW50ICsgaXRlbUlkLCAnR0VUJywgcGFyYW1zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZVxue1xuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24pIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIodmVyc2lvbik7XG5cbiAgICAgICAgLy8gc2V0IHVwIGNsYXNzIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gJy9wcm9kdWN0cy5waHA/cHJvZHVjdElkPSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcHJvZHVjdElkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgZ2V0QnlJZChwcm9kdWN0SWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5lbmRwb2ludCArIHByb2R1Y3RJZDtcbiAgICAgICAgbGV0IHBhcmFtc0FyZyA9IHBhcmFtcztcbiAgICAgICAgbGV0IGNhbGxiYWNrQXJnID0gY2FsbGJhY2s7XG5cblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc0FyZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2tBcmcgPSBwYXJhbXNBcmc7XG4gICAgICAgICAgICBwYXJhbXNBcmcgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZVJlcXVlc3QodXJsLCAnR0VUJywgcGFyYW1zQXJnLCBmYWxzZSwgY2FsbGJhY2tBcmcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBIb29rcyBmcm9tICcuLi9ob29rcyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VcbntcbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKHZlcnNpb24pO1xuXG4gICAgICAgIC8vIHNldCB1cCBjbGFzcyB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9ICcvc2VhcmNoLnBocD9zZWFyY2hfcXVlcnk9JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZWFyY2gocXVlcnksIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5lbmRwb2ludCArIGVuY29kZVVSSUNvbXBvbmVudChxdWVyeSk7XG4gICAgICAgIGxldCBwYXJhbXNBcmcgPSBwYXJhbXM7XG4gICAgICAgIGxldCBjYWxsYmFja0FyZyA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zQXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFja0FyZyA9IHBhcmFtc0FyZztcbiAgICAgICAgICAgIHBhcmFtc0FyZyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgSG9va3MuZW1pdCgnc2VhcmNoLXF1aWNrLXJlbW90ZScsIHF1ZXJ5KTtcbiAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCh1cmwsICdHRVQnLCBwYXJhbXNBcmcsIGZhbHNlLCBjYWxsYmFja0FyZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENhcnRIb29rcyBmcm9tICcuL2hvb2tzL2NhcnQnO1xuaW1wb3J0IENvb2tpZUhvb2tzIGZyb20gJy4vaG9va3MvY29va2llJztcbmltcG9ydCBDdXJyZW5jeVNlbGVjdG9ySG9va3MgZnJvbSAnLi9ob29rcy9jdXJyZW5jeS1zZWxlY3Rvcic7XG5pbXBvcnQgUHJvZHVjdEhvb2tzIGZyb20gJy4vaG9va3MvcHJvZHVjdCc7XG5pbXBvcnQgU2VhcmNoSG9va3MgZnJvbSAnLi9ob29rcy9zZWFyY2gnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2hIb29rcyBmcm9tICcuL2hvb2tzL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBTb3J0QnlIb29rcyBmcm9tICcuL2hvb2tzL3NvcnQtYnknO1xuXG5jb25zdCBpbnRlcm5hbHMgPSB7fTtcblxuaW50ZXJuYWxzLmNsYXNzZXMgPSB7XG4gICAgY2FydDogbmV3IENhcnRIb29rcygpLFxuICAgIGNvb2tpZTogbmV3IENvb2tpZUhvb2tzKCksXG4gICAgY3VycmVuY3lTZWxlY3RvcjogbmV3IEN1cnJlbmN5U2VsZWN0b3JIb29rcygpLFxuICAgIHByb2R1Y3Q6IG5ldyBQcm9kdWN0SG9va3MoKSxcbiAgICBzZWFyY2g6IG5ldyBTZWFyY2hIb29rcygpLFxuICAgIGZhY2V0ZWRTZWFyY2g6IG5ldyBGYWNldGVkU2VhcmNoSG9va3MoKSxcbiAgICBzb3J0Qnk6IG5ldyBTb3J0QnlIb29rcygpLFxufTtcblxuaW50ZXJuYWxzLnBhcnNlSG9va3MgPSBmdW5jdGlvbiAoaG9va05hbWUpIHtcbiAgICBjb25zdCBob29rVHlwZSA9IGhvb2tOYW1lLnNwbGl0KCctJylbMF07XG5cbiAgICBpZiAoaW50ZXJuYWxzLmNsYXNzZXNbaG9va1R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2hvb2tUeXBlfSBpcyBub3QgYSB2YWxpZCBob29rVHlwZWApO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcm5hbHMuY2xhc3Nlc1tob29rVHlwZV07XG59O1xuXG5jbGFzcyBIb29rcyB7XG4gICAgb24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2sgPSBpbnRlcm5hbHMucGFyc2VIb29rcyhob29rTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGhvb2sub24oaG9va05hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmYoaG9va05hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhvb2sgPSBpbnRlcm5hbHMucGFyc2VIb29rcyhob29rTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGhvb2sub2ZmKGhvb2tOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZW1pdChob29rTmFtZSkge1xuICAgICAgICBjb25zdCBob29rID0gaW50ZXJuYWxzLnBhcnNlSG9va3MoaG9va05hbWUpO1xuXG4gICAgICAgIHJldHVybiBob29rLmVtaXQuYXBwbHkoaG9vaywgYXJndW1lbnRzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIb29rcygpO1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIyJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBCYXNlSG9va3Mge1xuXG4gICAgLyoqXG4gICAgICogQENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNhbGwgcGFyZW50XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pdGVtQWRkKCk7XG4gICAgfVxuXG4gICAgaXRlbUFkZCgpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignc3VibWl0JywgJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NhcnQtaXRlbS1hZGQnLCBldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7fVxuIiwiaW1wb3J0IEJhc2VIb29rcyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VIb29rcyB7XG5cbiAgICAvKipcbiAgICAgKiBAQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY2FsbCBwYXJlbnRcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmN1cnJlbmN5U2VsZWN0b3IoKTtcbiAgICB9XG5cbiAgICBjdXJyZW5jeVNlbGVjdG9yKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdpbnB1dCcsICdbZGF0YS1jdXJyZW5jeS1zZWxlY3Rvci10b2dnbGVdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2N1cnJlbmN5U2VsZWN0b3ItdG9nZ2xlJywgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VhcmNoRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjbGljaycsICdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRib2R5Lm9uKCdzdWJtaXQnLCAnW2RhdGEtZmFjZXRlZC1zZWFyY2gtcmFuZ2VdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnNDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NoYW5nZScsICdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIGV2ZW50LCBldmVudC50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUhvb2tzIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucXVpY2tTZWFyY2goKTtcbiAgICB9XG5cbiAgICBxdWlja1NlYXJjaCgpIHtcbiAgICAgICAgdGhpcy4kYm9keS5vbignaW5wdXQnLCAnW2RhdGEtc2VhcmNoLXF1aWNrXScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdzZWFyY2gtcXVpY2snLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlSG9va3MgZnJvbSAnLi9iYXNlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUhvb2tzIHtcblxuICAgIC8qKlxuICAgICAqIEBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjYWxsIHBhcmVudFxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc29ydEJ5RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc29ydEJ5RXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdzdWJtaXQnLCAnW2RhdGEtc29ydC1ieV0nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc29ydEJ5LXN1Ym1pdHRlZCcsIGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kYm9keS5vbignY2hhbmdlJywgJ1tkYXRhLXNvcnQtYnldIHNlbGVjdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdzb3J0Qnktc2VsZWN0LWNoYW5nZWQnLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmICghIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCdmb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoZSBjdXJyZW50IG1ldGhvZCBwYXNzZWQgaW4gaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEhUVFBNZXRob2QobWV0aG9kKSB7XG4gICAgY29uc3QgYWxsb3dlZE1ldGhvZHMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnXTtcblxuICAgIHJldHVybiBhbGxvd2VkTWV0aG9kcy5pbmRleE9mKG1ldGhvZCkgIT09IC0xO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZWxhdGl2ZVVybCwgb3B0cywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVtb3RlOiBmYWxzZSxcbiAgICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJhc2VVcmw6IG51bGwsXG4gICAgICAgICAgICBmb3JtRGF0YTogbnVsbCxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IFtdLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSA/IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgOiBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnBhcmFtcztcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAnc3RlbmNpbC1jb25maWcnOiBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmNvbmZpZyA/IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuY29uZmlnKSA6ICd7fScsXG4gICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiAne30nLFxuICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcXVlc3RlZFRlbXBsYXRlID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy50ZW1wbGF0ZTtcblxuICAgIGxldCB1c2luZ1RlbXBsYXRlcyA9IGZhbHNlO1xuICAgIGxldCB1c2luZ1NlY3Rpb25zID0gZmFsc2U7XG4gICAgbGV0IHRlbXBsYXRlcyA9IFtdO1xuXG5cbiAgICAvLyBOb3QgYSB2YWxpZCBtZXRob2RcbiAgICBpZiAoIWlzVmFsaWRIVFRQTWV0aG9kKG9wdGlvbnMubWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCdOb3QgYSB2YWxpZCBIVFRQIG1ldGhvZCcpKTtcbiAgICB9XG5cblxuICAgIGlmICh0eXBlb2YocmVxdWVzdGVkVGVtcGxhdGUpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXF1ZXN0ZWRUZW1wbGF0ZSkpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlO1xuXG4gICAgICAgIHVzaW5nU2VjdGlvbnMgPSB0cnVlO1xuICAgICAgICB0ZW1wbGF0ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHRlbXBsYXRlIGluIHJlcXVlc3RlZFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdGVkVGVtcGxhdGUuaGFzT3duUHJvcGVydHkodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnB1c2gocmVxdWVzdGVkVGVtcGxhdGVbdGVtcGxhdGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mKHJlcXVlc3RlZFRlbXBsYXRlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGVtcGxhdGVzID0gW3JlcXVlc3RlZFRlbXBsYXRlXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdGVkVGVtcGxhdGUpICYmIHJlcXVlc3RlZFRlbXBsYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGVtcGxhdGVzID0gcmVxdWVzdGVkVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgaWYgKHRlbXBsYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHVzaW5nVGVtcGxhdGVzID0gdHJ1ZTtcblxuICAgICAgICBoZWFkZXJzWydzdGVuY2lsLW9wdGlvbnMnXSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHJlbmRlcl93aXRoOiB0ZW1wbGF0ZXMuam9pbignLCcpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgdXJsID0gcmVsYXRpdmVVcmw7XG4gICAgaWYgKG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuYmFzZVVybCkge1xuICAgICAgICB1cmwgPSBgJHtvcHRpb25zLnJlcXVlc3RPcHRpb25zLmJhc2VVcmx9JHt1cmx9YDtcbiAgICB9XG5cbiAgICAvLyBtYWtlIGFqYXggcmVxdWVzdCB1c2luZyBqcXVlcnlcbiAgICAkLmFqYXgoe1xuICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50VHlwZTogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSA/IGZhbHNlIDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIHByb2Nlc3NEYXRhOiAhb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmV0O1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IG9wdGlvbnMucmVtb3RlID8gcmVzcG9uc2UuY29udGVudCA6IHJlc3BvbnNlO1xuXG4gICAgICAgICAgICBpZiAodXNpbmdUZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGBjb21wb25lbnRzYCBwcmVmaXggZnJvbSB0aGUgcmVzcG9uc2UgaWYgaXQncyBhbiBvYmplY3RcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNvbnRlbnQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5LZXkgPSBrZXkucmVwbGFjZSgvXmNvbXBvbmVudHNcXC8vLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbY2xlYW5LZXldID0gY29udGVudFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlKGNvbnRlbnRba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB1c2luZyBcInNlY3Rpb25zXCIsIG1vcnBoIHRoZSBjb250ZW50IGludG8gdGhlIGFyYml0cmFyeSBrZXlzID0+IGNvbnRlbnQgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh1c2luZ1NlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlVmFyaWFibGVOYW1lcyA9IE9iamVjdC5rZXlzKHJlcXVlc3RlZFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodGVtcGxhdGVWYXJpYWJsZSBvZiB0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbdGVtcGxhdGVWYXJpYWJsZV0gPSBjb250ZW50W3JlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlVmFyaWFibGVdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb250ZW50W3JlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlVmFyaWFibGVdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXQgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChYSFIsIHRleHRTdGF0dXMsIGVycikgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgaGVhZGVycyxcbiAgICB9KTtcbn1cbiIsIi8vIFV0aWxpdGllc1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuLyoqXG4gKiBOb3JtYWxpemUgcXVlcnlzdHJpbmcgcGFyYW1zLiBSZW1vdmUgZW1wdHkgYXJyYXkgdmFsdWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBOb3JtYWxpemVkIHF1ZXJ5c3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVRdWVyeVN0cmluZ1BhcmFtcyhwYXJhbXMpIHtcbiAgICBjb25zdCBxc1BhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHBhcmFtcyk7XG5cbiAgICBjb25zdCBpc1ZhbGlkUGFyYW0gPSAodmFsdWUpID0+ICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCBvcHRpb25zQ29sbGVjdGlvbiA9IE9iamVjdC5rZXlzKHFzUGFyYW1zKS5yZWR1Y2UoKG5vcm1hbGl6ZWQsIGtleSkgPT4ge1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgaWYgKHFzUGFyYW1zW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBxc1BhcmFtc1trZXldLmZpbHRlcihpc1ZhbGlkUGFyYW0pO1xuICAgICAgICAgICAgcGFyYW0gPSB7IFtrZXldOiBmaWx0ZXJlZCB9O1xuICAgICAgICB9IGVsc2UgaWYgKGlzVmFsaWRQYXJhbShxc1BhcmFtc1trZXldKSkge1xuICAgICAgICAgICAgcGFyYW0gPSB7IFtrZXldOiBxc1BhcmFtc1trZXldIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbm9ybWFsaXplZCwgcGFyYW0pO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IHBhcmFtU3RyaW5nID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KG9wdGlvbnNDb2xsZWN0aW9uKTtcbiAgICByZXR1cm4gcGFyYW1TdHJpbmc7XG59XG4iLCJpbXBvcnQgaG9va3MgZnJvbSAnLi9ob29rcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuY29uc3QgU3RlbmNpbFV0aWxzID0ge1xuICAgIGhvb2tzLFxuICAgIGFwaSxcbiAgICB0b29scyxcbn07XG5cbmV4cG9ydCB7IGhvb2tzLCBhcGksIHRvb2xzIH07XG5leHBvcnQgZGVmYXVsdCBTdGVuY2lsVXRpbHM7XG5cbi8qIGdsb2JhbCBkZWZpbmUgKi9cbihmdW5jdGlvbiAocm9vdCkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgJiYgcm9vdCkge1xuICAgICAgICAvLyBJZ25vcmVzIGJlbG93IGZvciBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvNTE1MFxuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1hcnJvdy1jYWxsYmFja1xuICAgICAgICAgICAgcm9vdC5zdGVuY2lsVXRpbHMgPSBTdGVuY2lsVXRpbHM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IFN0ZW5jaWxVdGlscztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc3RlbmNpbFV0aWxzID0gU3RlbmNpbFV0aWxzO1xuICAgIH1cbn0odGhpcykpO1xuIiwiaW1wb3J0IEltYWdlVG9vbCBmcm9tICcuL3Rvb2xzL2ltYWdlJztcbmltcG9ydCBJbWFnZVNyY3NldFRvb2wgZnJvbSAnLi90b29scy9pbWFnZVNyY3NldCc7XG5pbXBvcnQgU3RvcmFnZVRvb2xzIGZyb20gJy4vdG9vbHMvc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbWFnZTogbmV3IEltYWdlVG9vbCgpLFxuICAgIGltYWdlU3Jjc2V0OiBuZXcgSW1hZ2VTcmNzZXRUb29sKCksXG4gICAgc3RvcmFnZTogbmV3IFN0b3JhZ2VUb29scygpLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBnZXRTcmMocGF0aCwgZGltZW5zaW9ucykge1xuICAgICAgICAvLyBSZWdleCB0byB0ZXN0IHNpemUgc3RyaW5nIGlzIG9mIHRoZSBmb3JtIDEyM3gxMjMgb3IgMTAwd1xuICAgICAgICBjb25zdCBzaXplUmVnZXggPSAvKF5cXGQrdyQpfCheKFxcZCs/KXgoXFxkKz8pJCkvZztcbiAgICAgICAgbGV0IHNpemU7XG5cbiAgICAgICAgaWYgKHR5cGVvZihkaW1lbnNpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGltZW5zaW9ucy53aWR0aCB8fCAxMDA7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodCB8fCAxMDA7XG5cbiAgICAgICAgICAgIHNpemUgPSBgJHt3aWR0aH14JHtoZWlnaHR9YDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoZGltZW5zaW9ucykgPT09ICdzdHJpbmcnICYmIHNpemVSZWdleC50ZXN0KGRpbWVuc2lvbnMpKSB7XG4gICAgICAgICAgICAvLyBJZiBkaW1lbnNpb25zIGlzIGEgc3RyaW5nIGFuZCBtYXRjaCB0aGUgTk5OeE5OTiBvciBOTk53IGZvcm1hdFxuICAgICAgICAgICAgc2l6ZSA9IGRpbWVuc2lvbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIG9yaWdpbmFsIGltYWdlIHNpemVcbiAgICAgICAgICAgIHNpemUgPSAnb3JpZ2luYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgnezpzaXplfScsIHNpemUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBnZXRTcmNzZXQodXJsLCBzaXplcykge1xuICAgICAgICAvLyBSZWdleCB0byB0ZXN0IHNpemUgc3RyaW5nIGlzIG9mIHRoZSBmb3JtIDEyM3gxMjMgb3IgMTAwd1xuICAgICAgICBjb25zdCBzaXplUmVnZXggPSAvKF5cXGQrdyQpfCheKFxcZCs/KXgoXFxkKz8pJCkvO1xuICAgICAgICAvLyBSZWdleCB0byB0ZXN0IHRvIHRoYXQgc3Jjc2V0IGRlc2NyaXB0b3IgaXMgb2YgdGhlIGZvcm0gMXggMS41eCAyeCBPUiAxMjN3XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3JSZWdleCA9IC8oXlxcZCt3JCl8KF4oWzAtOV0oXFwuWzAtOV0rKT8peCkkLztcblxuICAgICAgICBsZXQgc3Jjc2V0cyA9IHt9O1xuXG4gICAgICAgIGlmICghc2l6ZXMpIHtcbiAgICAgICAgICAgIC8vIFVzZSBkZWZhdWx0IHNyY3NldHMgaWYgbm9uZSBhcmUgcHJvdmlkZWRcbiAgICAgICAgICAgIHNyY3NldHMgPSB7XG4gICAgICAgICAgICAgICAgJzgwdyc6ICc4MHcnLFxuICAgICAgICAgICAgICAgICcxNjB3JzogJzE2MHcnLFxuICAgICAgICAgICAgICAgICczMjB3JzogJzMyMHcnLFxuICAgICAgICAgICAgICAgICc2NDB3JzogJzY0MHcnLFxuICAgICAgICAgICAgICAgICc5NjB3JzogJzk2MHcnLFxuICAgICAgICAgICAgICAgICcxMjgwdyc6ICcxMjgwdycsXG4gICAgICAgICAgICAgICAgJzE5MjB3JzogJzE5MjB3JyxcbiAgICAgICAgICAgICAgICAnMjU2MHcnOiAnMjU2MHcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICgoc2l6ZXMgPT09IE9iamVjdChzaXplcykpICYmICFPYmplY3Qua2V5cyhzaXplcykuc29tZShkZXNjcmlwdG9yID0+XG4gICAgICAgICAgICAhKGRlc2NyaXB0b3JSZWdleC50ZXN0KGRlc2NyaXB0b3IpICYmIHNpemVSZWdleC50ZXN0KHNpemVzW2Rlc2NyaXB0b3JdKSlcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgLy8gSWYgb2JqZWN0IGNvbnNpc3RzIG9mIHZhbGlkIHNyY3NldHMsIHVzZSBpdCBpbnN0ZWFkXG4gICAgICAgICAgICBzcmNzZXRzID0gc2l6ZXM7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG9ubHkgb25lIGFyZ3VtZW50LCByZXR1cm4gYSBgc3JjYCBvbmx5IChhbHNvIHdvcmtzIGZvciBgc3Jjc2V0YClcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzcmNzZXRzKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHVybC5yZXBsYWNlKCd7OnNpemV9Jywgc3Jjc2V0c1tPYmplY3Qua2V5cyhzcmNzZXRzKVswXV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzcmNzZXQgZGVzY3JpcHRvciBvciBzaXplJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3Jjc2V0cykubWFwKGRlc2NyaXB0b3IgPT5cbiAgICAgICAgICAgIFt1cmwucmVwbGFjZSgnezpzaXplfScsIHNyY3NldHNbZGVzY3JpcHRvcl0pLCBkZXNjcmlwdG9yXS5qb2luKCcgJylcbiAgICAgICAgKS5qb2luKCcsICcpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHN0b3JhZ2UgdHlwZSAobGlrZSBsb2NhbFN0b3JhZ2Ugb3Igc2Vzc2lvblN0b3JhZ2UpIGlzIGF2YWlsYWJsZSBmb3IgdXNlXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYl9TdG9yYWdlX0FQSS9Vc2luZ190aGVfV2ViX1N0b3JhZ2VfQVBJI1Rlc3RpbmdfZm9yX2F2YWlsYWJpbGl0eVxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9rZW4gPSAnJVthLWYwLTldezJ9JztcbnZhciBzaW5nbGVNYXRjaGVyID0gbmV3IFJlZ0V4cCh0b2tlbiwgJ2dpJyk7XG52YXIgbXVsdGlNYXRjaGVyID0gbmV3IFJlZ0V4cCgnKCcgKyB0b2tlbiArICcpKycsICdnaScpO1xuXG5mdW5jdGlvbiBkZWNvZGVDb21wb25lbnRzKGNvbXBvbmVudHMsIHNwbGl0KSB7XG5cdHRyeSB7XG5cdFx0Ly8gVHJ5IHRvIGRlY29kZSB0aGUgZW50aXJlIHN0cmluZyBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29tcG9uZW50cy5qb2luKCcnKSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIERvIG5vdGhpbmdcblx0fVxuXG5cdGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBjb21wb25lbnRzO1xuXHR9XG5cblx0c3BsaXQgPSBzcGxpdCB8fCAxO1xuXG5cdC8vIFNwbGl0IHRoZSBhcnJheSBpbiAyIHBhcnRzXG5cdHZhciBsZWZ0ID0gY29tcG9uZW50cy5zbGljZSgwLCBzcGxpdCk7XG5cdHZhciByaWdodCA9IGNvbXBvbmVudHMuc2xpY2Uoc3BsaXQpO1xuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoW10sIGRlY29kZUNvbXBvbmVudHMobGVmdCksIGRlY29kZUNvbXBvbmVudHMocmlnaHQpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHZhciB0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbnB1dCA9IGRlY29kZUNvbXBvbmVudHModG9rZW5zLCBpKS5qb2luKCcnKTtcblxuXHRcdFx0dG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChpbnB1dCkge1xuXHQvLyBLZWVwIHRyYWNrIG9mIGFsbCB0aGUgcmVwbGFjZW1lbnRzIGFuZCBwcmVmaWxsIHRoZSBtYXAgd2l0aCB0aGUgYEJPTWBcblx0dmFyIHJlcGxhY2VNYXAgPSB7XG5cdFx0JyVGRSVGRic6ICdcXHVGRkZEXFx1RkZGRCcsXG5cdFx0JyVGRiVGRSc6ICdcXHVGRkZEXFx1RkZGRCdcblx0fTtcblxuXHR2YXIgbWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdHdoaWxlIChtYXRjaCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBEZWNvZGUgYXMgYmlnIGNodW5rcyBhcyBwb3NzaWJsZVxuXHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMF0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGRlY29kZShtYXRjaFswXSk7XG5cblx0XHRcdGlmIChyZXN1bHQgIT09IG1hdGNoWzBdKSB7XG5cdFx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR9XG5cblx0Ly8gQWRkIGAlQzJgIGF0IHRoZSBlbmQgb2YgdGhlIG1hcCB0byBtYWtlIHN1cmUgaXQgZG9lcyBub3QgcmVwbGFjZSB0aGUgY29tYmluYXRvciBiZWZvcmUgZXZlcnl0aGluZyBlbHNlXG5cdHJlcGxhY2VNYXBbJyVDMiddID0gJ1xcdUZGRkQnO1xuXG5cdHZhciBlbnRyaWVzID0gT2JqZWN0LmtleXMocmVwbGFjZU1hcCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gUmVwbGFjZSBhbGwgZGVjb2RlZCBjb21wb25lbnRzXG5cdFx0dmFyIGtleSA9IGVudHJpZXNbaV07XG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoa2V5LCAnZycpLCByZXBsYWNlTWFwW2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbmNvZGVkVVJJKSB7XG5cdGlmICh0eXBlb2YgZW5jb2RlZFVSSSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgZW5jb2RlZFVSSWAgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCwgZ290IGAnICsgdHlwZW9mIGVuY29kZWRVUkkgKyAnYCcpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRlbmNvZGVkVVJJID0gZW5jb2RlZFVSSS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcblxuXHRcdC8vIFRyeSB0aGUgYnVpbHQgaW4gZGVjb2RlciBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIEZhbGxiYWNrIHRvIGEgbW9yZSBhZHZhbmNlZCBkZWNvZGVyXG5cdFx0cmV0dXJuIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fVxufTtcbiIsIi8qIVxuICogRXZlbnRFbWl0dGVyMlxuICogaHR0cHM6Ly9naXRodWIuY29tL2hpajFueC9FdmVudEVtaXR0ZXIyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIGhpajFueFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG47IWZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuXG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkgOiBmdW5jdGlvbiBfaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcbiAgdmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGlmICh0aGlzLl9jb25mKSB7XG4gICAgICBjb25maWd1cmUuY2FsbCh0aGlzLCB0aGlzLl9jb25mKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmUoY29uZikge1xuICAgIGlmIChjb25mKSB7XG5cbiAgICAgIHRoaXMuX2NvbmYgPSBjb25mO1xuXG4gICAgICBjb25mLmRlbGltaXRlciAmJiAodGhpcy5kZWxpbWl0ZXIgPSBjb25mLmRlbGltaXRlcik7XG4gICAgICBjb25mLm1heExpc3RlbmVycyAmJiAodGhpcy5fZXZlbnRzLm1heExpc3RlbmVycyA9IGNvbmYubWF4TGlzdGVuZXJzKTtcbiAgICAgIGNvbmYud2lsZGNhcmQgJiYgKHRoaXMud2lsZGNhcmQgPSBjb25mLndpbGRjYXJkKTtcbiAgICAgIGNvbmYubmV3TGlzdGVuZXIgJiYgKHRoaXMubmV3TGlzdGVuZXIgPSBjb25mLm5ld0xpc3RlbmVyKTtcblxuICAgICAgaWYgKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lclRyZWUgPSB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoY29uZikge1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHRoaXMubmV3TGlzdGVuZXIgPSBmYWxzZTtcbiAgICBjb25maWd1cmUuY2FsbCh0aGlzLCBjb25mKTtcbiAgfVxuXG4gIC8vXG4gIC8vIEF0dGVudGlvbiwgZnVuY3Rpb24gcmV0dXJuIHR5cGUgbm93IGlzIGFycmF5LCBhbHdheXMgIVxuICAvLyBJdCBoYXMgemVybyBlbGVtZW50cyBpZiBubyBhbnkgbWF0Y2hlcyBmb3VuZCBhbmQgb25lIG9yIG1vcmVcbiAgLy8gZWxlbWVudHMgKGxlYWZzKSBpZiB0aGVyZSBhcmUgbWF0Y2hlc1xuICAvL1xuICBmdW5jdGlvbiBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWUsIGkpIHtcbiAgICBpZiAoIXRyZWUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGxpc3RlbmVycz1bXSwgbGVhZiwgbGVuLCBicmFuY2gsIHhUcmVlLCB4eFRyZWUsIGlzb2xhdGVkQnJhbmNoLCBlbmRSZWFjaGVkLFxuICAgICAgICB0eXBlTGVuZ3RoID0gdHlwZS5sZW5ndGgsIGN1cnJlbnRUeXBlID0gdHlwZVtpXSwgbmV4dFR5cGUgPSB0eXBlW2krMV07XG4gICAgaWYgKGkgPT09IHR5cGVMZW5ndGggJiYgdHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAvL1xuICAgICAgLy8gSWYgYXQgdGhlIGVuZCBvZiB0aGUgZXZlbnQocykgbGlzdCBhbmQgdGhlIHRyZWUgaGFzIGxpc3RlbmVyc1xuICAgICAgLy8gaW52b2tlIHRob3NlIGxpc3RlbmVycy5cbiAgICAgIC8vXG4gICAgICBpZiAodHlwZW9mIHRyZWUuX2xpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBoYW5kbGVycyAmJiBoYW5kbGVycy5wdXNoKHRyZWUuX2xpc3RlbmVycyk7XG4gICAgICAgIHJldHVybiBbdHJlZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxlYWYgPSAwLCBsZW4gPSB0cmVlLl9saXN0ZW5lcnMubGVuZ3RoOyBsZWFmIDwgbGVuOyBsZWFmKyspIHtcbiAgICAgICAgICBoYW5kbGVycyAmJiBoYW5kbGVycy5wdXNoKHRyZWUuX2xpc3RlbmVyc1tsZWFmXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0cmVlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKGN1cnJlbnRUeXBlID09PSAnKicgfHwgY3VycmVudFR5cGUgPT09ICcqKicpIHx8IHRyZWVbY3VycmVudFR5cGVdKSB7XG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIGV2ZW50IGVtaXR0ZWQgaXMgJyonIGF0IHRoaXMgcGFydFxuICAgICAgLy8gb3IgdGhlcmUgaXMgYSBjb25jcmV0ZSBtYXRjaCBhdCB0aGlzIHBhdGNoXG4gICAgICAvL1xuICAgICAgaWYgKGN1cnJlbnRUeXBlID09PSAnKicpIHtcbiAgICAgICAgZm9yIChicmFuY2ggaW4gdHJlZSkge1xuICAgICAgICAgIGlmIChicmFuY2ggIT09ICdfbGlzdGVuZXJzJyAmJiB0cmVlLmhhc093blByb3BlcnR5KGJyYW5jaCkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIGkrMSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgfSBlbHNlIGlmKGN1cnJlbnRUeXBlID09PSAnKionKSB7XG4gICAgICAgIGVuZFJlYWNoZWQgPSAoaSsxID09PSB0eXBlTGVuZ3RoIHx8IChpKzIgPT09IHR5cGVMZW5ndGggJiYgbmV4dFR5cGUgPT09ICcqJykpO1xuICAgICAgICBpZihlbmRSZWFjaGVkICYmIHRyZWUuX2xpc3RlbmVycykge1xuICAgICAgICAgIC8vIFRoZSBuZXh0IGVsZW1lbnQgaGFzIGEgX2xpc3RlbmVycywgYWRkIGl0IHRvIHRoZSBoYW5kbGVycy5cbiAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZSwgdHlwZUxlbmd0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChicmFuY2ggaW4gdHJlZSkge1xuICAgICAgICAgIGlmIChicmFuY2ggIT09ICdfbGlzdGVuZXJzJyAmJiB0cmVlLmhhc093blByb3BlcnR5KGJyYW5jaCkpIHtcbiAgICAgICAgICAgIGlmKGJyYW5jaCA9PT0gJyonIHx8IGJyYW5jaCA9PT0gJyoqJykge1xuICAgICAgICAgICAgICBpZih0cmVlW2JyYW5jaF0uX2xpc3RlbmVycyAmJiAhZW5kUmVhY2hlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIHR5cGVMZW5ndGgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCBpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoYnJhbmNoID09PSBuZXh0VHlwZSkge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuY29uY2F0KHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgdHJlZVticmFuY2hdLCBpKzIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIE5vIG1hdGNoIG9uIHRoaXMgb25lLCBzaGlmdCBpbnRvIHRoZSB0cmVlIGJ1dCBub3QgaW4gdGhlIHR5cGUgYXJyYXkuXG4gICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5jb25jYXQoc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB0cmVlW2JyYW5jaF0sIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmNvbmNhdChzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHRyZWVbY3VycmVudFR5cGVdLCBpKzEpKTtcbiAgICB9XG5cbiAgICB4VHJlZSA9IHRyZWVbJyonXTtcbiAgICBpZiAoeFRyZWUpIHtcbiAgICAgIC8vXG4gICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgdHJlZSB3aWxsIGFsbG93IGFueSBtYXRjaCBmb3IgdGhpcyBwYXJ0LFxuICAgICAgLy8gdGhlbiByZWN1cnNpdmVseSBleHBsb3JlIGFsbCBicmFuY2hlcyBvZiB0aGUgdHJlZVxuICAgICAgLy9cbiAgICAgIHNlYXJjaExpc3RlbmVyVHJlZShoYW5kbGVycywgdHlwZSwgeFRyZWUsIGkrMSk7XG4gICAgfVxuXG4gICAgeHhUcmVlID0gdHJlZVsnKionXTtcbiAgICBpZih4eFRyZWUpIHtcbiAgICAgIGlmKGkgPCB0eXBlTGVuZ3RoKSB7XG4gICAgICAgIGlmKHh4VHJlZS5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGxpc3RlbmVyIG9uIGEgJyoqJywgaXQgd2lsbCBjYXRjaCBhbGwsIHNvIGFkZCBpdHMgaGFuZGxlci5cbiAgICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZSwgdHlwZUxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdWlsZCBhcnJheXMgb2YgbWF0Y2hpbmcgbmV4dCBicmFuY2hlcyBhbmQgb3RoZXJzLlxuICAgICAgICBmb3IoYnJhbmNoIGluIHh4VHJlZSkge1xuICAgICAgICAgIGlmKGJyYW5jaCAhPT0gJ19saXN0ZW5lcnMnICYmIHh4VHJlZS5oYXNPd25Qcm9wZXJ0eShicmFuY2gpKSB7XG4gICAgICAgICAgICBpZihicmFuY2ggPT09IG5leHRUeXBlKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGtub3cgdGhlIG5leHQgZWxlbWVudCB3aWxsIG1hdGNoLCBzbyBqdW1wIHR3aWNlLlxuICAgICAgICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZVticmFuY2hdLCBpKzIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGJyYW5jaCA9PT0gY3VycmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgLy8gQ3VycmVudCBub2RlIG1hdGNoZXMsIG1vdmUgaW50byB0aGUgdHJlZS5cbiAgICAgICAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB4eFRyZWVbYnJhbmNoXSwgaSsxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlzb2xhdGVkQnJhbmNoID0ge307XG4gICAgICAgICAgICAgIGlzb2xhdGVkQnJhbmNoW2JyYW5jaF0gPSB4eFRyZWVbYnJhbmNoXTtcbiAgICAgICAgICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlKGhhbmRsZXJzLCB0eXBlLCB7ICcqKic6IGlzb2xhdGVkQnJhbmNoIH0sIGkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYoeHhUcmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgYW5kIHN0aWxsIG9uIGEgJyoqJ1xuICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZSwgdHlwZUxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYoeHhUcmVlWycqJ10gJiYgeHhUcmVlWycqJ10uX2xpc3RlbmVycykge1xuICAgICAgICBzZWFyY2hMaXN0ZW5lclRyZWUoaGFuZGxlcnMsIHR5cGUsIHh4VHJlZVsnKiddLCB0eXBlTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdGVuZXJzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ3Jvd0xpc3RlbmVyVHJlZSh0eXBlLCBsaXN0ZW5lcikge1xuXG4gICAgdHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuXG4gICAgLy9cbiAgICAvLyBMb29rcyBmb3IgdHdvIGNvbnNlY3V0aXZlICcqKicsIGlmIHNvLCBkb24ndCBhZGQgdGhlIGV2ZW50IGF0IGFsbC5cbiAgICAvL1xuICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHR5cGUubGVuZ3RoOyBpKzEgPCBsZW47IGkrKykge1xuICAgICAgaWYodHlwZVtpXSA9PT0gJyoqJyAmJiB0eXBlW2krMV0gPT09ICcqKicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cmVlID0gdGhpcy5saXN0ZW5lclRyZWU7XG4gICAgdmFyIG5hbWUgPSB0eXBlLnNoaWZ0KCk7XG5cbiAgICB3aGlsZSAobmFtZSkge1xuXG4gICAgICBpZiAoIXRyZWVbbmFtZV0pIHtcbiAgICAgICAgdHJlZVtuYW1lXSA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0cmVlID0gdHJlZVtuYW1lXTtcblxuICAgICAgaWYgKHR5cGUubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgaWYgKCF0cmVlLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMgPSBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHR5cGVvZiB0cmVlLl9saXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMgPSBbdHJlZS5fbGlzdGVuZXJzLCBsaXN0ZW5lcl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheSh0cmVlLl9saXN0ZW5lcnMpKSB7XG5cbiAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgICAgICBpZiAoIXRyZWUuX2xpc3RlbmVycy53YXJuZWQpIHtcblxuICAgICAgICAgICAgdmFyIG0gPSBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50cy5tYXhMaXN0ZW5lcnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIG0gPSB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobSA+IDAgJiYgdHJlZS5fbGlzdGVuZXJzLmxlbmd0aCA+IG0pIHtcblxuICAgICAgICAgICAgICB0cmVlLl9saXN0ZW5lcnMud2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlZS5fbGlzdGVuZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBuYW1lID0gdHlwZS5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW5cbiAgLy8gMTAgbGlzdGVuZXJzIGFyZSBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoXG4gIC8vIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuICAvL1xuICAvLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3NcbiAgLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5kZWxpbWl0ZXIgPSAnLic7XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gICAgdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzID0gbjtcbiAgICBpZiAoIXRoaXMuX2NvbmYpIHRoaXMuX2NvbmYgPSB7fTtcbiAgICB0aGlzLl9jb25mLm1heExpc3RlbmVycyA9IG47XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudCA9ICcnO1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbikge1xuICAgIHRoaXMubWFueShldmVudCwgMSwgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUubWFueSA9IGZ1bmN0aW9uKGV2ZW50LCB0dGwsIGZuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYW55IG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmICgtLXR0bCA9PT0gMCkge1xuICAgICAgICBzZWxmLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5fb3JpZ2luID0gZm47XG5cbiAgICB0aGlzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICh0eXBlID09PSAnbmV3TGlzdGVuZXInICYmICF0aGlzLm5ld0xpc3RlbmVyKSB7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlICpfYWxsKiBmdW5jdGlvbnMgYW5kIGludm9rZSB0aGVtLlxuICAgIGlmICh0aGlzLl9hbGwpIHtcbiAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbDsgaSsrKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB0aGlzLl9hbGwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZXZlbnQgPSB0eXBlO1xuICAgICAgICB0aGlzLl9hbGxbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG5cbiAgICAgIGlmICghdGhpcy5fYWxsICYmXG4gICAgICAgICF0aGlzLl9ldmVudHMuZXJyb3IgJiZcbiAgICAgICAgISh0aGlzLndpbGRjYXJkICYmIHRoaXMubGlzdGVuZXJUcmVlLmVycm9yKSkge1xuXG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHRocm93IGFyZ3VtZW50c1sxXTsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmNhdWdodCwgdW5zcGVjaWZpZWQgJ2Vycm9yJyBldmVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYW5kbGVyO1xuXG4gICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgaGFuZGxlciA9IFtdO1xuICAgICAgdmFyIG5zID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS5zcGxpdCh0aGlzLmRlbGltaXRlcikgOiB0eXBlLnNsaWNlKCk7XG4gICAgICBzZWFyY2hMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCBoYW5kbGVyLCBucywgdGhpcy5saXN0ZW5lclRyZWUsIDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmV2ZW50ID0gdHlwZTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBzbG93ZXJcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobCAtIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsOyBpKyspIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGwgLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbDsgaSsrKSBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgdmFyIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmV2ZW50ID0gdHlwZTtcbiAgICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChsaXN0ZW5lcnMubGVuZ3RoID4gMCkgfHwgISF0aGlzLl9hbGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuICEhdGhpcy5fYWxsO1xuICAgIH1cblxuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQW55KHR5cGUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbiBvbmx5IGFjY2VwdHMgaW5zdGFuY2VzIG9mIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG5cbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09IFwibmV3TGlzdGVuZXJzXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJzXCIuXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIGdyb3dMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSkge1xuICAgICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICB9XG4gICAgZWxzZSBpZih0eXBlb2YgdGhpcy5fZXZlbnRzW3R5cGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheSh0aGlzLl9ldmVudHNbdHlwZV0pKSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcblxuICAgICAgICB2YXIgbSA9IGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG0gPSB0aGlzLl9ldmVudHMubWF4TGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG5cbiAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbkFueSA9IGZ1bmN0aW9uKGZuKSB7XG5cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uQW55IG9ubHkgYWNjZXB0cyBpbnN0YW5jZXMgb2YgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZighdGhpcy5fYWxsKSB7XG4gICAgICB0aGlzLl9hbGwgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGZ1bmN0aW9uIHRvIHRoZSBldmVudCBsaXN0ZW5lciBjb2xsZWN0aW9uLlxuICAgIHRoaXMuX2FsbC5wdXNoKGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmVMaXN0ZW5lciBvbmx5IHRha2VzIGluc3RhbmNlcyBvZiBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVycyxsZWFmcz1bXTtcblxuICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgIHZhciBucyA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuICAgICAgbGVhZnMgPSBzZWFyY2hMaXN0ZW5lclRyZWUuY2FsbCh0aGlzLCBudWxsLCBucywgdGhpcy5saXN0ZW5lclRyZWUsIDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGRvZXMgbm90IHVzZSBsaXN0ZW5lcnMoKSwgc28gbm8gc2lkZSBlZmZlY3Qgb2YgY3JlYXRpbmcgX2V2ZW50c1t0eXBlXVxuICAgICAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pIHJldHVybiB0aGlzO1xuICAgICAgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgICBsZWFmcy5wdXNoKHtfbGlzdGVuZXJzOmhhbmRsZXJzfSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaUxlYWY9MDsgaUxlYWY8bGVhZnMubGVuZ3RoOyBpTGVhZisrKSB7XG4gICAgICB2YXIgbGVhZiA9IGxlYWZzW2lMZWFmXTtcbiAgICAgIGhhbmRsZXJzID0gbGVhZi5fbGlzdGVuZXJzO1xuICAgICAgaWYgKGlzQXJyYXkoaGFuZGxlcnMpKSB7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgICAgKGhhbmRsZXJzW2ldLmxpc3RlbmVyICYmIGhhbmRsZXJzW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikgfHxcbiAgICAgICAgICAgIChoYW5kbGVyc1tpXS5fb3JpZ2luICYmIGhhbmRsZXJzW2ldLl9vcmlnaW4gPT09IGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy53aWxkY2FyZCkge1xuICAgICAgICAgIGxlYWYuX2xpc3RlbmVycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsZWFmLl9saXN0ZW5lcnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChoYW5kbGVycyA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgKGhhbmRsZXJzLmxpc3RlbmVyICYmIGhhbmRsZXJzLmxpc3RlbmVyID09PSBsaXN0ZW5lcikgfHxcbiAgICAgICAgKGhhbmRsZXJzLl9vcmlnaW4gJiYgaGFuZGxlcnMuX29yaWdpbiA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIGlmKHRoaXMud2lsZGNhcmQpIHtcbiAgICAgICAgICBkZWxldGUgbGVhZi5fbGlzdGVuZXJzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZkFueSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIGkgPSAwLCBsID0gMCwgZm5zO1xuICAgIGlmIChmbiAmJiB0aGlzLl9hbGwgJiYgdGhpcy5fYWxsLmxlbmd0aCA+IDApIHtcbiAgICAgIGZucyA9IHRoaXMuX2FsbDtcbiAgICAgIGZvcihpID0gMCwgbCA9IGZucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZm4gPT09IGZuc1tpXSkge1xuICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWxsID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZjtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgIXRoaXMuX2V2ZW50cyB8fCBpbml0LmNhbGwodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICB2YXIgbnMgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKSA6IHR5cGUuc2xpY2UoKTtcbiAgICAgIHZhciBsZWFmcyA9IHNlYXJjaExpc3RlbmVyVHJlZS5jYWxsKHRoaXMsIG51bGwsIG5zLCB0aGlzLmxpc3RlbmVyVHJlZSwgMCk7XG5cbiAgICAgIGZvciAodmFyIGlMZWFmPTA7IGlMZWFmPGxlYWZzLmxlbmd0aDsgaUxlYWYrKykge1xuICAgICAgICB2YXIgbGVhZiA9IGxlYWZzW2lMZWFmXTtcbiAgICAgICAgbGVhZi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSkgcmV0dXJuIHRoaXM7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICBpZih0aGlzLndpbGRjYXJkKSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBbXTtcbiAgICAgIHZhciBucyA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUuc3BsaXQodGhpcy5kZWxpbWl0ZXIpIDogdHlwZS5zbGljZSgpO1xuICAgICAgc2VhcmNoTGlzdGVuZXJUcmVlLmNhbGwodGhpcywgaGFuZGxlcnMsIG5zLCB0aGlzLmxpc3RlbmVyVHJlZSwgMCk7XG4gICAgICByZXR1cm4gaGFuZGxlcnM7XG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzIHx8IGluaXQuY2FsbCh0aGlzKTtcblxuICAgIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKSB0aGlzLl9ldmVudHNbdHlwZV0gPSBbXTtcbiAgICBpZiAoIWlzQXJyYXkodGhpcy5fZXZlbnRzW3R5cGVdKSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ldmVudHNbdHlwZV07XG4gIH07XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnNBbnkgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmKHRoaXMuX2FsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIGV4cG9ydHMuRXZlbnRFbWl0dGVyMiA9IEV2ZW50RW1pdHRlcjtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbC5cbiAgICB3aW5kb3cuRXZlbnRFbWl0dGVyMiA9IEV2ZW50RW1pdHRlcjtcbiAgfVxufSgpO1xuIiwiLyohIGpRdWVyeSB2My42LjEgfCAoYykgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKEMsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10scj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yscz10LnNsaWNlLGc9dC5mbGF0P2Z1bmN0aW9uKGUpe3JldHVybiB0LmZsYXQuY2FsbChlKX06ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY29uY2F0LmFwcGx5KFtdLGUpfSx1PXQucHVzaCxpPXQuaW5kZXhPZixuPXt9LG89bi50b1N0cmluZyx5PW4uaGFzT3duUHJvcGVydHksYT15LnRvU3RyaW5nLGw9YS5jYWxsKE9iamVjdCksdj17fSxtPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLml0ZW19LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PT1lLndpbmRvd30sRT1DLmRvY3VtZW50LGM9e3R5cGU6ITAsc3JjOiEwLG5vbmNlOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBiKGUsdCxuKXt2YXIgcixpLG89KG49bnx8RSkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW28uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGY9XCIzLjYuMVwiLFM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFMuZm4uaW5pdChlLHQpfTtmdW5jdGlvbiBwKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJjA8dCYmdC0xIGluIGUpfVMuZm49Uy5wcm90b3R5cGU9e2pxdWVyeTpmLGNvbnN0cnVjdG9yOlMsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBzLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9zLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PVMubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBTLmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLm1hcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXZlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybih0KzEpJTJ9KSl9LG9kZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiB0JTJ9KSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjaygwPD1uJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnUsc29ydDp0LnNvcnQsc3BsaWNlOnQuc3BsaWNlfSxTLmV4dGVuZD1TLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fG0oYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKXI9ZVt0XSxcIl9fcHJvdG9fX1wiIT09dCYmYSE9PXImJihsJiZyJiYoUy5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KG49YVt0XSxvPWkmJiFBcnJheS5pc0FycmF5KG4pP1tdOml8fFMuaXNQbGFpbk9iamVjdChuKT9uOnt9LGk9ITEsYVt0XT1TLmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0sUy5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXkuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCxuKXtiKGUse25vbmNlOnQmJnQubm9uY2V9LG4pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKHAoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYocChPYmplY3QoZSkpP1MubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6dS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmkuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1bXSxpPTAsbz1lLmxlbmd0aCxhPSFuO2k8bztpKyspIXQoZVtpXSxpKSE9PWEmJnIucHVzaChlW2ldKTtyZXR1cm4gcn0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxhPVtdO2lmKHAoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7cmV0dXJuIGcoYSl9LGd1aWQ6MSxzdXBwb3J0OnZ9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihTLmZuW1N5bWJvbC5pdGVyYXRvcl09dFtTeW1ib2wuaXRlcmF0b3JdKSxTLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBkPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsRSx5LHMsYyx2LFM9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHA9bi5kb2N1bWVudCxrPTAscj0wLG09dWUoKSx4PXVlKCksQT11ZSgpLE49dWUoKSxqPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYobD0hMCksMH0sRD17fS5oYXNPd25Qcm9wZXJ0eSx0PVtdLHE9dC5wb3AsTD10LnB1c2gsSD10LnB1c2gsTz10LnNsaWNlLFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFI9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixXPVwiXFxcXFtcIitNK1wiKihcIitJK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0krXCIpKXwpXCIrTStcIipcXFxcXVwiLEY9XCI6KFwiK0krXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1crXCIpKil8LiopXFxcXCl8KVwiLCQ9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSxCPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSxVPW5ldyBSZWdFeHAoTStcInw+XCIpLFg9bmV3IFJlZ0V4cChGKSxWPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksRz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrVyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrRiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1IrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxcZCQvaSxLPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFwoW15cXFxcclxcXFxuXFxcXGZdKVwiLFwiZ1wiKSxuZT1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIitlLnNsaWNlKDEpLTY1NTM2O3JldHVybiB0fHwobjwwP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShuPj4xMHw1NTI5NiwxMDIzJm58NTYzMjApKX0scmU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmXCJmaWVsZHNldFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtILmFwcGx5KHQ9Ty5jYWxsKHAuY2hpbGROb2RlcykscC5jaGlsZE5vZGVzKSx0W3AuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0g9e2FwcGx5OnQubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7TC5hcHBseShlLE8uY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIHNlKHQsZSxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGY9ZSYmZS5vd25lckRvY3VtZW50LHA9ZT9lLm5vZGVUeXBlOjk7aWYobj1ufHxbXSxcInN0cmluZ1wiIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoVChlKSxlPWV8fEMsRSkpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnYoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhTlt0K1wiIFwiXSYmKCF5fHwheS50ZXN0KHQpKSYmKDEhPT1wfHxcIm9iamVjdFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7aWYoYz10LGY9ZSwxPT09cCYmKFUudGVzdCh0KXx8ei50ZXN0KHQpKSl7KGY9ZWUudGVzdCh0KSYmdmUoZS5wYXJlbnROb2RlKXx8ZSk9PT1lJiZkLnNjb3BlfHwoKHM9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKFwiaWRcIixzPVMpKSxvPShsPWgodCkpLmxlbmd0aDt3aGlsZShvLS0pbFtvXT0ocz9cIiNcIitzOlwiOnNjb3BlXCIpK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKX10cnl7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7Tih0LCEwKX1maW5hbGx5e3M9PT1TJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKEIsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW1NdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSliLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBwZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09dHx8XCJidXR0b25cIj09PXQpJiZlLnR5cGU9PT1ufX1mdW5jdGlvbiBnZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJmb3JtXCJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkP1wibGFiZWxcImluIGU/XCJsYWJlbFwiaW4gZS5wYXJlbnROb2RlP2UucGFyZW50Tm9kZS5kaXNhYmxlZD09PXQ6ZS5kaXNhYmxlZD09PXQ6ZS5pc0Rpc2FibGVkPT09dHx8ZS5pc0Rpc2FibGVkIT09IXQmJmFlKGUpPT09dDplLmRpc2FibGVkPT09dDpcImxhYmVsXCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24geWUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24gdmUoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfWZvcihlIGluIGQ9c2Uuc3VwcG9ydD17fSxpPXNlLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUubmFtZXNwYWNlVVJJLG49ZSYmKGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiFZLnRlc3QodHx8biYmbi5ub2RlTmFtZXx8XCJIVE1MXCIpfSxUPXNlLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lP2Uub3duZXJEb2N1bWVudHx8ZTpwO3JldHVybiByIT1DJiY5PT09ci5ub2RlVHlwZSYmci5kb2N1bWVudEVsZW1lbnQmJihhPShDPXIpLmRvY3VtZW50RWxlbWVudCxFPSFpKEMpLHAhPUMmJihuPUMuZGVmYXVsdFZpZXcpJiZuLnRvcCE9PW4mJihuLmFkZEV2ZW50TGlzdGVuZXI/bi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLG9lKSksZC5zY29wZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChDLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwmJiFlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgZmllbGRzZXQgZGl2XCIpLmxlbmd0aH0pLGQuYXR0cmlidXRlcz1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmlkPVMsIUMuZ2V0RWxlbWVudHNCeU5hbWV8fCFDLmdldEVsZW1lbnRzQnlOYW1lKFMpLmxlbmd0aH0pLGQuZ2V0QnlJZD8oYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6ZC5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxiLmZpbmQuQ0xBU1M9ZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx5PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXt2YXIgdDthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitTK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrUytcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmeS5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHkucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitSK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK1MrXCItXVwiKS5sZW5ndGh8fHkucHVzaChcIn49XCIpLCh0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJcIiksZS5hcHBlbmRDaGlsZCh0KSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nJ11cIikubGVuZ3RofHx5LnB1c2goXCJcXFxcW1wiK00rXCIqbmFtZVwiK00rXCIqPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8eS5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitTK1wiKypcIikubGVuZ3RofHx5LnB1c2goXCIuIy4rWyt+XVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJcXFxcXFxmXCIpLHkucHVzaChcIltcXFxcclxcXFxuXFxcXGZdXCIpfSksY2UoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ5LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmeS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHkucHVzaChcIiwuKjpcIil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSxcIipcIiksYy5jYWxsKGUsXCJbcyE9JyddOnhcIikscy5wdXNoKFwiIT1cIixGKX0pLHk9eS5sZW5ndGgmJm5ldyBSZWdFeHAoeS5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx2PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LGo9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmdihwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmdihwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PXA/LTE6c1tyXT09cD8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZihUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZFJiYhTlt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF5fHwheS50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSksdihlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZELmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChqKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmbShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKCQsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx5KXt2YXIgdj1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT15P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9diE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih2KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W2ssZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09eSk9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtTXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoQixcIiQxXCIpKTtyZXR1cm4gc1tTXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnllKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp5ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6eWUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp5ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp5ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnllKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6eWUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W2sscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtTXXx8KGVbU109e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1rJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHksdixlKXtyZXR1cm4geSYmIXlbU10mJih5PUNlKHkpKSx2JiYhdltTXSYmKHY9Q2UodixlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/dnx8KGU/ZDpsfHx5KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx5KXtpPVRlKHAsdSkseShpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYodnx8ZCl7aWYodil7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7dihudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9dj9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx2P3YobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtTXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksdCxzPG4mJkVlKGUuc2xpY2UocyxuKSksbjxyJiZFZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKEIsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHksdixtLHgscixpPVtdLG89W10sYT1BW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1FZSh0W25dKSlbU10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHk9byxtPTA8KHY9aSkubGVuZ3RoLHg9MDx5Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PUN8fChUKG8pLG49IUUpO3doaWxlKHM9eVthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKGs9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9dlthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUrdi5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihrPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ2ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnZlKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1TLnNwbGl0KFwiXCIpLnNvcnQoaikuam9pbihcIlwiKT09PVMsZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtTLmZpbmQ9ZCxTLmV4cHI9ZC5zZWxlY3RvcnMsUy5leHByW1wiOlwiXT1TLmV4cHIucHNldWRvcyxTLnVuaXF1ZVNvcnQ9Uy51bmlxdWU9ZC51bmlxdWVTb3J0LFMudGV4dD1kLmdldFRleHQsUy5pc1hNTERvYz1kLmlzWE1MLFMuY29udGFpbnM9ZC5jb250YWlucyxTLmVzY2FwZVNlbGVjdG9yPWQuZXNjYXBlO3ZhciBoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZTKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1TLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIGooZSxuLHIpe3JldHVybiBtKG4pP1MuZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/Uy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpTLmZpbmQubWF0Y2hlcyhlLFMuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sUy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soUyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylTLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/Uy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZrLnRlc3QoZSk/UyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBELHE9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KFMuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fEQsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIFM/dFswXTp0LFMubWVyZ2UodGhpcyxTLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxOLnRlc3QoclsxXSkmJlMuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKFMpOlMubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9Uy5mbixEPVMoRSk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PVMoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoUy5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJlMoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/Uy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoUyhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMudW5pcXVlU29ydChTLm1lcmdlKHRoaXMuZ2V0KCksUyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxTLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxTLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtTLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49Uy5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKEhbcl18fFMudW5pcXVlU29ydChuKSxMLnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3Rocm93IGV9ZnVuY3Rpb24gSShlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19Uy5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxTLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6Uy5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7Uy5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBTLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49Uy5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8Uy5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0sUy5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24ocil7Uy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihTLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1TLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPVMuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihJKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0sUy5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPVMuRGVmZXJyZWQoKTtmdW5jdGlvbiAkKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCQpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwkKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7Uy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LFMuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1TLnJlYWR5V2FpdDpTLmlzUmVhZHkpfHwoUy5pc1JlYWR5PSEwKSE9PWUmJjA8LS1TLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtTXSl9fSksUy5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsJCksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCQpKTt2YXIgQj1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbilCKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPVMuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1TLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLFMuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1YKHIuc2xpY2UoNSkpLFoobyxyLGlbcl0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTpCKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksUy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVkuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9WS5hY2Nlc3MoZSx0LFMubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Uy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1TLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksUy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9TLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVMucXVldWUodGhpcyx0LG4pO1MuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJlMuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPVMuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1ZLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxyZT1FLmRvY3VtZW50RWxlbWVudCxpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LG9lPXtjb21wb3NlZDohMH07cmUuZ2V0Um9vdE5vZGUmJihpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUob2UpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZpZShlKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBTLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KFMuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihTLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKFMuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlTLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsUy5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciB1ZT17fTtmdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVkuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9dWVbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PVMuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksdWVbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixZLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9TKHRoaXMpLnNob3coKTpTKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx2LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix2Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIsdi5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB5ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/Uy5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB2ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx2Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSk7dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKVMubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rUy5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO1MubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPFMuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9aWUobyksYT15ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnZlKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB3ZSgpe3JldHVybiEwfWZ1bmN0aW9uIFRlKCl7cmV0dXJuITF9ZnVuY3Rpb24gQ2UoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBFLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIEVlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KUVlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9VGU7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1TLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBTZShlLGksbyl7bz8oWS5zZXQoZSxpLCExKSxTLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1ZLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShTLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFkuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVkuZ2V0KHRoaXMsaSkpfHx0P1kuc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbiYmbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoWS5zZXQodGhpcyxpLHt2YWx1ZTpTLmV2ZW50LnRyaWdnZXIoUy5leHRlbmQoclswXSxTLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1ZLmdldChlLGkpJiZTLmV2ZW50LmFkZChlLGksd2UpfVMuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9WS5nZXQodCk7aWYoVih0KSl7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmUy5maW5kLm1hdGNoZXNTZWxlY3RvcihyZSxpKSxuLmd1aWR8fChuLmd1aWQ9Uy5ndWlkKyspLCh1PXkuZXZlbnRzKXx8KHU9eS5ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSksKGE9eS5oYW5kbGUpfHwoYT15LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUyYmUy5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/Uy5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9YmUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPVMuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJlMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxTLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9WS5oYXNEYXRhKGUpJiZZLmdldChlKTtpZih5JiYodT15LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPWJlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx5LmhhbmRsZSl8fFMucmVtb3ZlRXZlbnQoZSxkLHkuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KVMuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7Uy5pc0VtcHR5T2JqZWN0KHUpJiZZLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSx1PVMuZXZlbnQuZml4KGUpLGw9KFkuZ2V0KHRoaXMsXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW3UudHlwZV18fFtdLGM9Uy5ldmVudC5zcGVjaWFsW3UudHlwZV18fHt9O2ZvcihzWzBdPXUsdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspc1t0XT1hcmd1bWVudHNbdF07aWYodS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHUpKXthPVMuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wO3doaWxlKChpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3UuY3VycmVudFRhcmdldD1pLmVsZW0sbj0wO3doaWxlKChvPWkuaGFuZGxlcnNbbisrXSkmJiF1LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdS5ybmFtZXNwYWNlJiYhMSE9PW8ubmFtZXNwYWNlJiYhdS5ybmFtZXNwYWNlLnRlc3Qoby5uYW1lc3BhY2UpfHwodS5oYW5kbGVPYmo9byx1LmRhdGE9by5kYXRhLHZvaWQgMCE9PShyPSgoUy5ldmVudC5zcGVjaWFsW28ub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxvLmhhbmRsZXIpLmFwcGx5KGkuZWxlbSxzKSkmJiExPT09KHUucmVzdWx0PXIpJiYodS5wcmV2ZW50RGVmYXVsdCgpLHUuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx1KSx1LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJjE8PWUuYnV0dG9uKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0Py0xPFMoaSx0aGlzKS5pbmRleChsKTpTLmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoUy5FdmVudC5wcm90b3R5cGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0Om0oZSk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIGUodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFt0XX0sc2V0OmZ1bmN0aW9uKGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmV9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGNsaWNrOntzZXR1cDpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZTZSh0LFwiY2xpY2tcIix3ZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmU2UodCxcImNsaWNrXCIpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmWS5nZXQodCxcImNsaWNrXCIpfHxBKHQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LFMucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LFMuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBTLkV2ZW50KSlyZXR1cm4gbmV3IFMuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT93ZTpUZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZTLmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbUy5leHBhbmRvXT0hMH0sUy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlMuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOlRlLGlzUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOlRlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD13ZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sUy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNvZGU6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ITB9LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24odCxlKXtTLmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFNlKHRoaXMsdCxDZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gU2UodGhpcyx0KSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFkuZ2V0KGUudGFyZ2V0LHQpfSxkZWxlZ2F0ZVR5cGU6ZX19KSxTLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtTLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8Uy5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksUy5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBFZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEVlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLFMoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPVRlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBrZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxBZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLE5lPS9eXFxzKjwhXFxbQ0RBVEFcXFt8XFxdXFxdPlxccyokL2c7ZnVuY3Rpb24gamUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBEZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBxZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTGUoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIEhlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYhdi5jaGVja0Nsb25lJiZBZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksSGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAoeWUoZSxcInNjcmlwdFwiKSxEZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9Uy5jbG9uZSh1LCEwLCEwKSxzJiZTLm1lcmdlKGEseWUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsUy5tYXAoYSxxZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZTLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKE5lLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIE9lKGUsdCxuKXtmb3IodmFyIHIsaT10P1MuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxTLmNsZWFuRGF0YSh5ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnZlKHllKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEodi5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9eWUoYykscj0wLGk9KG89eWUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHllKGUpLGE9YXx8eWUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylMZShvW3JdLGFbcl0pO2Vsc2UgTGUoZSxjKTtyZXR1cm4gMDwoYT15ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnZlKGEsIWYmJnllKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9Uy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/Uy5ldmVudC5yZW1vdmUobixyKTpTLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksUy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gT2UodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/Uy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxqZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PWplKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHllKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiBCKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYha2UudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHllKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIEhlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEoeWUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtTLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9UyhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxTKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFBlPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLFJlPS9eLS0vLE1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sSWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LFdlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpLEZlPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIiwkZT1uZXcgUmVnRXhwKFwiXlwiK0ZlK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitGZStcIiskXCIsXCJnXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPVJlLnRlc3QodCksdT1lLnN0eWxlO3JldHVybihuPW58fE1lKGUpKSYmKGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdLHMmJihhPWEucmVwbGFjZSgkZSxcIiQxXCIpKSxcIlwiIT09YXx8aWUoZSl8fChhPVMuc3R5bGUoZSx0KSksIXYucGl4ZWxCb3hTdHlsZXMoKSYmUGUudGVzdChhKSYmV2UudGVzdCh0KSYmKHI9dS53aWR0aCxpPXUubWluV2lkdGgsbz11Lm1heFdpZHRoLHUubWluV2lkdGg9dS5tYXhXaWR0aD11LndpZHRoPWEsYT1uLndpZHRoLHUud2lkdGg9cix1Lm1pbldpZHRoPWksdS5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiBfZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2lmKGwpe3Uuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIixsLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIscmUuYXBwZW5kQ2hpbGQodSkuYXBwZW5kQ2hpbGQobCk7dmFyIGU9Qy5nZXRDb21wdXRlZFN0eWxlKGwpO249XCIxJVwiIT09ZS50b3Ascz0xMj09PXQoZS5tYXJnaW5MZWZ0KSxsLnN0eWxlLnJpZ2h0PVwiNjAlXCIsbz0zNj09PXQoZS5yaWdodCkscj0zNj09PXQoZS53aWR0aCksbC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsaT0xMj09PXQobC5vZmZzZXRXaWR0aC8zKSxyZS5yZW1vdmVDaGlsZCh1KSxsPW51bGx9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIG4scixpLG8sYSxzLHU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGw9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuc3R5bGUmJihsLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix2LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1sLnN0eWxlLmJhY2tncm91bmRDbGlwLFMuZXh0ZW5kKHYse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxyfSxwaXhlbEJveFN0eWxlczpmdW5jdGlvbigpe3JldHVybiBlKCksb30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBlKCksbn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxzfSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxpfSxyZWxpYWJsZVRyRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBlLHQsbixyO3JldHVybiBudWxsPT1hJiYoZT1FLmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSx0PUUuY3JlYXRlRWxlbWVudChcInRyXCIpLG49RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXCIsdC5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjFweCBzb2xpZFwiLHQuc3R5bGUuaGVpZ2h0PVwiMXB4XCIsbi5zdHlsZS5oZWlnaHQ9XCI5cHhcIixuLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLHI9Qy5nZXRDb21wdXRlZFN0eWxlKHQpLGE9cGFyc2VJbnQoci5oZWlnaHQsMTApK3BhcnNlSW50KHIuYm9yZGVyVG9wV2lkdGgsMTApK3BhcnNlSW50KHIuYm9yZGVyQm90dG9tV2lkdGgsMTApPT09dC5vZmZzZXRIZWlnaHQscmUucmVtb3ZlQ2hpbGQoZSkpLGF9fSkpfSgpO3ZhciB6ZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVWU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFhlPXt9O2Z1bmN0aW9uIFZlKGUpe3ZhciB0PVMuY3NzUHJvcHNbZV18fFhlW2VdO3JldHVybiB0fHwoZSBpbiBVZT9lOlhlW2VdPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49emUubGVuZ3RoO3doaWxlKG4tLSlpZigoZT16ZVtuXSt0KWluIFVlKXJldHVybiBlfShlKXx8ZSl9dmFyIEdlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxZZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sUWU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9dGUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIEtlKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBaZShlLHQsbil7dmFyIHI9TWUoZSksaT0oIXYuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPUJlKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoUGUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXYuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8IXYucmVsaWFibGVUckRpbWVuc2lvbnMoKSYmQShlLFwidHJcIil8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK0tlKGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIGV0KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBldC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfVMuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49QmUoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1YKHQpLHU9UmUudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9VmUocykpLGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PT0obz10eXBlb2YgbikmJihpPXRlLmV4ZWMobikpJiZpWzFdJiYobj1zZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT1uJiYoXCJudW1iZXJcIiE9PW98fHV8fChuKz1pJiZpWzNdfHwoUy5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSx2LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1YKHQpO3JldHVybiBSZS50ZXN0KHQpfHwodD1WZShzKSksKGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1CZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIFFlJiYoaT1RZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSxTLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHUpe1MuY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hR2UudGVzdChTLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WmUoZSx1LG4pOkllKGUsWWUsZnVuY3Rpb24oKXtyZXR1cm4gWmUoZSx1LG4pfSl9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1NZShlKSxvPSF2LnNjcm9sbGJveFNpemUoKSYmXCJhYnNvbHV0ZVwiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1uP0tlKGUsdSxuLGEsaSk6MDtyZXR1cm4gYSYmbyYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktS2UoZSx1LFwiYm9yZGVyXCIsITEsaSktLjUpKSxzJiYocj10ZS5leGVjKHQpKSYmXCJweFwiIT09KHJbM118fFwicHhcIikmJihlLnN0eWxlW3VdPXQsdD1TLmNzcyhlLHUpKSxKZSgwLHQscyl9fX0pLFMuY3NzSG9va3MubWFyZ2luTGVmdD1fZSh2LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoQmUoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtSWUoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksUy5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oaSxvKXtTLmNzc0hvb2tzW2krb109e2V4cGFuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXt9LHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIiBcIik6W2VdO3Q8NDt0KyspbltpK25lW3RdK29dPXJbdF18fHJbdC0yXXx8clswXTtyZXR1cm4gbn19LFwibWFyZ2luXCIhPT1pJiYoUy5jc3NIb29rc1tpK29dLnNldD1KZSl9KSxTLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj1NZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT1TLmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/Uy5zdHlsZShlLHQsbik6Uy5jc3MoZSx0KX0sZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9fSksKChTLlR3ZWVuPWV0KS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmV0LGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFMuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoUy5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PVMuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSkuaW5pdC5wcm90b3R5cGU9ZXQucHJvdG90eXBlLChldC5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD1TLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe1MuZnguc3RlcFtlLnByb3BdP1MuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFTLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtWZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzpTLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPWV0LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LFMuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxTLmZ4PWV0LnByb3RvdHlwZS5pbml0LFMuZnguc3RlcD17fTt2YXIgdHQsbnQscnQsaXQsb3Q9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGF0PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gc3QoKXtudCYmKCExPT09RS5oaWRkZW4mJkMucmVxdWVzdEFuaW1hdGlvbkZyYW1lP0MucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0KTpDLnNldFRpbWVvdXQoc3QsUy5meC5pbnRlcnZhbCksUy5meC50aWNrKCkpfWZ1bmN0aW9uIHV0KCl7cmV0dXJuIEMuc2V0VGltZW91dChmdW5jdGlvbigpe3R0PXZvaWQgMH0pLHR0PURhdGUubm93KCl9ZnVuY3Rpb24gbHQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW5lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBjdChlLHQsbil7Zm9yKHZhciByLGk9KGZ0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGZ0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gZnQobyxlLHQpe3ZhciBuLGEscj0wLGk9ZnQucHJlZmlsdGVycy5sZW5ndGgscz1TLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT10dHx8dXQoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOlMuZXh0ZW5kKHt9LGUpLG9wdHM6Uy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOlMuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6dHR8fHV0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKCFmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihpPXRbcj1YKG4pXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPVMuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSlmb3IobiBpbiBvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdLG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSk7ZWxzZSB0W3JdPWl9KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO3I8aTtyKyspaWYobj1mdC5wcmVmaWx0ZXJzW3JdLmNhbGwobCxvLGMsbC5vcHRzKSlyZXR1cm4gbShuLnN0b3ApJiYoUy5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPW4uc3RvcC5iaW5kKG4pKSxuO3JldHVybiBTLm1hcChjLGN0LGwpLG0obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwobyxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSxTLmZ4LnRpbWVyKFMuZXh0ZW5kKHUse2VsZW06byxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9Uy5BbmltYXRpb249Uy5leHRlbmQoZnQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHNlKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKFApO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxmdC50d2VlbmVyc1tuXT1mdC50d2VlbmVyc1tuXXx8W10sZnQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx5PVkuZ2V0KGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gbi5xdWV1ZXx8KG51bGw9PShhPVMuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSxTLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0sb3QudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF5fHx2b2lkIDA9PT15W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT15JiZ5W3JdfHxTLnN0eWxlKGUscil9aWYoKHU9IVMuaXNFbXB0eU9iamVjdCh0KSl8fCFTLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD15JiZ5LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1TLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoobGUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPVMuY3NzKGUsXCJkaXNwbGF5XCIpLGxlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExLGQpdXx8KHk/XCJoaWRkZW5cImluIHkmJihnPXkuaGlkZGVuKTp5PVkuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHkuaGlkZGVuPSFnKSxnJiZsZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGxlKFtlXSksWS5yZW1vdmUoZSxcImZ4c2hvd1wiKSxkKVMuc3R5bGUoZSxyLGRbcl0pfSkpLHU9Y3QoZz95W3JdOjAscixwKSxyIGluIHl8fCh5W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2Z0LnByZWZpbHRlcnMudW5zaGlmdChlKTpmdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksUy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Uy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gUy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZTLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sUy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9Uy5pc0VtcHR5T2JqZWN0KHQpLG89Uy5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWZ0KHRoaXMsUy5leHRlbmQoe30sdCksbyk7KGl8fFkuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ITAsdD1udWxsIT1pJiZpK1wicXVldWVIb29rc1wiLG49Uy50aW1lcnMscj1ZLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZhdC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxTLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9WS5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxTLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUscil7dmFyIGk9Uy5mbltyXTtTLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP2kuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShsdChyLCEwKSxlLHQsbil9fSksUy5lYWNoKHtzbGlkZURvd246bHQoXCJzaG93XCIpLHNsaWRlVXA6bHQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmx0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSxyKXtTLmZuW2VdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5hbmltYXRlKHIsZSx0LG4pfX0pLFMudGltZXJzPVtdLFMuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPVMudGltZXJzO2Zvcih0dD1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fFMuZnguc3RvcCgpLHR0PXZvaWQgMH0sUy5meC50aW1lcj1mdW5jdGlvbihlKXtTLnRpbWVycy5wdXNoKGUpLFMuZnguc3RhcnQoKX0sUy5meC5pbnRlcnZhbD0xMyxTLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7bnR8fChudD0hMCxzdCgpKX0sUy5meC5zdG9wPWZ1bmN0aW9uKCl7bnQ9bnVsbH0sUy5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sUy5mbi5kZWxheT1mdW5jdGlvbihyLGUpe3JldHVybiByPVMuZngmJlMuZnguc3BlZWRzW3JdfHxyLGU9ZXx8XCJmeFwiLHRoaXMucXVldWUoZSxmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pfSxydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpdD1FLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxydC50eXBlPVwiY2hlY2tib3hcIix2LmNoZWNrT249XCJcIiE9PXJ0LnZhbHVlLHYub3B0U2VsZWN0ZWQ9aXQuc2VsZWN0ZWQsKHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIixydC50eXBlPVwicmFkaW9cIix2LnJhZGlvVmFsdWU9XCJ0XCI9PT1ydC52YWx1ZTt2YXIgcHQsZHQ9Uy5leHByLmF0dHJIYW5kbGU7Uy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQih0aGlzLFMuYXR0cixlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP3B0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZighdi5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSkscHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgYT1kdFt0XXx8Uy5maW5kLmF0dHI7ZHRbdF09ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG58fChpPWR0W29dLGR0W29dPXIscj1udWxsIT1hKGUsdCxuKT9vOm51bGwsZHRbb109aSkscn19KTt2YXIgaHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxndD0vXig/OmF8YXJlYSkkL2k7ZnVuY3Rpb24geXQoZSl7cmV0dXJuKGUubWF0Y2goUCl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB2dChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24gbXQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5tYXRjaChQKXx8W119Uy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQih0aGlzLFMucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pfX0pLFMuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmUy5pc1hNTERvYyhlKXx8KHQ9Uy5wcm9wRml4W3RdfHx0LGk9Uy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6aHQudGVzdChlLm5vZGVOYW1lKXx8Z3QudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSx2Lm9wdFNlbGVjdGVkfHwoUy5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLFMuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtTLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksUy5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYTtyZXR1cm4gbSh0KT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5hZGRDbGFzcyh0LmNhbGwodGhpcyxlLHZ0KHRoaXMpKSl9KTooZT1tdCh0KSkubGVuZ3RoP3RoaXMuZWFjaChmdW5jdGlvbigpe2lmKHI9dnQodGhpcyksbj0xPT09dGhpcy5ub2RlVHlwZSYmXCIgXCIreXQocikrXCIgXCIpe2ZvcihvPTA7bzxlLmxlbmd0aDtvKyspaT1lW29dLG4uaW5kZXhPZihcIiBcIitpK1wiIFwiKTwwJiYobis9aStcIiBcIik7YT15dChuKSxyIT09YSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfX0pOnRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYTtyZXR1cm4gbSh0KT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5yZW1vdmVDbGFzcyh0LmNhbGwodGhpcyxlLHZ0KHRoaXMpKSl9KTphcmd1bWVudHMubGVuZ3RoPyhlPW10KHQpKS5sZW5ndGg/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYocj12dCh0aGlzKSxuPTE9PT10aGlzLm5vZGVUeXBlJiZcIiBcIit5dChyKStcIiBcIil7Zm9yKG89MDtvPGUubGVuZ3RoO28rKyl7aT1lW29dO3doaWxlKC0xPG4uaW5kZXhPZihcIiBcIitpK1wiIFwiKSluPW4ucmVwbGFjZShcIiBcIitpK1wiIFwiLFwiIFwiKX1hPXl0KG4pLHIhPT1hJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9fSk6dGhpczp0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpfSx0b2dnbGVDbGFzczpmdW5jdGlvbih0LG4pe3ZhciBlLHIsaSxvLGE9dHlwZW9mIHQscz1cInN0cmluZ1wiPT09YXx8QXJyYXkuaXNBcnJheSh0KTtyZXR1cm4gbSh0KT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS50b2dnbGVDbGFzcyh0LmNhbGwodGhpcyxlLHZ0KHRoaXMpLG4pLG4pfSk6XCJib29sZWFuXCI9PXR5cGVvZiBuJiZzP24/dGhpcy5hZGRDbGFzcyh0KTp0aGlzLnJlbW92ZUNsYXNzKHQpOihlPW10KHQpLHRoaXMuZWFjaChmdW5jdGlvbigpe2lmKHMpZm9yKG89Uyh0aGlzKSxpPTA7aTxlLmxlbmd0aDtpKyspcj1lW2ldLG8uaGFzQ2xhc3Mocik/by5yZW1vdmVDbGFzcyhyKTpvLmFkZENsYXNzKHIpO2Vsc2Ugdm9pZCAwIT09dCYmXCJib29sZWFuXCIhPT1hfHwoKHI9dnQodGhpcykpJiZZLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscnx8ITE9PT10P1wiXCI6WS5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pKX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoXCIgXCIreXQodnQobikpK1wiIFwiKS5pbmRleE9mKHQpKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB4dD0vXFxyL2c7Uy5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihuKXt2YXIgcixlLGksdD10aGlzWzBdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPW0obiksdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0OzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KHQ9aT9uLmNhbGwodGhpcyxlLFModGhpcykudmFsKCkpOm4pP3Q9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgdD90Kz1cIlwiOkFycmF5LmlzQXJyYXkodCkmJih0PVMubWFwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHI9Uy52YWxIb29rc1t0aGlzLnR5cGVdfHxTLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gciYmdm9pZCAwIT09ci5zZXQodGhpcyx0LFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXQpKX0pKTp0PyhyPVMudmFsSG9va3NbdC50eXBlXXx8Uy52YWxIb29rc1t0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHImJnZvaWQgMCE9PShlPXIuZ2V0KHQsXCJ2YWx1ZVwiKSk/ZTpcInN0cmluZ1wiPT10eXBlb2YoZT10LnZhbHVlKT9lLnJlcGxhY2UoeHQsXCJcIik6bnVsbD09ZT9cIlwiOmU6dm9pZCAwfX0pLFMuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6eXQoUy50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhQShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9UyhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPVMubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD0tMTxTLmluQXJyYXkoUy52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksUy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe1MudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD0tMTxTLmluQXJyYXkoUyhlKS52YWwoKSx0KX19LHYuY2hlY2tPbnx8KFMudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSksdi5mb2N1c2luPVwib25mb2N1c2luXCJpbiBDO3ZhciBidD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sd3Q9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07Uy5leHRlbmQoUy5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmLHA9W258fEVdLGQ9eS5jYWxsKGUsXCJ0eXBlXCIpP2UudHlwZTplLGg9eS5jYWxsKGUsXCJuYW1lc3BhY2VcIik/ZS5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKG89Zj1hPW49bnx8RSwzIT09bi5ub2RlVHlwZSYmOCE9PW4ubm9kZVR5cGUmJiFidC50ZXN0KGQrUy5ldmVudC50cmlnZ2VyZWQpJiYoLTE8ZC5pbmRleE9mKFwiLlwiKSYmKGQ9KGg9ZC5zcGxpdChcIi5cIikpLnNoaWZ0KCksaC5zb3J0KCkpLHU9ZC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrZCwoZT1lW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChkLFwib2JqZWN0XCI9PXR5cGVvZiBlJiZlKSkuaXNUcmlnZ2VyPXI/MjozLGUubmFtZXNwYWNlPWguam9pbihcIi5cIiksZS5ybmFtZXNwYWNlPWUubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGUucmVzdWx0PXZvaWQgMCxlLnRhcmdldHx8KGUudGFyZ2V0PW4pLHQ9bnVsbD09dD9bZV06Uy5tYWtlQXJyYXkodCxbZV0pLGM9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxyfHwhYy50cmlnZ2VyfHwhMSE9PWMudHJpZ2dlci5hcHBseShuLHQpKSl7aWYoIXImJiFjLm5vQnViYmxlJiYheChuKSl7Zm9yKHM9Yy5kZWxlZ2F0ZVR5cGV8fGQsYnQudGVzdChzK2QpfHwobz1vLnBhcmVudE5vZGUpO287bz1vLnBhcmVudE5vZGUpcC5wdXNoKG8pLGE9bzthPT09KG4ub3duZXJEb2N1bWVudHx8RSkmJnAucHVzaChhLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvd3x8Qyl9aT0wO3doaWxlKChvPXBbaSsrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpZj1vLGUudHlwZT0xPGk/czpjLmJpbmRUeXBlfHxkLChsPShZLmdldChvLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVtlLnR5cGVdJiZZLmdldChvLFwiaGFuZGxlXCIpKSYmbC5hcHBseShvLHQpLChsPXUmJm9bdV0pJiZsLmFwcGx5JiZWKG8pJiYoZS5yZXN1bHQ9bC5hcHBseShvLHQpLCExPT09ZS5yZXN1bHQmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1kLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGMuX2RlZmF1bHQmJiExIT09Yy5fZGVmYXVsdC5hcHBseShwLnBvcCgpLHQpfHwhVihuKXx8dSYmbShuW2RdKSYmIXgobikmJigoYT1uW3VdKSYmKG5bdV09bnVsbCksUy5ldmVudC50cmlnZ2VyZWQ9ZCxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYuYWRkRXZlbnRMaXN0ZW5lcihkLHd0KSxuW2RdKCksZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCx3dCksUy5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGEmJihuW3VdPWEpKSxlLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1TLmV4dGVuZChuZXcgUy5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTtTLmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLFMuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIFMuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSksdi5mb2N1c2lufHxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe1MuZXZlbnQuc2ltdWxhdGUocixlLnRhcmdldCxTLmV2ZW50LmZpeChlKSl9O1MuZXZlbnQuc3BlY2lhbFtyXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpO3R8fGUuYWRkRXZlbnRMaXN0ZW5lcihuLGksITApLFkuYWNjZXNzKGUsciwodHx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKS0xO3Q/WS5hY2Nlc3MoZSxyLHQpOihlLnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLCEwKSxZLnJlbW92ZShlLHIpKX19fSk7dmFyIFR0PUMubG9jYXRpb24sQ3Q9e2d1aWQ6RGF0ZS5ub3coKX0sRXQ9L1xcPy87Uy5wYXJzZVhNTD1mdW5jdGlvbihlKXt2YXIgdCxuO2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe31yZXR1cm4gbj10JiZ0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIilbMF0sdCYmIW58fFMuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrKG4/Uy5tYXAobi5jaGlsZE5vZGVzLGZ1bmN0aW9uKGUpe3JldHVybiBlLnRleHRDb250ZW50fSkuam9pbihcIlxcblwiKTplKSksdH07dmFyIFN0PS9cXFtcXF0kLyxrdD0vXFxyP1xcbi9nLEF0PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxOdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24ganQobixlLHIsaSl7dmFyIHQ7aWYoQXJyYXkuaXNBcnJheShlKSlTLmVhY2goZSxmdW5jdGlvbihlLHQpe3J8fFN0LnRlc3Qobik/aShuLHQpOmp0KG4rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10P2U6XCJcIikrXCJdXCIsdCxyLGkpfSk7ZWxzZSBpZihyfHxcIm9iamVjdFwiIT09dyhlKSlpKG4sZSk7ZWxzZSBmb3IodCBpbiBlKWp0KG4rXCJbXCIrdCtcIl1cIixlW3RdLHIsaSl9Uy5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPW0odCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIVMuaXNQbGFpbk9iamVjdChlKSlTLmVhY2goZSxmdW5jdGlvbigpe2kodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKWp0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSxTLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIFMucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1TLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP1MubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIVModGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJk50LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFBdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1TKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT9TLm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShrdCxcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgRHQ9LyUyMC9nLHF0PS8jLiokLyxMdD0vKFs/Jl0pXz1bXiZdKi8sSHQ9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxPdD0vXig/OkdFVHxIRUFEKSQvLFB0PS9eXFwvXFwvLyxSdD17fSxNdD17fSxJdD1cIiovXCIuY29uY2F0KFwiKlwiKSxXdD1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Z1bmN0aW9uIEZ0KG8pe3JldHVybiBmdW5jdGlvbihlLHQpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCIqXCIpO3ZhciBuLHI9MCxpPWUudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W107aWYobSh0KSl3aGlsZShuPWlbcisrXSlcIitcIj09PW5bMF0/KG49bi5zbGljZSgxKXx8XCIqXCIsKG9bbl09b1tuXXx8W10pLnVuc2hpZnQodCkpOihvW25dPW9bbl18fFtdKS5wdXNoKHQpfX1mdW5jdGlvbiAkdCh0LGksbyxhKXt2YXIgcz17fSx1PXQ9PT1NdDtmdW5jdGlvbiBsKGUpe3ZhciByO3JldHVybiBzW2VdPSEwLFMuZWFjaCh0W2VdfHxbXSxmdW5jdGlvbihlLHQpe3ZhciBuPXQoaSxvLGEpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pLHJ9cmV0dXJuIGwoaS5kYXRhVHlwZXNbMF0pfHwhc1tcIipcIl0mJmwoXCIqXCIpfWZ1bmN0aW9uIEJ0KGUsdCl7dmFyIG4scixpPVMuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJlMuZXh0ZW5kKCEwLGUsciksZX1XdC5ocmVmPVR0LmhyZWYsUy5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOlR0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8udGVzdChUdC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6SXQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOlMucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0P0J0KEJ0KGUsUy5hamF4U2V0dGluZ3MpLHQpOkJ0KFMuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkZ0KFJ0KSxhamF4VHJhbnNwb3J0OkZ0KE10KSxhamF4OmZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLHQ9dHx8e307dmFyIGMsZixwLG4sZCxyLGgsZyxpLG8seT1TLmFqYXhTZXR1cCh7fSx0KSx2PXkuY29udGV4dHx8eSxtPXkuY29udGV4dCYmKHYubm9kZVR5cGV8fHYuanF1ZXJ5KT9TKHYpOlMuZXZlbnQseD1TLkRlZmVycmVkKCksYj1TLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHc9eS5zdGF0dXNDb2RlfHx7fSxhPXt9LHM9e30sdT1cImNhbmNlbGVkXCIsVD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGgpe2lmKCFuKXtuPXt9O3doaWxlKHQ9SHQuZXhlYyhwKSluW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl09KG5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXXx8W10pLmNvbmNhdCh0WzJdKX10PW5bZS50b0xvd2VyQ2FzZSgpK1wiIFwiXX1yZXR1cm4gbnVsbD09dD9udWxsOnQuam9pbihcIiwgXCIpfSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaD9wOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09aCYmKGU9c1tlLnRvTG93ZXJDYXNlKCldPXNbZS50b0xvd2VyQ2FzZSgpXXx8ZSxhW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWgmJih5Lm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihoKVQuYWx3YXlzKGVbVC5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8dTtyZXR1cm4gYyYmYy5hYm9ydCh0KSxsKDAsdCksdGhpc319O2lmKHgucHJvbWlzZShUKSx5LnVybD0oKGV8fHkudXJsfHxUdC5ocmVmKStcIlwiKS5yZXBsYWNlKFB0LFR0LnByb3RvY29sK1wiLy9cIikseS50eXBlPXQubWV0aG9kfHx0LnR5cGV8fHkubWV0aG9kfHx5LnR5cGUseS5kYXRhVHlwZXM9KHkuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXCJcIl0sbnVsbD09eS5jcm9zc0RvbWFpbil7cj1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtyLmhyZWY9eS51cmwsci5ocmVmPXIuaHJlZix5LmNyb3NzRG9tYWluPVd0LnByb3RvY29sK1wiLy9cIitXdC5ob3N0IT1yLnByb3RvY29sK1wiLy9cIityLmhvc3R9Y2F0Y2goZSl7eS5jcm9zc0RvbWFpbj0hMH19aWYoeS5kYXRhJiZ5LnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgeS5kYXRhJiYoeS5kYXRhPVMucGFyYW0oeS5kYXRhLHkudHJhZGl0aW9uYWwpKSwkdChSdCx5LHQsVCksaClyZXR1cm4gVDtmb3IoaSBpbihnPVMuZXZlbnQmJnkuZ2xvYmFsKSYmMD09Uy5hY3RpdmUrKyYmUy5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHkudHlwZT15LnR5cGUudG9VcHBlckNhc2UoKSx5Lmhhc0NvbnRlbnQ9IU90LnRlc3QoeS50eXBlKSxmPXkudXJsLnJlcGxhY2UocXQsXCJcIikseS5oYXNDb250ZW50P3kuZGF0YSYmeS5wcm9jZXNzRGF0YSYmMD09PSh5LmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYoeS5kYXRhPXkuZGF0YS5yZXBsYWNlKER0LFwiK1wiKSk6KG89eS51cmwuc2xpY2UoZi5sZW5ndGgpLHkuZGF0YSYmKHkucHJvY2Vzc0RhdGF8fFwic3RyaW5nXCI9PXR5cGVvZiB5LmRhdGEpJiYoZis9KEV0LnRlc3QoZik/XCImXCI6XCI/XCIpK3kuZGF0YSxkZWxldGUgeS5kYXRhKSwhMT09PXkuY2FjaGUmJihmPWYucmVwbGFjZShMdCxcIiQxXCIpLG89KEV0LnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitDdC5ndWlkKysrbykseS51cmw9ZitvKSx5LmlmTW9kaWZpZWQmJihTLmxhc3RNb2RpZmllZFtmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixTLmxhc3RNb2RpZmllZFtmXSksUy5ldGFnW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsUy5ldGFnW2ZdKSksKHkuZGF0YSYmeS5oYXNDb250ZW50JiYhMSE9PXkuY29udGVudFR5cGV8fHQuY29udGVudFR5cGUpJiZULnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIix5LmNvbnRlbnRUeXBlKSxULnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIix5LmRhdGFUeXBlc1swXSYmeS5hY2NlcHRzW3kuZGF0YVR5cGVzWzBdXT95LmFjY2VwdHNbeS5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXkuZGF0YVR5cGVzWzBdP1wiLCBcIitJdCtcIjsgcT0wLjAxXCI6XCJcIik6eS5hY2NlcHRzW1wiKlwiXSkseS5oZWFkZXJzKVQuc2V0UmVxdWVzdEhlYWRlcihpLHkuaGVhZGVyc1tpXSk7aWYoeS5iZWZvcmVTZW5kJiYoITE9PT15LmJlZm9yZVNlbmQuY2FsbCh2LFQseSl8fGgpKXJldHVybiBULmFib3J0KCk7aWYodT1cImFib3J0XCIsYi5hZGQoeS5jb21wbGV0ZSksVC5kb25lKHkuc3VjY2VzcyksVC5mYWlsKHkuZXJyb3IpLGM9JHQoTXQseSx0LFQpKXtpZihULnJlYWR5U3RhdGU9MSxnJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtULHldKSxoKXJldHVybiBUO3kuYXN5bmMmJjA8eS50aW1lb3V0JiYoZD1DLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtULmFib3J0KFwidGltZW91dFwiKX0seS50aW1lb3V0KSk7dHJ5e2g9ITEsYy5zZW5kKGEsbCl9Y2F0Y2goZSl7aWYoaCl0aHJvdyBlO2woLTEsZSl9fWVsc2UgbCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBsKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD10O2h8fChoPSEwLGQmJkMuY2xlYXJUaW1lb3V0KGQpLGM9dm9pZCAwLHA9cnx8XCJcIixULnJlYWR5U3RhdGU9MDxlPzQ6MCxpPTIwMDw9ZSYmZTwzMDB8fDMwND09PWUsbiYmKHM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jb250ZW50cyx1PWUuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09dVswXSl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119KHksVCxuKSksIWkmJi0xPFMuaW5BcnJheShcInNjcmlwdFwiLHkuZGF0YVR5cGVzKSYmUy5pbkFycmF5KFwianNvblwiLHkuZGF0YVR5cGVzKTwwJiYoeS5jb252ZXJ0ZXJzW1widGV4dCBzY3JpcHRcIl09ZnVuY3Rpb24oKXt9KSxzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19KHkscyxULGkpLGk/KHkuaWZNb2RpZmllZCYmKCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKFMubGFzdE1vZGlmaWVkW2ZdPXUpLCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKFMuZXRhZ1tmXT11KSksMjA0PT09ZXx8XCJIRUFEXCI9PT15LnR5cGU/bD1cIm5vY29udGVudFwiOjMwND09PWU/bD1cIm5vdG1vZGlmaWVkXCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPVwiZXJyb3JcIixlPDAmJihlPTApKSksVC5zdGF0dXM9ZSxULnN0YXR1c1RleHQ9KHR8fGwpK1wiXCIsaT94LnJlc29sdmVXaXRoKHYsW28sbCxUXSk6eC5yZWplY3RXaXRoKHYsW1QsbCxhXSksVC5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGcmJm0udHJpZ2dlcihpP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtULHksaT9vOmFdKSxiLmZpcmVXaXRoKHYsW1QsbF0pLGcmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbVCx5XSksLS1TLmFjdGl2ZXx8Uy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksUy5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLGkpe1NbaV09ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG0odCkmJihyPXJ8fG4sbj10LHQ9dm9pZCAwKSxTLmFqYXgoUy5leHRlbmQoe3VybDplLHR5cGU6aSxkYXRhVHlwZTpyLGRhdGE6dCxzdWNjZXNzOm59LFMuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlLmhlYWRlcnMpXCJjb250ZW50LXR5cGVcIj09PXQudG9Mb3dlckNhc2UoKSYmKGUuY29udGVudFR5cGU9ZS5oZWFkZXJzW3RdfHxcIlwiKX0pLFMuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe1MuZ2xvYmFsRXZhbChlLHQsbil9fSl9LFMuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PVMoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe1ModGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksUy5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiFTLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxTLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sUy5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQy5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgX3Q9ezA6MjAwLDEyMjM6MjA0fSx6dD1TLmFqYXhTZXR0aW5ncy54aHIoKTt2LmNvcnM9ISF6dCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIHp0LHYuYWpheD16dD0hIXp0LFMuYWpheFRyYW5zcG9ydChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHYuY29yc3x8enQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChfdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvJiZhKCl9KX0sbz1vKFwiYWJvcnRcIik7dHJ5e3Iuc2VuZChpLmhhc0NvbnRlbnQmJmkuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobyl0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtvJiZvKCl9fX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksUy5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZ2xvYmFsRXZhbChlKSxlfX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLFMuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKG4pe3ZhciByLGk7aWYobi5jcm9zc0RvbWFpbnx8bi5zY3JpcHRBdHRycylyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3I9UyhcIjxzY3JpcHQ+XCIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGk9ZnVuY3Rpb24oZSl7ci5yZW1vdmUoKSxpPW51bGwsZSYmdChcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksRS5oZWFkLmFwcGVuZENoaWxkKHJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2kmJmkoKX19fSk7dmFyIFV0LFh0PVtdLFZ0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Uy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WHQucG9wKCl8fFMuZXhwYW5kbytcIl9cIitDdC5ndWlkKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPSExIT09ZS5qc29ucCYmKFZ0LnRlc3QoZS51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PShlLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZWdC50ZXN0KGUuZGF0YSkmJlwiZGF0YVwiKTtpZihhfHxcImpzb25wXCI9PT1lLmRhdGFUeXBlc1swXSlyZXR1cm4gcj1lLmpzb25wQ2FsbGJhY2s9bShlLmpzb25wQ2FsbGJhY2spP2UuanNvbnBDYWxsYmFjaygpOmUuanNvbnBDYWxsYmFjayxhP2VbYV09ZVthXS5yZXBsYWNlKFZ0LFwiJDFcIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KEV0LnRlc3QoZS51cmwpP1wiJlwiOlwiP1wiKStlLmpzb25wK1wiPVwiK3IpLGUuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIG98fFMuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxvWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/UyhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayxYdC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSxcInNjcmlwdFwifSksdi5jcmVhdGVIVE1MRG9jdW1lbnQ9KChVdD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5KS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1VdC5jaGlsZE5vZGVzLmxlbmd0aCksUy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP1tdOihcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdHx8KHYuY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9RS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1FKSxvPSFuJiZbXSwoaT1OLmV4ZWMoZSkpP1t0LmNyZWF0ZUVsZW1lbnQoaVsxXSldOihpPXhlKFtlXSx0LG8pLG8mJm8ubGVuZ3RoJiZTKG8pLnJlbW92ZSgpLFMubWVyZ2UoW10saS5jaGlsZE5vZGVzKSkpO3ZhciByLGksb30sUy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4tMTxzJiYocj15dChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksbSh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLDA8YS5sZW5ndGgmJlMuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/UyhcIjxkaXY+XCIpLmFwcGVuZChTLnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LFMuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKHQpe3JldHVybiBTLmdyZXAoUy50aW1lcnMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KS5sZW5ndGh9LFMub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPVMuY3NzKGUsXCJwb3NpdGlvblwiKSxjPVMoZSksZj17fTtcInN0YXRpY1wiPT09bCYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWMub2Zmc2V0KCksbz1TLmNzcyhlLFwidG9wXCIpLHU9Uy5jc3MoZSxcImxlZnRcIiksKFwiYWJzb2x1dGVcIj09PWx8fFwiZml4ZWRcIj09PWwpJiYtMTwobyt1KS5pbmRleE9mKFwiYXV0b1wiKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4sUy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsZik6Yy5jc3MoZil9fSxTLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKHQpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uy5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsdCxlKX0pO3ZhciBlLG4scj10aGlzWzBdO3JldHVybiByP3IuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGU9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOmUudG9wK24ucGFnZVlPZmZzZXQsbGVmdDplLmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9OnZvaWQgMH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09Uy5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT1TKGUpLm9mZnNldCgpKS50b3ArPVMuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPVMuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3AtUy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtUy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PVMuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxyZX0pfX0pLFMuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24odCxpKXt2YXIgbz1cInBhZ2VZT2Zmc2V0XCI9PT1pO1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoeChlKT9yPWU6OT09PWUubm9kZVR5cGUmJihyPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PW4pcmV0dXJuIHI/cltpXTplW3RdO3I/ci5zY3JvbGxUbyhvP3IucGFnZVhPZmZzZXQ6bixvP246ci5wYWdlWU9mZnNldCk6ZVt0XT1ufSx0LGUsYXJndW1lbnRzLmxlbmd0aCl9fSksUy5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLG4pe1MuY3NzSG9va3Nbbl09X2Uodi5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4gdD1CZShlLG4pLFBlLnRlc3QodCk/UyhlKS5wb3NpdGlvbigpW25dK1wicHhcIjp0fSl9KSxTLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxzKXtTLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpzLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKHIsbyl7Uy5mbltvXT1mdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGk9cnx8KCEwPT09ZXx8ITA9PT10P1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEIodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIHgoZSk/MD09PW8uaW5kZXhPZihcIm91dGVyXCIpP2VbXCJpbm5lclwiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWUubm9kZVR5cGU/KHI9ZS5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoZS5ib2R5W1wic2Nyb2xsXCIrYV0scltcInNjcm9sbFwiK2FdLGUuYm9keVtcIm9mZnNldFwiK2FdLHJbXCJvZmZzZXRcIithXSxyW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1uP1MuY3NzKGUsdCxpKTpTLnN0eWxlKGUsdCxuLGkpfSxzLG4/ZTp2b2lkIDAsbil9fSl9KSxTLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe1MuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSxTLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMub24oZSxudWxsLHQsbil9LHVuYmluZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9mZihlLG51bGwsdCl9LGRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLm9uKHQsZSxuLHIpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoZSxcIioqXCIpOnRoaXMub2ZmKHQsZXx8XCIqKlwiLG4pfSxob3ZlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoZSkubW91c2VsZWF2ZSh0fHxlKX19KSxTLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsbil7Uy5mbltuXT1mdW5jdGlvbihlLHQpe3JldHVybiAwPGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vbihuLG51bGwsZSx0KTp0aGlzLnRyaWdnZXIobil9fSk7dmFyIEd0PS9eW1xcc1xcdUZFRkZcXHhBMF0rfChbXlxcc1xcdUZFRkZcXHhBMF0pW1xcc1xcdUZFRkZcXHhBMF0rJC9nO1MucHJveHk9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksbShlKSlyZXR1cm4gcj1zLmNhbGwoYXJndW1lbnRzLDIpLChpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpfSkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxTLmd1aWQrKyxpfSxTLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP1MucmVhZHlXYWl0Kys6Uy5yZWFkeSghMCl9LFMuaXNBcnJheT1BcnJheS5pc0FycmF5LFMucGFyc2VKU09OPUpTT04ucGFyc2UsUy5ub2RlTmFtZT1BLFMuaXNGdW5jdGlvbj1tLFMuaXNXaW5kb3c9eCxTLmNhbWVsQ2FzZT1YLFMudHlwZT13LFMubm93PURhdGUubm93LFMuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PVMudHlwZShlKTtyZXR1cm4oXCJudW1iZXJcIj09PXR8fFwic3RyaW5nXCI9PT10KSYmIWlzTmFOKGUtcGFyc2VGbG9hdChlKSl9LFMudHJpbT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoR3QsXCIkMVwiKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBTfSk7dmFyIFl0PUMualF1ZXJ5LFF0PUMuJDtyZXR1cm4gUy5ub0NvbmZsaWN0PWZ1bmN0aW9uKGUpe3JldHVybiBDLiQ9PT1TJiYoQy4kPVF0KSxlJiZDLmpRdWVyeT09PVMmJihDLmpRdWVyeT1ZdCksU30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUmJihDLmpRdWVyeT1DLiQ9UyksU30pO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBkZWNvZGVDb21wb25lbnQgPSByZXF1aXJlKCdkZWNvZGUtdXJpLWNvbXBvbmVudCcpO1xuXG5mdW5jdGlvbiBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0cykge1xuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnWycsXG5cdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0J10nXG5cdFx0XHRcdF0uam9pbignJykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGVuY29kZShpbmRleCwgb3B0cyksXG5cdFx0XHRcdFx0J109Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gZW5jb2RlKGtleSwgb3B0cykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1tdPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gZW5jb2RlKGtleSwgb3B0cykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0cykge1xuXHR2YXIgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0cy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdHMpIHtcblx0aWYgKG9wdHMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdHMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpO1xuXHRcdH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXRba2V5XTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdChzdHIpIHtcblx0dmFyIHF1ZXJ5U3RhcnQgPSBzdHIuaW5kZXhPZignPycpO1xuXHRpZiAocXVlcnlTdGFydCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHN0ci5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0cykge1xuXHRvcHRzID0gb2JqZWN0QXNzaWduKHthcnJheUZvcm1hdDogJ25vbmUnfSwgb3B0cyk7XG5cblx0dmFyIGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvaXNzdWVzLzQ3XG5cdHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIXN0cikge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuXHRcdHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG5cdFx0Ly8gRmlyZWZveCAocHJlIDQwKSBkZWNvZGVzIGAlM0RgIHRvIGA9YFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL3B1bGwvMzdcblx0XHR2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHR2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzLmpvaW4oJz0nKSA6IHVuZGVmaW5lZDtcblxuXHRcdC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZUNvbXBvbmVudCh2YWwpO1xuXG5cdFx0Zm9ybWF0dGVyKGRlY29kZUNvbXBvbmVudChrZXkpLCB2YWwsIHJldCk7XG5cdH0pO1xuXG5cdHJldHVybiBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG5cdFx0dmFyIHZhbCA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuXG5leHBvcnRzLmV4dHJhY3QgPSBleHRyYWN0O1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG5leHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJ1xuXHR9O1xuXG5cdG9wdHMgPSBvYmplY3RBc3NpZ24oZGVmYXVsdHMsIG9wdHMpO1xuXG5cdGlmIChvcHRzLnNvcnQgPT09IGZhbHNlKSB7XG5cdFx0b3B0cy5zb3J0ID0gZnVuY3Rpb24gKCkge307XG5cdH1cblxuXHR2YXIgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQob3B0cy5zb3J0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWwgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcblx0XHRcdFx0aWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGZvcm1hdHRlcihrZXksIHZhbDIsIHJlc3VsdC5sZW5ndGgpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cykgKyAnPScgKyBlbmNvZGUodmFsLCBvcHRzKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0fSkuam9pbignJicpIDogJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlVXJsID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuXHRyZXR1cm4ge1xuXHRcdHVybDogc3RyLnNwbGl0KCc/JylbMF0gfHwgJycsXG5cdFx0cXVlcnk6IHBhcnNlKGV4dHJhY3Qoc3RyKSwgb3B0cylcblx0fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHR9KTtcbn07XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD10fHxzZWxmKS5Td2VldGFsZXJ0Mj1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe3JldHVybihyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBhKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX1mdW5jdGlvbiBjKHQsZSxuKXtyZXR1cm4gZSYmbyh0LnByb3RvdHlwZSxlKSxuJiZvKHQsbiksdH1mdW5jdGlvbiBzKCl7cmV0dXJuKHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiB1KHQpe3JldHVybih1PU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBsKHQsZSl7cmV0dXJuKGw9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIGQoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsW10sZnVuY3Rpb24oKXt9KSksITB9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIGkodCxlLG4pe3JldHVybihpPWQoKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIG89W251bGxdO28ucHVzaC5hcHBseShvLGUpO3ZhciBpPW5ldyhGdW5jdGlvbi5iaW5kLmFwcGx5KHQsbykpO3JldHVybiBuJiZsKGksbi5wcm90b3R5cGUpLGl9KS5hcHBseShudWxsLGFyZ3VtZW50cyl9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9mdW5jdGlvbih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH0odCk6ZX1mdW5jdGlvbiBmKHQsZSxuKXtyZXR1cm4oZj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5nZXQ/UmVmbGVjdC5nZXQ6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPWZ1bmN0aW9uKHQsZSl7Zm9yKDshT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSkmJm51bGwhPT0odD11KHQpKTspO3JldHVybiB0fSh0LGUpO2lmKG8pe3ZhciBpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobyxlKTtyZXR1cm4gaS5nZXQ/aS5nZXQuY2FsbChuKTppLnZhbHVlfX0pKHQsZSxufHx0KX1mdW5jdGlvbiBtKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19KX1mdW5jdGlvbiBoKHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KX1mdW5jdGlvbiBnKHQsZSl7dmFyIG47bj0nXCInLmNvbmNhdCh0LCdcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcIicpLmNvbmNhdChlLCdcIiBpbnN0ZWFkLicpLC0xPT09ei5pbmRleE9mKG4pJiYoei5wdXNoKG4pLF8obikpfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQudG9Qcm9taXNlfWZ1bmN0aW9uIGIodCl7cmV0dXJuIHYodCk/dC50b1Byb21pc2UoKTpQcm9taXNlLnJlc29sdmUodCl9ZnVuY3Rpb24geSh0KXtyZXR1cm4gdCYmUHJvbWlzZS5yZXNvbHZlKHQpPT09dH1mdW5jdGlvbiB3KHQpe3JldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudHx8XCJvYmplY3RcIj09PXIoZT10KSYmZS5qcXVlcnk7dmFyIGV9ZnVuY3Rpb24gdCh0KXt2YXIgZT17fTtmb3IodmFyIG4gaW4gdCllW3Rbbl1dPVwic3dhbDItXCIrdFtuXTtyZXR1cm4gZX1mdW5jdGlvbiBDKHQpe3ZhciBlPVEoKTtyZXR1cm4gZT9lLnF1ZXJ5U2VsZWN0b3IodCk6bnVsbH1mdW5jdGlvbiBlKHQpe3JldHVybiBDKFwiLlwiLmNvbmNhdCh0KSl9ZnVuY3Rpb24gbigpe3ZhciB0PSQoKTtyZXR1cm4gaCh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIuY29uY2F0KFkuaWNvbikpKX1mdW5jdGlvbiBrKCl7dmFyIHQ9bigpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdnQodCl9KTtyZXR1cm4gdC5sZW5ndGg/dFswXTpudWxsfWZ1bmN0aW9uIHgoKXtyZXR1cm4gZShZLnRpdGxlKX1mdW5jdGlvbiBQKCl7cmV0dXJuIGUoWS5jb250ZW50KX1mdW5jdGlvbiBBKCl7cmV0dXJuIGUoWS5pbWFnZSl9ZnVuY3Rpb24gQigpe3JldHVybiBlKFlbXCJwcm9ncmVzcy1zdGVwc1wiXSl9ZnVuY3Rpb24gUygpe3JldHVybiBlKFlbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0pfWZ1bmN0aW9uIEUoKXtyZXR1cm4gQyhcIi5cIi5jb25jYXQoWS5hY3Rpb25zLFwiIC5cIikuY29uY2F0KFkuY29uZmlybSkpfWZ1bmN0aW9uIE8oKXtyZXR1cm4gQyhcIi5cIi5jb25jYXQoWS5hY3Rpb25zLFwiIC5cIikuY29uY2F0KFkuY2FuY2VsKSl9ZnVuY3Rpb24gVCgpe3JldHVybiBlKFkuYWN0aW9ucyl9ZnVuY3Rpb24gTCgpe3JldHVybiBlKFkuaGVhZGVyKX1mdW5jdGlvbiBqKCl7cmV0dXJuIGUoWS5mb290ZXIpfWZ1bmN0aW9uIHEoKXtyZXR1cm4gZShZW1widGltZXItcHJvZ3Jlc3MtYmFyXCJdKX1mdW5jdGlvbiBJKCl7cmV0dXJuIGUoWS5jbG9zZSl9ZnVuY3Rpb24gVigpe3ZhciB0PWgoJCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKSkuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0PXBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIikpLChlPXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIikpKTx0PzE6dDxlPy0xOjB9KSxlPWgoJCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1xcbiAgYVtocmVmXSxcXG4gIGFyZWFbaHJlZl0sXFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXFxuICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcXG4gIGlmcmFtZSxcXG4gIG9iamVjdCxcXG4gIGVtYmVkLFxcbiAgW3RhYmluZGV4PVwiMFwiXSxcXG4gIFtjb250ZW50ZWRpdGFibGVdLFxcbiAgYXVkaW9bY29udHJvbHNdLFxcbiAgdmlkZW9bY29udHJvbHNdLFxcbiAgc3VtbWFyeVxcbicpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuXCItMVwiIT09dC5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKX0pO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGU9W10sbj0wO248dC5sZW5ndGg7bisrKS0xPT09ZS5pbmRleE9mKHRbbl0pJiZlLnB1c2godFtuXSk7cmV0dXJuIGV9KHQuY29uY2F0KGUpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHZ0KHQpfSl9ZnVuY3Rpb24gTSgpe3JldHVybiFKKCkmJiFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhZW1wibm8tYmFja2Ryb3BcIl0pfWZ1bmN0aW9uIFIoKXtyZXR1cm4gJCgpLmhhc0F0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKX1mdW5jdGlvbiBIKGUsdCl7dmFyIG47ZS50ZXh0Q29udGVudD1cIlwiLHQmJihuPShuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKSxoKG4ucXVlcnlTZWxlY3RvcihcImhlYWRcIikuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbih0KXtlLmFwcGVuZENoaWxkKHQpfSksaChuLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5hcHBlbmRDaGlsZCh0KX0pKX1mdW5jdGlvbiBEKHQsZSl7aWYoZSl7Zm9yKHZhciBuPWUuc3BsaXQoL1xccysvKSxvPTA7bzxuLmxlbmd0aDtvKyspaWYoIXQuY2xhc3NMaXN0LmNvbnRhaW5zKG5bb10pKXJldHVybjtyZXR1cm4gMX19ZnVuY3Rpb24gTih0LGUsbil7dmFyIG8saTtpZihpPWUsaCgobz10KS5jbGFzc0xpc3QpLmZvckVhY2goZnVuY3Rpb24odCl7LTE9PT1tKFkpLmluZGV4T2YodCkmJi0xPT09bShaKS5pbmRleE9mKHQpJiYtMT09PW0oaS5zaG93Q2xhc3MpLmluZGV4T2YodCkmJm8uY2xhc3NMaXN0LnJlbW92ZSh0KX0pLGUuY3VzdG9tQ2xhc3MmJmUuY3VzdG9tQ2xhc3Nbbl0pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlLmN1c3RvbUNsYXNzW25dJiYhZS5jdXN0b21DbGFzc1tuXS5mb3JFYWNoKXJldHVybiBfKFwiSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLlwiLmNvbmNhdChuLCchIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcIicpLmNvbmNhdChyKGUuY3VzdG9tQ2xhc3Nbbl0pLCdcIicpKTttdCh0LGUuY3VzdG9tQ2xhc3Nbbl0pfX12YXIgVT1cIlN3ZWV0QWxlcnQyOlwiLF89ZnVuY3Rpb24odCl7Y29uc29sZS53YXJuKFwiXCIuY29uY2F0KFUsXCIgXCIpLmNvbmNhdCh0KSl9LEY9ZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChVLFwiIFwiKS5jb25jYXQodCkpfSx6PVtdLFc9ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dH0sSz1PYmplY3QuZnJlZXplKHtjYW5jZWw6XCJjYW5jZWxcIixiYWNrZHJvcDpcImJhY2tkcm9wXCIsY2xvc2U6XCJjbG9zZVwiLGVzYzpcImVzY1wiLHRpbWVyOlwidGltZXJcIn0pLFk9dChbXCJjb250YWluZXJcIixcInNob3duXCIsXCJoZWlnaHQtYXV0b1wiLFwiaW9zZml4XCIsXCJwb3B1cFwiLFwibW9kYWxcIixcIm5vLWJhY2tkcm9wXCIsXCJuby10cmFuc2l0aW9uXCIsXCJ0b2FzdFwiLFwidG9hc3Qtc2hvd25cIixcInRvYXN0LWNvbHVtblwiLFwic2hvd1wiLFwiaGlkZVwiLFwiY2xvc2VcIixcInRpdGxlXCIsXCJoZWFkZXJcIixcImNvbnRlbnRcIixcImh0bWwtY29udGFpbmVyXCIsXCJhY3Rpb25zXCIsXCJjb25maXJtXCIsXCJjYW5jZWxcIixcImZvb3RlclwiLFwiaWNvblwiLFwiaWNvbi1jb250ZW50XCIsXCJpbWFnZVwiLFwiaW5wdXRcIixcImZpbGVcIixcInJhbmdlXCIsXCJzZWxlY3RcIixcInJhZGlvXCIsXCJjaGVja2JveFwiLFwibGFiZWxcIixcInRleHRhcmVhXCIsXCJpbnB1dGVycm9yXCIsXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIixcInByb2dyZXNzLXN0ZXBzXCIsXCJhY3RpdmUtcHJvZ3Jlc3Mtc3RlcFwiLFwicHJvZ3Jlc3Mtc3RlcFwiLFwicHJvZ3Jlc3Mtc3RlcC1saW5lXCIsXCJsb2FkaW5nXCIsXCJzdHlsZWRcIixcInRvcFwiLFwidG9wLXN0YXJ0XCIsXCJ0b3AtZW5kXCIsXCJ0b3AtbGVmdFwiLFwidG9wLXJpZ2h0XCIsXCJjZW50ZXJcIixcImNlbnRlci1zdGFydFwiLFwiY2VudGVyLWVuZFwiLFwiY2VudGVyLWxlZnRcIixcImNlbnRlci1yaWdodFwiLFwiYm90dG9tXCIsXCJib3R0b20tc3RhcnRcIixcImJvdHRvbS1lbmRcIixcImJvdHRvbS1sZWZ0XCIsXCJib3R0b20tcmlnaHRcIixcImdyb3ctcm93XCIsXCJncm93LWNvbHVtblwiLFwiZ3Jvdy1mdWxsc2NyZWVuXCIsXCJydGxcIixcInRpbWVyLXByb2dyZXNzLWJhclwiLFwidGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lclwiLFwic2Nyb2xsYmFyLW1lYXN1cmVcIixcImljb24tc3VjY2Vzc1wiLFwiaWNvbi13YXJuaW5nXCIsXCJpY29uLWluZm9cIixcImljb24tcXVlc3Rpb25cIixcImljb24tZXJyb3JcIl0pLFo9dChbXCJzdWNjZXNzXCIsXCJ3YXJuaW5nXCIsXCJpbmZvXCIsXCJxdWVzdGlvblwiLFwiZXJyb3JcIl0pLFE9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLmNvbnRhaW5lcikpfSwkPWZ1bmN0aW9uKCl7cmV0dXJuIGUoWS5wb3B1cCl9LEo9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoWVtcInRvYXN0LXNob3duXCJdKX0sWD17cHJldmlvdXNCb2R5UGFkZGluZzpudWxsfTtmdW5jdGlvbiBHKHQsZSl7aWYoIWUpcmV0dXJuIG51bGw7c3dpdGNoKGUpe2Nhc2VcInNlbGVjdFwiOmNhc2VcInRleHRhcmVhXCI6Y2FzZVwiZmlsZVwiOnJldHVybiBndCh0LFlbZV0pO2Nhc2VcImNoZWNrYm94XCI6cmV0dXJuIHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5jaGVja2JveCxcIiBpbnB1dFwiKSk7Y2FzZVwicmFkaW9cIjpyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLnJhZGlvLFwiIGlucHV0OmNoZWNrZWRcIikpfHx0LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkucmFkaW8sXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO2Nhc2VcInJhbmdlXCI6cmV0dXJuIHQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5yYW5nZSxcIiBpbnB1dFwiKSk7ZGVmYXVsdDpyZXR1cm4gZ3QodCxZLmlucHV0KX19ZnVuY3Rpb24gdHQodCl7dmFyIGU7dC5mb2N1cygpLFwiZmlsZVwiIT09dC50eXBlJiYoZT10LnZhbHVlLHQudmFsdWU9XCJcIix0LnZhbHVlPWUpfWZ1bmN0aW9uIGV0KHQsZSxuKXt0JiZlJiYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWUuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbikpLGUuZm9yRWFjaChmdW5jdGlvbihlKXt0LmZvckVhY2g/dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe24/dC5jbGFzc0xpc3QuYWRkKGUpOnQuY2xhc3NMaXN0LnJlbW92ZShlKX0pOm4/dC5jbGFzc0xpc3QuYWRkKGUpOnQuY2xhc3NMaXN0LnJlbW92ZShlKX0pKX1mdW5jdGlvbiBudCh0LGUsbil7bnx8MD09PXBhcnNlSW50KG4pP3Quc3R5bGVbZV09XCJudW1iZXJcIj09dHlwZW9mIG4/XCJcIi5jb25jYXQobixcInB4XCIpOm46dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShlKX1mdW5jdGlvbiBvdCh0LGUpe3ZhciBuPTE8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09ZT9lOlwiZmxleFwiO3Quc3R5bGUub3BhY2l0eT1cIlwiLHQuc3R5bGUuZGlzcGxheT1ufWZ1bmN0aW9uIGl0KHQpe3Quc3R5bGUub3BhY2l0eT1cIlwiLHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn1mdW5jdGlvbiBydCh0LGUsbil7ZT9vdCh0LG4pOml0KHQpfWZ1bmN0aW9uIGF0KHQpe3JldHVybiEhKHQuc2Nyb2xsSGVpZ2h0PnQuY2xpZW50SGVpZ2h0KX1mdW5jdGlvbiBjdCh0KXt2YXIgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxuPXBhcnNlRmxvYXQoZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIpfHxcIjBcIiksbz1wYXJzZUZsb2F0KGUuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zaXRpb24tZHVyYXRpb25cIil8fFwiMFwiKTtyZXR1cm4gMDxufHwwPG99ZnVuY3Rpb24gc3QodCxlKXt2YXIgbj0xPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWUmJmUsbz1xKCk7dnQobykmJihuJiYoby5zdHlsZS50cmFuc2l0aW9uPVwibm9uZVwiLG8uc3R5bGUud2lkdGg9XCIxMDAlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtvLnN0eWxlLnRyYW5zaXRpb249XCJ3aWR0aCBcIi5jb25jYXQodC8xZTMsXCJzIGxpbmVhclwiKSxvLnN0eWxlLndpZHRoPVwiMCVcIn0sMTApKX1mdW5jdGlvbiB1dCgpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudH1mdW5jdGlvbiBsdCh0KXtzbi5pc1Zpc2libGUoKSYmZnQhPT10LnRhcmdldC52YWx1ZSYmc24ucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpLGZ0PXQudGFyZ2V0LnZhbHVlfWZ1bmN0aW9uIGR0KHQsZSl7dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P2UuYXBwZW5kQ2hpbGQodCk6XCJvYmplY3RcIj09PXIodCk/d3QodCxlKTp0JiZIKGUsdCl9ZnVuY3Rpb24gcHQodCxlKXt2YXIgbj1UKCksbz1FKCksaT1PKCk7ZS5zaG93Q29uZmlybUJ1dHRvbnx8ZS5zaG93Q2FuY2VsQnV0dG9ufHxpdChuKSxOKG4sZSxcImFjdGlvbnNcIikseHQobyxcImNvbmZpcm1cIixlKSx4dChpLFwiY2FuY2VsXCIsZSksZS5idXR0b25zU3R5bGluZz9mdW5jdGlvbih0LGUsbil7bXQoW3QsZV0sWS5zdHlsZWQpLG4uY29uZmlybUJ1dHRvbkNvbG9yJiYodC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9bi5jb25maXJtQnV0dG9uQ29sb3IpO24uY2FuY2VsQnV0dG9uQ29sb3ImJihlLnN0eWxlLmJhY2tncm91bmRDb2xvcj1uLmNhbmNlbEJ1dHRvbkNvbG9yKTt7dmFyIG87UigpfHwobz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZC1jb2xvclwiKSx0LnN0eWxlLmJvcmRlckxlZnRDb2xvcj1vLHQuc3R5bGUuYm9yZGVyUmlnaHRDb2xvcj1vKX19KG8saSxlKTooaHQoW28saV0sWS5zdHlsZWQpLG8uc3R5bGUuYmFja2dyb3VuZENvbG9yPW8uc3R5bGUuYm9yZGVyTGVmdENvbG9yPW8uc3R5bGUuYm9yZGVyUmlnaHRDb2xvcj1cIlwiLGkuc3R5bGUuYmFja2dyb3VuZENvbG9yPWkuc3R5bGUuYm9yZGVyTGVmdENvbG9yPWkuc3R5bGUuYm9yZGVyUmlnaHRDb2xvcj1cIlwiKSxlLnJldmVyc2VCdXR0b25zJiZvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGksbyl9dmFyIGZ0LG10PWZ1bmN0aW9uKHQsZSl7ZXQodCxlLCEwKX0saHQ9ZnVuY3Rpb24odCxlKXtldCh0LGUsITEpfSxndD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj0wO248dC5jaGlsZE5vZGVzLmxlbmd0aDtuKyspaWYoRCh0LmNoaWxkTm9kZXNbbl0sZSkpcmV0dXJuIHQuY2hpbGROb2Rlc1tuXX0sdnQ9ZnVuY3Rpb24odCl7cmV0dXJuISghdHx8ISh0Lm9mZnNldFdpZHRofHx0Lm9mZnNldEhlaWdodHx8dC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpfSxidD0nXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVwiJy5jb25jYXQoWS50aXRsZSwnXCIgYXJpYS1kZXNjcmliZWRieT1cIicpLmNvbmNhdChZLmNvbnRlbnQsJ1wiIGNsYXNzPVwiJykuY29uY2F0KFkucG9wdXAsJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuaGVhZGVyLCdcIj5cXG4gICAgIDx1bCBjbGFzcz1cIicpLmNvbmNhdChZW1wicHJvZ3Jlc3Mtc3RlcHNcIl0sJ1wiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuaWNvbixcIiBcIikuY29uY2F0KFouZXJyb3IsJ1wiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmljb24sXCIgXCIpLmNvbmNhdChaLnF1ZXN0aW9uLCdcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5pY29uLFwiIFwiKS5jb25jYXQoWi53YXJuaW5nLCdcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5pY29uLFwiIFwiKS5jb25jYXQoWi5pbmZvLCdcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5pY29uLFwiIFwiKS5jb25jYXQoWi5zdWNjZXNzLCdcIj48L2Rpdj5cXG4gICAgIDxpbWcgY2xhc3M9XCInKS5jb25jYXQoWS5pbWFnZSwnXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cIicpLmNvbmNhdChZLnRpdGxlLCdcIiBpZD1cIicpLmNvbmNhdChZLnRpdGxlLCdcIj48L2gyPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInKS5jb25jYXQoWS5jbG9zZSwnXCI+PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmNvbnRlbnQsJ1wiPlxcbiAgICAgPGRpdiBpZD1cIicpLmNvbmNhdChZLmNvbnRlbnQsJ1wiIGNsYXNzPVwiJykuY29uY2F0KFlbXCJodG1sLWNvbnRhaW5lclwiXSwnXCI+PC9kaXY+XFxuICAgICA8aW5wdXQgY2xhc3M9XCInKS5jb25jYXQoWS5pbnB1dCwnXCIgLz5cXG4gICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiJykuY29uY2F0KFkuZmlsZSwnXCIgLz5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5yYW5nZSwnXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiAvPlxcbiAgICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPC9kaXY+XFxuICAgICA8c2VsZWN0IGNsYXNzPVwiJykuY29uY2F0KFkuc2VsZWN0LCdcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XCInKS5jb25jYXQoWS5yYWRpbywnXCI+PC9kaXY+XFxuICAgICA8bGFiZWwgZm9yPVwiJykuY29uY2F0KFkuY2hlY2tib3gsJ1wiIGNsYXNzPVwiJykuY29uY2F0KFkuY2hlY2tib3gsJ1wiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cXG4gICAgICAgPHNwYW4gY2xhc3M9XCInKS5jb25jYXQoWS5sYWJlbCwnXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cIicpLmNvbmNhdChZLnRleHRhcmVhLCdcIj48L3RleHRhcmVhPlxcbiAgICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdLCdcIiBpZD1cIicpLmNvbmNhdChZW1widmFsaWRhdGlvbi1tZXNzYWdlXCJdLCdcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFkuYWN0aW9ucywnXCI+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdChZLmNvbmZpcm0sJ1wiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicpLmNvbmNhdChZLmNhbmNlbCwnXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZLmZvb3RlciwnXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicpLmNvbmNhdChZW1widGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lclwiXSwnXCI+XFxuICAgICA8ZGl2IGNsYXNzPVwiJykuY29uY2F0KFlbXCJ0aW1lci1wcm9ncmVzcy1iYXJcIl0sJ1wiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG4nKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLFwiXCIpLHl0PWZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxpLHIsYSxjLHMsdSxsLGQscCxmLG0saCxnPSEhKGU9USgpKSYmKGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSxodChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFtZW1wibm8tYmFja2Ryb3BcIl0sWVtcInRvYXN0LXNob3duXCJdLFlbXCJoYXMtY29sdW1uXCJdXSksITApO3V0KCk/RihcIlN3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemVcIik6KChuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTmFtZT1ZLmNvbnRhaW5lcixnJiZtdChuLFlbXCJuby10cmFuc2l0aW9uXCJdKSxIKG4sYnQpLChvPVwic3RyaW5nXCI9PXR5cGVvZihpPXQudGFyZ2V0KT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkpOmkpLmFwcGVuZENoaWxkKG4pLHI9dCwoYT0kKCkpLnNldEF0dHJpYnV0ZShcInJvbGVcIixyLnRvYXN0P1wiYWxlcnRcIjpcImRpYWxvZ1wiKSxhLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLHIudG9hc3Q/XCJwb2xpdGVcIjpcImFzc2VydGl2ZVwiKSxyLnRvYXN0fHxhLnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIixcInRydWVcIiksYz1vLFwicnRsXCI9PT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjKS5kaXJlY3Rpb24mJm10KFEoKSxZLnJ0bCkscz1QKCksdT1ndChzLFkuaW5wdXQpLGw9Z3QocyxZLmZpbGUpLGQ9cy5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChZLnJhbmdlLFwiIGlucHV0XCIpKSxwPXMucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoWS5yYW5nZSxcIiBvdXRwdXRcIikpLGY9Z3QocyxZLnNlbGVjdCksbT1zLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KFkuY2hlY2tib3gsXCIgaW5wdXRcIikpLGg9Z3QocyxZLnRleHRhcmVhKSx1Lm9uaW5wdXQ9bHQsbC5vbmNoYW5nZT1sdCxmLm9uY2hhbmdlPWx0LG0ub25jaGFuZ2U9bHQsaC5vbmlucHV0PWx0LGQub25pbnB1dD1mdW5jdGlvbih0KXtsdCh0KSxwLnZhbHVlPWQudmFsdWV9LGQub25jaGFuZ2U9ZnVuY3Rpb24odCl7bHQodCksZC5uZXh0U2libGluZy52YWx1ZT1kLnZhbHVlfSl9LHd0PWZ1bmN0aW9uKHQsZSl7dC5qcXVlcnk/Q3QoZSx0KTpIKGUsdC50b1N0cmluZygpKX0sQ3Q9ZnVuY3Rpb24odCxlKXtpZih0LnRleHRDb250ZW50PVwiXCIsMCBpbiBlKWZvcih2YXIgbj0wO24gaW4gZTtuKyspdC5hcHBlbmRDaGlsZChlW25dLmNsb25lTm9kZSghMCkpO2Vsc2UgdC5hcHBlbmRDaGlsZChlLmNsb25lTm9kZSghMCkpfSxrdD1mdW5jdGlvbigpe2lmKHV0KCkpcmV0dXJuITE7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPXtXZWJraXRBbmltYXRpb246XCJ3ZWJraXRBbmltYXRpb25FbmRcIixPQW5pbWF0aW9uOlwib0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kXCIsYW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCJ9O2Zvcih2YXIgbiBpbiBlKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZ2b2lkIDAhPT10LnN0eWxlW25dKXJldHVybiBlW25dO3JldHVybiExfSgpO2Z1bmN0aW9uIHh0KHQsZSxuKXt2YXIgbztydCh0LG5bXCJzaG93XCIuY29uY2F0KChvPWUpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK28uc2xpY2UoMSksXCJCdXR0b25cIildLFwiaW5saW5lLWJsb2NrXCIpLEgodCxuW1wiXCIuY29uY2F0KGUsXCJCdXR0b25UZXh0XCIpXSksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsbltcIlwiLmNvbmNhdChlLFwiQnV0dG9uQXJpYUxhYmVsXCIpXSksdC5jbGFzc05hbWU9WVtlXSxOKHQsbixcIlwiLmNvbmNhdChlLFwiQnV0dG9uXCIpKSxtdCh0LG5bXCJcIi5jb25jYXQoZSxcIkJ1dHRvbkNsYXNzXCIpXSl9ZnVuY3Rpb24gUHQodCxlKXt2YXIgbixvLGkscixhLGMscyx1LGw9USgpO2wmJihuPWwsXCJzdHJpbmdcIj09dHlwZW9mKG89ZS5iYWNrZHJvcCk/bi5zdHlsZS5iYWNrZ3JvdW5kPW86b3x8bXQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxZW1wibm8tYmFja2Ryb3BcIl0pLCFlLmJhY2tkcm9wJiZlLmFsbG93T3V0c2lkZUNsaWNrJiZfKCdcImFsbG93T3V0c2lkZUNsaWNrXCIgcGFyYW1ldGVyIHJlcXVpcmVzIGBiYWNrZHJvcGAgcGFyYW1ldGVyIHRvIGJlIHNldCB0byBgdHJ1ZWAnKSxpPWwsKHI9ZS5wb3NpdGlvbilpbiBZP210KGksWVtyXSk6KF8oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyksbXQoaSxZLmNlbnRlcikpLGE9bCwhKGM9ZS5ncm93KXx8XCJzdHJpbmdcIiE9dHlwZW9mIGN8fChzPVwiZ3Jvdy1cIi5jb25jYXQoYykpaW4gWSYmbXQoYSxZW3NdKSxOKGwsZSxcImNvbnRhaW5lclwiKSwodT1kb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKSkmJihsLnNldEF0dHJpYnV0ZShcImRhdGEtcXVldWUtc3RlcFwiLHUpLGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIpKSl9ZnVuY3Rpb24gQXQodCxlKXt0LnBsYWNlaG9sZGVyJiYhZS5pbnB1dFBsYWNlaG9sZGVyfHwodC5wbGFjZWhvbGRlcj1lLmlucHV0UGxhY2Vob2xkZXIpfXZhciBCdD17cHJvbWlzZTpuZXcgV2Vha01hcCxpbm5lclBhcmFtczpuZXcgV2Vha01hcCxkb21DYWNoZTpuZXcgV2Vha01hcH0sU3Q9W1wiaW5wdXRcIixcImZpbGVcIixcInJhbmdlXCIsXCJzZWxlY3RcIixcInJhZGlvXCIsXCJjaGVja2JveFwiLFwidGV4dGFyZWFcIl0sRXQ9ZnVuY3Rpb24odCl7aWYoIWp0W3QuaW5wdXRdKXJldHVybiBGKCdVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFwidGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJudW1iZXJcIiwgXCJ0ZWxcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwidGV4dGFyZWFcIiwgXCJmaWxlXCIgb3IgXCJ1cmxcIiwgZ290IFwiJy5jb25jYXQodC5pbnB1dCwnXCInKSk7dmFyIGU9THQodC5pbnB1dCksbj1qdFt0LmlucHV0XShlLHQpO290KG4pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0dChuKX0pfSxPdD1mdW5jdGlvbih0LGUpe3ZhciBuPUcoUCgpLHQpO2lmKG4pZm9yKHZhciBvIGluIWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5hdHRyaWJ1dGVzLmxlbmd0aDtlKyspe3ZhciBuPXQuYXR0cmlidXRlc1tlXS5uYW1lOy0xPT09W1widHlwZVwiLFwidmFsdWVcIixcInN0eWxlXCJdLmluZGV4T2YobikmJnQucmVtb3ZlQXR0cmlidXRlKG4pfX0obiksZSlcInJhbmdlXCI9PT10JiZcInBsYWNlaG9sZGVyXCI9PT1vfHxuLnNldEF0dHJpYnV0ZShvLGVbb10pfSxUdD1mdW5jdGlvbih0KXt2YXIgZT1MdCh0LmlucHV0KTt0LmN1c3RvbUNsYXNzJiZtdChlLHQuY3VzdG9tQ2xhc3MuaW5wdXQpfSxMdD1mdW5jdGlvbih0KXt2YXIgZT1ZW3RdP1lbdF06WS5pbnB1dDtyZXR1cm4gZ3QoUCgpLGUpfSxqdD17fTtqdC50ZXh0PWp0LmVtYWlsPWp0LnBhc3N3b3JkPWp0Lm51bWJlcj1qdC50ZWw9anQudXJsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuaW5wdXRWYWx1ZXx8XCJudW1iZXJcIj09dHlwZW9mIGUuaW5wdXRWYWx1ZT90LnZhbHVlPWUuaW5wdXRWYWx1ZTp5KGUuaW5wdXRWYWx1ZSl8fF8oJ1VuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcInN0cmluZ1wiLCBcIm51bWJlclwiIG9yIFwiUHJvbWlzZVwiLCBnb3QgXCInLmNvbmNhdChyKGUuaW5wdXRWYWx1ZSksJ1wiJykpLEF0KHQsZSksdC50eXBlPWUuaW5wdXQsdH0sanQuZmlsZT1mdW5jdGlvbih0LGUpe3JldHVybiBBdCh0LGUpLHR9LGp0LnJhbmdlPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIiksbz10LnF1ZXJ5U2VsZWN0b3IoXCJvdXRwdXRcIik7cmV0dXJuIG4udmFsdWU9ZS5pbnB1dFZhbHVlLG4udHlwZT1lLmlucHV0LG8udmFsdWU9ZS5pbnB1dFZhbHVlLHR9LGp0LnNlbGVjdD1mdW5jdGlvbih0LGUpe3ZhciBuO3JldHVybiB0LnRleHRDb250ZW50PVwiXCIsZS5pbnB1dFBsYWNlaG9sZGVyJiYobj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLEgobixlLmlucHV0UGxhY2Vob2xkZXIpLG4udmFsdWU9XCJcIixuLmRpc2FibGVkPSEwLG4uc2VsZWN0ZWQ9ITAsdC5hcHBlbmRDaGlsZChuKSksdH0sanQucmFkaW89ZnVuY3Rpb24odCl7cmV0dXJuIHQudGV4dENvbnRlbnQ9XCJcIix0fSxqdC5jaGVja2JveD1mdW5jdGlvbih0LGUpe3ZhciBuPUcoUCgpLFwiY2hlY2tib3hcIik7bi52YWx1ZT0xLG4uaWQ9WS5jaGVja2JveCxuLmNoZWNrZWQ9Qm9vbGVhbihlLmlucHV0VmFsdWUpO3ZhciBvPXQucXVlcnlTZWxlY3RvcihcInNwYW5cIik7cmV0dXJuIEgobyxlLmlucHV0UGxhY2Vob2xkZXIpLHR9LGp0LnRleHRhcmVhPWZ1bmN0aW9uKGUsdCl7dmFyIG4sbztyZXR1cm4gZS52YWx1ZT10LmlucHV0VmFsdWUsQXQoZSx0KSxcIk11dGF0aW9uT2JzZXJ2ZXJcImluIHdpbmRvdyYmKG49cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoJCgpKS53aWR0aCksbz1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkKCkpLnBhZGRpbmdMZWZ0KStwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkKCkpLnBhZGRpbmdSaWdodCksbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKXt2YXIgdD1lLm9mZnNldFdpZHRoK287JCgpLnN0eWxlLndpZHRoPW48dD9cIlwiLmNvbmNhdCh0LFwicHhcIik6bnVsbH0pLm9ic2VydmUoZSx7YXR0cmlidXRlczohMCxhdHRyaWJ1dGVGaWx0ZXI6W1wic3R5bGVcIl19KSksZX07ZnVuY3Rpb24gcXQodCxlKXt2YXIgbixvLGkscixhLGM9UCgpLnF1ZXJ5U2VsZWN0b3IoXCIjXCIuY29uY2F0KFkuY29udGVudCkpO2UuaHRtbD8oZHQoZS5odG1sLGMpLG90KGMsXCJibG9ja1wiKSk6ZS50ZXh0PyhjLnRleHRDb250ZW50PWUudGV4dCxvdChjLFwiYmxvY2tcIikpOml0KGMpLG49dCxvPWUsaT1QKCkscj1CdC5pbm5lclBhcmFtcy5nZXQobiksYT0hcnx8by5pbnB1dCE9PXIuaW5wdXQsU3QuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1ZW3RdLG49Z3QoaSxlKTtPdCh0LG8uaW5wdXRBdHRyaWJ1dGVzKSxuLmNsYXNzTmFtZT1lLGEmJml0KG4pfSksby5pbnB1dCYmKGEmJkV0KG8pLFR0KG8pKSxOKFAoKSxlLFwiY29udGVudFwiKX1mdW5jdGlvbiBJdCgpe3JldHVybiBRKCkmJlEoKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXF1ZXVlLXN0ZXBcIil9ZnVuY3Rpb24gVnQodCxzKXt2YXIgdT1CKCk7aWYoIXMucHJvZ3Jlc3NTdGVwc3x8MD09PXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpcmV0dXJuIGl0KHUpLDA7b3QodSksdS50ZXh0Q29udGVudD1cIlwiO3ZhciBsPXBhcnNlSW50KHZvaWQgMD09PXMuY3VycmVudFByb2dyZXNzU3RlcD9JdCgpOnMuY3VycmVudFByb2dyZXNzU3RlcCk7bD49cy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCYmXyhcIkludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMClcIikscy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24odCxlKXt2YXIgbixvLGkscixhLGM9KG49dCxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSxtdChvLFlbXCJwcm9ncmVzcy1zdGVwXCJdKSxIKG8sbiksbyk7dS5hcHBlbmRDaGlsZChjKSxlPT09bCYmbXQoYyxZW1wiYWN0aXZlLXByb2dyZXNzLXN0ZXBcIl0pLGUhPT1zLnByb2dyZXNzU3RlcHMubGVuZ3RoLTEmJihyPXMsYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiksbXQoYSxZW1wicHJvZ3Jlc3Mtc3RlcC1saW5lXCJdKSxyLnByb2dyZXNzU3RlcHNEaXN0YW5jZSYmKGEuc3R5bGUud2lkdGg9ci5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpLGk9YSx1LmFwcGVuZENoaWxkKGkpKX0pfWZ1bmN0aW9uIE10KHQsZSl7dmFyIG4sbyxpLHIsYSxjLHMsdSxsPUwoKTtOKGwsZSxcImhlYWRlclwiKSxWdCgwLGUpLG49dCxvPWUsKHI9QnQuaW5uZXJQYXJhbXMuZ2V0KG4pKSYmby5pY29uPT09ci5pY29uJiZrKCk/TihrKCksbyxcImljb25cIik6KER0KCksby5pY29uJiYoLTEhPT1PYmplY3Qua2V5cyhaKS5pbmRleE9mKG8uaWNvbik/KGk9QyhcIi5cIi5jb25jYXQoWS5pY29uLFwiLlwiKS5jb25jYXQoWltvLmljb25dKSksb3QoaSksVXQoaSxvKSxOdCgpLE4oaSxvLFwiaWNvblwiKSxtdChpLG8uc2hvd0NsYXNzLmljb24pKTpGKCdVbmtub3duIGljb24hIEV4cGVjdGVkIFwic3VjY2Vzc1wiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiBvciBcInF1ZXN0aW9uXCIsIGdvdCBcIicuY29uY2F0KG8uaWNvbiwnXCInKSkpKSxmdW5jdGlvbih0KXt2YXIgZT1BKCk7aWYoIXQuaW1hZ2VVcmwpcmV0dXJuIGl0KGUpO290KGUsXCJcIiksZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0LmltYWdlVXJsKSxlLnNldEF0dHJpYnV0ZShcImFsdFwiLHQuaW1hZ2VBbHQpLG50KGUsXCJ3aWR0aFwiLHQuaW1hZ2VXaWR0aCksbnQoZSxcImhlaWdodFwiLHQuaW1hZ2VIZWlnaHQpLGUuY2xhc3NOYW1lPVkuaW1hZ2UsTihlLHQsXCJpbWFnZVwiKX0oZSksYT1lLGM9eCgpLHJ0KGMsYS50aXRsZXx8YS50aXRsZVRleHQpLGEudGl0bGUmJmR0KGEudGl0bGUsYyksYS50aXRsZVRleHQmJihjLmlubmVyVGV4dD1hLnRpdGxlVGV4dCksTihjLGEsXCJ0aXRsZVwiKSxzPWUsdT1JKCksSCh1LHMuY2xvc2VCdXR0b25IdG1sKSxOKHUscyxcImNsb3NlQnV0dG9uXCIpLHJ0KHUscy5zaG93Q2xvc2VCdXR0b24pLHUuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHMuY2xvc2VCdXR0b25BcmlhTGFiZWwpfWZ1bmN0aW9uIFJ0KHQsZSl7dmFyIG4sbyxpLHI7bj1lLG89JCgpLG50KG8sXCJ3aWR0aFwiLG4ud2lkdGgpLG50KG8sXCJwYWRkaW5nXCIsbi5wYWRkaW5nKSxuLmJhY2tncm91bmQmJihvLnN0eWxlLmJhY2tncm91bmQ9bi5iYWNrZ3JvdW5kKSx6dChvLG4pLFB0KDAsZSksTXQodCxlKSxxdCh0LGUpLHB0KDAsZSksaT1lLHI9aigpLHJ0KHIsaS5mb290ZXIpLGkuZm9vdGVyJiZkdChpLmZvb3RlcixyKSxOKHIsaSxcImZvb3RlclwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uUmVuZGVyJiZlLm9uUmVuZGVyKCQoKSl9ZnVuY3Rpb24gSHQoKXtyZXR1cm4gRSgpJiZFKCkuY2xpY2soKX12YXIgRHQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9bigpLGU9MDtlPHQubGVuZ3RoO2UrKylpdCh0W2VdKX0sTnQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9JCgpLGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCkuZ2V0UHJvcGVydHlWYWx1ZShcImJhY2tncm91bmQtY29sb3JcIiksbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ZX0sVXQ9ZnVuY3Rpb24odCxlKXt0LnRleHRDb250ZW50PVwiXCIsZS5pY29uSHRtbD9IKHQsX3QoZS5pY29uSHRtbCkpOlwic3VjY2Vzc1wiPT09ZS5pY29uP0godCwnXFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XFxuICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLXJpbmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtZml4XCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxcbiAgICAnKTpcImVycm9yXCI9PT1lLmljb24/SCh0LCdcXG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj5cXG4gICAgICA8L3NwYW4+XFxuICAgICcpOkgodCxfdCh7cXVlc3Rpb246XCI/XCIsd2FybmluZzpcIiFcIixpbmZvOlwiaVwifVtlLmljb25dKSl9LF90PWZ1bmN0aW9uKHQpe3JldHVybic8ZGl2IGNsYXNzPVwiJy5jb25jYXQoWVtcImljb24tY29udGVudFwiXSwnXCI+JykuY29uY2F0KHQsXCI8L2Rpdj5cIil9LEZ0PVtdLHp0PWZ1bmN0aW9uKHQsZSl7dC5jbGFzc05hbWU9XCJcIi5jb25jYXQoWS5wb3B1cCxcIiBcIikuY29uY2F0KHZ0KHQpP2Uuc2hvd0NsYXNzLnBvcHVwOlwiXCIpLGUudG9hc3Q/KG10KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZG9jdW1lbnQuYm9keV0sWVtcInRvYXN0LXNob3duXCJdKSxtdCh0LFkudG9hc3QpKTptdCh0LFkubW9kYWwpLE4odCxlLFwicG9wdXBcIiksXCJzdHJpbmdcIj09dHlwZW9mIGUuY3VzdG9tQ2xhc3MmJm10KHQsZS5jdXN0b21DbGFzcyksZS5pY29uJiZtdCh0LFlbXCJpY29uLVwiLmNvbmNhdChlLmljb24pXSl9O2Z1bmN0aW9uIFd0KCl7dmFyIHQ9JCgpO3R8fHNuLmZpcmUoKSx0PSQoKTt2YXIgZT1UKCksbj1FKCk7b3QoZSksb3QobixcImlubGluZS1ibG9ja1wiKSxtdChbdCxlXSxZLmxvYWRpbmcpLG4uZGlzYWJsZWQ9ITAsdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIiwhMCksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiwhMCksdC5mb2N1cygpfWZ1bmN0aW9uIEt0KCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQpe3ZhciBlPXdpbmRvdy5zY3JvbGxYLG49d2luZG93LnNjcm9sbFk7WHQucmVzdG9yZUZvY3VzVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7WHQucHJldmlvdXNBY3RpdmVFbGVtZW50JiZYdC5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXM/KFh0LnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpLFh0LnByZXZpb3VzQWN0aXZlRWxlbWVudD1udWxsKTpkb2N1bWVudC5ib2R5JiZkb2N1bWVudC5ib2R5LmZvY3VzKCksdCgpfSwxMDApLHZvaWQgMCE9PWUmJnZvaWQgMCE9PW4mJndpbmRvdy5zY3JvbGxUbyhlLG4pfSl9ZnVuY3Rpb24gWXQoKXtpZihYdC50aW1lb3V0KXJldHVybiBmdW5jdGlvbigpe3ZhciB0PXEoKSxlPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLndpZHRoKTt0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKSx0LnN0eWxlLndpZHRoPVwiMTAwJVwiO3ZhciBuPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLndpZHRoKSxvPXBhcnNlSW50KGUvbioxMDApO3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpLHQuc3R5bGUud2lkdGg9XCJcIi5jb25jYXQobyxcIiVcIil9KCksWHQudGltZW91dC5zdG9wKCl9ZnVuY3Rpb24gWnQoKXtpZihYdC50aW1lb3V0KXt2YXIgdD1YdC50aW1lb3V0LnN0YXJ0KCk7cmV0dXJuIHN0KHQpLHR9fWZ1bmN0aW9uIFF0KHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoR3QsdCl9ZnVuY3Rpb24gJHQodCl7cmV0dXJuIGVlW3RdfWZ1bmN0aW9uIEp0KHQpe2Zvcih2YXIgZSBpbiB0KVF0KGk9ZSl8fF8oJ1Vua25vd24gcGFyYW1ldGVyIFwiJy5jb25jYXQoaSwnXCInKSksdC50b2FzdCYmKG89ZSwtMSE9PW5lLmluZGV4T2YobykmJl8oJ1RoZSBwYXJhbWV0ZXIgXCInLmNvbmNhdChvLCdcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHMnKSkpLCR0KG49ZSkmJmcobiwkdChuKSk7dmFyIG4sbyxpfXZhciBYdD17fSxHdD17dGl0bGU6XCJcIix0aXRsZVRleHQ6XCJcIix0ZXh0OlwiXCIsaHRtbDpcIlwiLGZvb3RlcjpcIlwiLGljb246dm9pZCAwLGljb25IdG1sOnZvaWQgMCx0b2FzdDohMSxhbmltYXRpb246ITAsc2hvd0NsYXNzOntwb3B1cDpcInN3YWwyLXNob3dcIixiYWNrZHJvcDpcInN3YWwyLWJhY2tkcm9wLXNob3dcIixpY29uOlwic3dhbDItaWNvbi1zaG93XCJ9LGhpZGVDbGFzczp7cG9wdXA6XCJzd2FsMi1oaWRlXCIsYmFja2Ryb3A6XCJzd2FsMi1iYWNrZHJvcC1oaWRlXCIsaWNvbjpcInN3YWwyLWljb24taGlkZVwifSxjdXN0b21DbGFzczp2b2lkIDAsdGFyZ2V0OlwiYm9keVwiLGJhY2tkcm9wOiEwLGhlaWdodEF1dG86ITAsYWxsb3dPdXRzaWRlQ2xpY2s6ITAsYWxsb3dFc2NhcGVLZXk6ITAsYWxsb3dFbnRlcktleTohMCxzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiEwLGtleWRvd25MaXN0ZW5lckNhcHR1cmU6ITEsc2hvd0NvbmZpcm1CdXR0b246ITAsc2hvd0NhbmNlbEJ1dHRvbjohMSxwcmVDb25maXJtOnZvaWQgMCxjb25maXJtQnV0dG9uVGV4dDpcIk9LXCIsY29uZmlybUJ1dHRvbkFyaWFMYWJlbDpcIlwiLGNvbmZpcm1CdXR0b25Db2xvcjp2b2lkIDAsY2FuY2VsQnV0dG9uVGV4dDpcIkNhbmNlbFwiLGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDpcIlwiLGNhbmNlbEJ1dHRvbkNvbG9yOnZvaWQgMCxidXR0b25zU3R5bGluZzohMCxyZXZlcnNlQnV0dG9uczohMSxmb2N1c0NvbmZpcm06ITAsZm9jdXNDYW5jZWw6ITEsc2hvd0Nsb3NlQnV0dG9uOiExLGNsb3NlQnV0dG9uSHRtbDpcIiZ0aW1lcztcIixjbG9zZUJ1dHRvbkFyaWFMYWJlbDpcIkNsb3NlIHRoaXMgZGlhbG9nXCIsc2hvd0xvYWRlck9uQ29uZmlybTohMSxpbWFnZVVybDp2b2lkIDAsaW1hZ2VXaWR0aDp2b2lkIDAsaW1hZ2VIZWlnaHQ6dm9pZCAwLGltYWdlQWx0OlwiXCIsdGltZXI6dm9pZCAwLHRpbWVyUHJvZ3Jlc3NCYXI6ITEsd2lkdGg6dm9pZCAwLHBhZGRpbmc6dm9pZCAwLGJhY2tncm91bmQ6dm9pZCAwLGlucHV0OnZvaWQgMCxpbnB1dFBsYWNlaG9sZGVyOlwiXCIsaW5wdXRWYWx1ZTpcIlwiLGlucHV0T3B0aW9uczp7fSxpbnB1dEF1dG9UcmltOiEwLGlucHV0QXR0cmlidXRlczp7fSxpbnB1dFZhbGlkYXRvcjp2b2lkIDAsdmFsaWRhdGlvbk1lc3NhZ2U6dm9pZCAwLGdyb3c6ITEscG9zaXRpb246XCJjZW50ZXJcIixwcm9ncmVzc1N0ZXBzOltdLGN1cnJlbnRQcm9ncmVzc1N0ZXA6dm9pZCAwLHByb2dyZXNzU3RlcHNEaXN0YW5jZTp2b2lkIDAsb25CZWZvcmVPcGVuOnZvaWQgMCxvbk9wZW46dm9pZCAwLG9uUmVuZGVyOnZvaWQgMCxvbkNsb3NlOnZvaWQgMCxvbkFmdGVyQ2xvc2U6dm9pZCAwLG9uRGVzdHJveTp2b2lkIDAsc2Nyb2xsYmFyUGFkZGluZzohMH0sdGU9W1wiYWxsb3dFc2NhcGVLZXlcIixcImFsbG93T3V0c2lkZUNsaWNrXCIsXCJidXR0b25zU3R5bGluZ1wiLFwiY2FuY2VsQnV0dG9uQXJpYUxhYmVsXCIsXCJjYW5jZWxCdXR0b25Db2xvclwiLFwiY2FuY2VsQnV0dG9uVGV4dFwiLFwiY2xvc2VCdXR0b25BcmlhTGFiZWxcIixcImNsb3NlQnV0dG9uSHRtbFwiLFwiY29uZmlybUJ1dHRvbkFyaWFMYWJlbFwiLFwiY29uZmlybUJ1dHRvbkNvbG9yXCIsXCJjb25maXJtQnV0dG9uVGV4dFwiLFwiY3VycmVudFByb2dyZXNzU3RlcFwiLFwiY3VzdG9tQ2xhc3NcIixcImZvb3RlclwiLFwiaGlkZUNsYXNzXCIsXCJodG1sXCIsXCJpY29uXCIsXCJpbWFnZUFsdFwiLFwiaW1hZ2VIZWlnaHRcIixcImltYWdlVXJsXCIsXCJpbWFnZVdpZHRoXCIsXCJvbkFmdGVyQ2xvc2VcIixcIm9uQ2xvc2VcIixcIm9uRGVzdHJveVwiLFwicHJvZ3Jlc3NTdGVwc1wiLFwicmV2ZXJzZUJ1dHRvbnNcIixcInNob3dDYW5jZWxCdXR0b25cIixcInNob3dDbG9zZUJ1dHRvblwiLFwic2hvd0NvbmZpcm1CdXR0b25cIixcInRleHRcIixcInRpdGxlXCIsXCJ0aXRsZVRleHRcIl0sZWU9e2FuaW1hdGlvbjonc2hvd0NsYXNzXCIgYW5kIFwiaGlkZUNsYXNzJ30sbmU9W1wiYWxsb3dPdXRzaWRlQ2xpY2tcIixcImFsbG93RW50ZXJLZXlcIixcImJhY2tkcm9wXCIsXCJmb2N1c0NvbmZpcm1cIixcImZvY3VzQ2FuY2VsXCIsXCJoZWlnaHRBdXRvXCIsXCJrZXlkb3duTGlzdGVuZXJDYXB0dXJlXCJdLG9lPU9iamVjdC5mcmVlemUoe2lzVmFsaWRQYXJhbWV0ZXI6UXQsaXNVcGRhdGFibGVQYXJhbWV0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuLTEhPT10ZS5pbmRleE9mKHQpfSxpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6JHQsYXJnc1RvUGFyYW1zOmZ1bmN0aW9uKG8pe3ZhciBpPXt9O3JldHVyblwib2JqZWN0XCIhPT1yKG9bMF0pfHx3KG9bMF0pP1tcInRpdGxlXCIsXCJodG1sXCIsXCJpY29uXCJdLmZvckVhY2goZnVuY3Rpb24odCxlKXt2YXIgbj1vW2VdO1wic3RyaW5nXCI9PXR5cGVvZiBufHx3KG4pP2lbdF09bjp2b2lkIDAhPT1uJiZGKFwiVW5leHBlY3RlZCB0eXBlIG9mIFwiLmNvbmNhdCh0LCchIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJFbGVtZW50XCIsIGdvdCAnKS5jb25jYXQocihuKSkpfSk6cyhpLG9bMF0pLGl9LGlzVmlzaWJsZTpmdW5jdGlvbigpe3JldHVybiB2dCgkKCkpfSxjbGlja0NvbmZpcm06SHQsY2xpY2tDYW5jZWw6ZnVuY3Rpb24oKXtyZXR1cm4gTygpJiZPKCkuY2xpY2soKX0sZ2V0Q29udGFpbmVyOlEsZ2V0UG9wdXA6JCxnZXRUaXRsZTp4LGdldENvbnRlbnQ6UCxnZXRIdG1sQ29udGFpbmVyOmZ1bmN0aW9uKCl7cmV0dXJuIGUoWVtcImh0bWwtY29udGFpbmVyXCJdKX0sZ2V0SW1hZ2U6QSxnZXRJY29uOmssZ2V0SWNvbnM6bixnZXRDbG9zZUJ1dHRvbjpJLGdldEFjdGlvbnM6VCxnZXRDb25maXJtQnV0dG9uOkUsZ2V0Q2FuY2VsQnV0dG9uOk8sZ2V0SGVhZGVyOkwsZ2V0Rm9vdGVyOmosZ2V0VGltZXJQcm9ncmVzc0JhcjpxLGdldEZvY3VzYWJsZUVsZW1lbnRzOlYsZ2V0VmFsaWRhdGlvbk1lc3NhZ2U6Uyxpc0xvYWRpbmc6UixmaXJlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksbj0wO248dDtuKyspZVtuXT1hcmd1bWVudHNbbl07cmV0dXJuIGkodGhpcyxlKX0sbWl4aW46ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmbCh0LGUpfShpLHQpO3ZhciBuLG8sZT0obj1pLG89ZCgpLGZ1bmN0aW9uKCl7dmFyIHQsZT11KG4pO3JldHVybiBwKHRoaXMsbz8odD11KHRoaXMpLmNvbnN0cnVjdG9yLFJlZmxlY3QuY29uc3RydWN0KGUsYXJndW1lbnRzLHQpKTplLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KTtmdW5jdGlvbiBpKCl7cmV0dXJuIGEodGhpcyxpKSxlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gYyhpLFt7a2V5OlwiX21haW5cIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZih1KGkucHJvdG90eXBlKSxcIl9tYWluXCIsdGhpcykuY2FsbCh0aGlzLHMoe30scix0KSl9fV0pLGl9KHRoaXMpfSxxdWV1ZTpmdW5jdGlvbih0KXt2YXIgcj10aGlzO0Z0PXQ7ZnVuY3Rpb24gYSh0LGUpe0Z0PVtdLHQoZSl9dmFyIGM9W107cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGkpeyFmdW5jdGlvbiBlKG4sbyl7bjxGdC5sZW5ndGg/KGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIsbiksci5maXJlKEZ0W25dKS50aGVuKGZ1bmN0aW9uKHQpe3ZvaWQgMCE9PXQudmFsdWU/KGMucHVzaCh0LnZhbHVlKSxlKG4rMSxvKSk6YShpLHtkaXNtaXNzOnQuZGlzbWlzc30pfSkpOmEoaSx7dmFsdWU6Y30pfSgwKX0pfSxnZXRRdWV1ZVN0ZXA6SXQsaW5zZXJ0UXVldWVTdGVwOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUmJmU8RnQubGVuZ3RoP0Z0LnNwbGljZShlLDAsdCk6RnQucHVzaCh0KX0sZGVsZXRlUXVldWVTdGVwOmZ1bmN0aW9uKHQpe3ZvaWQgMCE9PUZ0W3RdJiZGdC5zcGxpY2UodCwxKX0sc2hvd0xvYWRpbmc6V3QsZW5hYmxlTG9hZGluZzpXdCxnZXRUaW1lckxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gWHQudGltZW91dCYmWHQudGltZW91dC5nZXRUaW1lckxlZnQoKX0sc3RvcFRpbWVyOll0LHJlc3VtZVRpbWVyOlp0LHRvZ2dsZVRpbWVyOmZ1bmN0aW9uKCl7dmFyIHQ9WHQudGltZW91dDtyZXR1cm4gdCYmKHQucnVubmluZz9ZdDpadCkoKX0saW5jcmVhc2VUaW1lcjpmdW5jdGlvbih0KXtpZihYdC50aW1lb3V0KXt2YXIgZT1YdC50aW1lb3V0LmluY3JlYXNlKHQpO3JldHVybiBzdChlLCEwKSxlfX0saXNUaW1lclJ1bm5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gWHQudGltZW91dCYmWHQudGltZW91dC5pc1J1bm5pbmcoKX19KTtmdW5jdGlvbiBpZSgpe3ZhciB0LGU9QnQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO2UmJih0PUJ0LmRvbUNhY2hlLmdldCh0aGlzKSxlLnNob3dDb25maXJtQnV0dG9ufHwoaXQodC5jb25maXJtQnV0dG9uKSxlLnNob3dDYW5jZWxCdXR0b258fGl0KHQuYWN0aW9ucykpLGh0KFt0LnBvcHVwLHQuYWN0aW9uc10sWS5sb2FkaW5nKSx0LnBvcHVwLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtYnVzeVwiKSx0LnBvcHVwLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbG9hZGluZ1wiKSx0LmNvbmZpcm1CdXR0b24uZGlzYWJsZWQ9ITEsdC5jYW5jZWxCdXR0b24uZGlzYWJsZWQ9ITEpfWZ1bmN0aW9uIHJlKCl7bnVsbD09PVgucHJldmlvdXNCb2R5UGFkZGluZyYmZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ+d2luZG93LmlubmVySGVpZ2h0JiYoWC5wcmV2aW91c0JvZHlQYWRkaW5nPXBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpKSxkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodD1cIlwiLmNvbmNhdChYLnByZXZpb3VzQm9keVBhZGRpbmcrZnVuY3Rpb24oKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NOYW1lPVlbXCJzY3JvbGxiYXItbWVhc3VyZVwiXSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpO3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgtdC5jbGllbnRXaWR0aDtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0KSxlfSgpLFwicHhcIikpfWZ1bmN0aW9uIGFlKCl7cmV0dXJuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfWZ1bmN0aW9uIGNlKCl7dmFyIHQ9USgpLGU9JCgpO3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJhbGlnbi1pdGVtc1wiKSxlLm9mZnNldFRvcDwwJiYodC5zdHlsZS5hbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiKX12YXIgc2U9ZnVuY3Rpb24oKXtuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oQ3JpT1N8RnhpT1N8RWRnaU9TfFlhQnJvd3NlcnxVQ0Jyb3dzZXIpL2kpfHwkKCkuc2Nyb2xsSGVpZ2h0PndpbmRvdy5pbm5lckhlaWdodC00NCYmKFEoKS5zdHlsZS5wYWRkaW5nQm90dG9tPVwiXCIuY29uY2F0KDQ0LFwicHhcIikpfSx1ZT1mdW5jdGlvbigpe3ZhciBlLHQ9USgpO3Qub250b3VjaHN0YXJ0PWZ1bmN0aW9uKHQpe2U9bGUodC50YXJnZXQpfSx0Lm9udG91Y2htb3ZlPWZ1bmN0aW9uKHQpe2UmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSl9fSxsZT1mdW5jdGlvbih0KXt2YXIgZT1RKCk7cmV0dXJuIHQ9PT1lfHwhKGF0KGUpfHxcIklOUFVUXCI9PT10LnRhZ05hbWV8fGF0KFAoKSkmJlAoKS5jb250YWlucyh0KSl9LGRlPXtzd2FsUHJvbWlzZVJlc29sdmU6bmV3IFdlYWtNYXB9O2Z1bmN0aW9uIHBlKHQsZSxuLG8pe3ZhciBpO24/aGUodCxvKTooS3QoKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGhlKHQsbyl9KSxYdC5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsWHQua2V5ZG93bkhhbmRsZXIse2NhcHR1cmU6WHQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZX0pLFh0LmtleWRvd25IYW5kbGVyQWRkZWQ9ITEpLGUucGFyZW50Tm9kZSYmIWRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIpJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksTSgpJiYobnVsbCE9PVgucHJldmlvdXNCb2R5UGFkZGluZyYmKGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PVwiXCIuY29uY2F0KFgucHJldmlvdXNCb2R5UGFkZGluZyxcInB4XCIpLFgucHJldmlvdXNCb2R5UGFkZGluZz1udWxsKSxEKGRvY3VtZW50LmJvZHksWS5pb3NmaXgpJiYoaT1wYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwxMCksaHQoZG9jdW1lbnQuYm9keSxZLmlvc2ZpeCksZG9jdW1lbnQuYm9keS5zdHlsZS50b3A9XCJcIixkb2N1bWVudC5ib2R5LnNjcm9sbFRvcD0tMSppKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZhZSgpJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGNlKSxoKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24odCl7dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIpPyh0LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIpKSx0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW5cIikpOnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIil9KSksaHQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxbWS5zaG93bixZW1wiaGVpZ2h0LWF1dG9cIl0sWVtcIm5vLWJhY2tkcm9wXCJdLFlbXCJ0b2FzdC1zaG93blwiXSxZW1widG9hc3QtY29sdW1uXCJdXSl9ZnVuY3Rpb24gZmUodCl7dmFyIGUsbixvLGk9JCgpO2kmJihlPUJ0LmlubmVyUGFyYW1zLmdldCh0aGlzKSkmJiFEKGksZS5oaWRlQ2xhc3MucG9wdXApJiYobj1kZS5zd2FsUHJvbWlzZVJlc29sdmUuZ2V0KHRoaXMpLGh0KGksZS5zaG93Q2xhc3MucG9wdXApLG10KGksZS5oaWRlQ2xhc3MucG9wdXApLG89USgpLGh0KG8sZS5zaG93Q2xhc3MuYmFja2Ryb3ApLG10KG8sZS5oaWRlQ2xhc3MuYmFja2Ryb3ApLGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1RKCksaT1rdCYmY3QoZSkscj1uLm9uQ2xvc2UsYT1uLm9uQWZ0ZXJDbG9zZTtpZihyIT09bnVsbCYmdHlwZW9mIHI9PT1cImZ1bmN0aW9uXCIpe3IoZSl9aWYoaSl7bWUodCxlLG8sYSl9ZWxzZXtwZSh0LG8sSigpLGEpfX0odGhpcyxpLGUpLHZvaWQgMCE9PXQ/KHQuaXNEaXNtaXNzZWQ9dm9pZCAwIT09dC5kaXNtaXNzLHQuaXNDb25maXJtZWQ9dm9pZCAwPT09dC5kaXNtaXNzKTp0PXtpc0Rpc21pc3NlZDohMCxpc0NvbmZpcm1lZDohMX0sbih0fHx7fSkpfXZhciBtZT1mdW5jdGlvbih0LGUsbixvKXtYdC5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s9cGUuYmluZChudWxsLHQsbixKKCksbyksZS5hZGRFdmVudExpc3RlbmVyKGt0LGZ1bmN0aW9uKHQpe3QudGFyZ2V0PT09ZSYmKFh0LnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpLGRlbGV0ZSBYdC5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spfSl9LGhlPWZ1bmN0aW9uKHQsZSl7c2V0VGltZW91dChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSx0Ll9kZXN0cm95KCl9KX07ZnVuY3Rpb24gZ2UodCxlLG4pe3ZhciBvPUJ0LmRvbUNhY2hlLmdldCh0KTtlLmZvckVhY2goZnVuY3Rpb24odCl7b1t0XS5kaXNhYmxlZD1ufSl9ZnVuY3Rpb24gdmUodCxlKXtpZighdClyZXR1cm4hMTtpZihcInJhZGlvXCI9PT10LnR5cGUpZm9yKHZhciBuPXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5kaXNhYmxlZD1lO2Vsc2UgdC5kaXNhYmxlZD1lfXZhciBiZT1mdW5jdGlvbigpe2Z1bmN0aW9uIG4odCxlKXthKHRoaXMsbiksdGhpcy5jYWxsYmFjaz10LHRoaXMucmVtYWluaW5nPWUsdGhpcy5ydW5uaW5nPSExLHRoaXMuc3RhcnQoKX1yZXR1cm4gYyhuLFt7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmd8fCh0aGlzLnJ1bm5pbmc9ITAsdGhpcy5zdGFydGVkPW5ldyBEYXRlLHRoaXMuaWQ9c2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLHRoaXMucmVtYWluaW5nKSksdGhpcy5yZW1haW5pbmd9fSx7a2V5Olwic3RvcFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZyYmKHRoaXMucnVubmluZz0hMSxjbGVhclRpbWVvdXQodGhpcy5pZCksdGhpcy5yZW1haW5pbmctPW5ldyBEYXRlLXRoaXMuc3RhcnRlZCksdGhpcy5yZW1haW5pbmd9fSx7a2V5OlwiaW5jcmVhc2VcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnJ1bm5pbmc7cmV0dXJuIGUmJnRoaXMuc3RvcCgpLHRoaXMucmVtYWluaW5nKz10LGUmJnRoaXMuc3RhcnQoKSx0aGlzLnJlbWFpbmluZ319LHtrZXk6XCJnZXRUaW1lckxlZnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJ1bm5pbmcmJih0aGlzLnN0b3AoKSx0aGlzLnN0YXJ0KCkpLHRoaXMucmVtYWluaW5nfX0se2tleTpcImlzUnVubmluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucnVubmluZ319XSksbn0oKSx5ZT17ZW1haWw6ZnVuY3Rpb24odCxlKXtyZXR1cm4vXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHQpP1Byb21pc2UucmVzb2x2ZSgpOlByb21pc2UucmVzb2x2ZShlfHxcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiKX0sdXJsOmZ1bmN0aW9uKHQsZSl7cmV0dXJuL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdCh0KT9Qcm9taXNlLnJlc29sdmUoKTpQcm9taXNlLnJlc29sdmUoZXx8XCJJbnZhbGlkIFVSTFwiKX19O2Z1bmN0aW9uIHdlKHQpe3ZhciBlLG47KGU9dCkuaW5wdXRWYWxpZGF0b3J8fE9iamVjdC5rZXlzKHllKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuaW5wdXQ9PT10JiYoZS5pbnB1dFZhbGlkYXRvcj15ZVt0XSl9KSx0LnNob3dMb2FkZXJPbkNvbmZpcm0mJiF0LnByZUNvbmZpcm0mJl8oXCJzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG5zaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdFwiKSx0LmFuaW1hdGlvbj1XKHQuYW5pbWF0aW9uKSwobj10KS50YXJnZXQmJihcInN0cmluZ1wiIT10eXBlb2Ygbi50YXJnZXR8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobi50YXJnZXQpKSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuLnRhcmdldHx8bi50YXJnZXQuYXBwZW5kQ2hpbGQpfHwoXygnVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKSxuLnRhcmdldD1cImJvZHlcIiksXCJzdHJpbmdcIj09dHlwZW9mIHQudGl0bGUmJih0LnRpdGxlPXQudGl0bGUuc3BsaXQoXCJcXG5cIikuam9pbihcIjxiciAvPlwiKSkseXQodCl9ZnVuY3Rpb24gQ2UodCl7dmFyIGU9USgpLG49JCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQub25CZWZvcmVPcGVuJiZ0Lm9uQmVmb3JlT3BlbihuKTt2YXIgbz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5vdmVyZmxvd1k7amUoZSxuLHQpLFRlKGUsbiksTSgpJiYoTGUoZSx0LnNjcm9sbGJhclBhZGRpbmcsbyksaChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3Q9PT1RKCl8fGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb250YWlucylyZXR1cm4gdC5jb250YWlucyhlKX0odCxRKCkpfHwodC5oYXNBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuXCIsdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSl9KSksSigpfHxYdC5wcmV2aW91c0FjdGl2ZUVsZW1lbnR8fChYdC5wcmV2aW91c0FjdGl2ZUVsZW1lbnQ9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXCJmdW5jdGlvblwiPT10eXBlb2YgdC5vbk9wZW4mJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gdC5vbk9wZW4obil9KSxodChlLFlbXCJuby10cmFuc2l0aW9uXCJdKX1mdW5jdGlvbiBrZSh0KXt2YXIgZSxuPSQoKTt0LnRhcmdldD09PW4mJihlPVEoKSxuLnJlbW92ZUV2ZW50TGlzdGVuZXIoa3Qsa2UpLGUuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wiKX1mdW5jdGlvbiB4ZSh0LGUpe1wic2VsZWN0XCI9PT1lLmlucHV0fHxcInJhZGlvXCI9PT1lLmlucHV0P01lKHQsZSk6LTEhPT1bXCJ0ZXh0XCIsXCJlbWFpbFwiLFwibnVtYmVyXCIsXCJ0ZWxcIixcInRleHRhcmVhXCJdLmluZGV4T2YoZS5pbnB1dCkmJih2KGUuaW5wdXRWYWx1ZSl8fHkoZS5pbnB1dFZhbHVlKSkmJlJlKHQsZSl9ZnVuY3Rpb24gUGUodCxlKXt0LmRpc2FibGVCdXR0b25zKCksZS5pbnB1dD9OZSh0LGUpOlVlKHQsZSwhMCl9ZnVuY3Rpb24gQWUodCxlKXt0LmRpc2FibGVCdXR0b25zKCksZShLLmNhbmNlbCl9ZnVuY3Rpb24gQmUodCxlKXt0LmNsb3NlUG9wdXAoe3ZhbHVlOmV9KX1mdW5jdGlvbiBTZShlLHQsbixvKXt0LmtleWRvd25UYXJnZXQmJnQua2V5ZG93bkhhbmRsZXJBZGRlZCYmKHQua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQua2V5ZG93bkhhbmRsZXIse2NhcHR1cmU6dC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlfSksdC5rZXlkb3duSGFuZGxlckFkZGVkPSExKSxuLnRvYXN0fHwodC5rZXlkb3duSGFuZGxlcj1mdW5jdGlvbih0KXtyZXR1cm4gemUoZSx0LG8pfSx0LmtleWRvd25UYXJnZXQ9bi5rZXlkb3duTGlzdGVuZXJDYXB0dXJlP3dpbmRvdzokKCksdC5rZXlkb3duTGlzdGVuZXJDYXB0dXJlPW4ua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSx0LmtleWRvd25UYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0LmtleWRvd25IYW5kbGVyLHtjYXB0dXJlOnQua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZX0pLHQua2V5ZG93bkhhbmRsZXJBZGRlZD0hMCl9ZnVuY3Rpb24gRWUodCxlLG4pe3ZhciBvPVYoKSxpPTA7aWYoaTxvLmxlbmd0aClyZXR1cm4oZSs9bik9PT1vLmxlbmd0aD9lPTA6LTE9PT1lJiYoZT1vLmxlbmd0aC0xKSxvW2VdLmZvY3VzKCk7JCgpLmZvY3VzKCl9ZnVuY3Rpb24gT2UodCxlLG4pe0J0LmlubmVyUGFyYW1zLmdldCh0KS50b2FzdD9RZSh0LGUsbik6KEplKGUpLFhlKGUpLEdlKHQsZSxuKSl9dmFyIFRlPWZ1bmN0aW9uKHQsZSl7a3QmJmN0KGUpPyh0LnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLGUuYWRkRXZlbnRMaXN0ZW5lcihrdCxrZSkpOnQuc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wifSxMZT1mdW5jdGlvbih0LGUsbil7dmFyIG87KC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhd2luZG93Lk1TU3RyZWFtfHxcIk1hY0ludGVsXCI9PT1uYXZpZ2F0b3IucGxhdGZvcm0mJjE8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSYmIUQoZG9jdW1lbnQuYm9keSxZLmlvc2ZpeCkmJihvPWRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPVwiXCIuY29uY2F0KC0xKm8sXCJweFwiKSxtdChkb2N1bWVudC5ib2R5LFkuaW9zZml4KSx1ZSgpLHNlKCkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJmFlKCkmJihjZSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsY2UpKSxlJiZcImhpZGRlblwiIT09biYmcmUoKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5zY3JvbGxUb3A9MH0pfSxqZT1mdW5jdGlvbih0LGUsbil7bXQodCxuLnNob3dDbGFzcy5iYWNrZHJvcCksb3QoZSksbXQoZSxuLnNob3dDbGFzcy5wb3B1cCksbXQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCxkb2N1bWVudC5ib2R5XSxZLnNob3duKSxuLmhlaWdodEF1dG8mJm4uYmFja2Ryb3AmJiFuLnRvYXN0JiZtdChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGRvY3VtZW50LmJvZHldLFlbXCJoZWlnaHQtYXV0b1wiXSl9LHFlPWZ1bmN0aW9uKHQpe3JldHVybiB0LmNoZWNrZWQ/MTowfSxJZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5jaGVja2VkP3QudmFsdWU6bnVsbH0sVmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQuZmlsZXMubGVuZ3RoP251bGwhPT10LmdldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIpP3QuZmlsZXM6dC5maWxlc1swXTpudWxsfSxNZT1mdW5jdGlvbihlLG4pe2Z1bmN0aW9uIG8odCl7cmV0dXJuIEhlW24uaW5wdXRdKGksRGUodCksbil9dmFyIGk9UCgpO3Yobi5pbnB1dE9wdGlvbnMpfHx5KG4uaW5wdXRPcHRpb25zKT8oV3QoKSxiKG4uaW5wdXRPcHRpb25zKS50aGVuKGZ1bmN0aW9uKHQpe2UuaGlkZUxvYWRpbmcoKSxvKHQpfSkpOlwib2JqZWN0XCI9PT1yKG4uaW5wdXRPcHRpb25zKT9vKG4uaW5wdXRPcHRpb25zKTpGKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290IFwiLmNvbmNhdChyKG4uaW5wdXRPcHRpb25zKSkpfSxSZT1mdW5jdGlvbihlLG4pe3ZhciBvPWUuZ2V0SW5wdXQoKTtpdChvKSxiKG4uaW5wdXRWYWx1ZSkudGhlbihmdW5jdGlvbih0KXtvLnZhbHVlPVwibnVtYmVyXCI9PT1uLmlucHV0P3BhcnNlRmxvYXQodCl8fDA6XCJcIi5jb25jYXQodCksb3Qobyksby5mb2N1cygpLGUuaGlkZUxvYWRpbmcoKX0pLmNhdGNoKGZ1bmN0aW9uKHQpe0YoXCJFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6IFwiLmNvbmNhdCh0KSksby52YWx1ZT1cIlwiLG90KG8pLG8uZm9jdXMoKSxlLmhpZGVMb2FkaW5nKCl9KX0sSGU9e3NlbGVjdDpmdW5jdGlvbih0LGUsaSl7ZnVuY3Rpb24gcih0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtvLnZhbHVlPW4sSChvLGUpLGkuaW5wdXRWYWx1ZS50b1N0cmluZygpPT09bi50b1N0cmluZygpJiYoby5zZWxlY3RlZD0hMCksdC5hcHBlbmRDaGlsZChvKX12YXIgYT1ndCh0LFkuc2VsZWN0KTtlLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGUsbj10WzBdLG89dFsxXTtBcnJheS5pc0FycmF5KG8pPygoZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIikpLmxhYmVsPW4sZS5kaXNhYmxlZD0hMSxhLmFwcGVuZENoaWxkKGUpLG8uZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gcihlLHRbMV0sdFswXSl9KSk6cihhLG8sbil9KSxhLmZvY3VzKCl9LHJhZGlvOmZ1bmN0aW9uKHQsZSxhKXt2YXIgYz1ndCh0LFkucmFkaW8pO2UuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT10WzBdLG49dFsxXSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtvLnR5cGU9XCJyYWRpb1wiLG8ubmFtZT1ZLnJhZGlvLG8udmFsdWU9ZSxhLmlucHV0VmFsdWUudG9TdHJpbmcoKT09PWUudG9TdHJpbmcoKSYmKG8uY2hlY2tlZD0hMCk7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7SChyLG4pLHIuY2xhc3NOYW1lPVkubGFiZWwsaS5hcHBlbmRDaGlsZChvKSxpLmFwcGVuZENoaWxkKHIpLGMuYXBwZW5kQ2hpbGQoaSl9KTt2YXIgbj1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtuLmxlbmd0aCYmblswXS5mb2N1cygpfX0sRGU9ZnVuY3Rpb24gbyhuKXt2YXIgaT1bXTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwJiZuIGluc3RhbmNlb2YgTWFwP24uZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciBuPXQ7XCJvYmplY3RcIj09PXIobikmJihuPW8obikpLGkucHVzaChbZSxuXSl9KTpPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPW5bdF07XCJvYmplY3RcIj09PXIoZSkmJihlPW8oZSkpLGkucHVzaChbdCxlXSl9KSxpfSxOZT1mdW5jdGlvbihlLG4pe3ZhciBvPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5nZXRJbnB1dCgpO2lmKCFuKXJldHVybiBudWxsO3N3aXRjaChlLmlucHV0KXtjYXNlXCJjaGVja2JveFwiOnJldHVybiBxZShuKTtjYXNlXCJyYWRpb1wiOnJldHVybiBJZShuKTtjYXNlXCJmaWxlXCI6cmV0dXJuIFZlKG4pO2RlZmF1bHQ6cmV0dXJuIGUuaW5wdXRBdXRvVHJpbT9uLnZhbHVlLnRyaW0oKTpuLnZhbHVlfX0oZSxuKTtuLmlucHV0VmFsaWRhdG9yPyhlLmRpc2FibGVJbnB1dCgpLFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYihuLmlucHV0VmFsaWRhdG9yKG8sbi52YWxpZGF0aW9uTWVzc2FnZSkpfSkudGhlbihmdW5jdGlvbih0KXtlLmVuYWJsZUJ1dHRvbnMoKSxlLmVuYWJsZUlucHV0KCksdD9lLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh0KTpVZShlLG4sbyl9KSk6ZS5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKT9VZShlLG4sbyk6KGUuZW5hYmxlQnV0dG9ucygpLGUuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKG4udmFsaWRhdGlvbk1lc3NhZ2UpKX0sVWU9ZnVuY3Rpb24oZSx0LG4pe3Quc2hvd0xvYWRlck9uQ29uZmlybSYmV3QoKSx0LnByZUNvbmZpcm0/KGUucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYih0LnByZUNvbmZpcm0obix0LnZhbGlkYXRpb25NZXNzYWdlKSl9KS50aGVuKGZ1bmN0aW9uKHQpe3Z0KFMoKSl8fCExPT09dD9lLmhpZGVMb2FkaW5nKCk6QmUoZSx2b2lkIDA9PT10P246dCl9KSk6QmUoZSxuKX0sX2U9W1wiQXJyb3dMZWZ0XCIsXCJBcnJvd1JpZ2h0XCIsXCJBcnJvd1VwXCIsXCJBcnJvd0Rvd25cIixcIkxlZnRcIixcIlJpZ2h0XCIsXCJVcFwiLFwiRG93blwiXSxGZT1bXCJFc2NhcGVcIixcIkVzY1wiXSx6ZT1mdW5jdGlvbih0LGUsbil7dmFyIG89QnQuaW5uZXJQYXJhbXMuZ2V0KHQpO28uc3RvcEtleWRvd25Qcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKSxcIkVudGVyXCI9PT1lLmtleT9XZSh0LGUsbyk6XCJUYWJcIj09PWUua2V5P0tlKGUsbyk6LTEhPT1fZS5pbmRleE9mKGUua2V5KT9ZZSgpOi0xIT09RmUuaW5kZXhPZihlLmtleSkmJlplKGUsbyxuKX0sV2U9ZnVuY3Rpb24odCxlLG4pe2lmKCFlLmlzQ29tcG9zaW5nJiZlLnRhcmdldCYmdC5nZXRJbnB1dCgpJiZlLnRhcmdldC5vdXRlckhUTUw9PT10LmdldElucHV0KCkub3V0ZXJIVE1MKXtpZigtMSE9PVtcInRleHRhcmVhXCIsXCJmaWxlXCJdLmluZGV4T2Yobi5pbnB1dCkpcmV0dXJuO0h0KCksZS5wcmV2ZW50RGVmYXVsdCgpfX0sS2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQudGFyZ2V0LG49VigpLG89LTEsaT0wO2k8bi5sZW5ndGg7aSsrKWlmKGU9PT1uW2ldKXtvPWk7YnJlYWt9dC5zaGlmdEtleT9FZSgwLG8sLTEpOkVlKDAsbywxKSx0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKX0sWWU9ZnVuY3Rpb24oKXt2YXIgdD1FKCksZT1PKCk7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PXQmJnZ0KGUpP2UuZm9jdXMoKTpkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09ZSYmdnQodCkmJnQuZm9jdXMoKX0sWmU9ZnVuY3Rpb24odCxlLG4pe1coZS5hbGxvd0VzY2FwZUtleSkmJih0LnByZXZlbnREZWZhdWx0KCksbihLLmVzYykpfSxRZT1mdW5jdGlvbihlLHQsbil7dC5wb3B1cC5vbmNsaWNrPWZ1bmN0aW9uKCl7dmFyIHQ9QnQuaW5uZXJQYXJhbXMuZ2V0KGUpO3Quc2hvd0NvbmZpcm1CdXR0b258fHQuc2hvd0NhbmNlbEJ1dHRvbnx8dC5zaG93Q2xvc2VCdXR0b258fHQuaW5wdXR8fG4oSy5jbG9zZSl9fSwkZT0hMSxKZT1mdW5jdGlvbihlKXtlLnBvcHVwLm9ubW91c2Vkb3duPWZ1bmN0aW9uKCl7ZS5jb250YWluZXIub25tb3VzZXVwPWZ1bmN0aW9uKHQpe2UuY29udGFpbmVyLm9ubW91c2V1cD12b2lkIDAsdC50YXJnZXQ9PT1lLmNvbnRhaW5lciYmKCRlPSEwKX19fSxYZT1mdW5jdGlvbihlKXtlLmNvbnRhaW5lci5vbm1vdXNlZG93bj1mdW5jdGlvbigpe2UucG9wdXAub25tb3VzZXVwPWZ1bmN0aW9uKHQpe2UucG9wdXAub25tb3VzZXVwPXZvaWQgMCx0LnRhcmdldCE9PWUucG9wdXAmJiFlLnBvcHVwLmNvbnRhaW5zKHQudGFyZ2V0KXx8KCRlPSEwKX19fSxHZT1mdW5jdGlvbihuLG8saSl7by5jb250YWluZXIub25jbGljaz1mdW5jdGlvbih0KXt2YXIgZT1CdC5pbm5lclBhcmFtcy5nZXQobik7JGU/JGU9ITE6dC50YXJnZXQ9PT1vLmNvbnRhaW5lciYmVyhlLmFsbG93T3V0c2lkZUNsaWNrKSYmaShLLmJhY2tkcm9wKX19O3ZhciB0bj1mdW5jdGlvbih0LGUsbil7dmFyIG89cSgpO2l0KG8pLGUudGltZXImJih0LnRpbWVvdXQ9bmV3IGJlKGZ1bmN0aW9uKCl7bihcInRpbWVyXCIpLGRlbGV0ZSB0LnRpbWVvdXR9LGUudGltZXIpLGUudGltZXJQcm9ncmVzc0JhciYmKG90KG8pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnRpbWVvdXQucnVubmluZyYmc3QoZS50aW1lcil9KSkpfSxlbj1mdW5jdGlvbih0LGUpe2lmKCFlLnRvYXN0KXJldHVybiBXKGUuYWxsb3dFbnRlcktleSk/ZS5mb2N1c0NhbmNlbCYmdnQodC5jYW5jZWxCdXR0b24pP3QuY2FuY2VsQnV0dG9uLmZvY3VzKCk6ZS5mb2N1c0NvbmZpcm0mJnZ0KHQuY29uZmlybUJ1dHRvbik/dC5jb25maXJtQnV0dG9uLmZvY3VzKCk6dm9pZCBFZSgwLC0xLDEpOm5uKCl9LG5uPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyJiZkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKX07dmFyIG9uLHJuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSBpbiB0KXRbZV09bmV3IFdlYWtNYXB9LGFuPU9iamVjdC5mcmVlemUoe2hpZGVMb2FkaW5nOmllLGRpc2FibGVMb2FkaW5nOmllLGdldElucHV0OmZ1bmN0aW9uKHQpe3ZhciBlPUJ0LmlubmVyUGFyYW1zLmdldCh0fHx0aGlzKSxuPUJ0LmRvbUNhY2hlLmdldCh0fHx0aGlzKTtyZXR1cm4gbj9HKG4uY29udGVudCxlLmlucHV0KTpudWxsfSxjbG9zZTpmZSxjbG9zZVBvcHVwOmZlLGNsb3NlTW9kYWw6ZmUsY2xvc2VUb2FzdDpmZSxlbmFibGVCdXR0b25zOmZ1bmN0aW9uKCl7Z2UodGhpcyxbXCJjb25maXJtQnV0dG9uXCIsXCJjYW5jZWxCdXR0b25cIl0sITEpfSxkaXNhYmxlQnV0dG9uczpmdW5jdGlvbigpe2dlKHRoaXMsW1wiY29uZmlybUJ1dHRvblwiLFwiY2FuY2VsQnV0dG9uXCJdLCEwKX0sZW5hYmxlSW5wdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdmUodGhpcy5nZXRJbnB1dCgpLCExKX0sZGlzYWJsZUlucHV0OmZ1bmN0aW9uKCl7cmV0dXJuIHZlKHRoaXMuZ2V0SW5wdXQoKSwhMCl9LHNob3dWYWxpZGF0aW9uTWVzc2FnZTpmdW5jdGlvbih0KXt2YXIgZT1CdC5kb21DYWNoZS5nZXQodGhpcyk7SChlLnZhbGlkYXRpb25NZXNzYWdlLHQpO3ZhciBuPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUucG9wdXApO2UudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luTGVmdD1cIi1cIi5jb25jYXQobi5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1sZWZ0XCIpKSxlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpblJpZ2h0PVwiLVwiLmNvbmNhdChuLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpKSxvdChlLnZhbGlkYXRpb25NZXNzYWdlKTt2YXIgbz10aGlzLmdldElucHV0KCk7byYmKG8uc2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIsITApLG8uc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRCeVwiLFlbXCJ2YWxpZGF0aW9uLW1lc3NhZ2VcIl0pLHR0KG8pLG10KG8sWS5pbnB1dGVycm9yKSl9LHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6ZnVuY3Rpb24oKXt2YXIgdD1CdC5kb21DYWNoZS5nZXQodGhpcyk7dC52YWxpZGF0aW9uTWVzc2FnZSYmaXQodC52YWxpZGF0aW9uTWVzc2FnZSk7dmFyIGU9dGhpcy5nZXRJbnB1dCgpO2UmJihlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkQnlcIiksaHQoZSxZLmlucHV0ZXJyb3IpKX0sZ2V0UHJvZ3Jlc3NTdGVwczpmdW5jdGlvbigpe3JldHVybiBCdC5kb21DYWNoZS5nZXQodGhpcykucHJvZ3Jlc3NTdGVwc30sX21haW46ZnVuY3Rpb24odCl7SnQodCksWHQuY3VycmVudEluc3RhbmNlJiZYdC5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKSxYdC5jdXJyZW50SW5zdGFuY2U9dGhpczt2YXIgZT1mdW5jdGlvbih0KXt2YXIgZT1zKHt9LEd0LnNob3dDbGFzcyx0LnNob3dDbGFzcyksbj1zKHt9LEd0LmhpZGVDbGFzcyx0LmhpZGVDbGFzcyksbz1zKHt9LEd0LHQpO2lmKG8uc2hvd0NsYXNzPWUsby5oaWRlQ2xhc3M9bix0LmFuaW1hdGlvbj09PWZhbHNlKXtvLnNob3dDbGFzcz17cG9wdXA6XCJzd2FsMi1ub2FuaW1hdGlvblwiLGJhY2tkcm9wOlwic3dhbDItbm9hbmltYXRpb25cIn07by5oaWRlQ2xhc3M9e319cmV0dXJuIG99KHQpO3dlKGUpLE9iamVjdC5mcmVlemUoZSksWHQudGltZW91dCYmKFh0LnRpbWVvdXQuc3RvcCgpLGRlbGV0ZSBYdC50aW1lb3V0KSxjbGVhclRpbWVvdXQoWHQucmVzdG9yZUZvY3VzVGltZW91dCk7dmFyIG49ZnVuY3Rpb24odCl7dmFyIGU9e3BvcHVwOiQoKSxjb250YWluZXI6USgpLGNvbnRlbnQ6UCgpLGFjdGlvbnM6VCgpLGNvbmZpcm1CdXR0b246RSgpLGNhbmNlbEJ1dHRvbjpPKCksY2xvc2VCdXR0b246SSgpLHZhbGlkYXRpb25NZXNzYWdlOlMoKSxwcm9ncmVzc1N0ZXBzOkIoKX07cmV0dXJuIEJ0LmRvbUNhY2hlLnNldCh0LGUpLGV9KHRoaXMpO3JldHVybiBSdCh0aGlzLGUpLEJ0LmlubmVyUGFyYW1zLnNldCh0aGlzLGUpLGZ1bmN0aW9uKG4sbyxpKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24gdChlKXtuLmNsb3NlUG9wdXAoe2Rpc21pc3M6ZX0pfTtkZS5zd2FsUHJvbWlzZVJlc29sdmUuc2V0KG4sdCk7by5jb25maXJtQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gUGUobixpKX07by5jYW5jZWxCdXR0b24ub25jbGljaz1mdW5jdGlvbigpe3JldHVybiBBZShuLGUpfTtvLmNsb3NlQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gZShLLmNsb3NlKX07T2UobixvLGUpO1NlKG4sWHQsaSxlKTtpZihpLnRvYXN0JiYoaS5pbnB1dHx8aS5mb290ZXJ8fGkuc2hvd0Nsb3NlQnV0dG9uKSl7bXQoZG9jdW1lbnQuYm9keSxZW1widG9hc3QtY29sdW1uXCJdKX1lbHNle2h0KGRvY3VtZW50LmJvZHksWVtcInRvYXN0LWNvbHVtblwiXSl9eGUobixpKTtDZShpKTt0bihYdCxpLGUpO2VuKG8saSk7c2V0VGltZW91dChmdW5jdGlvbigpe28uY29udGFpbmVyLnNjcm9sbFRvcD0wfSl9KX0odGhpcyxuLGUpfSx1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9JCgpLG49QnQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO2lmKCF0fHxEKHQsbi5oaWRlQ2xhc3MucG9wdXApKXJldHVybiBfKFwiWW91J3JlIHRyeWluZyB0byB1cGRhdGUgdGhlIGNsb3NlZCBvciBjbG9zaW5nIHBvcHVwLCB0aGF0IHdvbid0IHdvcmsuIFVzZSB0aGUgdXBkYXRlKCkgbWV0aG9kIGluIHByZUNvbmZpcm0gcGFyYW1ldGVyIG9yIHNob3cgYSBuZXcgcG9wdXAuXCIpO3ZhciBvPXt9O09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24odCl7c24uaXNVcGRhdGFibGVQYXJhbWV0ZXIodCk/b1t0XT1lW3RdOl8oJ0ludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogXCInLmNvbmNhdCh0LCdcIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGFyYW1zLmpzJykpfSk7dmFyIGk9cyh7fSxuLG8pO1J0KHRoaXMsaSksQnQuaW5uZXJQYXJhbXMuc2V0KHRoaXMsaSksT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7cGFyYW1zOnt2YWx1ZTpzKHt9LHRoaXMucGFyYW1zLGUpLHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITB9fSl9LF9kZXN0cm95OmZ1bmN0aW9uKCl7dmFyIHQ9QnQuZG9tQ2FjaGUuZ2V0KHRoaXMpLGU9QnQuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO2UmJih0LnBvcHVwJiZYdC5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2smJihYdC5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKSxkZWxldGUgWHQuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSxYdC5kZWZlckRpc3Bvc2FsVGltZXImJihjbGVhclRpbWVvdXQoWHQuZGVmZXJEaXNwb3NhbFRpbWVyKSxkZWxldGUgWHQuZGVmZXJEaXNwb3NhbFRpbWVyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uRGVzdHJveSYmZS5vbkRlc3Ryb3koKSxkZWxldGUgdGhpcy5wYXJhbXMsZGVsZXRlIFh0LmtleWRvd25IYW5kbGVyLGRlbGV0ZSBYdC5rZXlkb3duVGFyZ2V0LHJuKEJ0KSxybihkZSkpfX0pLGNuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gcigpe2lmKGEodGhpcyxyKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXtcInVuZGVmaW5lZFwiPT10eXBlb2YgUHJvbWlzZSYmRihcIlRoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL3dpa2kvTWlncmF0aW9uLWZyb20tU3dlZXRBbGVydC10by1Td2VldEFsZXJ0MiMxLWllLXN1cHBvcnQpXCIpLG9uPXRoaXM7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksbj0wO248dDtuKyspZVtuXT1hcmd1bWVudHNbbl07dmFyIG89T2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhlKSk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyx7cGFyYW1zOnt2YWx1ZTpvLHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pO3ZhciBpPXRoaXMuX21haW4odGhpcy5wYXJhbXMpO0J0LnByb21pc2Uuc2V0KHRoaXMsaSl9fXJldHVybiBjKHIsW3trZXk6XCJ0aGVuXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIEJ0LnByb21pc2UuZ2V0KHRoaXMpLnRoZW4odCl9fSx7a2V5OlwiZmluYWxseVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBCdC5wcm9taXNlLmdldCh0aGlzKS5maW5hbGx5KHQpfX1dKSxyfSgpO3MoY24ucHJvdG90eXBlLGFuKSxzKGNuLG9lKSxPYmplY3Qua2V5cyhhbikuZm9yRWFjaChmdW5jdGlvbih0KXtjblt0XT1mdW5jdGlvbigpe2lmKG9uKXJldHVybiBvblt0XS5hcHBseShvbixhcmd1bWVudHMpfX0pLGNuLkRpc21pc3NSZWFzb249Syxjbi52ZXJzaW9uPVwiOS4xNy4yXCI7dmFyIHNuPWNuO3JldHVybiBzbi5kZWZhdWx0PXNufSksdm9pZCAwIT09dGhpcyYmdGhpcy5Td2VldGFsZXJ0MiYmKHRoaXMuc3dhbD10aGlzLnN3ZWV0QWxlcnQ9dGhpcy5Td2FsPXRoaXMuU3dlZXRBbGVydD10aGlzLlN3ZWV0YWxlcnQyKTsiLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=