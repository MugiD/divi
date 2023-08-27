import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';

export function onAuthChanged(callback: (user: User | null) => void) {
    onAuthStateChanged(auth, callback);
}
