import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;
  draw: string;
  count: number;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.draw = null;
    this.count = 0;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();


    if (this.winner != null) {
      var time = 5000;
      setTimeout(() => { this.newGame(); }, time);


    } 3
  }

  calculateWinner() {
    this.count++;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const draw = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8,]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //const [d, e, f, g, h, j, k, l, m] = draw[0];
      if (
        (this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c])
      ) {
        return this.squares[a];
      }

      for (let k = 0; k < draw.length; k++) { //CHECK FOR DRAW!
        if (this.squares[k] == ('X' || 'O')) {
          this.count++;

        }
      }
    }
    if (this.count == 16) { //DRAW CONDITION!
      let x = 'true';
      this.draw = 'true';
    }
    return null;
  }

}
