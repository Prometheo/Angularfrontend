import { Component, OnInit } from '@angular/core';
import { Loginuser } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _scrumdataService: ScrumdataService, private _router: Router) { }

  ngOnInit() {
  }
  loginUserModel = new Loginuser('','','');
  feedback;
  onLoginSubmit() {
    console.log(this.loginUserModel)
    this._scrumdataService.login(this.loginUserModel).subscribe(
      data => {
        console.log('Success!', data)
        localStorage.setItem('token', data.token)
        this._router.navigate(['/scrumboard', data['project_id']])
      },
      error => {
        console.log('Error!', error)
        this.feedback = 'Invalid credentials, login failed';
      }
    )
  }
}