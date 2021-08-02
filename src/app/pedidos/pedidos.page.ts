import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
 nombrel: any="";
 edil: any="";
 numl: any="";
 correo: any="";
 matri: any="";
 alumno: any="";
  constructor() { }

  ngOnInit(): void {

    if(this.nombrel==""||this.edil==""||this.numl==""||this.correo==""||this.matri==""||this.alumno=="")
    {
      alert("Ingresa datos Correspondientes");
    }
    else{
      alert("Libro encargado  pase a biblioteca por el ")
       document.location.href="/home";
    }
  }

}
