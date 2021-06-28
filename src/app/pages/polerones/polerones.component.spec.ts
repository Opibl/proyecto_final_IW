import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleronesComponent } from './polerones.component';

describe('PoleronesComponent', () => {
  let component: PoleronesComponent;
  let fixture: ComponentFixture<PoleronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoleronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
