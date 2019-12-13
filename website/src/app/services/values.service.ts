import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ValueService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const url = `https://localhost:5001/api/values`;
    this.http.get(url).subscribe();
  }
}
