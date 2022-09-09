import { addOrUpdateGameTemplateDbo } from "@app/services/firebase/gameTemplate";
import { Firestore } from "firebase/firestore";
import { generateUUID } from "three/src/math/MathUtils";
import { Game } from "./game";
import { IQuestionDirectionEnum, Question } from "./question";
import { ICoordinates } from "./utils";

export class GameFactory {
  private _game: Game = new Game();

  addQuestion(props: {
    direction: IQuestionDirectionEnum;
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
    return this._game;
  }

  saveToFirestore = (db: Firestore) =>
    addOrUpdateGameTemplateDbo(db, Game.ToGameTemplate(this._game));
}
