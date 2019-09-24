(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/brands.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/brands.service.ts ***!
  \********************************************/
/*! exports provided: BrandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsService", function() { return BrandsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





var BrandsService = /** @class */ (function () {
    function BrandsService(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
    }
    BrandsService.prototype.save = function (name) {
        return this.cHttp.post(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/glass-brands/", { name: name, user: this.cUser.getIndex('id'), token: this.cUser.getToken() });
    };
    BrandsService.prototype.fetch = function (skip, limit, filter, value) {
        value = value ? value : '';
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/glass-brands/" + skip + "/" + limit + "/" + filter + "/" + value);
    };
    BrandsService.prototype.edit = function (id, name) {
        return this.cHttp.put(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/glass-brands/" + id, { name: name, user: this.cUser.getIndex('id') });
    };
    BrandsService.prototype.swapStatus = function (id, status) {
        return this.cHttp.delete(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/glass-brands/" + id + "/" + status);
    };
    BrandsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
    ]; };
    BrandsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BrandsService);
    return BrandsService;
}());



/***/ }),

/***/ "./src/app/services/companies.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/companies.service.ts ***!
  \***********************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");




var CompaniesService = /** @class */ (function () {
    function CompaniesService(cHttp) {
        this.cHttp = cHttp;
        this.route = 'company';
    }
    CompaniesService.prototype.save = function (data) {
        return this.cHttp.post(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route, data);
    };
    CompaniesService.prototype.edit = function (id, data) {
        return this.cHttp.put(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route + "/" + id, data);
    };
    CompaniesService.prototype.fetch = function (skip, limit, value) {
        value = value ? value : '';
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route + "/" + skip + "/" + limit + "/" + value);
    };
    CompaniesService.prototype.catalog = function () {
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/company-catalog");
    };
    CompaniesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CompaniesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CompaniesService);
    return CompaniesService;
}());



/***/ }),

/***/ "./src/app/services/models.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/models.service.ts ***!
  \********************************************/
/*! exports provided: ModelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsService", function() { return ModelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variables_services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/services.config */ "./src/app/variables/services.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");





var ModelsService = /** @class */ (function () {
    function ModelsService(cHttp, cUser) {
        this.cHttp = cHttp;
        this.cUser = cUser;
        this.route = 'glass-models';
    }
    ModelsService.prototype.save = function (name, brand) {
        return this.cHttp.post(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route + "/", { name: name, brand: brand, user: this.cUser.getIndex('id'), token: this.cUser.getToken() });
    };
    ModelsService.prototype.fetch = function (skip, limit, value) {
        value = value ? value : '';
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route + "/" + skip + "/" + limit + "/" + value);
    };
    ModelsService.prototype.edit = function (id, name, brand) {
        return this.cHttp.put(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route + "/" + id, { name: name, brand: brand, user: this.cUser.getIndex('id') });
    };
    ModelsService.prototype.swapStatus = function (id, status) {
        return this.cHttp.delete(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/" + this.route + "/" + id + "/" + status);
    };
    ModelsService.prototype.findByBrand = function (id) {
        return this.cHttp.get(_variables_services_config__WEBPACK_IMPORTED_MODULE_3__["link"] + "/glass-brand-model/" + id);
    };
    ModelsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
    ]; };
    ModelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ModelsService);
    return ModelsService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map