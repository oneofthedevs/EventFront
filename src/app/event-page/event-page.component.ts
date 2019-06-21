import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Globals } from '../Globals';

@Component({
  selector: "app-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.css"]
})
export class EventPageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dat;
  current_id;

  get_id(id) {
    this.current_id = id;
  }

  ngOnInit() {
    this.http.get("http://192.168.2.6:8080/get_all_events").subscribe(res => {
      this.dat = res;
      console.log(res);
    });
  }
}
