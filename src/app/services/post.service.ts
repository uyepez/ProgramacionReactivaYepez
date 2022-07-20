import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  listaPostsObs(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((resp: any)=> (resp.filter((dataObject: any) => dataObject.userId == 1 ))));
  }

  listaPostsProm(): Promise<Response> {
    return fetch('https://jsonplaceholder.typicode.com/posts');
  }
}
