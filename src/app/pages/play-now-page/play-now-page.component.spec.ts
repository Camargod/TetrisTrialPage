import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayNowPageComponent } from './play-now-page.component';

describe('PlayNowPageComponent', () => {
  let component: PlayNowPageComponent;
  let fixture: ComponentFixture<PlayNowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayNowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayNowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
