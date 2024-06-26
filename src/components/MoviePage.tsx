import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import MoviesList from './MoviesList';
import {NavigationMenu} from './NavigationMenu';

const MoviePage = () =>
{
    
  const [searchText, setSearchText] = useState<string | null>(null);
  const [movieType,setMovieType]  = useState<'movies-in-theaters' | 'movies-coming' | 'top-rated-india' | 'top-rated-movies' | 'favourite'>('movies-in-theaters');
  const [favouriteTab,setFavouriteTab] = useState<boolean>(false);
  const newTabClick = (newTab : 'movies-in-theaters' | 'movies-coming' | 'top-rated-india' | 'top-rated-movies' | 'favourite' ) =>
  {    
    if(newTab == 'favourite')
    {
    setFavouriteTab(true);
    setMovieType('movies-in-theaters');
    }
    else
    {
        setFavouriteTab(false);
        setMovieType(newTab);
    }
  }
  const fnsetSearchText = (searchText : string)  =>
  {
    setSearchText(searchText);
    console.log(searchText);
  }
    return (
        <>
       <NavigationMenu newTabClick={newTabClick} fnsetSearchText={fnsetSearchText}/>
       <MoviesList typeOfMovie={movieType} isFavourites={favouriteTab} searchText={searchText}/>
      </>
       
    );
}

export default MoviePage;