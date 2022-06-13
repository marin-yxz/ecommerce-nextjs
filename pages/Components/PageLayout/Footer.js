import Link from 'next/link';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

const scrollReact = Scroll.Link;
const ScrollReact = styled(scrollReact)`
  cursor: pointer;
`;
const MainDiv = styled.footer`
  width: 100%;
  padding: 20px 5% 0 5%;
  margin-top: 200px;
  height: 20vh;
  color: white;
  border-radius: 7% 70% 10% 10% / 52% 37% 10% 10%;
  background-color: #212529;
`;

const ContainingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid white 1px;
  z-index: 11;
  padding: 20px;
  background-color: transparent;
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
export default function Footer() {
  return (
    <MainDiv>
      <ContainingHeader>
        <GalaxyContainer>
          <Link href="/marin" passHref>
            <a>galaxy</a>
          </Link>
        </GalaxyContainer>
        <MenuContainer>
          <ScrollReact to="home" smooth={true} duration={500} isDynamic={true}>
            {' '}
            home
          </ScrollReact>
          {/* <StyledLink href="/">home</StyledLink> */}

          <ScrollReact
            to="products1"
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            {' '}
            planets
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
