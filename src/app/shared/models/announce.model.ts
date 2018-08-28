import { AnnounceTypeKey }    from '../../announce-form/sub-component/announce.types';
import { AnnounceStatusEnum } from '../enums/announce-status.enum';
import { Picture }            from './picture.model';
import { User }               from './user.model';

export abstract class Announce {
    id?: number;
    creationDate: Date;
    description: string;
    status: AnnounceStatusEnum;
    title: string;
    owner: User;
    announceType: AnnounceTypeKey;
    pictures: Picture[];
}
