import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {}
  username;
  password;
  city;
  status;
  fullname;
  mobile;

  ngOnInit() {}

  signup() {
    this.http
      .post("http://192.168.2.8:8000/signup", {
        username: this.username,
        password: this.password,
        city: this.city,
        name: this.fullname,
        mobile : this.mobile
      })
      .subscribe(res => {
        this.status = res;
        if (res == 1) {
          alert("Sucessfully Registered!");
        } else {
          alert("Existing User : Try Logging In!");
        }
        if (res == 1) {
          window.location.href = "/login";
        }
      });
  }
}
