import { Component, OnInit } from '@angular/core';
import { PlanetComponent } from './planet.component';
import * as planetData from 'src/assets/data.json';

@Component({
  selector: 'app-menu',
  template: `
  <div class="card" *ngFor="let planet of this.data[0]" [routerLink]="'/planets/' + planet.name + '/overview'" (click)="planetComponent.toggleMenu()">
    <div>
      <div class="planetColor" [style.background-color]="planet.color"></div>
      <p>{{ planet.name }}</p>
    </div>
    <img src="assets/images/icons/icon-chevron.svg" alt="">
  </div>
  `,
  styles: [`
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin: 0 20px;
    border-top: 1px solid var(--dark-gray);
    cursor: pointer;
  }
  .card:first-child {
    border-top: none;
    padding: 40px 0 20px 0;
  }
  .card > div {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  p {
    letter-spacing: 1.5px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .planetColor {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  `]
})
export class MenuComponent implements OnInit {
  constructor(public planetComponent: PlanetComponent) {}
  ngOnInit(): void {
    this.data = planetData;
  }

  data:any;
}
