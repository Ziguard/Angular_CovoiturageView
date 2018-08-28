import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingDetailComponent } from './housing-detail.component';

describe('HousingDetailComponent', () => {
  let component: HousingDetailComponent;
  let fixture: ComponentFixture<HousingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
