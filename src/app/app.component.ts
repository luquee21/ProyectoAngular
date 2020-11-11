import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appCompras';

  
  ngOnInit(){
    firebase.default.initializeApp({
      apiKey: "AIzaSyD_AjK7nH5xWAEc_DDtS-RSw4BGyyWIdHw",
      authDomain: "comprasapp-9fc31.firebaseapp.com",
      databaseURL: "https://comprasapp-9fc31.firebaseio.com",
      projectId: "comprasapp-9fc31",
      storageBucket: "comprasapp-9fc31.appspot.com",
      messagingSenderId: "1096056903066",
      appId: "1:1096056903066:web:8ef89ea7054079c74c1623",
      measurementId: "G-DTSE6DFCZC"  
    });

    
  }
}
