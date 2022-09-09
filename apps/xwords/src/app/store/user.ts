import { createModule } from 'vuex-class-component';

export class UserStore extends createModule({
  namespaced: 'user',
  strict: false,
}) {}
