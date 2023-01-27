import { useState, useEffect } from "react"
import MoviesCard from "../components/MoviesCard"
import './MoviesGrid.css'

import Loader from "../components/Loadder"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

function Home() {

  const [topMovies, setTopMovies] = useState([])
  const [removeLoader, setRemoveLoader] = useState(false)

  const getTopRateMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()


    setTopMovies(data.results)
  }

  useEffect(() => {
   setTimeout(
    ()=> {
      const topRateUrl = `${moviesURL}top_rated?${apiKey}`

      getTopRateMovies(topRateUrl)
      setRemoveLoader(true)
    }, 1000)
  }, [])

  return (
  <div className="container">
    <h2 className="title">Melhores Filmes:</h2>

    <div className="movies-container">

      {topMovies.length > 0 && topMovies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
    </div>


    {!removeLoader && <Loader/>}
  </div>
  )
}

export default Home
