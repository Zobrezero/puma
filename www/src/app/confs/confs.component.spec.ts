import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfsComponent } from './confs.component';

describe('ConfsComponent', () => {
  let component: ConfsComponent;
  let fixture: ComponentFixture<ConfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
