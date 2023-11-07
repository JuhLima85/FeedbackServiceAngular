import { Component } from '@angular/core';
import { AvaliacaoRecomendacaoDTO } from 'src/app/Models/AvaliacaoRecomendacaoDTO';
import { AvaliacaoRecomendacaoService } from '../../Services/avaliacao-recomendacao.service';

@Component({
  selector: 'app-avaliacao-recomendacao',
  templateUrl: './avaliacao-recomendacao.component.html',
  styleUrls: ['./avaliacao-recomendacao.component.css']
})
export class AvaliacaoRecomendacaoComponent {

  avaliacaoRecomendacaoDTO: AvaliacaoRecomendacaoDTO = new AvaliacaoRecomendacaoDTO();  
  exibirSugestao: boolean = false;
 
  constructor(private service: AvaliacaoRecomendacaoService) {}

  marcarEscolha(escolha: boolean) {    
    this.avaliacaoRecomendacaoDTO.util = escolha;
    
    this.service.createAvaliacaoRecomendacao(this.avaliacaoRecomendacaoDTO).subscribe(
      (avaliacaoRecomendacaoDTO: AvaliacaoRecomendacaoDTO) => {
        console.log("Avaliação cadastrada com sucesso!");
        if (this.avaliacaoRecomendacaoDTO.util) {
          alert("Você marcou Sim. Obrigado pela sua avaliação!");
        } else {
          this.exibirSugestao = true;         
        }
      },
      (error: any) => {
        console.log("Erro ao cadastrar avaliação: " + error);
      }
    );
  } 
   
}