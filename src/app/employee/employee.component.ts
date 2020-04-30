import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpserviceService } from '../empservice.service';
import { Edata } from "../edata";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public response: any
  constructor(public service: EmpserviceService) {
    this.service.getPosts().subscribe(result=>{
    this.response = result['data']
    })
  }
  
  

  ngOnInit(): void {
  }

}
