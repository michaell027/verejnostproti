import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHolderComponent } from './map-holder.component';

describe('MapHolderComponent', () => {
  let component: MapHolderComponent;
  let fixture: ComponentFixture<MapHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapHolderComponent]
    });
    fixture = TestBed.createComponent(MapHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
