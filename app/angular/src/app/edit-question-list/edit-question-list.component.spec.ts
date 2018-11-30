import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionListComponent } from './edit-question-list.component';

describe('EditQuestionListComponent', () => {
  let component: EditQuestionListComponent;
  let fixture: ComponentFixture<EditQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
