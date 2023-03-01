import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUpdatesTableComponent } from './daily-updates-table.component';

describe('DailyUpdatesTableComponent', () => {
  let component: DailyUpdatesTableComponent;
  let fixture: ComponentFixture<DailyUpdatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyUpdatesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyUpdatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
