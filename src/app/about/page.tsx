import Image from "next/image";
import { Truck, RefreshCw, Percent, User } from "lucide-react";

const services = [
  { icon: <Truck size={40} />, title: "Delivery Services" },
  { icon: <RefreshCw size={40} />, title: "Shipping & Return" },
  { icon: <Percent size={40} />, title: "Promotion" },
  { icon: <User size={40} />, title: "24 Hours Service" },
];

const brands = [
  "https://i.postimg.cc/WzzJWk2P/brand-01.png",
  "https://i.postimg.cc/NFn2Wj0C/brand-02.png",
  "https://i.postimg.cc/HnN8fkLh/brand-03.png",
  "https://i.postimg.cc/KjW3d8Ys/brand-04.png",
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-5">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold">About Us</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="md:pl-10 mt-5 md:mt-0">
              <Image
                src="https://i.postimg.cc/5yynByGD/about-hero.png"
                alt="About Hero"
                width={600}
                height={400}
                className="img-fluid"
                data-ai-hint="team business"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-5">
        <div className="text-center pt-5 pb-3">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-full py-5 shadow-lg flex flex-col items-center justify-center"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h2 className="text-xl font-medium text-center">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-5">
        <div className="container mx-auto my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="text-4xl font-bold">Our Brands</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {brands.map((brand, index) => (
                  <div key={index} className="p-4">
                    <a href="#">
                      <Image
                        src={brand}
                        alt={`Brand Logo ${index + 1}`}
                        width={200}
                        height={100}
                        className="img-fluid brand-img"
                        data-ai-hint="logo"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
