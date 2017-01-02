/**
 * Created by Ishaq17 on 2017-01-01.
 */
import {NgModule} from "@angular/core";
import {MessageComponent} from "./message.component";
import {MessageListComponent} from "./message.list.component";
import {MessageInputComponent} from "./message.input.component";
import {MessagessComponent} from "./messages.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message.service";

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagessComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MessageService]

})

export class MessageModule {

}