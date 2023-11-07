import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SugestaoComponent } from './Components/sugestao/sugestao.component';
import { AvaliacaoRecomendacaoComponent } from './Components/avaliacao-recomendacao/avaliacao-recomendacao.component'
import { AvaliacaoRecomendacaoService } from './Services/avaliacao-recomendacao.service';
import { HttpClientModule } from '@angular/common/http';
import { SugestaoService } from './Services/sugestao.service';

@NgModule({
  declarations: [
    AppComponent,
    SugestaoComponent,
    AvaliacaoRecomendacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AvaliacaoRecomendacaoService,
    SugestaoService
  ],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
