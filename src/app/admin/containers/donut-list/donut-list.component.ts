import { Donut } from './../../models/donut.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-list',
  template: `
  <div>
    <ng-container *ngIf="donuts.length">
      <donut-card [donut]="donuts[0]"></donut-card>
      <donut-card [donut]="donuts[1]"></donut-card>
      <donut-card [donut]="donuts[2]"></donut-card>
    </ng-container>

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
        promo: true,
        description: 'For the pure chocoholic.',
      },
      {
        id: 'y7aTg',
        name: 'Glazed Fugde',
        icon: 'glazed-fudge',
        price: 129,
        promo: false,
        description: 'Sticky perfection.',
      },
      {
        id: 'y5AHj',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        promo: false,
        description: 'Chocolate drizzled with caramel.',
      },
    ];
  }
}
