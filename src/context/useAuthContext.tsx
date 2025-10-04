import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  ReactNode,
} from 'react';
import { flushSync } from 'react-dom';

import {
  type User,
  type AuthProvider,
  type UserInfo,
  type UserMetadata,
  type AuthError,
  type AuthErrorMap,
  type Auth,
  onAuthStateChanged,
  signInWithPopup,
  User as FirebaseUser,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getIdToken,
  AuthErrorCodes,
} from 'firebase/auth';

import { auth } from '../firebase';

const AuthType = typeof auth;

export type AuthContextType = {
  isAuthenticated: boolean;
  isInitialLoading: boolean;
  login: (provider: AuthProvider) => Promise<void>;
  logout: () => Promise<void>;
  signUpWithEmailPassword: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  user: FirebaseUser | null;
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

  const login = useCallback(async (provider: AuthProvider) => {
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
        login,
        logout,
        signUpWithEmailPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
