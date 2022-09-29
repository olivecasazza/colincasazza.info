import { createUser, logOut, signIn } from '@app/services/user';
import { User } from '@app/utils/user/user';
import { action, createModule } from 'vuex-class-component';
import { vxm } from '.';

export class UserStore extends createModule({
  namespaced: 'user',
  strict: false,
}) {
  activeUser!: User;
  isLoggedIn = false;

  @action async logIn(props: {
    email: string;
    password: string;
  }): Promise<User> {
    const userDbo = await signIn(props);
    this.activeUser = User.FromDbo(userDbo);
    return this.activeUser;
  }

  @action async logOut() {
    this.activeUser = undefined as unknown as User; // ! <:)
    await Promise.all([vxm.gamesList.unload(), vxm.activeGame.unload()]);
    await logOut();
  }

  @action async createUser(props: {
    email: string;
    password: string;
    name: string;
  }) {
    await createUser(props);
  }
}
