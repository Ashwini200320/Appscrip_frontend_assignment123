"use client";

import { ShoppingBag, Search, Menu } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Fashion Store
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/women" className="text-gray-600 hover:text-black">
              Women
            </Link>
            <Link href="/men" className="text-gray-600 hover:text-black">
              Men
            </Link>
            <Link href="/accessories" className="text-gray-600 hover:text-black">
              Accessories
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}