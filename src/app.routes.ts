

import {LadderComponent} from "./components/Ladder/ladder.component";
import {ProfileComponent} from "./components/Profile/profile.component";
import {CompareComponent} from "./components/Compare/compare.component";
import {ApiComponent} from "./components/Api/api.component";
import {PortfolioComponent} from "./components/Portfolio/portfolio.component";
import {LandingComponent} from "./components/Landing/landing.component";
export const routes = [
    { path: '', component:LandingComponent},
    { path: 'leaderbords', component: LadderComponent },
    { path: 'profile/:username', component: ProfileComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'compare/:username', component: CompareComponent },
    { path: 'api', component: ApiComponent},
    { path: 'portfolio', component: PortfolioComponent}
];