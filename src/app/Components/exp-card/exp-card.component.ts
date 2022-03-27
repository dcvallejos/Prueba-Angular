import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import{Exp} from '../../exp'
import{EditExpService} from '../../Services/edit-exp.service'
import{UiService} from 'src/app/Services/ui.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.css']
})
export class ExpCardComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  showAddExp: boolean = false;
  showEditExp: boolean = false;
  subscription?: Subscription;
  faPlusCircle = faPlusCircle;
  exps: Exp[]= [];
  constructor
  (
    private EditExpService: EditExpService,
    private UiService: UiService
    ) 
  {
    this.subscription = this.UiService.onToggle()
    .subscribe(value => 
      this.showAddExp = value)
  }
    mensaje!: number;
    ngOnInit(): void {
    this.EditExpService.getExps().subscribe((exps) =>{
      this.exps = exps;
    });
  }
  deleteExp(exp:Exp){
    this.EditExpService.deleteExp(exp).subscribe(
      () =>{
      this.exps = this.exps.filter((t) =>
      (t.id !== exp.id)
      )})
  }
  addExp(exp:Exp){
    this.EditExpService.addExp(exp).subscribe((exp) =>{
      this.exps.push(exp);
    })
  }
  toggleAddExp(){
    this.UiService.toggleAddExp();
  }

  
}
