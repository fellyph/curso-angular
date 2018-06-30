import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../cursos/curso';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursoCurtido = new EventEmitter<Curso>();
  public favoritarCurso = new EventEmitter<Curso>();
  public dataUrl = 'assets/data/cursos.json';
  public cursos: Curso[];

  constructor(private http: HttpClient) { }

  public getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.dataUrl);
  }

  public getCurso(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }
}
