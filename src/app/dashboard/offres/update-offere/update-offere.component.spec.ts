import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffereComponent } from './update-offere.component';

describe('UpdateOffereComponent', () => {
  let component: UpdateOffereComponent;
  let fixture: ComponentFixture<UpdateOffereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOffereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOffereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
