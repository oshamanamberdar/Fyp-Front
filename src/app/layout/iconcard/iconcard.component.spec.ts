import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconcardComponent } from './iconcard.component';

describe('IconcardComponent', () => {
  let component: IconcardComponent;
  let fixture: ComponentFixture<IconcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
