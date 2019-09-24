(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["departments-departments-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





let DepartmentService = class DepartmentService {
    constructor(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
    }
    save(name) {
        return this.cHttp.post(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/departments/`, { name, user: this.cUser.getIndex('id'), token: this.cUser.getToken() });
    }
    fetch(value) {
        value = value ? value : '';
        return this.cHttp.get(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/departments/${value}`);
    }
    edit(id, name) {
        return this.cHttp.put(`${_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"]}/departments/${id}`, { name, user: this.cUser.getIndex('id') });
    }
};
DepartmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DepartmentService);



/***/ })

}]);
//# sourceMappingURL=departments-departments-module-es2015.js.map