import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsBarComponent } from './socials-bar.component';

describe('SocialsBarComponent', () => {
  let component: SocialsBarComponent;
  let fixture: ComponentFixture<SocialsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
