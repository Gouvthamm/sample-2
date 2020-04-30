import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata } from './idata';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private httpc:HttpClient) { }

  public getPosts():Observable<Idata[]>{
    return this.httpc.get<Idata[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
