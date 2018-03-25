export class Curso {
  public nome: string;
  public categoria: string;
  public cargaHoraria: number;
  public thumbnail: string;
  public dataCurso: string;

  constructor (nome: string, categoria: string,
              cargaHoraria: number, thumbnail: string,
              dataCurso: string) {
    this.nome = nome;
    this.categoria = categoria;
    this.cargaHoraria = cargaHoraria;
    this.thumbnail = thumbnail;
    this.dataCurso = this.dataCurso;
  }
}
