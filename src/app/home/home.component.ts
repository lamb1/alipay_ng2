import {Component, OnInit} from '@angular/core';
import {HomeIconService} from '../shared/homeIcon.service';
import {Router} from '@angular/router';

@Component({
    selector: 'ali-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})

export class HomeComponent implements OnInit {

    homeData: {};

    constructor(private _homeIconService: HomeIconService,
                private _router: Router) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this._homeIconService.getHomeData().subscribe(data => {
            var ajaxData = data;
            for (let i = 0; i < ajaxData.length; i++) {
                for (let j = 0; j < ajaxData[i].length; j++) {
                    ajaxData[i][j].img = "url('../../images/" + ajaxData[i][j].img + "') no-repeat center";
                }
            }
            this.homeData = ajaxData;
        })
    }

    onClickThis(name: string) {
        if (name == '更多') {
            this._router.navigate(['allApp']);
        }
    }
}