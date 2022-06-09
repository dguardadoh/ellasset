import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-seed-phrase',
  templateUrl: './confirm-seed-phrase.component.html',
  styleUrls: ['./confirm-seed-phrase.component.scss'],
})
export class ConfirmSeedPhraseComponent implements OnInit {


  correctWords = ['then','ride','alien','exist','vacant','avoid','cross','comic','hub','girl','usage','upon'];
  otherWords = ['cat','food','person','green','flag','day','party','storm','car','house','pet','music'];
  unsortedWords: any[];
  selectedWords: string[] = [];
  selectionWords: string[] = [];
  loop = 1;
  enableNextButton = false;
  done: boolean = false;
  @Output() confirmPasswordDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
    
   }

  ngOnInit() {
    this.unsortedWords = [...this.correctWords].sort(() => Math.random() - 0.5).map((item) => new Object({item, pos: this.correctWords.indexOf(item)}));
    this.getUnsortedWords();
  }

  next() {
    if (this.loop === 4) {
      this.done = this.correctWords.join() === this.selectedWords.join();
      this.confirmPasswordDone.emit(this.done);
      return
    }
    this.unsortedWords = this.unsortedWords.slice(3);
    this.getUnsortedWords();
    this.loop++;
    this.enableNextButton = !this.enableNextButton;
    
  }

  selectWord(word: string) {
    if (this.isWordSelected(word)) return;
    this.selectedWords[this.unsortedWords.slice(0,3).find(item => !this.selectedWords[item.pos]).pos] = word;
    let wordsCount =this.selectedWords.filter(item => item).length;
    if (this.loop === 1) {
      this.enableNextButton = wordsCount === 3; 
    } else if(this.loop === 2) {
      this.enableNextButton = wordsCount === 6;
    } else if(this.loop === 3) {
      this.enableNextButton = wordsCount === 9;
    } else if(this.loop === 4) {
      this.enableNextButton = wordsCount === 12;
    }
  }

  isWordSelected(word: string) {
    return this.selectedWords.find(item => item === word) !== undefined;
  }

  getUnsortedWords() {
    let concatWords = this.otherWords.sort(() => Math.random() - 0.5).splice(0,2);
    this.selectionWords = this.unsortedWords.slice(0,3).map(item => item.item).concat(concatWords).sort(() => Math.random() - 0.5);
  }

  finish(){}

}
