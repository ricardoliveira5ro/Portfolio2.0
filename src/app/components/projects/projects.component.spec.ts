import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { Braces, FolderGit2, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { ProjectsService } from '../../services/project/projects.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
        providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({FolderGit2: FolderGit2}), multi: true },
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Braces: Braces}), multi: true }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the projects from the service", () => {
    const projectService = fixture.debugElement.injector.get(ProjectsService);
    fixture.detectChanges();
    expect(projectService.getProjects()).toEqual(component.projects);
  });

  it('should render the projects title with correct icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const titleIcon = compiled.querySelector('.projects-title lucide-icon');
    const title = compiled.querySelector('.projects-title h3');
  
    expect(titleIcon).toBeTruthy();
    expect(titleIcon.getAttribute('name')).toBe('folder-git-2');
    expect(title.textContent).toBe('Projects');
  });

  
  it('should render the projects grid', () => {
    const compiled = fixture.debugElement.nativeElement;
    const projectsGrid = compiled.querySelector('.projects-grid');

    expect(projectsGrid).toBeTruthy();
    expect(projectsGrid.children.length).toBe(component.projects.length);
  });

  it('should render each project with correct elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const projectsGrid = compiled.querySelector('.projects-grid');
  
    component.projects.forEach((project, index) => {
      const projectElement = projectsGrid.children[index];
  
      const img = projectElement.querySelector('img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe(project.imagePath);
  
      const projectName = projectElement.querySelector('h3');
      expect(projectName.textContent).toBe(project.name);
  
      const repositoryLink = projectElement.querySelector('a');
      expect(repositoryLink.getAttribute('href')).toBe(project.repositoryURL);
  
      const bracesIcon = repositoryLink.querySelector('lucide-icon');
      expect(bracesIcon).toBeTruthy();
      expect(bracesIcon.getAttribute('name')).toBe('braces');
  
      const description = projectElement.querySelector('p');
      expect(description.textContent).toBe(project.description);
  
      const tagsList = projectElement.querySelector('ul');
      expect(tagsList.children.length).toBe(project.tags.length);
  
      project.tags.forEach((tag, tagIndex) => {
        const tagElement = tagsList.children[tagIndex];
        expect(tagElement.textContent).toBe(tag);
      });
    });
  });
});
