(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_project_project-details_ProjectAttachment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _composables_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../composables/project */ "./resources/js/composables/project.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    slug: {
      required: true,
      type: String
    }
  },
  setup: function setup(props) {
    var slug = props.slug;

    var _useProjects = (0,_composables_project__WEBPACK_IMPORTED_MODULE_1__.default)(),
        project = _useProjects.project,
        getProjectBySlug = _useProjects.getProjectBySlug;

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getProjectBySlug(slug, 'attachment');

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return {
      project: project,
      slug: slug
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=template&id=16abe9ec":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=template&id=16abe9ec ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _hoisted_2 = {
  "class": "mt-3 text-2xl font-bold"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"bg-white overflow-hidden shadow-sm rounded-lg\"><div class=\"p-6 bg-white border-b border-gray-200\"><div class=\"md:grid md:grid-cols-3 md:gap-6 mb-6\"><div class=\"block\"> Created </div><div class=\"block\"> Active </div><div class=\"block\"> Completed </div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_project_nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-project-nav");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.project.title) + " | Attechments ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_project_nav, {
    slug: $setup.slug
  }, null, 8
  /* PROPS */
  , ["slug"])]), _hoisted_3], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/project.js":
/*!*********************************************!*\
  !*** ./resources/js/composables/project.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useProjects)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useProjects() {
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var projects = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var usersOptions = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    pm: [],
    developer: [],
    designer: [],
    bde: [],
    qa: [],
    customer: []
  });
  var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    current_page: 1,
    total: 0,
    per_page: 5,
    last_page: 0,
    links: []
  });
  var project = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    id: 0,
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    approx_hours: '',
    project_type: '',
    project_cost: '',
    project_status: '',
    developer: [],
    qa: [],
    bde: [],
    pm: [],
    designer: [],
    customer: [],
    _method: 'post'
  });
  var task = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({});
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    approx_hours: '',
    project_type: '',
    project_cost: '',
    project_status: '',
    developer: "",
    qa: '',
    bde: '',
    pm: '',
    designer: '',
    customer: ''
  });

  var getProjects = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/projects' + parameters);

            case 4:
              response = _context.sent;
              projects.value = response.data.data;

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

    return function getProjects(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getProject = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/projects/' + id);

            case 2:
              response = _context2.sent;
              project.value = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getProject(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getProjectBySlug = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(slug, page) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/projects/' + slug + '/' + page);

            case 2:
              response = _context3.sent;
              project.value = response.data;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getProjectBySlug(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getUsersDropdown = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var response, key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/project/users');

            case 2:
              response = _context4.sent;

              for (key in usersOptions.value) {
                usersOptions.value[key] = response.data[key];
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getUsersDropdown() {
      return _ref4.apply(this, arguments);
    };
  }();

  var storeProject = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/projects', data);

            case 4:
              _context5.next = 6;
              return router.push({
                name: 'project.index'
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

    return function storeProject(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var updateProject = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/projects/' + id, data);

            case 4:
              _context6.next = 6;
              return router.push({
                name: 'project.index'
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

    return function updateProject(_x6, _x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var deleteProject = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().delete('/api/projects/' + id);

            case 2:
              _context7.next = 4;
              return router.push({
                name: 'project.index'
              });

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function deleteProject(_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var getTask = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/tasks/' + id);

            case 2:
              response = _context8.sent;
              task.value = response.data;

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function getTask(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  var storeTask = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(id, data) {
      var key, responseErrors, _key4;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context9.prev = 1;
              _context9.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/projects/' + id + '/store-task', data);

            case 4:
              _context9.next = 9;
              break;

            case 6:
              _context9.prev = 6;
              _context9.t0 = _context9["catch"](1);

              if (_context9.t0.response.status === 422) {
                responseErrors = _context9.t0.response.data.errors;

                for (_key4 in responseErrors) {
                  errors.value[_key4] = responseErrors[_key4][0];
                }
              }

            case 9:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 6]]);
    }));

    return function storeTask(_x10, _x11) {
      return _ref9.apply(this, arguments);
    };
  }();

  var updateTask = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(id, data) {
      var key, responseErrors, _key5;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              for (key in errors.value) {
                errors.value[key] = '';
              }

              _context10.prev = 1;
              _context10.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/tasks/' + id, data);

            case 4:
              _context10.next = 9;
              break;

            case 6:
              _context10.prev = 6;
              _context10.t0 = _context10["catch"](1);

              if (_context10.t0.response.status === 422) {
                responseErrors = _context10.t0.response.data.errors;

                for (_key5 in responseErrors) {
                  errors.value[_key5] = responseErrors[_key5][0];
                }
              }

            case 9:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[1, 6]]);
    }));

    return function updateTask(_x12, _x13) {
      return _ref10.apply(this, arguments);
    };
  }();

  var getAssignedToUsers = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/tasks/assigned-to-users');

            case 2:
              response = _context11.sent;
              return _context11.abrupt("return", response.data);

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function getAssignedToUsers(_x14) {
      return _ref11.apply(this, arguments);
    };
  }();

  var getTasks = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/tasks/' + project.value.id + '/project');

            case 2:
              response = _context12.sent;
              return _context12.abrupt("return", response.data);

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function getTasks() {
      return _ref12.apply(this, arguments);
    };
  }();

  return {
    task: task,
    project: project,
    projects: projects,
    errors: errors,
    getTasks: getTasks,
    getProject: getProject,
    getProjects: getProjects,
    storeProject: storeProject,
    getProjectBySlug: getProjectBySlug,
    pagination: pagination,
    deleteProject: deleteProject,
    updateProject: updateProject,
    usersOptions: usersOptions,
    getUsersDropdown: getUsersDropdown,
    getAssignedToUsers: getAssignedToUsers,
    getTask: getTask,
    storeTask: storeTask,
    updateTask: updateTask
  };
}

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectAttachment.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectAttachment.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectAttachment_vue_vue_type_template_id_16abe9ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectAttachment.vue?vue&type=template&id=16abe9ec */ "./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=template&id=16abe9ec");
/* harmony import */ var _ProjectAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAttachment.vue?vue&type=script&lang=js */ "./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=script&lang=js");



_ProjectAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProjectAttachment_vue_vue_type_template_id_16abe9ec__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ProjectAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/project/project-details/ProjectAttachment.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectAttachment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=template&id=16abe9ec":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=template&id=16abe9ec ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectAttachment_vue_vue_type_template_id_16abe9ec__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectAttachment_vue_vue_type_template_id_16abe9ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectAttachment.vue?vue&type=template&id=16abe9ec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectAttachment.vue?vue&type=template&id=16abe9ec");


/***/ })

}]);