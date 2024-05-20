export class Project {
    name: string;
    imagePath: string;
    description: string;
    tags: string [];
    repositoryURL: string;

    constructor (name: string, imagePath: string, description: string, tags: string [], repositoryURL: string) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.tags = tags;
        this.repositoryURL = repositoryURL;
    }
}