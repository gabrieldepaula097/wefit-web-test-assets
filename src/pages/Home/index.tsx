import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import useFetch from 'api/useFetch'
import { RootState } from 'redux'
import { addMovie, setSearchTerm, sumMovie } from 'redux/MovieReducer'

import {
  AddToCart,
  CartCounter,
  IconButton,
  IconContainer,
  MovieCard,
  MovieImg,
  MovieInfo,
  MovieName,
  MoviePrice,
  MoviesContainer,
  SearchBar,
  SearchBarWrapper,
  SearchIcon,
  SearchResult,
  SearchWrapper
} from '../../components/Search/styles'
import Spinner from 'components/Spinner'

import useDeviceDetection from 'utils/useDeviceDetection'

import iconAddToCart from '../../assets/addToCart.svg'
import iconSearch from '../../assets/search.svg'
import { IMovie, Movie } from 'types/types'

const Home = () => {
  const isMobile = useDeviceDetection()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const movieList = useSelector((state: RootState) => state.cart.movies)

  const [homeSearchTerm, setHomeSearchTerm] = useState('')

  const handleOnChange = (event: { target: { value: string } }) => {
    setHomeSearchTerm(event.target.value)
  }

  const handleFilter = () => {
    dispatch(setSearchTerm(homeSearchTerm))
    navigate('/search')
  }

  const handleClick = (movie: Movie) => {
    const findMovie = movieList?.find(
      (movieSaved: Movie) => movieSaved.id === movie.id
    )

    if (findMovie !== undefined) {
      return dispatch(sumMovie(findMovie))
    }

    const movieToSend = {
      title: movie.title,
      price: movie.price,
      id: movie.id,
      image: movie.image,
      count: 1
    }

    return dispatch(addMovie(movieToSend))
  }

  const getMovieCount = (id: string) => {
    const movie = movieList?.find((movie: IMovie) => movie.id === id)
    if (movie) {
      return movie.count
    }
    return 0
  }

  const { data: movies, isPending } = useFetch('http://localhost:8000/products')

  return (
    <>
      {isPending && <Spinner />}
      {movies && (
        <SearchWrapper>
          <SearchBarWrapper>
            <SearchBar
              type="text"
              placeholder="Buscar filme pelo nome"
              onChange={handleOnChange}
              onBlur={() => handleFilter()}
              value={homeSearchTerm}
            />
            <SearchIcon src={iconSearch} onClick={() => handleFilter()} />
          </SearchBarWrapper>
          <SearchResult>
            <MoviesContainer isMobile={isMobile}>
              {movies &&
                movies.map((movie: Movie) => (
                  <MovieCard key={movie.id} className="movie">
                    <MovieInfo>
                      <MovieImg src={movie.image} />
                      <MovieName>{movie.title}</MovieName>
                      <MoviePrice>R$ {movie.price.toFixed(2)}</MoviePrice>
                    </MovieInfo>
                    <AddToCart onClick={() => handleClick(movie)}>
                      <IconContainer>
                        <IconButton src={iconAddToCart} />
                        <CartCounter>{getMovieCount(movie.id)}</CartCounter>
                      </IconContainer>
                      ADICIONAR AO CARRINHO
                    </AddToCart>
                  </MovieCard>
                ))}
            </MoviesContainer>
          </SearchResult>
        </SearchWrapper>
      )}
    </>
  )
}

export default Home
