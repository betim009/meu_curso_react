import { createContext } from "react";

export type Pokemon = {
  id: number;
  nome: string;
};

export type AppContextType = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

export const AppContext = createContext<AppContextType | null>(null);