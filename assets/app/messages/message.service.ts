/**
 * Created by Ishaq17 on 2016-12-21.
 */
import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";
import {ErrorService} from "../errors/error.service";
import {Constants} from "../app.constants";

@Injectable()
export class MessageService {
    private messages:Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http:Http, private errorService:ErrorService, private _constants: Constants) {
    }

    addMessage(message:Message) {

        const body = JSON.stringify(message);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : "";
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this._constants.apiUrl + '/' + this._constants.message + token, body, {headers: headers})
            .map((response:Response) => {
                const result = response.json();
                message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);

                this.messages.push(message);
                return this.messages;
            })
            .catch((error:Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getMessages() {
        return this.http.get(this._constants.apiUrl + '/' + this._constants.message)
            .map((response:Response) => {
                const messages = response.json().obj;
                let transformedMessages:Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id
                    ));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error:Response) => Observable.throw(error.json()));

    }

    editMessage(message:Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message:Message) {
        const body = JSON.stringify(message);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : "";
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this._constants.apiUrl + '/' + this._constants.message + '/' + message.messageId + token, body, {headers: headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const body = JSON.stringify(message);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : "";
        return this.http.delete(this._constants.apiUrl + '/' + this._constants.message + '/' + message.messageId + token)
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }
}