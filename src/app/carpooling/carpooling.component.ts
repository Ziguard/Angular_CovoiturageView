import { Component, OnInit }  from '@angular/core';
import { CarpoolingService }  from '../core/services/carpooling.service';
import { AnnounceStatusEnum } from '../shared/enums/announce-status.enum';
import { RoleKeyEnum }        from '../shared/enums/role-key.enum';
import { Carpooling }         from '../shared/models/carpooling.model';
import { User }               from '../shared/models/user.model';

@Component({
    selector   : 'campus-carpooling',
    templateUrl: './carpooling.component.html',
    styleUrls  : ['./carpooling.component.css']
})
export class CarpoolingComponent implements OnInit {
    carpoolings: Carpooling[];

    constructor(private carpoolingService: CarpoolingService) {
    }

    ngOnInit() {
        this.carpoolingService.getAll().subscribe(carpoolings => this.carpoolings = carpoolings);
        // Retrieves list of carpoolings items
        const driver: User = {
            id       : 0,
            username : 'jj.duchamel',
            lastName : 'Duchamel',
            firstName: 'Jean-Jacques',
            email    : 'jj.duchamel@gmail.com',
            phone    : '0617300159',
            roles    : [
                {
                    key: RoleKeyEnum.USER
                }
            ]
        };
        const today: Date = new Date();
        const tomorrow: Date = new Date();
        tomorrow.setDate(today.getDate() + 1);

        this.carpoolings = [];
        this.carpoolings.push(
            {
                creationDate: new Date(),
                description : 'Lorem ipsum',
                status      : AnnounceStatusEnum.VALIDATED,
                title       : null,
                owner       : driver,
                announceType: 'CARPOOLING',
                driver      : driver,
                lags        : [],
                steps       : [
                    {
                        location          : {
                            address: '11 bd de Strasbourg',
                            city   : 'Rennes',
                            country: 'France'
                        },
                        order             : 0,
                        estimatedDeparture: today,
                        effectiveDeparture: today,
                        estimatedArrival  : null,
                        effectiveArrival  : null
                    },
                    {
                        location          : {
                            address: 'Place de la Bastille',
                            city   : 'Paris',
                            country: 'France'
                        },
                        order             : 1,
                        estimatedDeparture: tomorrow,
                        effectiveDeparture: tomorrow
                    }
                ],
                passengers  : [],
                pictures: []
            }
        );

        this.carpoolings = this.carpoolings.concat(this.carpoolings);
        this.carpoolings = this.carpoolings.concat(this.carpoolings);
        // this.carpoolingService.getCarpoolings().subscribe(carpoolings => {
        //     this.carpoolings = carpoolings;
        // });
    }

}
