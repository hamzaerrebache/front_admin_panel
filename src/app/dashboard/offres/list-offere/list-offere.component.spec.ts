import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffereComponent } from './list-offere.component';

describe('ListOffereComponent', () => {
  let component: ListOffereComponent;
  let fixture: ComponentFixture<ListOffereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOffereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
