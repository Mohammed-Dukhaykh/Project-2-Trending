import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Card, Image, Row, Col, Container } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { AiOutlineComment } from "react-icons/ai"
import "../style.css"

function TrendingPosts() {
  const { trndingPost, profile } = useContext(PostsContext)

  return (
    <div class="trendingpost">
      <header class="trendingpagehead">
        <h1 class="trendingtitle">People Trending</h1>
        <p class="trendingdetails">Share Your Trending And Make The Others To See Your Posts .</p>
      </header>
      <div class="logoImg123">
        <img  src="https://pbs.twimg.com/media/FE8GAFsX0AMX9q3?format=png&name=900x900"/>
        </div>
        <br />
      <div class="row">
        <div class="col-lg-11 mx-auto"></div>
      </div>
      <div  class="row py-8">
        {trndingPost.map(post => (
          <div class="col-lg-4">
            <figure class="posttrends1234" >
              <CardHeader>
                <div className="d-flex justify-content-around">
                  <Image src={post._user.photo} roundedCircle height="60px" />
                  <h5>
                    {post._user.firstName} {post._user.lastName}
                  </h5>
                </div>
              </CardHeader>
              <img style={{ height: "380px" }} src={post.image} alt="" class="w-100 card-img-top" />
              <figcaption class="p-4 card-img-bottom">
                <h5>
                  <AiOutlineComment /> {post._user.firstName} : {post.title}
                </h5>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <div class="separator my-3"></div>
    </div>
  )
}

export default TrendingPosts
