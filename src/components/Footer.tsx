
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-8 bg-gray-50 border-t">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-gikomba-orange" />
              <span className="text-xl font-bold text-gikomba-orange">
                Gikomba<span className="text-gikomba-blue">Connect</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Connecting small business owners with trusted wholesalers in Gikomba Market.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/categories/clothes"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Clothes
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/shoes"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/kidswear"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Kidswear
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/bags"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Bags
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/premium"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Premium Access
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-600 hover:text-gikomba-orange"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 text-sm text-center text-gray-600 border-t">
          <p>&copy; {new Date().getFullYear()} Gikomba Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
