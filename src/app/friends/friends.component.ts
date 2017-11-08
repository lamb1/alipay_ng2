import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'friends',
    templateUrl: 'app/friends/friends.component.html'
})

export class FriendsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}

class TestClass {
    @log
    testMothod(arg: string) {
        return "logMsg: " + arg;
    }
}

function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let origin = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("args: " + JSON.stringify(args));
        let result = origin.apply(this, args);
        console.log("The result-" + result);
        return result;
    };
    return descriptor;
}

new TestClass().testMothod("test method decorator");
