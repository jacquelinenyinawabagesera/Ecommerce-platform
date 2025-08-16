import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
export function Header() {
  return (
    <div className="w-full">
      <div className="bg-black text-white text-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <button className="ml-2 underline font-semibold">ShopNow</button>
          <div className="ml-auto">
            <select className="bg-transparent border-none text-white">
              <option>English</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <Link href="/" className="text-2xl font-bold text-black">
            Exclusive
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-black hover:underline">
              Home
            </Link>
            <Link href="/contact" className="text-black hover:underline">
              Contact
            </Link>
            <Link href="/about" className="text-black hover:underline">
              About
            </Link>
            <Link href="/signup" className="text-black hover:underline">
              Sign Up
            </Link>
          </nav>

          <div className="flex items-center space-x-4">

            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-light pl-4 pr-10 py-2 text-sm border-none rounded-sm w-64"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-600" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
