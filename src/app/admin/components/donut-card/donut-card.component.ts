import { Donut } from './../../models/donut.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-donut-card',
  template: `
  <div>
      <div class="donut-card">
        <img
          src="/assets/img/{{ donut.icon }}.svg"
          alt="donut.name"
          class="donut-icon-card"
        />
        <div>
          <p class="donut-card-name">{{ donut.name }}</p>
          <p class="donut-card-price">{{ donut.price }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutCardComponent {

  @Input() donut!: Donut;

  constructor(){}
}
