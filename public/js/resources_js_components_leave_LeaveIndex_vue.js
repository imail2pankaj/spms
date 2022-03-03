(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_leave_LeaveIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveIndex.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveIndex.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _composables_leave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/leave */ "./resources/js/composables/leave.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(props) {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.user;
    });

    var _useLeaves = (0,_composables_leave__WEBPACK_IMPORTED_MODULE_2__.default)(),
        leaves = _useLeaves.leaves,
        pagination = _useLeaves.pagination,
        getLeaves = _useLeaves.getLeaves,
        deleteLeave = _useLeaves.deleteLeave;

    var showModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var item_id = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
    var emitPaginationLocal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({});

    var searchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(emitPagination) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                emitPaginationLocal.value = emitPaginationLocal;
                _context.next = 3;
                return getLeaves(emitPagination);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function searchData(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var destroyLeave = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(itemId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                togglePopup();
                _context2.next = 3;
                return deleteLeave(itemId);

              case 3:
                _context2.next = 5;
                return getLeaves({});

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function destroyLeave(_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    var togglePopup = function togglePopup() {
      showModal.value = !showModal.value;
    };

    return {
      user: user,
      leaves: leaves,
      item_id: item_id,
      showModal: showModal,
      pagination: pagination,
      searchData: searchData,
      togglePopup: togglePopup,
      destroyLeave: destroyLeave,
      managementRoles: _utils__WEBPACK_IMPORTED_MODULE_3__.managementRoles
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveIndex.vue?vue&type=template&id=d677d0c4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveIndex.vue?vue&type=template&id=d677d0c4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
}, " Leaves ", -1
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
var _hoisted_7 = {
  "class": "bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
};
var _hoisted_8 = {
  key: 0,
  "class": "py-2 px-2 text-left"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Reason", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Leave Date", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Type", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Status", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-center"
}, "Action", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "text-gray-900 text-sm font-light"
};
var _hoisted_15 = {
  key: 0,
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_16 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_17 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_18 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_19 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_20 = {
  "class": "py-2 px-2 text-center whitespace-nowrap"
};
var _hoisted_21 = {
  "class": "flex item-center justify-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_edit_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("edit-icon");

  var _component_delete_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("delete-icon");

  var _component_app_datatables = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-datatables");

  var _component_app_confirm_delete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-confirm-delete");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'leave.create'
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
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_datatables, {
    pagination: $setup.pagination,
    onChangePageEvent: $setup.searchData
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", _hoisted_7, [$setup.managementRoles().includes($setup.user.role) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("th", _hoisted_8, "Employee")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.leaves, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
          key: index,
          "class": "border-b border-gray-200 hover:bg-gray-100"
        }, [$setup.managementRoles().includes($setup.user.role) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user.last_name), 1
        /* TEXT */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.description), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.start_date) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.end_date), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.type) + " Day ", 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <router-link to=\"\" class=\"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110\">\r\n                        <view-icon />\r\n                    </router-link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: {
            name: 'leave.edit',
            params: {
              id: item.id
            }
          },
          "class": "no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_edit_icon)];
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
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_delete_icon)], 8
        /* PROPS */
        , ["onClick"])])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["pagination", "onChangePageEvent"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_confirm_delete, {
    modalHeadline: "Delete Leave?",
    deleteMessage: "Are you sure?",
    onDeleteRecordEvent: _cache[1] || (_cache[1] = function ($event) {
      return $setup.destroyLeave($setup.item_id);
    }),
    onClose: $setup.togglePopup
  }, null, 8
  /* PROPS */
  , ["onClose"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showModal]])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/leave.js":
/*!*******************************************!*\
  !*** ./resources/js/composables/leave.js ***!
  \*******************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function useUsers() {
  var baseApiUrl = '/api/user-leaves';
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var leaves = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    current_page: 1,
    total: 0,
    per_page: 5,
    last_page: 0,
    links: []
  });
  var leave = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    description: '',
    comment: '',
    start_date: '',
    end_date: '',
    type: 'Half',
    status: 'Applied',
    _method: 'post'
  });
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(_defineProperty({
    description: '',
    comment: '',
    start_date: '',
    end_date: '',
    type: '',
    status: ''
  }, "type", ''));

  var getLeaves = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {
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
              leaves.value = response.data.data;

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

    return function getLeaves(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getLeave = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseApiUrl + '/' + id);

            case 2:
              response = _context2.sent;
              leave.value = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getLeave(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var storeLeave = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(data) {
      var key, responseErrors, _key2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context3.prev = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseApiUrl, data);

            case 4:
              _context3.next = 6;
              return router.push({
                name: 'leave.index'
              });

            case 6:
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);

              if (_context3.t0.response.status === 422) {
                responseErrors = _context3.t0.response.data.errors;

                for (_key2 in responseErrors) {
                  errors.value[_key2] = responseErrors[_key2][0];
                }
              }

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }));

    return function storeLeave(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateLeave = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(id, data) {
      var key, responseErrors, _key3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context4.prev = 1;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseApiUrl + '/' + id, data);

            case 4:
              _context4.next = 6;
              return router.push({
                name: 'leave.index'
              });

            case 6:
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.response.status === 422) {
                responseErrors = _context4.t0.response.data.errors;

                for (_key3 in responseErrors) {
                  errors.value[_key3] = responseErrors[_key3][0];
                }
              }

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }));

    return function updateLeave(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var deleteLeave = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(baseApiUrl + '/' + id);

            case 2:
              _context5.next = 4;
              return router.push({
                name: 'leave.index'
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function deleteLeave(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  return {
    leave: leave,
    leaves: leaves,
    errors: errors,
    getLeave: getLeave,
    getLeaves: getLeaves,
    storeLeave: storeLeave,
    pagination: pagination,
    deleteLeave: deleteLeave,
    updateLeave: updateLeave
  };
}

/***/ }),

/***/ "./resources/js/components/leave/LeaveIndex.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/leave/LeaveIndex.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LeaveIndex_vue_vue_type_template_id_d677d0c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaveIndex.vue?vue&type=template&id=d677d0c4 */ "./resources/js/components/leave/LeaveIndex.vue?vue&type=template&id=d677d0c4");
/* harmony import */ var _LeaveIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveIndex.vue?vue&type=script&lang=js */ "./resources/js/components/leave/LeaveIndex.vue?vue&type=script&lang=js");



_LeaveIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LeaveIndex_vue_vue_type_template_id_d677d0c4__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LeaveIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/leave/LeaveIndex.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LeaveIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/leave/LeaveIndex.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/leave/LeaveIndex.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveIndex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveIndex.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveIndex.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/leave/LeaveIndex.vue?vue&type=template&id=d677d0c4":
/*!************************************************************************************!*\
  !*** ./resources/js/components/leave/LeaveIndex.vue?vue&type=template&id=d677d0c4 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveIndex_vue_vue_type_template_id_d677d0c4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveIndex_vue_vue_type_template_id_d677d0c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveIndex.vue?vue&type=template&id=d677d0c4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveIndex.vue?vue&type=template&id=d677d0c4");


/***/ })

}]);