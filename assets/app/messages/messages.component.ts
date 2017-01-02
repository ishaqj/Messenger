/**
 * Created by Ishaq17 on 2016-12-22.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
        <div class="row">
        <app-message-input></app-message-input>
        </div>
        <hr>
        <div clas="row">
        <app-message-list></app-message-list>
</div>
`
})
export class MessagessComponent {

}