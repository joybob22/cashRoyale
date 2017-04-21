import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { CheckbookPageComponent } from './checkbook-page/checkbook-page.component';
import { RouterModule } from "@angular/router";
import { DefaultDashboardPageComponent } from './default-dashboard-page/default-dashboard-page.component';
import { AngularFireService } from './angular-fire/angular-fire.service';


export const firebaseConfig = {
  apiKey: "AIzaSyD2ySAfpDimxQ1cIMlbmajh8nGN1vyAzV0",
  authDomain: "cash-royale.firebaseapp.com",
  databaseURL: "https://cash-royale.firebaseio.com",
  projectId: "cash-royale",
  storageBucket: "cash-royale.appspot.com",
  messagingSenderId: "977860527900"
};
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    BudgetPageComponent,
    CheckbookPageComponent,
    DefaultDashboardPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'homePage', component: HomePageComponent},
      { path: 'loginPage', component: LoginPageComponent},
      { path: 'registerPage', component: RegisterPageComponent},
      { path: 'dashboardPage', component: DashboardPageComponent,
        children: [
          { path: 'defaultDashboardPage', component: DefaultDashboardPageComponent},
          { path: 'checkbookPage', component: CheckbookPageComponent},
          { path: 'budgetPage', component: BudgetPageComponent},
          { path: '', redirectTo: 'defaultDashboardPage', pathMatch: 'full'}
        ]
      },
      { path: '', redirectTo: 'homePage', pathMatch: 'full'}
      // { path: '**', component: PageNotFoundComponent}
    ], {useHash: true}),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
