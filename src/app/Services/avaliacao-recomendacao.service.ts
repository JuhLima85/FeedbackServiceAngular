import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AvaliacaoRecomendacaoDTO } from '../Models/AvaliacaoRecomendacaoDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoRecomendacaoService {
  
  apiUrl: string = environment.base_api + "/avaliacao-recomendacao";  

  constructor(private http: HttpClient) { } 

  createAvaliacaoRecomendacao(avaliacaoRecomendacaoDTO: AvaliacaoRecomendacaoDTO): Observable<AvaliacaoRecomendacaoDTO> {
    return this.http.post<AvaliacaoRecomendacaoDTO>(`${this.apiUrl}`, avaliacaoRecomendacaoDTO);
    }
}
