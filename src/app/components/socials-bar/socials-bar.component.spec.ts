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

  it('should render the GitHub link with correct icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const githubLink = compiled.querySelector('a[href="https://github.com/ricardoliveira5ro"]');
    const githubIcon = githubLink.querySelector('lucide-icon');

    expect(githubLink).toBeTruthy();
    expect(githubIcon).toBeTruthy();
    expect(githubIcon.getAttribute('name')).toBe('github');
  });

  it('should render the LinkedIn link with correct icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const linkedinLink = compiled.querySelector('a[href="https://www.linkedin.com/in/ricardo5oliveira"]');
    const linkedinIcon = linkedinLink.querySelector('lucide-icon');

    expect(linkedinLink).toBeTruthy();
    expect(linkedinIcon).toBeTruthy();
    expect(linkedinIcon.getAttribute('name')).toBe('linkedin');
  });
});
