import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';
import { Carpooling }        from '../../shared/models/carpooling.model';
import { AnnounceComponent } from '../sub-component/abstract.component';

@Component({
    selector   : 'campus-carpooling-announce',
    templateUrl: './carpooling-announce.component.html',
    styleUrls  : ['./carpooling-announce.component.scss']
})
export class CarpoolingAnnounceComponent  implements OnInit, AnnounceComponent {

    model: Carpooling;
    subForm: NgForm;

    constructor() { }

    ngOnInit() {
    }

}
