import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {EXP} from '../../mock-exp'
import{Exp} from '../../exp'
import{UiService} from 'src/app/Services/ui.service'

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  faPencil = faPencil;
  faTimes = faTimes;
  @Input() exp: Exp= EXP[0];
  @Output() onDeleteExp: EventEmitter<Exp> = new EventEmitter();
  @Output() onEditExp: EventEmitter<Exp> = new EventEmitter();
  constructor(   private UiService: UiService) { }

  ngOnInit(): void {
  }
  onDelete(exp:Exp){
    this.onDeleteExp.emit(exp);
  }
  toggleAddExp(){
    this.UiService.toggleAddExp();
  }
  




}
