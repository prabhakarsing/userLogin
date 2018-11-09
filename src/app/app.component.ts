import { Component } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  m1;m2;usrname;upass;m3;state=true;
  constructor(public http:Http){}



  LoginFuntion(ldata){
    if(ldata.valid==false)
    {
      this. m1=" * Enter User ID !"
      this.m2=" * Don't forget any !"
      this.m3=" enter valid email"

     
    }
    else
    {

this.http.get("/api/userApi").subscribe(data=>{
  
    alert(data["_body"])
    this.state=false
  
  }
)
    }

  }
}
