import { useState, useEffect } from 'react'

import { Movie } from 'types/types'

interface UseFetchResult {
  data: Array<Movie> | undefined
  isPending: boolean
}

const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<Array<Movie> | undefined>(undefined)
  const [isPending, setIsPending] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Error fetching movies data')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
        })
    }, 1000)
  }, [url])

  return { data, isPending }
}

export default useFetch
