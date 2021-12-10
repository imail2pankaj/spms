(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_user_components_UserProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/UserProfile.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/UserProfile.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.user;
    });
    var localUser = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(user, function (newValue) {
      return localUser.value = newValue;
    });
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      nameStatus: null,
      emailStatus: null,
      passwordStatus: null
    });

    var logout = function logout() {
      var instance = axios.create();
      var token = document.head.querySelector('meta[name="csrf-token"]');
      instance.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
      instance.defaults.baseURL = '/';
      axios.post('/logout', {
        _token: token
      }).then(function (response) {
        window.location.href = '/';
      });
    };

    return {
      localUser: localUser,
      logout: logout,
      state: state
    };
  }
}); // export default {
//     data() {
//         return {
//             // Data
//             localUser: {},
//             newUserData: {},
//             currentPassword: '',
//             newPassword: '',
//             state: {
//                 nameStatus: null,
//                 emailStatus: null,
//                 passwordStatus: null,
//             },
//         };
//     },
//     computed: {
//         // onTrial() {
//         //     if (this.subscriptions.length == 0) {
//         //         return false;
//         //     }
//         //     return this.subscriptions[0].stripe_status == 'trialing';
//         // },
//         // subscriptions() {
//         //     return this.$store.state.subscriptions;
//         // },
//         // trialEnd() {
//         //     if (this.subscriptions.length == 0) {
//         //         return false;
//         //     }
//         //     return new Intl.DateTimeFormat('en-US').format(new Date(this.subscriptions[0].trial_ends_at));
//         // },
//         // updateAvatarUrl() {
//         //     return '/api/v1/user/' + this.localUser.id + '/avatar';
//         // },
//         user() {
//             return this.$store.state.user;
//         },
//     },
//     methods: {
//         reload() {
//             location.reload();
//         },
//         reset() {
//             this.localUser = { ...this.user };
//             this.currentPassword = '';
//             this.newPassword = '';
//         },
//         updateEmail() {
//             if (this.localUser.email != this.user.email) {
//                 this.updateUser({ email: this.localUser.email });
//             }
//         },
//         updateName() {
//             if (this.localUser.name != this.user.name) {
//                 this.updateUser({ name: this.localUser.name });
//             }
//         },
//         updatePassword() {
//             if (this.currentPassword) {
//                 this.updateUser({ currentPassword: this.currentPassword, newPassword: this.newPassword });
//             }
//         },
//         updateUser(data) {
//             axios
//                 .patch('/api/v1/user/' + this.localUser.id, data)
//                 .then(response => {
//                     this.$store.commit('setUser', response.data);
//                     this.flash('success', data);
//                     this.reset();
//                 })
//                 .catch(error => {
//                     mixpanel.track('Error', {
//                         component: this.$options.name,
//                         actor: `axios.patch('/api/v1/user/${this.localUser.id}')`,
//                         data: this.newUserData,
//                         error: error,
//                     });
//                     let message;
//                     if (error.response.status == 422) {
//                         message = this.getFirstValidationError(error);
//                     } else {
//                         message = 'Error ' + error.response.status;
//                     }
//                     this.flash('failure', data, message, 5000);
//                 });
//         },
//         logout() {
//             let instance = axios.create();
//             let token = document.head.querySelector('meta[name="csrf-token"]');
//             instance.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
//             instance.defaults.baseURL = '/';
//             axios
//                 .post('/logout', {
//                     _token: token,
//                 })
//                 .then(response => {
//                     window.location.href = '/';
//                 });
//         },
//         flash(status, data, message = 'Updated!', duration = 3000) {
//             let element = null;
//             if (status == 'success') {
//                 element = `<span class="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">${message}</span>`;
//             } else {
//                 element = `<span class="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">${message}</span>`;
//             }
//             if (data.name) {
//                 this.state.nameStatus = element;
//             } else if (data.email) {
//                 this.state.emailStatus = element;
//             } else {
//                 this.state.passwordStatus = element;
//             }
//             setTimeout(() => {
//                 this.state.nameStatus = null;
//                 this.state.emailStatus = null;
//                 this.state.passwordStatus = null;
//             }, duration);
//         },
//         getFirstValidationError(error) {
//             return error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
//         },
//     },
//     mounted() {
//         // Populates the user info when user profile is loaded and there is already something in the store
//         this.localUser = { ...this.user };
//     },
// };

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/UserProfile.vue?vue&type=template&id=c1c8c60a":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/UserProfile.vue?vue&type=template&id=c1c8c60a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10"
};
var _hoisted_2 = {
  "class": "lg:grid lg:grid-cols-3 lg:gap-6"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "lg:col-span-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "px-4 sm:px-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-gray-900"
}, " Profile "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "mt-1 text-sm leading-5 text-gray-600"
}, " Information that is displayed on the website. ")])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "class": "block text-sm leading-5 font-medium text-gray-700"
}, " Avatar ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "mt-2 flex items-center"
};
var _hoisted_7 = {
  "class": "mt-5"
};
var _hoisted_8 = {
  "class": "w-full"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  "class": "block text-sm font-medium leading-5 text-gray-700"
}, "Name", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "flex flex-col items-center"
};
var _hoisted_11 = {
  "class": "mt-5 flex justify-end items-center w-full"
};
var _hoisted_12 = {
  "class": "w-full md:w-1/3 inline-flex rounded-md shadow-sm"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "hidden sm:block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "border-t border-gray-200"
})])], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "mt-10 sm:mt-0"
};
var _hoisted_15 = {
  "class": "lg:grid lg:grid-cols-3 lg:gap-6"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "lg:col-span-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "px-4 sm:px-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-gray-900"
}, " Account "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "mt-1 text-sm leading-5 text-gray-600"
}, " Information related to the access of your account. ")])], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6"
};
var _hoisted_18 = {
  "class": "w-full"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  "class": "block text-sm font-medium leading-5 text-gray-700"
}, "Email", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "flex flex-col items-center"
};
var _hoisted_21 = {
  "class": "mt-5 flex justify-end items-center w-full"
};
var _hoisted_22 = {
  "class": "w-full md:w-1/3 inline-flex rounded-md shadow-sm"
};
var _hoisted_23 = {
  "class": "mt-5 pt-6 border-t border-gray-200"
};
var _hoisted_24 = {
  "class": "w-full"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  "class": "block text-sm items-center font-medium leading-5 text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "mr-2"
}, "Update password")], -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "flex flex-col items-center"
};
var _hoisted_27 = {
  "class": "mt-5 flex justify-end items-center w-full"
};
var _hoisted_28 = {
  "class": "w-full md:w-1/3 inline-flex rounded-md shadow-sm"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "hidden sm:block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "border-t border-gray-200"
})])], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "mt-10 sm:mt-0"
};
var _hoisted_31 = {
  "class": "lg:grid lg:grid-cols-3 lg:gap-6"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "lg:col-span-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "px-4 sm:px-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-lg font-medium leading-6 text-gray-900"
}, " Session "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "mt-1 text-sm leading-5 text-gray-600"
}, " Manage the state of your session. ")])], -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6"
};
var _hoisted_34 = {
  "class": "w-full"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "name",
  "class": "block text-sm font-medium leading-5 text-gray-700"
}, "Log out", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "items-center grid grid-cols-3 gap-4"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "mt-1 col-span-3 md:col-span2 py-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
}, " Log out of the application. ", -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "mt-1 col-span-3 md:col-span-1 md:col-start-3 inline-flex rounded-md shadow-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_avatar_uploader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("avatar-uploader");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_avatar_uploader, {
    url: _ctx.updateAvatarUrl,
    onSuccess: _ctx.reload
  }, null, 8
  /* PROPS */
  , ["url", "onSuccess"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "class": "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.localUser.name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.localUser.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.state.nameStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: 0,
        "class": "mr-4",
        innerHTML: $setup.state.nameStatus
      }, null, 8
      /* PROPS */
      , ["innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.updateName && _ctx.updateName.apply(_ctx, arguments);
    }),
    type: "button",
    "class": "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
  }, " Update ")])])])])])])])]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "email",
    "class": "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.localUser.email = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.localUser.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.state.emailStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: 0,
        "class": "mr-4",
        innerHTML: $setup.state.emailStatus
      }, null, 8
      /* PROPS */
      , ["innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.updateEmail && _ctx.updateEmail.apply(_ctx, arguments);
    }),
    type: "button",
    "class": "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
  }, " Update ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "class": "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    placeholder: "Current Password",
    type: "password",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.currentPassword = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.currentPassword]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "class": "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",
    placeholder: "New Password",
    type: "password",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.newPassword = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.newPassword]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.state.passwordStatus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: 0,
        "class": "mr-4",
        innerHTML: $setup.state.passwordStatus
      }, null, 8
      /* PROPS */
      , ["innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[7] || (_cache[7] = function () {
      return _ctx.updatePassword && _ctx.updatePassword.apply(_ctx, arguments);
    }),
    type: "button",
    "class": "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
  }, " Update ")])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"hidden sm:block\">\r\n                <div class=\"py-5\">\r\n                    <div class=\"border-t border-gray-200\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"mt-10 sm:mt-0\">\r\n                <div class=\"lg:grid lg:grid-cols-3 lg:gap-6\">\r\n                    <div class=\"lg:col-span-1\">\r\n                        <div class=\"px-4 sm:px-0\">\r\n                            <h3 class=\"text-lg font-medium leading-6 text-gray-900\">Subscription</h3>\r\n                            <p class=\"mt-1 text-sm leading-5 text-gray-600\">\r\n                                Manage your subscription and view invoices.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6\">\r\n                        <div v-if=\"isGrandfathered\">\r\n                            <div class=\"mt-5\">\r\n                                <div class=\"w-full\">\r\n                                    <label for=\"name\" class=\"block text-sm font-medium leading-5 text-gray-700\">Plan</label>\r\n                                    <p class=\"mt-1 text-sm leading-5 text-gray-600\">\r\n                                        If you would like be able to manage your subscription and payment methods or make changes to your\r\n                                        subscription, email us at\r\n                                        <a\r\n                                            class=\"font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:underline quick-transition\"\r\n                                            href=\"mailto:support@vidhoarder.com\"\r\n                                            >support@vidhoarder.com</a\r\n                                        >.\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div v-else>\r\n                            <div v-if=\"onTrial\" class=\"bg-yellow-50 border rounded-md border-yellow-400 p-4\">\r\n                                <div class=\"flex\">\r\n                                    <div class=\"flex-shrink-0\">\r\n                                        <svg class=\"h-5 w-5 text-yellow-400\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\r\n                                            <path\r\n                                                fill-rule=\"evenodd\"\r\n                                                d=\"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z\"\r\n                                                clip-rule=\"evenodd\"\r\n                                            />\r\n                                        </svg>\r\n                                    </div>\r\n                                    <div class=\"ml-3\">\r\n                                        <p class=\"text-sm leading-5 text-yellow-700\">\r\n                                            You are on a trial plan which will upgrade to a standard plan on {{ trialEnd }}.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"mt-5\">\r\n                                <div class=\"w-full\">\r\n                                    <label for=\"name\" class=\"block text-sm font-medium leading-5 text-gray-700\">Plan</label>\r\n                                    <div\r\n                                        v-for=\"subscription in subscriptions\"\r\n                                        :key=\"subscription.stripe_id\"\r\n                                        class=\"mt-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between\"\r\n                                    >\r\n                                        <div class=\"sm:flex sm:items-start\">\r\n                                            <img class=\"h-8 w-auto\" src=\"/images/laravue3-logo.png\" alt=\"Vid Hoarder\" />\r\n                                            <div class=\"mt-3 sm:mt-0 sm:ml-4\">\r\n                                                <div class=\"text-sm leading-5 font-medium text-gray-900\">\r\n                                                    {{ subscription.name }}\r\n                                                    <span\r\n                                                        class=\"ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4\"\r\n                                                        :class=\"[\r\n                                                            subscription.stripe_status == 'active'\r\n                                                                ? 'bg-green-100 text-green-800'\r\n                                                                : 'bg-yellow-100 text-yellow-800',\r\n                                                        ]\"\r\n                                                    >\r\n                                                        {{ subscription.stripe_status.toUpperCase() }}\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"mt-5\">\r\n                                <div class=\"w-full\">\r\n                                    <label for=\"name\" class=\"block text-sm font-medium leading-5 text-gray-700\">Payment method</label>\r\n\r\n                                    <div class=\"mt-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between\">\r\n                                        <div class=\"sm:flex sm:items-start\">\r\n                                            <img class=\"h-8 w-auto\" :src=\"creditCardIconUrl\" alt=\"credit card\" />\r\n                                            <div class=\"mt-3 sm:mt-0 sm:ml-4\">\r\n                                                <div class=\"text-sm leading-5 font-medium text-gray-900\">\r\n                                                    Ending with {{ user.card_last_four }}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"mt-5 pt-6 border-t border-gray-200\">\r\n                                <div class=\"w-full\">\r\n                                    <label for=\"name\" class=\"block text-sm font-medium leading-5 text-gray-700\">Update billing</label>\r\n                                    <div class=\"flex items-center grid grid-cols-3 gap-4\">\r\n                                        <p\r\n                                            class=\"mt-1 col-span-3 md:col-span2 py-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5\"\r\n                                        >\r\n                                            Access your Stripe billing portal to update subscriptions and payment methods and view invoices.\r\n                                        </p>\r\n                                        <span class=\"mt-1 col-span-3 md:col-span-1 md:col-start-3 inline-flex rounded-md shadow-sm\">\r\n                                            <a\r\n                                                href=\"/billing\"\r\n                                                target=\"_blank\"\r\n                                                type=\"button\"\r\n                                                class=\"w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out\"\r\n                                            >\r\n                                                Access billing portal\r\n                                            </a>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> "), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "button",
    "class": "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out",
    onClick: _cache[8] || (_cache[8] = function () {
      return $setup.logout && $setup.logout.apply($setup, arguments);
    })
  }, " Log out ")])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mt-16 bg-gray-200 border-t border-gray-300\">\r\n      <div\r\n        class=\"max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:px-8 md:flex md:items-center md:justify-between\"\r\n      >\r\n        <div class=\"flex justify-center md:order-2\">\r\n          <a\r\n            href=\"#\"\r\n            target=\"_blank\"\r\n            class=\"text-gray-500 hover:text-gray-600 text-sm\"\r\n          >\r\n            Terms of Service\r\n          </a>\r\n          <a\r\n            href=\"#\"\r\n            target=\"_blank\"\r\n            class=\"ml-6 text-gray-500 hover:text-gray-600 text-sm\"\r\n          >\r\n            Terms of Use\r\n          </a>\r\n          <a\r\n            href=\"#\"\r\n            target=\"_blank\"\r\n            class=\"ml-6 text-gray-500 hover:text-gray-600 text-sm\"\r\n          >\r\n            Privacy Policy\r\n          </a>\r\n        </div>\r\n        <div class=\"mt-4 md:mt-0 md:order-1\">\r\n          <p class=\"text-center text-sm leading-6 text-gray-500\">\r\n            &copy; 2021\r\n            <a href=\"https://projectrebel.io\" target=\"_blank\">Project Rebel</a>,\r\n            LLC. All rights reserved.\r\n            <a class=\"text-sm leading-6 text-gray-500 underline\" href=\"#\">\r\n              v0.0.0\r\n            </a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div> ")]);
}

/***/ }),

/***/ "./resources/js/user/components/UserProfile.vue":
/*!******************************************************!*\
  !*** ./resources/js/user/components/UserProfile.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserProfile_vue_vue_type_template_id_c1c8c60a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=c1c8c60a */ "./resources/js/user/components/UserProfile.vue?vue&type=template&id=c1c8c60a");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js */ "./resources/js/user/components/UserProfile.vue?vue&type=script&lang=js");



_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _UserProfile_vue_vue_type_template_id_c1c8c60a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/user/components/UserProfile.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/user/components/UserProfile.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/user/components/UserProfile.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/UserProfile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/user/components/UserProfile.vue?vue&type=template&id=c1c8c60a":
/*!************************************************************************************!*\
  !*** ./resources/js/user/components/UserProfile.vue?vue&type=template&id=c1c8c60a ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_template_id_c1c8c60a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_template_id_c1c8c60a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserProfile.vue?vue&type=template&id=c1c8c60a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/user/components/UserProfile.vue?vue&type=template&id=c1c8c60a");


/***/ })

}]);