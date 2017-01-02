/**
 * Created by Ishaq17 on 2016-12-22.
 */
import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './logout.component.html'
})

export class LogoutComponent {
    constructor(private authService:AuthService, private router:Router) {
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }


}