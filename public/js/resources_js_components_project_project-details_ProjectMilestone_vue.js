(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_project_project-details_ProjectMilestone_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    var milestones = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var showModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var item_id = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);

    var _useProjects = (0,_composables_project__WEBPACK_IMPORTED_MODULE_2__.default)(),
        project = _useProjects.project,
        deleteMilestone = _useProjects.deleteMilestone,
        getProjectBySlug = _useProjects.getProjectBySlug,
        getProjectMilestones = _useProjects.getProjectMilestones,
        submitProjectMilestone = _useProjects.submitProjectMilestone;

    var form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      title: '',
      start_date: '',
      end_date: ''
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getProjectBySlug(slug, 'milestone');

            case 2:
              _context.next = 4;
              return fetchMilestones();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var fetchMilestones = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getProjectMilestones();

              case 2:
                milestones.value = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchMilestones() {
        return _ref2.apply(this, arguments);
      };
    }();

    var togglePopup = function togglePopup() {
      showModal.value = !showModal.value;
    };

    var destroyRecord = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(itemId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return deleteMilestone(project.value.id, itemId);

              case 2:
                _context3.next = 4;
                return fetchMilestones();

              case 4:
                togglePopup();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function destroyRecord(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var saveMilestone = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // submitting.value = true;
                formData = new FormData();

                for (key in form.value) {
                  formData.append(key, form.value[key]);
                }

                _context4.next = 4;
                return submitProjectMilestone(project.value.id, formData);

              case 4:
                _context4.next = 6;
                return fetchMilestones();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function saveMilestone() {
        return _ref4.apply(this, arguments);
      };
    }();

    return {
      project: project,
      form: form,
      slug: slug,
      saveMilestone: saveMilestone,
      item_id: item_id,
      milestones: milestones,
      destroyRecord: destroyRecord,
      showModal: showModal,
      togglePopup: togglePopup
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=template&id=33297559":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=template&id=33297559 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "bg-white overflow-hidden shadow-sm rounded-lg"
};
var _hoisted_4 = {
  "class": "p-6 bg-white border-b border-gray-200"
};
var _hoisted_5 = {
  "class": "grid grid-cols-3 gap-4"
};
var _hoisted_6 = {
  "class": ""
};
var _hoisted_7 = {
  "class": "mb-6"
};
var _hoisted_8 = {
  "for": "title",
  "class": "input-form-label"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Title ");

var _hoisted_10 = {
  "class": "mb-6"
};
var _hoisted_11 = {
  "for": "start_date",
  "class": "input-form-label"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Start Date ");

var _hoisted_13 = {
  "class": "mb-6"
};
var _hoisted_14 = {
  "for": "end_date",
  "class": "input-form-label"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("End Date ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mb-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "btn-blue"
}, " Submit ")], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "col-span-2"
};
var _hoisted_18 = {
  "class": "min-w-max w-full table-auto"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", {
  "class": "bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "Start Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-left"
}, "End Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "py-2 px-2 text-center"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "text-gray-900 text-sm font-light"
};
var _hoisted_21 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_22 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_23 = {
  "class": "py-2 px-2 text-left whitespace-nowrap"
};
var _hoisted_24 = {
  "class": "py-2 px-2 text-center"
};
var _hoisted_25 = {
  key: 0
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "py-2 px-2 text-center",
  colspan: "4"
}, "No Milestones found", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_project_nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-project-nav");

  var _component_app_required = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-required");

  var _component_delete_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("delete-icon");

  var _component_app_confirm_delete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("app-confirm-delete");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.project.title) + " | Milestones ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_project_nav, {
    slug: $setup.slug
  }, null, 8
  /* PROPS */
  , ["slug"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.saveMilestone && $setup.saveMilestone.apply($setup, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    placeholder: "Title",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.title = $event;
    }),
    id: "title",
    name: "title",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.title]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"input-error\" v-if=\"errors.title\">{{ errors.title }}</span> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    placeholder: "Start Date",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.start_date = $event;
    }),
    id: "start_date",
    name: "start_date",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.start_date]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"input-error\" v-if=\"errors.start_date\">{{ errors.start_date }}</span> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_required)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "date",
    placeholder: "End Date",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.end_date = $event;
    }),
    id: "end_date",
    name: "end_date",
    "class": "input-form-control",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.end_date]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"input-error\" v-if=\"errors.end_date\">{{ errors.end_date }}</span> ")]), _hoisted_16], 32
  /* HYDRATE_EVENTS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.milestones, function (milestone, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: index,
      "class": "border-b border-gray-200 hover:bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(milestone.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(milestone.start_date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(milestone.end_date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "button",
      onClick: function onClick($event) {
        $setup.item_id = milestone.id;
        $setup.togglePopup();
      },
      "class": "no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_delete_icon)], 8
    /* PROPS */
    , ["onClick"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), !$setup.milestones.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", _hoisted_25, [_hoisted_26])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_app_confirm_delete, {
    modalHeadline: "Delete Milestone?",
    deleteMessage: "Are you sure?",
    onDeleteRecordEvent: _cache[5] || (_cache[5] = function ($event) {
      return $setup.destroyRecord($setup.item_id);
    }),
    onClose: $setup.togglePopup
  }, null, 8
  /* PROPS */
  , ["onClose"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showModal]])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectMilestone.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectMilestone.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectMilestone_vue_vue_type_template_id_33297559__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectMilestone.vue?vue&type=template&id=33297559 */ "./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=template&id=33297559");
/* harmony import */ var _ProjectMilestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectMilestone.vue?vue&type=script&lang=js */ "./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=script&lang=js");



_ProjectMilestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProjectMilestone_vue_vue_type_template_id_33297559__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ProjectMilestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/project/project-details/ProjectMilestone.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProjectMilestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMilestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMilestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMilestone.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=template&id=33297559":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=template&id=33297559 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMilestone_vue_vue_type_template_id_33297559__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMilestone_vue_vue_type_template_id_33297559__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMilestone.vue?vue&type=template&id=33297559 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/project-details/ProjectMilestone.vue?vue&type=template&id=33297559");


/***/ })

}]);