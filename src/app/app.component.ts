import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  message!: string;
  newMessage!: string;
  nome: string = 'abc';

  ngOnInit() {
    this.message = 'This is a interpolated value';
  }

  // event binding
  onClick(event: Event) {
    console.log(event);
  }

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    this.newMessage = value;
  }



}
