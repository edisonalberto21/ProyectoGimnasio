import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  usuario:firebase.User;
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe((usuario)=>{
      // setTimeout(() => {
      
       console.log(usuario)
       this.usuario = usuario;
      // }, 2000);    
       
     })
  }


  logout() {
    this.auth.signOut();
  }
}
