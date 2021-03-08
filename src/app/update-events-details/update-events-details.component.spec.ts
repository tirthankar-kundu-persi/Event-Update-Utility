import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventsDetailsComponent } from './update-events-details.component';

describe('UpdateEventsDetailsComponent', () => {
  let component: UpdateEventsDetailsComponent;
  let fixture: ComponentFixture<UpdateEventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
