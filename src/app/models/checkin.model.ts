import {Pessoa} from './pessoa.model';

export class Checkin {
    pessoa: Pessoa;
    dataEntrada: Date;
    dataSaida: Date;
    adicionalVeiculo: boolean;
    valorTotal: number;
}
