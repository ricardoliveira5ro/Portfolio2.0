import { Injectable } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences: Experience[] = [
    new Experience(
        "Full Stack Developer",
        "HN Services (BNP Paribas)",
        "June 2023 - Present",
        "Working as a full-stack developer responsible for developing new features, maintaining existing code, correcting bugs, and planning new improvements. I utilize the SCRUM methodology to ensure timely delivery and continuous enhancement of the product.",
        ["Java", "Ext js", "Javascript", "SQL", "JUnit", "Gherkin", "Git"],
        false
    ),
    new Experience(
        "Full Stack Developer",
        "CGI",
        "May 2022- June 2023",
        "Focused on corrective maintenance, which involved fixing bugs and updating business logic. Additionally, I was responsible for implementing new features to enhance the functionality of the project.",
        ["Java", "Groovy", "SQL", "Javascript", "Git"],
        false
    ),
    new Experience(
        "Computer Science and Engineering",
        "Polytechnic Institute of Setubal",
        "September 2019 - October 2022",
        "",
        ["Programming languages", "Algorithms", "Software patterns", "Project-driven"],
        true
    ),
  ];

  constructor() { }

  getExperiences() {
    return this.experiences;
  }
}