import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Movie } from "components/Search"

export interface IMovie {
  title: string
  price: number
  id: string
  image: string
  count: number
}

export type FilteredMovies = Array<Movie> | undefined

export interface MovieInitialState {
  movies: IMovie[],
  totalPrice: number,
  totalItems: number, 
  searchTerm: string,
  filteredMovies: FilteredMovies
}

const initialState: MovieInitialState = {
  movies: [],
  totalPrice: 0,
  totalItems: 0,
  searchTerm: '',
  filteredMovies: [],
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<IMovie>) => {
        state.movies = [...state.movies, action.payload]
        state.totalItems = state.totalItems + 1
        state.totalPrice = Number((state.totalPrice).toFixed(2)) + Number((action.payload.price).toFixed(2))
    },
    sumMovie: (state, action: PayloadAction<IMovie>) => {
      state.movies = state.movies.map((movie) => {
        if(movie.id === action.payload.id){
          movie.count = movie.count + 1
          state.totalItems = state.totalItems + 1
          state.totalPrice = Number((state.totalPrice).toFixed(2)) + Number((action.payload.price).toFixed(2))
        }
        return movie
      })
    },
    removeMovie: (state, action: PayloadAction<IMovie>) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload.id)
        state.totalItems = state.totalItems - action.payload.count
        state.totalPrice = Number((state.totalPrice).toFixed(2)) - Number((action.payload.price * action.payload.count).toFixed(2))
    },
    subMovie: (state, action: PayloadAction<IMovie>) => {
      state.movies = state.movies.map((movie) => {
        if(movie.id === action.payload.id){
          movie.count = movie.count - 1
          state.totalItems = state.totalItems - 1
          state.totalPrice = Number((state.totalPrice).toFixed(2)) - Number((action.payload.price).toFixed(2))
        }
        return movie
      })
    },
    purchaseCompleted: (state, action: PayloadAction<MovieInitialState>) => {
      state.movies = action.payload.movies
      state.totalItems = action.payload.totalItems
      state.totalPrice = action.payload.totalPrice
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setFilteredMovies: (state, action: PayloadAction<FilteredMovies>) => {
      state.filteredMovies = action.payload
    },
  }
})

export const { addMovie, sumMovie, removeMovie, subMovie, purchaseCompleted, setSearchTerm, setFilteredMovies } = movieSlice.actions
export default movieSlice.reducer
