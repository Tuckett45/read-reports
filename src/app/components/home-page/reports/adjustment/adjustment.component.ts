import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { DistrictsModel } from 'src/shared/models/districts.model';
import { RegionsModel } from 'src/shared/models/regions.model';
import { StoresModel } from 'src/shared/models/stores.model';
import { OrdersService } from 'src/shared/services/orders.service';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html'
})
export class AdjustmentComponent implements OnInit {
    adjustmentReportData: boolean = false;
    isEmployeeIdRequired: boolean = false;
    stores: StoresModel[] | undefined;
    orderForm!: FormGroup;


    constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private orderService: OrdersService){

    }
    ngOnInit() {
      this.orderForm = this.formBuilder.group({
          store: ['', Validators.required],
          product: ['', Validators.required],
          quantity: [0, Validators.required],
          employeeId: [0]
      });
    }

    getStores(){
      //TODO - Make GET call to retrieve stores
    }

    getProducts(){
      //TODo - make GET call to retrieve products
    }

    save(){
      //TODO - make API call to save order
    }

    addItem(itemadded: object){
      this.orderForm.setValue(itemadded);
    }

    cancelItem(){
      //TODO - remove single item from table
      this.orderForm.reset();
    }

    cancel(){
      //TODo - clear order form/form values
    }


}
