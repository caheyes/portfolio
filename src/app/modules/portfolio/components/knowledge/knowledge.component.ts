import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
selector: 'knowledge',
standalone: true,
imports: [],
templateUrl: './knowledge.component.html',
styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento em html5'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento em javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento em angular'
    },
    {
      src: 'assets/icons/knowledge/vue.svg',
      alt: 'Ícone de conhecimento em vue'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento em css3'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento em sass'
    },
    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Ícone de conhecimento em bootstrap'
    },
  ])
}