import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';

import { NetworkService } from './service/network-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NoteListComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create-account', component: LoginComponent },
      { path: 'note-list', component: NoteListComponent, data: { isAddingAuthorized: true } }
    ])
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
