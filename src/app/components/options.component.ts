import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  template: `
  <a routerLink="./overview" routerLinkActive="activeLink">OVERVIEW</a>
  <a routerLink="./internal" routerLinkActive="activeLink">STRUCTURE</a>
  <a routerLink="./geology" routerLinkActive="activeLink">SURFACE</a>
  `,
  styles: [`
  a {
    font-family: 'League Spartan', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    opacity: 0.5;
    padding: 20px 0;
  }
  .activeLink {
    border-bottom: 3px solid var(--light-blue);
    opacity: 1;
  }
  `]
})
export class OptionsComponent {

}
