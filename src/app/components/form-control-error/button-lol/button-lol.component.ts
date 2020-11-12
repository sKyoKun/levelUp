import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-lol',
  templateUrl: './button-lol.component.html',
  styleUrls: ['./button-lol.component.scss']
})
export class ButtonLolComponent implements OnInit {

  @Output() eventClick = new EventEmitter<boolean>();

  constructor() { }

  public sendJoke() {
    this.eventClick.emit(true);
  }

  ngOnInit(): void {
  }

}
