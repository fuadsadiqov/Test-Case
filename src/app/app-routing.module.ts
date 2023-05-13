import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartItemComponent } from './components/chart-item/chart-item.component';

const routes: Routes = [
  {path: 'item', component: ChartItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
