import { useState, ReactNode, createContext, useEffect, useContext } from 'react'
import { api } from '../services/api';

interface MoviesProviderProps {
    children: ReactNode;
  }


  interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

  interface SelectGengeId {
      selectedGenreId: number
  }

  interface MoviesContextData {
      genres: GenreResponseProps[];
      handleClickButton: ( selectedGenreId: number) => void;
      selectedGenreId: number
  }
  
export function MoviesProvider({ children }: MoviesProviderProps) {

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
          setGenres(response.data);
        });
      }, []);

    function handleClickButton(Id: number) {
        setSelectedGenreId(Id);
      }



  return (
    <MoviesContext.Provider value={{ genres, handleClickButton, selectedGenreId  }}>
      {children}
    </MoviesContext.Provider>
  );

}

export const MoviesContext = createContext<MoviesContextData>(
    {} as MoviesContextData
  );

  export function useMovies() {
    const context = useContext(MoviesContext)
    return context
  }