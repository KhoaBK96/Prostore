/* eslint-disable react/jsx-key */

import ProductCard from "./product-card";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="'h2-bold mb-4'">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            <ProductCard key={product.slug} product={product}/>
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
