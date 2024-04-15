interface IMovie {
  title: string
  price: number
  id: string
  image: string
  count: number
}

type MoviesState = {
  movies: IMovie[]
}

type MovieAction = {
  type: string
  movie: IMovie
}

type DispatchType = (args: MovieAction) => MovieAction