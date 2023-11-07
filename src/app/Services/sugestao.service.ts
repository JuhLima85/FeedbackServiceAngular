import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SugestaoDTO } from '../Models/SugestaoDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SugestaoService {  

   apiUrl: string = environment.base_api + "/sugestao";   

   constructor(private http: HttpClient) { } 
 
   inserirSugestao(sugestaoDTO: SugestaoDTO): Observable<SugestaoDTO> {
    console.log("Entrou no service SUGESTÃO !!!");
     return this.http.post<SugestaoDTO>(`${this.apiUrl}`, sugestaoDTO);
     }

}
