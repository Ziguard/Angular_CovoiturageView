import { Announce } from './announce.model';
// FLATSHARING, RENTING, SALE
export declare type HousingTypeKey = 'FLATSHARING' | 'RENTING' | 'SALE';

export class Housing extends Announce {
    area: number;
    housingType: HousingTypeKey;
    rent: number;
    roomsCount: number;
    equipments: string[];

    constructor() {
        super();
        this.announceType = 'HOUSING';
        this.housingType = 'RENTING';
    }
}
