import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxErrorBoxComponent } from './ngx-error-box.component';

describe('NgxErrorBoxComponent', () => {
  let component: NgxErrorBoxComponent;
  let fixture: ComponentFixture<NgxErrorBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxErrorBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxErrorBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
