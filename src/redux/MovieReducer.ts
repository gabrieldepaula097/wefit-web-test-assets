import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IMovie {
  title: string
  price: number
  id: string
  image: string
  count: number
}
export interface MovieInitialState {
  movies: IMovie[]
}

const initialState: MovieInitialState = {
  movies: []
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<IMovie>) => {
        state.movies = [...state.movies, action.payload]
    },
    sumMovie: (state, action: PayloadAction<IMovie>) => {
      state.movies = state.movies.map((movie) => {
        if(movie.id === action.payload.id){
          movie.count = movie.count + 1
        }
        return movie
      })
    }
  }
})

export const { addMovie, sumMovie } = movieSlice.actions
export default movieSlice.reducer
