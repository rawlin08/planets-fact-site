import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import * as planetData from 'src/assets/data.json';

@Component({
  selector: 'app-planet',
  template: `
  <header>
    <app-heading></app-heading>
  </header>
  <app-menu *ngIf="menuOpened == true"></app-menu>
  <main>
    <div *ngIf="menuOpened == false">
      <app-options></app-options>
      <router-outlet></router-outlet>
      <app-bottom-tabs></app-bottom-tabs>
    </div>
  </main>
  `,
  styles: [``]
})
export class PlanetComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.uid = params.get('planet');
      this.uid = this.uid.toLowerCase();
      let capitalized = this.uid.charAt(0).toUpperCase() + this.uid.slice(1);
      this.data = planetData;
      this.planet = this.data[0].find((element:any) => element.name == capitalized);
      console.log(this.planet);
    });
  }
  uid:any;
  data:any;
  planet:any;
  menuOpened:boolean = false;

  toggleMenu() {
    if (this.menuOpened == false) {
      this.menuOpened = true;
    }
    else {
      this.menuOpened = false;
    }
  }
}
