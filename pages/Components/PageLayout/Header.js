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
  position: absolute;
  z-index: 10;
  color: white;
`;
const StyledLink = styled.a`
  color: red;
  padding-bottom: 10px;
  border-bottom: solid red 1px;
`;
const ContainingHeader = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  border-bottom: solid white 1px;
  z-index: 11;
`;

const MenuContainer = styled.div`
  display: inline-block;
  a + a {
    margin-left: 30px;
  }
  margin-bottom: 10px;
`;

export function Header(props) {
  // console.log('my cookies ' + props.cookies);
  return (
    <MainDiv>
      <ContainingHeader>
        <Link href="/" passHref>
          <a>galaxy</a>
        </Link>
        <MenuContainer>
          <Link href="/" passHref>
            <StyledLink>home</StyledLink>
          </Link>
          <ScrollReact
            to="products1"
            smooth={true}
            duration={500}
            isDynamic={true}
            tabIndex="0"
          >
            planets
          </ScrollReact>

          <Link href="/basket">
            <a>basket</a>
          </Link>
          {/* suppressHydrationWarning */}
          <a> {props.clickAmount}</a>
        </MenuContainer>
      </ContainingHeader>
    </MainDiv>
  );
}
// export async function getServerSideProps(context) {
//   let currentCookie = (await context.req.cookies.products)
//     ? context.req.cookies.products
//     : 0;
//   currentCookie = await JSON.parse(currentCookie);
//   let quantity = 0;
//   for (let i = 0; i <= currentCookie.length; i++) {
//     quantity += currentCookie[i].quantity;
//   }
//   console.log('this is my quantity ' + quantity);
//   return {
//     props: {
//       cookies: quantity,
//     },
//   };
// }
