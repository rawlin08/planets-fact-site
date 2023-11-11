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
  styles: [`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    border: 1px solid var(--dark-gray);
  }
  h3 {
    font-family: 'League Spartan', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.727px;
    color: var(--white);
    opacity: 0.5;
  }
  p {
    font-family: 'Antonio', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: -0.75px;
    font-weight: 400;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    div {
      display: block;
      padding: 15px;
    }
    h3 {
      margin: 0 0 10px 0;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    p {
      font-size: 40px;
    }
  }
  `]
})
export class BottomTabsComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
