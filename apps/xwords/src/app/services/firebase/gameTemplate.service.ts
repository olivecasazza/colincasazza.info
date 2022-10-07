import { IGameTemplateDbo } from '@app/utils/game/gameTemplate';
import { doc, Firestore, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';

export async function addOrUpdateGameTemplateDbo(
  db: Firestore,
  gameTemplateDbo: IGameTemplateDbo
) {
  const gameTemplatesRef = doc(db, 'GameTemplates', gameTemplateDbo.id);
  await setDoc(gameTemplatesRef, gameTemplateDbo);
}

// fetch game template and
export async function getGameTemplateDbo(
  db: Firestore,
  gameTemplateId: string
): Promise<IGameTemplateDbo> {
  const gameTemplatesSnap = await getDoc(
    doc(db, 'GameTemplates', gameTemplateId)
  );
  if (!gameTemplatesSnap.exists())
    throw new Error(`live game template w/ id: ${gameTemplateId} not found.`);
  return gameTemplatesSnap.data() as IGameTemplateDbo;
}
