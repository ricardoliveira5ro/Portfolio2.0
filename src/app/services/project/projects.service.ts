import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    new Project(
      "Auto Match", 
      "../../assets/projects/auto-match.png", 
      "Fullstack web application for browsing, managing, and saving car listings in an online car dealership platform.", 
      ["Java", "Spring Boot", "React", "Typescript", "Postgresql"],
      "https://github.com/ricardoliveira5ro/AutoMatch"
    ),
    new Project(
      "PadelHub API", 
      "../../assets/projects/padelhubapi.png", 
      "PadelHub API is a RESTful API designed to manage padel club activities such as user registration, login, and reservations.", 
      ["Java", "Spring", "Spring Boot", "Hibernate"],
      "https://github.com/ricardoliveira5ro/PadelHubAPI"
    ),
    new Project(
      "Word Guesser Bot", 
      "../../assets/projects/wordguesser.png", 
      "Discord bot that allows users to play a word guessing game within their Discord server", 
      ["Node JS", "Discord JS", "dotenv", "jest"],
      "https://github.com/ricardoliveira5ro/Word-Guesser-Bot"
    ),
    new Project(
      "PathwayAPI", 
      "../../assets/projects/pathwayAPI.png", 
      "PathwayAPI is RESTfull API designed to help users create, manage, and track personalized roadmaps for achieving various goals. Users can follow predefined roadmaps or create their own, breaking them down into manageable steps.", 
      ["Ruby", "Ruby on Rails", "Postgresql", "REST API"],
      "https://github.com/ricardoliveira5ro/PathwayAPI"
    ),
    new Project(
      "PathwayAPI (GraphQL)", 
      "../../assets/projects/pathwayAPI-graphQL.png", 
      "GraphQL API designed to create, manage and track personalized roadmaps breaking them down into manageable steps", 
      ["Ruby", "Ruby on Rails", "Postgresql", "GraphQL API"],
      "https://github.com/ricardoliveira5ro/PathwayAPI-GraphQL"
    ),
    new Project(
      "Portfolio Website", 
      "../../assets/projects/portfolio.png", 
      "An interactive resume, describing my professional experiences, personal projects and information about me", 
      ["Angular JS", "TypeScript", "Tailwind CSS"],
      "https://github.com/ricardoliveira5ro/Portfolio2.0"
    ),
    new Project(
      "Spendaholic", 
      "../../assets/projects/spendaholic.png", 
      "Android application built to help users keep track of their expenses. Easily log expenses, categorize spending, and visualize your financial trends with insightful statistics", 
      ["Kotlin", "Android", "Jetpack Compose", "MVVM"],
      "https://github.com/ricardoliveira5ro/Currency-Conversion-API"
    ),
    new Project(
      "Show Tracker", 
      "../../assets/projects/showtracker.png", 
      "Android application designed to help users keep track of the movies they've watched and the episodes of TV shows they're currently viewing", 
      ["Kotlin", "Android", "Jetpack Compose", "MVVM"],
      "https://github.com/ricardoliveira5ro/ShowTracker"
    ),
    new Project(
      "Translator Extension", 
      "../../assets/projects/extension.png", 
      "Browser extension that allows users to translate selected text on any webpage. When a user selects text, a Translate button appears next to the selection, allowing for quick and easy translation.", 
      ["JavaScript", "HTML", "CSS"],
      "https://github.com/ricardoliveira5ro/Translate-Extension"
    ),
    new Project(
      "CurrenSee Tool", 
      "../../assets/projects/currenSee.png", 
      "Web app that allows users to easily convert amounts from one currency to another using real-time exchange rates", 
      ["Next JS", "JavaScript", "Tailwind CSS"],
      "https://github.com/ricardoliveira5ro/Currency-Conversion-Tool"
    ),
    new Project(
      "CurrenSee API", 
      "../../assets/projects/currenSee_API.png", 
      "Currency Conversion API provide real-time currency conversion rates between various currencies", 
      ["Node JS", "Express JS"],
      "https://github.com/ricardoliveira5ro/Currency-Conversion-API"
    )
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }
}
