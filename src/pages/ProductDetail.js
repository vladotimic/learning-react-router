import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Detail</h1>
    </section>
  );
};

export default ProductDetail;
