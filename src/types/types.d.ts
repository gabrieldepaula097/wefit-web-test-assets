export interface IMovie {
  title: string
  price: number
  id: string
  image: string
  count: number
}

export type Movie = {
  title: string
  price: number
  id: string
  image: string
}

export type FilteredMovies = Array<Movie> | undefined

export type MoviesState = {
  movies: IMovie[]
}

export type MovieAction = {
  type: string
  movie: IMovie
}

export type DispatchType = (args: MovieAction) => MovieAction
