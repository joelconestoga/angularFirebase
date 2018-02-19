
import {Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {

  public messages: Observable<any>;
  public users: Observable<any>;
  public displayName: string;
  public email: string;

  constructor(public af: AngularFireAuth, public afd: AngularFireDatabase) {
    this.messages = this.afd.list('messages').valueChanges();
  }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  logout() {
    return this.af.auth.signOut();
  }

  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.afd.list('messages').push(message);
  }
}

