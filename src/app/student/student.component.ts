import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentservice:ArtistService) { }
  students=[];
  ngOnInit(): void {
    this.getStudents()
  }
  getStudents(){
    this.students=this.studentservice.getStudents();
  }
}
