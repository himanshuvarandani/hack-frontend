import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DailyUpdateFormComponent } from './daily-update-form.component'

describe('DailyUpdateFormComponent', () => {
  let component: DailyUpdateFormComponent
  let fixture: ComponentFixture<DailyUpdateFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyUpdateFormComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(DailyUpdateFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
