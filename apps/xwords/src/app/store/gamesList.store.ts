import { db, loadGamesByUserId, loadGameTemplates } from '@app/services/firebase';
import { GameStatus, IGameDbo } from '@app/utils/game/game';
import { IGameTemplateDbo } from '@app/utils/game/gameTemplate';
import { doc, setDoc } from 'firebase/firestore';
import { generateUUID } from 'three/src/math/MathUtils';
import { action, createModule } from 'vuex-class-component';
import { vxm } from '.';

export class GamesListStore extends createModule({
  namespaced: 'gamesList',
  strict: false,
}) {
  gameTemplates: IGameTemplateDbo[] = [];
  activeGames: IGameDbo[] = [];
  completedGames: IGameDbo[] = [];
  isLoaded = false;

  @action async load(): Promise<void> {
    const activeUser = await vxm.user.getActiveUser();
    const allGames = await loadGamesByUserId(db, activeUser.uid);
    const activeGames = allGames.filter(
      (game) => game.status == GameStatus.IN_PROGRESS
    );
    const activeGameTemplateIds = activeGames.map((ag) => ag.gameTemplateId);
    const gameTemplates = await loadGameTemplates(db);
    this.gameTemplates = gameTemplates.filter(
      (t) => !activeGameTemplateIds.includes(t.id)
    );
    this.activeGames = activeGames;
    this.isLoaded = true;
  }

  @action async unload() {
    this.gameTemplates = [];
    this.activeGames = [];
    this.isLoaded = true;
  }

  @action async createGameFromTemplate(props: {
    gameTemplateId: string;
  }): Promise<IGameDbo> {
    const { uid } = await vxm.user.getActiveUser();
    const activeGameDbo = {
      ownerId: uid,
      gameTemplateId: props.gameTemplateId,
      id: generateUUID(),
      status: GameStatus.IN_PROGRESS,
      boardState: {},
      actions: [],
    };
    const gameId = activeGameDbo.id;
    await setDoc(doc(db, 'LiveGames', gameId), activeGameDbo);
    return activeGameDbo;
  }
}
