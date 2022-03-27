import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Exp} from '../../exp';
import { UiService } from 'src/app/Services/ui.service';
import { EditExpService } from 'src/app/Services/edit-exp.service';



@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {
  @Output() onAddExp : EventEmitter<Exp> = new EventEmitter();
  puesto:string ="";
  empresa:string ="";
  periodo:string ="";
  tareas:string ="";
  logo:string="";
  showAddExp:boolean =false;
  subscription?: Subscription;

  @Output() btnClick = new EventEmitter();

  constructor(
    private uiService:UiService,
    private editExpService: EditExpService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value =>this.showAddExp = value)
  }

  ngOnInit(): void {}
  
  
  toggleAddExp(){
    this.uiService.toggleAddExp();
  }
  onSubmit(){
    if(this.puesto.length === 0){
      alert("Please add a puesto")
    }
    else if(this.empresa.length === 0){
      alert("Please add a empresa")
  }
    else if(this.periodo.length === 0){
      alert("Please add periodo")
  }
  else if(this.tareas.length === 0){
    alert("Please add tareas")
  }  
  if(
    this.logo.length === 0
    && this.tareas.length>1 
    && this.periodo.length>1 
    && this.empresa.length>1 
    && this.puesto.length>1 
    )
      {
        this.logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4VQ5dC2ZMKxY_fQ8VjybwLyIeUPUp0i7kBYEkRyVSLCYav2fI7wprFDOhbiADfFvUm0&usqp=CAU"
        const {puesto, empresa, logo, periodo, tareas} =this;
        const newExp ={puesto, empresa, logo, periodo, tareas};
        this.onAddExp.emit(newExp);
        this.puesto ="";
        this.empresa ="";
        this.periodo ="";
        this.tareas ="";
        this.logo="";
        this.toggleAddExp();
      }
      else {
        const {puesto, empresa, logo, periodo, tareas} =this;
        const newExp ={puesto, empresa, logo, periodo, tareas};
        this.onAddExp.emit(newExp);
      }
  }
  cancelarBtn(){
    this.puesto ="";
    this.empresa ="";
    this.periodo ="";
    this.tareas ="";
    this.logo="";
    this.toggleAddExp()
  }
}


  




