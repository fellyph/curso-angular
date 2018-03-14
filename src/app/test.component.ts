import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `<div class="course">
                <h1>Nome do curso: {{nomeCurso}}</h1>
                <h2>Quantidade de vagas: {{vagas}}</h2>
            </div>`
})

export class TestComponent {
    nomeCurso = 'Angular';
    vagas = 10;
}
