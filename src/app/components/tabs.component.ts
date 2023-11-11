import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-tabs',
  template: `
  <a class="tab" [routerLink]="'/planets/' + planetComponent.planet.name + '/overview'" routerLinkActive="activeLink" #rlaoverview="routerLinkActive" [style.background-color]="rlaoverview.isActive ? planetComponent.planet.color : ''">
    <p>01</p>
    <p>OVERVIEW</p>
  </a>
  <a class="tab" [routerLink]="'/planets/' + planetComponent.planet.name + '/internal'" routerLinkActive="activeLink" #rlainternal="routerLinkActive" [style.background-color]="rlainternal.isActive ? planetComponent.planet.color : ''">
    <p>02</p>
    <p>INTERNAL STRUCTURE</p>
  </a>
  <a class="tab" [routerLink]="'/planets/' + planetComponent.planet.name + '/geology'" routerLinkActive="activeLink" #rlageology="routerLinkActive" [style.background-color]="rlageology.isActive ? planetComponent.planet.color : ''">
    <p>03</p>
    <p>SURFACE GEOLOGY</p>
  </a>
  `,
  styles: [`
  /* TABLET STYLES */
  @media (min-width: 768px) {
    .tab {
      display: flex;
      align-items: center;
      border: 1px solid var(--dark-gray);
      padding: 8px 20px;
      gap: 20px;
      text-decoration: none;
    }
    .tab:nth-child(2) {
      margin: 20px 0;
    }
    a > p {
      font-weight: 400;
      letter-spacing: 2px;
      font-size: 11px;
      line-height: 22px;
    }
  }
  `]
})
export class TabsComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
