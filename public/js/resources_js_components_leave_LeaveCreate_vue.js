(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_leave_LeaveCreate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveCreate.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveCreate.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _composables_leave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../composables/leave */ "./resources/js/composables/leave.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.useStore)();
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.user;
    });
    var diffDays = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
    var submitting = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

    var _useLeaves = (0,_composables_leave__WEBPACK_IMPORTED_MODULE_3__.default)(),
        errors = _useLeaves.errors,
        storeLeave = _useLeaves.storeLeave;

    var form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      description: '',
      comment: '',
      start_date: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
      end_date: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
      type: 'Half',
      status: 'Applied'
    });

    var saveLeave = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                submitting.value = true;
                formData = new FormData();

                for (key in form.value) {
                  formData.append(key, form.value[key]);
                }

                _context.next = 5;
                return storeLeave(formData);

              case 5:
                submitting.value = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function saveLeave() {
        return _ref.apply(this, arguments);
      };
    }();

    var handleDate = function handleDate(e) {
      var start = moment__WEBPACK_IMPORTED_MODULE_2___default()(form.value.start_date, "YYYY-MM-DD");
      var end = moment__WEBPACK_IMPORTED_MODULE_2___default()(form.value.end_date, "YYYY-MM-DD");

      if (start > end) {
        errors.value.end_date = 'End date can not be less than start date';
        disabled.value = true;
      } else {
        errors.value.end_date = '';
        disabled.value = false;
      }

      diffDays.value = moment__WEBPACK_IMPORTED_MODULE_2___default().duration(end.diff(start)).asDays();

      if (diffDays >= 1) {
        form.value.type = 'Full';
      } else {
        form.value.type = 'Half';
      }
    };

    return {
      form: form,
      errors: errors,
      saveLeave: saveLeave,
      submitting: submitting,
      handleDate: handleDate,
      managementRoles: _utils__WEBPACK_IMPORTED_MODULE_4__.managementRoles,
      user: user,
      disabled: disabled,
      leaveStatusOptions: _utils__WEBPACK_IMPORTED_MODULE_4__.leaveStatusOptions,
      leaveTypeOptions: _utils__WEBPACK_IMPORTED_MODULE_4__.leaveTypeOptions,
      diffDays: diffDays
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveCreate.vue?vue&type=template&id=2b7326e0":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveCreate.vue?vue&type=template&id=2b7326e0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
}, " Leave Create ", -1
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
  "class": "mb-6"
};
var _hoisted_8 = {
  "for": "description",
  "class": "input-form-label"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Description ");

var _hoisted_10 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_11 = {
  "class": "md:grid md:grid-cols-3 md:gap-6"
};
var _hoisted_12 = {
  "class": "mb-6"
};
var _hoisted_13 = {
  "for": "start_date",
  "class": "input-form-label"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Date ");

var _hoisted_15 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_16 = {
  "class": "mb-6"
};
var _hoisted_17 = {
  "for": "end_date",
  "class": "input-form-label"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("End Date ");

var _hoisted_19 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_20 = {
  "class": "mb-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "type",
  "class": "input-form-label"
}, "Type", -1
/* HOISTED */
);

var _hoisted_22 = {
  key: 0,
  "class": "mb-6"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "status",
  "class": "input-form-label"
}, "Status", -1
/* HOISTED */
);

var _hoisted_24 = {
  key: 1,
  "class": "mb-6"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "comment",
  "class": "input-form-label"
}, "Comment", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "px-4 py-3 bg-gray-50 text-left sm:px-6"
};
var _hoisted_27 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_app_required = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-required");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'leave.index'
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
    onSubmit: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.saveLeave && $setup.saveLeave.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    placeholder: "Description",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.description = $event;
    }),
    id: "description",
    name: "description",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.description]]), $setup.errors.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.description), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    onChange: _cache[2] || (_cache[2] = function () {
      return $setup.handleDate && $setup.handleDate.apply($setup, arguments);
    }),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.start_date = $event;
    }),
    id: "start_date",
    name: "start_date",
    "class": "input-form-control",
    placeholder: "Joining Date",
    required: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.start_date]]), $setup.errors.start_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.start_date), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    onChange: _cache[4] || (_cache[4] = function () {
      return $setup.handleDate && $setup.handleDate.apply($setup, arguments);
    }),
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.end_date = $event;
    }),
    id: "end_date",
    name: "end_date",
    "class": "input-form-control",
    placeholder: "Joining Date",
    required: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.end_date]]), $setup.errors.end_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.end_date), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form.type = $event;
    }),
    name: "type",
    id: "type",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.leaveTypeOptions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item,
      value: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item) + " Day ", 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.type]])]), $setup.managementRoles().includes($setup.user.role) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.status = $event;
    }),
    name: "status",
    id: "status",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.leaveStatusOptions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item,
      value: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.status]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.status !== 'Applied' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    placeholder: "Comment",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.comment = $event;
    }),
    id: "comment",
    name: "comment",
    "class": "input-form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.comment]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "submit",
    "class": "btn-blue",
    disabled: $setup.disabled || $setup.submitting
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.submitting ? 'Saving' : "Save"), 9
  /* TEXT, PROPS */
  , ["disabled"]), $setup.diffDays >= 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_27, " Leave " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.diffDays + 1) + " Day(s)", 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])], 32
  /* HYDRATE_EVENTS */
  )], 64
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

/***/ "./resources/js/components/leave/LeaveCreate.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/leave/LeaveCreate.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LeaveCreate_vue_vue_type_template_id_2b7326e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaveCreate.vue?vue&type=template&id=2b7326e0 */ "./resources/js/components/leave/LeaveCreate.vue?vue&type=template&id=2b7326e0");
/* harmony import */ var _LeaveCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveCreate.vue?vue&type=script&lang=js */ "./resources/js/components/leave/LeaveCreate.vue?vue&type=script&lang=js");



_LeaveCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LeaveCreate_vue_vue_type_template_id_2b7326e0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LeaveCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/leave/LeaveCreate.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LeaveCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/leave/LeaveCreate.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/leave/LeaveCreate.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCreate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCreate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveCreate.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/leave/LeaveCreate.vue?vue&type=template&id=2b7326e0":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/leave/LeaveCreate.vue?vue&type=template&id=2b7326e0 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCreate_vue_vue_type_template_id_2b7326e0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCreate_vue_vue_type_template_id_2b7326e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCreate.vue?vue&type=template&id=2b7326e0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/leave/LeaveCreate.vue?vue&type=template&id=2b7326e0");


/***/ })

}]);