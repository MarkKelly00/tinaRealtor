import React, { useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  type User as FirebaseUser,
  getAuth
} from 'firebase/auth';
import { auth as firebaseAuth } from '../services/firebase';
import type { User } from '../types';
import { AuthContext } from './auth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Use a fallback auth if the imported one is undefined
  const auth = firebaseAuth || getAuth();

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError(null);
    } catch (error) {
      console.error("Login error:", error);
      setAuthError("Failed to log in. Please check your credentials.");
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAuthError(null);
    } catch (error) {
      console.error("Registration error:", error);
      setAuthError("Failed to register. This email might already be in use.");
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setAuthError(null);
    } catch (error) {
      console.error("Google sign-in error:", error);
      setAuthError("Failed to sign in with Google.");
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setAuthError(null);
    } catch (error) {
      console.error("Logout error:", error);
      setAuthError("Failed to log out.");
      throw error;
    }
  };

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user: FirebaseUser | null) => {
        if (user) {
          setCurrentUser({
            uid: user.uid,
            email: user.email!,
            displayName: user.displayName || undefined,
            photoURL: user.photoURL || undefined,
          });
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Auth state change error:", error);
      setLoading(false);
      setAuthError("Authentication service is currently unavailable.");
      return () => {};
    }
  }, [auth]);

  const value = {
    currentUser,
    login,
    register,
    logout,
    signInWithGoogle,
    loading,
    authError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 