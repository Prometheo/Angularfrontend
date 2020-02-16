import { Component, OnInit } from '@angular/core';
import { Loginuser } from '../scrumuser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginUserModel = new Loginuser('','','');

}