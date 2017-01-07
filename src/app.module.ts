import { NgModule } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { routes } from './app.routes';
import {
    AppComponent,
    HomeComponent,
    LeaderboardComponent,
    SearchBarComponent,
    RankingComponent,
    LoadingIndicator,
    ProfileComponent,
    CompareComponent,
    ParamInputComponent,
    ApiComponent,
    ApiexampleComponent,
    PortfolioComponent
} from "./components";
import {
    CookieService,
    ExtractService,
    PlayerService,
    ApiService,
    InputControl
} from "./services";


//services



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        LeaderboardComponent,
        SearchBarComponent,
        RankingComponent,
        LoadingIndicator,
        ProfileComponent,
        CompareComponent,
        ParamInputComponent,
        ApiComponent,
        ApiexampleComponent,
        PortfolioComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        JsonpModule,
        ChartsModule,
        InfiniteScrollModule,
    ],
    providers: [
        CookieService,
        ExtractService,
        PlayerService,
        ApiService,
        InputControl
    ]
})
export class AppModule {}