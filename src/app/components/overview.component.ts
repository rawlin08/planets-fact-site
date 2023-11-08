import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-overview',
  template: `
  <img [src]="planetComponent.planet.images.planet" alt="">
  <div>
    <h2>{{ planetComponent.planet.name }}</h2>
    <p>{{ planetComponent.planet.overview.content }}</p>
    <p>Source: <a [href]="planetComponent.planet.overview.source">Wikipedia</a></p>
  </div>
  `,
  styles: [`
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
  div > p:nth-child(2) {
    margin: 16px 0 32px 0;
  }
  div > p:last-child {
    font-size: 12px;
    opacity: 0.5;
  }
  a {
    text-decoration: underline;
    font-weight: 700;
  }
  img {
    width: 111px;
    height: auto;
    margin: 100px 0;
  }
  `]
})
export class OverviewComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
