(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bmodels-models-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/bmodels/edit/edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/bmodels/edit/edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glass-models/' + curr]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"model\">\r\n  <div class=\"col-6 offset-3\">\r\n    <h5 class=\"text-center text-light\">Editando {{ model.name }}</h5>\r\n    <input #f type=\"text\" [value]=\"model.name\" class=\"form-control form-control-sm\" placeholder=\"Nombre del modelo\">\r\n    <select [(ngModel)]=\"selectedOption\" class=\"form-control form-control-sm my-2\" *ngIf=\"brands.length > 0\">\r\n      <option selected disabled>Selecciona una marca</option>\r\n      <option *ngFor=\"let brand of brands\" [selected]=\" brand._id == model.brand._id ? 'selected' : '' \"\r\n       [value]=\"brand._id\">{{ brand.name }}</option>\r\n    </select>\r\n    <a class=\"fs07 text-light text-decoration-none\" [routerLink]=\"[ '/glass-brands/1']\">¿No encuentras la marca? Busca o crea una aquí</a>\r\n    <button class=\"btn btn-outline-light btn-block btn-sm mt-3\" (click)=\"save( f.value )\">Guardar</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/bmodels/models.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/bmodels/models.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-3\">\r\n    <a class=\"btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glasses/1']\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar a armazones\r\n    </a>\r\n  </div>\r\n  <div class=\"col-9\">\r\n    <h2 class=\"text-light text-right\">Modelos de armazón</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row my-3\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group mb-3\">\r\n        <input type=\"text\" #i class=\"form-control bg-dark text-light border-dark form-control-sm\"\r\n        placeholder=\"Buscar modelo\" (keyup)=\"findModel( i.value )\" (keydown)=\"clearTime()\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text bg-dark text-light border-dark input-group-sm\"> <i class=\"fas fa-search\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2 offset-sm-6\">\r\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/glass-models/new/' + curr]\">Nuevo modelo</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <table class=\"table table-sm table-hover table-dark table-striped text-center fs08\">\r\n      <thead class=\"fs10\">\r\n        <tr>\r\n          <th>Modelo</th>\r\n          <th>Marca</th>\r\n          <th>Creado</th>\r\n          <th>Acciones</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let model of models\">\r\n          <td>{{ model.name }}</td>\r\n          <td>{{ model.brand.name }}</td>\r\n          <td>Por {{ model.addedBy.name }} {{ model.addedBy.last_name }}\r\n            - {{ model.addedDate | date:'medium' }}\r\n          </td>\r\n          <td>\r\n            <a class=\"btn btn-sm btn-outline-light mx-1\"\r\n              [routerLink]=\"['/glass-models/edit/' + model.normalizedToLink + '/' + curr ]\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </a>\r\n            <button *ngIf=\"model.status === 'inactive'\" class=\"btn btn-sm btn-outline-light mx-1\"\r\n              (click)=\"swapStatus( model )\">\r\n              <i class=\"fas fa-ban text-danger\"></i>\r\n            </button>\r\n            <button *ngIf=\"model.status === 'active'\" class=\"btn btn-sm btn-outline-light mx-1\"\r\n              (click)=\"swapStatus( model )\">\r\n              <i class=\"fas fa-check text-success\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-5\" *ngIf=\"pages > 1\">\r\n  <div class=\"col-12\">\r\n    <ul class=\"pagination justify-content-center\">\r\n      <li class=\"page-item\" *ngFor=\"let cell of cells\">\r\n        <a class=\"page-link\" [ngClass]=\"{'active-pagination': cell === curr }\"\r\n          style=\"background-color: #343a40; color: #f8f9fa;\" [routerLink]=\"['/glass-models', cell ]\">{{cell}}</a>\r\n      </li>\r\n    </ul>\r\n    <p class=\"text-center text-light\">\r\n      Mostrando\r\n      <span class=\"font-weight-bold\">{{ showing }}</span> de\r\n      <span class=\"font-weight-bold\">{{count}}</span> resultados\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/bmodels/new/new.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/bmodels/new/new.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glass-models/' + curr]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-6 offset-3\">\r\n    <h5 class=\"text-center text-light\">Nuevo modelo</h5>\r\n    <input #f type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nombre del modelo\">\r\n    <select #s class=\"form-control form-control-sm my-2\">\r\n        <option selected disabled>Selecciona una marca</option>\r\n        <option *ngFor=\"let brand of brands\" [value]=\"brand._id\">{{ brand.name }}</option>\r\n    </select>\r\n    <a class=\"fs07 text-light text-decoration-none\" [routerLink]=\"[ '/glass-brands/' + 1]\">¿No encuentras la marca? Busca o crea una aquí</a>\r\n    <button class=\"btn btn-outline-light btn-block btn-sm mt-3\" (click)=\"save( f.value, s.value )\">Guardar</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/landing-page/bmodels/edit/edit.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/edit/edit.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2Jtb2RlbHMvZWRpdC9lZGl0LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/bmodels/edit/edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/edit/edit.component.ts ***!
  \************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_models_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/models.service */ "./src/app/services/models.service.ts");
/* harmony import */ var src_app_services_brands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/brands.service */ "./src/app/services/brands.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditComponent = class EditComponent {
    constructor(modelService, brandService, tostador, router, route) {
        this.modelService = modelService;
        this.brandService = brandService;
        this.tostador = tostador;
        this.router = router;
        this.route = route;
        this.brands = [];
    }
    ngOnInit() {
        const value = this.route.snapshot.params.name;
        this.curr = Number(this.route.snapshot.params.page) || 1;
        if (value) {
            this.modelService.fetch(0, 1, value)
                .subscribe((res) => this.model = res.data[0], (err) => this.tostador.error(err.error, '¡Error!')).add(() => { this.getBrands(); });
        }
    }
    getBrands() {
        this.brandService.fetch(0, 10000, 1)
            .subscribe((res) => {
            this.brands = res.data;
            this.selectedOption = this.model.brand._id;
        }, (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
    }
    save(model) {
        const brandi = this.selectedOption;
        model = model.trim();
        if (model && brandi) {
            this.modelService.edit(this.model._id, model, brandi)
                .subscribe(() => this.router.navigateByUrl('/glass-models/' + this.curr), (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: src_app_services_models_service__WEBPACK_IMPORTED_MODULE_2__["ModelsService"] },
    { type: src_app_services_brands_service__WEBPACK_IMPORTED_MODULE_3__["BrandsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/bmodels/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/components/landing-page/bmodels/edit/edit.component.sass")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/components/landing-page/bmodels/models-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/models-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ModelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsRoutingModule", function() { return ModelsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models.component */ "./src/app/components/landing-page/bmodels/models.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/bmodels/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/bmodels/edit/edit.component.ts");






const routes = [
    { path: ':page', component: _models_component__WEBPACK_IMPORTED_MODULE_3__["ModelsComponent"] },
    { path: 'new/:page', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:name/:page', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
];
let ModelsRoutingModule = class ModelsRoutingModule {
};
ModelsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ModelsRoutingModule);



/***/ }),

/***/ "./src/app/components/landing-page/bmodels/models.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/models.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2Jtb2RlbHMvbW9kZWxzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/bmodels/models.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/models.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_models_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/models.service */ "./src/app/services/models.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ModelsComponent = class ModelsComponent {
    constructor(modelService, tostador, route) {
        this.modelService = modelService;
        this.tostador = tostador;
        this.route = route;
        this.models = [];
        this.cells = [];
    }
    ngOnInit() {
        this.route.params.subscribe((val) => {
            let page = Number(val.page) || 1;
            this.curr = page;
            page = page <= 0 ? 1 : page;
            this.fetchModels();
        });
    }
    fetchModels(name) {
        if (!isNaN(this.curr)) {
            this.pages = 0;
            this.cells = [];
            this.modelService.fetch(this.curr, 10, name)
                .subscribe((res) => {
                this.models = res.data;
                this.count = res.count;
                this.pages = Math.ceil(res.count / 10);
                if (this.pages > 1) {
                    for (let i = 1; i <= this.pages; i++) {
                        this.cells.push(i);
                    }
                }
                this.showing = this.models.length < 10 ? this.count : (this.models.length * this.curr);
            }, (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
        }
    }
    swapStatus(model) {
        const status = model.status === 'active' ? 'inactive' : 'active';
        this.modelService.swapStatus(model._id, status)
            .subscribe(() => model.status = status, (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
    }
    findModel(input) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            input = input.trim();
            if (input.length === 0) {
                this.fetchModels();
            }
            else if (input.length > 1) {
                this.fetchModels(input);
            }
        }, 500);
    }
    clearTime() {
        clearTimeout(this.timer);
    }
};
ModelsComponent.ctorParameters = () => [
    { type: _services_models_service__WEBPACK_IMPORTED_MODULE_3__["ModelsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ModelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-models',
        template: __webpack_require__(/*! raw-loader!./models.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/bmodels/models.component.html"),
        styles: [__webpack_require__(/*! ./models.component.sass */ "./src/app/components/landing-page/bmodels/models.component.sass")]
    })
], ModelsComponent);



/***/ }),

/***/ "./src/app/components/landing-page/bmodels/models.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/models.module.ts ***!
  \******************************************************************/
/*! exports provided: ModelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsModule", function() { return ModelsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _models_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models-routing.module */ "./src/app/components/landing-page/bmodels/models-routing.module.ts");
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models.component */ "./src/app/components/landing-page/bmodels/models.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/bmodels/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/bmodels/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ModelsModule = class ModelsModule {
};
ModelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_models_component__WEBPACK_IMPORTED_MODULE_4__["ModelsComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _models_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModelsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]
    })
], ModelsModule);



/***/ }),

/***/ "./src/app/components/landing-page/bmodels/new/new.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/new/new.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2Jtb2RlbHMvbmV3L25ldy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/landing-page/bmodels/new/new.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/landing-page/bmodels/new/new.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_models_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/models.service */ "./src/app/services/models.service.ts");
/* harmony import */ var src_app_services_brands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/brands.service */ "./src/app/services/brands.service.ts");






let NewComponent = class NewComponent {
    constructor(modelService, brandService, tostador, router, route) {
        this.modelService = modelService;
        this.brandService = brandService;
        this.tostador = tostador;
        this.router = router;
        this.route = route;
        this.brands = [];
    }
    ngOnInit() {
        this.curr = Number(this.route.snapshot.params.page) || 1;
        this.brandService.fetch(0, 10000, 1)
            .subscribe((res) => this.brands = res.data, (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
    }
    save(model, brandi) {
        model = model.trim();
        if (model && brandi) {
            this.modelService.save(model, brandi)
                .subscribe(() => this.router.navigateByUrl('/glass-models/' + this.curr), (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
        }
    }
};
NewComponent.ctorParameters = () => [
    { type: _services_models_service__WEBPACK_IMPORTED_MODULE_4__["ModelsService"] },
    { type: src_app_services_brands_service__WEBPACK_IMPORTED_MODULE_5__["BrandsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/bmodels/new/new.component.html"),
        styles: [__webpack_require__(/*! ./new.component.sass */ "./src/app/components/landing-page/bmodels/new/new.component.sass")]
    })
], NewComponent);



/***/ })

}]);
//# sourceMappingURL=bmodels-models-module-es2015.js.map