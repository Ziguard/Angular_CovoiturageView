import { Location }                        from '@angular/common';
import { Component, OnInit }               from '@angular/core';
import { DomSanitizer, SafeUrl }           from '@angular/platform-browser';
import { ActivatedRoute, Router }          from '@angular/router';
import { Observable }                      from 'rxjs/Observable';
import { forkJoin }                        from 'rxjs/observable/forkJoin';
import { from }                            from 'rxjs/observable/from';
import { filter, flatMap, map }            from 'rxjs/operators';
import { AppMessageService, MessageLevel } from '../../core/services/application/app-message.service';
import { ExchangeService }                 from '../../core/services/exchange.service';
import { PictureService }                  from '../../core/services/picture.service';
import { Trade }                           from '../../shared/models/trade.model';

@Component({
    selector   : 'campus-trade-detail',
    templateUrl: './trade-detail.component.html',
    styleUrls  : ['./trade-detail.component.scss']
})
export class TradeDetailComponent implements OnInit {
    trade: Trade;
    sources: SafeUrl[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private exchangeService: ExchangeService,
        private pictureService: PictureService,
        private messageService: AppMessageService,
        private location: Location,
        private sanitizer: DomSanitizer
    ) {}

    private downloadPictures() {
        if (!this.trade || !this.trade.pictures) return;

        forkJoin(
            from(this.trade.pictures.map(pic => pic.id)).pipe(
                flatMap(id => this.pictureService.download(id)),
                map(blob => this.sanitizer.bypassSecurityTrustUrl(
                    window.URL.createObjectURL(blob)))
            )).subscribe(sources => this.sources = sources);
    }


    ngOnInit(): void {
        this.getCurrentTrade().subscribe(
            trade => {
                this.trade = trade;
                this.downloadPictures();
                console.log(this.trade.owner);
            },
            error =>
                this.router.navigate(['/']).then(() => {
                    this.messageService.emitI18N(MessageLevel.WARNING, 'messages.errors.not-found');
                    console.log(error);
                })
            );
    }

    getCurrentTrade(): Observable<Trade> {
        return this.route.params.pipe(
            filter(p => p.hasOwnProperty('id') && p.id != null),
            map(p => parseInt(p.id)),
            filter(id => !isNaN(id)),
            flatMap(id => this.exchangeService.get(id))
        );
    }

    goBack(): void {
        this.location.back();
    }
}
