import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Nike jordan",
    price: 5,
    description: "Nike jordan ultimate edition",
  },
  {
    id: "p2",
    title: "Asics Volupture",
    price: 90,
    description: "Bests running shoes",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
