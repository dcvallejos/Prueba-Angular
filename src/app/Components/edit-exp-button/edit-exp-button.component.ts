import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faPencil} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-exp-button',
  templateUrl: './edit-exp-button.component.html',
  styleUrls: ['./edit-exp-button.component.css']
})
export class EditExpButtonComponent implements OnInit {
  @Output() btnClickEdit = new EventEmitter();
  faPencil = faPencil;
  mensaje = 2;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClickEdit.emit(this.mensaje);
  }
}
