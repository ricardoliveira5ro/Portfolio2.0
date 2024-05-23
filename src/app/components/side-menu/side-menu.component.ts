import { NgOptimizedImage, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  @Output() closeSideMenu = new EventEmitter<void>();

  constructor(private viewportScroller: ViewportScroller) {}

  public onScrollTo(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public onCloseMenu() {
    this.closeSideMenu.emit();
  }
}
