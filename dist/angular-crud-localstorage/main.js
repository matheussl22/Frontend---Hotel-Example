(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seniorColor{\n    background-color: #0d8c68\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        titleService.setTitle('Senior Hotel');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin/checkin.component */ "./src/app/checkin/checkin.component.ts");
/* harmony import */ var _lista_checkin_lista_checkin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lista-checkin/lista-checkin.component */ "./src/app/lista-checkin/lista-checkin.component.ts");
/* harmony import */ var _pessoa_pessoa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pessoa/pessoa.component */ "./src/app/pessoa/pessoa.component.ts");
/* harmony import */ var _lista_pessoas_lista_pessoas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lista-pessoas/lista-pessoas.component */ "./src/app/lista-pessoas/lista-pessoas.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components



// Service





var routes = [
    { path: 'cadastroPessoa', component: _pessoa_pessoa_component__WEBPACK_IMPORTED_MODULE_8__["PessoaComponent"] },
    { path: 'checkin', component: _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_6__["CheckinComponent"] },
    { path: '', redirectTo: '/checkin', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_6__["CheckinComponent"],
                _lista_checkin_lista_checkin_component__WEBPACK_IMPORTED_MODULE_7__["ListaCheckinComponent"],
                _pessoa_pessoa_component__WEBPACK_IMPORTED_MODULE_8__["PessoaComponent"],
                _lista_pessoas_lista_pessoas_component__WEBPACK_IMPORTED_MODULE_9__["ListaPessoasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkin/checkin.component.css":
/*!***********************************************!*\
  !*** ./src/app/checkin/checkin.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seniorColor{\n    background-color: #0d8c68;\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/checkin/checkin.component.html":
/*!************************************************!*\
  !*** ./src/app/checkin/checkin.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-4\">\n  <div class=\"row\">\n    <div class=\"col-md-5 text-center\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p>Check in</p>\n          <form (submit)=\"addCheckin(pessoa, newAdicionarVeiculo, newDataEntrada, newDataSaida)\">\n          <div class=\"form-group\">\n            <input type=\"datetime-local\" placeholder=\"Data/hora de entrada\" #newDataEntrada class=\"form-control\" required>\n            <input type=\"datetime-local\" placeholder=\"Data/hora de saída\" #newDataSaida class=\"form-control\" required>\n            <input type=\"text\" placeholder=\"Nome Pessoa\" #pessoa class=\"form-control\" required list=\"cidades\">\n            <input type=\"checkbox\" checked=\"checked\" #newAdicionarVeiculo /> possui veiculo<br>\n          </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-block seniorColor\">salvar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5 text-center\">\n      <app-lista-checkin></app-lista-checkin>\n    </div>\n  </div>\n</div>\n\n<datalist id=\"cidades\" >\n  <option *ngFor=\"let option of pessoas\" [value]=\"option.nome\" >{{option.nome}}</option>\n</datalist>\n"

/***/ }),

/***/ "./src/app/checkin/checkin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/checkin/checkin.component.ts ***!
  \**********************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_checkin_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/checkin.model */ "./src/app/models/checkin.model.ts");
/* harmony import */ var _services_pessoa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pessoa.service */ "./src/app/services/pessoa.service.ts");
/* harmony import */ var _services_checkin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/checkin.service */ "./src/app/services/checkin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckinComponent = /** @class */ (function () {
    function CheckinComponent(pessoaService, checkinService) {
        this.pessoaService = pessoaService;
        this.checkinService = checkinService;
    }
    CheckinComponent.prototype.ngOnInit = function () {
        this.pessoas = this.pessoaService.getPessoas();
    };
    CheckinComponent.prototype.addCheckin = function (pessoa, newAdicionarVeiculo, newDataEntrada, newDataSaida) {
        this.checkin = new _models_checkin_model__WEBPACK_IMPORTED_MODULE_1__["Checkin"]();
        this.checkin.pessoa = this.pessoaService.getPessoa(pessoa.value);
        this.checkin.adicionalVeiculo = newAdicionarVeiculo.checked;
        this.checkin.dataEntrada = new Date(newDataEntrada.value);
        this.checkin.dataSaida = new Date(newDataSaida.value);
        this.checkin.valorTotal = this.calcValue(this.checkin);
        this.checkinService.addCheckin(this.checkin);
        pessoa.value = '';
        newAdicionarVeiculo.value = '';
        newDataEntrada.value = '';
        newDataSaida.value = '';
        return false;
    };
    CheckinComponent.prototype.calcValue = function (checkin) {
        this.calcCounts(checkin.dataEntrada, checkin.dataSaida);
        var valorSemana = this.calcDiariaWeek();
        var valorFinalSemana = this.calcDiariaEndweek();
        var valorSemanaCarro = this.calcCarWeek(checkin.adicionalVeiculo);
        var valorFinalSemanaCarro = this.calcCarEndweek(checkin.adicionalVeiculo);
        var valorExtra = this.calcExtra(checkin.dataSaida);
        return valorSemana + valorFinalSemana + valorSemanaCarro + valorFinalSemanaCarro + valorExtra;
    };
    CheckinComponent.prototype.calcDiariaEndweek = function () {
        return this.countendweek * 150;
    };
    CheckinComponent.prototype.calcDiariaWeek = function () {
        return this.countweek * 120;
    };
    CheckinComponent.prototype.calcCarEndweek = function (possuiCarro) {
        if (possuiCarro) {
            return this.countendweek * 20;
        }
        return 0;
    };
    CheckinComponent.prototype.calcCarWeek = function (possuiCarro) {
        if (possuiCarro) {
            return this.countweek * 15;
        }
        return 0;
    };
    CheckinComponent.prototype.calcExtra = function (saida) {
        var valorExtraHours = saida.getHours() >= 16;
        var valorExtraMinutes = saida.getMinutes() > 30;
        if (valorExtraHours && valorExtraMinutes) {
            return (this.countendweek + this.countweek) * 3;
        }
        return 0;
    };
    CheckinComponent.prototype.isEndWeek = function (date) {
        return date.getDay() === 6 || date.getDay() === 0;
    };
    CheckinComponent.prototype.addDays = function (currentDate) {
        var date = new Date(currentDate);
        date.setDate(date.getDate() + 1);
        return date;
    };
    CheckinComponent.prototype.calcCounts = function (entrada, saida) {
        this.countweek = 0;
        this.countendweek = 0;
        var dataAtual = entrada;
        while (dataAtual <= saida) {
            if (this.isEndWeek(dataAtual)) {
                this.countendweek++;
            }
            else {
                this.countweek++;
            }
            dataAtual = this.addDays(dataAtual);
        }
    };
    CheckinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__(/*! ./checkin.component.html */ "./src/app/checkin/checkin.component.html"),
            styles: [__webpack_require__(/*! ./checkin.component.css */ "./src/app/checkin/checkin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pessoa_service__WEBPACK_IMPORTED_MODULE_2__["PessoaService"],
            _services_checkin_service__WEBPACK_IMPORTED_MODULE_3__["CheckinService"]])
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "./src/app/lista-checkin/lista-checkin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lista-checkin/lista-checkin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list{\n    margin-top: 10%;\n}\n.seniorColor{\n    margin-top: 2%;\n    background-color: #0d8c68;\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/lista-checkin/lista-checkin.component.html":
/*!************************************************************!*\
  !*** ./src/app/lista-checkin/lista-checkin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <p class=text-center>Filtros</p>\n        <input type=\"text\" placeholder=\"Pessoas ainda presentes\" #aindaPresente class=\"form-control\">\n        <input type=\"text\" placeholder=\"Pessoas que já deixaram hotel\" #deixaramHotel class=\"form-control\">\n        <button (click)=\"filtrarList(aindaPresente, deixaramHotel)\" class=\"btn seniorColor\">\n          Filtrar\n        </button>\n    </div>\n  <div class=\"card-body\">\n    <p class=text-center>Consulta Checkin</p>\n      <table class=\"table table-striped\">\n          <thead>\n            <th *ngFor=\"let col of columns\">\n              {{col}}\n            </th>\n          </thead>\n        <tbody>\n        <tr *ngFor=\"let checkin of checkins | paginate: { itemsPerPage: 5, currentPage: paginaAtual }; let i = index\">\n          <th>{{checkin.pessoa.nome}}</th>\n          <th>{{checkin.pessoa.documento}}</th>\n          <th>{{checkin.valorTotal}}</th>\n          <button (click)=\"deleteCheckin(checkin)\" class=\"btn btn-danger\">\n            Delete\n          </button>\n        </tr>\n        </tbody>\n      </table>\n    <pagination-controls (pageChange)=\"paginaAtual = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/lista-checkin/lista-checkin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lista-checkin/lista-checkin.component.ts ***!
  \**********************************************************/
/*! exports provided: ListaCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCheckinComponent", function() { return ListaCheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_checkin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/checkin.service */ "./src/app/services/checkin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaCheckinComponent = /** @class */ (function () {
    function ListaCheckinComponent(checkinService) {
        this.checkinService = checkinService;
        this.paginaAtual = 0;
    }
    ListaCheckinComponent.prototype.ngOnInit = function () {
        this.columns = ['Nome', 'Documento', 'Valor Gasto (R$)'];
        this.checkins = this.checkinService.getCheckins();
    };
    ListaCheckinComponent.prototype.deleteCheckin = function (checkin) {
        if (confirm('Você deseja excluir este checkin?')) {
            this.checkinService.deleteCheckin(checkin);
        }
    };
    ListaCheckinComponent.prototype.filtrarList = function (aindaPresentes, deixaramHotel) {
        this.checkins = this.checkinService.getCheckins();
        if (aindaPresentes.value !== '') {
            this.checkins = this.checkins
                .filter(function (el) {
                return (el.pessoa.nome.indexOf(aindaPresentes.value) > -1 && new Date(el.dataSaida) > new Date());
            });
        }
        if (deixaramHotel.value !== '') {
            this.checkins = this.checkins
                .filter(function (el) {
                return (el.pessoa.nome.indexOf(deixaramHotel.value) > -1 && new Date(el.dataSaida) <= new Date());
            });
        }
    };
    ListaCheckinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-checkin',
            template: __webpack_require__(/*! ./lista-checkin.component.html */ "./src/app/lista-checkin/lista-checkin.component.html"),
            styles: [__webpack_require__(/*! ./lista-checkin.component.css */ "./src/app/lista-checkin/lista-checkin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checkin_service__WEBPACK_IMPORTED_MODULE_1__["CheckinService"]])
    ], ListaCheckinComponent);
    return ListaCheckinComponent;
}());



/***/ }),

/***/ "./src/app/lista-pessoas/lista-pessoas.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lista-pessoas/lista-pessoas.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lista-pessoas/lista-pessoas.component.html":
/*!************************************************************!*\
  !*** ./src/app/lista-pessoas/lista-pessoas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <p class=text-center>Consulta Pessoa</p>\n    <table class=\"table table-striped list\">\n      <thead>\n      <tr>\n        <th *ngFor=\"let col of columns\">\n          {{col}}\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let pessoa of pessoas | paginate: { itemsPerPage: 5, currentPage: paginaAtual }; let i = index\">\n        <th>{{pessoa.nome}}</th>\n        <th>{{pessoa.documento}}</th>\n        <th>{{pessoa.telefone}}</th>\n        <button (click)=\"deletePessoa(pessoa)\" class=\"btn btn-danger\">\n          Delete\n        </button>\n      </tr>\n      </tbody>\n    </table>\n    <pagination-controls (pageChange)=\"paginaAtual = $event\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"></pagination-controls>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/lista-pessoas/lista-pessoas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lista-pessoas/lista-pessoas.component.ts ***!
  \**********************************************************/
/*! exports provided: ListaPessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPessoasComponent", function() { return ListaPessoasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pessoa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pessoa.service */ "./src/app/services/pessoa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaPessoasComponent = /** @class */ (function () {
    function ListaPessoasComponent(pessoaService) {
        this.pessoaService = pessoaService;
        this.paginaAtual = 0;
    }
    ListaPessoasComponent.prototype.ngOnInit = function () {
        this.columns = ['Nome', 'Documento', 'Telefone'];
        this.pessoas = this.pessoaService.getPessoas();
    };
    ListaPessoasComponent.prototype.deletePessoa = function (pessoa) {
        if (confirm('Você deseja excluir esta pessoa?')) {
            this.pessoaService.deletePessoa(pessoa);
        }
    };
    ListaPessoasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-pessoas',
            template: __webpack_require__(/*! ./lista-pessoas.component.html */ "./src/app/lista-pessoas/lista-pessoas.component.html"),
            styles: [__webpack_require__(/*! ./lista-pessoas.component.css */ "./src/app/lista-pessoas/lista-pessoas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pessoa_service__WEBPACK_IMPORTED_MODULE_1__["PessoaService"]])
    ], ListaPessoasComponent);
    return ListaPessoasComponent;
}());



/***/ }),

/***/ "./src/app/models/checkin.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/checkin.model.ts ***!
  \*****************************************/
/*! exports provided: Checkin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkin", function() { return Checkin; });
var Checkin = /** @class */ (function () {
    function Checkin() {
    }
    return Checkin;
}());



/***/ }),

/***/ "./src/app/models/pessoa.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/pessoa.model.ts ***!
  \****************************************/
/*! exports provided: Pessoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pessoa", function() { return Pessoa; });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seniorColor {\n    background-color: #0d8c68;\n    color: white;\n}\n\n.menu {\n    justify-content: left;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark seniorColor\">\n  <div class=\"container menu\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <img src=\"../../assets/logo-senior.svg\" width=\"80\" alt=\"Senior\">\n    </a>\n    <button class=\"btn btn-light seniorColor\" routerLink=\"/checkin\">\n      Checkin\n    </button>\n    <button class=\"btn btn-light seniorColor\" routerLink=\"/cadastroPessoa\">\n      Cadastro Pessoa\n    </button>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pessoa/pessoa.component.css":
/*!*********************************************!*\
  !*** ./src/app/pessoa/pessoa.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seniorColor{\n    background-color: #0d8c68;\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/pessoa/pessoa.component.html":
/*!**********************************************!*\
  !*** ./src/app/pessoa/pessoa.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-4\">\n  <div class=\"row\">\n    <div class=\"col-md-5 text-center\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p>Incluir Pessoa</p>\n          <form (submit)=\"addPessoa(newNome, newDocumento, newTelefone)\">\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Nome\" #newNome class=\"form-control\" required>\n            <input type=\"text\" placeholder=\"Documento\" #newDocumento class=\"form-control\" required>\n            <input type=\"text\" placeholder=\"Telefone\" #newTelefone class=\"form-control\" >\n          </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-block seniorColor\">salvar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5 text-center\">\n      <app-lista-pessoas></app-lista-pessoas>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pessoa/pessoa.component.ts":
/*!********************************************!*\
  !*** ./src/app/pessoa/pessoa.component.ts ***!
  \********************************************/
/*! exports provided: PessoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaComponent", function() { return PessoaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pessoa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pessoa.service */ "./src/app/services/pessoa.service.ts");
/* harmony import */ var _models_pessoa_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pessoa.model */ "./src/app/models/pessoa.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PessoaComponent = /** @class */ (function () {
    function PessoaComponent(pessoaService) {
        this.pessoaService = pessoaService;
    }
    PessoaComponent.prototype.ngOnInit = function () { };
    PessoaComponent.prototype.addPessoa = function (newNome, newDocumento, newTelefone) {
        this.pessoa = new _models_pessoa_model__WEBPACK_IMPORTED_MODULE_2__["Pessoa"]();
        this.pessoa.nome = newNome.value;
        this.pessoa.documento = newDocumento.value;
        this.pessoa.telefone = newTelefone.value;
        this.pessoaService.addPessoa(this.pessoa);
        newNome.value = '';
        newDocumento.value = '';
        newTelefone.value = '';
        return false;
    };
    PessoaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pessoa',
            template: __webpack_require__(/*! ./pessoa.component.html */ "./src/app/pessoa/pessoa.component.html"),
            styles: [__webpack_require__(/*! ./pessoa.component.css */ "./src/app/pessoa/pessoa.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pessoa_service__WEBPACK_IMPORTED_MODULE_1__["PessoaService"]])
    ], PessoaComponent);
    return PessoaComponent;
}());



/***/ }),

/***/ "./src/app/services/checkin.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/checkin.service.ts ***!
  \*********************************************/
/*! exports provided: CheckinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinService", function() { return CheckinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckinService = /** @class */ (function () {
    function CheckinService() {
        this.checkins = [];
    }
    CheckinService.prototype.getCheckins = function () {
        if (localStorage.getItem('checkins') === null) {
            this.checkins = [];
        }
        else {
            this.checkins = JSON.parse(localStorage.getItem('checkins'));
        }
        return this.checkins;
    };
    CheckinService.prototype.addCheckin = function (checkin) {
        if (checkin.pessoa != null) {
            this.checkins.push(checkin);
            var checkins = [];
            if (localStorage.getItem('checkins') === null) {
                checkins = [];
                checkins.push(checkin);
                localStorage.setItem('checkins', JSON.stringify(checkins));
            }
            else {
                checkins = JSON.parse(localStorage.getItem('checkins'));
                checkins.push(checkin);
                localStorage.setItem('checkins', JSON.stringify(checkins));
            }
        }
    };
    CheckinService.prototype.deleteCheckin = function (checkin) {
        for (var i = 0; i < this.checkins.length; i++) {
            if (checkin === this.checkins[i]) {
                this.checkins.splice(i, 1);
                localStorage.setItem('checkins', JSON.stringify(this.checkins));
            }
        }
    };
    CheckinService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CheckinService);
    return CheckinService;
}());



/***/ }),

/***/ "./src/app/services/pessoa.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pessoa.service.ts ***!
  \********************************************/
/*! exports provided: PessoaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaService", function() { return PessoaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PessoaService = /** @class */ (function () {
    function PessoaService() {
        this.pessoas = [];
        this.pessoasFilter = [];
    }
    PessoaService.prototype.getPessoa = function (pessoa) {
        this.getPessoas();
        this.pessoasFilter = this.pessoas.filter(function (el) {
            return el.nome.indexOf(pessoa) > -1;
        });
        if (this.pessoasFilter.length === 0) {
            alert('Pessoa não encontrada');
        }
        return this.pessoasFilter[0];
    };
    PessoaService.prototype.getPessoas = function () {
        if (localStorage.getItem('pessoas') === null) {
            this.pessoas = [];
        }
        else {
            this.pessoas = JSON.parse(localStorage.getItem('pessoas'));
        }
        return this.pessoas;
    };
    PessoaService.prototype.addPessoa = function (pessoa) {
        this.pessoas.push(pessoa);
        var pessoas = [];
        if (localStorage.getItem('pessoas') === null) {
            pessoas = [];
            pessoas.push(pessoa);
            localStorage.setItem('pessoas', JSON.stringify(pessoas));
        }
        else {
            pessoas = JSON.parse(localStorage.getItem('pessoas'));
            pessoas.push(pessoa);
            localStorage.setItem('pessoas', JSON.stringify(pessoas));
        }
    };
    PessoaService.prototype.deletePessoa = function (pessoa) {
        for (var i = 0; i < this.pessoas.length; i++) {
            if (pessoa === this.pessoas[i]) {
                this.pessoas.splice(i, 1);
                localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
            }
        }
    };
    PessoaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PessoaService);
    return PessoaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/matheus/Frontend---Hotel-Example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map