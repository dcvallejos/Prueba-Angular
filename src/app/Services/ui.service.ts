import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddExp:boolean = false;
  private subject = new Subject<any>()
  
  constructor() { }

  toggleAddExp():void {
    this.showAddExp = !this.showAddExp;
    this.subject.next(this.showAddExp);
  }
  
  onToggle():Observable<any> {return this.subject.asObservable();}

}
