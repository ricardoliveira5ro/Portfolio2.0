export class Experience {
    title: string;
    employer: string;
    dateInterval: string;
    tasks: string;
    techStack: string [];
    isEducation: boolean;

    constructor(title: string, employer: string, dateInterval: string, tasks: string, techStack: string [], isEducation: boolean) {
        this.title = title;
        this.employer = employer;
        this.dateInterval = dateInterval;
        this.tasks = tasks;
        this.techStack = techStack;
        this.isEducation = isEducation;
    }
}