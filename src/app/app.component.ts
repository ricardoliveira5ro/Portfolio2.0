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
import { ExperienceService } from './services/experience/experience.service';
import { SkillsService } from './services/skills/skills.service';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    SideMenuComponent,
    HomeComponent,
    SocialsBarComponent,
    TimelineComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { 
  ngOnInit() {
    AOS.init();
  }

  isSideMenuOpen:boolean = false;

  toggleSideMenu(isOpen: boolean) {
    this.isSideMenuOpen = isOpen;

    isOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
  }
}
