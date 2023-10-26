import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){ }

  errorMsg:string= '';
  isLoading:boolean= false;

  loginForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required , Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern(/^\w{6,}$/)]),
  });

handleForm():void{

    this.isLoading = true

    if (this.loginForm.valid == true) {
      console.log(this.loginForm.value);
      this._AuthService.loginForm(this.loginForm.value).subscribe({
        next:(response) => {
          // console.log(response);
          if(response.message == 'success'){
            localStorage.setItem('_token' , response.token);
            this._Router.navigate(['/home']);
            this.isLoading = false;
          }
        },
        error:(err)=>{
          // console.log(error);
          this.errorMsg = err.error.message;
          this.isLoading = false;
        }
      })
    }



}
forgetpassword():void{
  this._Router.navigate(['/forgetpassword'])
}





}



