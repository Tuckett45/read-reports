import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DistrictsModel } from '../models/districts.model';
import { RegionsModel } from '../models/regions.model';
import { StoresModel } from '../models/stores.model';

export class AuthService{
    private district!: DistrictsModel;
    private region!: RegionsModel;
    private store!: StoresModel;
    authUrl = "login/authenticate";

    constructor(){

    }

    getAuth(loginForm: object){
        //TODO setup encryption for username/password and decrypt on backend 
    }
}