import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LUCIDE_ICONS, LucideIconProvider, Send } from 'lucide-angular';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, NoopAnimationsModule],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Send: Send}), multi: true }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have email', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.email).toEqual('ricardoliveira5ro@gmail.com');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Ricardo Oliveira');
  });

  it('should render span in h1 tag with value and text color', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.debugElement.nativeElement;
    const span = compiled.querySelector('h1 span');
    const style = getComputedStyle(span);

    expect(style.color).toBe('rgb(249, 95, 25)');
    expect(span.textContent).toBe('.');
  });

  it('should render sub title in a h3 tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Developer');
  });

  it('should render span in h3 tag with value and text color', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.debugElement.nativeElement;
    const span = compiled.querySelector('h3 span');
    const style = getComputedStyle(span);

    expect(style.color).toBe('rgb(249, 95, 25)');
    expect(span.textContent).toBe('Full Stack');
  });

  it('should render email in a p tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(compiled.querySelector('p').textContent).toContain('ricardoliveira5ro@gmail.com');

  });

  it('should have a correct mailto link', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const compiled = fixture.debugElement.nativeElement;
    const a = compiled.querySelector('a');

    expect(a.href).toBe('mailto:ricardoliveira5ro@gmail.com');
    expect(a.target).toBe('_blank');
    expect(a.rel).toBe('noopener noreferrer');
  });
});