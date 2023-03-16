import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateOrderComponent } from './components/home-page/orders/create-order/create-order.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: "home", component: HomePageComponent},
  {path: "create-order", component: CreateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
