import { db } from '@app/services/firebase';
import { GameStatus, IGameDbo } from '@app/utils/game';
import { IGameTemplateDbo } from '@app/utils/gameTemplate';
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { generateUUID } from 'three/src/math/MathUtils';
import { action, createModule } from 'vuex-class-component';
import { vxm } from '.';

export class GamesListStore extends createModule({
  namespaced: 'gamesList',
  strict: false,
}) {
  gameTemplates: IGameTemplateDbo[] = [];
  activeGames: IGameDbo[] = [];

  @action async loadGameTemplates(): Promise<void> {
    const docRef = collection(db, 'GameTemplates');
    const q = await getDocs(query(docRef, limit(10)));
    this.gameTemplates = q.docs
      .map((d) => d.data() as IGameTemplateDbo)
      .filter(
        (t) => !this.activeGames.map((t) => t.gameTemplateId).includes(t.id)
      );
    // this.gameTemplates.forEach(console.log);
  }

  @action async loadLiveGames(): Promise<void> {
    const docRef = collection(db, 'LiveGames');
    const q = await getDocs(
      query(docRef, where('ownerId', '==', 'DefaultUser'), limit(10))
    );
    this.activeGames = q.docs.map((d) => d.data() as IGameDbo);
    this.activeGames.forEach(console.log);
  }

  @action async beginUnstartedGame(props: {
    liveGameOwnerId: string;
    gameTemplateId: string;
  }): Promise<void> {
    const liveGameDbo: IGameDbo = {
      ownerId: props.liveGameOwnerId,
      gameTemplateId: props.gameTemplateId,
      id: generateUUID(),
      status: GameStatus.IN_PROGRESS,
      boardState: {},
    };
    const liveGameId = liveGameDbo.id;
    await setDoc(doc(db, 'LiveGames', liveGameId), liveGameDbo);
    await this.loadLiveGames();
    await this.openInProgressGame({ liveGameId });
  }

  @action async openInProgressGame(props: {
    liveGameId: string;
  }): Promise<void> {
    const { liveGameId, ownerId } = { ...props, ownerId: 'Default' };
    await vxm.gameStore.setActiveLiveGame({ liveGameId, ownerId });
  }
}
