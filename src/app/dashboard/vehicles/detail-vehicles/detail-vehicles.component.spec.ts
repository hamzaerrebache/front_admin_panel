import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVehiclesComponent } from './detail-vehicles.component';

describe('DetailVehiclesComponent', () => {
  let component: DetailVehiclesComponent;
  let fixture: ComponentFixture<DetailVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
