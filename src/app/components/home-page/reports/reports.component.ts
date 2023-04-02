import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services/auth.service';
import { DistrictsModel } from 'src/shared/models/districts.model';
import { RegionsModel } from 'src/shared/models/regions.model';
import { StoresModel } from 'src/shared/models/stores.model';
import { faList, faHouse, faUser, faBarcode, faRightToBracket, faPlaneUp, faShuffle, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'reports-section',
  templateUrl: './reports.component.html'
})
export class ReportsComponent {
  faList = faList;
  faHouse = faHouse;
  faUser = faUser;
  faBarcode = faBarcode;
  faRightToBracket = faRightToBracket;
  faPlaneUp = faPlaneUp;
  faShuffle = faShuffle;
  faDollarSign = faDollarSign;

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    }

}
