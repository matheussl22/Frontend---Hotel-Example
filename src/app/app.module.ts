import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxPaginationModule } from 'ngx-pagination';

// Service
import { CheckinComponent } from './checkin/checkin.component';
import { ListaCheckinComponent } from './lista-checkin/lista-checkin.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'cadastroPessoa', component: PessoaComponent},
  {path: 'checkin', component: CheckinComponent},
  {path: '', redirectTo: '/checkin', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CheckinComponent,
    ListaCheckinComponent,
    PessoaComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})



export class AppModule { }
