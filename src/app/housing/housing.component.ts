import { Component, OnInit } from '@angular/core';
import { HousingService}     from '../core/services/housing.service';
import { Housing }           from '../shared/models/housing.model';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.scss']
})
export class HousingComponent implements OnInit {
    houses: Housing[];

  constructor(private housingService: HousingService) {
  }

  ngOnInit() {
      this.housingService.getAll().subscribe(houses =>
          this.houses = houses);
  }
}
