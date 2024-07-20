import React, { createContext, useState, useContext } from 'react';

// Create a context for session
const SessionContext = createContext();

// Create a provider component
export function SessionProvider({ children }) {
    const [session, setSession] = useState({
        accessToken: null,
        refreshToken: null,
        user: null,
    });

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    return useContext(SessionContext);
}
