import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should toggle side menu and add/remove no-scroll class', () => {
    component.toggleSideMenu(true);
    expect(component.isSideMenuOpen).toBeTrue();
    expect(document.body.classList.contains('no-scroll')).toBeTrue();

    component.toggleSideMenu(false);
    expect(component.isSideMenuOpen).toBeFalse();
    expect(document.body.classList.contains('no-scroll')).toBeFalse();
  });
});
