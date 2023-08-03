import {Component, OnInit} from '@angular/core';
import {collection, doc, getDoc, getDocs} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import {AngularFirestore, QuerySnapshot} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;


@Component({
  selector: 'app-stories-holder',
  templateUrl: './stories-holder.component.html',
  styleUrls: ['./stories-holder.component.css']
})
export class StoriesHolderComponent {


  stories = [
  {
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nisl ultricies nisl, vitae lacinia nisl nisl nec nisl. Sed vitae nisl auctor, aliqu',
  },
  {
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nisl ultricies nisl, vitae lacinia nisl nisl nec nisl. Sed vitae nisl auctor, aliqu',
  },
  {
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc nisl ultricies nisl, vitae lacinia nisl nisl nec nisl. Sed vitae nisl auctor, aliqu',
  }
];
  }

