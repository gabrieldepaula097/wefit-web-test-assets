import { AddToCart, CartCounter, IconButton, IconContainer, MovieCard, MovieImg, MovieInfo, MovieName, MoviePrice, MoviesContainer, SearchBar, SearchBarWrapper, SearchIcon, SearchResult, SearchWrapper } from "./styles"
import iconSearch from '../../assets/search.svg'
import iconAddToCart from '../../assets/addToCart.svg'

export type SearchResult = {
  title: string; price: number; id: string; image: string
}

export type SearchProps = {
  movies?: Array<SearchResult> | null
}

// { name = 'React Boilerlate' }: HomeProps



const Search = ({movies}: SearchProps) => {
  return (
    <SearchWrapper>
      <SearchBarWrapper>
        <SearchBar type="search" placeholder="Buscar filme pelo nome" />
        <SearchIcon src={iconSearch} />
      </SearchBarWrapper>
      <SearchResult>
        <MoviesContainer>
        {movies && movies.map((movie: { title: string, price: number, id: string, image: string }) => 
          <MovieCard key={movie.id}>
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