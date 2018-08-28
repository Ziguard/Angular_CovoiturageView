import { NgForm }   from '@angular/forms';
import { Announce } from '../../shared/models/announce.model';

export interface AnnounceComponent {
    model: Announce;
    subForm: NgForm;
}
