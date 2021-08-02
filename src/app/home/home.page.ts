import { Component } from '@angular/core';
import {ApiService} from '../Servicios/api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

 
    mensajes:any[]=[];
  constructor( private dataService: ApiService) { }

  ngOnInit(): void {
    this.dataService.getlibros().subscribe( (post:any)=> {
      console.log(post);
      this.mensajes=post;
     
    });
    
  }

}
