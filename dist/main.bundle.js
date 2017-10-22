webpackJsonp([1,5],{

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zhenyu/Desktop/angular/mobile/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(669),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/zhenyu/Desktop/angular/mobile/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// 配置路由
var routerConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routerConfig)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/zhenyu/Desktop/angular/mobile/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.shanglaShow = false;
    }
    // 这个钩子会在组件被实例化的时候调用一次，用来初始化组件里面的数据
    HomeComponent.prototype.ngOnInit = function () {
        this.shops = [
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            },
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            },
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            },
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            },
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            },
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            },
            {
                "name": '广州弗莱',
                "image": './assets/images/card-pic.png'
            }
        ];
        this.myhome.nativeElement.style.height = window.screen.availHeight + 'px';
        console.log(window.screen.height);
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        console.log(this.myhome.nativeElement);
        var self = this;
        setTimeout(function () {
            new BScroll(self.myhome.nativeElement, { click: true, bounceTime: 1000 });
        }, 50);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('hmallhome'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === 'function' && _a) || Object)
    ], HomeComponent.prototype, "myhome", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(670),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/zhenyu/Desktop/angular/mobile/src/home.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/zhenyu/Desktop/angular/mobile/src/environment.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ".b-x {\n  box-sizing: border-box;\n}\n/*----- 宽度 -----*/\n/*----- 高度 -----*/\n/*----- 行高 -----*/\n/*----- 背景尺寸 -----*/\n/**\n* [背景尺寸，设置宽度，高度auto]\n */\n/*\n *   背景\n */\n/*----- margin -----*/\n/*----- padding -----*/\n/*----- 定位 -----*/\n/*----- 缩进 -----*/\n/*----- 圆角 -----*/\n/*----- flex -----*/\ni {\n  font-style: normal;\n}\n/*----- 一些css3的处理 -----*/\n/*\n*    一些常用的类\n*/\n.d_ib {\n  display: inline-block;\n}\n.db {\n  display: block;\n}\n.p_r {\n  position: relative;\n}\n.P_a {\n  position: absolute;\n}\n.z_i {\n  z-index: 1000;\n}\n/*-----水平方式-----*/\n.ta_l {\n  text-align: left;\n}\n.ta_c {\n  text-align: center;\n}\n.ta_r {\n  text-align: right;\n}\n/*-----垂直对齐方式-----*/\n.va_t {\n  vertical-align: top;\n}\n.va_m {\n  vertical-align: middle;\n}\n.va_b {\n  vertical-align: bottom;\n}\n.t_r {\n  text-align: right;\n}\n/*-----浮动-----*/\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.cl {\n  clear: left;\n}\n.o_v {\n  overflow: hidden;\n}\n.omg {\n  overflow: hidden;\n  text-overflow: ellipsis ;\n  white-space: nowrap;\n}\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ".b-x {\n  box-sizing: border-box;\n}\n/*----- 宽度 -----*/\n/*----- 高度 -----*/\n/*----- 行高 -----*/\n/*----- 背景尺寸 -----*/\n/**\n* [背景尺寸，设置宽度，高度auto]\n */\n/*\n *   背景\n */\n/*----- margin -----*/\n/*----- padding -----*/\n/*----- 定位 -----*/\n/*----- 缩进 -----*/\n/*----- 圆角 -----*/\n/*----- flex -----*/\ni {\n  font-style: normal;\n}\n/*----- 一些css3的处理 -----*/\n/*\n*    一些常用的类\n*/\n.d_ib {\n  display: inline-block;\n}\n.db {\n  display: block;\n}\n.p_r {\n  position: relative;\n}\n.P_a {\n  position: absolute;\n}\n.z_i {\n  z-index: 1000;\n}\n/*-----水平方式-----*/\n.ta_l {\n  text-align: left;\n}\n.ta_c {\n  text-align: center;\n}\n.ta_r {\n  text-align: right;\n}\n/*-----垂直对齐方式-----*/\n.va_t {\n  vertical-align: top;\n}\n.va_m {\n  vertical-align: middle;\n}\n.va_b {\n  vertical-align: bottom;\n}\n.t_r {\n  text-align: right;\n}\n/*-----浮动-----*/\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.cl {\n  clear: left;\n}\n.o_v {\n  overflow: hidden;\n}\n.omg {\n  overflow: hidden;\n  text-overflow: ellipsis ;\n  white-space: nowrap;\n}\n.shop-title {\n  width: 100%;\n  border-bottom: 1px solid #f5f3f1;\n}\n.shop-title .title-con {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 2.50666667rem;\n  height: 1.41333333rem;\n  line-height: 1.41333333rem;\n  margin: 0 auto;\n  color: #999999;\n  font-size: 0.37333333rem;\n}\n.shop-title .title-con .linne {\n  width: 0.74666667rem;\n  height: 1px;\n  background: #999999;\n  margin: auto 0;\n}\n.hmall-home {\n  height: 100%;\n}\n.hmall-home .shop-wrapper {\n  padding-bottom: 1.06666667rem;\n}\n.hmall-home .shangla {\n  height: 0.69333333rem;\n  line-height: 0.69333333rem;\n  font-size: 0rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 0.26666667rem;\n  text-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.hmall-home .shangla div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.hmall-home .shangla .circle {\n  width: 0.58666667rem;\n  height: 0.58666667rem;\n  display: inline-block;\n  border: solid 2px skyblue;\n  border-left-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: coin1 2.5s linear infinite;\n          animation: coin1 2.5s linear infinite;\n}\n.hmall-home .shangla .text {\n  font-size: 0.37333333rem;\n  display: inline-block;\n  margin-left: 0.16rem;\n}\n@-webkit-keyframes coin1 {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  25% {\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg);\n  }\n  50% {\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg);\n  }\n  75% {\n    -webkit-transform: rotateZ(270deg);\n            transform: rotateZ(270deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n@keyframes coin1 {\n  0% {\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  25% {\n    -webkit-transform: rotateZ(90deg);\n            transform: rotateZ(90deg);\n  }\n  50% {\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg);\n  }\n  75% {\n    -webkit-transform: rotateZ(270deg);\n            transform: rotateZ(270deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n.hmall-home .shop-list .item {\n  width: 100%;\n  height: 2.65333333rem;\n  border-bottom: 1px solid #f5f3f1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.hmall-home .shop-list .item .left {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 2.66666667rem;\n          flex: 0 0 2.66666667rem;\n}\n.hmall-home .shop-list .item .left .icon {\n  width: 2.4rem;\n  height: 2.13333333rem;\n  margin-top: 0.26rem;\n  margin-left: 0.26666667rem;\n  border: 1px solid #f5f3f1;\n}\n.hmall-home .shop-list .item .right {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.hmall-home .shop-list .item .right .name {\n  height: 2.65333333rem;\n  line-height: 2.65333333rem;\n  margin-left: 0.26666667rem;\n  font-size: 0.45333333rem;\n  font-weight: 500;\n  color: #333333;\n}\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<!-- 路由 -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "\n<!-- 商城主页 -->\n<div class=\"hmall-home\">\n\n  <div class=\"shop o_v\" #hmallhome>\n    <div class=\"shop-wrapper o_v\">\n      <div class=\"shangla\" *ngIf=\"shanglaShow\">\n        <div>\n          <span class=\"circle\"></span>\n          <span class=\"text\">正在加载...</span>\n        </div>\n      </div>\n      <div class=\"shop-title\">\n        <div class=\"title-con\">\n          <span class=\"linne\"></span>\n          <span class=\"text\">店铺</span>\n          <span class=\"linne\"></span>\n        </div>\n      </div>\n      <ul class=\"shop-list\">\n        <li class=\"item\" *ngFor=\"let shop of shops; let num = index\">\n          <div class=\"left\">\n            <img class=\"icon b-x\" [src]=\"shop.image || './assets/images/shop- Default.png'\">\n          </div>\n          <div class=\"right\">\n            <span class=\"name\">{{shop.name}}</span>\n          </div>\n        </li>\n      </ul>\n\n      <div class=\"shangla\" >\n        <div>\n          <span class=\"circle\"></span>\n          <span class=\"text\">正在加载...</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--&lt;!&ndash; 指令 &ndash;&gt;-->\n  <!--<zyloading ng-show=\"loadingShow\" text=\"'loading...'\"></zyloading>-->\n  <!--<info-promit promit=\"promit\"></info-promit>-->\n</div>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[704]);
//# sourceMappingURL=main.bundle.map