import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditVideogameComponent } from './edit-videogame/edit-videogame.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'edit-videogame', component: EditVideogameComponent },
  { path: 'videogame-list', component: VideogameListComponent },
  { path: '',   redirectTo: '/videogame-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    VideogameListComponent,
    EditVideogameComponent,
    PageNotFoundComponent,   
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
