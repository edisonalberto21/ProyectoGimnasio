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

  constructor(public auth: AngularFireAuth) {
  }
  login() {
   // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   this.auth.signInWithEmailAndPassword('edisonalberto21@hotmail.com','Sharepoint?1234')
    
  }
  logout() {
    this.auth.signOut();
  }
}
