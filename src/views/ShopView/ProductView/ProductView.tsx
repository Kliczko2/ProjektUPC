import React from 'react'
import './ProductView.css'
import { products } from '../../../constants/products'
import { useParams } from 'react-router'
import { Button, message } from 'antd'
import ProductPrice from '../components/ProductPrice'
import { useAppDispatch } from '../../../hooks/hooks'
import { incrementByAmount } from '../../../reducers/shopBasket'

const ProductView = () => {
  const { productName } = useParams()
  const dispatch = useAppDispatch()

  return (
    <>
      {products
        .filter((product) => {
          return product.productKey == productName
        })
        .map((product) => (
          <div key={product.id}>
            <section className="product">
              <div className="main">
                <img src={product.image}></img>
                <div className="product-text">
                  <h2>{product.title}</h2>
                  <h4>
                    <ProductPrice
                      price={product.price}
                      discount={product.discount}
                    />
                  </h4>
                  <Button
                    onClick={() => dispatch(incrementByAmount(product.id))}
                  >
                    Dodaj do koszyka
                  </Button>
                </div>
              </div>
              <div className="product-property">
                <p>{product.description}</p>
                <div>
                  <img src={product.secondImage} />
                </div>
                <p className="lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Fringilla urna porttitor rhoncus dolor purus non enim
                  praesent. Facilisis leo vel fringilla est ullamcorper eget
                  nulla facilisi etiam. Ultricies mi quis hendrerit dolor magna
                  eget est lorem ipsum. Nascetur ridiculus mus mauris vitae
                  ultricies. Sed elementum tempus egestas sed sed. Neque
                  convallis a cras semper auctor neque vitae tempus quam.
                  Viverra aliquet eget sit amet tellus cras. Sit amet justo
                  donec enim diam vulputate. Amet venenatis urna cursus eget
                  nunc scelerisque viverra. Non tellus orci ac auctor augue
                  mauris augue neque gravida. Pharetra pharetra massa massa
                  ultricies mi. Suspendisse in est ante in nibh. Placerat orci
                  nulla pellentesque dignissim enim sit amet. Commodo sed
                  egestas egestas fringilla phasellus faucibus scelerisque
                  eleifend donec. Urna molestie at elementum eu facilisis sed
                  odio morbi quis. Pellentesque dignissim enim sit amet
                  venenatis urna cursus eget. Justo eget magna fermentum iaculis
                  eu non diam phasellus vestibulum. Quis blandit turpis cursus
                  in hac habitasse platea dictumst. Enim neque volutpat ac
                  tincidunt. Phasellus egestas tellus rutrum tellus
                  pellentesque. Morbi tincidunt augue interdum velit euismod.
                  Arcu cursus vitae congue mauris rhoncus aenean. Blandit massa
                  enim nec dui nunc. Sit amet massa vitae tortor condimentum
                  lacinia quis vel eros. Suspendisse sed nisi lacus sed viverra
                  tellus in hac habitasse. Consequat mauris nunc congue nisi.
                  Vestibulum lectus mauris ultrices eros. Elit ullamcorper
                  dignissim cras tincidunt lobortis feugiat. In pellentesque
                  massa placerat duis ultricies lacus sed turpis. Sagittis eu
                  volutpat odio facilisis mauris sit amet. Est ultricies integer
                  quis auctor elit sed vulputate mi. Convallis posuere morbi leo
                  urna molestie at elementum. Nisl tincidunt eget nullam non.
                  Condimentum id venenatis a condimentum vitae sapien
                  pellentesque habitant morbi. Vitae auctor eu augue ut lectus
                  arcu bibendum at. Accumsan sit amet nulla facilisi morbi.
                  Libero volutpat sed cras ornare arcu dui. Enim lobortis
                  scelerisque fermentum dui faucibus in ornare. In cursus turpis
                  massa tincidunt dui ut ornare lectus. Tempus urna et pharetra
                  pharetra massa massa ultricies mi quis. Mi quis hendrerit
                  dolor magna eget. Sagittis aliquam malesuada bibendum arcu
                  vitae elementum. Volutpat lacus laoreet non curabitur gravida
                  arcu. Nulla aliquet enim tortor at auctor. Aenean euismod
                  elementum nisi quis eleifend quam adipiscing vitae.
                </p>
              </div>
            </section>
          </div>
        ))}
    </>
  )
}
export default ProductView
