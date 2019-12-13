import { Component } from "@angular/core";
import { WebsocketService } from "./services/websocket.service";
import { ValueService } from "./services/values.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "website";

  constructor(
    private websocket: WebsocketService,
    private values: ValueService
  ) {}

  ngOnInit() {
    this.websocket.startConnection();
    // this.websocket.openWebSocket();
    // this.websocket.openSignalRService();
  }


  send() {
    this.values.sendMessage('hello');
  }
}
