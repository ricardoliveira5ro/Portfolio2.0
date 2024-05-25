import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { BriefcaseBusiness, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { ExperienceService } from '../../services/experience/experience.service';

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

  it("should use the experiences from the service", () => {
    const experienceService = fixture.debugElement.injector.get(ExperienceService);
    fixture.detectChanges();
    expect(experienceService.getExperiences()).toEqual(component.experiences);
  });

  it('should render the title and icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('h3');
    const icon = compiled.querySelector('lucide-icon');

    expect(title.textContent).toBe('Experience');
    expect(icon.getAttribute('name')).toBe('briefcase-business');
  });
});
