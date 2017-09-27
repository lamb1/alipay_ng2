import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
 selector: 'ali-footer',
 templateUrl: 'app/shared/footer.component.html',
    styleUrls:['app/shared/footer.component.css']
})

export class FooterComponent implements OnInit {
    private isHome: boolean = true;
    private isShop: boolean = false;
    private isFriends: boolean = false;
    private isMine: boolean = false;

    constructor(private _location: Location) {
    }

    ngOnInit() {
        this.isHome = this._location.path() == '' || this._location.path().indexOf('/home') > -1;
        this.isShop = this._location.path() == '' || this._location.path().indexOf('/shop') > -1;
        this.isFriends = this._location.path() == '' || this._location.path().indexOf('/friends') > -1;
        this.isMine = this._location.path() == '' || this._location.path().indexOf('/mine') > -1;
    }
}