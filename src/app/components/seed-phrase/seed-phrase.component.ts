import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-seed-phrase',
  templateUrl: './seed-phrase.component.html',
  styleUrls: ['./seed-phrase.component.scss'],
})
export class SeedPhraseComponent implements OnInit {

  show = false;
  @Output() showSeedPhrase: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  showHide(){
    this.show = !this.show;
    this.showSeedPhrase.emit(this.show);
  }

}
