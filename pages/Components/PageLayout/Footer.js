import Image from 'next/image';
import Link from 'next/link';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

const scrollReact = Scroll.Link;
const ScrollReact = styled(scrollReact)`
  cursor: pointer;
`;
const MainDiv = styled.header`
  width: 100%;
  padding: 20px 5% 0 5%;
  background-color: transparent;
  color: black;
`;
const StyledLink = styled.a`
  color: red;

  padding-bottom: 10px;
`;
const ContainingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid white 1px;
  z-index: 11;
`;

const MenuContainer = styled.div`
  font-size: 30px;
  a + a {
    margin-left: 30px;
  }
`;
const GalaxyContainer = styled.div`
  display: flex;
  font-size: 70px;
  font-weight: 700;
`;
export function Footer(props) {
  return (
    <MainDiv>
      <ContainingHeader>
        <GalaxyContainer>
          <Link href="/marin" passHref>
            <a>galaxy</a>
          </Link>
        </GalaxyContainer>
        <MenuContainer>
          <StyledLink href="/">home</StyledLink>

          <ScrollReact
            to="products"
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            {' '}
            planets
          </ScrollReact>
          <ScrollReact
            to="products"
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            {' '}
            <Image src="/arrowUp.svg" alt="arrow" height="40px" width="50px" />
          </ScrollReact>
        </MenuContainer>
      </ContainingHeader>
    </MainDiv>
  );
}
export function getServerSideProps({ query }) {

  const category = query.category;
  return category;
}
