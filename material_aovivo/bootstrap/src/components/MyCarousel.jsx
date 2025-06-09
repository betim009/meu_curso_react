import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <Carousel data-bs-theme="dark" className='my-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrcRicvEnnZKmTNCVU5DBUk8vqQ8JjS4MuQ&s"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://estaticos.animaeducacao.com.br/article/02c1aa43-d125-4645-8c39-d30bcbcb872a/2.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;