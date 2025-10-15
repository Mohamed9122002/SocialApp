import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private readonly _HttpClient: HttpClient) { }
  CreateComment(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseURL}/comments`, data);
  }
  GetPostComment(postId: string): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/posts/${postId}/comments`)
  }
  UpdatedPostComment(commentId: string, data: object): Observable<any> {
    return this._HttpClient.put(`${environment.baseURL}/comments${commentId}`, data)
  }
  DeleteComment(commentId:string):Observable<any> {
    return this._HttpClient.delete(`${environment.baseURL}/comments${commentId}`)
  }
}
