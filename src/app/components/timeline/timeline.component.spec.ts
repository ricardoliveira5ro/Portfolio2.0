import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { BriefcaseBusiness, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({BriefcaseBusiness: BriefcaseBusiness}), multi: true }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
