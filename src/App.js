import Category from "./Componets/Category"
import NavbarItem from "./Componets/NavbarItem"
import HeaderItem from "./Componets/HeaderItem"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes, useNavigate } from "react-router"
import Movie from "./Pages/Movie"
import PostsContext from "./Utils/PostsContext"
import Home from "./Pages/Home"
import Books from "./Pages/Books"
import GamingItems from "./Pages/Gaming"
import Sports from "./Pages/Sports"
import MusicItems from "./Pages/Music"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import TrendingPosts from "./Pages/TrendingPosts"
import AddPosts from "./Pages/AddPosts"
import Profile from "./Pages/Profile"

function App() {
  // This is set of Use state we use in Code And Use Navigate we use 
  const [trndingPost, setTrendingPost] = useState([])
  const [films, setFilms] = useState([])
  const [books, setBooks] = useState([])
  const [games, setGames] = useState([])
  const [music, setMusic] = useState([])
  const [profile, setProfile] = useState(null)
  const [sports, setSports] = useState([])
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  // End Comment

 // This is get axios get for Trending post that show all share post
  const getTrendingPosts = async () => {
    const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/trending-548/items")
    setTrendingPost(response.data)
  }
  // End Comment

  // This is Axios post for add post 
  const addPost = async e => {
    console.log("hhhhhhh")
    e.preventDefault()
    const form = e.target
    console.log("mmmmm")
    const postBody = {
      image: form.elements.image.value,
      title: form.elements.description.value,
    }
    await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/trending-548/items", postBody, {
      headers: {
        Authorization: localStorage.postToken,
      },
    })
    getTrendingPosts()
    navigate("/tending-posts")
  }
  // End Comment

  // This Function We use To Show Model When Enter Edit Button
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }
  // End Comment
  // This axios put for Edit Your Post 
  const confirmPost = async (e, postId) => {
    e.preventDefault()
    const form = e.target
    const postBody = {
      title: form.elements.description.value,
      image: form.elements.image.value,
    }
    await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/trending-548/items/${postId}`, postBody, {
      headers: {
        Authorization: localStorage.postToken,
      },
    })
    getTrendingPosts()
  }
  // End Comment

  // This axios Delete For Delete Your Post
  const removePost = async e => {
    const postId = e.target.id
    await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/trending-548/items/${postId}`, {
      headers: {
        Authorization: localStorage.postToken,
      },
    })
    getTrendingPosts()
  }
  // End Comment

  // This is Axios Post For Signup 
  const signup = async e => {
    e.preventDefault()
    const form = e.target

    const postBody = {
      firstName: form.elements.firstname.value,
      lastName: form.elements.lastname.value,
      password: form.elements.password.value,
      email: form.elements.email.value,
      photo: form.elements.photo.value,
    }
    await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", postBody, {
      headers: {
        Authorization: localStorage.postToken,
      },
    })
    navigate("/login")
  }
  // End Comment

  // This axios post for login
  const login = async e => {
    e.preventDefault()
    const form = e.target

    const postBody = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", postBody, {
      headers: {
        Authorization: localStorage.postToken,
      },
    })
    const token = response.data
    localStorage.postToken = token
    getProfile()
    navigate("/")
  }
  // End Comment

  // This is function we use to logout 
  const logout = () => {
    localStorage.removeItem("postToken")
    getTrendingPosts()
    navigate("/")
  }
  // End Comment

  // This is axios get for get profile
  const getProfile = async () => {
    const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
      headers: {
        Authorization: localStorage.postToken,
      },
    })
    setProfile(response.data)
    console.log(response.data)
  }
  // End Comment

  // This axios axios get For films
  const getFilms = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=666376e7ed7c6a4d1e103f6bfcfe0cbd&page=1"
    )
    const resultItem = response.data
    setFilms(resultItem.results)
  }
  // End Comment

  // This axios get For get games
  const getGames = () => {
    const options = {
      method: "GET",
      url: "https://steam-store-data.p.rapidapi.com/api/featured/",
      headers: {
        "x-rapidapi-host": "steam-store-data.p.rapidapi.com",
        "x-rapidapi-key": "aab17fc00dmsh51739c9a720ec3cp115014jsna2f612076b1f",
      },
    }

    axios
      .request(options)
      .then(function (response) {
        const testt = response.data
        setGames(testt.featured_win)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  //End Comment

  // This is axios get for get Books 
  const getBooks = () => {
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
        setBooks(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  // End Comment

  // This Is Axios get for get sports
  const getSports = async () => {
    const response = await axios.get("https://sports.api.decathlon.com/sports")
    const attributesItems = response.data.data
    setSports(attributesItems)
  }
  // End Comment

  // This is axios get for get music 
  const getMusic = () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks",
      params: { id: "40008598", locale: "en-US" },
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "5b44381711msh9d91a31c4b70497p157cdajsn881d20d4eff0",
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        const allMusic = response.data
        setMusic(allMusic.tracks)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  // End Comment

  // This is useEffect we use in program
  useEffect(() => {
    getTrendingPosts()
    getFilms()
    getBooks()
    getGames()
    getSports()
    getMusic()
    if (localStorage.postToken) {
      getProfile()
    }
  }, [])
  // End Comment

  // This is The store That we Pass From Elements of All pages and componets
  const store = {
    trndingPost: trndingPost,
    films: films,
    books: books,
    games: games,
    sports: sports,
    music: music,
    signup: signup,
    login: login,
    logout: logout,
    addPost: addPost,
    profile: profile,
    handleClose: handleClose,
    handleShow: handleShow,
    show: show,
    confirmPost: confirmPost,
    removePost: removePost,
  }
  // End Comment

  // This return That will be Run In pages
  return (
    <PostsContext.Provider value={store}>
      <NavbarItem />
      <Routes>
        <Route path="/films" element={<Movie />} />
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/games" element={<GamingItems />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/music" element={<MusicItems />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tending-posts" element={<TrendingPosts />} />
        <Route path="/add-post" element={<AddPosts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </PostsContext.Provider>
  )
  // End Comment
}

export default App
