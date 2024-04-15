import { useState } from "react";
import { AddToCart, CartCounter, IconButton, IconContainer, MovieCard, MovieImg, MovieInfo, MovieName, MoviePrice, MoviesContainer, SearchBar, SearchBarWrapper, SearchIcon, SearchResult, SearchWrapper } from "./styles"
import iconSearch from '../../assets/search.svg'
import iconAddToCart from '../../assets/addToCart.svg'
import { useDispatch, useSelector } from "react-redux";
import { addMovie, sumMovie } from "../../redux/MovieReducer";
import { RootState } from "redux";

export type SearchResult = {
  title: string; price: number; id: string; image: string
}

export type SearchProps = {
  movies?: Array<SearchResult> | undefined
}

const Search = ({movies}: SearchProps) => {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.cart.movies)

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = (event: { target: { value: string; }; }) => {
    setSearchTerm(event.target.value);
 };

  const handleFilter = (searchTerm: string, movies: Array<SearchResult> | undefined) => {
    const value = searchTerm.toUpperCase();
    console.log({value, movies});
    const filtered = movies?.filter(movie => movie.title.toUpperCase().includes(value));
    setFilteredMovies(filtered);
  };

  const handleClick = (movie: SearchResult) => {
    let findMovie = movieList?.find((movieSaved: SearchResult) => movieSaved.id === movie.id)

    if(findMovie !== undefined){
      return dispatch(sumMovie(findMovie))
    }

    let movieToSend = {
      title: movie.title,
      price: movie.price,
      id: movie.id,
      image: movie.image,
      count: 1
    }

    return dispatch(addMovie(movieToSend)) 
}

  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchBar type="search" placeholder="Buscar filme pelo nome" value={searchTerm} />
        <SearchIcon src={iconSearch} />
      </SearchBarWrapper>
      <SearchResult>
        <MoviesContainer>
        {filteredMovies && filteredMovies.map((movie: { title: string, price: number, id: string, image: string }) => 
          <MovieCard key={movie.id} className="movie">
            <MovieInfo>
              <MovieImg src={movie.image} />
              <MovieName>{movie.title}</MovieName>
              <MoviePrice>R$ {movie.price}</MoviePrice>
            </MovieInfo>
            <AddToCart onClick={() => handleClick(movie)}>
              <IconContainer>
                <IconButton src={iconAddToCart} />
                <CartCounter>0</CartCounter>
              </IconContainer>
              ADICIONAR AO CARRINHO
            </AddToCart>
          </MovieCard>
        )}
        </MoviesContainer>
      </SearchResult>
    </SearchWrapper>
  )
}

export default Search