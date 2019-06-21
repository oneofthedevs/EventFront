import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "../app.component";
// import { Globals } from '../Globals';
// import { currentId } from 'async_hooks';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private ap: AppComponent) {
    // this.current_id = globals.role;
  }
  data;
  role;
  current_id;

  private changedRole() {
    // this.globals.role = this.role;
  }
  get_id(id) {}
  ngOnInit() {
   // this.ap.thedata = "DONE";
    this.http.get("http://192.168.2.8:8000/get_all_events").subscribe(res => {
      this.data = res;
      console.log(res);
    });

   // console.log(this.ap.thedata);
  }
}



// }
