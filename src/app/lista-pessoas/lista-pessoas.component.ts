import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../services/pessoa.service';
import {Pessoa} from '../models/pessoa.model';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  public paginaAtual = 0;
  columns: String[];
  pessoas: Pessoa[];
  constructor(public pessoaService: PessoaService) {}

  ngOnInit() {
    this.columns = ['Nome', 'Documento', 'Telefone'];
    this.pessoas = this.pessoaService.getPessoas();
  }

  deletePessoa(pessoa: Pessoa) {
    if (confirm('Você deseja excluir esta pessoa?')) {
      this.pessoaService.deletePessoa(pessoa);
    }
  }

}
