import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-planet',
  template: `
  
  `,
  styles: [``]
})
export class PlanetComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let uid:any = params.get('planet');
    });
  }
}
