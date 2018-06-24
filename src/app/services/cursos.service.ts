import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../cursos/curso';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursoCurtido = new EventEmitter<Curso>();
  public favoritarCurso = new EventEmitter<Curso>();
  public dataUrl = 'assets/config.json';
  public cursosData = [];
  public cursosParse = [];

  constructor(private http: HttpClient) { }

  public getCursos() {
    this.http.get(this.dataUrl);

    //return this.cursos.slice();
  }

  public getCurso(id: number) {
    //return this.cursos.find(curso => curso.id === id);
  }
}
