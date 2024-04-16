import { useEffect } from "react";
import { AddToCart, CartCounter, IconButton, IconContainer, MovieCard, MovieImg, MovieInfo, MovieName, MoviePrice, MoviesContainer, SearchBar, SearchBarWrapper, SearchIcon, SearchResult, SearchWrapper } from "./styles"
import iconSearch from '../../assets/search.svg'
import iconAddToCart from '../../assets/addToCart.svg'
import { useDispatch, useSelector } from "react-redux";
import { FilteredMovies, addMovie, setFilteredMovies, setSearchTerm, sumMovie } from "../../redux/MovieReducer";
import { RootState } from "redux";
import { useLocation, useNavigationType, useSearchParams } from "react-router-dom";
import useFetch from "api/useFetch";
import Spinner from "components/Spinner";

export type Movie = {
  title: string; price: number; id: string; image: string
}

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navType = useNavigationType();

  const searchTerm = useSelector((state: RootState) => state.cart.searchTerm)
  const movieList = useSelector((state: RootState) => state.cart.movies)
  const filteredMovies = useSelector((state: RootState) => state.cart.filteredMovies)

  const [searchParams, setSearchParams] = useSearchParams()

  const { data: movies, isPending, error } = useFetch('http://localhost:8000/products')


  useEffect(() => {
    if(!isPending){
      handleFilter(false)
    }
  }, [isPending])

  useEffect(() => {
    if((navType === "POP")) {
      const back = searchParams.get('search')
      if(back){
        dispatch(setSearchTerm(back))
        handleFilter(true)
      }
    }
  }, [location])
  

  const handleOnChange = (event: { target: { value: string; }; }) => {
    dispatch(setSearchTerm(event.target.value))
 };

  const handleFilter = (back: boolean) => {
    let filtered: Movie[] | undefined = []
    if(!back){
      setSearchParams({ search: searchTerm})
      filtered = movies?.filter((movie: Movie) => movie.title.toUpperCase().includes(searchTerm.toUpperCase()));
    } else {
      const search = searchParams.get('search')
      filtered = movies?.filter((movie: Movie) => movie.title.toUpperCase().includes(search.toUpperCase()));
    }
    dispatch(setFilteredMovies(filtered))
  };

  const handleClick = (movie: Movie) => {
    let findMovie = movieList?.find((movieSaved: Movie) => movieSaved.id === movie.id)

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
    <>
    
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchBar type="text" placeholder="Buscar filme pelo nome" onChange={handleOnChange} onBlur={() => handleFilter(false)} value={searchTerm} />
        <SearchIcon src={iconSearch} onClick={() => handleFilter(false)} />
      </SearchBarWrapper>
      {(isPending || filteredMovies?.length < 1) && <Spinner />}
      {movies && filteredMovies && <SearchResult>
        <MoviesContainer>
        {filteredMovies && filteredMovies.map((movie: Movie) => 
          <MovieCard key={movie.id} className="movie">
            <MovieInfo>
              <MovieImg src={movie.image} />
              <MovieName>{movie.title}</MovieName>
              <MoviePrice>R$ {(movie.price).toFixed(2)}</MoviePrice>
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
      </SearchResult>}
    </SearchWrapper>
    </>
  )
}

export default Search