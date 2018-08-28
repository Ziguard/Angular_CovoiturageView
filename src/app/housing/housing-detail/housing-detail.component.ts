import { Location }                        from '@angular/common';
import { Component, OnInit }               from '@angular/core';
import { DomSanitizer, SafeUrl }           from '@angular/platform-browser';
import { ActivatedRoute, Router }          from '@angular/router';
import { Observable }                      from 'rxjs/Observable';
import { forkJoin }                        from 'rxjs/observable/forkJoin';
import { from }                            from 'rxjs/observable/from';
import { filter, flatMap, map }            from 'rxjs/operators';
import { AppMessageService, MessageLevel } from '../../core/services/application/app-message.service';
import { HousingService }                  from '../../core/services/housing.service';
import { PictureService}                   from '../../core/services/picture.service';
import { Housing }                         from '../../shared/models/housing.model';

@Component({
  selector: 'campus-housing-detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.scss']
})
export class HousingDetailComponent implements OnInit {
    house: Housing;
    sources: SafeUrl[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private housingService: HousingService,
        private pictureService: PictureService,
        private messageService: AppMessageService,
        private location: Location,
        private sanitizer: DomSanitizer
    ) {}

    private downloadPictures() {
        if (!this.house || !this.house.pictures) return;

        forkJoin(
            from(this.house.pictures.map(pic => pic.id)).pipe(
                flatMap(id => this.pictureService.download(id)),
                map(blob => this.sanitizer.bypassSecurityTrustUrl(
                    window.URL.createObjectURL(blob)))
            )).subscribe(sources => this.sources = sources);
    }


    ngOnInit(): void {
        this.getCurrentHouse().subscribe(
            house => {
                this.house = house;
                this.downloadPictures();
                console.log(this.house.owner);
            },error =>
                this.router.navigate(['/']).then(() => {
                    this.messageService.emitI18N(MessageLevel.WARNING, 'message.errors.not-find');
                    console.log(error);
                })
        );
    }

    getCurrentHouse(): Observable<Housing> {
        return this.route.params.pipe(
            filter(p => p.hasOwnProperty('id') && p.id != null),
            map(p => parseInt(p.id)),
            filter(id => !isNaN(id)),
            flatMap(id => this.housingService.get(id))
        );
    }

    goBack(): void {
        this.location.back();
    }
}
