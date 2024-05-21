import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SocialsBarComponent } from './components/socials-bar/socials-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsService } from './services/project/projects.service';
import AOS from "aos";
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    HomeComponent,
    SocialsBarComponent,
    TimelineComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  providers: [
    ProjectsService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { 
  ngOnInit() {
    AOS.init();
  }
}
