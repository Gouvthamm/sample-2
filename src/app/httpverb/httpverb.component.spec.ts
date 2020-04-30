import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpverbComponent } from './httpverb.component';

describe('HttpverbComponent', () => {
  let component: HttpverbComponent;
  let fixture: ComponentFixture<HttpverbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpverbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpverbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
