import {player} from './board.player';

export class figure {
  isfinished: boolean = false;
  isingame: boolean = false;
  position: [number, number];
  player: player | undefined;
    constructor(position: [number, number]) {
        this.position = position;
    }
}