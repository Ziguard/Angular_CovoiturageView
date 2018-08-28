import { LagCauseEnum } from '../enums/lag-cause.enum';

export class Lag {
    id?: number;
    cause: LagCauseEnum;
    date: Date;
    broadcastMEssage: string;
}
