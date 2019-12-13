import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  subject = webSocket("wss://localhost:5001/ws");
  signalR = webSocket("wss://localhost:5001/hub");

  private hubConnection: signalR.HubConnection;

  public startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/hub')
      .build();

    this.hubConnection.start()
      .then(() => console.log('connection started'))
      .catch(err => console.log('error while connecting: ' + err));
  }

  public openWebSocket() {
    this.subject.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  public openSignalRService() {
    this.signalR.subscribe(
      msg => console.log('message received: ' + msg),
      err => console.error(err),
      () => console.log('complete')
    );

    this.signalR.next({message: 'hello'});
  }
}
