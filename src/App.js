import Category from "./Componets/Category"
import NavbarItem from "./Componets/NavbarItem"
import CarousolItem from "./Componets/Carousol"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes } from "react-router"
import Movie from "./Pages/Movie"
import PostsContext from "./Utils/PostsContext"
import Home from "./Pages/Home"


function App() {
  const [films , setFilms] = useState([])

  const getFilms = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=666376e7ed7c6a4d1e103f6bfcfe0cbd&page=1")
    const resultItem = response.data
    setFilms(resultItem.results)
  }

  useEffect( () => {
    getFilms()
    
  } , [])
  console.log(films)

  const store = {
    films : films ,

  }
  
  return (
    <PostsContext.Provider value={store}>
    <NavbarItem />
    <Routes>
      <Route path="/films" element={<Movie/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
    </PostsContext.Provider>
  )
}

export default App
