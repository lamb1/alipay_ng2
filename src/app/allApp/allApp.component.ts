import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'allApp.component',
    templateUrl: 'app/allApp/allApp.component.html',
    styleUrls: ['app/allApp/allApp.component.css']
})

export class AllAppComponent implements OnInit {
    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    home(){
        this._router.navigate(['home']);
    }
}