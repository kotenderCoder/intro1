import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {

  wort : string = ''
  zielwort : string = ''
  ratewort : string = ''
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  disabledButtons: string[] = [];
  
  addLetter(letter: string) : string | undefined {     console.log(letter);
    this.disabledButtons.push(letter);
  if (this.wort.includes(letter)) {
    for (let i = 0; i < this.wort.length; i++) {
      if (this.wort[i] == letter) {
        //this.ratewort = this.ratewort.substr(0, i) + letter + this.ratewort.substr(i + 1);
        this.ratewort = this.ratewort.replace(this.ratewort[i], letter) 
      }
    return this.ratewort
    }
    if (this.ratewort == this.wort) {
      alert('Gewonnen');
    }

  }return this.ratewort
  }
  isButtonDisabled(letter: string): boolean {     return this.disabledButtons.includes(letter);   }



  startround(zielwort: string) {

    this.wort = zielwort;
    for (let i = 0; i < this.wort.length; i++) {
      this.ratewort = this.ratewort + '_';
    }
    this.zielwort = ''
    return this.ratewort
  }


}
