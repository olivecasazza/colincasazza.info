import Vuex from "vuex";
import {
  createModule,
  createProxy,
  createSubModule,
  extractVuexModule,
} from "vuex-class-component";
import { UserStore } from "./user.store";
import { ActiveGameStore } from "./game.store";
import { GamesListStore } from "./gamesList.store";

const VuexModule = createModule({
  namespaced: "game",
  strict: false,
});

export default class MainStore extends VuexModule {
  activeGame = createSubModule(ActiveGameStore);
  gamesList = createSubModule(GamesListStore);
  user = createSubModule(UserStore);
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(MainStore),
  },
});

export const vxm = {
  ...createProxy(store, MainStore),
};
