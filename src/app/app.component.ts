import { Component } from '@angular/core';
import { AvaliacaoRecomendacaoDTO } from './Models/AvaliacaoRecomendacaoDTO';
import { SugestaoDTO } from './Models/SugestaoDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontpetro';

  avaliacaoRecomendacao: AvaliacaoRecomendacaoDTO;
  sugestaoDTO: SugestaoDTO;
  constructor() {
    this.avaliacaoRecomendacao = new AvaliacaoRecomendacaoDTO();
    this.sugestaoDTO = new SugestaoDTO();

  }

}
