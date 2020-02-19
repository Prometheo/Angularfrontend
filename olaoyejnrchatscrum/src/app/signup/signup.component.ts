import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service';


@Component({
  selector: 'app-signup',
  templateUrl:'./signup.component.html', 
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _scrumdataService: ScrumdataService) { }

  ngOnInit() {

  }

  userTypes = ["Developer", "Owner"];
  scrumUserModel = new Scrumuser('','','','','');
  feedback;

  onSubmit() {
    console.log(this.scrumUserModel);
    this._scrumdataService.signup(this.scrumUserModel).subscribe(
      res => {
        console.log('success!', res)
        this.feedback = (Object.keys(res).length == 2) ? 'Account successfully created' : 'Account creation failed';
      },
      error => console.log('Error!', error)
    )
  }
}