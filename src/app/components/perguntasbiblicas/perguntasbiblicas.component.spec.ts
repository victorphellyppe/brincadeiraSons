import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerguntasbiblicasComponent } from './perguntasbiblicas.component';

describe('PerguntasbiblicasComponent', () => {
  let component: PerguntasbiblicasComponent;
  let fixture: ComponentFixture<PerguntasbiblicasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntasbiblicasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerguntasbiblicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
