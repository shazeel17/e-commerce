"use client";
import React from 'react';

const SkeletonLoaderCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
      
      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
      
      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>

         {/* Card 5 */}
         <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>

         {/* Card 6 */}
         <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>

         {/* Card 7 */}
         <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>

         {/* Card 8 */}
         <div className="bg-white rounded-lg shadow-md hover:shadow-xl">
        <div  className="w-full h-64 object-cover rounded-t-lg bg-gray-300" />
        <div className="p-4">
          {/* <h2 className="text-xl font-bold mb-2">Product Name</h2> */}
          <div className="flex justify-between">
            <span className="text-gray-300 bg-gray-300">Price</span>
            <button className="bg-gray-300  text-gray-300 px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SkeletonLoaderCard;

