import { NgOptimizedImage, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() inputFromParent: boolean = false;
  @Output() updatedInput = new EventEmitter <boolean> ();

  constructor(private viewportScroller: ViewportScroller) {}

  public onScrollTo(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  toggleSideMenu() {
    this.updatedInput.emit(!this.inputFromParent)
  }
}
