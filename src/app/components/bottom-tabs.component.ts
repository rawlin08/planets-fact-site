import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-bottom-tabs',
  template: `
  <div>
    <h3>ROTATION TIME</h3>
    <p>{{ planetComponent.planet.rotation }}</p>
  </div>
  <div>
    <h3>REVOLUTION TIME</h3>
    <p>{{ planetComponent.planet.revolution }}</p>
  </div>
  <div>
    <h3>RADIUS</h3>
    <p>{{ planetComponent.planet.radius }}</p>
  </div>
  <div>
    <h3>AVERAGE TEMP.</h3>
    <p>{{ planetComponent.planet.temperature }}</p>
  </div>
  `,
  styles: [``]
})
export class BottomTabsComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
