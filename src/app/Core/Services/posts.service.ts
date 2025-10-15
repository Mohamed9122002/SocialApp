import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient: HttpClient) { }
  CreatePost(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseURL}/posts`, data)
  }
  GetAllPosts(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/posts?`)
  }
  GetUserPosts(): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/users/664bcf3e33da217c4af21f00/posts`,)
  }
  GetsinglePost(idPost: string): Observable<any> {
    return this._HttpClient.get(`${environment.baseURL}/posts/${idPost}`,)
  }
  UpdatePost(idPost: string, data: object): Observable<any> {
    return this._HttpClient.put(`${environment.baseURL}/posts/${idPost}`, data)
  }
  Deletepost(idPost: string): Observable<any> {
    return this._HttpClient.delete(`${environment.baseURL}/posts/${idPost}`)
  }
}
