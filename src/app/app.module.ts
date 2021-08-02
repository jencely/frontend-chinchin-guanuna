import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//primg
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
//componentes propio
import { ProjectComponent } from './project/project.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

@NgModule({//declara el modulo para que funcione el componente
  declarations: [
    AppComponent,
    ProjectComponent,
    AuthorComponent,
    BookComponent,
    MainComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent
  ],
  imports: [//aqui a ,os modulos que quiero que utilicen estos componentes
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
