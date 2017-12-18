import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LogStreamChannelComponent} from './log-stream-channel.component';
import {SocketIoConfig} from "ng-socket-io/socketIoConfig";
import {SocketIoModule} from "ng-socket-io/socket-io.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule, ToastOptions} from "ng2-toastr/ng2-toastr";
import {CustomOption} from "./CustomOption";
import {RoutingModule} from "./routing-module";

const config: SocketIoConfig = {url: 'http://localhost:8080', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    LogStreamChannelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {provide: ToastOptions, useClass: CustomOption},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
