import { db } from '@app/services/firebase';
import { Game, IGameDbo } from '@app/utils/game';
import { IQuestion } from '@app/utils/question';
import { create2dArray, ICoordinates } from '@app/utils/utils';
import { doc, getDoc } from 'firebase/firestore';
import { action, createModule } from 'vuex-class-component';

export class ActiveGameStore extends createModule({
  namespaced: 'activeGame',
  strict: false,
}) {
  loaded = false;
  liveGame!: Game;
  boardSize: ICoordinates = { x: 0, y: 0 };
  gameBoard: Array<Array<string>> = [[]];
  acrossQuestions: IQuestion[] = [];
  downQuestions: IQuestion[] = [];

  @action async setActiveLiveGame(props: {
    liveGameId: string;
    ownerId: string;
  }): Promise<void> {
    const liveGameSnap = await getDoc(doc(db, 'LiveGames', props.liveGameId));
    if (!liveGameSnap.exists()) throw new Error('live game does not exist.');
    const liveGameDbo = liveGameSnap.data() as IGameDbo;
    console.log('live game dbo:', liveGameDbo);
    this.liveGame = await Game.FromFirebaseDoc(db, liveGameDbo);
    // create game board
    // compute board size first
    // we could do this once in the game factory (in getGameInstance)
    this.boardSize = this.liveGame.questions
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
    this.liveGame.questions
      .flatMap((q) => [...q.answerMap])
      .forEach((q) => {
        const { y, x } = q[0];
        this.gameBoard[y][x] = q[1];
      });
    console.log(this.gameBoard);
    this.loaded = true;
  }
}
