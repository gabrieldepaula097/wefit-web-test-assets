import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IMovie {
  title: string
  price: number
  id: string
  image: string
  count: number
}
export interface MovieInitialState {
  movies: IMovie[],
  totalPrice: number,
  totalItems: number, 
}

const initialState: MovieInitialState = {
  movies: [],
  totalPrice: 0,
  totalItems: 0
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
    }
  }
})

export const { addMovie, sumMovie } = movieSlice.actions
export default movieSlice.reducer