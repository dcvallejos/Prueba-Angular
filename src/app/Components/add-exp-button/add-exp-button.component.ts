import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-exp-button',
  templateUrl: './add-exp-button.component.html',
  styleUrls: ['./add-exp-button.component.css']
})
export class AddExpButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter<number>();
  faPlusCircle = faPlusCircle;
  constructor() { }
  ngOnInit(): void {}
  
  onClick(mensaje: number): void {
    this.btnClick.emit(mensaje);
  }

  }

