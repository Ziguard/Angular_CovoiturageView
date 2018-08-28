import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm }                       from '@angular/forms';
import { Housing }                      from '../../shared/models/housing.model';
import { AnnounceComponent }            from '../sub-component/abstract.component';

@Component({
  selector: 'campus-housing-announce',
  templateUrl: './housing-announce.component.html',
  styleUrls: ['./housing-announce.component.scss']
})
export class HousingAnnounceComponent  implements OnInit, AnnounceComponent {

    model: Housing;
    @ViewChild('subForm') subForm: NgForm;

    readonly housingTypes = {
        'FLATSHARING' : "announce.housing.types.flatsharing",
        'RENTING' : "announce.housing.types.renting",
        'SALE': "announce.housing.types.sale"
    };

    constructor() {}

    ngOnInit() {
        this.model.housingType = 'RENTING';
    }

    getDescription() {
        let infos = [];

        if (this.model.rent)
            infos.push(this.model.rent + ' €' +
                ((this.model.housingType != 'SALE') ? '/mois' : ''));

        if (this.model.area)
            infos.push(this.model.area + ' m²');

        if (this.model.roomsCount)
            infos.push(this.model.roomsCount + ' pièce' +
                ((this.model.roomsCount > 1) ? 's' : ''));

        return infos.join(", ");
    }
}
