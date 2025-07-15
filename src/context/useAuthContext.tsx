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
  signOut as FirebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
  AuthErrorCodes,
  AuthError,
  AuthErrorMap,
} from 'firebase/auth';

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

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('useAuth must be used within AuthProvider');
  return authContext;
};
