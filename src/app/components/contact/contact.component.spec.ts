import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { LUCIDE_ICONS, LucideIconProvider, Send, UserRound } from 'lucide-angular';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({UserRound: UserRound}), multi: true },
        { provide: LUCIDE_ICONS, useValue: new LucideIconProvider({Send: Send}), multi: true }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
