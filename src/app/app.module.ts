import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';

import { NetworkService } from './service/network-service';
import { ModelService } from './service/model-service';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NoteListComponent,
    NoteComponent,
    MainComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create-account', component: LoginComponent },
      // { path: 'note-list', component: NoteListComponent, data: { isAddingAuthorized: true } },
      { path: 'main', component: MainComponent, data: { isAddingAuthorized: true }  }
    ])
  ],
  providers: [
    NetworkService,
    ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
