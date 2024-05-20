import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
}
