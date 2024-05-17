import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideInName', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('1s 0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInSubTitle', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('1s 1s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInEmail', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('1s 1.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  email = 'ricardoliveira5ro@gmail.com';
}
