import { Button } from '../components/Button';

import { useContext, useEffect, useState } from 'react'
import { useMovies }from '../hooks/useMovies'



  
export function SideBar() {
  
  function handleClickButtonIntern(id: number) {
    handleClickButton(id)

  }


const { genres, selectedGenreId, handleClickButton } = useMovies();



  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButtonIntern(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}
