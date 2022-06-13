import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { data1 } from '../util/productsDatabase';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  width: 100%;
  /* height: 100vh; */
  padding: 0 5% 0 5%;
  margin: 0 0 0 0;
  background-image: url('./space2.jpg');
  background-attachment: fixed;
  background-repeat: round;
  background-size: auto;
  overflow: hidden;
  border-radius: 0 0 40% 40%/0 0 20% 20%;
`;
const SubContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 10%;
  color: black;
  background-color: rgba(255, 255, 255, 0.3);
  /* height: 60vh; */
  width: 80vw;
  margin-bottom: 10%;
  border-radius: 10px;
`;
const HR3 = styled.h5`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
`;
const Divv = styled.div``;
const H6 = styled.h6``;
const Containing = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  flex-direction: column;
  justify-content: space-between;

  &:hover ${HR3} {
    border-bottom: 1px solid black;
    transition-duration: border-bottom 1.5s;
  }

  :last-child {
    margin-bottom: 100px;
    transition-duration: margin-bottom 1.5s;
  }
  height: 20vh;
  width: 60vw;
  align-items: center;
  padding: 20px;
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  /* transition-duration: height 0.1s; */

  background-color: white;
  grid-gap: 1px;
  border-radius: 10px;
  transform: skewY(2deg);
  z-index: 2;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.4),
    0 6px 20px 0 rgba(0, 0, 0, 0.4);
  transition-duration: 0.5s;
  transition-delay: 0.5s;
  transition-property: height, transform, border-radius;
  &:hover {
    transform: skewY(0deg);
    height: 150px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9);
    transition-duration: height 1.5s;
    transition-delay: 0s;
    transform: translate(10vw, 0);
    z-index: 3;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 800px;
  padding: 30px;
  margin: 20px;
  /* cursor: pointer; */
`;

const PriceContainer = styled.div`
  font-size: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  width: 100%;
  font-weight: 400;
  border-radius: 8px;
  padding: 10px;
  margin-top: 30px;
  z-index: 30;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Cost = styled.div`
  ::before {
    content: 'Total price:  ';
    color: red;
  }
`;
const Button = styled.a`
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 40px;
  &:hover {
    transition: all 0.25s ease-in-out;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
  }
`;

export default function Basket(props) {
  const [database, setDatabase] = useState(props.database);
  const [newPrice, setNewPrice] = useState(props.price);

  console.log('hello ' + newPrice);
  return (
    <MainContainer style={{ backgroundImage: "url('./space2.jpg')" }}>
      <SubContainer>
        <ProductContainer>
          {database.map(({ name, price, quantity, index, id }) => {
            return (
              // <Link key={`key=${index}`} href={`/products/${name}`}>
              <Containing key={`key=${index}`}>
                <button
                  style={{
                    position: 'absolute',
                    bottom: '3px',
                    right: '3px',
                    zIndex: '10',
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    cursor: 'pointer  ',
                  }}
                  onClick={() => {
                    const currentCookie = Cookies.get('products')
                      ? JSON.parse(Cookies.get('products'))
                      : [];

                    let newCookie;
                    if (currentCookie.find((cookies) => id === cookies.id)) {
                      newCookie = currentCookie.filter(
                        (cookies) => id !== cookies.id,
                      );
                      const arrayOfProducts = [];
                      let price1 = 0;
                      for (let i = 0; i < newCookie.length; i++) {
                        const array = props.productDatabase.find(function (
                          match,
                        ) {
                          return match.id === newCookie[i].id ? true : false;
                        });
                        arrayOfProducts.push(array);
                        arrayOfProducts[i].quantity = newCookie[i].quantity;
                        price1 = price1 + newCookie[i].quantity * array.price;
                      }
                      setDatabase(arrayOfProducts);
                      setNewPrice(newPrice - quantity * price);
                      props.deincrement(quantity);
                      Cookies.set('products', JSON.stringify(newCookie));
                    }
                  }}
                >
                  Remove Item
                </button>
                <Link href={`/products/${name}`}>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '3px',
                      right: '120px',
                      zIndex: '10',
                      padding: '3px',
                      cursor: 'pointer',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  >
                    change quantity
                  </div>
                </Link>
                <HR3
                  style={{
                    marginLeft: '6px',
                  }}
                >
                  product
                </HR3>
                <HR3>name</HR3>
                <HR3>price</HR3>
                <HR3>quantity</HR3>
                <Link key={`key=${index}`} href={`/products/${name}`}>
                  <Divv>
                    <Image
                      src={`/${name}.png`}
                      alt={name}
                      height="60"
                      width="60"
                    />
                  </Divv>
                </Link>
                <H6>{name}</H6>
                <H6>${quantity * price}</H6>

                <H6>{quantity}</H6>
              </Containing>
              // </Link>
            );
          })}
        </ProductContainer>

        {newPrice > 0 && (
          <PriceContainer>
            <Cost>${newPrice}</Cost>
            <Button>Checkout</Button>
          </PriceContainer>
        )}
        {newPrice === 0 && (
          <h1
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              color: 'white',
            }}
          >
            No items in cart
          </h1>
        )}
      </SubContainer>
    </MainContainer>
  );
}
export async function getServerSideProps(context) {
  let currentCookie = (await context.req.cookies.products)
    ? context.req.cookies.products
    : 0;
  currentCookie = JSON.parse(currentCookie);
  const arrayOfProducts = [];
  const productDatabase = await data1();
  let price = 0;
  for (let i = 0; i < currentCookie.length; i++) {
    const array = productDatabase.find(function (match) {
      return match.id === currentCookie[i].id ? true : false;
    });
    arrayOfProducts.push(array);
    arrayOfProducts[i].quantity = currentCookie[i].quantity;
    price = price + currentCookie[i].quantity * array.price;
  }

  return {
    props: {
      database: arrayOfProducts,
      price: price,
      quantityCookie: currentCookie,
      productDatabase: productDatabase,
    },
  };
}
