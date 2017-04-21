import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { CheckbookPageComponent } from './checkbook-page/checkbook-page.component';
import { RouterModule } from "@angular/router";
import { DefaultDashboardPageComponent } from './default-dashboard-page/default-dashboard-page.component';

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
      { path: '', redirectTo: 'dashboardPage', pathMatch: 'full'}
      // { path: '**', component: PageNotFoundComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
