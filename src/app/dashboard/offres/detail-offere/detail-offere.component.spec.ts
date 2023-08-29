import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOffereComponent } from './detail-offere.component';

describe('DetailOffereComponent', () => {
  let component: DetailOffereComponent;
  let fixture: ComponentFixture<DetailOffereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOffereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOffereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
