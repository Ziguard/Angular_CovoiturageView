import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';
import { Service }           from '../../shared/models/service.model';
import { AnnounceComponent } from '../sub-component/abstract.component';

@Component({
    selector   : 'campus-service-announce',
    templateUrl: './service-announce.component.html',
    styleUrls  : ['./service-announce.component.scss']
})
export class ServiceAnnounceComponent implements OnInit, AnnounceComponent {

    constructor() {
    }

    ngOnInit() {
    }

    model: Service;
    subForm: NgForm;


}
