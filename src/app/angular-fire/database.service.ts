import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';

@Injectable()
export class DatabaseService {
    usersObservable: Observable<any[]>;
    constructor(db: AngularFireDatabase) {
        this.usersObservable = db.list('users').valueChanges();
    }
    
}
