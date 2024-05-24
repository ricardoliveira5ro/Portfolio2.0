import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsBarComponent } from './socials-bar.component';
import { Github, LUCIDE_ICONS, Linkedin, LucideIconProvider } from 'lucide-angular';

describe('SocialsBarComponent', () => {
  let component: SocialsBarComponent;
  let fixture: ComponentFixture<SocialsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsBarComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Github: Github}), multi: true },
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Linkedin: Linkedin}), multi: true }
      ],
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
