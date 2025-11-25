
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { href: "https://facebook.com/templatemo", icon: <Facebook className="h-5 w-5"/>, label: "Facebook" },
    { href: "https://www.instagram.com/", icon: <Instagram className="h-5 w-5"/>, label: "Instagram" },
    { href: "https://twitter.com/", icon: <Twitter className="h-5 w-5"/>, label: "Twitter" },
    { href: "https://www.linkedin.com/", icon: <Linkedin className="h-5 w-5"/>, label: "Linkedin" },
  ];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-green-600 border-b-2 border-gray-700 pb-3">
              Zay Shop
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>123 Consectetur at ligula 10660</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:010-020-0340">010-020-0340</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@company.com">info@company.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-200 border-b-2 border-gray-700 pb-3">
              Products
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#">Luxury</Link>
              </li>
              <li>
                <Link href="#">Sport Wear</Link>
              </li>
              <li>
                <Link href="#">Men's Shoes</Link>
              </li>
              <li>
                <Link href="#">Women's Shoes</Link>
              </li>
              <li>
                <Link href="#">Popular Dress</Link>
              </li>
              <li>
                <Link href="#">Gym Accessories</Link>
              </li>
              <li>
                <Link href="#">Sport Shoes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-200 border-b-2 border-gray-700 pb-3">
              Further Info
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="#">Shop Locations</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-3 mb-4 md:mb-0">
            {socialLinks.map(link => (
                <a key={link.label}
                    href={link.href}
                    className="border border-gray-600 rounded-full p-2 hover:bg-gray-300 hover:text-gray-800"
                    >
                    {link.icon}
                </a>
            ))}
          </div>
          <div className="flex w-full md:w-auto">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-gray-700 border-gray-600 text-white w-full"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="container mx-auto">
          <p className="text-left text-gray-400">
            Copyright &copy; 2021 Company Name | Designed by{" "}
            <a
              rel="sponsored"
              href="https://templatemo.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
