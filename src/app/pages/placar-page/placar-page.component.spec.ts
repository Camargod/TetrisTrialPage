import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacarPageComponent } from './placar-page.component';

describe('PlacarPageComponent', () => {
  let component: PlacarPageComponent;
  let fixture: ComponentFixture<PlacarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
