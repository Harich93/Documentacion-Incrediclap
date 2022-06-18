import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  private _token: string = '';
  public form: FormGroup;
  public pass1!: AbstractControl;
  public pass2!: AbstractControl;
  public isFormValid: boolean = false;
  public err1: boolean = false;
  public err2: boolean = false;
  public isDisabled = true;

  constructor( private fb: FormBuilder) { 
    this.form = this.fb.group({
      pass1: ['',[Validators.min(6), Validators.required]],
      pass2: ['',[Validators.min(6), Validators.required]]
    });
  }


  ngOnInit(): void {
    const { pass1, pass2 } = this.form.controls; 
    this.pass1 = pass1;
    this.pass2 = pass2;
  }

  getToken() {
    const urlParams = new URLSearchParams(window.location.search);
    this._token = urlParams.get('token') || '';
    console.log(this._token);
 }

 validForm() {
  if(this.pass1.value != '' && this.pass1.value.length < 6) {
     this.err2 = false;   
     this.isDisabled = true
  }

  else{

     this.err2 = true;

     if(this.pass2.value != '') {
        
        if(this.pass1.value != this.pass2.value) {
          this.isDisabled = true
          this.err1 = false;
     
        }
        else {
          this.isDisabled = false;
          this.err1 = true;
          this.err2 = true;
        }
     }
  }
}

  async changePass() {

    let body = { 
       password: this.pass2.value, 
    }

    const url = `https://incredibclap-backend-ts.herokuapp.com/users`;

    const response = await fetch(url, {
       method: 'PUT',
       headers: {'Content-Type': 'application/json', 'x-token': this._token},
       body: JSON.stringify(body)
    });
    
    console.log(response);
    
 }

}
