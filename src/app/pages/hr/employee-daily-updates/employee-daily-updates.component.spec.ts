import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EmployeeDailyUpdatesComponent } from './employee-daily-updates.component'

describe('EmployeeDailyUpdatesComponent', () => {
  let component: EmployeeDailyUpdatesComponent
  let fixture: ComponentFixture<EmployeeDailyUpdatesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDailyUpdatesComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(EmployeeDailyUpdatesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
