import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
  <div>
    <app-donut-card [donut]="donuts[0]"></app-donut-card>
  </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8aDc',
        name: 'Just chocolate donut',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.',
      },
      {
        id: 'y7aTg',
        name: 'Glazed Fugde',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection.',
      },
      {
        id: 'y5AHj',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        description: 'Chocolate drizzled with caramel.',
      },
    ];
  }
}
