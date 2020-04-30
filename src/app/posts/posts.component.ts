import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata } from '../idata';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public response: Observable<Idata[]>
  constructor(public service:SharedserviceService) { 
    this.response=this.service.getPosts();
  }

  ngOnInit(): void {
  }

}
