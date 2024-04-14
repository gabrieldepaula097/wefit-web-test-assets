import Search from 'components/Search';
import useFetch from '../../api/useFetch';


const Home = () => {
  const { data: movies, isPending, error } = useFetch('http://localhost:8000/products')

  return(
  <>
    {isPending}
    {movies && <Search movies={movies} ></Search>}
  </>
  )
}

export default Home
