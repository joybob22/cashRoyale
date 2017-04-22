import { Injectable } from '@angular/core';
import {AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods, AngularFire} from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import {DatabaseService} from "./database.service";


@Injectable()
export class AuthService{
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth, public ang: AngularFire, private _database: DatabaseService) {

    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });


  }

  authenticated(): Observable<any> {
    return this.auth$;
  }

  get uId() {
    return this.auth$.getAuth().uid;
  }

  registerUser(credentials: any) {
console.log(credentials);
    return Observable.create(observer => {
      this.ang.auth.createUser({email: credentials.email, password: credentials.password}).then((authData: any) => {
        console.log(authData);
        this.ang.database.list('users').update(authData.uid, {
          name: credentials.name,
          email:"myemail@email.com",
          provider: 'email',
          checkbooks: [{
            name: 'vacation',
            items: [{
              date: '1/12/2017',
              add: true,
              money: 420,
              description: 'stuff',
              newAmount: 520
            }]
          }, {
            name: 'other',
            items: [{
              date: '1/12/2017',
              add: true,
              money: 420,
              description: 'stuff',
              newAmount: 520}]}],
          budget: [{
            categoryName: 'stuff',
            items: [{
              category: 'stuff',
              purchase: 'vegetables',
              quantity: 3,
              price: '$12',
              notes: 'git gud'
            }],
            total: '$36'
          }, {

          }]

        });
        console.log(authData);
        credentials.created = true;
        observer.next(credentials);
        console.log('yes');
      }).catch((error: any) => {
        if (error) {
          console.log(error);
          switch (error.code) {
            case 'INVALID_EMAIL':
              observer.error('E-mail invalid.');
              break;
            case 'EMAIL_TAKEN':
              observer.error('Email is already in use');
              break;
            case 'NETWORK_ERROR':
              observer.error('Could not connect. Please try again later.');
              break;
            default:
              observer.error(error);
          }
        }
      });
    });
  }
  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.ang.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }
  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.auth$.getAuth().auth.displayName;
    } else {
      return '';
    }
  }

}
