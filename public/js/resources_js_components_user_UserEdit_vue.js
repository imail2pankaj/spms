(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_UserEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user/UserEdit.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user/UserEdit.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _composables_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../composables/user */ "./resources/js/composables/user.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup: function setup(props) {
    var submitting = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var id = props.id;

    var _useUsers = (0,_composables_user__WEBPACK_IMPORTED_MODULE_3__.default)(),
        errors = _useUsers.errors,
        user = _useUsers.user,
        updateUser = _useUsers.updateUser,
        getUser = _useUsers.getUser,
        rolesOptions = _useUsers.rolesOptions,
        getRolesDropdown = _useUsers.getRolesDropdown;

    var profile_image = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var resume_file = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getRolesDropdown();

            case 2:
              _context.next = 4;
              return getUser(id);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var handleFileUpload = function handleFileUpload(e, file_type) {
      e.preventDefault();
      e.stopPropagation();

      if (file_type === 'profile_image') {
        profile_image.value = e.target.files[0];
      } else if (file_type === 'resume_file') {
        resume_file.value = e.target.files[0];
      }
    };

    var saveUser = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                submitting.value = true;
                formData = new FormData();

                for (key in user.value) {
                  if (key === 'profile_image') {
                    formData.append(key, profile_image.value);
                  } else if (key === 'resume_file') {
                    formData.append(key, resume_file.value);
                  } else {
                    formData.append(key, user.value[key]);
                  }
                }

                formData.append('_method', 'PATCH');
                _context2.next = 6;
                return updateUser(id, formData);

              case 6:
                submitting.value = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function saveUser() {
        return _ref2.apply(this, arguments);
      };
    }();

    return {
      user: user,
      errors: errors,
      saveUser: saveUser,
      submitting: submitting,
      rolesOptions: rolesOptions,
      statusOptions: _utils__WEBPACK_IMPORTED_MODULE_2__.statusOptions,
      genderOptions: _utils__WEBPACK_IMPORTED_MODULE_2__.genderOptions,
      handleFileUpload: handleFileUpload,
      maritalStatusOptions: _utils__WEBPACK_IMPORTED_MODULE_2__.maritalStatusOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user/UserEdit.vue?vue&type=template&id=45f4e59e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user/UserEdit.vue?vue&type=template&id=45f4e59e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
}, " User Edit ", -1
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

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading"
}, "Personal Information", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "md:grid md:grid-cols-3 md:gap-6 mb-6"
};
var _hoisted_9 = {
  "for": "first_name",
  "class": "input-form-label"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("First Name ");

var _hoisted_11 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "middle_name",
  "class": "input-form-label"
}, "Middle Name", -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_14 = {
  "for": "last_name",
  "class": "input-form-label"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last Name ");

var _hoisted_16 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "gender",
  "class": "input-form-label"
}, "Gender", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "marital_status",
  "class": "input-form-label"
}, "Marital Status", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "dob",
  "class": "input-form-label"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_20 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading"
}, "Profile Information", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "md:grid md:grid-cols-3 md:gap-6 mb-6"
};
var _hoisted_23 = {
  "for": "email",
  "class": "input-form-label"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email ");

var _hoisted_25 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "password",
  "class": "input-form-label"
}, "Password", -1
/* HOISTED */
);

var _hoisted_27 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "password_confirmation",
  "class": "input-form-label"
}, "Confirm Password", -1
/* HOISTED */
);

var _hoisted_29 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_30 = {
  "class": " "
};
var _hoisted_31 = {
  "for": "roles",
  "class": "input-form-label"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Role ");

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", {
  value: ""
}, " - Select Role -", -1
/* HOISTED */
);

var _hoisted_34 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "join_date",
  "class": "input-form-label"
}, "Joining Date", -1
/* HOISTED */
);

var _hoisted_36 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "resign_date",
  "class": "input-form-label"
}, "Resign Date", -1
/* HOISTED */
);

var _hoisted_38 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading"
}, "Contact Information", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "md:grid md:grid-cols-3 md:gap-6 mb-6"
};
var _hoisted_41 = {
  "for": "phone_number",
  "class": "input-form-label"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Phone Number ");

var _hoisted_43 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "emergency_phone_number",
  "class": "input-form-label"
}, "Emergency Phone Number", -1
/* HOISTED */
);

var _hoisted_45 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_46 = {
  "for": "address",
  "class": "input-form-label"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Address ");

var _hoisted_48 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_49 = {
  "for": "city",
  "class": "input-form-label"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("City ");

var _hoisted_51 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_52 = {
  "for": "state",
  "class": "input-form-label"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("State ");

var _hoisted_54 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_55 = {
  "for": "country",
  "class": "input-form-label"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Country ");

var _hoisted_57 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading"
}, "Other Information", -1
/* HOISTED */
);

var _hoisted_59 = {
  "class": "md:grid md:grid-cols-3 md:gap-6 mb-6"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "profile_image",
  "class": "input-form-label"
}, "Profile Image", -1
/* HOISTED */
);

var _hoisted_61 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "resume_file",
  "class": "input-form-label"
}, "Resume", -1
/* HOISTED */
);

var _hoisted_63 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_64 = {
  "for": "user_status",
  "class": "input-form-label"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Status ");

var _hoisted_66 = {
  "class": "px-4 py-3 bg-gray-50 text-left sm:px-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_app_required = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-required");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'user.index'
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
    onSubmit: _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.saveUser && $setup.saveUser.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "First Name",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.user.first_name = $event;
    }),
    id: "first_name",
    name: "first_name",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.first_name]]), $setup.errors.first_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.first_name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "Middle Name",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.user.middle_name = $event;
    }),
    id: "middle_name",
    name: "middle_name",
    "class": "input-form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.middle_name]]), $setup.errors.middle_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.middle_name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "Last Name",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.user.last_name = $event;
    }),
    id: "last_name",
    name: "last_name",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.last_name]]), $setup.errors.last_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.last_name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.user.gender = $event;
    }),
    name: "gender",
    id: "gender",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.genderOptions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item.value,
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.display), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.user.gender]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.user.marital_status = $event;
    }),
    name: "marital_status",
    id: "marital_status",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.maritalStatusOptions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item.value,
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.display), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.user.marital_status]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.user.dob = $event;
    }),
    id: "dob",
    name: "dob",
    "class": "input-form-control",
    placeholder: "Joining Date",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.dob]]), $setup.errors.dob ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.dob), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "email",
    placeholder: "Email",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.user.email = $event;
    }),
    id: "email",
    name: "email",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.email]]), $setup.errors.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.email), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "password",
    placeholder: "Password",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.user.password = $event;
    }),
    id: "password",
    name: "password",
    "class": "input-form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.password]]), $setup.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.password), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "password",
    placeholder: "Confirm Password",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.user.password_confirmation = $event;
    }),
    id: "password_confirmation",
    name: "password_confirmation",
    "class": "input-form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.password_confirmation]]), $setup.errors.password_confirmation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.password_confirmation), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.user.roles = $event;
    }),
    name: "roles",
    id: "roles",
    "class": "input-form-control"
  }, [_hoisted_33, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.rolesOptions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item.id,
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.user.roles]]), $setup.errors.roles ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.roles), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.user.join_date = $event;
    }),
    id: "join_date",
    name: "join_date",
    "class": "input-form-control",
    placeholder: "Joining Date"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.join_date]]), $setup.errors.join_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.join_date), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.user.resign_date = $event;
    }),
    id: "resign_date",
    name: "resign_date",
    "class": "input-form-control",
    placeholder: "Resign Date"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.resign_date]]), $setup.errors.resign_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.resign_date), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "tel",
    placeholder: "Phone Number",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.user.phone_number = $event;
    }),
    id: "phone_number",
    name: "phone_number",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.phone_number]]), $setup.errors.phone_number ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.phone_number), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "tel",
    placeholder: "Emergency Phone Number",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.user.emergency_phone_number = $event;
    }),
    id: "emergency_phone_number",
    name: "emergency_phone_number",
    "class": "input-form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.emergency_phone_number]]), $setup.errors.emergency_phone_number ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.emergency_phone_number), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "Address",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.user.address = $event;
    }),
    id: "address",
    name: "address",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.address]]), $setup.errors.address ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.address), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "City",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.user.city = $event;
    }),
    id: "city",
    name: "city",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.city]]), $setup.errors.city ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.city), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "State",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.user.state = $event;
    }),
    id: "state",
    name: "state",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.state]]), $setup.errors.state ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.state), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.user.country = $event;
    }),
    id: "country",
    name: "country",
    "class": "input-form-control",
    placeholder: "Country",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.country]]), $setup.errors.country ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.country), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "file",
    accept: "image/jpeg, image/png",
    ref: "profile_image",
    onChange: _cache[19] || (_cache[19] = function (e) {
      return $setup.handleFileUpload(e, 'profile_image');
    }),
    id: "profile_image",
    name: "profile_image",
    "class": "input-form-control"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), $setup.errors.profile_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.profile_image), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: 'uploads/user/profile_image/' + $setup.user.profile_image,
    alt: ""
  }, null, 8
  /* PROPS */
  , ["src"]), $setup.user.profile_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("img", {
    key: 1,
    src: '/uploads/user/profile_image/' + $setup.user.profile_image,
    "class": "w-20",
    alt: ""
  }, null, 8
  /* PROPS */
  , ["src"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "file",
    accept: ".doc, .docx,application/pdf, application/msword",
    ref: "resume_file",
    onChange: _cache[20] || (_cache[20] = function (e) {
      return $setup.handleFileUpload(e, 'resume_file');
    }),
    id: "resume_file",
    name: "resume_file",
    "class": "input-form-control"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), $setup.errors.resume_file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.resume_file), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.user.resume_file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("a", {
    key: 1,
    href: '/uploads/user/resume_file/' + $setup.user.resume_file,
    "class": "text-sm text-blue-500",
    download: ""
  }, "Download Resume", 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.user.user_status = $event;
    }),
    name: "user_status",
    id: "user_status",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.statusOptions, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      key: item.value,
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.display), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.user.user_status]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "submit",
    "class": "btn-blue",
    disabled: $setup.submitting
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.submitting ? 'Saving' : "Save"), 9
  /* TEXT, PROPS */
  , ["disabled"])])])])], 32
  /* HYDRATE_EVENTS */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/user.js":
/*!******************************************!*\
  !*** ./resources/js/composables/user.js ***!
  \******************************************/
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
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var users = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var rolesOptions = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    current_page: 1,
    total: 0,
    per_page: 5,
    last_page: 0,
    links: []
  });
  var user = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    emergency_phone_number: '',
    profile_image: '',
    gender: '',
    marital_status: '',
    dob: '',
    join_date: '',
    resign_date: '',
    resume_file: '',
    address: '',
    city: '',
    state: '',
    country: '',
    user_status: '',
    roles: [],
    _method: 'post'
  });
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    emergency_phone_number: '',
    profile_image: '',
    gender: '',
    marital_status: '',
    dob: '',
    join_date: '',
    resign_date: '',
    resume_file: '',
    address: '',
    city: '',
    state: '',
    country: '',
    user_status: '',
    roles: ''
  });

  var getUsers = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/users' + parameters);

            case 4:
              response = _context.sent;
              users.value = response.data.data;

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

    return function getUsers(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/users/' + id);

            case 2:
              response = _context2.sent;
              user.value = response.data;
              user.value.roles = response.data.roles[0].id;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getUser(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getRolesDropdown = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/user/roles');

            case 2:
              response = _context3.sent;
              rolesOptions.value = response.data;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getRolesDropdown() {
      return _ref3.apply(this, arguments);
    };
  }();

  var storeUser = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(data) {
      var key, responseErrors, _key2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context4.prev = 1;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/users', data);

            case 4:
              _context4.next = 6;
              return router.push({
                name: 'user.index'
              });

            case 6:
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.response.status === 422) {
                responseErrors = _context4.t0.response.data.errors;

                for (_key2 in responseErrors) {
                  errors.value[_key2] = responseErrors[_key2][0];
                }
              }

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }));

    return function storeUser(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateUser = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id, data) {
      var key, responseErrors, _key3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context5.prev = 1;
              _context5.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/users/' + id, data);

            case 4:
              _context5.next = 6;
              return router.push({
                name: 'user.index'
              });

            case 6:
              _context5.next = 11;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);

              if (_context5.t0.response.status === 422) {
                responseErrors = _context5.t0.response.data.errors;

                for (_key3 in responseErrors) {
                  errors.value[_key3] = responseErrors[_key3][0];
                }
              }

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 8]]);
    }));

    return function updateUser(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var deleteUser = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().delete('/api/users/' + id);

            case 2:
              _context6.next = 4;
              return router.push({
                name: 'user.index'
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function deleteUser(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  return {
    user: user,
    users: users,
    errors: errors,
    getUser: getUser,
    getUsers: getUsers,
    storeUser: storeUser,
    pagination: pagination,
    deleteUser: deleteUser,
    updateUser: updateUser,
    rolesOptions: rolesOptions,
    getRolesDropdown: getRolesDropdown
  };
}

/***/ }),

/***/ "./resources/js/components/user/UserEdit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/user/UserEdit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserEdit_vue_vue_type_template_id_45f4e59e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=45f4e59e */ "./resources/js/components/user/UserEdit.vue?vue&type=template&id=45f4e59e");
/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js */ "./resources/js/components/user/UserEdit.vue?vue&type=script&lang=js");



_UserEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _UserEdit_vue_vue_type_template_id_45f4e59e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_UserEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/user/UserEdit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UserEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/user/UserEdit.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/user/UserEdit.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user/UserEdit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/user/UserEdit.vue?vue&type=template&id=45f4e59e":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/user/UserEdit.vue?vue&type=template&id=45f4e59e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserEdit_vue_vue_type_template_id_45f4e59e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserEdit_vue_vue_type_template_id_45f4e59e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserEdit.vue?vue&type=template&id=45f4e59e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/user/UserEdit.vue?vue&type=template&id=45f4e59e");


/***/ })

}]);