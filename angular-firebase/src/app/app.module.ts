import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AF } from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';

// FIREBASE Config
export const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
  ],
  declarations: [AppComponent, LoginPageComponent, HomePageComponent],
  bootstrap: [AppComponent],
  providers: [AF]
})
export class AppModule { }
