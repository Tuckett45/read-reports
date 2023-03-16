import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home-page/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthService } from 'src/shared/services/auth.service';
import { OrdersComponent } from './components/home-page/orders/orders.component';
import { ReportsComponent } from './components/home-page/reports/reports.component';
import { AdminToolsComponent } from './components/home-page/admin-tools/admin-tools.component';
import { CreateOrderComponent } from './components/home-page/orders/create-order/create-order.component';
import { OrdersApprovalComponent } from './components/home-page/orders/orders-approval/orders-approval.component';
import { ViewOrderComponent } from './components/home-page/orders/view-order/view-order.component';
import { OrdersService } from 'src/shared/services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomePageComponent,
    OrdersComponent,
    ReportsComponent,
    AdminToolsComponent,
    CreateOrderComponent,
    OrdersApprovalComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,
              OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
