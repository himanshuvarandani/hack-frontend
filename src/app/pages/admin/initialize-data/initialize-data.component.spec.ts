import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InitializeDataComponent } from './initialize-data.component'

describe('InitializeDataComponent', () => {
  let component: InitializeDataComponent
  let fixture: ComponentFixture<InitializeDataComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializeDataComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(InitializeDataComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
