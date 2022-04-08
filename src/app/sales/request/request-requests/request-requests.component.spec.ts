import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRequestsComponent } from './request-requests.component';

describe('RequestRequestsComponent', () => {
  let component: RequestRequestsComponent;
  let fixture: ComponentFixture<RequestRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
