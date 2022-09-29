import { db } from '@app/services/firebase';
import { loadActiveGames } from '@app/services/gamesList';
import { Game, IGame, IGameDbo } from '../game/game';

interface AbstractUser {
  id: string;
  email: string;
  displayName: string;
  friendIds: string;
}

export interface IUser extends AbstractUser {
  games: IGame[];
}

export interface IUserDbo extends AbstractUser {
  games: string[];
}

export class User implements IUser {
  id: string;
  email: string;
  displayName: string;
  friendIds: string;
  games: IGame[];

  constructor(props: IUser) {
    this.id = props.id;
    this.email = props.email;
    this.displayName = props.displayName;
    this.friendIds = props.friendIds;
    this.games = props.games;
  }

  static async FromDbo(props: IUserDbo) {
    const games: IGameDbo[] = await loadActiveGames(db);
    const user = new User({
      ...props,
      games: await Promise.all(games.map((g) => Game.FromDbo(db, g))),
    });
    Object.assign(user, props);
    return user;
  }
}
