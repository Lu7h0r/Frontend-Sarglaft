import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClieteComponent } from './crear-cliete.component';

describe('CrearClieteComponent', () => {
  let component: CrearClieteComponent;
  let fixture: ComponentFixture<CrearClieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
