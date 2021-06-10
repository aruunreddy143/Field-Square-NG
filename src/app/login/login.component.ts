import { Component, OnInit, Inject } from '@angular/core';
import {FormsModule,FormControl,Validators} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required])
  login$: Observable<Login>;

  constructor(private store: Store<LoginState>, public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.login$ = this.store.pipe(select(selectLogin));
    console.log(this.login$);
  }

  onNoClick(): void {
    if(this.getErrorMessage()){
      this.dialogRef.close();
      console.log(this.email.value, this.password.value);

    }
  }

  // @ts-ignore
  getErrorMessage() {
      if (this.password.hasError('required')) {
        return 'You must enter password';
      }

      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      if(this.email.hasError('email')){
        return 'Not a valid email';
      }
      return true
  }


  ngOnInit(): void {
    // this.store.dispatch(({name: "test", password: 'salsa'}));
  }

}
