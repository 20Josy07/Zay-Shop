
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

const products = [
  {
    img: "https://i.postimg.cc/L4QPqNVv/shop_01.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/66bZ7YhM/shop_02.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/Y2DF4bxb/shop_03.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/1R7FgJKC/shop_04.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/pVcj9qB1/shop_05.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/G3gDBqjf/shop_06.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/8kXvFtb9/shop_07.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/05XS6cCL/shop_08.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
  {
    img: "https://i.postimg.cc/7PtzCmNF/shop_09.jpg",
    name: "Oupidatat non",
    price: "$250.00",
    rating: 3,
  },
];

export default function ShopPage() {
  return (
    <div className="container py-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <h1 className="text-2xl font-bold pb-4">Categories</h1>
          <Accordion type="multiple" defaultValue={["gender"]} className="w-full">
            <AccordionItem value="gender">
              <AccordionTrigger className="text-xl">Gender</AccordionTrigger>
              <AccordionContent>
                <ul className="list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Women
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sale">
              <AccordionTrigger className="text-xl">Sale</AccordionTrigger>
              <AccordionContent>
                <ul className="list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="product">
              <AccordionTrigger className="text-xl">Product</AccordionTrigger>
              <AccordionContent>
                <ul className="list-unstyled pl-3">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Bag
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sweather
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sunglass
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-center pb-4">
            <ul className="flex space-x-4 mb-3 md:mb-0">
              <li>
                <a className="text-xl text-gray-800" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="text-xl text-gray-800" href="#">
                  Men's
                </a>
              </li>
              <li>
                <a className="text-xl text-gray-800" href="#">
                  Women's
                </a>
              </li>
            </ul>
            <div className="w-full md:w-auto">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="a-to-z">A to Z</SelectItem>
                  <SelectItem value="item">Item</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="product-wap rounded-none">
                <div className="relative group">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="card-img rounded-none"
                    data-ai-hint="clothing"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ul className="list-unstyled flex space-x-2">
                      <li>
                        <Button variant="outline" size="icon" className="text-white bg-primary border-primary hover:bg-green-700">
                          <Heart />
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" size="icon" className="text-white bg-primary border-primary hover:bg-green-700">
                          <Eye />
                        </Button>
                      </li>
                      <li>
                        <Button variant="outline" size="icon" className="text-white bg-primary border-primary hover:bg-green-700">
                          <ShoppingCart />
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link href="/shop/single" className="h3 text-decoration-none">
                    {product.name}
                  </Link>
                  <ul className="flex justify-between mb-0">
                    <li>M/L/X/XL</li>
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
                        <Star
                          className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                          fill={i < product.rating ? "currentColor" : "none"}
                        />
                      </li>
                    ))}
                  </ul>
                  <p className="text-center mb-0">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
