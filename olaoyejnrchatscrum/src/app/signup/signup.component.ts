import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';
@Component({
  selector: 'app-signup',
  templateUrl:'./signup.component.html', 
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  userTypes = ["Developer", "Owner"];
  scrumUserModel = new Scrumuser('','','','Developer');

  onSubmit() {
    console.log(this.scrumUserModel);
  }
}
