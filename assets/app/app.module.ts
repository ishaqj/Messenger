import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {MessageModule} from "./messages/message.module";
import {Constants} from "./app.constants";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent

    ],
    providers: [AuthService, ErrorService, Constants],
    imports: [BrowserModule, routing, ReactiveFormsModule, HttpModule, MessageModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}