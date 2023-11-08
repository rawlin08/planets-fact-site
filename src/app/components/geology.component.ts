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
  `]
})
export class GeologyComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
