import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularImportsModule} from './angular-imports/angular-imports.module'


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


import { UserSummaryComponent } from './user-summary/user-summary.component';
import { RouteErrorComponent } from './route-error/route-error.component';
import { AppUtilitiesComponent } from './app-utilities/app-utilities.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'utilities', component: AppUtilitiesComponent },
  { path: 'users',      component: UserSummaryComponent },
   { path: 'error', component: RouteErrorComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        UserSummaryComponent,
        RouteErrorComponent,
        AppUtilitiesComponent,
        HomeComponent,
        UserDetailComponent,
        AddUserComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        AngularImportsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }