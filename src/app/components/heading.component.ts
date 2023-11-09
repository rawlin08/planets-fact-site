import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-heading',
  template: `
  <h1>THE PLANETS</h1>
  <img [className]="planetComponent.menuOpened ? 'active' : ''" (click)="planetComponent.toggleMenu()" src="assets/images/icons/icon-hamburger.svg" alt="">
  `,
  styles: [`
  h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    letter-spacing: -1.05px;
    font-weight: 400;
  }
  img {
    cursor: pointer;
  }
  .active {
    opacity: 0.5;
  }
  `]
})
export class HeadingComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
