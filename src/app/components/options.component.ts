import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-options',
  template: `
  <a routerLink="./overview" routerLinkActive="activeLink" #rlaoverview="routerLinkActive" [style]="rlaoverview.isActive ? 'border-bottom: 3px solid' + planetComponent.planet.color : ''">OVERVIEW</a>
  <a routerLink="./internal" routerLinkActive="activeLink" #rlainternal="routerLinkActive" [style]="rlainternal.isActive ? 'border-bottom: 3px solid' + planetComponent.planet.color : ''">STRUCTURE</a>
  <a routerLink="./geology" routerLinkActive="activeLink" #rlageology="routerLinkActive" [style]="rlageology.isActive ? 'border-bottom: 3px solid' + planetComponent.planet.color : ''">SURFACE</a>
  `,
  styles: [`
  a {
    font-family: 'League Spartan', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    opacity: 0.5;
    padding: 20px 0;
  }
  .activeLink {
    opacity: 1;
  }
  `]
})
export class OptionsComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
