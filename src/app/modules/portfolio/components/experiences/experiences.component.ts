import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedora de front-end pleno',
        p: 'Banco Alfa - Março 2024 - no momento'
      },
      text: 
      `<p>
          - Desenvolvimento de sistemas web com foco financeiro, telas responsivas para diversos dispositivos mobile, integração de APIs, utilização de metodologias ágeis;
          <br>
          -Manutenção da plataforma e correção de bugs;
          <br>
          - Tecnologias utilizadas: Javascript, Vue.js, Nuxt.js, Angular, HTML5, CSS3, SCSS, Bootstrap, Git, Sourcetree, Azure.
        </p>
      `
    },
    {
      summary: {
        strong: 'Desenvolvedora de front-end júnior',
        p: 'GregHub - Maio 2022 - Dezembro 2023'
      },
      text: 
      `<p>
          - Desenvolvimento de sistemas web, dividido em vários módulos de entrega, telas responsivas para diversos dispositivos mobile, integração de APIs, utilização de metodologias ágeis, scrum e kanban;
          <br>
          - Implementei o aplicativo como uma WebView em Flutter;
          <br>
          -Manutenção da plataforma e correção de bugs;
          <br>
          - Melhoramento da acessibilidade web;
          <br>
          - Participei da definição e planejamento de projetos futuros;
          <br>
          - Tecnologias utilizadas: Vue.js, Javascript, HTML5, CSS3, SCSS, Bootstrap, Git, Sourcetree, Azure, Quasar, Flutter e Dart.
        </p>
      `
    },
    {
      summary: {
        strong: 'Desenvolvedora de front-end júnior',
        p: 'T.group - Março 2022 - Maio 2022'
      },
      text: 
      `<p>
          - Desenvolvimento de sistemas web, dividido em vários módulos de entrega, telas responsivas para diversos dispositivos mobile, integração de APIs, utilização de metodologias ágeis, scrum e kanban;
          <br>
          - Participei da imigração do C# para Vue.js;
          <br>
          -Manutenção da plataforma e correção de bugs;
          <br>
          - Participei da definição e planejamento de projetos futuros;
          <br>
          - Tecnologias utilizadas: Vue.js, Javascript, HTML5, CSS3, SCSS, Bootstrap, Git, Sourcetree, Azure, Quasar.
        </p>
      `
    },
    {
      summary: {
        strong: 'Desenvolvedora de front-end júnior',
        p: 'Wiplay - Junho 2021 - Março 2022'
      },
      text: 
      `<p>
          - Desenvolvimento de sistemas web;
          <br>
          - Manutenção da plataforma e correção de bugs;
          <br>
          -Criação de novos módulos para a plataforma e implementação de gráficos analíticos; 
          <br>
          - Tecnologias utilizadas: HTLM5, CSS3, SASS, Vue.js, Visual Studio Code;
        </p>
      `
    },
  ])
}
