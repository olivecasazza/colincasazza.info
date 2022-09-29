import { auth } from '@app/services/firebase';
import { IUser, IUserDbo } from '@app/utils/user/user';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export async function createUser(props: {
  email: string;
  password: string;
  name: string;
}) {
  const response = await createUserWithEmailAndPassword(
    auth,
    props.email,
    props.password
  );
  if (response) {
    return;
  } else {
    throw new Error('Unable to register user');
  }
}

export async function signIn(props: {
  email: string;
  password: string;
}): Promise<IUserDbo> {
  const response = await signInWithEmailAndPassword(
    auth,
    props.email,
    props.password
  );
  return response.user as IUserDbo
}

export async function logOut() {
  await signOut(auth);
}
