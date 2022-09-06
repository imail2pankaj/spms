(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_invoice_InvoiceCreate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/invoice/InvoiceCreate.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/invoice/InvoiceCreate.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_invoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/invoice */ "./resources/js/composables/invoice.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var submitting = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var customerDetails = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var tax_rates = [{
      value: 5,
      label: "5 %"
    }, {
      value: 12,
      label: "12 %"
    }, {
      value: 18,
      label: "18 %"
    }, {
      value: 28,
      label: "28 %"
    }];

    var _useInvoices = (0,_composables_invoice__WEBPACK_IMPORTED_MODULE_2__.default)(),
        errors = _useInvoices.errors,
        storeInvoice = _useInvoices.storeInvoice,
        customers = _useInvoices.customers,
        getUsersDropdown = _useInvoices.getUsersDropdown,
        getInvoiceNewInvoiceNumber = _useInvoices.getInvoiceNewInvoiceNumber,
        getCustomerDetails = _useInvoices.getCustomerDetails;

    var invoice_items = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      customer_id: '',
      invoice_date: '',
      invoice_number: '',
      tax_rate: 18,
      tax_amount: 0,
      total_amount: 0,
      notes: "",
      payment: "Pending",
      payment_date: "",
      subtotal: 0,
      invoice_items: [],
      customers: []
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              invoice_items.value.push({
                description: '',
                amount: 0.0
              });
              _context.next = 3;
              return getUsersDropdown();

            case 3:
              _context.next = 5;
              return getInvoiceNewInvoiceNumber();

            case 5:
              form.value.invoice_number = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var saveInvoice = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                submitting.value = true;
                formData = new FormData();

                for (key in form.value) {
                  if (key === 'invoice_items') {
                    formData.append(key, JSON.stringify(invoice_items.value));
                  } else {
                    formData.append(key, form.value[key]);
                  }
                }

                console.log(form);
                _context2.next = 6;
                return storeInvoice(formData);

              case 6:
                submitting.value = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function saveInvoice() {
        return _ref2.apply(this, arguments);
      };
    }();

    var addInvoiceItem = function addInvoiceItem() {
      invoice_items.value.push({
        description: '',
        amount: 0.0
      });
      calculateTotal();
    };

    var deleteItem = function deleteItem(index) {
      invoice_items.value.splice(index, 1);
      calculateTotal();
    };

    var getCustomer = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return getCustomerDetails(form.value.customer_id);

              case 2:
                customerDetails.value = _context3.sent;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getCustomer() {
        return _ref3.apply(this, arguments);
      };
    }();

    var calculateTotal = function calculateTotal() {
      var calculateTotal = 0;
      invoice_items.value.forEach(function (item) {
        calculateTotal = calculateTotal + parseInt(item.amount);
      });
      form.value.subtotal = calculateTotal;
      form.value.tax_amount = calculateTotal * form.value.tax_rate / 100;
      form.value.total_amount = calculateTotal + form.value.tax_amount;
    };

    return {
      form: form,
      errors: errors,
      saveInvoice: saveInvoice,
      submitting: submitting,
      tax_rates: tax_rates,
      customers: customers,
      invoice_items: invoice_items,
      deleteItem: deleteItem,
      addInvoiceItem: addInvoiceItem,
      calculateTotal: calculateTotal,
      getCustomer: getCustomer,
      customerDetails: customerDetails
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/invoice/InvoiceCreate.vue?vue&type=template&id=7e3f3b68":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/invoice/InvoiceCreate.vue?vue&type=template&id=7e3f3b68 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between mb-2"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-2xl font-bold"
}, " Invoice Create ", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" List ");

var _hoisted_4 = {
  "class": "bg-white overflow-hidden shadow-sm rounded-lg"
};
var _hoisted_5 = {
  "class": "bg-white border-b border-gray-200"
};
var _hoisted_6 = {
  "class": "px-4 py-5 bg-white space-y-6 sm:p-6"
};
var _hoisted_7 = {
  "class": "container mx-auto"
};
var _hoisted_8 = {
  "class": "flex mb-8 justify-between"
};
var _hoisted_9 = {
  "class": "w-2/4"
};
var _hoisted_10 = {
  "class": "mb-2 md:mb-1 md:flex items-center"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide"
}, "Invoice No.", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "mr-4 inline-block hidden md:block"
}, ":", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "flex-1"
};
var _hoisted_14 = {
  "class": "mb-2 md:mb-1 md:flex items-center"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide"
}, "Invoice Date", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "mr-4 inline-block hidden md:block"
}, ":", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "flex-1"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-60 h-24 mb-1 overflow-hidden relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  id: "image",
  "class": "object-cover w-full h-24",
  src: "/images/logo.png"
})])], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "flex flex-wrap justify-between mb-8"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-full md:w-1/3 mb-2 md:mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide"
}, "From:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight font-bold"
}, " Scenic IT Solutions "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
}, " Rajkot, Gujarat, India ")], -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "w-full md:w-1/3"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide"
}, "Bill To:", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", {
  value: "",
  key: "0"
}, " - Select Customer - ", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
};
var _hoisted_25 = {
  key: 0
};
var _hoisted_26 = {
  key: 1
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex -mx-1 border-b py-2 items-start\"><div class=\"flex-1 px-1\"><p class=\"text-gray-800 uppercase tracking-wide text-sm font-bold\">Description</p></div><div class=\"px-1 w-32 text-right\"><p class=\"leading-none\"><span class=\"block uppercase tracking-wide text-sm font-bold text-gray-800\">Amount</span></p></div><div class=\"px-1 w-20 text-right\"></div></div>", 1);

var _hoisted_28 = {
  "class": "flex-1 px-1"
};
var _hoisted_29 = {
  "class": "px-1 w-32 text-right"
};
var _hoisted_30 = {
  "class": "px-1 w-20 text-right flex justify-end items-center"
};
var _hoisted_31 = {
  "class": "flex mb-8 justify-between"
};
var _hoisted_32 = {
  "class": "py-2 mt-5 w-2/4"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-gray-800 uppercase tracking-wide text-sm font-bold mb-2"
}, "Notes", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "py-2 mt-5 flex"
};
var _hoisted_35 = {
  "class": " w-2/4 pr-2"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-gray-800 uppercase tracking-wide text-sm font-bold mb-2"
}, "Payment Status", -1
/* HOISTED */
);

var _hoisted_37 = {
  key: 0,
  "class": "w-2/4 pl-2"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-gray-800 uppercase tracking-wide text-sm font-bold mb-2"
}, "Payment Date", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "py-2 pl-2 mt-5 w-2/4"
};
var _hoisted_40 = {
  "class": "flex justify-between mb-3"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-gray-800 text-right flex-1"
}, "Total Excl. GST", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "text-right w-40"
};
var _hoisted_43 = {
  "class": "text-gray-800 font-medium"
};
var _hoisted_44 = {
  "class": "flex justify-between mb-4"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-sm text-gray-600 text-right flex-1 items-center mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "GST (%)")], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "text-right w-40"
};
var _hoisted_47 = {
  "class": "text-sm text-gray-600"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", {
  value: "",
  key: "0"
}, " - GST Rate - ", -1
/* HOISTED */
);

var _hoisted_49 = {
  "class": "flex justify-between mb-3"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-gray-800 text-right flex-1"
}, "GST Amount", -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "text-right w-40"
};
var _hoisted_52 = {
  "class": "text-gray-800 font-medium"
};
var _hoisted_53 = {
  "class": "py-2 border-t border-b mb-4"
};
var _hoisted_54 = {
  "class": "flex justify-between"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-xl text-gray-600 text-right flex-1"
}, "Total Amount", -1
/* HOISTED */
);

var _hoisted_56 = {
  "class": "text-right w-40"
};
var _hoisted_57 = {
  "class": "text-xl text-gray-800 font-bold"
};
var _hoisted_58 = {
  "class": "py-3 bg-gray-50 text-right"
};
var _hoisted_59 = {
  type: "submit",
  "class": "btn-blue"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'invoice.index'
    },
    "class": "link-blue"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
    onSubmit: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.saveInvoice && $setup.saveInvoice.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Title Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"flex justify-between\">\r\n              <h2 class=\"text-2xl font-bold mb-6 pb-2 tracking-wider uppercase\">Invoice</h2>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Title End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Logo/Invoice Number/Date Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [_hoisted_11, _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    readonly: "",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.invoice_number = $event;
    }),
    "class": "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
    type: "text",
    placeholder: "eg. #SITS-100001"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.invoice_number]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [_hoisted_15, _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.invoice_date = $event;
    }),
    "class": "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker",
    type: "date",
    placeholder: "eg. 17 Feb, 2020",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.invoice_date]])])])]), _hoisted_18]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Logo/Invoice Number/Date End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice From/To Details Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    onChange: _cache[3] || (_cache[3] = function () {
      return $setup.getCustomer && $setup.getCustomer.apply($setup, arguments);
    }),
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.customer_id = $event;
    }),
    name: "customer",
    id: "customer_id",
    "class": "mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
    required: ""
  }, [_hoisted_23, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.customers, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item.id,
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.customer_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [$setup.customerDetails ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.customerDetails.country), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_26, "Customer Address"))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice From/To Details End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Items Heading Start "), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Items Heading End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Items Fields Start "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.invoice_items, function (invoice, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      key: index,
      "class": "flex -mx-1 py-2 border-b"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return invoice.description = $event;
      },
      "class": "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker",
      type: "text",
      placeholder: "Description",
      required: ""
    }, null, 8
    /* PROPS */
    , ["onUpdate:modelValue"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, invoice.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return invoice.amount = $event;
      },
      "class": "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker",
      type: "number",
      onChange: _cache[5] || (_cache[5] = function ($event) {
        return $setup.calculateTotal();
      }),
      placeholder: "Amount"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , ["onUpdate:modelValue"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, invoice.amount]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
      href: "#",
      onClick: function onClick($event) {
        return $setup.deleteItem(index);
      },
      "class": "text-red-500 hover:text-red-600 text-sm font-semibold"
    }, "Delete", 8
    /* PROPS */
    , ["onClick"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, index]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[6] || (_cache[6] = function () {
      return $setup.addInvoiceItem && $setup.addInvoiceItem.apply($setup, arguments);
    }),
    type: "button",
    "class": "mt-6 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-sm border border-gray-300 rounded shadow-sm"
  }, " Add Invoice Items "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Items Fields End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Total Section Start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    name: "notes",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.notes = $event;
    }),
    rows: "4",
    "class": "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.payment = $event;
    }),
    name: "payment",
    id: "payment",
    "class": "mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(['Pending', 'Paid'], function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", {
      key: item,
      value: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.payment]])]), $setup.form.payment === 'Paid' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.form.payment_date = $event;
    }),
    "class": "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
    type: "date",
    placeholder: "Payment Date"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.payment_date]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.subtotal.toFixed(2)), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    onChange: _cache[10] || (_cache[10] = function ($event) {
      return $setup.calculateTotal();
    }),
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.form.tax_rate = $event;
    }),
    name: "tax_rate",
    id: "tax_rate",
    "class": "mb-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-32 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
    required: ""
  }, [_hoisted_48, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tax_rates, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item.value,
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.tax_rate]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.tax_amount.toFixed(2)), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.total_amount.toFixed(2)), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.submitting ? "Saving" : "Save Invoice"), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Invoice Total Section End ")])])])])], 32
  /* HYDRATE_EVENTS */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/invoice.js":
/*!*********************************************!*\
  !*** ./resources/js/composables/invoice.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUsers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useUsers() {
  var baseApiUrl = '/api/invoices';
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var invoices = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var customers = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    current_page: 1,
    total: 0,
    per_page: 5,
    last_page: 0,
    links: []
  });
  var invoice = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    customer_id: '',
    invoice_date: '',
    invoice_number: '',
    tax_rate: 0,
    tax_amount: 0,
    total_amount: 0,
    notes: "",
    payment: "Pending",
    payment_date: "",
    invoice_items: [],
    _method: 'post'
  });
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    customer_id: '',
    invoice_date: '',
    invoice_number: '',
    tax_rate: "",
    tax_amount: '',
    total_amount: '',
    notes: "",
    payment: "",
    payment_date: ""
  });

  var getInvoices = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
      var parameters, key, response, _key;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parameters = "?";

              for (key in data) {
                parameters += key + "=" + data[key] + "&";
              }

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseApiUrl + parameters);

            case 4:
              response = _context.sent;
              invoices.value = response.data.data;

              for (_key in pagination.value) {
                pagination.value[_key] = response.data[_key];
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getInvoices(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getInvoice = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseApiUrl + '/' + id);

            case 2:
              response = _context2.sent;
              invoice.value = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getInvoice(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getInvoiceNewInvoiceNumber = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseApiUrl + '/new/invoice/number');

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getInvoiceNewInvoiceNumber() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getCustomerDetails = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(user_id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseApiUrl + '/customer/' + user_id);

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getCustomerDetails(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var storeInvoice = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(data) {
      var key, responseErrors, _key2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context5.prev = 1;
              _context5.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseApiUrl, data);

            case 4:
              _context5.next = 6;
              return router.push({
                name: 'invoice.index'
              });

            case 6:
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);

              if (_context5.t0.response.status === 422) {
                responseErrors = _context5.t0.response.data.errors;

                for (_key2 in responseErrors) {
                  errors.value[_key2] = responseErrors[_key2][0];
                }
              }

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 8]]);
    }));

    return function storeInvoice(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var updateInvoice = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(id, data) {
      var key, responseErrors, _key3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context6.prev = 1;
              _context6.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseApiUrl + '/' + id, data);

            case 4:
              _context6.next = 6;
              return router.push({
                name: 'invoice.index'
              });

            case 6:
              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](1);

              if (_context6.t0.response.status === 422) {
                responseErrors = _context6.t0.response.data.errors;

                for (_key3 in responseErrors) {
                  errors.value[_key3] = responseErrors[_key3][0];
                }
              }

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 8]]);
    }));

    return function updateInvoice(_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  var deleteInvoice = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(baseApiUrl + '/' + id);

            case 2:
              _context7.next = 4;
              return router.push({
                name: 'invoice.index'
              });

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function deleteInvoice(_x7) {
      return _ref7.apply(this, arguments);
    };
  }();

  var getUsersDropdown = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/project/users');

            case 2:
              response = _context8.sent;
              customers.value = response.data['customer'];

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function getUsersDropdown() {
      return _ref8.apply(this, arguments);
    };
  }();

  return {
    invoice: invoice,
    invoices: invoices,
    customers: customers,
    errors: errors,
    getInvoice: getInvoice,
    getInvoices: getInvoices,
    storeInvoice: storeInvoice,
    getInvoiceNewInvoiceNumber: getInvoiceNewInvoiceNumber,
    pagination: pagination,
    deleteInvoice: deleteInvoice,
    updateInvoice: updateInvoice,
    getUsersDropdown: getUsersDropdown,
    getCustomerDetails: getCustomerDetails
  };
}

/***/ }),

/***/ "./resources/js/components/invoice/InvoiceCreate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/invoice/InvoiceCreate.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvoiceCreate_vue_vue_type_template_id_7e3f3b68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceCreate.vue?vue&type=template&id=7e3f3b68 */ "./resources/js/components/invoice/InvoiceCreate.vue?vue&type=template&id=7e3f3b68");
/* harmony import */ var _InvoiceCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceCreate.vue?vue&type=script&lang=js */ "./resources/js/components/invoice/InvoiceCreate.vue?vue&type=script&lang=js");



_InvoiceCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _InvoiceCreate_vue_vue_type_template_id_7e3f3b68__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_InvoiceCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/invoice/InvoiceCreate.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_InvoiceCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/invoice/InvoiceCreate.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/invoice/InvoiceCreate.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InvoiceCreate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/invoice/InvoiceCreate.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/invoice/InvoiceCreate.vue?vue&type=template&id=7e3f3b68":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/invoice/InvoiceCreate.vue?vue&type=template&id=7e3f3b68 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceCreate_vue_vue_type_template_id_7e3f3b68__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InvoiceCreate_vue_vue_type_template_id_7e3f3b68__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InvoiceCreate.vue?vue&type=template&id=7e3f3b68 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/invoice/InvoiceCreate.vue?vue&type=template&id=7e3f3b68");


/***/ })

}]);