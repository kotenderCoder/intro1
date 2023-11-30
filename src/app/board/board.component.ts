import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { figure } from './board.figur';
import { player } from './board.player';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'

})

export class BoardComponent {
  image: any;
  rows: number = 11;
  cols: number = 11;
  board: any[][] = [];
  testdummie: figure = new figure([3, 3]);
  gameboard: any[][] = [
    //0 enspricht Leerfeld
    //1 enspricht Spieler 1
    //2 enspricht Spieler 2
    //3 enspricht Spieler 3
    //4 enspricht Spieler 4
    //5 enspricht Spielweg
    //111 enspricht Start von Spieler 1
    //222 enspricht Start von Spieler 2
    //333 enspricht Start von Spieler 3
    //444 enspricht Start von Spieler 4
    //11 enspricht Ziel von Spieler 1
    //22 enspricht Ziel von Spieler 2
    //33 enspricht Ziel von Spieler 3
    //44 enspricht Ziel von Spieler 4
    [1 , 1, 0, 0, 5, 5, 222, 0, 0, 2, 2], //1
    [1 , 1, 0, 0, 5, 22, 5, 0, 0, 2, 2], //2
    [0 , 0, 0, 0, 5, 22, 5, 0, 0, 0, 0], //3
    [0 , 0, 0, 0, 5, 22, 5, 0, 0, 0, 0], //4
    [111 , 5, 5, 5, 5, 22, 5, 5, 5, 5, 5], //7
    [5 , 11, 11, 11, 11, 0, 33, 33, 33, 33, 5], //6
    [5 , 5, 5, 5, 5, 44, 5, 5, 5, 5, 333], //7
    [0 , 0, 0, 0, 5, 44, 5, 0, 0, 0, 0], //8 
    [0 , 0, 0, 0, 5, 44, 5, 0, 0, 0, 0], //9
    [4 , 4, 0, 0, 5, 44, 5, 0, 0, 3, 3], //10
    [4 , 4, 0, 0, 444, 5, 5, 0, 0, 3, 3], //11
  ];

  hasfigure(x: number,y: number): boolean {
    if(this.testdummie.position[0] === x && this.testdummie.position[1] === y){
      this.image = 'src/app/assets/stock-figure.jpg';
      return true;
    }
    return false;
  }
  ngOnInit() {
    this.initializeBoard();
  }

  initializeBoard() {
    this.board = Array(this.rows).fill([]).map(() => Array(this.cols).fill(0));
  }
  isDynamicCell(xIndex: number, yIndex: number): string {
    const isstartplayerone  = this.gameboard[xIndex][yIndex]=== 1;
    const isstartplayertwo = this.gameboard[xIndex][yIndex] === 2;
    const isstartplayerthree = this.gameboard[xIndex][yIndex] === 3;
    const isstartplayerfour = this.gameboard[xIndex][yIndex] === 4;
    const isplayfield = this.gameboard[xIndex][yIndex] === 5;
    const isstartplayeronegoal = this.gameboard[xIndex][yIndex] === 11;
    const isstartplayertwogoal = this.gameboard[xIndex][yIndex] === 22;
    const isstartplayerthreegoal = this.gameboard[xIndex][yIndex] === 33;
    const isstartplayerfourgoal = this.gameboard[xIndex][yIndex] === 44;
    const isstartplayeronestart = this.gameboard[xIndex][yIndex] === 111;
    const isstartplayertwostart = this.gameboard[xIndex][yIndex] === 222;
    const isstartplayerthreestart = this.gameboard[xIndex][yIndex] === 333;
    const isstartplayerfourstart = this.gameboard[xIndex][yIndex] === 444;
    const hastestdummieinit = this.testdummie.position[0] === xIndex && this.testdummie.position[1] === yIndex;
    if (isstartplayerone) {
      return 'playerone';
    } else if (isstartplayertwo) {
      return 'playertwo';
    } else if (isstartplayerthree) {
      return 'playerthree';
    } else if (isstartplayerfour) {
      return 'playerfour';
    }else if (isplayfield) {
      return 'playfield';
    }else if (isstartplayeronegoal) {
      return 'playeronegoal';
    }else if (isstartplayertwogoal) {
      return 'playertwogoal';
    }else if (isstartplayerthreegoal) {
      return 'playerthreegoal';
    }else if (isstartplayerfourgoal) {
      return 'playerfourgoal';
    }else if (isstartplayeronestart) {
      return 'playeronestart';
    }else if (isstartplayertwostart) {
      return 'playertwostart';
    }else if (isstartplayerthreestart) {
      return 'playerthreestart';
    }else if (isstartplayerfourstart) {
      return 'playerfourstart';
    }else if (hastestdummieinit) {
      return 'playeronefigur';
    }

    return 'cell';
  }
 //Spielfigur bewegt sich immer nach links, wenn das nicht geht, nach oben.

}
