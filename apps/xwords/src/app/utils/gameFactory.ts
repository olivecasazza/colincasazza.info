import { addOrUpdateGameTemplateDbo } from '@app/services/firebase/gameTemplate';
import { Firestore } from 'firebase/firestore';
import { generateUUID } from 'three/src/math/MathUtils';
import { Game } from '@app/utils/game';
import { QuestionDirection, Question } from './question';
import { create2dArray, ICoordinates } from './utils';

export class GameFactory {
  private _game: Game = new Game();

  addQuestion(props: {
    direction: QuestionDirection;
    root: ICoordinates;
    question: string;
    answer: string;
    number: number;
  }) {
    this._game.questions.push(
      new Question({
        ...props,
      })
    );
    return this;
  }

  getGame(): Game {
    if (!this._game.id) this._game.id = generateUUID();
    if (!this._game.ownerId) this._game.ownerId = 'DefaultUser';
    // create game board
    // compute board size first
    // we could do this once in the game factory (in getGameInstance)
    this._game.boardSize = this._game.questions
      .flatMap((q) => [...q.answerMap])
      .reduce(
        (pre, cur) => {
          const largest = pre;
          if (cur[0].x > pre.x) largest.x = cur[0].x;
          if (cur[0].y > pre.y) largest.y = cur[0].y;
          return largest;
        },
        { x: 0, y: 0 }
      );
    this._game.boardSize.x += 1;
    this._game.boardSize.y += 1;
    const gameBoard = create2dArray(
      this._game.boardSize.x,
      this._game.boardSize.y
    );
    this._game.questions
      .flatMap((q) => [...q.answerMap])
      .map((q) => {
        const { y, x } = q[0];
        gameBoard[y][x] = q[1];
        return q;
      });
    return this._game;
  }

  saveToFirestore = (db: Firestore) =>
    addOrUpdateGameTemplateDbo(db, Game.ToGameTemplate(this._game));
}
