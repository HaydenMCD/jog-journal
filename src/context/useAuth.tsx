import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  ReactNode,
} from 'react';

import { flushSync } from 'react-dom';

import type {
  User,
  AuthProvider,
  UserInfo,
  UserMetadata,
  AuthError,
  AuthErrorMap,
  Auth,
  UserCredential,
  UserProfile,
} from 'firebase/auth';

import {
  onAuthStateChanged,
  signInWithPopup,
  User as FirebaseUser,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  SignInMethod,
  updateCurrentUser,
  updateProfile,
  updatePassword,
  confirmPasswordReset,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  reauthenticateWithCredential,
  getIdToken,
  AuthErrorCodes,
  deleteUser,
} from 'firebase/auth';

import { auth } from '../firebase';

export type AuthContextType = {
  isAuthenticated: boolean;
  isInitialLoading: boolean;
  providerLogin: (provider: AuthProvider) => Promise<void>;
  emailPasswordLogin: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  signUpWithEmailPassword: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  getUserProfile: () => Promise<UserProfile | null>;
  user: FirebaseUser | null;
  profile: UserProfile | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      flushSync(() => {
        setUser(user);
        setIsInitialLoading(false);
      });
    });
    return () => unsubscribe();
  }, []);

  const logout = useCallback(async () => {
    console.log('Logging out...');
    await signOut(auth);
    setUser(null);
    setIsInitialLoading(false);
  }, []);

  const providerLogin = useCallback(async (provider: AuthProvider) => {
    const result = await signInWithPopup(auth, provider);
    flushSync(() => {
      setUser(result.user);
      setIsInitialLoading(false);
    });
  }, []);

  const getUsersProfile = useCallback(async (provider: AuthProvider) => {
    const result = await signInWithPopup(auth, provider);
    flushSync(() => {
      setUser(result.user);
      setIsInitialLoading(false);
    });
  }, []);

  const signUpWithEmailPassword = useCallback(
    async (email: string, password: string, confirmPassword: string) => {
      // check the confirm password field matches the password
      // confirm the user email is not in use
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      flushSync(() => {
        setUser(result.user);
        setIsInitialLoading(false);
      });
    },
    []
  );

  return (
    <AuthContext.Provider
      value={{
        isInitialLoading,
        isAuthenticated,
        user,
        providerLogin,
        signUpWithEmailPassword,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
