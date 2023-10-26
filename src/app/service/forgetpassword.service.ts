import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private _HttpClient:HttpClient) { }

  // baseUrl:string ='https://ecommerce.routemisr.com/api/v1/auth'

  forgetpassword(userEmail:object ):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', userEmail)
  };


  verifyResetCode(resetCode:any ):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, resetCode)

   }

   resetPassword(newEamil:object ):Observable<any>{

    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, newEamil)

   }





}
