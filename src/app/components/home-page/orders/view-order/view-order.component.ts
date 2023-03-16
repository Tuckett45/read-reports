import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { DistrictsModel } from 'src/shared/models/districts.model';
import { RegionsModel } from 'src/shared/models/regions.model';
import { StoresModel } from 'src/shared/models/stores.model';
import { OrdersService } from 'src/shared/services/orders.service';

@Component({
  selector: 'view-order',
  templateUrl: './view-order.component.html'
})
export class ViewOrderComponent {



  constructor(private formBuilder: FormBuilder, private authService: AuthService, private orderService: OrdersService){
    }


}