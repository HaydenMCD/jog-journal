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
  onAuthStateChanged,
  type User,
  type AuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase';

export type AuthContextType = {
  isAuthenticated: boolean;
  isInitialLoading: boolean;
  login: (provider: AuthProvider) => Promise<void>;
  logout: () => Promise<void>;
  user: User | null;
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

  return (
    <AuthContext.Provider
      value={{ isInitialLoading, isAuthenticated, user, login, logout }}>
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
