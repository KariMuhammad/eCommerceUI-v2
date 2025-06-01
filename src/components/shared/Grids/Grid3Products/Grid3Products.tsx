export default function Grid3Products({ products, Card }) {
  return (
    <>
      {/* className: grid3-products */}
      <div className="row g-1 mx-0">
        {products.map((product, id) => (
          <Card
            className="col-12 col-sm-6 col-lg-3"
            key={id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
