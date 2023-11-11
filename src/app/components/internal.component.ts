import { Component } from '@angular/core';
import { PlanetComponent } from './planet.component';

@Component({
  selector: 'app-internal',
  template: `
  <div class="img">
    <img [src]="planetComponent.planet.images.internal" alt="">
  </div>
  <div class="main">
    <div class="content">
      <h2>{{ planetComponent.planet.name }}</h2>
      <p>{{ planetComponent.planet.structure.content }}</p>
      <div class="source">
        <p>Source : <a [href]="planetComponent.planet.structure.source">Wikipedia</a></p>
        <img id="source" src="assets/images/icons/icon-source.svg" alt="">
      </div>
    </div>
    <app-tabs></app-tabs>
  </div>
  `,
  styles: [`
  .img {
    display: grid;
    place-content: center;
    height: 304px;
  }
  app-tabs {
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
    width: 150px;
    height: auto;
  }
  #source {
    width: 12px;
    margin: 0;
  }
  .source {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    .img {
      height: 400px;
    }
    img {
      width: 200px;
    }
    h2, p {
      text-align: left;
    }
    .source {
      justify-content: flex-start;
    }
    app-tabs {
      display: block;
      align-self: center;
    }
    .main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 70px;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    img {
      width: 300px;
    }
    .main {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    h2 {
      font-size: 70px;
    }
    app-tabs {
      align-self: normal;
    }
    .img {
      margin: 0 40px 0 0;
      height: 100%;
    }
  }
  `]
})
export class InternalComponent {
  constructor(public planetComponent: PlanetComponent) {}
}
