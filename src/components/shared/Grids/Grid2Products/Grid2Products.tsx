const Grid2Products = ({ products, Card }) => {
  return (
    <div className="grid2-products">
      {products.map((product, id) => (
        <Card key={id} product={product} />
      ))}
    </div>
  );
};

export default Grid2Products;
