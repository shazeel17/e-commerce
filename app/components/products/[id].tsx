
// function products(){
//     return(
//         <div>
//             <h1>This is Products page</h1>

//         </div>
//     )
// }


// export default products;
// pages/products/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import Skeleton from '../../components/loader';

export const GET_PRODUCT = gql`
  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        title
        description
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            price
            currency {
              code
            }
          }
        }
        primaryImage {
          URLs {
            medium
            original
          }
        }
      }
    }
  }
`;


const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <Skeleton />;
  if (error) return <p>Error loading data...</p>;

  const product = data.catalogItem.product;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div>
        {product.pricing.map((price: any) => (
          <p key={price._id}>{price.displayPrice}</p>
        ))}
      </div>
      <div>
        {product.variants.map((variant: any) => (
          <div key={variant._id}>
            <h2>{variant.title}</h2>
            <img src={variant.media.URLs.small} alt={variant.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;