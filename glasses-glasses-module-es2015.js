(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glasses-glasses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/glasses/edit/edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/glasses/edit/edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glasses/' + curr]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n<h5 class=\"text-center text-light\">Nuevo armazón</h5>\r\n<form [formGroup]=\"form\" (submit)=\"save()\" *ngIf=\"glass\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Marca</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"brand\" (change)=\"findModels()\">\r\n          <option selected disabled value=\"0\">Selecciona una marca</option>\r\n          <option *ngFor=\"let brand of brands\" [value]=\"brand._id\">{{ brand.name }}</option>\r\n        </select>\r\n        <a class=\"fs06 text-light text-decoration-none\" [routerLink]=\"[ '/glass-brands/1']\">\r\n          ¿No encuentras la marca?\r\n        </a><br>\r\n        <span *ngIf=\"form.controls['brand'].value === 0 && sent\" class=\"text-danger fs07\">\r\n          La marca es necesaria\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Modelo</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"model\">\r\n          <option selected disabled value=\"0\">Selecciona un modelo</option>\r\n          <option *ngFor=\"let model of models\" [value]=\"model._id\">{{ model.name }}</option>\r\n        </select>\r\n        <a class=\"fs06 text-light text-decoration-none\" [routerLink]=\"[ '/glass-models/1']\">\r\n          ¿No encuentras el modelo?\r\n        </a><br>\r\n        <div *ngIf=\"form.controls['model'].value === 0 && sent\">\r\n          <span class=\"text-danger fs07\">Olvidaste el modelo</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Precio</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"price\"\r\n          placeholder=\"Precio del armazón\">\r\n        <span *ngIf=\"form.controls['price'].errors?.required && sent\" class=\"text-danger fs07\">\r\n          ¿Lo darás sin precio?\r\n        </span>\r\n        <span *ngIf=\"form.controls['price'].errors?.pattern && sent\" class=\"text-danger fs07\">\r\n          No estoy seguro que esto sea un número\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Color primario</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"primaryColor\">\r\n          <option selected disabled value=\"0\">Selecciona el color que más se ve</option>\r\n          <option *ngFor=\"let color of colors\" [value]=\"color.toLowerCase()\">{{ color }}</option>\r\n        </select>\r\n        <span *ngIf=\"form.controls['primaryColor'].value === 0 && sent\" class=\"text-danger fs07\">\r\n          Por lo menos teste color\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Color secundario</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"secondaryColor\">\r\n          <option selected disabled value=\"0\">Selecciona un color de complemento</option>\r\n          <option *ngFor=\"let color of colors\" [value]=\"color.toLowerCase()\">{{ color }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Cantidad</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"quantity\"\r\n          placeholder=\"Cantidad de piezas\">\r\n        <span *ngIf=\"form.controls['quantity'].errors?.required && sent\" class=\"text-danger fs07\">\r\n          Es necesaria la cantidad de piezas\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-sm-6 offset-sm-3\">\r\n      <button type=\"submit\" class=\"btn btn-outline-light btn-sm btn-block\">Guardar</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/glasses/glasses.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/glasses/glasses.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control bg-dark text-light border-dark form-control-sm\"\r\n        placeholder=\"Busca armazon\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text bg-dark text-light border-dark input-group-sm\"> <i class=\"fas fa-search\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2\">\r\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/glass-brands/1']\">Nueva Marca</a>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2\">\r\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/glass-models/1']\">Nuevo modelo</a>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2 offset-sm-2\">\r\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/glasses/new/' + curr]\">Nuevo armazón</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <table class=\"table table-sm table-hover table-dark table-striped text-center fs08\">\r\n      <thead class=\"fs10\">\r\n        <tr>\r\n          <th>Marca</th>\r\n          <th>Modelo</th>\r\n          <th>Precio</th>\r\n          <th>Cantidad</th>\r\n          <th>Color</th>\r\n          <th>Acciones</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr *ngFor=\"let glass of glasses\">\r\n          <td>{{ glass.brand.name }}</td>\r\n          <td>{{ glass.model.name }}</td>\r\n          <td>{{ glass.price | currency }}</td>\r\n          <td>{{ glass.left }} / {{ glass.quantity }}</td>\r\n          <td>{{ glass.primaryColor }}\r\n            <span *ngIf=\"glass.secondaryColor\">\r\n              - {{ glass.secondaryColor }}\r\n            </span>\r\n          </td>\r\n          <td>\r\n            <a class=\"btn btn-sm btn-outline-light mx-1\"\r\n              [routerLink]=\"['/glasses/edit/' + glass.normalizedToLink + '/' + curr ]\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </a>\r\n            <button *ngIf=\"glass.status === 'inactive'\" class=\"btn btn-sm btn-outline-light mx-1\"\r\n              (click)=\"swapStatus( glass )\">\r\n              <i class=\"fas fa-ban text-danger\"></i>\r\n            </button>\r\n            <button *ngIf=\"glass.status === 'active'\" class=\"btn btn-sm btn-outline-light mx-1\"\r\n              (click)=\"swapStatus( glass )\">\r\n              <i class=\"fas fa-check text-success\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/glasses/new/new.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/glasses/new/new.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/glasses/' + curr]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n<h5 class=\"text-center text-light\">Nuevo armazón</h5>\r\n<form [formGroup]=\"form\" (submit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Marca</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"brand\" (change)=\"findModels()\">\r\n          <option selected disabled value=\"0\">Selecciona una marca</option>\r\n          <option *ngFor=\"let brand of brands\" [value]=\"brand._id\">{{ brand.name }}</option>\r\n        </select>\r\n        <a class=\"fs06 text-light text-decoration-none\" [routerLink]=\"[ '/glass-brands/1']\">\r\n            ¿No encuentras la marca?\r\n        </a><br>\r\n        <span *ngIf=\"form.controls['brand'].value === 0 && sent\" class=\"text-danger fs07\">\r\n          La marca es necesaria\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Modelo</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"model\">\r\n          <option selected disabled value=\"0\">Selecciona un modelo</option>\r\n          <option *ngFor=\"let model of models\" [value]=\"model._id\">{{ model.name }}</option>\r\n        </select>\r\n        <a class=\"fs06 text-light text-decoration-none\" [routerLink]=\"[ '/glass-models/1']\">\r\n            ¿No encuentras el modelo?\r\n        </a><br>\r\n        <div *ngIf=\"form.controls['model'].value === 0 && sent\">\r\n          <span class=\"text-danger fs07\">Olvidaste el modelo</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Precio</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"price\"\r\n          placeholder=\"Precio del armazón\">\r\n        <span *ngIf=\"form.controls['price'].errors?.required && sent\" class=\"text-danger fs07\">\r\n          ¿Lo darás sin precio?\r\n        </span>\r\n        <span *ngIf=\"form.controls['price'].errors?.pattern && sent\" class=\"text-danger fs07\">\r\n          No estoy seguro que esto sea un número\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Color primario</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"primaryColor\">\r\n          <option selected disabled value=\"0\">Selecciona el color que más se ve</option>\r\n          <option *ngFor=\"let color of colors\" [value]=\"color.toLowerCase()\">{{ color }}</option>\r\n        </select>\r\n        <span *ngIf=\"form.controls['primaryColor'].value === 0 && sent\" class=\"text-danger fs07\">\r\n          Por lo menos teste color\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Color secundario</label>\r\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"secondaryColor\">\r\n          <option selected disabled value=\"0\">Selecciona un color de complemento</option>\r\n          <option *ngFor=\"let color of colors\" [value]=\"color.toLowerCase()\">{{ color }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"text-muted\">Cantidad</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"quantity\"\r\n          placeholder=\"Cantidad de piezas\">\r\n        <span *ngIf=\"form.controls['quantity'].errors?.required && sent\" class=\"text-danger fs07\">\r\n          Es necesaria la cantidad de piezas\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-sm-6 offset-sm-3\">\r\n      <button type=\"submit\" class=\"btn btn-outline-light btn-sm btn-block\">Guardar</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/landing-page/glasses/edit/edit.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/edit/edit.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2dsYXNzZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/glasses/edit/edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/edit/edit.component.ts ***!
  \************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/brands.service */ "./src/app/services/brands.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_models_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/models.service */ "./src/app/services/models.service.ts");
/* harmony import */ var _services_glasses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/glasses.service */ "./src/app/services/glasses.service.ts");







let EditComponent = class EditComponent {
    constructor(route, router, brandService, modelService, tostador, glassesService) {
        this.route = route;
        this.router = router;
        this.brandService = brandService;
        this.modelService = modelService;
        this.tostador = tostador;
        this.glassesService = glassesService;
        this.sent = false;
        this.brands = [];
        this.models = [];
        this.colors = [
            'Negro', 'Blanco', 'Gris',
            'Rojo', 'Amarillo', 'Azul',
            'Verde', 'Naranja', 'Purpura',
            'Cafe', 'Rosa', 'Plata',
            'Transparente', 'Metalico', 'Dorado'
        ];
    }
    ngOnInit() {
        this.colors = this.colors.sort();
        this.curr = Number(this.route.snapshot.params.page) || 1;
        const name = this.route.snapshot.params.name;
        if (name) {
            this.glassesService.fetch(0, 1, name)
                .subscribe((res) => this.glass = res.data[0], (err) => this.tostador.error(err.message, '¡Error!')).add(() => { });
        }
    }
    save() {
        this.sent = true;
        if (this.form.status === 'VALID' && !this.checkErrors()) {
            this.glassesService.save(this.form.value)
                .subscribe(() => this.router.navigateByUrl('/glasses/' + this.curr), (err) => this.tostador.error(err.message, '¡Error!')).add(() => { });
        }
    }
    checkErrors() {
        if (this.form.controls.brand.value === 0 ||
            this.form.controls.model.value === 0 ||
            this.form.controls.primaryColor.value === 0) {
            return true;
        }
        else {
            return false;
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_brands_service__WEBPACK_IMPORTED_MODULE_3__["BrandsService"] },
    { type: _services_models_service__WEBPACK_IMPORTED_MODULE_5__["ModelsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _services_glasses_service__WEBPACK_IMPORTED_MODULE_6__["GlassesService"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/glasses/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/components/landing-page/glasses/edit/edit.component.sass")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/components/landing-page/glasses/glasses-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/glasses-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GlassesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassesRoutingModule", function() { return GlassesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _glasses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glasses.component */ "./src/app/components/landing-page/glasses/glasses.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/glasses/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/glasses/edit/edit.component.ts");






const routes = [
    { path: ':page', component: _glasses_component__WEBPACK_IMPORTED_MODULE_3__["GlassesComponent"] },
    { path: 'new/:page', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:name/:page', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
];
let GlassesRoutingModule = class GlassesRoutingModule {
};
GlassesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GlassesRoutingModule);



/***/ }),

/***/ "./src/app/components/landing-page/glasses/glasses.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/glasses.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2dsYXNzZXMvZ2xhc3Nlcy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/landing-page/glasses/glasses.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/glasses.component.ts ***!
  \**********************************************************************/
/*! exports provided: GlassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassesComponent", function() { return GlassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_glasses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/glasses.service */ "./src/app/services/glasses.service.ts");





let GlassesComponent = class GlassesComponent {
    constructor(router, route, tostador, glassesService) {
        this.router = router;
        this.route = route;
        this.tostador = tostador;
        this.glassesService = glassesService;
        this.glasses = [];
        this.cells = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.route.params.subscribe((val) => {
            this.curr = Number(val.page) || 1;
            if (!isNaN(this.curr)) {
                this.fetchUsers();
            }
        });
    }
    fetchUsers(find = null) {
        this.pages = 0;
        this.cells = [];
        this.glassesService.fetch(this.curr, 10, find)
            .subscribe((res) => {
            this.glasses = res.data;
            this.count = res.count;
            this.pages = Math.ceil(res.count / 10);
            if (this.pages > 1) {
                for (let i = 1; i <= this.pages; i++) {
                    this.cells.push(i);
                }
            }
            this.showing = this.glasses.length < 10 ? this.count : (this.glasses.length * this.current);
        }, (err) => this.tostador.error(err.message, '¡Error!')).add(() => { });
    }
    swapStatus(glass) {
        const status = glass.status === 'active' ? 'inactive' : 'active';
        this.glassesService.swapStatus(glass._id, status)
            .subscribe(() => glass.status = status, (err) => this.tostador.error(err.error.message, '¡Error!')).add(() => { });
    }
};
GlassesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _services_glasses_service__WEBPACK_IMPORTED_MODULE_4__["GlassesService"] }
];
GlassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-glasses',
        template: __webpack_require__(/*! raw-loader!./glasses.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/glasses/glasses.component.html"),
        styles: [__webpack_require__(/*! ./glasses.component.sass */ "./src/app/components/landing-page/glasses/glasses.component.sass")]
    })
], GlassesComponent);



/***/ }),

/***/ "./src/app/components/landing-page/glasses/glasses.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/glasses.module.ts ***!
  \*******************************************************************/
/*! exports provided: GlassesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassesModule", function() { return GlassesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _glasses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glasses-routing.module */ "./src/app/components/landing-page/glasses/glasses-routing.module.ts");
/* harmony import */ var _glasses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glasses.component */ "./src/app/components/landing-page/glasses/glasses.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/glasses/new/new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/glasses/edit/edit.component.ts");








let GlassesModule = class GlassesModule {
};
GlassesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_glasses_component__WEBPACK_IMPORTED_MODULE_4__["GlassesComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _glasses_routing_module__WEBPACK_IMPORTED_MODULE_3__["GlassesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], GlassesModule);



/***/ }),

/***/ "./src/app/components/landing-page/glasses/new/new.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/new/new.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2dsYXNzZXMvbmV3L25ldy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/landing-page/glasses/new/new.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/landing-page/glasses/new/new.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/brands.service */ "./src/app/services/brands.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_models_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/models.service */ "./src/app/services/models.service.ts");
/* harmony import */ var _services_glasses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/glasses.service */ "./src/app/services/glasses.service.ts");








let NewComponent = class NewComponent {
    constructor(route, router, brandService, modelService, tostador, glassesService) {
        this.route = route;
        this.router = router;
        this.brandService = brandService;
        this.modelService = modelService;
        this.tostador = tostador;
        this.glassesService = glassesService;
        this.sent = false;
        this.brands = [];
        this.models = [];
        this.colors = [
            'Negro', 'Blanco', 'Gris',
            'Rojo', 'Amarillo', 'Azul',
            'Verde', 'Naranja', 'Purpura',
            'Cafe', 'Rosa', 'Plata',
            'Transparente', 'Metalico', 'Dorado'
        ];
    }
    ngOnInit() {
        this.colors = this.colors.sort();
        this.curr = Number(this.route.snapshot.params.page) || 1;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+')]),
            primaryColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            secondaryColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+')]),
        });
        this.brandService.fetch(0, 1000, 1)
            .subscribe((res) => this.brands = res.data, (err) => this.tostador.error(err.message, '¡Error!')).add(() => { });
    }
    save() {
        this.sent = true;
        if (this.form.status === 'VALID' && !this.checkErrors()) {
            this.glassesService.save(this.form.value)
                .subscribe(() => this.router.navigateByUrl('/glasses/' + this.curr), (err) => this.tostador.error(err.message, '¡Error!')).add(() => { });
        }
    }
    checkErrors() {
        if (this.form.controls.brand.value === 0 ||
            this.form.controls.model.value === 0 ||
            this.form.controls.primaryColor.value === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    findModels() {
        const brand = this.form.controls.brand.value;
        if (brand) {
            this.modelService.findByBrand(brand)
                .subscribe((res) => this.models = res.data, (err) => this.tostador.error(err.message, '¡Error!')).add(() => { });
        }
    }
};
NewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_brands_service__WEBPACK_IMPORTED_MODULE_4__["BrandsService"] },
    { type: _services_models_service__WEBPACK_IMPORTED_MODULE_6__["ModelsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_glasses_service__WEBPACK_IMPORTED_MODULE_7__["GlassesService"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/glasses/new/new.component.html"),
        styles: [__webpack_require__(/*! ./new.component.sass */ "./src/app/components/landing-page/glasses/new/new.component.sass")]
    })
], NewComponent);



/***/ }),

/***/ "./src/app/services/glasses.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/glasses.service.ts ***!
  \*********************************************/
/*! exports provided: GlassesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassesService", function() { return GlassesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





let GlassesService = class GlassesService {
    constructor(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
        this.route = 'glasses';
    }
    save(data) {
        data.token = this.cUser.getIndex('token');
        return this.cHttp.post(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/${this.route}`, data);
    }
    fetch(skip, limit, value) {
        value = value ? value : '';
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/${this.route}/${skip}/${limit}/${value}`);
    }
    swapStatus(id, status) {
        return this.cHttp.delete(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/${this.route}/${id}/${status}`);
    }
};
GlassesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
GlassesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlassesService);



/***/ })

}]);
//# sourceMappingURL=glasses-glasses-module-es2015.js.map