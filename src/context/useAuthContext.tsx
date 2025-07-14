import { createContext, useContext } from 'react';
import { UserInfo } from 'firebase/auth';

export interface User extends UserInfo {
  emailVerified: boolean;
  userSignIn: (userId: string) => Promise<AuthContextValue>;
  userSignUp: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<AuthContextValue>;
  userLogOut: (userId: string) => Promise<object>;
}

export interface AuthContextValue {
  user: User | null;
}

export default AuthContext;
