import { useContext, createContext } from "react";
import Player from "../../player/player";

// Define el tipo de contexto que se espera
type MusicPlayerContextType = Player | null;

// Crea el contexto y tipa su valor inicial como null
export const MusicPlayerContext = createContext<MusicPlayerContextType>(null);

// Define el tipo de retorno de la función useMusicPlayer
export const useMusicPlayer = (): MusicPlayerContextType => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer debe usarse dentro de un MusicPlayerProvider");
  }
  return context;
};
