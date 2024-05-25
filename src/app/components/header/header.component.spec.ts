import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Home, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { ViewportScroller } from '@angular/common';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockScroller = jasmine.createSpyObj('ViewportScroller', ['scrollToAnchor']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Home: Home}), multi: true },
        { provide: ViewportScroller, useValue: mockScroller }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update inputFromParent on receiving input', () => {
    component.isSideMenuOpen = false;
    fixture.detectChanges();
  
    expect(component.isSideMenuOpen).toBeFalse();
  
    component.isSideMenuOpen = true;
    fixture.detectChanges();
  
    expect(component.isSideMenuOpen).toBeTrue();
  });

  it('should emit updatedSideMenuVisibility event on toggle click', () => {
    spyOn(component.updatedSideMenuVisibility, 'emit');
  
    const button = fixture.nativeElement.querySelector('.side-menu');
    button.click();
    fixture.detectChanges();
  
    expect(component.updatedSideMenuVisibility.emit).toHaveBeenCalledOnceWith(true);
  });

  it('should call scrollToAnchor on onScrollTo', () => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
    component.onScrollTo('experience');
  
    expect(mockScroller.scrollToAnchor).toHaveBeenCalledOnceWith('experience');
  });
});
