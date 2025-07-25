import { createContext } from 'react';
import type { User } from '../types';

export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  authError: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  signInWithGoogle: async () => {},
  authError: null,
}); 