import { Location } from './location.model';

export class Step {
    id?: number;
    location: Location;
    order: number;
    estimatedDeparture?: Date;
    effectiveDeparture?: Date;
    estimatedArrival?: Date;
    effectiveArrival?: Date;
}
