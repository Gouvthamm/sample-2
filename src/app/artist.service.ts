import { Injectable } from '@angular/core';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }
  getStudents(){
    return Students;
  }
}
