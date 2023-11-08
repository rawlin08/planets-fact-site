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
  styles: [``]
})
export class OverviewComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
