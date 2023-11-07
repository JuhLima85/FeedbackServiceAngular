import { Component, Input  } from '@angular/core';
import { SugestaoDTO } from 'src/app/Models/SugestaoDTO';
import { SugestaoService } from 'src/app/Services/sugestao.service';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent {
    
  sugestaoDTO: SugestaoDTO = new SugestaoDTO();
    
  constructor(private service: SugestaoService){}  
  sucesso = false;  

  enviarSugestao() {
  this.service.inserirSugestao(this.sugestaoDTO).subscribe(
    (response: any) => {     
      this.sucesso = true;        
      console.log("Resposta positiva:", response);
    },
    (error: any) => {      
      console.error("Erro ao enviar sugestão:", error);
    }
  );
   }

}
