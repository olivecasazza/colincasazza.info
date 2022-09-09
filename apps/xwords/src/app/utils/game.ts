import { doc, Firestore, getDoc } from 'firebase/firestore';
import { generateUUID } from 'three/src/math/MathUtils';
import { GameFactory } from './gameFactory';
import { IGameTemplateDbo } from './gameTemplate';
import { Question } from './question';
import type { ICoordinates } from './utils';

export enum GameStatus {
  IN_PROGRESS,
  COMPLETED,
}
export type IBoardState = Record<string, unknown> | Map<ICoordinates, string>;
export interface IGame {
  ownerId: string;
  gameTemplateId: string;
  status: GameStatus;
  boardState: IBoardState; // todo: possibly change to array of game 'actions'
}
export interface IGameDbo extends IGame {
  id: string;
}

export class Game implements IGame {
  id = '';
  ownerId = '';
  gameTemplateId = '';
  status: GameStatus = GameStatus.IN_PROGRESS;
  questions: Question[] = [];
  boardState: IBoardState = new Map();

  static async FromFirebaseDoc(
    db: Firestore,
    props: IGameDbo
  ): Promise<Game> {
    // populate live game's aquestions
    // load corresponding game template
    const gameTemplatesSnap = await getDoc(
      doc(db, 'GameTemplates', props.gameTemplateId)
    );
    console.log(props.gameTemplateId);
    if (!gameTemplatesSnap.exists())
      throw new Error('live game template not found.');
    // parse and questions in game template into live game
    const gameTemplateDbo = gameTemplatesSnap.data() as IGameTemplateDbo;
    console.log(gameTemplateDbo);
    const gameFactory = new GameFactory();
    gameTemplateDbo.questions.forEach((q) => {
      gameFactory.addQuestion(q);
    });
    // write dbo fields to live game object
    const liveGame = gameFactory.getGame();
    liveGame.ownerId = props.ownerId;
    liveGame.gameTemplateId = props.gameTemplateId;
    liveGame.status = props.status;
    liveGame.id = props.id;
    liveGame.boardState = props.boardState;
    return liveGame;
  }

  static ToDbo(game: Game): IGameDbo {
    return {
      id: generateUUID(),
      ownerId: game.ownerId,
      status: game.status,
      gameTemplateId: game.gameTemplateId,
      boardState: {},
    };
  }

  static ToGameTemplate(game: Game): IGameTemplateDbo {
    if (!game.questions)
      throw new Error('cannot create game template, no questions defined');
    return {
      id: generateUUID(),
      questions: game.questions.map(Question.ToDbo),
    };
  }
}
