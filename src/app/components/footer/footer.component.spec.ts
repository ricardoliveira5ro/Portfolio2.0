import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Github, LUCIDE_ICONS, Linkedin, LucideIconProvider } from 'lucide-angular';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Github: Github}), multi: true },
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Linkedin: Linkedin}), multi: true }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
