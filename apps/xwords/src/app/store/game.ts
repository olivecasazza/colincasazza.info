import { db } from '@app/services/firebase';
import { getGameDbo } from '@app/services/game';
import { Game } from '@app/utils/game/game';
import { IQuestion, Question, QuestionDirection } from '@app/utils/game/question';
import { ICoordinates } from '@app/utils/utils';
import { action, createModule, mutation } from 'vuex-class-component';

export class ActiveGameStore extends createModule({
  namespaced: 'activeGame',
  strict: false,
}) {
  isLoaded = false;
  boardState: Array<Array<string>> = [[]];
  acrossQuestions: Question[] = [];
  downQuestions: Question[] = [];
  selectedQuestions: Question[] = [];

  private _game!: Game;

  get questions(): Question[] {
    return this.downQuestions.concat(this.acrossQuestions) as Question[]
  }

  get boardSize(): ICoordinates {
    return this._game.boardSize;
  }

  @mutation unselect(): void {
    this.selectedQuestions = [];
  }

  @mutation unload(): void {
    this.boardState = [[]];
    this.acrossQuestions = [];
    this.downQuestions = [];
    this.selectedQuestions = [];
    this.isLoaded = false;
  }

  @action async load(props: {
    activeGameId: string;
    ownerId: string;
  }): Promise<void> {
    const activeGameDbo = await getGameDbo(db, props.activeGameId);
    this._game = await Game.FromDbo(db, activeGameDbo);
    this.boardState = this._game.boardState;
    this.acrossQuestions = this._game.questions.filter(
      (q) => q.direction == QuestionDirection.ACROSS
    )
    this.downQuestions = this._game.questions.filter(
      (q) => q.direction == QuestionDirection.DOWN
    );
    console.log(this._game)
    this.isLoaded = true;
  }

  @action async selectCoordinates(props: {
    coordinates: ICoordinates;
  }): Promise<void> {
    const selectedQuestions = this._game.questions.filter((q) => {
      return [...q.answerMap.keys()].some(
        ({ x, y }) => props.coordinates.x == x && props.coordinates.y == y
      );
    });
    this.selectedQuestions = selectedQuestions;
  }
}
