import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators, FormControlOptions} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){ }

  errorMsg:string= '';
  isLoading:boolean= false;

  registerForm: FormGroup = new FormGroup({
    name : new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email : new FormControl('', [Validators.required , Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormControl(''),
    phone: new FormControl('', [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  } , {validators:[this.confirmPassword]} as FormControlOptions );

  confirmPassword(group:FormGroup):void{
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if(rePassword?.value == ''){
      rePassword.setErrors({required:true});
    }else if(password?.value !== rePassword?.value){
      rePassword?.setErrors({mismatch:true})
    }
  }

  handleForm():void{

    this.isLoading = true

    if (this.registerForm.valid == true) {
      console.log(this.registerForm.value);
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(response) => {
          // console.log(response);
          if(response.message == 'success'){
            this._Router.navigate(['/login']);
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
}
