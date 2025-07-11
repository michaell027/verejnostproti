import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KskLogoComponent } from './ksk-logo.component';

describe('KskLogoComponent', () => {
  let component: KskLogoComponent;
  let fixture: ComponentFixture<KskLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KskLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KskLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
