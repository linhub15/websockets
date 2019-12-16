import { Component } from "@angular/core";
import { WebsocketService } from "./services/websocket.service";
import { ValueService } from "./services/values.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "website";

  constructor(
    private websocket: WebsocketService,
  ) {}

  ngOnInit() {
    // this.websocket.connectMessageHub();
    this.websocket.startConnection();
  }


  send(message: HTMLInputElement) {
    this.websocket.sendMessage(message.value);
  }
}
