import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CursoComponent } from './curso/curso.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CursoComponent,
    AppComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
