import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoGimnasio';
  usuario:firebase.User;
  cargando:boolean = true;

  constructor(public auth: AngularFireAuth) {
    this.auth.user.subscribe((usuario)=>{
     // setTimeout(() => {
      this.cargando = false;
      console.log(usuario)
      this.usuario = usuario;
     // }, 2000);    
      
    })
  }
 /* login() {
   // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   this.auth.signInWithEmailAndPassword('edisonalberto21@hotmail.com','Sharepoint?1234')
  }*/

 
}
