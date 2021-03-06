"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var app_routes_1 = require('./app.routes');
var components_1 = require("./components");
var services_1 = require("./services");
//services
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [components_1.AppComponent],
            declarations: [
                components_1.AppComponent,
                components_1.LadderComponent,
                components_1.LeaderboardComponent,
                components_1.SearchBarComponent,
                components_1.RankingComponent,
                components_1.LoadingIndicator,
                components_1.ProfileComponent,
                components_1.CompareComponent,
                components_1.ParamInputComponent,
                components_1.ApiComponent,
                components_1.ApiexampleComponent,
                components_1.PortfolioComponent,
                components_1.LandingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                http_1.JsonpModule,
                ng2_charts_1.ChartsModule,
                angular2_infinite_scroll_1.InfiniteScrollModule,
            ],
            providers: [
                services_1.CookieService,
                services_1.ExtractService,
                services_1.PlayerService,
                services_1.ApiService,
                services_1.InputControl
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map