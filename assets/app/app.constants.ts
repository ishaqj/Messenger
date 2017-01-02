/**
 * Created by Ishaq17 on 2017-01-02.
 */
export class Constants {
    private _apiUrl: string = 'https://ishaqj.herokuapp.com';
    private _message: string = 'message';
    private _user: string = 'user';

    get apiUrl():string {
        return this._apiUrl;
    }

    get message():string {
        return this._message;
    }

    get user():string {
        return this._user;
    }
}