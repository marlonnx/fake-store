import { useNavigate } from '@solidjs/router';
import { Accessor, createContext, createSignal, JSX, useContext } from 'solid-js';
import httpClient from '../configs/axios_client';
import { User } from '../models/user';
import { getCurrentUser, loginWithEmailAndPassword } from './auth_service';

export interface AuthContextProps {
  children: JSX.Element;
}

export interface AuthContextModel {
  user: Accessor<User | undefined>;
  logout(): void;
  login(username: string, password: string): Promise<void>;
  token?: string | null;
}

export const AuthContext = createContext<AuthContextModel>();

export function AuthProvider(props: AuthContextProps) {
  const [user, setUser] = createSignal<User>();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (token) {
    setToken(token);
    getCurrentUser().then((v) => setUser(v));
  }
  const value: AuthContextModel = {
    user,
    logout(): void {
      localStorage.clear();
      httpClient.defaults.headers.common['Authorization'] = null;
      navigate('/');
      setUser(undefined);
    },
    async login(username: string, password: string) {
      const t = await loginWithEmailAndPassword(username, password);
      localStorage.setItem('token', t);
      setToken(t);
      const u = await getCurrentUser();
      setUser(u);
      navigate('/');
    },
    token,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

function setToken(token: string) {
  httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
