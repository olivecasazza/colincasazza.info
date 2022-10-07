import { IGameDbo } from '@app/utils/game/game';
import { doc, Firestore, getDoc } from 'firebase/firestore';

export async function getGameDbo(
  db: Firestore,
  gameId: string
): Promise<IGameDbo> {
  const gameRef = doc(db, 'LiveGames', gameId);
  const liveGameSnap = await getDoc(gameRef);
  if (!liveGameSnap.exists()) throw new Error('live game does not exist.');
  return liveGameSnap.data() as IGameDbo;
}
