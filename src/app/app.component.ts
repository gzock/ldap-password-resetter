import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ResetterService } from './resetter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ldap-password-resetter';

  isSuccess = false;
  uid: string;
  token: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private resetter: ResetterService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public onGenerateToken() {
    console.log(this.uid);
    this.resetter.genToken(this.uid)
    .subscribe(
       response => {
         this.isSuccess = true;
       },
       err => {
         console.log("error: " + err);
       }
    );
  };

  public onResetPassword() {
    console.log(this.token);
    this.resetter.resetPassword(this.uid, this.token)
    .subscribe(
       response => {
         this.isSuccess = true;
       },
       err => {
         console.log("error: " + err);
       }
    );
  };
}
