import { getGameTemplateDbo } from '@app/services/firebase/gameTemplate';
import { Firestore } from 'firebase/firestore';
import { generateUUID } from 'three/src/math/MathUtils';
import { GameFactory } from './gameFactory';
import { IGameTemplateDbo } from './gameTemplate';
import { Question } from './question';
import { ICoordinates } from './utils';

export enum GameStatus {
  IN_PROGRESS,
  COMPLETED,
}
export type IBoardState = Array<Array<string>>;
export interface IGame {
  ownerId: string;
  gameTemplateId: string;
  status: GameStatus;
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
  boardState: IBoardState = [[]];
  boardSize: ICoordinates = { x: 0, y: 0 };

  static async FromDbo(db: Firestore, props: IGameDbo): Promise<Game> {
    const gameTemplateDbo = await getGameTemplateDbo(db, props.gameTemplateId);
    const gameFactory = new GameFactory();
    gameTemplateDbo.questions.forEach((q) => gameFactory.addQuestion(q));
    const game = gameFactory.getGame();
    game.id = props.id
    game.gameTemplateId = props.gameTemplateId;
    game.status = props.status;
    console.log(game);
    return game;
  }

  static ToDbo(game: Game): IGameDbo {
    return {
      id: generateUUID(),
      ownerId: game.ownerId,
      status: game.status,
      gameTemplateId: game.gameTemplateId,
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
