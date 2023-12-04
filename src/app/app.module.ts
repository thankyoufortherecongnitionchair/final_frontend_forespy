import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MainemailComponent } from './mainemail/mainemail.component';
import { Environment } from './env';
// const env: Environment = {
//   FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID as string,
//   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY as string,
//   FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN as string,
//   FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET as string,
//   FIREBASE_MESSAGING_SENDER_ID: process.env
//     .FIREBASE_MESSAGING_SENDER_ID as string,
//   FIREBASE_APP_ID: process.env.FIREBASE_APP_ID as string,
//   FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID as string,
// };
@NgModule({
  declarations: [AppComponent, MainemailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(Environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
