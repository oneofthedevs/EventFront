import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "../app.component";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private ap: AppComponent) {}
  password;
  username;
  status;
  ngOnInit() {}

  check() {
    this.http
      .post("http://192.168.2.8:8000/login", {
        username: this.username,
        password: this.password
      })
      .subscribe(res => {
        console.log(res);
        this.status = res["token"];
        // alert(res["token"]);
        if (res != 0) {
          alert("Sucessfully Logged In!");
          document.cookie = "token="+res["token"];
        } else {
          alert("Incorrect Username or Password!");
        }
        
        // this.keep();
        if (res != 0) {
          window.location.href = "/profile";
        }
      });
  }

  // keep() {
  //   this.token = this.status;
  //   alert(this.ap.thedata);
  // }
}
