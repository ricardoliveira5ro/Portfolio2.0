import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    new Project(
      "Show Tracker", 
      "../../assets/showtracker.png", 
      "Android application designed to help users keep track of the movies they've watched and the episodes of TV shows they're currently viewing", 
      ["Kotlin", "Android", "Jetpack Compose", "MVVM"],
      "https://github.com/ricardoliveira5ro/ShowTracker"
    ),
    new Project(
      "Spendaholic", 
      "../../assets/spendaholic.png", 
      "Android application built to help users keep track of their expenses. Easily log expenses, categorize spending, and visualize your financial trends with insightful statistics", 
      ["Kotlin", "Android", "Jetpack Compose", "MVVM"],
      "https://github.com/ricardoliveira5ro/Currency-Conversion-API"
    ),
    new Project(
      "CurrenSee Tool", 
      "../../assets/currenSee.png", 
      "Web app that allows users to easily convert amounts from one currency to another using real-time exchange rates", 
      ["Next JS", "Javascript", "Tailwind CSS"],
      "https://github.com/ricardoliveira5ro/Currency-Conversion-Tool"
    ),
    new Project(
      "CurrenSee API", 
      "../../assets/currenSee_API.png", 
      "Currency Conversion API provide real-time currency conversion rates between various currencies", 
      ["Node JS", "Express JS"],
      "https://github.com/ricardoliveira5ro/Currency-Conversion-API"
    ),
    new Project(
      "Word Guesser Bot", 
      "../../assets/wordguesser.png", 
      "Discord bot that allows users to play a word guessing game within their Discord server", 
      ["Node JS", "Discord JS", "dotenv", "jest"],
      "https://github.com/ricardoliveira5ro/Word-Guesser-Bot"
    ),
    new Project(
      "Portfolio Website", 
      "../../assets/portfolio.png", 
      "An interactive resume, describing my professional experiences, personal projects and information about me", 
      ["Angular JS", "Typescript", "Tailwind CSS"],
      "https://github.com/ricardoliveira5ro/Portfolio2.0"
    ),
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }
}