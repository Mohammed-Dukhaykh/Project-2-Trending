import Category from "./Componets/Category"
import NavbarItem from "./Componets/NavbarItem"
import CarousolItem from "./Componets/Carousol"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes } from "react-router"
import Movie from "./Pages/Movie"
import PostsContext from "./Utils/PostsContext"
import Home from "./Pages/Home"
import Books from "./Pages/Books"

function App() {
  const [films, setFilms] = useState([])
  const [books, setBooks] = useState([])
const getBooks =  () => {
  const options = {
    method: "GET",
    url: "https://goodreads-books.p.rapidapi.com/lists",
    params: { page: "1" },
    headers: {
      "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
      "x-rapidapi-key": "5b44381711msh9d91a31c4b70497p157cdajsn881d20d4eff0",
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
      setBooks(response.data)

    })
    .catch(function (error) {
      console.error(error)
    })
}
 

  const getFilms = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=666376e7ed7c6a4d1e103f6bfcfe0cbd&page=1"
    )
    const resultItem = response.data
    setFilms(resultItem.results)
  }

  useEffect(() => {
    getFilms()
    getBooks()
  }, [])
  console.log(films)

  const store = {
    films: films,
    books : books
  }

  return (
    <PostsContext.Provider value={store}>
      <NavbarItem />
      <Routes>
        <Route path="/films" element={<Movie />} />
        <Route path="/" element={<Home />} />
        <Route path="/books" element={< Books/>}/>
      </Routes>
    </PostsContext.Provider>
  )
}

export default App
