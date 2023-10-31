import { Router } from '@angular/router';
import { ForgetpasswordService } from './../../service/forgetpassword.service';
import{FormGroup,FormControl, Validators} from '@angular/forms'
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

constructor(private _ForgetpasswordService:ForgetpasswordService, private _Router:Router){}
  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  step4:boolean = false;

  userMesage:string =""


  forgetpassword: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required , Validators.email]),
  });

  forget():void{
    let userEmail = this.forgetpassword.value
    this._ForgetpasswordService.forgetpassword(userEmail).subscribe({
      next:(respons)=>{
        console.log(respons);
        this.userMesage = respons.message
        this.step1 = false;
        this.step2 = true
      },
      error:(err)=>{
        this.userMesage = err.error.message;
      }

    })
  };
  // ////////////////////////////////////////////////////////////////

  restCodeForm: FormGroup = new FormGroup({
    resetCode : new FormControl(''),
  });

  sendCode():void{
    let resetCode = this.restCodeForm.value
    this._ForgetpasswordService.verifyResetCode(resetCode).subscribe({
      next:(respons)=>{
        console.log(respons);
        this.userMesage = respons.message
        this.step2 = false;
        this.step3 = true
      },
      error:(err)=>{
        this.userMesage = err.error.message;
      }
    })
  }
  // //////////////////////////////////////////////////////////////////////////////////

  resetPassword: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required , Validators.email]),
    newPassword : new FormControl('', [Validators.required]),
  })

newPassword():void{
  let newEamil= this.resetPassword.value
  this._ForgetpasswordService.resetPassword(newEamil).subscribe({
    next:(respons)=>{
      console.log(respons);
      this.userMesage = respons.message
      if (respons.token) {
        localStorage.setItem('_token' , respons.token )
        this._Router.navigate(['/home'])
      }},

    error:(err)=>{
      this.userMesage = err.error.message;
    }
  })
}
}
