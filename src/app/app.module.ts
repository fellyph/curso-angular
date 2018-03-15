import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [TestComponent,
    CursoComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CursoComponent]
})
export class AppModule { }
