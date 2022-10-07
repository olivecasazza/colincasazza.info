import {
  db,
  loadGamesByUserId,
  loadUserDboFromId,
} from '@app/services/firebase';
import type { UserMetadata } from 'firebase/auth';
import { IGameDbo } from '../game/game';

interface BaseUser {
  uid: string;
  email: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  emailVerified: boolean;
  metadata: UserMetadata;
}

export interface IUser extends BaseUser {
  friends: IUserDbo[];
  games: IGameDbo[];
}

export interface IUserDbo extends BaseUser {
  friends: string[];
  games: string[];
}

export class User implements IUser {
  uid = '';
  email = '';
  displayName = '';
  firstName?: string | undefined;
  lastName?: string | undefined;
  emailVerified = false;
  metadata: UserMetadata = {};
  friends: IUserDbo[] = [];
  games: IGameDbo[] = [];

  constructor(props: IUser) {
    this.uid = props.uid;
    this.email = props.email;
    this.displayName = props.displayName;
    this.friends = props.friends;
    this.games = props.games;
  }

  static async FromDbo(props: IUserDbo) {
    const gamesDbos: IGameDbo[] = await loadGamesByUserId(db, props.uid);
    const friends: IUserDbo[] = await Promise.all(
      props.friends.map((uid) => loadUserDboFromId({ uid }))
    );
    const user = new User({
      ...props,
      friends,
      games: gamesDbos,
    });
    Object.assign(user, props);
    return user;
  }

  static ToDbo(user: User): IUserDbo {
    return {
      ...user,
      games: user.games.map((g) => g.id),
      friends: user.friends.map((f) => f.uid),
    };
  }
}
