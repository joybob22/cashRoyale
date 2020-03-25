import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { AddCheckbookComponent } from './add-checkbook/add-checkbook.component';
import {DatabaseService} from "./angular-fire/database.service";
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const firebaseConfig = {
  
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
    DefaultDashboardPageComponent,
    AddCheckbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
        RouterModule.forRoot([
      { path: 'homePage', component: HomePageComponent},
      { path: 'loginPage', component: LoginPageComponent},
      { path: 'registerPage', component: RegisterPageComponent},
      { path: 'dashboardPage', component: DashboardPageComponent,
        children: [
          { path: 'defaultDashboardPage', component: DefaultDashboardPageComponent},
          { path: 'checkbookPage', component: CheckbookPageComponent},
          { path: 'budgetPage', component: BudgetPageComponent},
          { path: 'addCheckbook/:index', component: AddCheckbookComponent},
          { path: '', redirectTo: 'defaultDashboardPage', pathMatch: 'full'}
        ]
      },
      { path: '', redirectTo: 'homePage', pathMatch: 'full'}
      // { path: '**', component: PageNotFoundComponent}
    ], {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [
    DatabaseService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
