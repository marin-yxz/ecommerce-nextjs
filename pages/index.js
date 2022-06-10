import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import styled, { css, keyframes } from 'styled-components';
import styles from '../styles/Home.module.css';
import { productDatabase } from '../util/productsDatabase';

const scrollReact = Scroll.Link;

const ScrollReact = styled(scrollReact)`
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  border-style: dashed;
  border-color: white;
  color: white;

  cursor: pointer;
  &:hover {
    border-color: red;
  }
`;
const rotate2 = keyframes`

from {
      transform: rotate(0deg) translateX(300px) rotate(0deg)  ;
    }
    to {
      transform: rotate(360deg) translateX(300px) rotate(-360deg);
    }
`;
const skew = keyframes`
from {
  transform: rotateX(0) ;
    }
    to {
      transform: rotateX(360deg);
    }
`;
const skew2 = keyframes`
from {
  transform: rotateX(100deg) ;
    }
    to {
      transform: rotateX(460deg);
    }
`;
const rotate = keyframes`

    from {

      transform: rotate(50deg) translateX(300px) rotate(50deg);
    }
    to {

      transform:  rotate(410deg) translateX(300px) rotate(-410deg);
    }
  `;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: -2;
  width: 100%;
  height: 100vh;
  padding: 0 5% 0 5%;
  margin: 0 0 0 0;
  background-image: url('./space2.jpg');
  background-attachment: fixed;
  background-repeat: round;
  background-size: auto;
  overflow: hidden;
  border-radius: 0 0 40% 40%/0 0 20% 20%;
`;
const TextContainer = styled.div`
  writing-mode: vertical-rl;
  font-size: 9px;
  color: white;
  margin-top: 200px;
`;
const Div = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  margin-top: 290px;
  margin-left: 80px;

  animation: ${(props) =>
    props.className === 'true'
      ? css`
          ${rotate} 10s linear infinite
        `
      : css`
          ${rotate2} 7s linear infinite
        `};
  z-index: 2;
`;
const Circle = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;

  transition: 0.5s;
  border: solid 5px white;
  border-style: dashed;
`;
const CircleContainer2 = styled.div`
  position: absolute;
  /* transform: skewX(20deg); */

  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  padding: 90px;
  opacity: 0.5;

  margin: 0 0 0 100%;
  & + & {
    margin-left: 90%;
    margin-top: 30px;
  }
`;
const CircleContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  width: 600px;
  height: 600px;
  margin: 0 0 0 140%;

  /* transform: skewY(-20deg); */

  /* animation: ${(props) =>
    props.className === 't'
      ? css`
          ${skew} 10s  infinite linear
        `
      : css`
          ${skew2} 10s  infinite linear
        `}; */
`;
const TwoCircles = styled.div`
  display: flex;
  margin-top: 350px;

  /* margin-left: 80vw; */
  /* transform: skew(-20deg); */

  justify-content: center;
`;
const Planets = styled.h1`
  color: white;
  font-size: 50px;
  margin-top: 0;
  margin-left: 20px;
  -webkit-text-stroke: 1px blue;
  padding-bottom: 20px;
`;
const WelcomeTextDiv = styled.div`
  color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-top: -40%;
`;
const ProductsDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 5% 10px 5%;
  margin: 0 0 0 0;
  margin-top: -200px;
  overflow: hidden;

  color: black;
  z-index: 300;
`;
const WelcomeText = styled.h1`
  color: transparent;
  -webkit-text-stroke: 2px red;
  &::before {
    content: 'DO ';
    color: white;
    -webkit-text-stroke: 0px;
  }
`;
const WelcomeSubText = styled.h3`
  color: white;
  margin-bottom: 100px;
`;
const ContentDiv = styled.div`
  max-width: 250px;
  margin: 20px;
  padding: 8px;
  overflow: hidden;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: skewY(-6deg);
  transition: 0.5s;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.4),
    0 6px 20px 0 rgba(0, 0, 0, 0.4);
  &:hover {
    transform: skewY(0deg);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9);
    transition-duration: 0.5s;
  }
`;
const ContentTitle = styled.h4`
  cursor: pointer;
  margin-top: 0;
  /* color: white; */
  text-shadow: 1px 1px 7px #ccc, 1px 1px 10px #ccc;
`;
const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 150px;
`;
const DescriptionTitle = styled.h4`
  margin-top: 2px;
`;
const DescriptionSubText = styled.h5`
  max-width: 100%;
  max-height: 50%;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const DescriptionDiv = styled.div``;
const Price = styled.h4`
  margin-top: 2px;
`;
const QnP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Quantity = styled.h5`
  color: transparent;
  font-size: 18px;
  -webkit-text-stroke: 0.8px grey;
  margin: 0;
`;
const ImageWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0);
`;
const PlanetsProductsGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 400px 400px 400px;
  z-index: 2;
  gap: 0.1em;
`;
const PlanetsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SpaceShipImage = styled.div`
  position: absolute;
  z-index: -2;
  margin-right: -90px;
  margin-bottom: 120px;
`;
const InfoPage = styled.div`
  position: relative;
  height: 1000px;
  width: 100%;
  overflow: hidden;
  background-image: url('./space2.jpg');
  background-attachment: fixed;
  background-repeat: round;
  background-size: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: -2;
  border-radius: 100% 0% 52% 0% / 26% 0% 58% 32%;
`;
const InfoDiv = styled.div`
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 30px;
  margin-left: 10%;
`;
const InfoSubTitle = styled.h6`
  font-size: 25px;
  color: black;
`;
const InfoTitle = styled.h2`
  font-size: 5vh;
`;
const AllT = styled.div`
  transform: skew(-20deg);

  /* position: absolute; */
  & :nth-last-child(1) {
    margin-left: 100px;
    margin-bottom: 50px;
  }
  & :nth-last-child(2) {
    margin-left: 150px;
  }
  & :nth-last-child(3) {
    margin-left: 180px;
  }
  opacity: 0.3;
`;
const CircleInfo = styled.div`
  height: 40vh;
  width: 100vw;
  z-index: 0;
`;
const Sun = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 20px;
  width: 20px;
  background-color: grey;
  border-radius: 50%;
`;
const PlanetOutline = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* margin-top: 30%; */
  /* transform: skewy(10deg); */
  transition: 0.5s;
  border: solid 5px red;
  border-style: dashed;
`;
const Planeterium = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  z-index: 0;
  /* transform: skewy(20deg); */
`;

const rotateSmallPlanets = (y, x, z) => keyframes`

0% {
      transform: rotate(${x}deg) translateX(${y}) rotate(${x}deg)  ;
    }
    100% {
      transform: rotate(${z}deg) translateX(${y}) rotate(${z}deg);
    }
`;
const SmallPlanets1 = styled.div`
  position: absolute;
  background-color: black;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 16;
  margin: auto;
  color: ${(props) => (!props.visibility ? 'white' : 'green')};
  animation: ${(props) =>
      rotateSmallPlanets(props.rotates, props.start, props.plus)}
    ${(props) => props.time} linear infinite;
`;
const SmallPlanets2 = ({ rotates, time, start, plus, visibility }) => {
  return (
    <SmallPlanets1
      rotates={rotates}
      time={time}
      start={start}
      plus={plus}
      visibility={visibility}
    />
  );
};
export default function Home(props) {
  const a = [
    { number: 1 },
    { number: 2 },
    // { number: 3 },
    // { number: 4 },
    // { number: 5 },
  ];
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);
  const [visibility4, setVisibility4] = useState(false);
  const [visibility5, setVisibility5] = useState(false);
  console.log(visibility1, visibility2, visibility3, visibility4, visibility5);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/116/116859.png"
        />
      </Head>

      <MainContainer style={{ backgroundImage: "url('./space2.jpg')" }}>
        <TextContainer>
          <h1 style={{ margin: `30px 0 0 0`, fontSize: `15px` }}>
            ----------ENYOJ YOUR STAY----------
          </h1>
        </TextContainer>
        {a.map((prop) => {
          return (
            <AllT key={prop.number} className={prop.number}>
              <TwoCircles key={prop.number}>
                <CircleContainer className="t">
                  <Div className="true" />
                  <Circle className="true1" />
                  <Div className="false" />
                  <Circle className="false1" />
                </CircleContainer>
              </TwoCircles>
            </AllT>
          );
        })}
      </MainContainer>
      <WelcomeTextDiv>
        <WelcomeText>YOU FEEL LIKE YOU NEED SOME SPACE?</WelcomeText>
        <WelcomeSubText>shop all the time and space you want</WelcomeSubText>
        <ScrollReact
          to="products"
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          {' '}
          EXPLORE ALL PLANETS
        </ScrollReact>
      </WelcomeTextDiv>

      <ProductsDiv id="products">
        {' '}
        <Planets>Planets</Planets>
        <PlanetsContainer>
          <PlanetsProductsGrid>
            {props.products.map(({ id, name, description, price }) => {
              return (
                // <Link href=`/${planet.name}`>
                <ContentDiv key={id}>
                  <Link href={'/products/' + name}>
                    <ContentTitle>{name}</ContentTitle>
                  </Link>
                  <ImageWrapper>
                    <Link href={'/products/' + name}>
                      <div>
                        <Image
                          src={`/${name}.png`}
                          alt="moon"
                          height="100"
                          width="100"
                        />
                      </div>
                    </Link>
                  </ImageWrapper>
                  <BottomDiv>
                    <DescriptionDiv>
                      {' '}
                      <DescriptionTitle>{name}</DescriptionTitle>
                      <DescriptionSubText>{description}</DescriptionSubText>
                    </DescriptionDiv>{' '}
                    <Price>${price}</Price>
                  </BottomDiv>
                  <QnP>
                    <Quantity>planets</Quantity>

                    <Quantity>stars</Quantity>
                  </QnP>
                </ContentDiv>
                // </Link>
              );
            })}
          </PlanetsProductsGrid>
        </PlanetsContainer>
      </ProductsDiv>
      <InfoPage style={{ backgroundImage: "url('./space2.jpg')" }}>
        <InfoDiv>
          <InfoTitle>Galaxy</InfoTitle>
          <InfoSubTitle>
            Far out in the uncharted backwaters of the unfashionable end of the
            western spiral arm of the Galaxy lies a small unregarded yellow sun.
            Orbiting this at a distance of roughly ninety-two million miles is
            an utterly insignificant little blue green planet whose
            ape-descended life forms are so amazingly primitive that they still
            think digital watches are a pretty neat idea.
          </InfoSubTitle>
        </InfoDiv>{' '}
        <SpaceShipImage>
          <Image
            src="/spaceship.svg"
            height="500px"
            width="500px"
            style={{
              fill: 'white',
            }}
          />
        </SpaceShipImage>
        <TwoCircles>
          <CircleContainer2 style={{ paddingLeft: '130px' }}>
            <Div style={{ backgroundColor: 'white' }} className="true" />
            <Div style={{ backgroundColor: 'white' }} className="false" />
            <Div style={{ backgroundColor: 'white' }} className="false" />
            <Circle />
          </CircleContainer2>
          <CircleContainer2 style={{ paddingLeft: '130px' }}>
            <Div className="false" style={{ backgroundColor: 'white' }} />
            <Div style={{ backgroundColor: 'white' }} className="false" />
            <Div style={{ backgroundColor: 'white' }} className="false" />
            <Circle />
          </CircleContainer2>
        </TwoCircles>
      </InfoPage>
      <CircleInfo
      // onMouseEnter={() => setVisibility(false)}
      // onMouseLeave={() => setVisibility(true)}
      >
        <Planeterium>
          <Sun style={{ zIndex: 15 }} />
          <PlanetOutline
            style={{ zIndex: '14' }}
            onMouseEnter={() => setVisibility1(true)}
            onMouseLeave={() => setVisibility1(false)}
          />
          <PlanetOutline
            style={{ width: '200px', height: '200px', zIndex: '13' }}
            onMouseEnter={() => setVisibility2(true)}
            onMouseLeave={() => setVisibility2(false)}
          />
          <PlanetOutline
            style={{ width: '300px', height: '300px', zIndex: '12' }}
            onMouseEnter={() => setVisibility3(true)}
            onMouseLeave={() => setVisibility3(false)}
          />
          <PlanetOutline
            style={{ width: '400px', height: '400px', zIndex: '11' }}
            onMouseEnter={() => setVisibility4(true)}
            onMouseLeave={() => setVisibility4(false)}
          />
          <PlanetOutline
            style={{ width: '500px', height: '500px', zIndex: '10' }}
            onMouseEnter={() => setVisibility5(true)}
            onMouseLeave={() => setVisibility5(false)}
          />
          <SmallPlanets2
            rotates="50px"
            time="60s"
            start="0"
            plus="360"
            // state={visibility}
            onMouseEnter={() => setVisibility1(true)}
            onMouseLeave={() => setVisibility1(false)}
          />
          <SmallPlanets2
            rotates="100px"
            time="40s"
            start="160"
            plus="520"
            onMouseEnter={() => setVisibility2(true)}
            onMouseLeave={() => setVisibility2(false)}
          />
          <SmallPlanets2
            rotates="150px"
            time="30s"
            start="230"
            plus="590"
            // state={visibility}
            onMouseEnter={() => setVisibility3(true)}
            onMouseLeave={() => setVisibility3(false)}
          />
          <SmallPlanets2
            rotates="200px"
            time="70s"
            start="80"
            plus="440"
            // state={visibility}
            onMouseEnter={() => setVisibility4(true)}
            onMouseLeave={() => setVisibility4(false)}
          />
          <SmallPlanets2
            rotates="250px"
            time="100s"
            start="75"
            plus="435"
            // state={visibility}
            onMouseEnter={() => setVisibility5(true)}
            onMouseLeave={() => setVisibility5(false)}
          />
        </Planeterium>
        {/* <h1>{visibility[0] ? 'yoo' : 'nooo'}</h1> */}
      </CircleInfo>
    </div>
  );
}
export function getServerSideProps() {
  return {
    props: {
      products: productDatabase,
    },
  };
}
