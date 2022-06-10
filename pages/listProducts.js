import { productDatabase } from '../util/productsDatabase';

export default function Products() {
  return <div>Products</div>;
}
export function getServerSideProps() {
  return {
    props: {
      products: productDatabase,
    },
  };
}
