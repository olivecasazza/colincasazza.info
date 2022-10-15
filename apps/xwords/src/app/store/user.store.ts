import { createUser, logIn, logOut } from '@app/services/firebase';
import { User } from '@app/utils/user/user';
import { action, createModule } from 'vuex-class-component';
import { vxm } from '.';

export class UserStore extends createModule({
  namespaced: 'user',
  strict: false,
}) {
  isLoggedIn = false;
  private _activeUser?: User;

  @action async getActiveUser(): Promise<User> {
    if (this._activeUser) return this._activeUser;
    const storedUserJson = localStorage.getItem('activeUser');
    if (!storedUserJson) throw new Error('unable to load user from local storage.');
    const user = await User.FromDbo(JSON.parse(storedUserJson));
    this._activeUser = user;
    return this._activeUser;
  }

  @action async setActiveUser(activeUser: User) {
    localStorage.setItem('activeUser', JSON.stringify(User.ToDbo(activeUser)));
    this._activeUser = activeUser;
  }

  @action async logIn(props: {
    email: string;
    password: string;
  }): Promise<User> {
    const userDbo = await logIn(props);
    const user = await User.FromDbo(userDbo);
    await vxm.user.setActiveUser(user);
    return await this.getActiveUser();
  }

  @action async logOut() {
    this.activeUser = undefined;
    await Promise.all([vxm.gamesList.unload(), vxm.activeGame.unload()]);
    await logOut();
  }

  @action async createUser(props: {
    email: string;
    password: string;
    displayName: string;
    firstName?: string;
    lastName?: string;
  }) {
    await createUser(props);
    await vxm.user.logIn(props);
  }
}
