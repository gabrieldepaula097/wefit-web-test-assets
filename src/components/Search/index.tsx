import { MouseEvent, SetStateAction, useState } from "react";
import { AddToCart, CartCounter, IconButton, IconContainer, MovieCard, MovieImg, MovieInfo, MovieName, MoviePrice, MoviesContainer, SearchBar, SearchBarWrapper, SearchIcon, SearchResult, SearchWrapper } from "./styles"
import iconSearch from '../../assets/search.svg'
import iconAddToCart from '../../assets/addToCart.svg'

export type SearchResult = {
  title: string; price: number; id: string; image: string
}

export type SearchProps = {
  movies?: Array<SearchResult> | undefined
}

const Search = ({movies}: SearchProps) => {
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

  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchBar type="text" placeholder="Buscar filme pelo nome" onChange={handleOnChange} onBlur={() => handleFilter(searchTerm, movies)} value={searchTerm} />
        <SearchIcon src={iconSearch} onClick={() => handleFilter(searchTerm, movies)} />
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
            <AddToCart>
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