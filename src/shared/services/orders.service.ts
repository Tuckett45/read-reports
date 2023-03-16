import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DistrictsModel } from '../models/districts.model';
import { RegionsModel } from '../models/regions.model';
import { StoresModel } from '../models/stores.model';

export class OrdersService{
    private district!: DistrictsModel;
    private region!: RegionsModel;
    private store!: StoresModel;
    ordersUrl = "orders/";

    constructor(){

    }

    getOrderById(orderId: string){
        //TODO setup orders API
        
    }

    createOrder(order: object){
        //Create order for current store/or selected store
    }

    getOrdersForApproval(){
        //Get orders waiting for approval per store/region/district
        //Tied to permissions?
    }

}