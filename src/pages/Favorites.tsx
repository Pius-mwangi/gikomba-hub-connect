
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WholesalerCard from "@/components/WholesalerCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { isAuthenticated, getFavoriteWholesalers } = useApp();
  const favoriteWholesalers = getFavoriteWholesalers();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="mb-2 text-3xl font-bold">Your Favorites</h1>
          <p className="mb-8 text-muted-foreground">
            Wholesalers you've saved for quick access
          </p>

          {!isAuthenticated ? (
            <div className="p-8 text-center bg-gray-100 rounded-lg">
              <Heart className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold">Login to View Favorites</h3>
              <p className="mt-2 mb-4 text-muted-foreground">
                You need to login to save and view your favorite wholesalers
              </p>
              <Link to="/login">
                <Button className="bg-gikomba-orange hover:bg-orange-600">
                  Login Now
                </Button>
              </Link>
            </div>
          ) : favoriteWholesalers.length === 0 ? (
            <div className="p-8 text-center bg-gray-100 rounded-lg">
              <Heart className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold">No Favorites Yet</h3>
              <p className="mt-2 mb-4 text-muted-foreground">
                Browse wholesalers and click the heart icon to add them to your favorites
              </p>
              <Link to="/categories">
                <Button className="bg-gikomba-orange hover:bg-orange-600">
                  Browse Categories
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteWholesalers.map((wholesaler) => (
                <WholesalerCard key={wholesaler.id} wholesaler={wholesaler} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
