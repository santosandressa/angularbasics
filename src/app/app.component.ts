import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
    <h1 (click)="handleClick()">{{ message }}</h1>
    <h1 [innerText]="message.length ? message : 'Nothing here' "></h1>
    <h1>{{ newMessage }}</h1>
    <input [value]="message" (input)="handleInput($event)">
  </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {

  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message = 'Hello Angular!';
  }

  handleClick(){
    console.log('clicked');
  }

  handleInput(event: Event){
    const { value } = event.target as HTMLInputElement;
    this.newMessage = value;
  }
}
