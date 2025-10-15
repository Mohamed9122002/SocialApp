import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) {

  }
  SignUp(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseURL}/users/signup`, data)
  }
  Signin(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseURL}/users/signin`, data)
  }
  ChangePassword(data: object): Observable<any> {
    return this._HttpClient.patch(`${environment.baseURL}/users/change-password`, data)
  }
  uploadProfilePhoto(data: object): Observable<any> {
    return this._HttpClient.put(`${environment.baseURL}/users/upload-photo`, data)
  }
  GetLoggedUserData(data: object): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/users/profile-data`, data)
  }

}
