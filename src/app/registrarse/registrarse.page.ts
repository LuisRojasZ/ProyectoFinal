import { Component, OnInit } from '@angular/core';
import {ApiService} from '../Servicios/api.service';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

 mensajes:any[]=[];
 apellido: any="";
 nombre: string="";
 username:string="";
 correo: any="";
 contra: any="";
 rpassword: string="";
  constructor( private servicioservice: ApiService) { }
  ngOnInit(): void {
    this.servicioservice.getnuevo(this.apellido,this.nombre,this.username,this.correo,this.contra,this.rpassword).subscribe( (post:any)=> {
     console.log(post);
     this.mensajes=post.Estatus;
     if(post.estado==false&&post.detalle[0]=="Correo o password incorrectos")
     {
      alert("Usuario O Contraseña Erroneo");
     }
     if(post.estado==true){
        document.location.href="iniciosesion";
       
     }
    });
    
  }

}
