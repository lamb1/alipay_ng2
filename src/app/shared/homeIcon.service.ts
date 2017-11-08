import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const HOME_URL = `./app/homeIcon.json`;

@Injectable()
export class HomeIconService {
    constructor(private http: Http) {
    }

    request(url: string, opts: any) {
        return this.http.request(url, new RequestOptions(opts))
            .map(res => {
                if(res.ok){
                    let _res = res.json();
                    return _res;
                }
            })
    }

    get(url: string, opts?: Object) {
        return this.request(url, (<any>Object).assign({
            method: 'get'
        }, opts));
    }

    getHomeData() {
        return this.get(HOME_URL);
    }

}