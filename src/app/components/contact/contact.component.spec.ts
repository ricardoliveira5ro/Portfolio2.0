import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { LUCIDE_ICONS, LucideIconProvider, Send, UserRound } from 'lucide-angular';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({UserRound: UserRound}), multi: true },
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Send: Send}), multi: true }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have email', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.email).toEqual('ricardoliveira5ro@gmail.com');
  });

  it('should render title in h3 tag with value and icon', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const compiled = fixture.debugElement.nativeElement;
    const h3 = compiled.querySelector('h3');

    expect(h3.textContent).toBe('Contact');

    const iconElement = fixture.debugElement.query(By.css('lucide-icon')).nativeElement;
    
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('name')).toBe('user-round');
    expect(iconElement.getAttribute('color')).toBe('var(--color-primary)');
  });

  it('should render contact description in p tag with value', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const compiled = fixture.debugElement.nativeElement;
    const p = compiled.querySelector('p');

    expect(p.textContent).toBe('I would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to get in touch. I will get back to you as soon as possible.');
  });

  it('should have a correct mailto link', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const compiled = fixture.debugElement.nativeElement;
    const a = compiled.querySelector('a');

    expect(a.href).toBe('mailto:ricardoliveira5ro@gmail.com');
    expect(a.target).toBe('_blank');
    expect(a.rel).toBe('noopener noreferrer');
  });

  it('should render contact description in p tag with value', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const compiled = fixture.debugElement.nativeElement;
    const h3 = compiled.querySelector('p');

    expect(h3.textContent).toBe('I would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to get in touch. I will get back to you as soon as possible.');
  });

  it('should render contact info with value and icon', () => {
    const emailIcon = fixture.debugElement.query(By.css('.icon')).nativeElement;
    const emailParagraph = fixture.debugElement.query(By.css('.contact-email')).nativeElement;
    
    expect(emailIcon).toBeTruthy();
    expect(emailIcon.getAttribute('name')).toBe('send');
    expect(emailParagraph.textContent).toBe('ricardoliveira5ro@gmail.com');
  });
});
