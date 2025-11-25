
'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Eye, ShoppingCart } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";

const relatedProducts = [
    { name: "Red Clothing", img: "https://i.postimg.cc/05XS6cCL/shop_08.jpg", rating: 4, price: "$20.00", sizes: "M/L/X/XL", hint: "red clothing" },
    { name: "White Shirt", img: "https://i.postimg.cc/7PtzCmNF/shop_09.jpg", rating: 3, price: "$25.00", sizes: "M/L/X/XL", hint: "white shirt" },
    { name: "Oupidatat non", img: "https://i.postimg.cc/RCpt3XRr/shop_10.jpg", rating: 5, price: "$45.00", sizes: "M/L/X/XL", hint: "clothing" },
    { name: "Black Fashion", img: "https://i.postimg.cc/jq3fWZX0/shop_11.jpg", rating: 3, price: "$60.00", sizes: "M/L/X/XL", hint: "black fashion" },
    { name: "Oupidatat non", img: "https://i.postimg.cc/05XS6cCL/shop_08.jpg", rating: 3, price: "$80.00", sizes: "M/L/X/XL", hint: "clothing" },
];

const productImages = [
    "https://i.postimg.cc/J7YXyPQ5/product-single-10.jpg",
    "https://i.postimg.cc/Fz6k2HRv/product-single-01.jpg",
    "https://i.postimg.cc/MHLfhpTz/product-single-02.jpg",
    "https://i.postimg.cc/rsHRvwmM/product-single-03.jpg",
    "https://i.postimg.cc/zvQH9GBD/product-single-04.jpg",
    "https://i.postimg.cc/Fz6k2HRK/product-single-05.jpg",
];


export default function ShopSinglePage() {
    const [mainImage, setMainImage] = useState(productImages[0]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("S");

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto pb-5">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1 mt-5">
            <Card className="mb-3">
              <Image
                className="card-img img-fluid"
                src={mainImage}
                alt="Card image cap"
                id="product-detail"
                width={600}
                height={600}
                data-ai-hint="activewear clothing"
              />
            </Card>
            <div className="grid grid-cols-5 gap-2">
                {productImages.slice(1).map((img, i) => (
                    <div key={i}>
                        <button onClick={() => setMainImage(img)}>
                        <Image
                            className="card-img img-fluid"
                            src={img}
                            alt={`Product Image ${i + 1}`}
                            width={100}
                            height={100}
                            data-ai-hint="clothing"
                        />
                        </button>
                    </div>
                ))}
            </div>
          </div>
          <div className="lg:col-span-1 mt-5">
            <Card>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold">Active Wear</h1>
                <p className="text-2xl py-2">$25.00</p>
                <p className="py-2 flex items-center">
                    <Star className="text-yellow-400" fill="currentColor"/>
                    <Star className="text-yellow-400" fill="currentColor"/>
                    <Star className="text-yellow-400" fill="currentColor"/>
                    <Star className="text-yellow-400" fill="currentColor"/>
                    <Star className="text-gray-300"/>
                  <span className="list-inline-item text-dark ml-2">
                    Rating 4.8 | 36 Comments
                  </span>
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Brand:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>Easy Wear</strong>
                    </p>
                  </li>
                </ul>

                <h6>Description:</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temp incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse. Donec condimentum elementum convallis.
                  Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Avaliable Color :</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>White / Black</strong>
                    </p>
                  </li>
                </ul>

                <h6>Specification:</h6>
                <ul className="list-unstyled pb-3">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Adipiscing elit,set</li>
                  <li>Duis aute irure</li>
                  <li>Ut enim ad minim</li>
                  <li>Dolore magna aliqua</li>
                  <li>Excepteur sint</li>
                </ul>

                <form action="" method="GET">
                  <input
                    type="hidden"
                    name="product-title"
                    value="Activewear"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="flex items-center space-x-2">
                        <li>Size :</li>
                        {['S', 'M', 'L', 'XL'].map(size => (
                            <li key={size}>
                            <Button variant={selectedSize === size ? "default" : "outline"} onClick={(e) => { e.preventDefault(); setSelectedSize(size);}} className="btn-size">{size}</Button>
                            </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul className="flex items-center space-x-2">
                        <li>Quantity</li>
                        <li>
                          <Button id="btn-minus" onClick={(e) => { e.preventDefault(); setQuantity(q => Math.max(1, q-1))}}>-</Button>
                        </li>
                        <li>
                          <span className="badge bg-secondary" id="var-value">
                            {quantity}
                          </span>
                        </li>
                        <li>
                          <Button id="btn-plus" onClick={(e) => { e.preventDefault(); setQuantity(q => q+1)}}>+</Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Button type="submit" name="submit" value="buy" size="lg">
                      Buy
                    </Button>
                    <Button type="submit" name="submit" value="addtocard" size="lg">
                      Add To Cart
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="container py-5">
            <h4 className="text-2xl font-bold mb-4">Related Products</h4>
            <Carousel opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-4">
                    {relatedProducts.map((product, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <div className="relative group">
                                        <Image src={product.img} alt={product.name} width={400} height={300} className="w-full" data-ai-hint={product.hint}/>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ul className="list-unstyled flex space-x-2">
                                                <li><Button variant="outline" size="icon" className="text-white bg-primary border-primary hover:bg-green-700"><Heart /></Button></li>
                                                <li><Button variant="outline" size="icon" className="text-white bg-primary border-primary hover:bg-green-700"><Eye /></Button></li>
                                                <li><Button variant="outline" size="icon" className="text-white bg-primary border-primary hover:bg-green-700"><ShoppingCart /></Button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <Link href="/shop/single" className="h3 text-decoration-none">{product.name}</Link>
                                        <ul className="w-full flex justify-between mb-0">
                                            <li>{product.sizes}</li>
                                            <li className="pt-2 flex">
                                                <span className="w-3 h-3 bg-red-500 rounded-full ml-1"></span>
                                                <span className="w-3 h-3 bg-blue-500 rounded-full ml-1"></span>
                                                <span className="w-3 h-3 bg-black rounded-full ml-1"></span>
                                                <span className="w-3 h-3 bg-gray-200 rounded-full ml-1"></span>
                                                <span className="w-3 h-3 bg-green-500 rounded-full ml-1"></span>
                                            </li>
                                        </ul>
                                        <ul className="flex justify-center mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}>
                                                    <Star className={i < product.rating ? "text-yellow-400" : "text-gray-300"} fill={i < product.rating ? "currentColor" : "none"}/>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-center mb-0">{product.price}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>

    </section>
  );
}
