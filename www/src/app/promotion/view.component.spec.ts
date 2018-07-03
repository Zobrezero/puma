import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionViewComponent } from './view.component';

describe('PromotionViewComponent', () => {
  let component: PromotionViewComponent;
  let fixture: ComponentFixture<PromotionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
