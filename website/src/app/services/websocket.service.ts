import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private connection: signalR.HubConnection;

  public sendMessage(message: string) {
    this.connection.send('notify', 1234, message);
  }
  
  public startConnection() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/message-hub')
      .build();

    this.connection.start()
      .then(() => console.log('connection started'))
      .catch(err => console.log('error while connecting: ' + err));
  }
}
