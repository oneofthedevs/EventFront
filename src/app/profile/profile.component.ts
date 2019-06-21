import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { LoginComponent } from "../login/login.component";
// import { AppComponent } from "../app.component";
// import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}
  token;
  data;
  uname;
  ucity;
  umobile;
  uid;
  allevents;
  ngOnInit() {
    
    this.getToken();

    this.http.get("http://192.168.2.8:8000/get_userProfile",{
      headers : {"authorization" : "bearer " + this.token}
    }).subscribe(res => {
      // this.data = res;
      this.uid = res["user1"].username;
      this.ucity = res["user1"].city;
      this.umobile = res["user1"].mobile;
      this.uname = res["user1"].name;
      this.allevents=res["user1"].addedEvents;
      console.log(res);
    });
    
  }

  getToken(){
    this.token=document.cookie.split("=")[1];
    console.log(this.token);
  }
  
}
