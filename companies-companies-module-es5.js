(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/companies/companies.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/companies/companies.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <a class=\"btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/campaigns/1']\">\n      <i class=\"fas fa-chevron-left\"></i> Regresar a campañas\n    </a>\n  </div>\n  <div class=\"col-9\">\n    <h2 class=\"text-light text-right\">Empresas</h2>\n  </div>\n</div>\n\n<div class=\"row my-3\">\n  <div class=\"col-sm-4\">\n    <div class=\"input-group mb-3\">\n        <input #i type=\"text\" class=\"form-control bg-dark text-light border-dark form-control-sm\"\n        placeholder=\"Buscar empresa\" (keyup)=\"findCompany( i.value )\" (keydown)=\"clearTime()\">\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text bg-dark text-light border-dark input-group-sm\"> <i class=\"fas fa-search\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2 offset-sm-6\">\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/companies/new/' + curr]\">Nueva empresa</a>\n  </div>\n</div>\n\n\n<div *ngIf=\"companies.length > 0\">\n  <div class=\"row my-2\">\n    <div class=\"col-sm-3\" *ngFor=\"let company of companies\">\n      <div class=\"text-center text-light border-card rounded p-2\"\n        [ngClass]=\"{'isActive': company.status == 'active', 'isInactive': company.status == 'inactive'}\">\n        <a [routerLink]=\"['/companies/edit/' + company.normalizedToLink + '/' + curr ]\">\n          <img [src]=\"'http://18.221.70.54:9000//companies/' + company.photo\" [alt]=\"company.name\"\n            class=\"img-fluid rounded mb-2 portrait\">\n        </a>\n        <h6>{{ company.name }}\n          <br><small class=\"text-muted\">Gestor {{ company.addedBy.name }} {{ company.addedBy.last_name }}</small>\n        </h6>\n        <a class=\"text-decoration-none text-light fs08\"><i class=\"fas fa-user\"></i>\n          {{ company.contact }}</a><br>\n        <a *ngIf=\"company.email \" [href]=\"'mailto:' + company.email\" class=\"text-decoration-none text-light fs08\"><i\n            class=\"fas fa-envelope\"></i>\n          {{ company.email }}</a><br>\n        <a *ngIf=\"company.phone\" [href]=\"'tel:' + company.phone\" class=\"text-decoration-none text-light fs08\"><i\n            class=\"fas fa-mobile-alt\"></i>\n          {{ company.phone }}</a>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row mt-5\" *ngIf=\"pages > 1\">\n    <div class=\"col-12\">\n      <ul class=\"pagination justify-content-center\">\n        <li class=\"page-item\" *ngFor=\"let cell of cells\">\n          <a class=\"page-link\" [ngClass]=\"{'active-pagination': cell === curr}\"\n            style=\"background-color: #343a40; color: #f8f9fa;\" [routerLink]=\"['/companies', cell ]\">{{cell}}</a>\n        </li>\n      </ul>\n      <p class=\"text-center text-light\">\n        Mostrando\n        <span class=\"font-weight-bold\">{{ showing }}</span> de\n        <span class=\"font-weight-bold\">{{count}}</span> resultados\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/companies/edit/edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/companies/edit/edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/companies/' + curr]\">\n      <i class=\"fas fa-chevron-left\"></i> Regresar\n    </a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h5 class=\"text-center text-light\" *ngIf=\"company\">Editando {{ company.name }}</h5>\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"save()\" *ngIf=\"company\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"text-center text-light border-card rounded p-2\"\n        [ngClass]=\"{'isActive': form.controls['status'].value == 'active', 'isInactive': form.controls['status'].value == 'inactive'}\">\n        <img [src]=\"pic\" [alt]=\"form.controls['name'].value\" class=\"img-fluid rounded mb-2 portrait\">\n        <h6>{{ form.controls['name'].value }}\n          <br><small class=\"text-muted\">Gestor {{ me.name }} {{ me.last_name }}</small>\n        </h6>\n        <a class=\"text-decoration-none text-light fs08\"><i\n            class=\"fas fa-user\"></i>{{ form.controls['contact'].value }}</a><br>\n        <a class=\"text-decoration-none text-light fs08\"><i\n            class=\"fas fa-envelope\"></i>{{ form.controls['email'].value }}</a><br>\n        <a class=\"text-decoration-none text-light fs08\"><i\n            class=\"fas fa-mobile-alt\"></i>{{ form.controls['phone'].value }}</a>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Nombre</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Nombre de la empresa\" formControlName=\"name\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['name'].errors?.required\">\n              ¿Cómo se llama la empresa?\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Contacto</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Nombre del contacto directo\" formControlName=\"contact\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['contact'].errors?.required\">\n              Agrega al representante de esta empresa\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Tipo de empresa</label>\n            <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"type\">\n              <option selected disabled value=\"0\">Selecciona un tipo</option>\n              <option value=\"publica\">Pública</option>\n              <option value=\"privada\">Privada</option>\n            </select>\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['type'].value == 0\">\n              Elige un tipo de empresa\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Teléfono</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Teléfono del contacto\" formControlName=\"phone\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['phone'].errors?.required\">\n              No lo dejes sin teléfono\n            </span>\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['phone'].errors?.pattern\">\n              El número de teléfono debe ser 10 digitos y sólo números\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Correo electrónico</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Correo electrónico del contacto directo\" formControlName=\"email\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['email'].errors?.required\">\n              Agrega el correo del contacto\n            </span>\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['email'].errors?.email\">\n              Esto no parece un correo válido\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Domicilio</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Domicilio de la empresa\" formControlName=\"address\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['address'].errors?.required\">\n              Y... ¿A donde vamos a ir?\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-6\">\n          <label>Estado</label>\n          <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"status\">\n            <option value=\"active\">Activa</option>\n            <option value=\"inactive\">Inactiva</option>\n          </select>\n        </div>\n        <div class=\"col-sm-6\">\n          <label>Foto</label>\n          <input type=\"file\" class=\"form-control form-control-sm bg-dark text-light\" #f\n            (change)=\"loadPhoto( f.files[0] )\">\n          <span class=\"fs06 text-danger\" *ngIf=\"imgErr\">\n            {{ imgErr }}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"row mt-3\">\n        <div class=\"col-12\">\n          <div id=\"accordion\">\n            <div class=\"card bg-dark\">\n              <div class=\"card-header\">\n                <a class=\"card-link text-center text-light\" data-toggle=\"collapse\" href=\"#collapseOne\">\n                  Ver el historial de cambios\n                </a>\n              </div>\n              <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                  <ul *ngIf=\"company.modification.length > 0\" class=\"list-group\">\n                    <li class=\"list-group-item fs07 bg-dark text-light\"\n                      *ngFor=\"let mod of pagComments[ indexComments ]\">\n                      El\n                      <span class=\"text-primary\">{{ mod.date | date:'medium' }} - {{ mod.user.name }}\n                        {{ mod.user.last_name }}</span>\n                      modificó:\n                      <ul *ngFor=\"let up of mod.updated\" class=\"list-unstyled\">\n                        <li class=\"ml-2\">\n                          {{ up.field }} de <span class=\"font-weight-bolder fs08\">{{ up.from }}</span> por <span\n                            class=\"font-weight-bolder fs08\">{{ up.to }}</span>.\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                  <div *ngIf=\"company.modification.length > 0\">\n                    <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" (click)=\"lessComments()\">\n                      <i class=\"fas fa-chevron-left\"></i>\n                    </a>\n                    <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" (click)=\"plusComments()\">\n                      <i class=\"fas fa-chevron-right\"></i>\n                    </a>\n                  </div>\n                  <label *ngIf=\"company.modification.length === 0\" class=\"text-center text-light\">Aún no hay\n                    modificaciones</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <button type=\"submit\" class=\"btn btn-block btn-outline-light btn-sm my-2\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/companies/new/new.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/companies/new/new.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/companies/' + curr]\">\n      <i class=\"fas fa-chevron-left\"></i> Regresar\n    </a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h5 class=\"text-center text-light\">Nueva empresa</h5>\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"save()\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n      <div class=\"text-center text-light border-card rounded p-2 isActive\">\n        <img [src]=\"render\" alt=\"Alberto Siurob\" class=\"img-fluid rounded mb-2 portrait\" *ngIf=\"render\">\n        <h6>{{ form.controls['name'].value }} \n          <br><small class=\"text-muted\">Gestor {{ me.name }} {{ me.last_name }}</small>\n        </h6>\n        <a *ngIf=\"form.controls['contact'].value\" class=\"text-decoration-none text-light fs08\"><i\n          class=\"fas fa-user\"></i> {{ form.controls['contact'].value }}</a><br>\n      <a *ngIf=\"form.controls['email'].value\" class=\"text-decoration-none text-light fs08\"><i\n          class=\"fas fa-envelope\"></i> {{ form.controls['email'].value }}</a><br>\n      <a *ngIf=\"form.controls['phone'].value\" class=\"text-decoration-none text-light fs08\"><i\n          class=\"fas fa-mobile-alt\"></i> {{ form.controls['phone'].value }}</a>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Nombre</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Nombre de la empresa\" formControlName=\"name\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['name'].errors?.required\">\n              ¿Cómo se llama la empresa?\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Contacto</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Nombre del contacto directo\" formControlName=\"contact\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['contact'].errors?.required\">\n              Agrega al representante de esta empresa\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Tipo de empresa</label>\n            <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"type\">\n              <option selected disabled value=\"0\">Selecciona un tipo</option>\n              <option value=\"publica\">Pública</option>\n              <option value=\"privada\">Privada</option>\n            </select>\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['type'].value == 0\">\n              Elige un tipo de empresa\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Teléfono</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Teléfono del contacto\" formControlName=\"phone\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['phone'].errors?.required\">\n              No lo dejes sin teléfono\n            </span>\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['phone'].errors?.pattern\">\n              El número de teléfono debe ser 10 digitos y sólo números\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Correo electrónico</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Correo electrónico del contacto directo\" formControlName=\"email\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['email'].errors?.required\">\n              Agrega el correo del contacto\n            </span>\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['email'].errors?.email\">\n              Esto no parece un correo válido\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label>Domicilio</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\"\n              placeholder=\"Domicilio de la empresa\" formControlName=\"address\">\n            <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['address'].errors?.required\">\n              Y... ¿A donde vamos a ir?\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <label>Foto</label>\n          <input type=\"file\" class=\"form-control form-control-sm bg-dark text-light my-2\" #f\n            (change)=\"loadPhoto( f.files[0] )\">\n          <span class=\"fs06 text-danger\" *ngIf=\"imgErr\">\n            {{ imgErr }}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"row text-light fs08 my-3\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <button type=\"submit\" class=\"btn btn-block btn-outline-light btn-sm\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/landing-page/companies/companies-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/companies-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CompaniesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesRoutingModule", function() { return CompaniesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.component */ "./src/app/components/landing-page/companies/companies.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/companies/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/companies/edit/edit.component.ts");






var routes = [
    { path: ':page', component: _companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"] },
    { path: 'new/:page', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:name/:page', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
];
var CompaniesRoutingModule = /** @class */ (function () {
    function CompaniesRoutingModule() {
    }
    CompaniesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CompaniesRoutingModule);
    return CompaniesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/companies/companies.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/companies.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/companies/companies.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/companies.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(route, COMPANY_SERVICE, TOSTADOR) {
        this.route = route;
        this.COMPANY_SERVICE = COMPANY_SERVICE;
        this.TOSTADOR = TOSTADOR;
        this.companies = [];
        this.cells = [];
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.curr = Number(params.page || 1);
            _this.fetchCompanies();
        });
    };
    CompaniesComponent.prototype.fetchCompanies = function (name) {
        var _this = this;
        this.pages = 0;
        this.cells = [];
        this.COMPANY_SERVICE.fetch(this.curr, 8, name)
            .subscribe(function (res) {
            _this.companies = res.data;
            _this.count = res.count;
            _this.pages = Math.ceil(res.count / 8);
            if (_this.pages > 1) {
                for (var i = 1; i <= _this.pages; i++) {
                    _this.cells.push(i);
                }
            }
            _this.showing = _this.companies.length < 8 ? _this.count : (_this.companies.length * _this.curr);
        }, function (err) { return _this.TOSTADOR.error(err.message, '¡Error!'); }).add(function () { });
    };
    CompaniesComponent.prototype.findCompany = function (input) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            input = input.trim();
            if (input.length === 0) {
                _this.fetchCompanies();
            }
            else if (input.length > 1) {
                _this.fetchCompanies(input);
            }
        }, 500);
    };
    CompaniesComponent.prototype.clearTime = function () {
        clearTimeout(this.timer);
    };
    CompaniesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.sass */ "./src/app/components/landing-page/companies/companies.component.sass")]
        })
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/companies/companies.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing-page/companies/companies.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompaniesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesModule", function() { return CompaniesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/components/landing-page/companies/companies-routing.module.ts");
/* harmony import */ var _companies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companies.component */ "./src/app/components/landing-page/companies/companies.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/companies/new/new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/companies/edit/edit.component.ts");








var CompaniesModule = /** @class */ (function () {
    function CompaniesModule() {
    }
    CompaniesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_companies_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _companies_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompaniesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], CompaniesModule);
    return CompaniesModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/companies/edit/edit.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/edit/edit.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NvbXBhbmllcy9lZGl0L2VkaXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/companies/edit/edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/edit/edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_image_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/image-handler.service */ "./src/app/services/image-handler.service.ts");








var EditComponent = /** @class */ (function () {
    function EditComponent(ROUTE, ROUTER, COMPANY_SERVICE, TOSTADOR, ME, IMG_HANDLER) {
        this.ROUTE = ROUTE;
        this.ROUTER = ROUTER;
        this.COMPANY_SERVICE = COMPANY_SERVICE;
        this.TOSTADOR = TOSTADOR;
        this.ME = ME;
        this.IMG_HANDLER = IMG_HANDLER;
        this.touched = false;
        this.pagComments = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indexComments = 0;
        this.curr = Number(this.ROUTE.snapshot.params.page) || 1;
        var name = this.ROUTE.snapshot.params.name;
        if (name) {
            this.COMPANY_SERVICE.fetch(0, 1, name)
                .subscribe(function (res) {
                _this.company = res.data[0];
                var x = 0;
                _this.company.modification = _this.company.modification.reverse();
                for (var i = 0; i < _this.company.modification.length; i += 3) {
                    _this.pagComments[x] = _this.company.modification.slice(i, (3 + i));
                    x++;
                }
            }, function (err) { return _this.TOSTADOR.error(err.message, '¡Error!'); }).add(function () { _this.createForm(); _this.me = _this.ME.getData(); });
        }
    };
    EditComponent.prototype.createForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.contact, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]{10,10}$')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.company.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
        this.pic = "http://18.221.70.54:9000//companies/" + this.company.photo;
    };
    EditComponent.prototype.loadPhoto = function (file) {
        var _this = this;
        this.IMG_HANDLER.handler(file)
            .then(function (res) {
            _this.file = file;
            _this.pic = res;
            _this.imgErr = null;
        })
            .catch(function (err) {
            _this.imgErr = err;
            _this.file = null;
            _this.pic = null;
        });
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        if (this.form.status === 'VALID') {
            var fd = new FormData();
            fd.append('name', this.form.value.name);
            fd.append('contact', this.form.value.contact);
            fd.append('type', this.form.value.type);
            fd.append('phone', this.form.value.phone);
            fd.append('email', this.form.value.email);
            fd.append('address', this.form.value.address);
            fd.append('status', this.form.value.status);
            fd.append('token', this.ME.getToken());
            if (this.file) {
                fd.append('image', this.file, 'image');
            }
            this.COMPANY_SERVICE.edit(this.company._id, fd)
                .subscribe(function () { return _this.ROUTER.navigateByUrl('/companies/' + _this.curr); }, function (err) { return _this.TOSTADOR.error(err.message, '¡Error!'); }).add(function () { });
        }
    };
    EditComponent.prototype.plusComments = function () {
        this.indexComments = (this.indexComments + 1) > (this.pagComments.length - 1)
            ? (this.pagComments.length - 1)
            : this.indexComments + 1;
    };
    EditComponent.prototype.lessComments = function () {
        this.indexComments = (this.indexComments - 1) < 0 ? 0 : this.indexComments - 1;
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_3__["CompaniesService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
        { type: _services_image_handler_service__WEBPACK_IMPORTED_MODULE_7__["ImageHandlerService"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/companies/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/components/landing-page/companies/edit/edit.component.sass")]
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/companies/new/new.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/new/new.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NvbXBhbmllcy9uZXcvbmV3LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/companies/new/new.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/companies/new/new.component.ts ***!
  \************************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_image_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/image-handler.service */ "./src/app/services/image-handler.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/companies.service */ "./src/app/services/companies.service.ts");








var NewComponent = /** @class */ (function () {
    function NewComponent(tostador, router, route, imgHandler, cLs, comService) {
        this.tostador = tostador;
        this.router = router;
        this.route = route;
        this.imgHandler = imgHandler;
        this.cLs = cLs;
        this.comService = comService;
        this.brands = [];
        this.touched = false;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.curr = Number(this.route.snapshot.params.page) || 1;
        this.me = this.cLs.getData();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]{10,10}$')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    NewComponent.prototype.loadPhoto = function (file) {
        var _this = this;
        this.imgHandler.handler(file)
            .then(function (res) {
            _this.file = file;
            _this.render = res;
            _this.imgErr = null;
        })
            .catch(function (err) {
            _this.imgErr = err;
            _this.file = null;
            _this.render = null;
        });
    };
    NewComponent.prototype.save = function () {
        var _this = this;
        this.touched = true;
        if (this.form.status !== 'INVALID' && this.file) {
            var fd = new FormData();
            fd.append('name', this.form.value.name);
            fd.append('contact', this.form.value.contact);
            fd.append('type', this.form.value.type);
            fd.append('phone', this.form.value.phone);
            fd.append('email', this.form.value.email);
            fd.append('address', this.form.value.address);
            fd.append('name', this.form.value.name);
            fd.append('token', this.cLs.getToken());
            fd.append('image', this.file, 'image');
            this.comService.save(fd)
                .subscribe(function () { return _this.router.navigateByUrl('/companies/' + _this.curr); }, function (err) { return _this.tostador.error(err.message, '¡Error!'); }).add(function () { });
        }
    };
    NewComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_image_handler_service__WEBPACK_IMPORTED_MODULE_5__["ImageHandlerService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
        { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_7__["CompaniesService"] }
    ]; };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/companies/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.sass */ "./src/app/components/landing-page/companies/new/new.component.sass")]
        })
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/services/image-handler.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/image-handler.service.ts ***!
  \***************************************************/
/*! exports provided: ImageHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHandlerService", function() { return ImageHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageHandlerService = /** @class */ (function () {
    function ImageHandlerService() {
    }
    ImageHandlerService.prototype.handler = function (file, inSize, inWidth, inHeight) {
        if (!file) {
            return new Promise(function (res, rej) { return rej('No se recibió la imágen'); });
        }
        var imageType = /image.*/;
        if (!file.type.match(imageType)) {
            return new Promise(function (res, rej) { return rej('El archivo recibido no es una imagen'); });
        }
        if (inSize) {
            var KBIn_1 = Math.ceil(inSize);
            var KBFile_1 = Math.ceil(file.size / 1024);
            if (KBIn_1 < KBFile_1) {
                return new Promise(function (res, rej) { return rej("Peso de fichero excedido. Permitido " + KBIn_1 + "KB, enviado " + KBFile_1 + "KB."); });
            }
        }
        var reader = new FileReader();
        var img = new Image();
        reader.readAsDataURL(file);
        var imgPromise = new Promise(function (resolve) {
            img.onload = function () {
                resolve({ width: img.width, height: img.height });
            };
        });
        var onloadPromise = new Promise(function (resolve) {
            reader.onload = function () {
                if (inHeight && inWidth) {
                    img.src = reader.result;
                    imgPromise.then(function (res) {
                        if (res.width > inWidth || res.height > inHeight) {
                            resolve("Archivo sobredimensionado. Actual: " + res.width + "x" + res.height + ". Permitido: " + inWidth + "x" + inHeight);
                        }
                        else {
                            resolve(reader.result);
                        }
                    });
                }
                else {
                    resolve(reader.result);
                }
            };
        });
        return onloadPromise;
    };
    ImageHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ImageHandlerService);
    return ImageHandlerService;
}());



/***/ })

}]);
//# sourceMappingURL=companies-companies-module-es5.js.map