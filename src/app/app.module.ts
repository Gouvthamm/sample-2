import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpverbComponent } from './httpverb/httpverb.component';
import { from } from 'rxjs';
import { PostsComponent } from './posts/posts.component';
import { EmployeeComponent } from './employee/employee.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpverbComponent,
    PostsComponent,
    EmployeeComponent,
    StudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
