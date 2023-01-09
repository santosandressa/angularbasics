import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
    <header>
      <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo">
    </header>
    <donut-list></donut-list>
  </div> `,
  styles: [
    ` .app {
        background: white;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7
      }

      .header{
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }

      .logo{
        width: 100px;
        height: 80px;
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
