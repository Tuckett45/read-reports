import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { DistrictsModel } from 'src/shared/models/districts.model';
import { RegionsModel } from 'src/shared/models/regions.model';
import { StoresModel } from 'src/shared/models/stores.model';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    // headerComponent: HeaderComponent;

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    }

}
