import { Component, OnInit } from '@angular/core';
import {Checkin} from '../models/checkin.model';
import {PessoaService} from '../services/pessoa.service';
import {CheckinService} from '../services/checkin.service';
import {Pessoa} from '../models/pessoa.model';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  private countendweek: number;
  private countweek: number;
  private checkin: Checkin;
  private pessoas: Pessoa[];
  constructor(public pessoaService: PessoaService,
              public checkinService: CheckinService) {}

  ngOnInit() {
    this.pessoas = this.pessoaService.getPessoas();
  }

  addCheckin(pessoa: HTMLInputElement,
             newAdicionarVeiculo: HTMLInputElement,
             newDataEntrada: HTMLInputElement,
             newDataSaida: HTMLInputElement) {
    this.checkin = new Checkin();
    this.checkin.pessoa = this.pessoaService.getPessoa(pessoa.value);
    this.checkin.adicionalVeiculo = newAdicionarVeiculo.checked;
    this.checkin.dataEntrada = new Date(newDataEntrada.value);
    this.checkin.dataSaida = new Date(newDataSaida.value);
    this.checkin.valorTotal = this.calcValue(this.checkin);
    this.checkinService.addCheckin(this.checkin);
    pessoa.value = '';
    newAdicionarVeiculo.value = '';
    newDataEntrada.value = '';
    newDataSaida.value = '';
    return false;
  }

  calcValue(checkin: Checkin) {
    this.calcCounts(checkin.dataEntrada, checkin.dataSaida);
    const valorSemana = this.calcDiariaWeek();
    const valorFinalSemana = this.calcDiariaEndweek();
    const valorSemanaCarro = this.calcCarWeek(checkin.adicionalVeiculo);
    const valorFinalSemanaCarro = this.calcCarEndweek(checkin.adicionalVeiculo);
    const valorExtra = this.calcExtra(checkin.dataSaida);

    return valorSemana + valorFinalSemana + valorSemanaCarro + valorFinalSemanaCarro + valorExtra;
  }

  calcDiariaEndweek() {
    return this.countendweek * 150;
  }

  calcDiariaWeek() {
    return this.countweek * 120;
  }

  calcCarEndweek(possuiCarro: Boolean) {
    if (possuiCarro) {
      return this.countendweek * 20;
    }
    return 0;
  }

  calcCarWeek(possuiCarro: Boolean) {
    if (possuiCarro) {
      return this.countweek * 15;
    }
    return 0;
  }

  calcExtra(saida: Date) {
    const valorExtraHours = saida.getHours() >= 16;
    const valorExtraMinutes = saida.getMinutes() > 30;
    if (valorExtraHours && valorExtraMinutes) {
      return (this.countendweek + this.countweek) * 3;
    }
    return 0;
  }

  isEndWeek(date: Date) {
    return date.getDay() === 6 || date.getDay() === 0;
  }

  private addDays(currentDate) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    return date;
  }

  calcCounts(entrada: Date, saida: Date) {
    this.countweek = 0;
    this.countendweek = 0;
    let dataAtual: Date = entrada;
    while (dataAtual <= saida) {
      if (this.isEndWeek(dataAtual)) {
        this.countendweek++;
      } else {
        this.countweek++;
      }
      dataAtual = this.addDays(dataAtual);
    }
  }

}
