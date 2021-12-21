(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_project_project-details_ProjectTask_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/TaskItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/TaskItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _composables_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/project */ "./resources/js/composables/project.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    task: {
      required: true,
      type: Object
    }
  },
  setup: function setup(props) {
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

    var _useProjects = (0,_composables_project__WEBPACK_IMPORTED_MODULE_1__.default)(),
        startTask = _useProjects.startTask;

    var task = props.task;

    var openModal = function openModal(slug, id) {
      var data = {
        name: 'project.task.edit',
        params: {
          slug: slug,
          id: id
        }
      };
      router.push(data);
    };

    var startTaskStatus = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(task_id, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return startTask(task_id, status);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function startTaskStatus(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var deleteTask = function deleteTask() {};

    return {
      task: task,
      deleteTask: deleteTask,
      startTaskStatus: startTaskStatus,
      openModal: openModal
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectTask.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectTask.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../composables/project */ "./resources/js/composables/project.js");
/* harmony import */ var _common_TaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/TaskItem */ "./resources/js/components/common/TaskItem.vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TaskItem: _common_TaskItem__WEBPACK_IMPORTED_MODULE_3__.default
  },
  props: {
    slug: {
      required: true,
      type: String
    }
  },
  setup: function setup(props) {
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute)();
    var slug = props.slug;

    var _useProjects = (0,_composables_project__WEBPACK_IMPORTED_MODULE_2__.default)(),
        project = _useProjects.project,
        storeTask = _useProjects.storeTask,
        getProjectBySlug = _useProjects.getProjectBySlug,
        getTasks = _useProjects.getTasks;

    var task_title = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var tasks = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      created: [],
      active: [],
      completed: []
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getProjectBySlug(slug, "task");

            case 2:
              tasks.value.created = [];
              _context.next = 5;
              return getTasks();

            case 5:
              tasks.value = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(function () {
      return route.params.slug;
    }, /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(newSlug) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!newSlug) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return getProjectBySlug(newSlug, "task");

              case 3:
                tasks.value.created = [];
                _context2.next = 6;
                return getTasks();

              case 6:
                tasks.value = _context2.sent;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    var saveTask = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!task_title.value) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return storeTask(project.value.id, {
                  title: task_title.value
                });

              case 3:
                _context3.next = 5;
                return getProjectBySlug(slug, "task");

              case 5:
                task_title.value = "";

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function saveTask() {
        return _ref3.apply(this, arguments);
      };
    }();

    var onClickChild = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return getProjectBySlug(slug, "task");

                        case 2:
                          _context4.next = 4;
                          return getTasks();

                        case 4:
                          tasks.value = _context4.sent;

                        case 5:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })), 3000);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function onClickChild(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    return {
      task_title: task_title,
      tasks: tasks,
      saveTask: saveTask,
      project: project,
      slug: slug,
      onClickChild: onClickChild
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/TaskItem.vue?vue&type=template&id=4a665481":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/TaskItem.vue?vue&type=template&id=4a665481 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-1 text-sm flex hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-md mt-1 "
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_play_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("play-icon");

  var _component_pause_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pause-icon");

  var _component_delete_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("delete-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    "class": "flex-1",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.openModal($setup.task.project.slug, $setup.task.id);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.task.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.startTaskStatus($setup.task.id, $setup.task.task_status == 'Created' ? 'Started' : $setup.task.task_status == 'Active' ? 'Paused' : 'Active');
    }),
    "class": "w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300"
  }, [$setup.task.task_status != 'Paused' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_play_icon, {
    key: 0
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.task.task_status == 'Paused' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_pause_icon, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.deleteTask($setup.task.id);
    }),
    "class": "w-5 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_delete_icon)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectTask.vue?vue&type=template&id=20c324a8":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectTask.vue?vue&type=template&id=20c324a8 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between flex-col md:flex-row mb-2"
};
var _hoisted_2 = {
  "class": "mt-3 text-2xl font-bold"
};
var _hoisted_3 = {
  "class": "md:grid md:grid-cols-3 md:gap-6 mb-6"
};
var _hoisted_4 = {
  "class": "bg-white overflow-hidden shadow-sm rounded-lg w-full max-w-sm mb-6"
};
var _hoisted_5 = {
  "class": "p-6 bg-white border-b border-gray-200"
};
var _hoisted_6 = {
  "class": "block"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading mb-4",
  style: {
    paddingTop: 0
  }
}, "Created", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "shadow-md p-4 rounded-md border border-gray-200 mb-4"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex justify-between mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "pt-0.5 text-xs text-gray-400"
}, "Press enter to save task"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "link-blue text-xs p-1 pull-right"
}, " Save ")], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "bg-white overflow-hidden shadow-sm rounded-lg w-full max-w-sm mb-6"
};
var _hoisted_11 = {
  "class": "p-6 bg-white border-b border-gray-200"
};
var _hoisted_12 = {
  "class": "block"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading mb-4",
  style: {
    paddingTop: 0
  }
}, "Active", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-white overflow-hidden shadow-sm rounded-lg w-full max-w-sm mb-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "p-6 bg-white border-b border-gray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "input-form-sub-heading mb-4",
  style: {
    paddingTop: 0
  }
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <TaskItem\r\n              v-for=\"(task, index) in project.created\"\r\n              :key=\"index\"\r\n              :task=\"task\"\r\n            ></TaskItem> ")])])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_project_nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-project-nav");

  var _component_TaskItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TaskItem");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.project.title) + " | Tasks", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_project_nav, {
    slug: $setup.slug
  }, null, 8
  /* PROPS */
  , ["slug"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.saveTask && $setup.saveTask.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "Enter task title",
    name: "task_title",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.task_title = $event;
    }),
    "class": "input-form-control"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.task_title]]), _hoisted_9], 32
  /* HYDRATE_EVENTS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tasks.created, function (task, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TaskItem, {
      key: index,
      task: task
    }, null, 8
    /* PROPS */
    , ["task"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tasks.active, function (task, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TaskItem, {
      key: index,
      task: task
    }, null, 8
    /* PROPS */
    , ["task"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_ctx.$attrs, {
    onClicked: $setup.onClickChild
  }), {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var Component = _ref.Component;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: "fade",
        mode: "out-in"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(Component)))];
        }),
        _: 2
        /* DYNAMIC */

      }, 1024
      /* DYNAMIC_SLOTS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 16
  /* FULL_PROPS */
  , ["onClicked"])], 64
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
  var tasks = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({
    created: [],
    active: [],
    completed: []
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

  var startTask = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(task_id, status) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              data = {
                task_id: task_id,
                status: status,
                _method: 'put'
              };
              _context13.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().put('/api/tasks/' + task_id + '/update-status', data);

            case 3:
              return _context13.abrupt("return", _context13.sent);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function startTask(_x15, _x16) {
      return _ref13.apply(this, arguments);
    };
  }();

  return {
    task: task,
    project: project,
    projects: projects,
    errors: errors,
    startTask: startTask,
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

/***/ "./resources/js/components/common/TaskItem.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/common/TaskItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskItem_vue_vue_type_template_id_4a665481__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskItem.vue?vue&type=template&id=4a665481 */ "./resources/js/components/common/TaskItem.vue?vue&type=template&id=4a665481");
/* harmony import */ var _TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskItem.vue?vue&type=script&lang=js */ "./resources/js/components/common/TaskItem.vue?vue&type=script&lang=js");



_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TaskItem_vue_vue_type_template_id_4a665481__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/common/TaskItem.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectTask.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectTask.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectTask_vue_vue_type_template_id_20c324a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectTask.vue?vue&type=template&id=20c324a8 */ "./resources/js/components/project/project-details/ProjectTask.vue?vue&type=template&id=20c324a8");
/* harmony import */ var _ProjectTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectTask.vue?vue&type=script&lang=js */ "./resources/js/components/project/project-details/ProjectTask.vue?vue&type=script&lang=js");



_ProjectTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProjectTask_vue_vue_type_template_id_20c324a8__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ProjectTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/project/project-details/ProjectTask.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/common/TaskItem.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/common/TaskItem.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TaskItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/TaskItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectTask.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectTask.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectTask.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectTask.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/common/TaskItem.vue?vue&type=template&id=4a665481":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/common/TaskItem.vue?vue&type=template&id=4a665481 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_template_id_4a665481__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_template_id_4a665481__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TaskItem.vue?vue&type=template&id=4a665481 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/common/TaskItem.vue?vue&type=template&id=4a665481");


/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectTask.vue?vue&type=template&id=20c324a8":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectTask.vue?vue&type=template&id=20c324a8 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectTask_vue_vue_type_template_id_20c324a8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectTask_vue_vue_type_template_id_20c324a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectTask.vue?vue&type=template&id=20c324a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectTask.vue?vue&type=template&id=20c324a8");


/***/ })

}]);