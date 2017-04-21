import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AngularFireService {

  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) { }

}
