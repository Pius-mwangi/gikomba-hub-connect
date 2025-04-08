
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Search,
  Heart,
  User,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useApp } from "@/context/AppContext";
import { Input } from "@/components/ui/input";

const NavBar = () => {
  const { isAuthenticated, user, logout } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        {/* Logo and brand name */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-gikomba-orange" />
            <span className="text-xl font-bold text-gikomba-orange">
              Gikomba<span className="text-gikomba-blue">Connect</span>
            </span>
          </Link>
        </div>

        {/* Search on medium screens and up */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <Input
              type="search"
              placeholder="Search wholesalers or products..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center p-2 text-gray-500"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <Link to="/favorites">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>

          {isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="link"
                className="text-gray-700"
                onClick={() => navigate("/profile")}
              >
                {user?.name}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={logout}
                className="text-gray-700"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/login")}
              className="hidden md:inline-flex text-gray-700"
            >
              <User className="w-5 h-5" />
            </Button>
          )}

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                {/* Mobile search */}
                <form onSubmit={handleSearch} className="mb-4">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>

                <div className="space-y-3">
                  <Link
                    to="/"
                    className="flex items-center p-2 rounded-md hover:bg-gray-100"
                  >
                    Home
                  </Link>
                  <Link
                    to="/categories"
                    className="flex items-center p-2 rounded-md hover:bg-gray-100"
                  >
                    Categories
                  </Link>
                  <Link
                    to="/favorites"
                    className="flex items-center p-2 rounded-md hover:bg-gray-100"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </Link>
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/profile"
                        className="flex items-center p-2 rounded-md hover:bg-gray-100"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center w-full p-2 text-left rounded-md hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="flex items-center p-2 rounded-md hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Link>
                  )}
                  <Link
                    to="/premium"
                    className="flex items-center p-2 mt-2 font-medium text-white rounded-md bg-gikomba-orange hover:bg-orange-600"
                  >
                    Upgrade to Premium
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
