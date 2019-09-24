(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/landing-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/landing-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">S K I L E X</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\"\r\n    aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 text-center ml-sm-5\">\r\n      <li class=\"nav-item fs09\">\r\n        <a class=\"nav-link\"  routerLinkActive=\"active\" [routerLink]=\"['/']\">\r\n          <i class=\"fas fa-home fs12\"></i>\r\n          <br>Inicio\r\n        </a>\r\n      </li>\r\n      <!--li class=\"nav-item fs09\" >\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/financial']\">\r\n          <i class=\"fas fa-chart-line fs12\"></i>\r\n          <br>Finanzas\r\n        </a>\r\n      </li-->\r\n      <li class=\"nav-item fs09\" >\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/employees/1']\">\r\n          <i class=\"fas fa-users-cog fs12\"></i>\r\n          <br>Empleados\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/glasses/1']\">\r\n          <i class=\"fas fa-glasses fs12\"></i>\r\n          <br>Armazones\r\n        </a>\r\n      </li>\r\n      <!--li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/micas']\">\r\n          <i class=\"fas fa-eye fs12\"></i>\r\n          <br>Micas\r\n        </a>\r\n      </li-->\r\n\r\n      <li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/campaigns/1']\">\r\n          <i class=\"fas fa-briefcase fs12\"></i>\r\n          <br>Campañas\r\n        </a>\r\n      </li>\r\n      <!--li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/costumers']\">\r\n          <i class=\"fas fa-users fs12\"></i>\r\n          <br>Clientes\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/exams']\">\r\n          <i class=\"fas fa-clipboard-list fs12\"></i>\r\n          <br>Examenes\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/laboratory']\">\r\n          <i class=\"fas fa-flask fs12\"></i>\r\n          <br>Laboratorio\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item fs09\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/merkaba']\">\r\n          <i class=\"fas fa-fire fs12\"></i>\r\n          <br>Merkaba\r\n        </a>\r\n      </li-->\r\n\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      \r\n      <h6 class=\"text-light text-center\">\r\n          <a  class=\"text-light text-center text-decoration-none\" \r\n          [routerLink]=\"[ '/me' ]\">\r\n            {{ user.name }} {{ user.last_name }}</a>\r\n        <br><small class=\"text-muted\">{{ user.role }} de {{ user.area }}</small>\r\n        <br><small class=\"text-danger font-weight-bold\">\r\n          <span class=\"badge badge-danger fs08\">\r\n            <a [routerLink]=\"['/login']\" class=\"text-decoration-none text-light\">Salir</a>\r\n          </span>\r\n        </small>\r\n      </h6>\r\n    </form>\r\n  </div>\r\n</nav>\r\n<div class=\"container mt-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col 12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");




var routes = [
    {
        path: '',
        component: _landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"],
        children: [
            { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule' },
            { path: 'departments', loadChildren: './departments/departments.module#DepartmentsModule' },
            { path: 'me', loadChildren: './me/me.module#MeModule' },
            { path: 'glasses', loadChildren: './glasses/glasses.module#GlassesModule' },
            { path: 'glass-brands', loadChildren: './brands/brands.module#BrandsModule' },
            { path: 'glass-models', loadChildren: './bmodels/models.module#ModelsModule' },
            { path: 'campaigns', loadChildren: './campaigns/campaigns.module#CampaignsModule' },
            { path: 'companies', loadChildren: './companies/companies.module#CompaniesModule' },
        ]
    },
];
var LandingPageRoutingModule = /** @class */ (function () {
    function LandingPageRoutingModule() {
    }
    LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LandingPageRoutingModule);
    return LandingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(cLs) {
        this.cLs = cLs;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.user = this.cLs.getData();
    };
    LandingPageComponent.ctorParameters = function () { return [
        { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
    ]; };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.sass */ "./src/app/components/landing-page/landing-page.component.sass")]
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.module.ts ***!
  \****************************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page-routing.module */ "./src/app/components/landing-page/landing-page-routing.module.ts");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _employees_employees_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees/employees.module */ "./src/app/components/landing-page/employees/employees.module.ts");
/* harmony import */ var _departments_departments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departments/departments.module */ "./src/app/components/landing-page/departments/departments.module.ts");







var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageRoutingModule"],
                _employees_employees_module__WEBPACK_IMPORTED_MODULE_5__["EmployeesModule"],
                _departments_departments_module__WEBPACK_IMPORTED_MODULE_6__["DepartmentsModule"]
            ]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-landing-page-landing-page-module-es5.js.map