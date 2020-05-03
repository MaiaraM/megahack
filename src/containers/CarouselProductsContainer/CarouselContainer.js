import React from 'react';


import TitleComponent from '../../components/TitleComponent/TitleComponent';
import CardContainer from '../CardContainer/CardContainer';
import { stateCarouselProduct } from '../../services/mocks/mocks';
import ReactOwlCarousel from 'react-owl-carousel';

class CarouselProductsContainer extends React.Component {

  render() {

    const { products, onClick } = this.props;

    return (!products ? <React.Fragment /> :
      <div className="ProductsCaroussel">
        <TitleComponent title="Família do Produto" subtitle="veja produtos relacionados a este" />

        <ReactOwlCarousel loop  margin={10} items={4} responsive={stateCarouselProduct.responsive} nav  >
          {products.map((prod, index) => (
            <CardContainer key={index}
              carousel
              onClick={e => onClick(e, prod.slug)}
              image={`/assets/images/produtos/00${Math.floor(Math.random() * 3) + 1}.webp`}
              title={prod.name}
              description={prod.shortDescription}
              smallText={prod.manufacturer ? prod.manufacturer.name : "TESTE"}
              priceAfter={prod.fakePrice}
              price={prod.price} />))
          }
        </ReactOwlCarousel>
      </div>
    )
  }
}


export default CarouselProductsContainer;
