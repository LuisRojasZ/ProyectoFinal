import { Component, OnInit } from '@angular/core';
import {ApiService} from '../Servicios/api.service';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {
 mensajes:any[]=[];
 correo: any="";
 contra: any="";
  constructor( private servicioservice: ApiService) { }
  ngOnInit(): void {
    this.servicioservice.getlogin(this.correo,this.contra).subscribe( (post:any=[1])=> {
     console.log(post);
     this.mensajes=post.Estatus;
     if(post.estado==false&&post.detalle[0]=="Correo o password incorrectos")
     {
      alert("Usuario O Contraseña Erroneo");
     }
     if(post.estado==true){
        document.location.href="/home";
       
     }
    });
    
  }
}
