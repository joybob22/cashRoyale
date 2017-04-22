import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { ChartModule } from 'angular2-highcharts';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { CheckbookPageComponent } from './checkbook-page/checkbook-page.component';
import { RouterModule } from "@angular/router";
import { DefaultDashboardPageComponent } from './default-dashboard-page/default-dashboard-page.component';
import { AuthService } from './angular-fire/auth-service.service';
import {HighchartsStatic} from "angular2-highcharts/dist/HighchartsService";
import { AddCheckbookComponent } from './add-checkbook/add-checkbook.component';
import {DatabaseService} from "./angular-fire/database.service";


export const firebaseConfig = {
  apiKey: "AIzaSyD2ySAfpDimxQ1cIMlbmajh8nGN1vyAzV0",
  authDomain: "cash-royale.firebaseapp.com",
  databaseURL: "https://cash-royale.firebaseio.com",
  projectId: "cash-royale",
  storageBucket: "cash-royale.appspot.com",
  messagingSenderId: "977860527900"
};

export function highChartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;

}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    BudgetPageComponent,
    CheckbookPageComponent,
    DefaultDashboardPageComponent,
    AddCheckbookComponent
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
          { path: 'addCheckbook', component: AddCheckbookComponent},
          { path: '', redirectTo: 'defaultDashboardPage', pathMatch: 'full'}
        ]
      },
      { path: '', redirectTo: 'dashboardPage', pathMatch: 'full'}
      // { path: '**', component: PageNotFoundComponent}
    ], {useHash: true}),
    ChartModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    DatabaseService,
    AuthService,
    { provide: HighchartsStatic,
      useFactory: highChartsFactory},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
