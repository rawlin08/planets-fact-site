import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-geology',
  template: `
  <div class="images">
    <img [src]="planetComponent.planet.images.planet" alt="">
    <img [src]="planetComponent.planet.images.geology" alt="">
  </div>
  <div>
    <h2>{{ planetComponent.planet.name }}</h2>
    <p>{{ planetComponent.planet.geology.content }}</p>
    <p>Source: <a [href]="planetComponent.planet.geology.source">Wikipedia</a></p>
  </div>
  `,
  styles: [`
  .images {
    position: relative;
  }
  .images > img:last-child {
    position: absolute;
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
export class GeologyComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
