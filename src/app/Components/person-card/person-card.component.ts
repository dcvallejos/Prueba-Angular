import { Component, OnInit } from '@angular/core';
import { FetcherService } from 'src/app/Services/fetcher.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  miPorfolio:any;
  
  constructor(private fetcher:FetcherService) { }

  ngOnInit(): void {
    this.fetcher.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    })
  }

}
