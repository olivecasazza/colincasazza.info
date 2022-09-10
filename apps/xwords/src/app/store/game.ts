import { db } from '@app/services/firebase';
import { Game, IGameDbo } from '@app/utils/game';
import { IQuestion, IQuestionDirectionEnum } from '@app/utils/question';
import { create2dArray, ICoordinates } from '@app/utils/utils';
import { doc, getDoc } from 'firebase/firestore';
import { action, createModule } from 'vuex-class-component';

export class ActiveGameStore extends createModule({
  namespaced: 'activeGame',
  strict: false,
}) {
  isLoaded = false;
  game!: Game;
  boardSize: ICoordinates = { x: 0, y: 0 };
  gameBoard: Array<Array<string>> = [[]];
  acrossQuestions: IQuestion[] = [];
  downQuestions: IQuestion[] = [];

  @action async selectCoordinates(props: {
    coordinates: ICoordinates;
  }): Promise<void> {
    console.log(props.coordinates);
    const selectedQuestions = this.game.questions.filter((q) => {
      console.log([...q.answerMap.keys()], props.coordinates);
      return [...q.answerMap.keys()].some(
        ({ x, y }) => props.coordinates.x == x && props.coordinates.y == y
      );
    });
    console.log(selectedQuestions);
  }

  @action async setActiveLiveGame(props: {
    activeGameId: string;
    ownerId: string;
  }): Promise<void> {
    const liveGameSnap = await getDoc(doc(db, 'LiveGames', props.activeGameId));
    if (!liveGameSnap.exists()) throw new Error('live game does not exist.');
    const liveGameDbo = liveGameSnap.data() as IGameDbo;
    this.game = await Game.FromFirebaseDoc(db, liveGameDbo);
    // create game board
    // compute board size first
    // we could do this once in the game factory (in getGameInstance)
    this.boardSize = this.game.questions
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
    this.boardSize.x += 1;
    this.boardSize.y += 1;
    this.gameBoard = create2dArray(this.boardSize.x, this.boardSize.y);
    this.game.questions
      .flatMap((q) => [...q.answerMap])
      .forEach((q) => {
        const { y, x } = q[0];
        this.gameBoard[y][x] = q[1];
      });
    this.acrossQuestions = this.game.questions.filter(
      (q) => q.direction == IQuestionDirectionEnum.ACROSS
    );
    this.downQuestions = this.game.questions.filter(
      (q) => q.direction == IQuestionDirectionEnum.DOWN
    );
    this.isLoaded = true;
  }
}
