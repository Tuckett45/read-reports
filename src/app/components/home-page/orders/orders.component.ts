import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { DistrictsModel } from 'src/shared/models/districts.model';
import { RegionsModel } from 'src/shared/models/regions.model';
import { StoresModel } from 'src/shared/models/stores.model';
import { OrdersService } from 'src/shared/services/orders.service';
import { faShoppingCart as faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'orders-section',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {

  faShoppingCart = faShoppingCart;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private orderService: OrdersService){
    }


}
