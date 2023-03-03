import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddProjectEmployeesComponent } from './add-project-employees.component'

describe('AddProjectEmployeesComponent', () => {
  let component: AddProjectEmployeesComponent
  let fixture: ComponentFixture<AddProjectEmployeesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectEmployeesComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AddProjectEmployeesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
