import { figure } from "./board.figur";
export class player{
    name: string;
    score: number;
    figures: figure[] = [];
    constructor(name: string, score: number){
        this.name = name;
        this.score = score;
    }
}