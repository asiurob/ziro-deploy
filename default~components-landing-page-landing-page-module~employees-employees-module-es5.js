(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-landing-page-landing-page-module~employees-employees-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/employees/edit/edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/employees/edit/edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/employees/' + current ]\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"user && form\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h4 class=\"text-center text-light\">Editando a {{ user.name }} {{ user.last_name }}</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <form [formGroup]=\"form\" (submit)=\"save()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h5 class=\"text-center text-muted\">Vista previa de tarjeta</h5>\r\n            <div class=\"text-center text-light border-card rounded p-2\"\r\n              [ngClass]=\"{'isActive': form.value.status == 'active', 'isInactive': form.value.status == 'inactive'}\">\r\n              <img [src]=\"imgRender || user.photo\"\r\n                [alt]=\"form.value.name + ' ' + form.value.lastname\" class=\"img-fluid rounded mb-2 portrait\">\r\n              <h6>{{ form.value.name }} {{ form.value.lastname }}<br>\r\n                <small class=\"text-muted\">{{ rolLabel || user.role.name }} de {{ dpLabel || user.area.name }}</small>\r\n              </h6>\r\n              <label class=\"text-primary fs09\">{{ form.value.username || user.user_name }}</label><br>\r\n\r\n              <a *ngIf=\"form.value.email\" [href]=\"'mailto:' + form.value.email\"\r\n                class=\"text-decoration-none text-light fs08\">\r\n                <i class=\"fas fa-envelope\"></i>\r\n                {{ form.value.email }}</a><br>\r\n              <a *ngIf=\"form.value.phone\" [href]=\"'tel:' + form.value.phone\"\r\n                class=\"text-decoration-none text-light fs08\">\r\n                <i class=\"fas fa-mobile-alt\"></i>\r\n                {{ form.value.phone }}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Nombre</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"name\"\r\n                placeholder=\"Nombre(s) del empleado\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Apellidos</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"lastname\"\r\n                placeholder=\"Apellidos(s) del empleado\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Orientación</label>\r\n              <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"gender\">\r\n                <option [ngValue]=\"1\">Hombre</option>\r\n                <option [ngValue]=\"2\">Mujer</option>\r\n                <option [ngValue]=\"3\">Prefiero reservarlo</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Correo electrónico</label>\r\n              <input type=\"email\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"email\"\r\n                placeholder=\"Correo electrónico\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Usuario</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"username\"\r\n                placeholder=\"Nombre de usuario\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Teléfono de contacto</label>\r\n              <input type=\"tel\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"phone\"\r\n                placeholder=\"Teléfono (Incluye LADA)\" pattern=\"[0-9]{10}\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Rol</label>\r\n              <select #r class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"role\"\r\n                (change)=\"roleLabel( r )\">\r\n                <option *ngFor=\"let rol of roles\" [ngValue]=\"rol._id + rol.hierarchy\">{{ rol.name }}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Departamento</label>\r\n              <select #d class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"area\"\r\n                (change)=\"dptoLabel( d )\">\r\n                <option *ngFor=\"let dp of dptos\" [ngValue]=\"dp._id\">{{ dp.name }}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Jefe inmediato</label>\r\n              <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"boss\">\r\n                <option *ngFor=\"let boss of bosses\" [value]=\"boss._id\">{{ boss.name }} {{ boss.last_name }}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-sm-6\">\r\n            <label class=\"text-muted\">Foto</label>\r\n            <input #i type=\"file\" formControlName=\"file\" class=\"form-control form-control-sm bg-dark text-light\"\r\n              (change)=\"renderImage( i.files[0] )\">\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <label class=\"text-muted\">Estado</label>\r\n            <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"status\">\r\n              <option [ngValue]=\"'active'\">Activo</option>\r\n              <option [ngValue]=\"'inactive'\">Inactivo</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <label class=\"text-muted\">Restablecer password</label>\r\n            <a class=\"btn btn-block btn-outline-danger btn-sm text-danger\" (click)=\"resetPassword()\">Reiniciar</a>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <div id=\"accordion\">\r\n              <div class=\"card bg-dark\">\r\n                <div class=\"card-header\">\r\n                  <a class=\"card-link text-center text-light\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n                    Ver el historial de cambios\r\n                  </a>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    <ul *ngIf=\"user.modification.length > 0\" class=\"list-group\">\r\n                      <li class=\"list-group-item fs07 bg-dark text-light\"\r\n                        *ngFor=\"let mod of pagComments[ indexComments ]\">\r\n                        El\r\n                        <span class=\"text-primary\">{{ mod.date | date:'medium' }} - {{ mod.user.name }}\r\n                          {{ mod.user.last_name }}</span>\r\n                        modificó:\r\n                        <ul *ngFor=\"let up of mod.updated\" class=\"list-unstyled\">\r\n                          <li class=\"ml-2\">\r\n                            {{ up.field }} de <span class=\"font-weight-bolder fs08\">{{ up.from }}</span> por <span\r\n                              class=\"font-weight-bolder fs08\">{{ up.to }}</span>.\r\n                          </li>\r\n                        </ul>\r\n                      </li>\r\n                    </ul>\r\n                    <div *ngIf=\"user.modification.length > 0\">\r\n                      <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" (click)=\"lessComments()\">\r\n                        <i class=\"fas fa-chevron-left\"></i>\r\n                      </a>\r\n                      <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" (click)=\"plusComments()\">\r\n                        <i class=\"fas fa-chevron-right\"></i>\r\n                      </a>\r\n                    </div>\r\n                    <label *ngIf=\"user.modification.length === 0\" class=\"text-center text-light\">Aún no hay\r\n                      modificaciones</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-sm-6 offset-sm-3\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-block btn-outline-light\">Guardar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/employees/employees.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/employees/employees.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"input-group mb-3\">\n      <input #i type=\"text\" class=\"form-control bg-dark text-light border-dark form-control-sm\"\n        placeholder=\"Busca un empleado\" (keyup)=\"findEmployee( i.value )\" (keydown)=\"clearTime()\">\n      <div class=\"input-group-append\">\n        <span class=\"input-group-text bg-dark text-light border-dark input-group-sm\"> <i class=\"fas fa-search\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"mb-1 col-sm-2 offset-sm-1\">\n    <a class=\"btn btn-sm btn-outline-dark btn-block\" [routerLink]=\"['/departments']\">Departamentos</a>\n  </div>\n\n  <div class=\"mb-1 col-sm-2 offset-sm-1\">\n    <a class=\"btn btn-sm btn-outline-light btn-block\" [routerLink]=\"['/employees/new/' + current]\">Nuevo empleado</a>\n  </div>\n</div>\n\n<div *ngIf=\"!loading && users\">\n  <div *ngIf=\"users.length > 0\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 mb-2\" *ngFor=\"let user of users\">\n        <div class=\"text-center text-light border-card rounded p-2\"\n        [ngClass]=\"{'isActive': user.status == 'active', 'isInactive': user.status == 'inactive'}\">\n          <a [routerLink]=\"['/employees/edit/' + user.normalizedToLink + '/' + current ]\">\n            <img [src]=\"user.photo\" [alt]=\"user.name + ' ' + user.last_name\"\n              class=\"img-fluid rounded mb-2 portrait\"></a>\n          <h6>{{ user.name }} {{ user.last_name }} <br><small class=\"text-muted\">{{ user.role?.name }} de\n              {{ user.area?.name }}</small></h6>\n          <label class=\"text-primary fs09\">{{ user.user_name }}</label><br>\n          <a [href]=\"'mailto:' + user.email\" class=\"text-decoration-none text-light fs08\"><i\n              class=\"fas fa-envelope\"></i>\n            {{user.email}}</a><br>\n          <a [href]=\"'tel:' + user.phone\" class=\"text-decoration-none text-light fs08\"><i class=\"fas fa-mobile-alt\"></i>\n            {{user.phone}}</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"pages > 1\">\n      <div class=\"col-12\">\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item\" *ngFor=\"let cell of cells\">\n            <a class=\"page-link\" [ngClass]=\"{'active-pagination': cell === current}\"\n              style=\"background-color: #343a40; color: #f8f9fa;\" [routerLink]=\"['/employees', cell ]\">{{cell}}</a>\n          </li>\n        </ul>\n        <p class=\"text-center text-light\">\n          Mostrando\n          <span class=\"font-weight-bold\">{{ showing }}</span> de\n          <span class=\"font-weight-bold\">{{count}}</span> resultados\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"users.length === 0\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"text-light text-center font-weight-bold border border-muted rounded p-5 mt-5\">\n          <h3>No se encontraron empleados</h3>\n          <button class=\"text-center btn btn-block btn-outline-light btn-lg mt-3\" [routerLink]=\"['/employees/1']\">\n            ¡Aquí seguramente encuentras! También puedes crear uno nuevo\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/employees/new/new.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/employees/new/new.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/employees/' + current]\">\n      <i class=\"fas fa-chevron-left\"></i> Regresar\n    </a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h4 class=\"text-center text-light\">Nuevo empleado</h4>\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"save()\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <h5 class=\"text-center text-muted\">Vista previa de tarjeta</h5>\n      <div class=\"text-center text-light border border-secondary rounded p-2\">\n        <img *ngIf=\"imgRender\" [src]=\"imgRender\" [alt]=\"form.value.name + ' ' + form.value.lastname\"\n          class=\"img-fluid rounded mb-2 portrait\">\n        <h6>{{ form.value.name }} {{ form.value.lastname }}<br>\n          <small *ngIf=\"rolLabel && dpLabel\" class=\"text-muted\">{{ rolLabel }} de {{ dpLabel }}</small>\n        </h6>\n        <label class=\"text-primary fs09\">{{ form.value.username }}</label><br>\n\n        <a *ngIf=\"form.value.email\" [href]=\"'mailto:' + form.value.email\" class=\"text-decoration-none text-light fs08\">\n          <i class=\"fas fa-envelope\"></i>\n          {{ form.value.email }}</a><br>\n        <a *ngIf=\"form.value.phone\" [href]=\"'tel:' + form.value.phone\" class=\"text-decoration-none text-light fs08\">\n          <i class=\"fas fa-mobile-alt\"></i>\n          {{ form.value.phone }}</a>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Nombre</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"name\"\n              placeholder=\"Nombre(s) del empleado\">\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Apellidos</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"lastname\"\n              placeholder=\"Apellidos(s) del empleado\">\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Orientación</label>\n            <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"gender\">\n              <option selected disabled value=\"0\">Selecciona una opción</option>\n              <option value=\"1\">Hombre</option>\n              <option value=\"2\">Mujer</option>\n              <option value=\"3\">Prefiero reservarlo</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Correo electrónico</label>\n            <input type=\"email\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"email\"\n              placeholder=\"Correo electrónico\">\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Usuario</label>\n            <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"username\"\n              placeholder=\"Nombre de usuario\">\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Teléfono de contacto</label>\n            <input type=\"tel\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"phone\"\n              placeholder=\"Teléfono (Incluye LADA)\" pattern=\"[0-9]{10}\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Rol</label>\n            <select #r class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"role\"\n              (change)=\"roleLabel( r ); getBosses()\">\n              <option selected disabled value=\"0\">Selecciona un rol</option>\n              <option *ngFor=\"let rol of roles\" [value]=\"rol._id + rol.hierarchy\">{{ rol.name }}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Departamento</label>\n            <select #d class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"area\"\n              (change)=\"dptoLabel( d ); getBosses()\">\n              <option selected disabled value=\"0\">Selecciona un departamento</option>\n              <option *ngFor=\"let dp of dptos\" [value]=\"dp._id\">{{ dp.name }}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label class=\"text-muted\">Jefe inmediato</label>\n            <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"boss\">\n              <option selected disabled value=\"0\">Selecciona un usuario</option>\n              <option *ngFor=\"let boss of bosses\" [value]=\"boss._id\">{{ boss.name }} {{ boss.last_name }}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <label class=\"text-muted\">Foto</label>\n          <input #i type=\"file\" formControlName=\"file\" class=\"form-control form-control-sm bg-dark text-light\"\n            (change)=\"renderImage( i.files[0] )\">\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-sm-6 offset-sm-3\">\n          <button type=\"submit\" class=\"btn btn-sm btn-block btn-outline-light\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/landing-page/employees/edit/edit.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/edit/edit.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2VtcGxveWVlcy9lZGl0L2VkaXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/employees/edit/edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/edit/edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _services_image_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/image-handler.service */ "./src/app/services/image-handler.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../variables/services.config */ "./src/app/variables/services.config.ts");











var EditComponent = /** @class */ (function () {
    function EditComponent(cRolService, cDptoService, tostador, cIHandler, cLs, cUserService, router, route) {
        this.cRolService = cRolService;
        this.cDptoService = cDptoService;
        this.tostador = tostador;
        this.cIHandler = cIHandler;
        this.cLs = cLs;
        this.cUserService = cUserService;
        this.router = router;
        this.route = route;
        this.pagComments = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indexComments = 0;
        var name = this.route.snapshot.params.name;
        this.current = Number(this.route.snapshot.params.current);
        if (name) {
            this.cUserService.fetch(0, 1, name)
                .subscribe(function (res) {
                _this.user = res.data[0];
                _this.user.photo = _variables_services_config__WEBPACK_IMPORTED_MODULE_10__["link"] + "/users/" + _this.user.photo;
                _this.user.modification = _this.user.modification.reverse();
                var x = 0;
                for (var i = 0; i < _this.user.modification.length; i += 3) {
                    _this.pagComments[x] = _this.user.modification.slice(i, (3 + i));
                    x++;
                }
            }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { _this.fetchRoles(); });
        }
    };
    EditComponent.prototype.fetchRoles = function () {
        var _this = this;
        this.cRolService.fetch()
            .subscribe(function (res) { return _this.roles = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { _this.fetchDptos(); });
    };
    EditComponent.prototype.fetchDptos = function () {
        var _this = this;
        this.cDptoService.fetch()
            .subscribe(function (res) { return _this.dptos = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { _this.createForm(); _this.fetchBosses(); });
    };
    EditComponent.prototype.fetchBosses = function () {
        var _this = this;
        if (this.form.controls.role.value && this.form.controls.area.value) {
            var role = Number(this.form.controls.role.value.slice(-1));
            if (!isNaN(role)) {
                this.cUserService.getBosses(role, this.form.controls.area.value)
                    .subscribe(function (res) { _this.bosses = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
            }
        }
    };
    EditComponent.prototype.createForm = function () {
        var hierarchy = this.user.role._id + this.user.role.hierarchy;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.user_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](hierarchy, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.area._id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.status),
            boss: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.boss._id),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        if (Number(this.cLs.getIndex('hierarchy')) < 3) {
            this.form.controls.email.disable({ onlySelf: true });
            this.form.controls.username.disable({ onlySelf: true });
            this.form.controls.role.disable({ onlySelf: true });
            this.form.controls.area.disable({ onlySelf: true });
            this.form.controls.status.disable({ onlySelf: true });
            this.form.controls.boss.disable({ onlySelf: true });
        }
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        if (this.form.status === 'VALID') {
            var data = new FormData();
            data.append('name', this.form.controls.name.value);
            data.append('lastname', this.form.controls.lastname.value);
            data.append('username', this.form.controls.username.value);
            data.append('email', this.form.controls.email.value);
            data.append('gender', this.form.controls.gender.value);
            data.append('role', this.form.controls.role.value);
            data.append('area', this.form.controls.area.value);
            data.append('boss', this.form.controls.boss.value);
            data.append('phone', this.form.controls.phone.value);
            data.append('active', this.form.controls.status.value);
            data.append('user', this.cLs.getIndex('id'));
            if (this.file) {
                data.append('image', this.file, 'image');
            }
            this.cUserService.update(data, this.user._id)
                .subscribe(function () { return _this.router.navigateByUrl('/employees/' + _this.current); }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        }
    };
    EditComponent.prototype.roleLabel = function (selector) {
        this.rolLabel = selector.options[selector.selectedIndex].text;
        this.fetchBosses();
    };
    EditComponent.prototype.dptoLabel = function (selector) {
        this.dpLabel = selector.options[selector.selectedIndex].text;
        this.fetchBosses();
    };
    EditComponent.prototype.renderImage = function (file) {
        var _this = this;
        this.cIHandler.handler(file)
            .then(function (res) { _this.imgRender = res, _this.file = file; }, function (err) { return console.log(err); });
    };
    EditComponent.prototype.resetPassword = function () {
        var _this = this;
        this.cUserService.resetPassword(this.user._id)
            .subscribe(function () { return _this.tostador.success('Se reinició la contaseña', '¡Correcto!'); }, function (err) { return _this.tostador.error(err.message, '¡Error!'); }).add(function () { });
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
        { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_3__["RolesService"] },
        { type: src_app_services_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _services_image_handler_service__WEBPACK_IMPORTED_MODULE_6__["ImageHandlerService"] },
        { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/employees/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.sass */ "./src/app/components/landing-page/employees/edit/edit.component.sass")]
        })
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/employees/employees-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/employees-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function() { return EmployeesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.component */ "./src/app/components/landing-page/employees/employees.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/employees/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/employees/edit/edit.component.ts");






var routes = [
    { path: ':page', component: _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'new/:current', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'edit/:name/:current', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/employees/employees.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/employees.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/employees/employees.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/employees.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../variables/services.config */ "./src/app/variables/services.config.ts");






var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(cUserService, tostador, route, router) {
        this.cUserService = cUserService;
        this.tostador = tostador;
        this.route = route;
        this.router = router;
        this.cells = [];
        this.isLoading = true;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (val) {
            var page = Number(val.page) || 1;
            _this.current = page;
            page = page <= 0 ? 1 : page;
            _this.fetchUsers(page);
        });
    };
    EmployeesComponent.prototype.fetchUsers = function (page, find) {
        var _this = this;
        if (find === void 0) { find = null; }
        if (!isNaN(page)) {
            this.pages = 0;
            this.cells = [];
            this.cUserService.fetch(page, 8, find)
                .subscribe(function (res) {
                _this.users = res.data;
                _this.users.map(function (u) { return u.photo = _variables_services_config__WEBPACK_IMPORTED_MODULE_5__["link"] + "/users/" + u.photo; });
                _this.count = res.count;
                _this.pages = Math.ceil(res.count / 8);
                if (_this.pages > 1) {
                    for (var i = 1; i <= _this.pages; i++) {
                        _this.cells.push(i);
                    }
                }
                _this.showing = _this.users.length < 8 ? _this.count : (_this.users.length * _this.current);
            }, function (err) { return _this.tostador.error(err.message, '¡Error!'); }).add(function () { _this.isLoading = false; });
        }
    };
    EmployeesComponent.prototype.findEmployee = function (input) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            input = input.trim();
            if (input.length === 0) {
                _this.fetchUsers(_this.current);
            }
            else if (input.length > 1) {
                _this.fetchUsers(1, input);
            }
        }, 500);
    };
    EmployeesComponent.prototype.clearTime = function () {
        clearTimeout(this.timer);
    };
    EmployeesComponent.ctorParameters = function () { return [
        { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.sass */ "./src/app/components/landing-page/employees/employees.component.sass")]
        })
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/employees/employees.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing-page/employees/employees.module.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees-routing.module */ "./src/app/components/landing-page/employees/employees-routing.module.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees.component */ "./src/app/components/landing-page/employees/employees.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new/new.component */ "./src/app/components/landing-page/employees/new/new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/components/landing-page/employees/edit/edit.component.ts");








var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"], _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _employees_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/employees/new/new.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/new/new.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2VtcGxveWVlcy9uZXcvbmV3LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/employees/new/new.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/landing-page/employees/new/new.component.ts ***!
  \************************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _services_image_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/image-handler.service */ "./src/app/services/image-handler.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var NewComponent = /** @class */ (function () {
    function NewComponent(cRolService, cDptoService, tostador, cIHandler, cLs, cUserService, router, route) {
        this.cRolService = cRolService;
        this.cDptoService = cDptoService;
        this.tostador = tostador;
        this.cIHandler = cIHandler;
        this.cLs = cLs;
        this.cUserService = cUserService;
        this.router = router;
        this.route = route;
    }
    NewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current = Number(this.route.snapshot.params.current);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            boss: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.cRolService.fetch()
            .subscribe(function (res) { return _this.roles = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        this.cDptoService.fetch()
            .subscribe(function (res) { return _this.dptos = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        this.cUserService.fetch(0, 1, name)
            .subscribe(function (res) { return _this.user = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
    };
    NewComponent.prototype.save = function () {
        var _this = this;
        if (this.form.status === 'VALID' && this.file) {
            var data = new FormData();
            data.append('name', this.form.value.name);
            data.append('lastname', this.form.value.lastname);
            data.append('username', this.form.value.username);
            data.append('email', this.form.value.email);
            data.append('gender', this.form.value.gender);
            data.append('role', this.form.value.role);
            data.append('area', this.form.value.area);
            data.append('boss', this.form.value.boss);
            data.append('phone', this.form.value.phone);
            data.append('user', this.cLs.getIndex('id'));
            data.append('image', this.file, 'image');
            this.cUserService.save(data)
                .subscribe(function () { return _this.router.navigateByUrl('/employees/' + _this.current); }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        }
    };
    NewComponent.prototype.roleLabel = function (selector) {
        this.rolLabel = selector.options[selector.selectedIndex].text;
    };
    NewComponent.prototype.dptoLabel = function (selector) {
        this.dpLabel = selector.options[selector.selectedIndex].text;
    };
    NewComponent.prototype.renderImage = function (file) {
        var _this = this;
        this.cIHandler.handler(file)
            .then(function (res) { _this.imgRender = res, _this.file = file; }, function (err) { return console.log(err); });
    };
    NewComponent.prototype.getBosses = function () {
        var _this = this;
        if (this.form.value.role && this.form.value.area) {
            var role = Number(this.form.value.role.slice(-1));
            if (!isNaN(role)) {
                this.cUserService.getBosses(role, this.form.value.area)
                    .subscribe(function (res) { return _this.bosses = res.data; }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
            }
        }
    };
    NewComponent.ctorParameters = function () { return [
        { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_3__["RolesService"] },
        { type: src_app_services_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _services_image_handler_service__WEBPACK_IMPORTED_MODULE_6__["ImageHandlerService"] },
        { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/employees/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.sass */ "./src/app/components/landing-page/employees/new/new.component.sass")]
        })
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/services/department.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/department.service.ts ***!
  \************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





var DepartmentService = /** @class */ (function () {
    function DepartmentService(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
    }
    DepartmentService.prototype.save = function (name) {
        return this.cHttp.post(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/departments/", { name: name, user: this.cUser.getIndex('id'), token: this.cUser.getToken() });
    };
    DepartmentService.prototype.fetch = function (value) {
        value = value ? value : '';
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/departments/" + value);
    };
    DepartmentService.prototype.edit = function (id, name) {
        return this.cHttp.put(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/departments/" + id, { name: name, user: this.cUser.getIndex('id') });
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DepartmentService);
    return DepartmentService;
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



/***/ }),

/***/ "./src/app/services/roles.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





var RolesService = /** @class */ (function () {
    function RolesService(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
    }
    RolesService.prototype.fetch = function () {
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/roles");
    };
    RolesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
    ]; };
    RolesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RolesService);
    return RolesService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





var UsersService = /** @class */ (function () {
    function UsersService(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
    }
    UsersService.prototype.save = function (data) {
        return this.cHttp.put(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/users", data);
    };
    UsersService.prototype.update = function (data, id) {
        return this.cHttp.post(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/users/" + id, data);
    };
    UsersService.prototype.fetch = function (skip, limit, user) {
        user = user ? user : '';
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/users/" + skip + "/" + limit + "/" + user);
    };
    UsersService.prototype.resetPassword = function (id) {
        return this.cHttp.post(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/password/" + id, { user: this.cUser.getIndex('id') });
    };
    UsersService.prototype.getBosses = function (role, dpto) {
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/boss/" + role + "/" + dpto);
    };
    UsersService.prototype.catalog = function () {
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/user-catalog");
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-landing-page-landing-page-module~employees-employees-module-es5.js.map