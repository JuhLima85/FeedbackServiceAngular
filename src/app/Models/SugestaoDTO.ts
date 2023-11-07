export class SugestaoDTO {
    alarmeId: number = 0;
    dataHoraSugestao: Date = new Date();
    usuario: string = 'Usuário 1';
    sugestao: string = '';
    idAprovador: number = 2;
    resolvido: boolean = false;
}