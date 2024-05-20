import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';
import { ProjectsService } from '../../services/project/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project [];

  constructor(projectService: ProjectsService) {
    this.projects = projectService.getProjects()
  }
}
