import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from '../components/books-list/books-list.component';
import { BasketComponent } from '../components/basket/basket.component';
import { OrderComponent } from '../components/order/order.component';
import { basket, order } from '../utils/routing';

const routes: Routes = [
  { path: '', component: BooksListComponent, pathMatch: 'full' },
  { path: basket, component: BasketComponent },
  { path: order, component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
