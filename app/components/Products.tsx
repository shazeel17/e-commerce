import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";
import Skeleton from "../components/loader";
import deals from "../../public/assests/image/deals.jpg";
import "react-loading-skeleton/dist/skeleton.css";
import { gql } from "../../__generated__/gql";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// if (__DEV__) {
//   // Adds messages only in a dev environment
//   loadDevMessages();
//   loadErrorMessages();
// }

const GET_PRODUCTS = gql(/* GraphQL */`
  query($tagIds: [ID!]) {
    tags(
      shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="
    ) {
      nodes {
        _id
        name
        displayTitle
        slug
      }
    }
    catalogItems(
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
      tagIds: $tagIds
    ) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              pricing {
                displayPrice
              }
              description
              _id
              variants {
                _id
                title
                media {
                  URLs {
                    small

                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

const Products = () => {
  const [tagId, setTagId] = useState("");

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { tagIds: tagId ? [tagId] : null },
  });

  const handleAllProductsClick = () => {
    setTagId("");
  };

  const queryParameter = useSearchParams();
  const search = queryParameter.get("tag");

  if (error) return <p>Error loading data...</p>;

  return (
    <div className="products">
      <div className="container pt-20 mx-auto">
        <div className="text-black font-bold leading-[58.59px] text-[50px] text-center pb-10 pt-8">
          Or Subscribe To The Newsletter
        </div>
        <div className="flex flex-col sm:flex-row justify-between pb-10">
          <ul className="flex gap-7 flex-wrap sm:flex-nowrap">
            <li>
              <Link
                onClick={handleAllProductsClick}
                href="/"
                scroll={false}
                className={
                  !search
                    ? "font-extrabold text-red-500  transition-colors duration-300 ease-in-out"
                    : ""
                }
              >
                All products
              </Link>
            </li>
            {data &&
              data.tags.nodes.map((tag: any) => (
                <li key={tag.name}>
                  <Link
                    href={{ query: { tag: tag.slug } }}
                    scroll={false}
                    className={`${search === tag.slug ? "font-bold text-red-500 " : ""}`}
                    onClick={() => {
                      setTagId(tag._id);
                    }}
                  >

                    {tag.displayTitle}
                  </Link>
                </li>
              ))}

          </ul>
          <ul className="flex">
            <div className="flex bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-500">
              <FaFilter className="h-5 w-5 mr-1" />
              <span>Filter</span>
            </div>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data &&
            data.catalogItems.edges.map(({ node }: any) => (
              <div key={node.product._id} className="hover:shadow-xl">
                <Image src={deals} alt="" width={300} height={300} />
                <div className="flex justify-between mx-3">
                  <p className="pt-3 font-bold flex">{node.product.title}</p>
                  {node.product.pricing.map((price: any) => (
                    <p key={price._id} className="pl-3 pt-[14px]">
                      {price.displayPrice}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
        {loading && (
          <div className=" justify-center mt-8">
            <Skeleton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

