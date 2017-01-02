import {User} from "./user.model";
import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";
import {ErrorService} from "../errors/error.service";
import {Constants} from "../app.constants";

@Injectable()
export class AuthService {
    constructor(private http:Http, private errorService:ErrorService, private _constants: Constants) {
    }

    signUp(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this._constants.apiUrl + '/' + this._constants.user, body, {headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signIn(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this._constants.apiUrl + '/' + this._constants.user + '/' + 'signin', body, {headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}