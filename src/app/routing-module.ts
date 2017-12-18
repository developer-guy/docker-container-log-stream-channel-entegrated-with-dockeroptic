import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LogStreamChannelComponent} from "./log-stream-channel.component";

const routes: Routes = [
  {path: "", redirectTo: '/log-stream', pathMatch: 'full'},
  {path: "log-stream", component: LogStreamChannelComponent}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}