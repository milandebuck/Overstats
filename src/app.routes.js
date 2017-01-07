"use strict";
var home_component_1 = require("./components/Home/home.component");
var profile_component_1 = require("./components/Profile/profile.component");
var compare_component_1 = require("./components/Compare/compare.component");
var api_component_1 = require("./components/Api/api.component");
var portfolio_component_1 = require("./components/Portfolio/portfolio.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'profile/:username', component: profile_component_1.ProfileComponent },
    { path: 'compare', component: compare_component_1.CompareComponent },
    { path: 'compare/:username', component: compare_component_1.CompareComponent },
    { path: 'api', component: api_component_1.ApiComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent }
];
//# sourceMappingURL=app.routes.js.map