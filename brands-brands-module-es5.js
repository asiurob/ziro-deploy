(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/brands/brands.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/brands/brands.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-3\">\r\n    <a class=\"btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glasses/1']\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar a armazones\r\n    </a>\r\n  </div>\r\n  <div class=\"col-9\">\r\n    <h2 class=\"text-light text-right\">Marcas de armazón</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row my-3\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" #i class=\"form-control bg-dark text-light border-dark form-control-sm\"\r\n        placeholder=\"Busca marca\" (keyup)=\"findBrand( i.value )\" (keydown)=\"clearTime()\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text bg-dark text-light border-dark input-group-sm\"> <i class=\"fas fa-search\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2 offset-sm-6\">\r\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/glass-brands/new/' + curr ]\">Nueva marca</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <table class=\"table table-sm table-hover table-dark table-striped text-center fs08\">\r\n      <thead class=\"fs10\">\r\n        <tr>\r\n          <th>Marca</th>\r\n          <th>Creado</th>\r\n          <th>Acciones</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let brand of brands\">\r\n          <td>{{ brand.name }}</td>\r\n          <td>Por {{ brand.addedBy.name }} {{ brand.addedBy.last_name }}\r\n            - {{ brand.addedDate | date:'medium' }}\r\n          </td>\r\n          <td>\r\n            <a class=\"btn btn-sm btn-outline-light mx-1\"\r\n              [routerLink]=\"['/glass-brands/edit/' + brand.normalizedToLink + '/' + curr ]\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </a>\r\n            <button *ngIf=\"brand.status === 'inactive'\" class=\"btn btn-sm btn-outline-light mx-1\"\r\n              (click)=\"swapStatus( brand )\">\r\n              <i class=\"fas fa-ban text-danger\"></i>\r\n            </button>\r\n            <button *ngIf=\"brand.status === 'active'\" class=\"btn btn-sm btn-outline-light mx-1\"\r\n              (click)=\"swapStatus( brand )\">\r\n              <i class=\"fas fa-check text-success\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-5\" *ngIf=\"pages > 1\">\r\n  <div class=\"col-12\">\r\n    <ul class=\"pagination justify-content-center\">\r\n      <li class=\"page-item\" *ngFor=\"let cell of cells\">\r\n        <a class=\"page-link\" [ngClass]=\"{'active-pagination': cell === curr }\"\r\n          style=\"background-color: #343a40; color: #f8f9fa;\" [routerLink]=\"['/glass-brands', cell ]\">{{cell}}</a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"text-center text-light\">\r\n      Mostrando\r\n      <span class=\"font-weight-bold\">{{ showing }}</span> de\r\n      <span class=\"font-weight-bold\">{{count}}</span> resultados\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/brands/edit/edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/brands/edit/edit.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glass-brands/' + curr]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"brand\">\r\n  <div class=\"col-6 offset-3\">\r\n    <h5 class=\"text-center text-light\">Editando {{ brand.name }}</h5>\r\n    <input #f type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nombre del departamento\"\r\n      [value]=\"brand.name\">\r\n    <button class=\"btn btn-outline-light btn-block btn-sm mt-3\" (click)=\"save( f.value )\">Guardar</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/brands/new/new.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/brands/new/new.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glass-brands/' + curr]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-6 offset-3\">\r\n    <h5 class=\"text-center text-light\">Nueva marca</h5>\r\n    <input #f type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nombre de la marca\">\r\n    <button class=\"btn btn-outline-light btn-block btn-sm mt-3\" (click)=\"save( f.value )\">Guardar</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing-page/brands/brands-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing-page/brands/brands-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BrandsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsRoutingModule", function() { return BrandsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brands.component */ "./src/app/components/landing-page/brands/brands.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/brands/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/brands/edit/edit.component.ts");






var routes = [
    { path: ':page', component: _brands_component__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"] },
    { path: 'new/:page', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:name/:page', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
];
var BrandsRoutingModule = /** @class */ (function () {
    function BrandsRoutingModule() {
    }
    BrandsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BrandsRoutingModule);
    return BrandsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/brands/brands.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/components/landing-page/brands/brands.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/brands/brands.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/brands/brands.component.ts ***!
  \********************************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/brands.service */ "./src/app/services/brands.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BrandsComponent = /** @class */ (function () {
    function BrandsComponent(brandService, tostador, route) {
        this.brandService = brandService;
        this.tostador = tostador;
        this.route = route;
        this.brands = [];
        this.cells = [];
    }
    BrandsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (val) {
            var page = Number(val.page) || 1;
            _this.curr = page;
            page = page <= 0 ? 1 : page;
            _this.fetchBrands();
        });
    };
    BrandsComponent.prototype.fetchBrands = function (name) {
        var _this = this;
        if (!isNaN(this.curr)) {
            this.pages = 0;
            this.cells = [];
            this.brandService.fetch(this.curr, 5, 0, name)
                .subscribe(function (res) {
                _this.brands = res.data;
                _this.count = res.count;
                _this.pages = Math.ceil(res.count / 5);
                if (_this.pages > 1) {
                    for (var i = 1; i <= _this.pages; i++) {
                        _this.cells.push(i);
                    }
                }
                _this.showing = _this.brands.length < 5 ? _this.count : (_this.brands.length * _this.curr);
            }, function (err) { return _this.tostador.error(err.error.message, '¡Error!'); }).add(function () { });
        }
    };
    BrandsComponent.prototype.swapStatus = function (brand) {
        var _this = this;
        var status = brand.status === 'active' ? 'inactive' : 'active';
        this.brandService.swapStatus(brand._id, status)
            .subscribe(function () { return brand.status = status; }, function (err) { return _this.tostador.error(err.error.message, '¡Error!'); }).add(function () { });
    };
    BrandsComponent.prototype.findBrand = function (input) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            input = input.trim();
            if (input.length === 0) {
                _this.fetchBrands();
            }
            else if (input.length > 1) {
                _this.fetchBrands(input);
            }
        }, 500);
    };
    BrandsComponent.prototype.clearTime = function () {
        clearTimeout(this.timer);
    };
    BrandsComponent.ctorParameters = function () { return [
        { type: _services_brands_service__WEBPACK_IMPORTED_MODULE_2__["BrandsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    BrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! raw-loader!./brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.sass */ "./src/app/components/landing-page/brands/brands.component.sass")]
        })
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/brands/brands.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing-page/brands/brands.module.ts ***!
  \*****************************************************************/
/*! exports provided: BrandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsModule", function() { return BrandsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brands_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brands-routing.module */ "./src/app/components/landing-page/brands/brands-routing.module.ts");
/* harmony import */ var _brands_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brands.component */ "./src/app/components/landing-page/brands/brands.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/brands/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/brands/edit/edit.component.ts");







var BrandsModule = /** @class */ (function () {
    function BrandsModule() {
    }
    BrandsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_brands_component__WEBPACK_IMPORTED_MODULE_4__["BrandsComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _brands_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrandsRoutingModule"]
            ]
        })
    ], BrandsModule);
    return BrandsModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/brands/edit/edit.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing-page/brands/edit/edit.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2JyYW5kcy9lZGl0L2VkaXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/brands/edit/edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing-page/brands/edit/edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/brands.service */ "./src/app/services/brands.service.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(brandsService, route, tostador, router) {
        this.brandsService = brandsService;
        this.route = route;
        this.tostador = tostador;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var value = this.route.snapshot.params.name;
        this.curr = Number(this.route.snapshot.params.page) || 1;
        if (value) {
            this.brandsService.fetch(0, 1, 0, value)
                .subscribe(function (res) { return _this.brand = res.data[0]; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        }
    };
    EditComponent.prototype.save = function (value) {
        var _this = this;
        value = value.trim();
        if (value) {
            this.brandsService.edit(this.brand._id, value)
                .subscribe(function () { return _this.router.navigateByUrl('/glass-brands/' + _this.curr); }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        }
    };
    EditComponent.ctorParameters = function () { return [
        { type: _services_brands_service__WEBPACK_IMPORTED_MODULE_4__["BrandsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/brands/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/components/landing-page/brands/edit/edit.component.sass")]
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/brands/new/new.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing-page/brands/new/new.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2JyYW5kcy9uZXcvbmV3LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/brands/new/new.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/brands/new/new.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/brands.service */ "./src/app/services/brands.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewComponent = /** @class */ (function () {
    function NewComponent(brandService, tostador, router, route) {
        this.brandService = brandService;
        this.tostador = tostador;
        this.router = router;
        this.route = route;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.curr = Number(this.route.snapshot.params.page) || 1;
    };
    NewComponent.prototype.save = function (brand) {
        var _this = this;
        brand = brand.trim();
        if (brand) {
            this.brandService.save(brand)
                .subscribe(function () { return _this.router.navigateByUrl('/glass-brands/' + _this.curr); }, function (err) { return _this.tostador.error(err.error.message, '¡Error!'); }).add(function () { });
        }
    };
    NewComponent.ctorParameters = function () { return [
        { type: _services_brands_service__WEBPACK_IMPORTED_MODULE_2__["BrandsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/brands/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.sass */ "./src/app/components/landing-page/brands/new/new.component.sass")]
        })
    ], NewComponent);
    return NewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=brands-brands-module-es5.js.map