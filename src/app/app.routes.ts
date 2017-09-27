import {Routes} from "@angular/router";

import {HomeComponent} from './home';
import {ShopComponent} from './shop';
import {FriendsComponent} from './friends';
import {MineComponent} from './mine';
// import {animationsComponent} from './animation'

// import {CanActivateGuard} from '../services/can-activate-guard';


export const rootRouterConfig: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: 'full',

    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "shop",
        component: ShopComponent,
    },
    {
        path: "friends",
        component: FriendsComponent,
    },
    {
        path: "mine",
        component: MineComponent,
    },
];
