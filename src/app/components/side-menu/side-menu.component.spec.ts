import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { Home, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { ViewportScroller } from '@angular/common';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  let mockScroller: ViewportScroller;

  beforeEach(async () => {
    mockScroller = jasmine.createSpyObj('ViewportScroller', ['scrollToAnchor']);

    await TestBed.configureTestingModule({
      imports: [SideMenuComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Home: Home}), multi: true },
        { provide: ViewportScroller, useValue: mockScroller }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call scrollToAnchor on onScrollTo', () => {
    component.onScrollTo('experience');
    expect(mockScroller.scrollToAnchor).toHaveBeenCalledOnceWith('experience');
  });

  it('should emit closeSideMenu on close button click', () => {
    spyOn(component.closeSideMenu, 'emit');

    const button = fixture.nativeElement.querySelector('.cursor-pointer');
    button.click();
    fixture.detectChanges();

    expect(component.closeSideMenu.emit).toHaveBeenCalledOnceWith();
  });
});
