import { createContext, useState, useEffect } from 'react';
import { obtenirInfomationsClient } from '../_services/IdentificationService';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setIsAuth(token != null);

        if (token != null) {
            if (client == null) updateClientInformations();
        }

        setLoading(false);
    }, []);

    const updateClientInformations = () => {
        obtenirInfomationsClient().then((client) => {
            setClient(client)
        })
    }

    const login = (token) => {
        localStorage.setItem("accessToken", token);

        updateClientInformations();

        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        setIsAuth(false);
    };

    const checkAuth = () => {
        const token = localStorage.getItem("accessToken");
        const authStatus = token != null;
        setIsAuth(authStatus);
        return authStatus;
    };

    const value = {
        isAuth,
        loading,
        login,
        logout,
        checkAuth,
        client
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}