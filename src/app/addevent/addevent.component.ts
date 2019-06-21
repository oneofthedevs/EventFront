import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-addevent",
  templateUrl: "./addevent.component.html",
  styleUrls: ["./addevent.component.css"]
})
export class AddeventComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title;
  description;
  website;
  time;
  date;
  address;
  city;
  genere;
  token;
  
  ngOnInit() {
    this.token=document.cookie.split("=")[1];
    
  }

  addEvent() {
    this.http
      .post("http://192.168.2.8:8000/add_event", {
        title: this.title,
        date: this.date,
        time: this.time,
        address: this.address,
        description: this.description,
        website: this.website,
        city: this.city,
        genre: this.genere},
        {
        headers : {"authorization" : "bearer " + document.cookie.split("=")[1]}
      })
      .subscribe(res => {
        console.log(this.token);
        window.location.href = "/";
        
      });
  }
}
