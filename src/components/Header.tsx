
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input";

const socialLinks = [
  {
    href: "https://facebook.com/templatemo",
    icon: <Facebook className="h-4 w-4" />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/",
    icon: <Instagram className="h-4 w-4" />,
    label: "Instagram",
  },
  { href: "https://twitter.com/", icon: <Twitter className="h-4 w-4" />, label: "Twitter" },
  {
    href: "https://www.linkedin.com/",
    icon: <Linkedin className="h-4 w-4" />,
    label: "Linkedin",
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];


export default function Header() {
  return (
    <header className="shadow">
      <nav className="bg-gray-800 text-white p-2 hidden lg:block">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Mail className="inline-block mr-2" />
              <a
                className="text-sm text-gray-300 hover:text-white"
                href="mailto:info@company.com"
              >
                info@company.com
              </a>
              <Phone className="inline-block mx-2" />
              <a
                className="text-sm text-gray-300 hover:text-white"
                href="tel:010-020-0340"
              >
                010-020-0340
              </a>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map(link => (
                  <a href={link.href} target="_blank" rel="sponsored" key={link.label} className="text-white">
                      {link.icon}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link
            href="/"
            className="text-4xl font-bold text-green-600"
          >
            Zay
          </Link>
          
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex space-x-8">
              {navLinks.map(link => (
                <li key={link.href}>
                    <Link href={link.href} className="nav-link">
                        {link.label}
                    </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="hidden lg:inline-block">
                  <Search className="h-6 w-6 text-gray-700" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <Input id="search" placeholder="Search..." />
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Search</span>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Link href="#" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-800 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                7
              </span>
            </Link>
            <Link href="#" className="relative">
              <User className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-3 bg-gray-200 text-gray-800 text-xs rounded-full h-5 px-1 flex items-center justify-center">
                +99
              </span>
            </Link>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Zay</SheetTitle>
                    <SheetDescription>
                        <ul className="flex flex-col space-y-4 mt-4">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="nav-link text-lg">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

          </div>
        </div>
      </nav>
    </header>
  );
}
