import { Announce } from './announce.model';
import { Lag }      from './lag.model';
import { Step }     from './step.model';
import { User }     from './user.model';

export class Carpooling extends Announce {
    driver: User;
    lags: Lag[];
    steps: Step[];
    passengers: User[];
}
