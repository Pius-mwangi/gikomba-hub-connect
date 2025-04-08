
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import WholesalerCard from "@/components/WholesalerCard";
import PremiumBanner from "@/components/PremiumBanner";
import { categories, wholesalers } from "@/data/mockData";

const Index = () => {
  // Get featured categories and wholesalers
  const featuredCategories = categories.slice(0, 3);
  const featuredWholesalers = wholesalers.filter(
    (wholesaler) => wholesaler.featured
  );

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-12 overflow-hidden bg-gikomba-blue md:py-20 md:px-6">
          <div className="container relative z-10 mx-auto text-white">
            <div className="max-w-xl mx-auto text-center md:mx-0 md:text-left">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Find Trusted Wholesalers in Gikomba Market
              </h1>
              <p className="mb-6 text-lg text-white/90">
                Connect with verified wholesalers, compare prices, and grow your business with 
                Kenya's most comprehensive Gikomba directory
              </p>
              <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                <Button
                  className="bg-gikomba-orange hover:bg-orange-600 text-white"
                  size="lg"
                  asChild
                >
                  <Link to="/categories">Browse Categories</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                  asChild
                >
                  <Link to="/premium">Upgrade to Premium</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern
                id="market-pattern"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
              <rect width="100" height="100" fill="url(#market-pattern)" />
            </svg>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular Categories</h2>
              <Link
                to="/categories"
                className="flex items-center text-sm font-medium text-gikomba-blue hover:underline"
              >
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Premium Banner */}
        <section className="py-6">
          <div className="container px-4 mx-auto md:px-6">
            <PremiumBanner />
          </div>
        </section>

        {/* Featured Wholesalers Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Wholesalers</h2>
              <Link
                to="/wholesalers"
                className="flex items-center text-sm font-medium text-gikomba-blue hover:underline"
              >
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredWholesalers.map((wholesaler) => (
                <WholesalerCard key={wholesaler.id} wholesaler={wholesaler} />
              ))}
            </div>
          </div>
        </section>

        {/* App Features Section */}
        <section className="py-12">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-10 text-2xl font-bold text-center">Why Use Gikomba Connect?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gikomba-orange/10 text-gikomba-orange">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Find Reliable Suppliers</h3>
                <p className="text-gray-600">
                  Discover verified wholesalers with quality products at competitive prices.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gikomba-blue/10 text-gikomba-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="8" height="8" x="2" y="2" rx="1" />
                    <path d="M22 11V5a1 1 0 0 0-1-1h-3" />
                    <path d="M14 10V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6" />
                    <path d="M10 22V4" />
                    <path d="M18 13v9" />
                    <path d="M22 13V7" />
                    <path d="M6 13v9" />
                    <path d="M2 13v9" />
                    <path d="M14 22V11" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Compare Prices</h3>
                <p className="text-gray-600">
                  Easily view current market prices and find the best deals for your business.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gikomba-green/10 text-gikomba-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 18v-1" />
                    <path d="M16 18v-3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Track Price Updates</h3>
                <p className="text-gray-600">
                  Stay informed with daily price updates and stock availability notifications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
