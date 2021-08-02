import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from './project/project.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'authors',
    component: AuthorComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],//van declarados modulos
  exports: [RouterModule]//este disponible para otros lados
})
export class AppRoutingModule { }

//rutas sirven para acceder a la bb.dd