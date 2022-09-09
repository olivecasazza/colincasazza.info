import { IGameTemplateDbo } from "@app/utils/gameTemplate";
import { doc, Firestore, setDoc } from "firebase/firestore";

export async function addOrUpdateGameTemplateDbo(db: Firestore, gameTemplateDbo: IGameTemplateDbo) {
  const gameTemplatesRef = doc(db, 'GameTemplates', gameTemplateDbo.id);
  await setDoc(gameTemplatesRef, gameTemplateDbo);
}
