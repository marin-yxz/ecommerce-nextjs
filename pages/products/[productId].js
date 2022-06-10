import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import styled, { keyframes } from 'styled-components';
import { productDatabase } from '../../util/productsDatabase';

const expand = keyframes`
from{
  width:30%;
}to{
  width:80vw;
}`;
const color = keyframes`
from{
  color:rgba(0,0,0,0);
}to{
  color:rgba(0,0,0,1);
}`;
const color2 = keyframes`
from{
  color:rgba(255,255,255,0);
}to{
  color:rgba(255,255,255,1);
}`;
const WholeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0.8)
  );

  width: 80vw;
  padding: 60px;
  padding-top: 5px;
  margin-bottom: 10%;
  border-radius: 10px 0 0 10px;
  animation: ${expand} 0.5s ease;
  max-height: 100%;
`;
const ProductContainer = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 120vh;
  padding: 0 5% 0 5%;
  margin: 0 0 0 0;
  background-attachment: fixed;
  background-repeat: round;
  background-size: auto;
  padding-top: 80px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0% 10% 59% 58% / 10% 0% 57% 10%;
`;
const ProductName = styled.h1`
  position: absolute;
  opacity: 0.2;
  margin: 0;
  font-size: 150px;
  padding: 0;
  animation: ${color} 1s ease-in-out;
`;
const ImageWrapper = styled.div`
  margin-top: 30px;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${expand} 0.5s linear;
`;

const Container = styled.div``;
const PriceDiv = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Description = styled.h1`
  color: transparent;
  animation: ${color2} 1s linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;
const NameQuantity = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background: none;
  color: inherit;
  border: none;

  outline: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 230px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  margin: 0;
  margin-top: 10px;
  height: 40px;
  border-radius: 10px;
  &:hover {
    -webkit-box-shadow: -1px 3px 18px 1px rgba(0, 0, 0, 0.83);
    box-shadow: -1px 3px 18px 1px rgba(0, 0, 0, 0.83);
    text-shadow: 0.25px 0.25px #000;
    transition: box-shadow;
  }
`;
const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Animal(props) {
  const [textenable, setTextenable] = useState(props.cookie.state);
  const [textState, setTextState] = useState('Add');

  const [selectedOption, setSelectedOption] = useState({
    value: props.cookie.quantity,
    label: props.cookie.quantity,
  });

  useEffect(() => {
    if (props.cookie.state === true) {
      setTextState(
        `You already have ${props.cookie.quantity} you want to remove and change?`,
      );
    }
  }, [props.cookie.quantity, props.cookie.state]);
  return (
    <div>
      <Head>
        <title>{props.products[1].toUpperCase()}</title>
        <meta
          name="description"
          content="Unfortunately, we have had trouble locating the animal you are looking for. Better luck next time."
        />
      </Head>

      <ProductContainer
        key={props.products[0]}
        style={{ backgroundImage: "url('../space2.jpg')" }}
      >
        <WholeContainer>
          <Container>
            <LeftSide>
              <NameQuantity>
                <div>
                  <ProductName>{props.products[1].toUpperCase()}</ProductName>
                  <ImageWrapper>
                    <Image
                      src={`/${props.products[1]}.png`}
                      alt="moon"
                      height="200"
                      width="200"
                    />
                  </ImageWrapper>{' '}
                  <h1 style={{ color: 'white' }}>{props.products[1]}</h1>
                </div>
                <ContainerDiv>
                  <PriceDiv>
                    <h1 style={{ color: 'white', fontSize: '50px' }}>
                      ${props.products[3]}
                    </h1>
                    <label htmlFor="lang" style={{ color: 'white' }}>
                      {textenable ? 'quantity you have chosen' : 'in stock'}
                    </label>
                    <Select
                      options={props.quantity}
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      isDisabled={textenable}
                    />
                    <Button
                      onClick={() => {
                        const currentCookie = Cookies.get('products')
                          ? JSON.parse(Cookies.get('products'))
                          : [];
                        let newCookie;

                        if (
                          currentCookie.find(
                            (cookies) => props.products[0] === cookies.id,
                          )
                        ) {
                          newCookie = currentCookie.filter(
                            (cookies) => props.products[0] !== cookies.id,
                          );
                          // console.log('selected ' + selectedOption);
                          setTextenable(false);
                          setTextState(`Add to cart`);
                          props.deincrement(selectedOption.value);
                        } else {
                          setTextState(
                            `You already have ${selectedOption.value} you want to remove and change?`,
                          );
                          setTextenable(true);
                          newCookie = [
                            ...currentCookie,
                            {
                              id: props.products[0],
                              quantity: selectedOption.value,
                            },
                          ];
                          // console.log('selected ' + selectedOption);
                          props.increment(selectedOption.value);
                        }
                        // console.log(newCookie[0]);
                        Cookies.set('products', JSON.stringify(newCookie));
                      }}
                    >
                      {textState}
                    </Button>
                  </PriceDiv>
                </ContainerDiv>
              </NameQuantity>
              <Description>{props.products[2]}</Description>
            </LeftSide>
          </Container>
        </WholeContainer>
      </ProductContainer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = await context.query.productId;
  let currentCookie = (await context.req.cookies.products)
    ? context.req.cookies.products
    : 0;

  const cookie = JSON.parse(currentCookie);
  const obj = productDatabase.find((o) => o.name === url);
  let obj1 = 1;
  let state = false;
  console.log(cookie);
  if (cookie !== 0) {
    obj1 = cookie.find((o) => o.id === obj?.id);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (obj1?.id === undefined) {
      obj1 = 1;
    }
    if (obj1.quantity === undefined) {
      obj1 = 1;
    } else {
      state = true;
      obj1 = obj1.quantity;
    }
  }
  const quan = { quantity: obj1, state: state };
  console.log(quan);
  const objectQuantity = [];
  currentCookie = JSON.parse(currentCookie).length;

  const found = productDatabase.find((array) => array.name === url);
  const arr = Object.keys(found).map((k) => found[k]);
  let reference = arr[6] - arr[6] + 1;
  for (let i = 0; i < arr[6]; i++) {
    objectQuantity[i] = reference;
    reference += 1;
  }
  const array1 = [];
  objectQuantity.forEach((x) => {
    const object = { value: x, label: x };
    array1.push(object);
  });

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      products: arr || null,
      quantity: array1,
      database: productDatabase,
      cookie: quan,
    },
  };
}
