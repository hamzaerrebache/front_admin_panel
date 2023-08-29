import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListClientsComponent} from './list-clients/list-clients.component';
import {AddClientsComponent} from './add-clients/add-clients.component';

const routes: Routes = [
  { path: 'listes', component: ListClientsComponent},
  { path: 'add', component: AddClientsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
