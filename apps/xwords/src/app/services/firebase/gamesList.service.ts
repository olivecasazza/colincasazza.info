import { IGameDbo } from '@app/utils/game/game';
import { IGameTemplateDbo } from '@app/utils/game/gameTemplate';
import { IUserDbo } from '@app/utils/user/user';
import {
  collection,
  Firestore,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';

export async function loadGameTemplates(
  db: Firestore
): Promise<IGameTemplateDbo[]> {
  const docRef = collection(db, 'GameTemplates');
  const q = await getDocs(query(docRef, limit(10)));
  return q.docs.map((d) => d.data() as IGameTemplateDbo);
}

export async function loadGamesByUserId(db: Firestore, uid: string): Promise<IGameDbo[]> {
  const docRef = collection(db, 'LiveGames');
  const q = await getDocs(
    query(docRef, where('ownerId', '==', uid))
  );
  return q.docs.map((d) => d.data() as IGameDbo);
}
