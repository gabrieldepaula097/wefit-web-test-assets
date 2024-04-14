import Search from 'components/Search';
import useFetch from '../../api/useFetch';
import Spinner from 'components/Spinner';


const Home = () => {
  const { data: movies, isPending, error } = useFetch('http://localhost:8000/products')

  return(
  <>
    {isPending && <Spinner/>}
    {movies && <Search movies={movies} ></Search>}
  </>
  )
}

export default Home
