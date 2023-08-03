import { Injectable } from '@angular/core';
import {collection, Firestore, getDocs} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private firestore : Firestore) { }

  getData(path: string): Observable<any[]> {
    const dataCollection = collection(this.firestore, path);

    return from(
      getDocs(dataCollection).then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
      })
    );
  }

  async getCollection(path: string): Promise<any[]> {
    const dataCollection = collection(this.firestore, path);
    const querySnapshot = await getDocs(dataCollection);
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({id: doc.id, ...doc.data()});
    });
    return data;
  }
}

