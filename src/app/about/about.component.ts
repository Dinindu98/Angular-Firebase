import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import *as fiebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAWCjOyBMiQbNE_EqRixy_-gmEs5wjP62w",
  authDomain: "fir-course-3c43e.firebaseapp.com",
  databaseURL: "https://fir-course-3c43e.firebaseio.com",
  projectId: "fir-course-3c43e",
  storageBucket: "fir-course-3c43e.appspot.com",
  messagingSenderId: "849377342254",
  appId: "1:849377342254:web:490310a09fdf9718"
};

fiebase.initializeApp(config);

const db = firebase.firestore();
const 

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
