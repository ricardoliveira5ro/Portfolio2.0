import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private projectService: ProjectsService) {
    this.projects = projectService.getProjects()
  }
}
