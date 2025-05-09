import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    new Skill(1, "Java", "../../assets/skills/java.png"),
    new Skill(2, "Node JS", "../../assets/skills/nodejs.png"),
    new Skill(3, "Ruby", "../../assets/skills/ruby.png"),
    new Skill(4, "Spring Boot", "../../assets/skills/spring-boot.png"),
    new Skill(5, "Javascript", "../../assets/skills/js.png"),
    new Skill(6, "React", "../../assets/skills/react.png"),
    new Skill(7, "Angular", "../../assets/skills/angular.png"),
    new Skill(8, "Typescript", "../../assets/skills/typescript.png"),
    new Skill(9, "HTML", "../../assets/skills/html.png"),
    new Skill(10, "CSS", "../../assets/skills/css.png"),
    new Skill(11, "Tailwind CSS", "../../assets/skills/tailwindcss.png"),
    new Skill(12, "Kotlin", "../../assets/skills/kotlin.png"),
    new Skill(13, "Jetpack Compose", "../../assets/skills/jetpackcompose.png"),
    new Skill(14, "SQL", "../../assets/skills/sql.png"),
    new Skill(15, "Git", "../../assets/skills/git.png")
  ];

  constructor() { }

  getSkills() {
    return this.skills;
  }
}
