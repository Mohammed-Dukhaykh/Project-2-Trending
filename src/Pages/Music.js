import { useContext } from "react"
import PostsContext from "../Utils/PostsContext"
import { Row, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../style.css"
import { FcMusic } from "react-icons/fc"
import Button from "@restart/ui/esm/Button"
import "../style.css"

function MusicItems() {
  const { music } = useContext(PostsContext)

  return (
    <section class="sectionmusic">
      <div class="container py-4">
        <h1 class="musictitle" id="pageHeaderTitle">
          Music Shazam
        </h1>

        {music.map(item => (
          <>
            <div class="musicdetail" className="d-flex flex-column">
              <a class="btnmusic" href={item.url} target="_blank" className="btn btn-primary">
                Listten to the Music <FcMusic />
              </a>
            </div>
            <article class="postcard123 ">
              <img class="postcard__img" src={item.images.coverart} alt="Image Title" height="300px" />

              <div class="postcard__text d-flex flex-column">
                <h1 class="musicname123">{item.title}</h1>
              </div>
            </article>
          </>
        ))}
      </div>
    </section>
  )
}

export default MusicItems
