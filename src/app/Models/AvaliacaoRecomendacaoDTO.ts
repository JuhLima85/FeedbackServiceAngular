export class AvaliacaoRecomendacaoDTO {  
    alarmeId: number = 5;
    usuario: string = 'Usuario 1';
    util: boolean = true;
    dataHora: Date = new Date();
  
    constructor() {
      // Instancia a data atual
      this.dataHora = new Date();
    }
  
}