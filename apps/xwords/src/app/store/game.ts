import { db } from '@app/services/firebase';
import { getGameDbo } from '@app/services/firebase/game';
import { Game } from '@app/utils/game';
import { IQuestion, QuestionDirection } from '@app/utils/question';
import { ICoordinates } from '@app/utils/utils';
import { action, createModule, mutation } from 'vuex-class-component';

export class ActiveGameStore extends createModule({
  namespaced: 'activeGame',
  strict: false,
}) {
  isLoaded = false;
  game!: Game;
  gameBoard: Array<Array<string>> = [[]];
  acrossQuestions: IQuestion[] = [];
  downQuestions: IQuestion[] = [];
  selectedQuestions: IQuestion[] = [];

  @mutation unselect(): void {
    this.selectedQuestions = [];
  }

  @mutation unload(): void {
    this.gameBoard = [[]];
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
    this.game = await Game.FromDbo(db, activeGameDbo);
    this.acrossQuestions = this.game.questions.filter(
      (q) => q.direction == QuestionDirection.ACROSS
    );
    this.downQuestions = this.game.questions.filter(
      (q) => q.direction == QuestionDirection.DOWN
    );
    console.log(this.game);
    this.isLoaded = true;
  }

  @action async selectCoordinates(props: {
    coordinates: ICoordinates;
  }): Promise<void> {
    const selectedQuestions = this.game.questions.filter((q) => {
      console.log([...q.answerMap.keys()], props.coordinates);
      return [...q.answerMap.keys()].some(
        ({ x, y }) => props.coordinates.x == x && props.coordinates.y == y
      );
    });
    console.log(selectedQuestions);
  }
}
