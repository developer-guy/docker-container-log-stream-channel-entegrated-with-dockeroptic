import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Toast, ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Socket} from 'ng-socket-io';


@Component({
  selector: 'app-log-stream-channel',
  templateUrl: './log-stream-channel.component.html',
})
export class LogStreamChannelComponent implements OnInit {

  constructor(private socket: Socket,
              public toast: ToastsManager,
              vcr: ViewContainerRef) {
    this.toast.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log("Emitting logs from log_stream channel");
    let toastService = this.toast;
    this.socket.emit("container_log", "cde9e75d675c8f5053375c50fba2ba1518e16d96397f41dd265224166b546423");
    this.socket.on("log_stream", function (data) {
      toastService.success(data, 'Success!', {dismiss: 'controlled'})
        .then((toast: Toast) => {
          setTimeout(() => {
            toastService.dismissToast(toast);
          }, 2000);
        });
    });
  }
}
