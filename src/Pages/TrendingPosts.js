import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Card, Image, Row, Col, Container,Carousel } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { AiOutlineComment } from "react-icons/ai"
import "../style.css"

function TrendingPosts() {
  const { trndingPost, profile } = useContext(PostsContext)

  return (
    <div class="trendingpost">
      <header class="trendingpagehead">
      <Carousel className="d-block w-3 mx-auto  mt-6" >
  <Carousel.Item >
    <img style={{objectFit:"cover" , opacity:"0.4" , display:"flex"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
      <h1 class="h1Carousel">Music</h1>
      <h5>Share Your Trending And Make The Others To See Your Posts</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{objectFit:"cover" , opacity:"0.4" , display:"flex"}}
      className="d-block w-100"
      src="https://www.masdargulf.com/wp-content/uploads/2021/11/FE5pcQhXsAQD-EX.jpg"
      alt="Second slide"
      height="500px"

      
    />

    <Carousel.Caption>
      <h1 class="h1Carousel">Sports</h1>
      <h5>Share Your Trending And Make The Others To See Your Posts</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{objectFit:"cover" , opacity:"0.4" , display:"flex"}}
      className="d-block w-100"
      src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2908984%2Fpexels-photo-2908984.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940"
      alt="Third slide"
      height="500px"
    />

    <Carousel.Caption>
      <h1 class="h1Carousel">Books</h1>
      <h5>Share Your Trending And Make The Others To See Your Posts</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img style={{objectFit:"cover" , opacity:"0.4" , display:"flex"}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
      <h1 class="h1Carousel">Movies</h1>
      <h5>Share Your Trending And Make The Others To See Your Posts</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img style={{objectFit:"cover" , opacity:"0.4" , display:"flex"}}
      className="d-block w-100"
      src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1174746%2Fpexels-photo-1174746.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940"
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
      <h1 class="h1Carousel">Gaming</h1>
      <h5>Share Your Trending And Make The Others To See Your Posts</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </header>
      
      <div class="logoImg123">
        <img  src="https://pbs.twimg.com/media/FE8GAFsX0AMX9q3?format=png&name=900x900"/>
        </div>
        <br />
      <div class="row">
        <div class="col-lg-11 mx-auto"></div>
      </div>
      <div  class="row py-5 px-5">
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
