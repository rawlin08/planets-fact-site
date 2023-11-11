import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-geology',
  template: `
  <div class="images">
    <img [src]="planetComponent.planet.images.planet" alt="">
    <img [src]="planetComponent.planet.images.geology" alt="">
  </div>
  <div class="main">
    <div class="content">
      <h2>{{ planetComponent.planet.name }}</h2>
      <p>{{ planetComponent.planet.geology.content }}</p>
      <div class="source">
        <p>Source : <a [href]="planetComponent.planet.structure.source">Wikipedia</a></p>
        <img id="source" src="assets/images/icons/icon-source.svg" alt="">
      </div>
    </div>
    <div class="tabs">
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
    </div>
  </div>
  `,
  styles: [`
  .images {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .images > img:last-child {
    position: absolute;
    width: 75px;
    height: auto;
    margin: 0;
    top: 185px;
  }
  .tabs {
    display: none;
  }
  h2, p {
    text-align: center;
  }
  h2 {
    font-family: 'Antonio', sans-serif;
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  .content > p:nth-child(2) {
    margin: 16px 0 32px 0;
  }
  .source > p {
    font-size: 12px;
    opacity: 0.5;
  }
  a {
    text-decoration: underline;
  }
  img {
    width: 111px;
    height: auto;
    margin: 100px 0;
  }
  #source {
    width: 12px;
    margin: 0;
  }
  .source {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 28px 0;
    gap: 5px;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    h2, p {
      text-align: left;
    }
    .source {
      justify-content: flex-start;
    }
    .tabs {
      display: block;
      margin: 56px 0 0 0;
    }
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
    .main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 70px;
    }
    a > p {
      font-weight: 400;
      letter-spacing: 2px;
      font-size: 11px;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    .main {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .tabs {
      margin: 0 0 67px 0;
    }
    h2 {
      font-size: 70px;
    }
  }
  `]
})
export class GeologyComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
