(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaigns-campaigns-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/campaigns/campaigns.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/campaigns/campaigns.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\n  <div class=\"col-sm-4\">\n    <div class=\"input-group mb-3\">\n      <input #i type=\"text\" class=\"form-control bg-dark text-light border-dark form-control-sm\"\n        placeholder=\"Puedes buscar _hoy\" (keyup)=\"findCompany( i.value )\" (keydown)=\"clearTime()\">\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text bg-dark text-light border-dark input-group-sm\"> \n          <i class=\"fas fa-search\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/companies/1']\">Nueva empresa</a>\n  </div>\n\n  <div class=\"col-sm-2 offset-sm-4\">\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/campaigns/new/' + curr]\">Nueva campaña</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-3 my-2\" *ngFor=\"let campaign of campaigns\">\n    <div [class]=\"'text-center text-light border-card rounded p-2 ' + campaign.border\">\n      <a *ngIf=\"campaign.allow\" [routerLink]=\"['/campaigns/edit/' + campaign.normalizedToLink + '/' + curr]\">\n        <img [src]=\"campaign.company.photo\" [alt]=\"campaign.company.name\"\n          class=\"portrait\">\n      </a>\n        <img *ngIf=\"!campaign.allow\" [src]=\"campaign.company.photo\" [alt]=\"campaign.company.name\"\n          class=\"portrait\">\n      <h6 class=\"mt-1\">{{ campaign.company.name }}\n        <br><small class=\"text-info\">{{ campaign.place }}</small>\n        <br><small class=\"text-muted\">{{ campaign.date | date:'medium' }}</small>\n      </h6>\n\n      <hr class=\"border-secondary\">\n      <span class=\"fs09\">Asistentes</span>\n      <div class=\"d-flex  mt-2 t  ext-center\">  \n        <img *ngFor=\"let employee of campaign.employees\" [src]=\"employee.photo\" \n        [alt]=\"employee.name +  ' ' + employee.last_name\" class=\"miniature rounded-circle ml-1 mx-auto\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mt-5\" *ngIf=\"pages > 1\">\n  <div class=\"col-12\">\n    <ul class=\"pagination justify-content-center\">\n      <li class=\"page-item\" *ngFor=\"let cell of cells\">\n        <a class=\"page-link\" [ngClass]=\"{'active-pagination': cell === curr}\"\n          style=\"background-color: #343a40; color: #f8f9fa;\" [routerLink]=\"['/companies', cell ]\">{{cell}}</a>\n      </li>\n    </ul>\n    <p class=\"text-center text-light\">\n      Mostrando\n      <span class=\"font-weight-bold\">{{ showing }}</span> de\n      <span class=\"font-weight-bold\">{{count}}</span> resultados\n    </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/campaigns/edit/edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/campaigns/edit/edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/campaigns/' + curr]\">\n      <i class=\"fas fa-chevron-left\"></i> Regresar\n    </a>\n  </div>\n</div>\n\n<div *ngIf=\"campaign\">\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h5 class=\"text-center text-light\">Editando la campaña de {{ campaign.company.name }} ( {{ campaign.place }} )</h5>\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"save()\" *ngIf=\"campaign\">\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Fecha</label>\n        <input type=\"date\" class=\"form-control form-control-sm bg-dark text-light\" [min]=\"now()\" formControlName=\"date\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['date'].errors?.required\">\n          ¿Qué día iremos?\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Hora</label>\n        <input type=\"time\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"time\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['time'].errors?.required\">\n          ¿A que horá es el evento?\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Asistentes</label>\n        <select class=\"form-control form-control-sm bg-dark text-light\" multiple formControlName=\"employees\">\n          <option *ngFor=\"let user of users\" [value]=\"user._id\">{{ user.name }} {{ user.last_name }}</option>\n        </select>\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['employees'].errors?.required\">\n          Esto no se atenderá solo...\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Empresa</label>\n        <select #c class=\"form-control form-control-sm bg-dark text-light\"\n          (change)=\"companyName = c.options[ c.selectedIndex ].text\" formControlName=\"company\">\n          <option selected disabled value=\"0\">Selecciona una empresa</option>\n          <option *ngFor=\"let company of companies\" [value]=\"company._id\">{{ company.name }}</option>\n        </select>\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['company'].value == 0\">\n          Dime dónde será el evento\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Sede</label>\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"place\"\n          placeholder=\"Escribe la sede de visita\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['place'].errors?.required\">\n          ¿Cuál es el lugar específico?\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Tipo de pago</label>\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"type\">\n          <option selected disabled value=\"0\">Selecciona un tipo</option>\n          <option value=\"nomina\">Nómina</option>\n          <option value=\"credito\">Crédito directo</option>\n        </select>\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['type'].value == 0\">\n          ¿Cómo se piensa cobrar?\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-3\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Empleados aproximados</label>\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"aprox_costumers\"\n          placeholder=\"Empleados aproximados\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['aprox_costumers'].errors?.pattern\">\n          No parece un número\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Comentarios adicionales</label>\n        <textarea class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"comments\"\n          placeholder=\"Agrega comentarios\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-12\">\n      <div id=\"accordion\">\n        <div class=\"card bg-dark\">\n          <div class=\"card-header\">\n            <a class=\"card-link text-center text-light\" data-toggle=\"collapse\" href=\"#collapseOne\">\n              Ver el historial de cambios\n            </a>\n          </div>\n          <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n            <div class=\"card-body\">\n              <ul *ngIf=\"campaign.modification.length > 0\" class=\"list-group\">\n                <li class=\"list-group-item fs07 bg-dark text-light\" *ngFor=\"let mod of pagComments[ indexComments ]\">\n                  El\n                  <span class=\"text-primary\">{{ mod.date | date:'medium' }} - {{ mod.user.name }}\n                    {{ mod.user.last_name }}</span>\n                  modificó:\n                  <ul *ngFor=\"let up of mod.updated\" class=\"list-unstyled\">\n                    <li class=\"ml-2\">\n                      {{ up.field }} de <span class=\"font-weight-bolder fs08\">{{ up.from }}</span> por <span\n                        class=\"font-weight-bolder fs08\">{{ up.to }}</span>.\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n              <div *ngIf=\"campaign.modification.length > 0\">\n                <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" (click)=\"lessComments()\">\n                  <i class=\"fas fa-chevron-left\"></i>\n                </a>\n                <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" (click)=\"plusComments()\">\n                  <i class=\"fas fa-chevron-right\"></i>\n                </a>\n              </div>\n              <label *ngIf=\"campaign.modification.length === 0\" class=\"text-center text-light\">Aún no hay\n                modificaciones</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-6 offset-sm-3\">\n      <button type=\"submit\" class=\"btn btn-block btn-outline-light btn-sm\">Guardar</button>\n    </div>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/campaigns/new/new.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/campaigns/new/new.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/campaigns/' + curr]\">\n      <i class=\"fas fa-chevron-left\"></i> Regresar\n    </a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h5 class=\"text-center text-light\">Nueva campaña</h5>\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"save()\">\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Fecha</label>\n        <input type=\"date\" class=\"form-control form-control-sm bg-dark text-light\" [min]=\"now()\" formControlName=\"date\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['date'].errors?.required\">\n          ¿Qué día iremos?\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Hora</label>\n        <input type=\"time\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"time\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['time'].errors?.required\">\n          ¿A que horá es el evento?\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Asistentes</label>\n        <select class=\"form-control form-control-sm bg-dark text-light\" multiple formControlName=\"employees\">\n          <option *ngFor=\"let user of users\" [value]=\"user._id\">{{ user.name }} {{ user.last_name }}</option>\n        </select>\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['employees'].errors?.required\">\n          Esto no se atenderá solo...\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Empresa</label>\n        <select #c class=\"form-control form-control-sm bg-dark text-light\"\n          (change)=\"companyName = c.options[ c.selectedIndex ].text\" formControlName=\"company\">\n          <option selected disabled value=\"0\">Selecciona una empresa</option>\n          <option *ngFor=\"let company of companies\" [value]=\"company._id\">{{ company.name }}</option>\n        </select>\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['company'].value == 0\">\n          Dime dónde será el evento\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Sede</label>\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"place\"\n          placeholder=\"Escribe la sede de visita\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['place'].errors?.required\">\n          ¿Cuál es el lugar específico?\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Tipo de pago</label>\n        <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"type\">\n          <option selected disabled value=\"0\">Selecciona un tipo</option>\n          <option value=\"nomina\">Nómina</option>\n          <option value=\"credito\">Crédito directo</option>\n        </select>\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['type'].value == 0\">\n          ¿Cómo se piensa cobrar?\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-3\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Empleados aproximados</label>\n        <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"aprox_costumers\"\n          placeholder=\"Empleados aproximados\">\n        <span class=\"fs06 text-danger\" *ngIf=\"touched && form.controls['aprox_costumers'].errors?.pattern\">\n          No parece un número\n        </span>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"form-group\">\n        <label class=\"fs08\">Comentarios adicionales</label>\n        <textarea class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"comments\"\n          placeholder=\"Agrega comentarios\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"row my-2 text-light\">\n    <div class=\"col-sm-6 offset-sm-3\">\n      <button type=\"submit\" class=\"btn btn-block btn-outline-light btn-sm\">Guardar</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/landing-page/campaigns/campaigns-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/campaigns-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CampaignsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsRoutingModule", function() { return CampaignsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _campaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns.component */ "./src/app/components/landing-page/campaigns/campaigns.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/campaigns/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/campaigns/edit/edit.component.ts");






const routes = [
    { path: ':page', component: _campaigns_component__WEBPACK_IMPORTED_MODULE_3__["CampaignsComponent"] },
    { path: 'new/:page', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:name/:page', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
];
let CampaignsRoutingModule = class CampaignsRoutingModule {
};
CampaignsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CampaignsRoutingModule);



/***/ }),

/***/ "./src/app/components/landing-page/campaigns/campaigns.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/campaigns.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NhbXBhaWducy9jYW1wYWlnbnMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/campaigns/campaigns.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/campaigns.component.ts ***!
  \**************************************************************************/
/*! exports provided: CampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsComponent", function() { return CampaignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/campaign.service */ "./src/app/services/campaign.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../variables/services.config */ "./src/app/variables/services.config.ts");






let CampaignsComponent = class CampaignsComponent {
    constructor(ROUTE, CAMPAIGN_SERVICE, TOSTADOR) {
        this.ROUTE = ROUTE;
        this.CAMPAIGN_SERVICE = CAMPAIGN_SERVICE;
        this.TOSTADOR = TOSTADOR;
        this.campaigns = [];
        this.cells = [];
    }
    ngOnInit() {
        this.ROUTE.params.subscribe((params) => {
            this.curr = Number(params.page || 1);
            this.fetchCampaigns();
        });
    }
    fetchCampaigns(name) {
        this.CAMPAIGN_SERVICE.fetch(this.curr, 8, name)
            .subscribe((res) => {
            res.data.forEach((d) => {
                d.company.photo = `${_variables_services_config__WEBPACK_IMPORTED_MODULE_5__["link"]}/companies/${d.company.photo}`;
                d.employees.map((u) => u.photo = `${_variables_services_config__WEBPACK_IMPORTED_MODULE_5__["link"]}/users/${u.photo}`);
                const date = new Date(d.date).setHours(0, 0, 0, 0);
                const now = new Date().setHours(0, 0, 0, 0);
                if (date === now) {
                    d.border = 'isCurrent';
                    d.allow = true;
                }
                else if (date < now) {
                    d.border = 'isInactive';
                    d.allow = false;
                }
                else {
                    d.border = 'isActive';
                    d.allow = true;
                }
            });
            this.campaigns = res.data;
            this.count = res.count;
            this.pages = Math.ceil(res.count / 8);
            if (this.pages > 1) {
                for (let i = 1; i <= this.pages; i++) {
                    this.cells.push(i);
                }
            }
            this.showing = this.campaigns.length < 8 ? this.count : (this.campaigns.length * this.curr);
        }, (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
    }
    findCompany(input) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            input = input.trim();
            if (input.length === 0) {
                this.fetchCampaigns();
            }
            else if (input.length > 1) {
                this.fetchCampaigns(input);
            }
        }, 500);
    }
    clearTime() {
        clearTimeout(this.timer);
    }
};
CampaignsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_campaign_service__WEBPACK_IMPORTED_MODULE_3__["CampaignService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
CampaignsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campaigns',
        template: __webpack_require__(/*! raw-loader!./campaigns.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/campaigns/campaigns.component.html"),
        styles: [__webpack_require__(/*! ./campaigns.component.sass */ "./src/app/components/landing-page/campaigns/campaigns.component.sass")]
    })
], CampaignsComponent);



/***/ }),

/***/ "./src/app/components/landing-page/campaigns/campaigns.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/campaigns.module.ts ***!
  \***********************************************************************/
/*! exports provided: CampaignsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsModule", function() { return CampaignsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns-routing.module */ "./src/app/components/landing-page/campaigns/campaigns-routing.module.ts");
/* harmony import */ var _campaigns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaigns.component */ "./src/app/components/landing-page/campaigns/campaigns.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/campaigns/new/new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/campaigns/edit/edit.component.ts");








let CampaignsModule = class CampaignsModule {
};
CampaignsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_campaigns_component__WEBPACK_IMPORTED_MODULE_4__["CampaignsComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], CampaignsModule);



/***/ }),

/***/ "./src/app/components/landing-page/campaigns/edit/edit.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/edit/edit.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NhbXBhaWducy9lZGl0L2VkaXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/campaigns/edit/edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/edit/edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/campaign.service */ "./src/app/services/campaign.service.ts");









let EditComponent = class EditComponent {
    constructor(ROUTE, ROUTER, TOSTADOR, USER_SERVICE, COMPANY_SERVICE, STORAGE_SERVICE, CAMPAIGN_SERVICE) {
        this.ROUTE = ROUTE;
        this.ROUTER = ROUTER;
        this.TOSTADOR = TOSTADOR;
        this.USER_SERVICE = USER_SERVICE;
        this.COMPANY_SERVICE = COMPANY_SERVICE;
        this.STORAGE_SERVICE = STORAGE_SERVICE;
        this.CAMPAIGN_SERVICE = CAMPAIGN_SERVICE;
        this.users = [];
        this.companies = [];
        this.touched = false;
        this.pagComments = [];
    }
    ngOnInit() {
        this.curr = Number(this.ROUTE.snapshot.params.page || 1);
        const name = this.ROUTE.snapshot.params.name;
        this.indexComments = 0;
        if (name) {
            this.CAMPAIGN_SERVICE.fetch(0, 1, name)
                .subscribe((res) => {
                this.campaign = res.data[0];
                let x = 0;
                this.campaign.modification = this.campaign.modification.reverse();
                for (let i = 0; i < this.campaign.modification.length; i += 3) {
                    this.pagComments[x] = this.campaign.modification.slice(i, (3 + i));
                    x++;
                }
            }, (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => {
                this.createForm();
                this.USER_SERVICE.catalog()
                    .subscribe((res) => this.users = res.data, (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
                this.COMPANY_SERVICE.catalog()
                    .subscribe((res) => this.companies = res.data, (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
            });
        }
    }
    createForm() {
        const employees = this.campaign.employees.map((e) => e._id);
        const d = new Date(this.campaign.date);
        const date = `${d.getFullYear()}-${this.addZero(d.getMonth() + 1)}-${this.addZero(d.getDate())}`;
        const time = `${this.addZero(d.getHours())}:${d.getMinutes()}`;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](date, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](time, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            employees: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](employees, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.campaign.company._id, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            place: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.campaign.place, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.campaign.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            aprox_costumers: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.campaign.aprox_costumers, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.campaign.comments)
        });
        this.form.controls.company.disable({ onlySelf: true });
        this.companyName = this.campaign.company.name;
    }
    now() {
        const date = new Date();
        return `${date.getFullYear()}-${this.addZero(date.getMonth() + 1)}-${this.addZero(date.getDate())}`;
    }
    addZero(value) {
        return value < 10 ? `0${value}` : value;
    }
    save() {
        this.touched = true;
        if (this.form.status === 'VALID') {
            const data = this.form.value;
            data.token = this.STORAGE_SERVICE.getToken();
            data.company = this.companyName;
            this.CAMPAIGN_SERVICE.edit(this.campaign._id, data)
                .subscribe(() => this.ROUTER.navigateByUrl('/campaigns/' + this.curr), (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
        }
    }
    plusComments() {
        this.indexComments = (this.indexComments + 1) > (this.pagComments.length - 1)
            ? (this.pagComments.length - 1)
            : this.indexComments + 1;
    }
    lessComments() {
        this.indexComments = (this.indexComments - 1) < 0 ? 0 : this.indexComments - 1;
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _services_campaign_service__WEBPACK_IMPORTED_MODULE_8__["CampaignService"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/campaigns/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/components/landing-page/campaigns/edit/edit.component.sass")]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/components/landing-page/campaigns/new/new.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/new/new.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NhbXBhaWducy9uZXcvbmV3LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/campaigns/new/new.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/campaigns/new/new.component.ts ***!
  \************************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/companies.service */ "./src/app/services/companies.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/campaign.service */ "./src/app/services/campaign.service.ts");









let NewComponent = class NewComponent {
    constructor(ROUTE, ROUTER, TOSTADOR, USER_SERVICE, COMPANY_SERVICE, STORAGE_SERVICE, CAMPAIGN_SERVICE) {
        this.ROUTE = ROUTE;
        this.ROUTER = ROUTER;
        this.TOSTADOR = TOSTADOR;
        this.USER_SERVICE = USER_SERVICE;
        this.COMPANY_SERVICE = COMPANY_SERVICE;
        this.STORAGE_SERVICE = STORAGE_SERVICE;
        this.CAMPAIGN_SERVICE = CAMPAIGN_SERVICE;
        this.users = [];
        this.companies = [];
        this.touched = false;
    }
    ngOnInit() {
        this.USER_SERVICE.catalog()
            .subscribe((res) => this.users = res.data, (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
        this.COMPANY_SERVICE.catalog()
            .subscribe((res) => this.companies = res.data, (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
        this.curr = Number(this.ROUTE.snapshot.params.page || 1);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.now(), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('10:30', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            employees: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            place: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Matriz', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            aprox_costumers: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    }
    now() {
        const date = new Date();
        return `${date.getFullYear()}-${this.addZero(date.getMonth() + 1)}-${this.addZero(date.getDate())}`;
    }
    addZero(value) {
        return value < 10 ? `0${value}` : value;
    }
    save() {
        this.touched = true;
        if (this.form.status === 'VALID') {
            const data = this.form.value;
            data.token = this.STORAGE_SERVICE.getToken();
            data.company_name = this.companyName;
            this.CAMPAIGN_SERVICE.save(data)
                .subscribe(() => this.ROUTER.navigateByUrl('/campaigns/' + this.curr), (err) => this.TOSTADOR.error(err.message, '¡Error!')).add(() => { });
        }
    }
};
NewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _services_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _services_campaign_service__WEBPACK_IMPORTED_MODULE_8__["CampaignService"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/campaigns/new/new.component.html"),
        styles: [__webpack_require__(/*! ./new.component.sass */ "./src/app/components/landing-page/campaigns/new/new.component.sass")]
    })
], NewComponent);



/***/ }),

/***/ "./src/app/services/campaign.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/campaign.service.ts ***!
  \**********************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");




let CampaignService = class CampaignService {
    constructor(cHttp) {
        this.cHttp = cHttp;
        this.route = 'campaign';
    }
    save(data) {
        return this.cHttp.post(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/${this.route}`, data);
    }
    edit(id, data) {
        return this.cHttp.put(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/${this.route}/${id}`, data);
    }
    fetch(skip, limit, value) {
        value = value ? value : '';
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/${this.route}/${skip}/${limit}/${value}`);
    }
    catalog() {
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/campaign-catalog`);
    }
};
CampaignService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CampaignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CampaignService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





let UsersService = class UsersService {
    constructor(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
    }
    save(data) {
        return this.cHttp.put(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/users`, data);
    }
    update(data, id) {
        return this.cHttp.post(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/users/${id}`, data);
    }
    fetch(skip, limit, user) {
        user = user ? user : '';
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/users/${skip}/${limit}/${user}`);
    }
    resetPassword(id) {
        return this.cHttp.post(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/password/${id}`, { user: this.cUser.getIndex('id') });
    }
    getBosses(role, dpto) {
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/boss/${role}/${dpto}`);
    }
    catalog() {
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/user-catalog`);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ })

}]);
//# sourceMappingURL=campaigns-campaigns-module-es2015.js.map