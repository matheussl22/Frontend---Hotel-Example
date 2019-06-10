import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../services/pessoa.service';
import {Pessoa} from '../models/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  private pessoa: Pessoa;
  constructor(public pessoaService: PessoaService) {}

  ngOnInit() {}

  addPessoa(newNome: HTMLInputElement,
            newDocumento: HTMLInputElement,
            newTelefone: HTMLInputElement) {
    this.pessoa = new Pessoa();
    this.pessoa.nome = newNome.value;
    this.pessoa.documento = newDocumento.value;
    this.pessoa.telefone = newTelefone.value;
    this.pessoaService.addPessoa(this.pessoa);
    newNome.value = '';
    newDocumento.value = '';
    newTelefone.value = '';
    return false;
  }

}
