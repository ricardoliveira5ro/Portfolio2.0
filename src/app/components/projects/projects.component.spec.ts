import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { Braces, FolderGit2, LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';

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
});
