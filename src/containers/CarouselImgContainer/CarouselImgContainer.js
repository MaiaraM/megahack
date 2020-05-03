import React from 'react';

import ReactOwlCarousel from 'react-owl-carousel';

class CarouselImgContainer extends React.Component {

  render() {

    const { imagens, onClick } = this.props;

    return (!imagens ? <React.Fragment /> :
      <div className="ProductsCaroussel">
        <ReactOwlCarousel loop  margin={10} items={4} responsive={stateCarouselProduct.responsive} nav  >
          {imagens.map((im, index) => (
            <h1>im</h1>
          ))}
        </ReactOwlCarousel>
      </div>
    )
  }
}

const stateCarouselProduct = {
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};


export default CarouselImgContainer;
