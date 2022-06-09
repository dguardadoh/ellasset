import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecureYourWalletNextComponent } from './secure-your-wallet-next.component';

describe('SecureYourWalletNextComponent', () => {
  let component: SecureYourWalletNextComponent;
  let fixture: ComponentFixture<SecureYourWalletNextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureYourWalletNextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecureYourWalletNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
