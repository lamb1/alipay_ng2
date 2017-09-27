import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
// import {APP_BASE_HREF} from "@angular/common"; //base 路径：第二种  line:40

import {HttpModule} from "@angular/http";

import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";

import {HomeComponent} from './home';
import {ShopComponent} from './shop';
import {FriendsComponent} from './friends';
import {MineComponent} from './mine';
// import {animationsComponent} from './animation';

// import {CanActivateGuard} from '../services/can-activate-guard';


import {
    FooterComponent,
    // HeaderComponent, PhonePipe, BtnClickDirective
} from "./shared";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ShopComponent,
        FriendsComponent,
        MineComponent,
        FooterComponent,
        // PhonePipe,
        // BtnClickDirective,animationsComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
    // providers: [ContactService, UtilService, CanActivateGuard,
        // {provide: APP_BASE_HREF, useValue:'/'}
    // ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
