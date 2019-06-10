import { Component, OnInit } from '@angular/core';
import {Checkin} from '../models/checkin.model';
import {CheckinService} from '../services/checkin.service';

@Component({
  selector: 'app-lista-checkin',
  templateUrl: './lista-checkin.component.html',
  styleUrls: ['./lista-checkin.component.css']
})
export class ListaCheckinComponent implements OnInit {

  public paginaAtual = 0;
  columns: String[];
  checkins: Checkin[];
  constructor(public checkinService: CheckinService) { }

  ngOnInit() {
    this.columns = ['Nome', 'Documento', 'Valor Gasto (R$)'];
    this.checkins = this.checkinService.getCheckins();
  }

  deleteCheckin(checkin: Checkin) {
    if (confirm('Você deseja excluir este checkin?')) {
      this.checkinService.deleteCheckin(checkin);
    }
  }

  filtrarList(aindaPresentes: HTMLInputElement, deixaramHotel: HTMLInputElement) {
      this.checkins = this.checkinService.getCheckins();
      if (aindaPresentes.value !== '') {
          this.checkins = this.checkins
              .filter(function(el) {
              return (el.pessoa.nome.indexOf(aindaPresentes.value) > -1 && new Date(el.dataSaida) > new Date());
              });
      }

      if (deixaramHotel.value !== '') {
          this.checkins = this.checkins
              .filter(function(el) {
                  return (el.pessoa.nome.indexOf(deixaramHotel.value) > -1 && new Date(el.dataSaida) <= new Date());
              });
      }

  }

}
