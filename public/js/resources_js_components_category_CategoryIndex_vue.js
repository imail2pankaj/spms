(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_category_CategoryIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/category/CategoryIndex.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/category/CategoryIndex.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/category */ "./resources/js/composables/category.js");
/* harmony import */ var _common_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Status */ "./resources/js/components/common/Status.vue");
/* harmony import */ var _common_ConfirmDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ConfirmDelete */ "./resources/js/components/common/ConfirmDelete.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Status: _common_Status__WEBPACK_IMPORTED_MODULE_3__.default,
    ConfirmDelete: _common_ConfirmDelete__WEBPACK_IMPORTED_MODULE_4__.default
  },
  setup: function setup(props) {
    var showModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var item_id = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);

    var _useCategories = (0,_composables_category__WEBPACK_IMPORTED_MODULE_2__.default)(),
        categories = _useCategories.categories,
        getCategories = _useCategories.getCategories,
        deleteCategory = _useCategories.deleteCategory;

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(getCategories);

    var togglePopup = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                showModal.value = !showModal.value;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function togglePopup() {
        return _ref.apply(this, arguments);
      };
    }();

    var destroyCategory = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return deleteCategory(id);

              case 2:
                togglePopup();
                _context2.next = 5;
                return getCategories();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function destroyCategory(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return {
      item_id: item_id,
      showModal: showModal,
      categories: categories,
      destroyCategory: destroyCategory,
      togglePopup: togglePopup,
      deleteCategory: deleteCategory
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/category/CategoryIndex.vue?vue&type=template&id=fd78cce4":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/category/CategoryIndex.vue?vue&type=template&id=fd78cce4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
}, " Categories ", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add ");

var _hoisted_4 = {
  "class": "bg-white overflow-hidden shadow-sm rounded-lg"
};
var _hoisted_5 = {
  "class": "p-6 bg-white border-b border-gray-200"
};
var _hoisted_6 = {
  "class": "min-w-max w-full table-auto"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", {
  "class": "bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Image"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Parent"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-center"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-center"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "text-gray-900 text-sm font-light"
};
var _hoisted_9 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_10 = {
  key: 1,
  src: "/images/no-image.png",
  "class": "w-20 rounded "
};
var _hoisted_11 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_12 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_13 = {
  "class": "py-2 px-2 text-center whitespace-nowrap"
};
var _hoisted_14 = {
  "class": "py-2 px-2 text-center whitespace-nowrap"
};
var _hoisted_15 = {
  "class": "flex item-center justify-center"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/view-icon.svg",
  alt: "View"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/edit-icon.svg",
  alt: "Edit"
}, null, -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/images/delete-icon.svg",
  alt: "Delete"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_Status = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Status");

  var _component_confirm_delete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-delete");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'category.create'
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
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: index,
      "class": "border-b border-gray-200 hover:bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_9, [item.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("img", {
      key: 0,
      src: '/uploads/category/' + item.image,
      "class": "w-20 rounded "
    }, null, 8
    /* PROPS */
    , ["src"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !item.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("img", _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.parent_category_name ? item.parent_category_name : "None"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Status, {
      status: item.status
    }, null, 8
    /* PROPS */
    , ["status"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "",
      "class": "no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_16];
      }),
      _: 1
      /* STABLE */

    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'category.edit',
        params: {
          id: item.id
        }
      },
      "class": "no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_17];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "button",
      onClick: function onClick($event) {
        $setup.item_id = item.id;
        $setup.togglePopup();
      },
      "class": "no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
    }, [_hoisted_18], 8
    /* PROPS */
    , ["onClick"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_confirm_delete, {
    modalHeadline: "Delete Category?",
    deleteMessage: "Are you sure?",
    onDeleteRecordEvent: _cache[1] || (_cache[1] = function ($event) {
      return $setup.destroyCategory($setup.item_id);
    }),
    onClose: $setup.togglePopup
  }, null, 8
  /* PROPS */
  , ["onClose"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showModal]])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/category.js":
/*!**********************************************!*\
  !*** ./resources/js/composables/category.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCategories)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useCategories() {
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var category = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    name: '',
    description: '',
    short_description: '',
    parent_id: 0,
    image: '',
    status: 0
  });
  var categories = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var categoryOptions = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    name: '',
    description: '',
    short_description: '',
    parent_id: '',
    image: '',
    status: ''
  });

  var getCategories = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories');

            case 2:
              response = _context.sent;
              categories.value = response.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCategories() {
      return _ref.apply(this, arguments);
    };
  }();

  var getCategory = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories/' + id);

            case 2:
              response = _context2.sent;
              category.value = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getCategory(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getCategoriesDropdown = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories');

            case 2:
              response = _context3.sent;
              categoryOptions.value = response.data.map(function (c) {
                return {
                  name: c.name,
                  value: c.id
                };
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCategoriesDropdown() {
      return _ref3.apply(this, arguments);
    };
  }();

  var storeCategory = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(data) {
      var key, responseErrors, _key;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context4.prev = 1;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/categories', data);

            case 4:
              _context4.next = 6;
              return router.push({
                name: 'category.index'
              });

            case 6:
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.response.code === 422) {
                responseErrors = _context4.t0.response.data.errors;

                for (_key in responseErrors) {
                  errors.value[_key] = responseErrors[_key][0];
                }
              }

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }));

    return function storeCategory(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateCategory = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id, data) {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/categories/' + id, data);

            case 4:
              _context5.next = 6;
              return router.push({
                name: 'category.index'
              });

            case 6:
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);

              if (_context5.t0.response.code === 422) {
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

    return function updateCategory(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var deleteCategory = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().delete('/api/categories/' + id);

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function deleteCategory(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  return {
    errors: errors,
    category: category,
    categories: categories,
    getCategory: getCategory,
    getCategories: getCategories,
    storeCategory: storeCategory,
    deleteCategory: deleteCategory,
    updateCategory: updateCategory,
    categoryOptions: categoryOptions,
    getCategoriesDropdown: getCategoriesDropdown
  };
}

/***/ }),

/***/ "./resources/js/components/category/CategoryIndex.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/category/CategoryIndex.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryIndex_vue_vue_type_template_id_fd78cce4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryIndex.vue?vue&type=template&id=fd78cce4 */ "./resources/js/components/category/CategoryIndex.vue?vue&type=template&id=fd78cce4");
/* harmony import */ var _CategoryIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryIndex.vue?vue&type=script&lang=js */ "./resources/js/components/category/CategoryIndex.vue?vue&type=script&lang=js");



_CategoryIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CategoryIndex_vue_vue_type_template_id_fd78cce4__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CategoryIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/category/CategoryIndex.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CategoryIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/category/CategoryIndex.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/category/CategoryIndex.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoryIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoryIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CategoryIndex.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/category/CategoryIndex.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/category/CategoryIndex.vue?vue&type=template&id=fd78cce4":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/category/CategoryIndex.vue?vue&type=template&id=fd78cce4 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoryIndex_vue_vue_type_template_id_fd78cce4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CategoryIndex_vue_vue_type_template_id_fd78cce4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CategoryIndex.vue?vue&type=template&id=fd78cce4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/category/CategoryIndex.vue?vue&type=template&id=fd78cce4");


/***/ })

}]);