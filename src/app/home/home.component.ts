import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
    selector   : 'campus-home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.css']
})
export class HomeComponent implements OnInit {
    images: any[] = [];

    config: SwiperOptions = {
        pagination         : '.swiper-pagination',
        paginationClickable: true,
        nextButton         : '.swiper-button-next',
        prevButton         : '.swiper-button-prev',
        spaceBetween       : 30,
    };

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.images = [
            'https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&h=500&w=900',
            'https://images.pexels.com/photos/847868/pexels-photo-847868.jpeg?auto=compress&cs=tinysrgb&h=500&w=900',
            'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=500&w=900',
            'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&h=500&w=900',
            'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=500&w=900'
        ];
    }

}
