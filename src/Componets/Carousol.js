import {Carousel, Container} from "react-bootstrap"
function CarousolItem() {
    return ( 
    <Container>
            <Carousel className="d-block w-70 mx-auto mt-5" >
        <Carousel.Item   >
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/150x150"
            alt="First slide"
            height="600"
            
            
          />
          <Carousel.Caption  >
            <h3 className="text-dark">First slide label</h3>
            <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-fliex w-100"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F333525%2Fpexels-photo-333525.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26w%3D500"
            alt="Second slide"
            height="600"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-fliex w-100"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F96380%2Fpexels-photo-96380.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D2"
            alt="Third slide"
            height="600"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-fliex w-100"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3945683%2Fpexels-photo-3945683.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D650%26w%3D940"
            alt="Third slide"
            height="600"
          />
      
          <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container> );
}

export default CarousolItem;