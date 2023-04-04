import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerguntastortanacaraComponent } from './perguntastortanacara.component';

describe('PerguntastortanacaraComponent', () => {
  let component: PerguntastortanacaraComponent;
  let fixture: ComponentFixture<PerguntastortanacaraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntastortanacaraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerguntastortanacaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
