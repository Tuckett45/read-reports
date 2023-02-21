import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user.model';

export class UserService{
    private user!: UserModel;

    getUser(){
        this.user.ClientId = 2;
        this.user.ClientName = 'Maverik';
    }
}