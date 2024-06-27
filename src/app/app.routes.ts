import { Routes } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blocks', pathMatch: 'full' },
  { path: 'blocks', component: BlocksComponent },
  { path: 'table', component: TableComponent },
  { path: 'detail/:username', component: DetailComponent }
];
