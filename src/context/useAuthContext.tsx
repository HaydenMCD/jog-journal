import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';

import {
  User as FirebaseUser,
  UserInfo,
  UserMetadata,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
  AuthErrorCodes,
  AuthError,
  AuthErrorMap,
} from 'firebase/auth';

import { auth } from '../firebase';

export interface AuthContextType extends UserInfo {
  user: FirebaseUser | null;
  loading: boolean;
  emailVerified: boolean;
  error: AuthError | null;
  signInWithGoogle: () => Promise<void>;
  userSignIn: (email: string, password: string) => Promise<void>;
  userSignUp: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  userLogOut: (userId: string) => Promise<object>;
}

export interface AuthContextValue {
  user: FirebaseUser | null;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
});

export const useAuth = () => useContext(AuthContext);
