import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideogameEditComponent } from './videogame-edit/videogame-edit.component';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
const routes: Routes = [
  { path: 'videogame-list', component: VideogameListComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'videogame-edit/:id', component: VideogameEditComponent },
  { path: 'videogame-edit', component: VideogameEditComponent },
  { path: '',   redirectTo: '/videogame-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
