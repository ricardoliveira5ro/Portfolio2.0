import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ExperienceService } from '../../services/experience/experience.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  experiences: Experience [];

  constructor(experienceService: ExperienceService) {
    this.experiences = experienceService.getExperiences()
  }
}
