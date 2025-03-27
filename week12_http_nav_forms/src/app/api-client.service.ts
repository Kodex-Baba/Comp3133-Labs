import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private API_BASE_URL = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient : HttpClient) { }

  public getPosts(): Observable<any> {
    //return this.httpClient.get(this.API_BASE_URL);
    return this.httpClient.get(this.API_BASE_URL);
  }

  public getPostByID(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_BASE_URL}/${id}`);
  }

  public createPost(post: any): Observable<any> {
    return this.httpClient.post(this.API_BASE_URL, post);
  }

  public updatePost(id: number, post: any): Observable<any> {
    return this.httpClient.put(`${this.API_BASE_URL}/${id}`, post);
  }

  public deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_BASE_URL}/${id}`);
  }
}
