import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Edata } from './edata';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private httpc:HttpClient, ) {}
    public getPosts():Observable<Edata[]>{
      return this.httpc.get<any[]>('http://dummy.restapiexample.com/api/v1/employees')
      
     
     
      
    }
   
  }
