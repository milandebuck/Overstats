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
var services_1 = require('./../../services');
var router_1 = require("@angular/router");
var SearchBarComponent = (function () {
    function SearchBarComponent(playerService, myElement, router) {
        this.playerService = playerService;
        this.myElement = myElement;
        this.router = router;
        this.query = '';
        this.loading = false;
        this.usersearch = new core_1.EventEmitter();
        this.elementRef = myElement;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.search = function () {
        var _this = this;
        if (this.query !== '') {
            this.loading = true;
            this.playerService.search(this.query).subscribe(function (res) {
                if (res) {
                    _this.players = res;
                    _this.loading = false;
                }
            });
        }
        if (this.query === '') {
        }
    };
    SearchBarComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.players = null;
            this.query = '';
        }
    };
    SearchBarComponent.prototype.profile = function (username) {
        if (this.redirect)
            this.router.navigate(['/profile', username]);
        else {
            this.players = null;
            this.usersearch.emit(username);
        }
        ;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SearchBarComponent.prototype, "redirect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBarComponent.prototype, "usersearch", void 0);
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'searchbar',
            host: {
                '(document:click)': 'handleClick($event)',
            },
            template: require('./content/searchbar.component.html'),
            styles: [require('./content/searchbar.component.css')]
        }), 
        __metadata('design:paramtypes', [services_1.PlayerService, core_1.ElementRef, router_1.Router])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=searchbar.component.js.map