import { useState } from "react";
import { Menu, X } from 'lucide-react';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">Soudemy</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">How it Works</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Client Stories</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">Sign in</button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 font-medium">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700">Features</a>
              <a href="#" className="text-gray-700">How it Works</a>
              <a href="#" className="text-gray-700">Products</a>
              <a href="#" className="text-gray-700">Client Stories</a>
              <button className="text-left text-gray-700">Sign in</button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full w-fit font-medium">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
