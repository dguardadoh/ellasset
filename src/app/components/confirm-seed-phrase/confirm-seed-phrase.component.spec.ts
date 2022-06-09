import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmSeedPhraseComponent } from './confirm-seed-phrase.component';

describe('ConfirmSeedPhraseComponent', () => {
  let component: ConfirmSeedPhraseComponent;
  let fixture: ComponentFixture<ConfirmSeedPhraseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSeedPhraseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmSeedPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
