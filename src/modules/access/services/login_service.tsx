import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../../../shared/firebase';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<[value?: UserCredential, error?: string]> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return [userCredential];
  } catch (error: any) {
    const message = error.message ?? 'Ocorreu um erro nesta solicitação, tente novamente';
    return [undefined, message];
  }
};
