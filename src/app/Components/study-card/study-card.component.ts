import { Component, OnInit } from '@angular/core';
import { FetcherService } from 'src/app/Services/fetcher.service';

@Component({
  selector: 'app-study-card',
  templateUrl: './study-card.component.html',
  styleUrls: ['./study-card.component.css']
})

export class StudyCardComponent implements OnInit {
  miEducacion:any;
  constructor(private fetcher:FetcherService) { }

  ngOnInit(): void {
    
    this.fetcher.obtenerDatos().subscribe(data =>{
      this.miEducacion =data.estudios;
    })
  }
}
