"use client";
import { useState, type ReactNode } from "react";
import { AppContext, type AppContextType, type Pokemon } from "./context";

export function AppProvider({ children }: { children: ReactNode }) {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const contextValue: AppContextType = {
        pokemons,
        setPokemons,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}