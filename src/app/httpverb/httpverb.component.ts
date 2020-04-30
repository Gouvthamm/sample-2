import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Usereference } from '../usereference';
@Component({
  selector: 'app-httpverb',
  templateUrl: './httpverb.component.html',
  styleUrls: ['./httpverb.component.css']
})
export class HttpverbComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void{
    //  this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(data=>{
    //   console.log(data)
    // })
    // this.http.get<Usereference>('http://dummy.restapiexample.com/api/v1/employees').subscribe(data=>{
    //   console.log("user login:"+data.login)
    //   console.log("Bio:"+data.bio)
    //   console.log("company:"+data.company)
    // },
    // err=>{
    //   console.log("err occured")
    // });
  
  this.http.post('http://dummy.restapiexample.com/api/v1/create',
  {
   title:'foo',
   body:'bar',
   userid:1
    })
    .subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log("err occired")
      })

      this.http.put(' http://dummy.restapiexample.com/api/v1/update/25',
      {
        "name":"test","salary":"2222","age":"23"
        })
        .subscribe(
          res=>{
            console.log(res)
          },
          err=>{
            console.log("err occired")
          })
// delete operation
          // this.http.delete('http://dummy.restapiexample.com/api/v1/delete/2')
          // .subscribe(
          // res=>{
          //   console.log(res)
          // },
          // err=>{
          //   console.log("err occired")
          // })
  }}

      
