
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      img: "https://i.postimg.cc/wMrRSjBn/feature_prod_01.jpg",
      rating: 3,
      price: "$240.00",
      name: "Gym Weight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
      reviews: 24,
      hint: "gym weight",
    },
    {
      img: "https://i.postimg.cc/fyPS6RL4/feature_prod_02.jpg",
      rating: 3,
      price: "$480.00",
      name: "Cloud Nike Shoes",
      description:
        "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
      reviews: 48,
      hint: "nike shoes",
    },
    {
      img: "https://i.postimg.cc/0j4KLyQ1/feature_prod_03.jpg",
      rating: 5,
      price: "$360.00",
      name: "Summer Addides Shoes",
      description:
        "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
      reviews: 74,
      hint: "summer shoes",
    },
  ];

  return (
    <main>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="bg-[#efefef]">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20">
                  <div className="mx-auto lg:order-last">
                    <Image
                      src="https://i.postimg.cc/3NNDSv3s/banner_img_01.jpg"
                      alt="Banner 1"
                      width={600}
                      height={500}
                      className="img-fluid"
                      data-ai-hint="clothing banner"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="text-left">
                      <h1 className="text-4xl lg:text-5xl font-bold text-green-600">
                        <b>Zay</b> eCommerce
                      </h1>
                      <h3 className="text-3xl font-medium mt-2">
                        Tiny and Perfect eCommerce Template
                      </h3>
                      <p className="mt-4">
                        Zay Shop is an eCommerce HTML5 CSS template with the
                        latest version of Bootstrap 5 (beta 1). This template is
                        100% free provided by{" "}
                        <a
                          rel="sponsored"
                          className="text-green-600"
                          href="https://templatemo.com"
                          target="_blank"
                        >
                          TemplateMo
                        </a>{" "}
                        website. Image credits go to{" "}
                        <a
                          rel="sponsored"
                          className="text-green-600"
                          href="https://stories.freepik.com/"
                          target="_blank"
                        >
                          Freepik Stories
                        </a>
                        ,
                        <a
                          rel="sponsored"
                          className="text-green-600"
                          href="https://unsplash.com/"
                          target="_blank"
                        >
                          Unsplash
                        </a>{" "}
                        and
                        <a
                          rel="sponsored"
                          className="text-green-600"
                          href="https://icons8.com/"
                          target="_blank"
                        >
                          Icons 8
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#efefef]">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20">
                  <div className="mx-auto lg:order-last">
                    <Image
                      src="https://i.postimg.cc/NFFrJHgq/banner_img_02.jpg"
                      alt="Banner 2"
                      width={600}
                      height={500}
                      className="img-fluid"
                       data-ai-hint="lifestyle watch"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="text-left">
                      <h1 className="text-4xl lg:text-5xl font-bold">
                        Proident occaecat
                      </h1>
                      <h3 className="text-3xl font-medium mt-2">
                        Aliquip ex ea commodo consequat
                      </h3>
                      <p className="mt-4">
                        You are permitted to use this Zay CSS template for your
                        commercial websites. You are{" "}
                        <strong>not permitted</strong> to re-distribute the
                        template ZIP file in any kind of template collection
                        websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#efefef]">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20">
                  <div className="mx-auto lg:order-last">
                    <Image
                      src="https://i.postimg.cc/4yyhL9JR/banner_img_03.jpg"
                      alt="Banner 3"
                      width={600}
                      height={500}
                      className="img-fluid"
                      data-ai-hint="woman fashion"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="text-left">
                      <h1 className="text-4xl lg:text-5xl font-bold">
                        Repr in voluptate
                      </h1>
                      <h3 className="text-3xl font-medium mt-2">
                        Ullamco laboris nisi ut
                      </h3>
                      <p className="mt-4">
                        We bring you 100% free CSS templates for your websites.
                        If you wish to support TemplateMo, please make a small
                        contribution via PayPal or tell your friends about our
                        website. Thank you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 bg-transparent border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 bg-transparent border-none" />
      </Carousel>

      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="text-4xl font-bold">Categories of The Month</h1>
            <p className="mt-2">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="text-center">
            <Link href="/shop">
              <Image
                src="https://i.postimg.cc/KjW3d8YW/category_img_01.jpg"
                alt="Watches"
                width={300}
                height={300}
                className="rounded-full img-fluid border mx-auto"
                data-ai-hint="watch"
              />
            </Link>
            <h5 className="text-center mt-3 mb-3 text-2xl font-medium">
              Watches
            </h5>
            <p className="text-center">
              <Link href="/shop">
                <Button>Go Shop</Button>
              </Link>
            </p>
          </div>
          <div className="text-center">
            <Link href="/shop">
              <Image
                src="https://i.postimg.cc/hvYQHtGw/category_img_02.jpg"
                alt="Shoes"
                width={300}
                height={300}
                className="rounded-full img-fluid border mx-auto"
                data-ai-hint="shoes"
              />
            </Link>
            <h2 className="text-2xl font-medium text-center mt-3 mb-3">
              Shoes
            </h2>
            <p className="text-center">
              <Link href="/shop">
                <Button>Go Shop</Button>
              </Link>
            </p>
          </div>
          <div className="text-center">
            <Link href="/shop">
              <Image
                src="https://i.postimg.cc/rsHRvwpB/category_img_03.jpg"
                alt="Accessories"
                width={300}
                height={300}
                className="rounded-full img-fluid border mx-auto"
                data-ai-hint="sunglasses"
              />
            </Link>
            <h2 className="text-2xl font-medium text-center mt-3 mb-3">
              Accessories
            </h2>
            <p className="text-center">
              <Link href="/shop">
                <Button>Go Shop</Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100">
        <div className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="text-4xl font-bold">Featured Product</h1>
                    <p>
                        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-6">
                {featuredProducts.map((product, index) => (
                    <Card key={index} className="h-100">
                        <Link href="/shop/single">
                            <Image src={product.img} alt={product.name} width={400} height={300} className="card-img-top" data-ai-hint={product.hint} />
                        </Link>
                        <CardContent className="p-4">
                            <div className="flex justify-between">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} fill={i < product.rating ? 'currentColor' : 'none'}/>
                                    ))}
                                </div>
                                <p className="text-muted text-right">{product.price}</p>
                            </div>
                            <Link href="/shop/single" className="h2 text-decoration-none text-dark">{product.name}</Link>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <p className="text-muted">Reviews ({product.reviews})</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>

    </main>
  );
}
