import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {



  formgroup: any;


  constructor(private router: Router) {

  }
  ngOnInit(): void {


    this.formgroup = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),

    })


  }



  submit(data: any) {

    if (data.email == "admin" && data.password == "1234") {
      this.router.navigate(["home"]);
    }
    else {
      alert("error")
    }
  }




}
