(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_service-ticket_ServiceTicketEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _composables_service_ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/service-ticket */ "./resources/js/composables/service-ticket.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");


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
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.user;
    });
    var id = props.id;

    var _useServiceTicket = (0,_composables_service_ticket__WEBPACK_IMPORTED_MODULE_2__.default)(),
        errors = _useServiceTicket.errors,
        serviceTicket = _useServiceTicket.serviceTicket,
        getServiceTicket = _useServiceTicket.getServiceTicket,
        updateServiceTicket = _useServiceTicket.updateServiceTicket;

    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getServiceTicket(id);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var saveServiceTicket = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                formData = new FormData();

                for (key in serviceTicket.value) {
                  formData.append(key, serviceTicket.value[key]);
                }

                formData.append("_method", "PATCH");
                _context2.next = 6;
                return updateServiceTicket(id, formData);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function saveServiceTicket(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return {
      user: user,
      errors: errors,
      serviceTicket: serviceTicket,
      saveServiceTicket: saveServiceTicket,
      priorityOptions: _utils__WEBPACK_IMPORTED_MODULE_3__.priorityOptions,
      serviceTicketTypeOptions: _utils__WEBPACK_IMPORTED_MODULE_3__.serviceTicketTypeOptions,
      serviceTicketStatusOptions: _utils__WEBPACK_IMPORTED_MODULE_3__.serviceTicketStatusOptions
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
}, " Service Ticket Edit ", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" List ");

var _hoisted_4 = {
  "class": "bg-white overflow-hidden shadow-sm rounded-lg"
};
var _hoisted_5 = {
  "class": "p-6 bg-white border-b border-gray-200"
};
var _hoisted_6 = {
  "class": "mb-6"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "title",
  "class": "input-form-label"
}, "Title", -1
/* HOISTED */
);

var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  "class": "mb-6"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "description",
  "class": "input-form-label"
}, "Description", -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = {
  "class": " mb-6"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "type",
  "class": "input-form-label"
}, "Type", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "mb-6"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "priority",
  "class": "input-form-label"
}, "Priority", -1
/* HOISTED */
);

var _hoisted_16 = {
  key: 0,
  "class": "mb-6"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "status",
  "class": "input-form-label"
}, "Status", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "btn-blue"
}, " Save ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'service-ticket.index'
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
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.saveServiceTicket && $setup.saveServiceTicket.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.serviceTicket.title = $event;
    }),
    id: "title",
    title: "title",
    "class": "input-form-control",
    placeholder: "Title",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.serviceTicket.title]]), $setup.errors.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.title), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.serviceTicket.description = $event;
    }),
    id: "description",
    name: "description",
    "class": "input-form-control",
    placeholder: "Description",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.serviceTicket.description]]), $setup.errors.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.description), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.serviceTicket.type = $event;
    }),
    name: "type",
    id: "type",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.serviceTicketTypeOptions, function (item) {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.serviceTicket.type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.serviceTicket.priority = $event;
    }),
    name: "priority",
    id: "priority",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.priorityOptions, function (item) {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.serviceTicket.priority]])]), ['super-admin', 'admin', 'hr'].includes($setup.user.role) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.serviceTicket.status = $event;
    }),
    name: "status",
    id: "status",
    "class": "input-form-control"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.serviceTicketStatusOptions, function (item) {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.serviceTicket.status]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_18], 32
  /* HYDRATE_EVENTS */
  )])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/service-ticket.js":
/*!****************************************************!*\
  !*** ./resources/js/composables/service-ticket.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useServiceTicket)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useServiceTicket() {
  var baseApiUrl = '/api/service-tickets/';
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var serviceTickets = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    current_page: 1,
    total: 0,
    per_page: 5,
    last_page: 0,
    links: []
  });
  var serviceTicket = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    title: '',
    description: '',
    priority: '',
    status: '',
    type: '',
    user_id: '',
    _method: 'post'
  });
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    title: '',
    description: '',
    priority: '',
    status: '',
    type: '',
    user_id: ''
  });

  var getServiceTickets = /*#__PURE__*/function () {
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
              serviceTickets.value = response.data.data;

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

    return function getServiceTickets(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getServiceTicket = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get(baseApiUrl + id);

            case 2:
              response = _context2.sent;
              serviceTicket.value = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getServiceTicket(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var storeServiceTicket = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(data) {
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
                name: 'service-ticket.index'
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

    return function storeServiceTicket(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var updateServiceTicket = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(id, data) {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post(baseApiUrl + id, data);

            case 4:
              _context4.next = 6;
              return router.push({
                name: 'service-ticket.index'
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

    return function updateServiceTicket(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var deleteServiceTicket = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().delete(baseApiUrl + id);

            case 2:
              _context5.next = 4;
              return router.push({
                name: 'service-ticket.index'
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function deleteServiceTicket(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  return {
    serviceTicket: serviceTicket,
    serviceTickets: serviceTickets,
    errors: errors,
    getServiceTicket: getServiceTicket,
    getServiceTickets: getServiceTickets,
    storeServiceTicket: storeServiceTicket,
    pagination: pagination,
    deleteServiceTicket: deleteServiceTicket,
    updateServiceTicket: updateServiceTicket
  };
}

/***/ }),

/***/ "./resources/js/components/service-ticket/ServiceTicketEdit.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/service-ticket/ServiceTicketEdit.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceTicketEdit_vue_vue_type_template_id_a1f2e06a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a */ "./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a");
/* harmony import */ var _ServiceTicketEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceTicketEdit.vue?vue&type=script&lang=js */ "./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=script&lang=js");



_ServiceTicketEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ServiceTicketEdit_vue_vue_type_template_id_a1f2e06a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ServiceTicketEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/service-ticket/ServiceTicketEdit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ServiceTicketEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceTicketEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceTicketEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServiceTicketEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceTicketEdit_vue_vue_type_template_id_a1f2e06a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ServiceTicketEdit_vue_vue_type_template_id_a1f2e06a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/service-ticket/ServiceTicketEdit.vue?vue&type=template&id=a1f2e06a");


/***/ })

}]);