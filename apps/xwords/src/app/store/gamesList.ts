import { db } from '@app/services/firebase';
import { loadActiveGames, loadGameTemplates } from '@app/services/gamesList';
import { GameStatus, IGameDbo } from '@app/utils/game/game';
import { IGameTemplateDbo } from '@app/utils/game/gameTemplate';
import { doc, setDoc } from 'firebase/firestore';
import { generateUUID } from 'three/src/math/MathUtils';
import { action, createModule } from 'vuex-class-component';

export class GamesListStore extends createModule({
  namespaced: 'gamesList',
  strict: false,
}) {
  gameTemplates: IGameTemplateDbo[] = [];
  activeGames: IGameDbo[] = [];
  isLoaded = false;

  @action async load(): Promise<void> {
    const activeGames = await loadActiveGames(db);
    const activeGameIds = activeGames.map((ag) => ag.id);
    const gameTemplates = await loadGameTemplates(db);
    this.gameTemplates = gameTemplates.filter((t) =>
      activeGameIds.includes(t.id)
    );
    this.activeGames = activeGames;
    this.isLoaded = true;
  }

  @action async unload() {
    this.gameTemplates = [];
    this.activeGames = [];
    this.isLoaded = true;
  }

  @action async beginUnstartedGame(props: {
    liveGameOwnerId: string;
    gameTemplateId: string;
  }): Promise<void> {
    const activeGameDbo = {
      ownerId: props.liveGameOwnerId,
      gameTemplateId: props.gameTemplateId,
      id: generateUUID(),
      status: GameStatus.IN_PROGRESS,
      boardState: {},
    };
    const liveGameId = activeGameDbo.id;
    await setDoc(doc(db, 'LiveGames', liveGameId), activeGameDbo);
  }
}
