import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#2c2c2c] text-white flex items-center px-4 py-3 shadow-md w-full">
      <Menu className="w-6 h-6 cursor-pointer" />
      <h1 className="text-xl font-normal mx-auto pr-6 text-center">
        E-Hospital Application
      </h1>
    </div>
  );
}