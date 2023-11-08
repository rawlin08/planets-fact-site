import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-internal',
  template: `
  <img [src]="planetComponent.planet.images.internal" alt="">
  <div>
    <h2>{{ planetComponent.planet.name }}</h2>
    <p>{{ planetComponent.planet.structure.content }}</p>
    <p>Source: <a [href]="planetComponent.planet.structure.source">Wikipedia</a></p>
  </div>
  `,
  styles: [``]
})
export class InternalComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
