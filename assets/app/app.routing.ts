/**
 * Created by Ishaq17 on 2016-12-22.
 */
import {Routes, RouterModule} from "@angular/router";
import {MessagessComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {authRouting} from "./auth/auth.routing";

const APP_ROUTES:Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagessComponent},
    {path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);