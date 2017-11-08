import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'shop',
 templateUrl: 'app/shop/shop.component.html'
})

export class ShopComponent implements OnInit {
    curContact: any = {
        sex: 'female',
        interestMul:['eating','reading'],
        lock:true
    };
    val: string = 'eating';
    interests: any = [
        {value: 'reading', display: '阅读'},
        {value: 'eating', display: '吃'},
        {value: 'aaa', display: '阅读aaa'},
        {value: 'vvv', display: '吃vvv'},
        {value: 'aaa1', display: '阅读aaa'},
        {value: 'vvv2', display: '吃vvv'},
    ];
    contactName: any = {
        value: 12000
    };
    telNum: any = {
        value: 13
    };
 constructor() { }

 ngOnInit() { }
}