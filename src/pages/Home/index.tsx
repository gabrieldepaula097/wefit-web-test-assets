import useFetch from 'api/useFetch';
import Spinner from 'components/Spinner';
import { AddToCart, CartCounter, IconButton, IconContainer, MovieCard, MovieImg, MovieInfo, MovieName, MoviePrice, MoviesContainer, SearchBar, SearchBarWrapper, SearchIcon, SearchResult, SearchWrapper } from "../../components/Search/styles"
import iconSearch from '../../assets/search.svg'
import iconAddToCart from '../../assets/addToCart.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, setSearchTerm, sumMovie } from 'redux/MovieReducer';
import { RootState } from 'redux';
import { useState } from 'react';
import { Movie } from 'components/Search';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.cart.movies)

  const [homeSearchTerm, setHomeSearchTerm] = useState('')
  
  const handleOnChange = (event: { target: { value: string; }; }) => {
    setHomeSearchTerm(event.target.value)
  };

  const handleFilter = () => {
    dispatch(setSearchTerm(homeSearchTerm))
    navigate("/search");
  }

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
  
  const { data: movies, isPending, error } = useFetch('http://localhost:8000/products')

  return(
  <>
    {isPending && <Spinner/>}
    {movies && (
      <SearchWrapper>
      <SearchBarWrapper>
        <SearchBar type="text" placeholder="Buscar filme pelo nome" onChange={handleOnChange} onBlur={() => handleFilter()} value={homeSearchTerm} />
        <SearchIcon src={iconSearch} onClick={() => handleFilter()} />
      </SearchBarWrapper>
      <SearchResult>
        <MoviesContainer>
        {movies && movies.map((movie: Movie) => 
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
      </SearchResult>
    </SearchWrapper>

    )}
  </>
  )
}

export default Home
