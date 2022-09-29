import { IGameDbo } from '@app/utils/game/game';
import { doc, Firestore, getDoc } from 'firebase/firestore';

export async function getGameDbo(
  db: Firestore,
  gameId: string
): Promise<IGameDbo> {
  const liveGameSnap = await getDoc(doc(db, 'LiveGames', gameId));
  if (!liveGameSnap.exists()) throw new Error('live game does not exist.');
  return liveGameSnap.data() as IGameDbo;
}
