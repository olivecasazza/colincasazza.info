import { auth, db } from '@app/services/firebase';
import { IUserDbo } from '@app/utils/user/user';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export async function createUser(props: {
  email: string;
  password: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
}): Promise<IUserDbo> {
  if (!props.password) throw new Error('password is required');
  if (!props.email) throw new Error('email is required');
  const response = await createUserWithEmailAndPassword(
    auth,
    props.email,
    props.password
  );
  const newUser: IUserDbo = {
    uid: response.user.uid,
    games: [],
    friends: [],
    emailVerified: false,
    metadata: {},
    displayName: props.displayName,
    email: props.email,
  };
  await setDoc(doc(db, 'Users', newUser.uid), newUser);
  return newUser;
}

export async function updateUserInfo(props: {
  uid: string;
  firstName: string;
  lastName: string;
  displayName: string;
}): Promise<void> {
  const userRef = doc(db, 'Users', props.uid);
  return await updateDoc(userRef, props);
}

export async function loadUserDboFromId(props: {
  uid: string;
}): Promise<IUserDbo> {
  const userRef = doc(db, 'Users', props.uid);
  const userDoc = await getDoc(userRef);
  const data = userDoc.data();
  if (!data)
    throw new Error(
      `cannot load user dbo for uid: ${props.uid}. user not found.`
    );
  return data as IUserDbo; //! <:)
}

export async function logIn(props: {
  email: string;
  password: string;
}): Promise<IUserDbo> {
  const response = await signInWithEmailAndPassword(
    auth,
    props.email,
    props.password
  );
  localStorage.setItem('jwt', await response.user.getIdToken(true));
  return await loadUserDboFromId({ uid: response.user.uid });
}

export async function logOut() {
  await signOut(auth);
}
