webpackJsonp([3],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19239379_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swiper_vue__ = __webpack_require__(77);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(71)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19239379"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19239379_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swiper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app\\pages\\swiper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19239379", Component.options)
  } else {
    hotAPI.reload("data-v-19239379", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _swiper = __webpack_require__(73);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'upRefresh-test',
    data: function data() {
        return {
            lazyLoading: true,
            time: 0
        };
    },


    components: {
        swiper: _swiper2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'pp-swiper',

    props: {

        // 是否开启懒加载
        lazyLoading: {
            type: Boolean,
            required: false,
            default: false
        },

        // // 自动切换时间间隔
        autoPlay: {
            type: Number,
            required: false,
            default: 3000
        }
    },
    data: function data() {
        return {
            dom: null,
            // 包裹整个插件的容器
            swiperDom: null,
            // 容器宽度
            winWidth: 0,
            // sliding块数组，这里要在确定的容器下面查找，否则会出现多余的dom结构，当一个页面有多个该插件调用的时候
            slidingList: null,
            // 圆点容器
            pagination: document.querySelector('.pagination'),
            // 整个容器每次开始滑动的translateX
            startLeft: 0,
            // 整个容器每次结束滑动的translateX   
            endLeft: 0,
            // 每次手指开始滑动时候距离屏幕左边的距离（不包含滚动条距离，下同）
            startX: 0,
            // 每次手指开始滑动时候距离屏幕上边的距离    
            startY: 0,
            // 判断该次滑动是否是横向滑动
            swipeX: true,
            // 判断该次滑动是否是轴向滑动
            swipeY: true,
            //  圆点domList
            paginationList: null,
            // 当前显示的index
            index: 1,
            // banner总数
            num: 0,
            reg: /\-?[0-9]+/g,
            // 每次手指开始触摸屏幕的时间点
            startTime: 0,
            // 每次手指离开屏幕的时间点
            endTime: 0,
            // 判断一次滑动是否完整结束,可以防止用户滑动过快导致一些bug
            oneEnd: true,
            // 定时器
            timer: null,
            // 是否第一次
            isFirst: true
        };
    },
    mounted: function mounted() {
        this.init();
    },


    methods: {
        init: function init() {
            var _this = this;

            // 初始化dom
            this.dom = this.$refs.swiperContainer;
            this.swiperDom = this.$refs.swiperWrapper;
            this.pagination = this.dom.querySelector('.pagination');
            this.paginationList = this.pagination.getElementsByTagName('span');
            this.slidingList = this.dom.querySelectorAll('.swiper-slide');
            this.winWidth = this.swiperDom.clientWidth;
            this.num = this.slidingList.length;
            // 如果只有一张图片（也许运营就喜欢放一张呢）
            if (this.num <= 1) {
                return;
            } else {
                // 初始化pagination
                var oFrag = document.createDocumentFragment();
                for (var i = 0; i < this.num; i++) {
                    var spanItem = document.createElement('span'),
                        className = 'swiper-pagination-bullet';
                    if (i === 0) {
                        className += ' swiper-pagination-bullet-active';
                    }
                    spanItem.className = className;
                    oFrag.appendChild(spanItem);
                }

                this.pagination.appendChild(oFrag);
                this.paginationList = this.pagination.getElementsByTagName('span');

                // 克隆收尾的图片结构，为无缝轮播做准备
                var firstNode = this.slidingList[0].cloneNode(true),
                    lastNode = this.slidingList[this.num - 1].cloneNode(true),
                    oFrag = document.createDocumentFragment();
                this.swiperDom.insertBefore(lastNode, this.slidingList[0]);
                this.swiperDom.appendChild(firstNode);
                this.swiperDom.style.webkitTransform = 'translate3d(' + -this.winWidth + 'px,0px,0px)';
                this.slidingList = this.dom.querySelectorAll('.swiper-slide');

                //加载真实图片，如果设置了懒加载功能
                this.lazyPlay(this.index);

                // 开启定时器，如果设置了定时器时间间隔
                this.setTimer();

                // 绑定手指触摸事件
                this.swiperDom.addEventListener('touchstart', function (event) {
                    _this.startListener(event);
                });

                // 绑定手指滑动事件            
                this.swiperDom.addEventListener('touchmove', function (event) {
                    if (_this.oneEnd) {
                        _this.moveListener(event);
                    } else {
                        return;
                    }
                });

                // 绑定手指结束滑动事件            
                this.swiperDom.addEventListener('touchend', function (event) {
                    _this.endListener(event);
                });

                // 绑定TransitionEnd事件 
                this.swiperDom.addEventListener('webkitTransitionEnd', function (event) {
                    _this.oneEnd = false;
                    _this.transitionEndListener(event);
                });
            }
        },


        // touchstart事件
        startListener: function startListener(event) {
            event.preventDefault();
            var target = event.targetTouches[0];
            // 禁止自动播放（如果设置了定时器时间间隔）
            clearInterval(this.timer);
            // 获取当前时间，后面用来判断是否点滑需要用到 
            this.startTime = new Date().getTime();
            // 记录当前滑动容器的translate3d值
            this.startLeft = parseFloat(this.swiperDom.style.webkitTransform.match(this.reg)[1]);
            this.startX = target.pageX;
            this.startY = target.pageY;
        },

        // touchmove事件
        moveListener: function moveListener(event) {
            this.swiperDom.style.transitionDuration = '0ms';
            event.preventDefault();
            var target = event.targetTouches[0];
            this.moveX = target.pageX;
            this.moveY = target.pageY;
            // 判断是X轴滑动
            if (this.swipeX && this.cal(this.startX, this.startY, this.moveX, this.moveY)) {
                this.swipeY = false;
                var x = this.moveX - this.startX;
                if (Math.abs(x) > this.winWidth) {
                    return;
                }
                x = parseFloat(this.startLeft + x);
                this.swiperDom.style.webkitTransform = 'translate3d(' + x + 'px,0px,0px)';
            } else {
                this.swipeX = false;
            }
        },

        // touchend事件
        endListener: function endListener(event) {
            this.oneEnd = false;
            // 重新开启自动播放（如果设置了定时器时间间隔）
            this.setTimer();
            // 获取当前时间，后面用来判断是否点滑需要用到         
            this.endTime = new Date().getTime();
            this.endLeft = this.getTranslate3d();
            // 滑动距离
            var distance = Math.abs(this.endLeft - this.startLeft),
                halfWinWith = this.winWidth / 2,
                left = this.startLeft;
            // 手指接触屏幕时间小于200ms，开启点滑效果
            if (this.endTime - this.startTime <= 300) {
                halfWinWith = 10;
            }

            if (this.endLeft <= this.startLeft) {
                // 向左滑动 未过临界值
                if (distance <= halfWinWith) {
                    left = this.startLeft;
                } else {
                    left = this.startLeft - this.winWidth;
                }
            } else {
                // 向右滑动 未过临界值
                if (distance <= halfWinWith) {
                    left = this.startLeft;
                } else {
                    left = this.startLeft + this.winWidth;
                }
            }
            this.swiperDom.style.transitionDuration = '400ms';
            this.swiperDom.style.webkitTransform = 'translate3d(' + left + 'px,0px,0px)';
        },

        // TransitionEnd事件
        transitionEndListener: function transitionEndListener(e) {
            var _this2 = this;

            this.isFirst = false;
            this.swiperDom.style.transitionDuration = '0ms';
            // 重新计算当前index
            this.index = Math.floor(-this.getTranslate3d() / this.winWidth - 1);

            // 对2种临界状态做一个判断
            if (this.index <= -1) {
                this.index = this.num - 1;
                this.swiperDom.style.webkitTransform = 'translate3d(' + -this.winWidth * this.num + 'px,0px,0px)';
            }
            if (this.index >= this.num) {
                this.index = 0;
                this.swiperDom.style.webkitTransform = 'translate3d(' + -this.winWidth + 'px,0px,0px)';
            }
            this.lazyPlay(this.index + 1);

            // 给pagination里面的圆点添加对应样式
            for (var i = 0; i < this.num; i++) {
                this.paginationList[i].className = 'swiper-pagination-bullet';
            }
            this.paginationList[this.index].className = 'swiper-pagination-bullet swiper-pagination-bullet-active';

            setTimeout(function () {
                _this2.oneEnd = true;
            }, 200);
        },

        // 自动轮播
        autoMove: function autoMove() {
            this.isFirst ? this.index++ : this.index = this.index + 2;
            this.swiperDom.style.transitionDuration = '400ms';
            this.swiperDom.style.webkitTransform = 'translate3d(' + -this.index * this.winWidth + 'px,0px,0px)';
        },

        // 自动轮播定时器
        setTimer: function setTimer() {
            var _this3 = this;

            clearInterval(this.timer);
            if (this.autoPlay >= 1000) {
                this.timer = setInterval(function () {
                    _this3.autoMove();
                }, this.autoPlay);
            }
        },

        // 如果开启了懒加载模式
        lazyPlay: function lazyPlay(index) {
            if (this.lazyLoading && this.slidingList[index]) {
                var slidingDom = this.slidingList[index],
                    imgDom = slidingDom.querySelector('img'),
                    lazyDom = slidingDom.querySelector('.swiper-lazy-preloader');
                if (imgDom.getAttribute('data-src')) {
                    imgDom.src = imgDom.getAttribute('data-src');
                    imgDom.removeAttribute('data-src');
                    if (lazyDom) {
                        slidingDom.removeChild(lazyDom);
                    }
                }
                // 如果是第一个则将最后一个由第一个克隆的也转化
                if (index === 1) {
                    this.lazyPlay(this.num + 1);
                }
                // 如果是最后一个则将第0个由第this.num-1个克隆的也转化        
                if (index === this.num) {
                    this.lazyPlay(0);
                }
            }
        },

        //  实时获取当前滑动容器的translate3d值
        getTranslate3d: function getTranslate3d() {
            return parseFloat(this.swiperDom.style.webkitTransform.match(this.reg)[1]);
        },

        //  判断是否X轴滑动
        cal: function cal(x1, y1, x2, y2) {
            return Math.abs(x2 - x1) >= Math.abs(y2 - y1);
        }
    }
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0e31e867", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19239379\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./swiper.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19239379\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./swiper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.top-box[data-v-19239379] {\r\n    line-height: 3rem;\r\n    text-align: center;\n}\n.item1[data-v-19239379],\r\n.item2[data-v-19239379],\r\n.item3[data-v-19239379] {\r\n    background: #ff2d4b;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    line-height: 10rem;\n}\n.item2[data-v-19239379] {\r\n    background: #ffd705;\n}\n.item3[data-v-19239379] {\r\n    background: #0089dc;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7574542_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swiper_vue__ = __webpack_require__(76);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swiper_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7574542_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swiper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app\\components\\Swiper\\swiper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7574542", Component.options)
  } else {
    hotAPI.reload("data-v-b7574542", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0000b824", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7574542\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./swiper.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7574542\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./swiper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\nbody,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{font-family:\"Microsoft YaHei\",Arial,Helvetica,sans-serif;margin:0;padding:0\n}\nhtml{font-size:1rem;\n}\naddress,caption,cite,code,dfn,em,strong,th,var{font-style:normal\n}\ntable{border-collapse:collapse;border-spacing:0\n}\nq:before,q:after{content:''\n}\nobject,embed{vertical-align:top\n}\nhr,legend{display:none\n}\nimg,abbr,acronym,fieldset{border:0\n}\nul li{list-style-type:none\n}\na,label{cursor:pointer\n}\nimg{vertical-align:bottom;margin:0;padding:0\n}\na{text-decoration:none;outline:0\n}\nh1,h2,h3,h4,h5,h6{font-weight: 400\n}\n.clearfix:after{content:\".\";visibility:hidden;display:block;height:.1px;font-size:.1em;line-height:0;clear:both\n}\n.clearfix{*zoom:1\n}\ninput,textarea,select{outline:0;border:1px solid #ccc;border-radius: 0;\n}\ninput:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#ccc\n}\ninput::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#ccc\n}\n*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box\n}\nbutton{cursor:pointer;color:#666\n}\ntextarea{resize:none;outline:0;overflow:hidden;padding:5px\n}\nselect{outline:0\n}\nimg{max-width: 100%\n}\n*{-webkit-tap-highlight-color:rgba(255,255,255,0); -webkit-appearance: none;\n}\nbody{max-width: 640px;margin: 0 auto;background-color: #f8f9fc;\n}\nimg{outline:none;\n}\nhtml{font-family: Helvetical;color: rgb(102, 102, 102);overflow-y:hidden ;min-width: 320px;max-width: 640px;margin: 0 auto;\n}\nimg {\r\n    max-width: 100%;\n}\n.swiper-container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n    height: 12rem;\n}\n.swiper-container .swiper-wrapper {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    display: -webkit-box;\r\n    display: -moz-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\n}\n.swiper-container .swiper-slide {\r\n    -webkit-flex-shrink: 0;\r\n    -ms-flex: 0 0 auto;\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\n}\n.swiper-container .link-item {\r\n    display: block;\r\n    height: 100%;\n}\n.swiper-container .link-item img {\r\n    display: block;\r\n    width: 100%;\n}\n.swiper-container .pagination {\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 10px;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\n}\n.swiper-container .swiper-pagination-bullet {\r\n    display: inline-block;\r\n    margin: 0 2px;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n    opacity: .6;\n}\n.swiper-container .swiper-pagination-bullet-active {\r\n    background: #9f2e33;\r\n    opacity: 1;\n}\n.swiper-container .swiper-lazy-preloader {\r\n    width: 42px;\r\n    height: 42px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -21px;\r\n    margin-top: -21px;\r\n    z-index: 10;\r\n    -webkit-transform-origin: 50%;\r\n    -moz-transform-origin: 50%;\r\n    transform-origin: 50%;\r\n    -webkit-animation: swiper-preloader-spin 1s steps(12,end) infinite;\r\n    -moz-animation: swiper-preloader-spin 1s steps(12,end) infinite;\r\n    animation: swiper-preloader-spin 1s steps(12,end) infinite;\n}\n.swiper-container .swiper-lazy-preloader:after {\r\n\tdisplay: block;\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\r\n\tbackground-position: 50%;\r\n\t-webkit-background-size: 100%;\r\n\tbackground-size: 100%;\r\n\tbackground-repeat: no-repeat\n}\n.swiper-container .swiper-lazy-preloader-white:after {\r\n\tbackground-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")\n}\n@-webkit-keyframes swiper-preloader-spin {\n100% {\r\n\t\t-webkit-transform: rotate(360deg)\n}\n}\n@keyframes swiper-preloader-spin {\n100% {\r\n\t\ttransform: rotate(360deg)\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "swiperContainer", staticClass: "swiper-container" },
    [
      _c(
        "div",
        { ref: "swiperWrapper", staticClass: "swiper-wrapper" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "pagination" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b7574542", esExports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "top-box" }, [_vm._v("Swiper")]),
      _vm._v(" "),
      _c("p", { staticClass: "top-box" }, [_vm._v("1.基础用法")]),
      _vm._v(" "),
      _c("swiper", [
        _c("div", { staticClass: "swiper-slide item1" }, [_vm._v("1")]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide item2" }, [_vm._v("2")]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide item3" }, [_vm._v("3")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "top-box" }, [_vm._v("2.取消自动播放")]),
      _vm._v(" "),
      _c("swiper", { attrs: { autoPlay: _vm.time } }, [
        _c("div", { staticClass: "swiper-slide item1" }, [_vm._v("1")]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide item3" }, [_vm._v("2")]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide item2" }, [_vm._v("3")])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "top-box" }, [_vm._v("3.懒加载图片")]),
      _vm._v(" "),
      _c("swiper", { attrs: { lazyLoading: _vm.lazyLoading } }, [
        _c("div", { staticClass: "swiper-slide" }, [
          _c(
            "a",
            {
              staticClass: "link-item",
              attrs: { href: "https://github.com/lvpangpang" }
            },
            [
              _c("img", {
                attrs: {
                  "data-src":
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514171028&di=b1957d0b1aee145a87b0f27dbefa6a0f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.cache.netease.com%2Fhouse%2F2014%2F8%2F25%2F201408251614518b482_550.png"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-lazy-preloader" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide" }, [
          _c(
            "a",
            {
              staticClass: "link-item",
              attrs: { href: "https://github.com/lvpangpang" }
            },
            [
              _c("img", {
                attrs: {
                  "data-src":
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513576309239&di=2625124db5fbdfb6a7fe4266b1f02c6e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F30adcbef76094b362990c8eba9cc7cd98d109db2.jpg"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-lazy-preloader" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide" }, [
          _c(
            "a",
            {
              staticClass: "link-item",
              attrs: { href: "https://github.com/lvpangpang" }
            },
            [
              _c("img", {
                attrs: {
                  "data-src":
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2063024798,3629381201&fm=27&gp=0.jpg"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-lazy-preloader" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "swiper-slide" }, [
          _c(
            "a",
            {
              staticClass: "link-item",
              attrs: { href: "https://github.com/lvpangpang" }
            },
            [
              _c("img", {
                attrs: {
                  "data-src":
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689160900,3184532578&fm=27&gp=0.jpg"
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "swiper-lazy-preloader" })
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19239379", esExports)
  }
}

/***/ })

});