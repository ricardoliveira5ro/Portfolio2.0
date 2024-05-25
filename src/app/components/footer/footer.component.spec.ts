import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Github, LUCIDE_ICONS, Linkedin, LucideIconProvider } from 'lucide-angular';
import { By } from '@angular/platform-browser';

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

  it('should have name and year', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.name).toEqual('Ricardo Oliveira');
    expect(app.year).toEqual(2024);
  });

  it('should render the correct name and year in p and span tags', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const compiled = fixture.debugElement.nativeElement;
    const p = compiled.querySelector('.footer-section > div > p');
    const span = p.querySelector('span');

    fixture.detectChanges();

    expect(p.textContent).toContain('Ricardo Oliveira');
    expect(span.textContent).toBe('/ 2024');
  });

  it('should render the correct icons', () => {
    const githubIcon = fixture.debugElement.query(By.css('lucide-icon[name="github"]')).nativeElement;
    const linkedinIcon = fixture.debugElement.query(By.css('lucide-icon[name="linkedin"]')).nativeElement;
    
    expect(githubIcon).toBeTruthy();
    expect(linkedinIcon).toBeTruthy();
  });
});
