export default function GridProducts({ products, Card, num }) {
  return (
    <>
      <div className={`grid-products grid-products-${num}`}>
        {products.map((product, id) => (
          <Card key={id} product={product} />
        ))}
      </div>
    </>
  );
}
