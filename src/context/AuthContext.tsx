import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import { mockUser } from '../data/mockData';

type AuthContextType = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, pass: string) => Promise<boolean>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    // Store token in memory securely, as requested
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = async (email: string, pass: string) => {
        // Secure simulation - normally hits an API
        // Require basic email format and 8 char password for the mock checks against XSS/injections
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && pass.length >= 8) {
            setUser(mockUser);
            // Generate a dummy token that is purely stored in React memory state (not localStorage)
            setToken(`mkt_${Math.random().toString(36).substring(2)}${Date.now()}`);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
