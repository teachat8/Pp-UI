webpackJsonp([5],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_messageBox_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_messageBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_messageBox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_messageBox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_messageBox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_426bfcc5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_messageBox_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_messageBox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_426bfcc5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_messageBox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app\\pages\\messageBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-426bfcc5", Component.options)
  } else {
    hotAPI.reload("data-v-426bfcc5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Vue = __webpack_require__(0);

var _Vue2 = _interopRequireDefault(_Vue);

var _messageBox = __webpack_require__(69);

var _messageBox2 = _interopRequireDefault(_messageBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

_Vue2.default.use(_messageBox2.default);
exports.default = {
    name: 'messageBox-test',
    data: function data() {
        return {};
    },

    methods: {
        test1: function test1() {
            this.$messageBox({
                title: '提示',
                showCancelButton: false,
                message: '操作成功'
            });
        },
        test2: function test2() {
            this.$messageBox({
                title: '提示',
                message: '您是否需要删除？',
                sureCb: function sureCb() {
                    alert(1);
                },
                cancelCb: function cancelCb() {
                    alert(2);
                }
            });
        }
    }
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6e0a0f3a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426bfcc5\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./messageBox.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426bfcc5\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./messageBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports
exports.i(__webpack_require__(68), "");

// module
exports.push([module.i, "\n.toast-box {\r\n    padding-top: 8rem;\n}\n.test-btn {\r\n    display: block;\r\n    margin: 2rem auto;\r\n    width: 90%;\r\n    line-height: 2rem;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n    color: #333;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 3px;\n}\n.btn1 {\r\n    color: red;\n}\n.btn2 {\r\n    background: #878976;\r\n    color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".pp-box  {\r\n    \r\n}\r\n.pp-box .pp-bg {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n    background: rgba(0, 0, 0, .5);\r\n\r\n}\r\n.pp-box .pp-message {\r\n    position: absolute;\r\n    z-index: 1001;\r\n    left: 50%;\r\n    top: 50%;     \r\n    transform: translateX(-50%) translateY(-50%);        \r\n    width: 85%;\r\n    background: #fff;\r\n    color: #fff;\r\n    border-radius: 2px;\r\n    font-size: 14px;\r\n    word-break: break-all;\r\n    -webkit-animation: fade-in .1s;\r\n    font-size: 16px;\r\n}\r\n.pp-box .pp-out {\r\n    -webkit-animation: fade-out .1s;\r\n}\r\n@-webkit-keyframes fade-in {\r\n    0% {\r\n        -webkit-transform: translateX(-50%) translateY(-50%) scale(0, 0); \r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(-50%) translateY(-50%) scale(1, 1);     \r\n    }\r\n}\r\n@-webkit-keyframes fade-out {\r\n    0% {\r\n        -webkit-transform: translateX(-50%) translateY(-50%) scale(1, 1);             \r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(-50%) translateY(-50%) scale(0, 0);                   \r\n    }\r\n}\r\n.pp-box .pp-title {\r\n    padding-top: 15px;\r\n    text-align: center;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: #333;\r\n}\r\n.pp-box .pp-content {\r\n    padding: 10px 20px 15px;\r\n    border-bottom: 1px solid #ddd;\r\n    min-height: 36px;\r\n    position: relative;\r\n    color: #999;\r\n    text-align: center;\r\n    line-height: 36px;\r\n}\r\n.pp-box .pp-btns {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\r\n.pp-box .cancel-btn,\r\n.pp-box .sure-btn {\r\n    line-height: 35px;\r\n    background-color: #fff;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n}\r\n.pp-box .cancel-btn {\r\n    border-right: 1px solid #ddd;\r\n}\r\n.pp-box .sure-btn {\r\n    color: #26a2ff;\r\n}", ""]);

// exports


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MessageBox = {};
MessageBox.install = function (Vue) {
    // 添加实例方法，调用的时候就是this.$messageBox();
    Vue.prototype.$messageBox = function (options) {

        var opt = {
            // 提示框的标题
            title: '',
            // 文本内容
            message: '',

            // 是否显示确认按钮
            showConfirmButton: true,
            // 是否显示取消按钮            
            showCancelButton: true,
            // 确认按钮的文本
            confirmButtonText: '确定',

            // 确认按钮的类名
            confirmButtonClass: '',
            // 取消按钮的文本
            cancelButtonText: '取消',
            // 取消按钮的类名
            cancelButtonClass: '',
            // 是否在点击遮罩时关闭提示框
            closeOnClickModal: true,

            // 点击确定按钮的回调事件
            sureCb: function sureCb() {},


            // 点击取消按钮的回调事件            
            cancelCb: function cancelCb() {}
        };

        for (var x in options) {
            if (options[x] !== '') {
                opt[x] = options[x];
            }
        }

        var messageBoxTpl = Vue.extend({
            template: '<div class="pp-box" id="ppBox">\n                            <div class="pp-bg"></div>\n                            <div class="pp-message" id="ppMessage">\n                                <div class="pp-title">' + opt.title + '</div>\n                                <div class="pp-content">' + opt.message + '</div>\n                                <div class="pp-btns">\n                                    <button class="cancel-btn ' + opt.cancelButtonClass + '" id="cancelBtn">' + opt.cancelButtonText + '</button>\n                                    <button class="sure-btn ' + opt.confirmButtonClass + '" id="confirmBtn">' + opt.confirmButtonText + '</button>\n                                </div>            \n                            </div>\n                        </div>'
        });
        var tpl = new messageBoxTpl().$mount().$el;
        document.body.appendChild(tpl);

        var ppBox = document.querySelector('#ppBox'),
            ppMessage = ppBox.querySelector('#ppMessage'),
            confirmBtn = ppBox.querySelector('#confirmBtn'),
            cancelBtn = ppBox.querySelector('#cancelBtn');

        if (!opt.showCancelButton) {
            cancelBtn.style.display = 'none';
        }
        confirmBtn.onclick = function () {
            ppMessage.className += ' pp-out';
            setTimeout(function () {
                document.body.removeChild(tpl);
                opt.sureCb();
            }, 100);
        };
        cancelBtn.onclick = function () {
            ppMessage.className += ' pp-out';
            setTimeout(function () {
                document.body.removeChild(tpl);
                opt.cancelCb();
            }, 100);
        };
    };
};

exports.default = MessageBox;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "toast-box" }, [
    _c(
      "a",
      {
        staticClass: "test-btn",
        attrs: { href: "javascript:;" },
        on: { click: _vm.test1 }
      },
      [_vm._v("打开alert提示框")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "test-btn",
        attrs: { href: "javascript:;" },
        on: { click: _vm.test2 }
      },
      [_vm._v("打开prompt提示框")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-426bfcc5", esExports)
  }
}

/***/ })

});