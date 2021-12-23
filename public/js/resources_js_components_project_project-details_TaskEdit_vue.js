(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_project_project-details_TaskEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/TaskEdit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/TaskEdit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _composables_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../composables/project */ "./resources/js/composables/project.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    slug: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var id = props.id,
        slug = props.slug;

    var _useProjects = (0,_composables_project__WEBPACK_IMPORTED_MODULE_1__.default)(),
        task = _useProjects.task,
        errors = _useProjects.errors,
        getTask = _useProjects.getTask,
        updateTask = _useProjects.updateTask,
        getAssignedToUsers = _useProjects.getAssignedToUsers;

    var assignedToUsers = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.ref)([]);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getAssignedToUsers();

            case 2:
              assignedToUsers.value = _context.sent;
              _context.next = 5;
              return getTask(id);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var saveTask = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                task.value['_method'] = 'put';
                _context2.next = 3;
                return updateTask(id, task.value);

              case 3:
                goBack();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function saveTask() {
        return _ref3.apply(this, arguments);
      };
    }();

    var goBack = function goBack() {
      emit('clicked', 'someValue');
      router.push({
        name: 'project.task',
        params: {
          slug: slug
        }
      });
    };

    return {
      task: task,
      errors: errors,
      saveTask: saveTask,
      taskTypeOptions: _utils__WEBPACK_IMPORTED_MODULE_2__.taskTypeOptions,
      priorityOptions: _utils__WEBPACK_IMPORTED_MODULE_2__.priorityOptions,
      assignedToUsers: assignedToUsers,
      goBack: goBack
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/TaskEdit.vue?vue&type=template&id=0ae7739e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/TaskEdit.vue?vue&type=template&id=0ae7739e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed inset-0 flex justify-end z-50"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "fixed inset-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "absolute inset-0 bg-gray-600 opacity-75"
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "relative flex-1 flex flex-col max-w-xs md:max-w-sm lg:max-w-lg bg-white"
};
var _hoisted_4 = {
  "class": "absolute top-0 left-0 -ml-12 pt-2"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "block pt-4 pb-4 overflow-y-auto h-screen"
};
var _hoisted_8 = {
  "class": "block w-full px-4 mb-12"
};
var _hoisted_9 = {
  "class": "input-form-sub-heading mb-4 w-full",
  style: {
    paddingTop: 0
  }
};
var _hoisted_10 = {
  "class": "mb-6"
};
var _hoisted_11 = {
  "for": "title",
  "class": "input-form-label"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title ");

var _hoisted_13 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_14 = {
  "class": "mb-6"
};
var _hoisted_15 = {
  "for": "description",
  "class": "input-form-label"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Description ");

var _hoisted_17 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_18 = {
  "class": "mb-6"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "user_id",
  "class": "input-form-label"
}, "Assigned To", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", {
  value: ""
}, " - Assign Task To - ", -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 0,
  "class": "input-error"
};
var _hoisted_22 = {
  "class": "md:grid md:grid-cols-2 md:gap-6 mb-6"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "task_type",
  "class": "input-form-label"
}, "Task Type", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "priority",
  "class": "input-form-label"
}, "Task Priority", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "md:grid md:grid-cols-2 md:gap-6 mb-6"
};
var _hoisted_26 = {
  "class": "mb-6"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "due_date",
  "class": "input-form-label"
}, "Due Date", -1
/* HOISTED */
);

var _hoisted_28 = {
  key: 0,
  "class": "input-error"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "completion_rate",
  "class": "input-form-label"
}, "Completed", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "text-xs text-gray-400"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "History", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "w-full font-xs text-gray-500"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "text-left"
}, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", null, "Date")])], -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "absolute bottom-0 right-0 w-full"
};
var _hoisted_36 = {
  "class": "px-4 py-3 bg-gray-200 text-left sm:px-6"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "btn-blue"
}, " Save ", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_required = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-required");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "slide-from-left"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$setup$task$title;

      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.goBack();
        }),
        "class": "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
      }, [_hoisted_5, _hoisted_6])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
        onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.saveTask && $setup.saveTask.apply($setup, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$task$title = $setup.task.title) !== null && _$setup$task$title !== void 0 ? _$setup$task$title : "Edit Task"), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
        type: "text",
        placeholder: "Task Title",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.task.title = $event;
        }),
        "class": "input-form-control",
        required: ""
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.task.title]]), $setup.errors.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.title), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
        type: "text",
        placeholder: "Task description",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.task.description = $event;
        }),
        "class": "input-form-control",
        required: ""
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.task.description]]), $setup.errors.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.description), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.task.user_id = $event;
        }),
        "class": "input-form-control"
      }, [_hoisted_20, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.assignedToUsers, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
          key: item.id,
          value: item.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.first_name) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.last_name), 9
        /* TEXT, PROPS */
        , ["value"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.task.user_id]]), $setup.errors.user_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.user_id), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $setup.task.task_type = $event;
        }),
        "class": "input-form-control"
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.taskTypeOptions, function (item) {
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
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.task.task_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.task.priority = $event;
        }),
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
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.task.priority]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
        type: "date",
        placeholder: "Task Due Date",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $setup.task.due_date = $event;
        }),
        "class": "input-form-control",
        required: ""
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.task.due_date]]), $setup.errors.due_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.due_date), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
        type: "range",
        step: "1",
        min: "0",
        max: "100",
        "class": "w-full",
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.task.completion_rate = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.task.completion_rate]]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.task.completion_rate) + "%", 1
      /* TEXT */
      )])]), _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_33, [_hoisted_34, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.task.history, function (his, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(his.description), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filters.convertDateFormat(his.created_at)), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return $setup.goBack();
        }),
        type: "button",
        "class": "btn-red ml-3"
      }, " Cancel ")])])])], 32
      /* HYDRATE_EVENTS */
      )])];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_38]);
}

/***/ }),

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statusOptions": () => (/* binding */ statusOptions),
/* harmony export */   "genderOptions": () => (/* binding */ genderOptions),
/* harmony export */   "maritalStatusOptions": () => (/* binding */ maritalStatusOptions),
/* harmony export */   "projectStatusOptions": () => (/* binding */ projectStatusOptions),
/* harmony export */   "projectTypeOptions": () => (/* binding */ projectTypeOptions),
/* harmony export */   "taskStatusOptions": () => (/* binding */ taskStatusOptions),
/* harmony export */   "priorityOptions": () => (/* binding */ priorityOptions),
/* harmony export */   "taskTypeOptions": () => (/* binding */ taskTypeOptions)
/* harmony export */ });
var statusOptions = [{
  value: 1,
  display: 'Active'
}, {
  value: 0,
  display: 'InActive'
}];
var genderOptions = [{
  value: 0,
  display: 'Male'
}, {
  value: 1,
  display: 'Female'
}, {
  value: 2,
  display: 'Other'
}];
var maritalStatusOptions = [{
  value: 0,
  display: 'Un-married'
}, {
  value: 1,
  display: 'Married'
}, {
  value: 2,
  display: 'Divorced'
}];
var projectStatusOptions = ['Active', 'Hold', 'Completed', 'Closed', 'Archieved'];
var projectTypeOptions = ['Fixed', 'Hourly', 'Contract'];
var taskStatusOptions = ['Created', 'Active', 'Started', 'Paused', 'Completed', 'Archieved'];
var priorityOptions = ['Very Low', 'Low', 'Normal', 'High', 'Very High'];
var taskTypeOptions = ['Feature', 'Bug', 'Design', 'Other'];

/***/ }),

/***/ "./resources/js/components/project/project-details/TaskEdit.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/project/project-details/TaskEdit.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskEdit_vue_vue_type_template_id_0ae7739e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskEdit.vue?vue&type=template&id=0ae7739e */ "./resources/js/components/project/project-details/TaskEdit.vue?vue&type=template&id=0ae7739e");
/* harmony import */ var _TaskEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskEdit.vue?vue&type=script&lang=js */ "./resources/js/components/project/project-details/TaskEdit.vue?vue&type=script&lang=js");



_TaskEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TaskEdit_vue_vue_type_template_id_0ae7739e__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_TaskEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/project/project-details/TaskEdit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TaskEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/project/project-details/TaskEdit.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/TaskEdit.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TaskEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/TaskEdit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/project/project-details/TaskEdit.vue?vue&type=template&id=0ae7739e":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/TaskEdit.vue?vue&type=template&id=0ae7739e ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskEdit_vue_vue_type_template_id_0ae7739e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskEdit_vue_vue_type_template_id_0ae7739e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TaskEdit.vue?vue&type=template&id=0ae7739e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/TaskEdit.vue?vue&type=template&id=0ae7739e");


/***/ })

}]);