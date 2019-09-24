(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["me-me-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/me/me.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/landing-page/me/me.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <a class=\"w-75 btn btn-block btn-outline-light btn-sm\" [routerLink]=\"['/']\">\r\n      <i class=\"fas fa-chevron-left\"></i> Regresar\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"user && form\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h4 class=\"text-center text-light\">Mi información</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <form [formGroup]=\"form\" (submit)=\"save()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <h5 class=\"text-center text-muted\">Vista previa de tarjeta</h5>\r\n        <div class=\"text-center text-light border-card rounded p-2\"\r\n          [ngClass]=\"{'isActive': form.value.status == 'active', 'isInactive': form.value.status == 'inactive'}\">\r\n          <img [src]=\"imgRender || 'http://18.221.70.54:9000//users/' + user.photo\"\r\n            [alt]=\"form.value.name + ' ' + form.value.lastname\" class=\"img-fluid rounded mb-2 portrait\">\r\n          <h6>{{ form.value.name }} {{ form.value.lastname }}<br>\r\n            <small class=\"text-muted\">{{ user.role.name }} de {{ user.area.name }}</small>\r\n          </h6>\r\n          <label class=\"text-primary fs09\">{{ form.value.username || user.user_name }}</label><br>\r\n\r\n          <a [href]=\"'mailto:' + user.email\" class=\"text-decoration-none text-light fs08\">\r\n            <i class=\"fas fa-envelope\"></i>\r\n            {{ user.email }}</a><br>\r\n          <a [href]=\"'tel:' + user.phone\" class=\"text-decoration-none text-light fs08\">\r\n            <i class=\"fas fa-mobile-alt\"></i>\r\n            {{ user.phone }}</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Nombre</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"name\"\r\n                placeholder=\"Nombre(s) del empleado\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Apellidos</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"lastname\"\r\n                placeholder=\"Apellidos(s) del empleado\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Orientación</label>\r\n              <select class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"gender\">\r\n                <option [ngValue]=\"1\">Hombre</option>\r\n                <option [ngValue]=\"2\">Mujer</option>\r\n                <option [ngValue]=\"3\">Prefiero reservarlo</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Correo electrónico</label>\r\n              <input type=\"email\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"email\"\r\n                placeholder=\"Correo electrónico\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Usuario</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"username\"\r\n                placeholder=\"Nombre de usuario\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Teléfono de contacto</label>\r\n              <input type=\"tel\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"phone\"\r\n                placeholder=\"Teléfono (Incluye LADA)\" pattern=\"[0-9]{10}\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Rol</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"role\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Departamento</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"area\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"text-muted\">Jefe inmediato</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"boss\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-sm-6\">\r\n            <label class=\"text-muted\">Foto</label>\r\n            <input #i type=\"file\" formControlName=\"file\" class=\"form-control form-control-sm bg-dark text-light\"\r\n              (change)=\"renderImage( i.files[0] )\">\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <label class=\"text-muted\">Cambiar password</label>\r\n            <input type=\"password\" class=\"form-control form-control-sm bg-dark text-light\" formControlName=\"password\"\r\n              placeholder=\"Nueva contraseña\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <div id=\"accordion\">\r\n              <div class=\"card bg-dark\">\r\n                <div class=\"card-header\">\r\n                  <a class=\"card-link text-center text-light\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n                    Ver el historial de cambios\r\n                  </a>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\r\n                  <div class=\"card-body\">\r\n                    <ul *ngIf=\"user.modification.length > 0\" class=\"list-group\">\r\n                      <li class=\"list-group-item fs07 bg-dark text-light\"\r\n                        *ngFor=\"let mod of pagComments[ indexComments ]\">\r\n                        El\r\n                        <span class=\"text-primary\">{{ mod.date | date:'medium' }} - {{ mod.user.name }}\r\n                          {{ mod.user.last_name }}</span>\r\n                        modificó:\r\n                        <ul *ngFor=\"let up of mod.updated\" class=\"list-unstyled\">\r\n                          <li class=\"ml-2\">\r\n                            {{ up.field }} de <span class=\"font-weight-bolder fs08\">{{ up.from }}</span> por <span\r\n                              class=\"font-weight-bolder fs08\">{{ up.to }}</span>.\r\n                          </li>\r\n                        </ul>\r\n                      </li>\r\n                    </ul>\r\n                    <div *ngIf=\"user.modification.length > 0\">\r\n                      <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" \r\n                      (click)=\"lessComments()\">\r\n                        <i class=\"fas fa-chevron-left\"></i>\r\n                      </a>\r\n                      <a class=\"pointer btn btn-sm btn-outline-light text-light my-2 mx-1\" \r\n                      (click)=\"plusComments()\">\r\n                        <i class=\"fas fa-chevron-right\"></i>\r\n                      </a>\r\n                    </div>\r\n                    <label *ngIf=\"user.modification.length === 0\" class=\"text-center text-light\">Aún no hay\r\n                      modificaciones</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-sm-6 offset-sm-3\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-block btn-outline-light\">Guardar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing-page/me/me-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing-page/me/me-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeRoutingModule", function() { return MeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./me.component */ "./src/app/components/landing-page/me/me.component.ts");




var routes = [
    { path: '', component: _me_component__WEBPACK_IMPORTED_MODULE_3__["MeComponent"] }
];
var MeRoutingModule = /** @class */ (function () {
    function MeRoutingModule() {
    }
    MeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MeRoutingModule);
    return MeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/landing-page/me/me.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/components/landing-page/me/me.component.sass ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL21lL21lLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/me/me.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/landing-page/me/me.component.ts ***!
  \************************************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_image_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/image-handler.service */ "./src/app/services/image-handler.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var MeComponent = /** @class */ (function () {
    function MeComponent(tostador, cIHandler, cLs, cUserService, router) {
        this.tostador = tostador;
        this.cIHandler = cIHandler;
        this.cLs = cLs;
        this.cUserService = cUserService;
        this.router = router;
        this.pagComments = [];
    }
    MeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.cLs.getIndex('normalizedToLink');
        this.indexComments = 0;
        if (name) {
            this.cUserService.fetch(0, 1, name)
                .subscribe(function (res) {
                _this.user = res.data[0];
                _this.user.modification = _this.user.modification.reverse();
                var x = 0;
                for (var i = 0; i < _this.user.modification.length; i += 3) {
                    _this.pagComments[x] = _this.user.modification.slice(i, (3 + i));
                    x++;
                }
            }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { return _this.createForm(); });
        }
    };
    MeComponent.prototype.createForm = function () {
        var boss = this.user.boss.name + ' ' + this.user.boss.last_name;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.email),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.user_name),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.role.name),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.area.name),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.status),
            boss: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](boss),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.form.controls.email.disable({ onlySelf: true });
        this.form.controls.username.disable({ onlySelf: true });
        this.form.controls.role.disable({ onlySelf: true });
        this.form.controls.area.disable({ onlySelf: true });
        this.form.controls.status.disable({ onlySelf: true });
        this.form.controls.boss.disable({ onlySelf: true });
    };
    MeComponent.prototype.save = function () {
        var _this = this;
        if (this.form.status === 'VALID') {
            var data = new FormData();
            data.append('name', this.form.controls.name.value);
            data.append('lastname', this.form.controls.lastname.value);
            data.append('gender', this.form.controls.gender.value);
            data.append('phone', this.form.controls.phone.value);
            data.append('active', this.form.controls.status.value);
            data.append('password', this.form.controls.password.value || '');
            data.append('user', this.cLs.getIndex('id'));
            if (this.file) {
                data.append('image', this.file, 'image');
            }
            this.cUserService.update(data, this.user._id)
                .subscribe(function (res) {
                var employee = {
                    name: res.data.name,
                    last_name: res.data.last_name,
                    token: res.token,
                    id: res.data._id,
                    photo: res.data.photo,
                    role: res.data.role.name,
                    area: res.data.area.name,
                    normalizedToLink: res.data.normalizedToLink,
                    hierarchy: res.data.role.hierarchy
                };
                _this.cLs.setData(employee);
                _this.router.navigateByUrl('/');
            }, function (err) { return _this.tostador.error(err.error, '¡Error!'); }).add(function () { });
        }
    };
    MeComponent.prototype.renderImage = function (file) {
        var _this = this;
        this.cIHandler.handler(file)
            .then(function (res) { _this.imgRender = res, _this.file = file; }, function (err) { return console.log(err); });
    };
    MeComponent.prototype.plusComments = function () {
        this.indexComments = (this.indexComments + 1) > (this.pagComments.length - 1)
            ? (this.pagComments.length - 1)
            : this.indexComments + 1;
    };
    MeComponent.prototype.lessComments = function () {
        this.indexComments = (this.indexComments - 1) < 0 ? 0 : this.indexComments - 1;
    };
    MeComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _services_image_handler_service__WEBPACK_IMPORTED_MODULE_4__["ImageHandlerService"] },
        { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    MeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-me',
            template: __webpack_require__(/*! raw-loader!./me.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/landing-page/me/me.component.html"),
            styles: [__webpack_require__(/*! ./me.component.sass */ "./src/app/components/landing-page/me/me.component.sass")]
        })
    ], MeComponent);
    return MeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/me/me.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing-page/me/me.module.ts ***!
  \*********************************************************/
/*! exports provided: MeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeModule", function() { return MeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _me_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./me-routing.module */ "./src/app/components/landing-page/me/me-routing.module.ts");
/* harmony import */ var _me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./me.component */ "./src/app/components/landing-page/me/me.component.ts");






var MeModule = /** @class */ (function () {
    function MeModule() {
    }
    MeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_me_component__WEBPACK_IMPORTED_MODULE_5__["MeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _me_routing_module__WEBPACK_IMPORTED_MODULE_4__["MeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], MeModule);
    return MeModule;
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
//# sourceMappingURL=me-me-module-es5.js.map