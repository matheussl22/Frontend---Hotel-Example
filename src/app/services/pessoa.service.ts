import { Injectable } from '@angular/core';
import {Pessoa} from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoas: Pessoa[];
  pessoasFilter: Pessoa[];
  constructor() {
    this.pessoas = [];
    this.pessoasFilter = [];
  }

  getPessoa (pessoa: string) {
    this.getPessoas();
    this.pessoasFilter = this.pessoas.filter(function(el) {
      return el.nome.indexOf(pessoa) > -1;
    });
    if (this.pessoasFilter.length === 0) {
      alert('Pessoa não encontrada');
    }
    return this.pessoasFilter[0];
  }

  getPessoas() {
    if (localStorage.getItem('pessoas') === null) {
      this.pessoas = [];
    } else {
      this.pessoas = JSON.parse(localStorage.getItem('pessoas'));
    }
    return this.pessoas;
  }

  addPessoa(pessoa: Pessoa) {
    this.pessoas.push(pessoa);
    let pessoas = [];
    if (localStorage.getItem('pessoas') === null) {
      pessoas = [];
      pessoas.push(pessoa);
      localStorage.setItem('pessoas', JSON.stringify(pessoas));
    } else {
      pessoas = JSON.parse(localStorage.getItem('pessoas'));
      pessoas.push(pessoa);
      localStorage.setItem('pessoas', JSON.stringify(pessoas));
    }
  }

  deletePessoa(pessoa: Pessoa) {
    for (let i = 0; i < this.pessoas.length; i++) {
      if (pessoa === this.pessoas[i]) {
        this.pessoas.splice(i, 1);
        localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
      }
    }
  }
}
