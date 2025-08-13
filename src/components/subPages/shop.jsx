// Images 

import image1 from "../pages/images/imgs1.webp"
import image2 from "../pages/images/imgs2.webp"
import image3 from "../pages/images/imgs3.webp"
import image4 from "../pages/images/imgs4.webp"
import image5 from "../pages/images/imgs5.webp"
import image6 from "../pages/images/imgs6.webp"
import image7 from "../pages/images/imgs7.webp"
import image8 from "../pages/images/imgs8.webp"
import image9 from "../pages/images/imgs9.webp"
import image10 from "../pages/images/imgs10.webp"
import image11 from "../pages/images/imgs11.webp"
import image12 from "../pages/images/imgs12.webp"
import image13 from "../pages/images/imgs13.webp"
import image14 from "../pages/images/imgs14.webp"
import image15 from "../pages/images/imgs15.webp"
import image16 from "../pages/images/imgs16.webp"
import image17 from "../pages/images/imgs17.webp"
import image18 from "../pages/images/imgs18.webp"
import image19 from "../pages/images/imgs19.webp"
import image20 from "../pages/images/imgs20.webp"
import image21 from "../pages/images/imgs21.webp"
import image22 from "../pages/images/imgs22.webp"


import React from "react";
import ProductCard from "../pages/product";

export const Products = [
  {
    "id": 1,
    "name": "Crimson Bomber Jacket",
    "price": 1499,
    "image": image1
  },
  {
    "id": 2,
    "name": "Rust Rider Leather Jacket",
    "price": 2999,
    "image": image2
  },
  {
    "id": 3,
    "name": "Varsity Blue Jacket",
    "price": 2399,
    "image": image3
  },
  {
    "id": 4,
    "name": "Palm Shade T-shirt",
    "price": 299,
    "image": image4
  },
  {
    "id": 5,
    "name": "Teal Casual Button T-shirt",
    "price": 349,
    "image": image5
  },
  {
    "id": 6,
    "name": "Mustard Block Print T-shirt",
    "price": 279,
    "image": image6
  },
  {
    "id": 7,
    "name": "Rose Wave T-shirt",
    "price": 319,
    "image": image7
  },
  {
    "id": 8,
    "name": "Chalk Sketch T-shirt",
    "price": 299,
    "image": image8
  },
  {
    "id": 9,
    "name": "Maroon Feather T-shirt",
    "price": 359,
    "image": image9
  },
  {
    "id": 10,
    "name": "Skyline Blue T-shirt",
    "price": 289,
    "image": image10
  },
  {
    "id": 11,
    "name": "Olive Fit Cargo T-shirt",
    "price": 329,
    "image": image11
  },
  {
    "id": 12,
    "name": "Ash Green Cargo T-shirt",
    "price": 269,
    "image": image12
  },
  {
    "id": 13,
    "name": "Beige Polo T-shirt",
    "price": 399,
    "image": image13
  },
  {
    "id": 14,
    "name": "Black Code Pattern T-shirt",
    "price": 299,
    "image": image14
  },
  {
    "id": 15,
    "name": "Plum Oversize T-shirt",
    "price": 289,
    "image": image15
  },
  {
    "id": 16,
    "name": "Sage Collar Zip T-shirt",
    "price": 319,
    "image": image16
  },
  {
    "id": 17,
    "name": "Arrow Graphic White T-shirt",
    "price": 339,
    "image": image17
  },
  {
    "id": 18,
    "name": "Mustard Blossom Kurti",
    "price": 499,
    "image": image18
  },
  {
    "id": 19,
    "name": "Peach Petal Kurti",
    "price": 699,
    "image": image19
  },
  {
    "id": 20,
    "name": "Hot Pink Sparkle Kurti",
    "price": 599,
    "image": image20
  },
  {
    "id": 21,
    "name": "Lilac Flare Anarkali Kurti",
    "price": 749,
    "image": image21
  },
  {
    "id": 22,
    "name": "Midnight Mirror Kurti",
    "price": 529,
    "image": image22
  }
]



const Shop = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

    <section className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Products</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover high-quality, eco-friendly fashion for all. From everyday essentials to statement pieces — sustainably made for a better tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Shop;
