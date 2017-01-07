

import {HomeComponent} from "./components/Home/home.component";
import {ProfileComponent} from "./components/Profile/profile.component";
import {CompareComponent} from "./components/Compare/compare.component";
import {ApiComponent} from "./components/Api/api.component";
import {PortfolioComponent} from "./components/Portfolio/portfolio.component";
export const routes = [
    { path: '', component: HomeComponent },
    { path: 'profile/:username', component: ProfileComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'compare/:username', component: CompareComponent },
    { path: 'api', component: ApiComponent},
    { path: 'portfolio', component: PortfolioComponent}
];