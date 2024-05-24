import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Skill } from '../../models/skill.model';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  providers: [
    SkillsService
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill [];

  constructor(skillsService: SkillsService) {
    this.skills = skillsService.getSkills();
  }

  trackBySkill(index: number, skill: any): number {
    return skill.id;
  }
}
