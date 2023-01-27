import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Loader from "../components/Loadder"
import MoviesCard from "../components/MoviesCard"



const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css'


function Search() {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const [removeLoader, setRemoveLoader] = useState(false)

  const query = searchParams.get("q")



  const getSearchMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()


    setMovies(data.results)
  }

  useEffect(() => {
   setTimeout (
    () => {
      const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`

      getSearchMovies(searchWithQueryUrl)
      setRemoveLoader(true)
    }, 1000)
  }, [query])

  return (
    <div className="container">
      <h2 className="title"> Resultados para: <span className="query-text">{query}</span>
      </h2>

      <div className="movies-container">
     
      

        {movies.length > 0 && movies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
      </div>
    
      {!removeLoader && <Loader/>}


    </div>


  )

}

export default Search

