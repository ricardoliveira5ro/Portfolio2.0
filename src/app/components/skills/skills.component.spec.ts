import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { LUCIDE_ICONS, LucideIconProvider, Wand } from 'lucide-angular';
import { SkillsService } from '../../services/skills/skills.service';
import { Skill } from '../../models/skill.model';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Wand: Wand}), multi: true }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the skills from the service", () => {
    const skillsService = fixture.debugElement.injector.get(SkillsService);
    fixture.detectChanges();
    expect(skillsService.getSkills()).toEqual(component.skills);
  });

  it('should render the skills title with correct icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const titleIcon = compiled.querySelector('lucide-icon');
    const title = compiled.querySelector('h3.skills-title');
  
    expect(titleIcon).toBeTruthy();
    expect(titleIcon.getAttribute('name')).toBe('wand');
    expect(title.textContent).toBe('Skills');
  });

  it('should render each skill with correct elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const skillsList = compiled.querySelector('.skills-list');
  
    component.skills.forEach((skill, index) => {
      const skillElement = skillsList.children[index];
  
      const img = skillElement.querySelector('img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe(skill.imagePath);
  
      const skillName = skillElement.querySelector('p');
      expect(skillName.textContent).toBe(skill.name);
    });
  });
});
