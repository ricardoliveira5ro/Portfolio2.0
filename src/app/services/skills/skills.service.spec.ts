import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the correct amount of skills', () => {
    expect(service.getSkills().length).toEqual(14);
  });
});
