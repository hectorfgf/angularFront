import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FruitsComponent} from './fruits/fruits.component';
import {FruitsDetailComponent} from './fruits-detail/fruits-detail.component';
import {FruitsAddComponent} from './fruits-add/fruits-add.component';
import {FruitsEditComponent} from './fruits-edit/fruits-edit.component';


const routes: Routes = [
  {
    path: 'fruits',
    component: FruitsComponent,
    data: { title: 'List of Products' }
  },
  {
    path: 'fruits-details/:id',
    component: FruitsDetailComponent,
    data: { title: 'Fruit Details' }
  },
  {
    path: 'fruits-add',
    component: FruitsAddComponent,
    data: { title: 'Add Fruit' }
  },
  {
    path: 'fruits-edit/:id',
    component: FruitsEditComponent,
    data: { title: 'Edit Fruit' }
  },
  { path: '',
    redirectTo: '/fruits',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
