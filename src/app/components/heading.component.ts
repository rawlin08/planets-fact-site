import { Component, OnInit } from '@angular/core';
import { PlanetComponent } from './planet.component';
import * as planetData from 'src/assets/data.json';

@Component({
  selector: 'app-heading',
  template: `
  <h1>THE PLANETS</h1>
  <img [className]="planetComponent.menuOpened ? 'active' : ''" (click)="planetComponent.toggleMenu()" src="assets/images/icons/icon-hamburger.svg" alt="">
  <div class="options">
    <a [routerLink]="'/planets/' + planet.name + '/overview'" *ngFor="let planet of data[0]">{{ planet.name }}</a>
  </div>
  `,
  styles: [`
  .options {
    display: none;
  }
  h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    letter-spacing: -1.05px;
    font-weight: 400;
  }
  img {
    cursor: pointer;
  }
  .active {
    opacity: 0.5;
  }
  
  /* TABLET STYLES */
  @media (min-width: 768px) {
    img {
      display: none;
    }
    .options {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    a {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
  `]
})
export class HeadingComponent implements OnInit {
  constructor(public planetComponent: PlanetComponent) {}
  ngOnInit(): void {
    this.data = planetData;
  }

  data:any;
}
