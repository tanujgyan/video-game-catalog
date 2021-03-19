import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideogameEditComponent } from './videogame-edit/videogame-edit.component';


const appRoutes: Routes = [
  
  { path: 'videogame-list', component: VideogameListComponent },
  
  { path: 'videogame-edit/:id', component: VideogameEditComponent },
  { path: 'videogame-edit', component: VideogameEditComponent },
  { path: '',   redirectTo: '/videogame-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VideogameListComponent,
  
    PageNotFoundComponent,
  
    VideogameEditComponent,
  
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DataTablesModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
