
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PremiumBanner from "@/components/PremiumBanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { categories, wholesalers } from "@/data/mockData";
import { Wholesaler, Category } from "@/types";
import { Heart, Star, Phone, MessageSquare, Mail, MapPin, Lock } from "lucide-react";
import { useApp } from "@/context/AppContext";

const WholesalerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [wholesaler, setWholesaler] = useState<Wholesaler | null>(null);
  const [relatedCategories, setRelatedCategories] = useState<Category[]>([]);
  const { favorites, toggleFavorite, user } = useApp();
  const isFavorite = favorites.includes(id || "");

  useEffect(() => {
    // Find the wholesaler by id
    const foundWholesaler = wholesalers.find((ws) => ws.id === id);
    setWholesaler(foundWholesaler || null);

    // If wholesaler is found, get related categories
    if (foundWholesaler) {
      const foundCategories = categories.filter((cat) =>
        foundWholesaler.categories.includes(cat.id)
      );
      setRelatedCategories(foundCategories);
    }
  }, [id]);

  if (!wholesaler) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 py-8">
          <div className="container px-4 mx-auto md:px-6">
            <h1 className="mb-2 text-3xl font-bold">Wholesaler Not Found</h1>
            <p className="text-muted-foreground">
              The wholesaler you are looking for does not exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Cover and Logo Area */}
        <div className="relative h-48 bg-gray-200 md:h-64">
          <img
            src={wholesaler.coverImage}
            alt={`${wholesaler.name} cover`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="container px-4 mx-auto -mt-16 md:px-6">
          <div className="relative z-10 flex items-end mb-4">
            <div className="flex-shrink-0 p-1 mr-4 bg-white rounded-xl">
              <img
                src={wholesaler.logo}
                alt={wholesaler.name}
                className="w-20 h-20 border rounded-lg md:w-24 md:h-24"
              />
            </div>
            <div className="flex-1 pb-2 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {wholesaler.verified && (
                  <Badge variant="outline" className="border-white text-white">
                    Verified
                  </Badge>
                )}
                {wholesaler.premium && (
                  <Badge className="bg-gikomba-blue text-white border-none">
                    Premium
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl font-bold md:text-3xl">{wholesaler.name}</h1>
              <div className="flex items-center text-white/90">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                <span>{wholesaler.rating}</span>
                <span className="mx-1">•</span>
                <span>{wholesaler.reviewCount} reviews</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => toggleFavorite(wholesaler.id)}
              className={`rounded-full border-white ${
                isFavorite
                  ? "text-red-500 bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-6 md:col-span-2">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">About</h2>
                <p className="text-gray-700">{wholesaler.description}</p>

                <h3 className="mt-6 mb-3 text-lg font-semibold">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedCategories.map((category) => (
                    <Link key={category.id} to={`/categories/${category.slug}`}>
                      <Badge variant="secondary" className="cursor-pointer">
                        {category.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Available Stock</h2>
                <div className="space-y-4">
                  {wholesaler.stockItems.map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 border rounded-lg ${
                        item.available
                          ? "border-gray-200"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        {!item.available && (
                          <Badge variant="outline" className="text-red-500 border-red-200">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center mt-3 gap-x-6 gap-y-2">
                        <div>
                          <span className="text-sm text-gray-500">Price Range:</span>
                          <span className="ml-2 font-medium">
                            Ksh {item.priceRange.min.toLocaleString()} - Ksh{" "}
                            {item.priceRange.max.toLocaleString()}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Unit:</span>
                          <span className="ml-2">{item.unit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Premium Banner */}
              <PremiumBanner />

              {/* Contact Information */}
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                {user?.hasPaidAccess ? (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{wholesaler.contactInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-3 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">WhatsApp</p>
                        <p className="font-medium">{wholesaler.contactInfo.whatsapp}</p>
                      </div>
                    </div>
                    {wholesaler.contactInfo.email && (
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{wholesaler.contactInfo.email}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 text-center rounded-lg bg-gray-50">
                    <Lock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <h3 className="text-lg font-medium">Premium Content</h3>
                    <p className="mb-3 text-sm text-gray-500">
                      Upgrade to premium to view contact information
                    </p>
                    <Link to="/premium">
                      <Button className="w-full bg-gikomba-orange hover:bg-orange-600">
                        Upgrade Now
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Location Information */}
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-xl font-semibold">Location</h2>
                {user?.hasPaidAccess ? (
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="w-5 h-5 mr-3 text-gray-500 shrink-0" />
                      <div>
                        <p className="font-medium">{wholesaler.location.address}</p>
                        <p className="text-gray-500">{wholesaler.location.section}</p>
                        <p className="mt-1 text-sm text-gray-600">
                          {wholesaler.location.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-1 mt-3 overflow-hidden border rounded-lg bg-gray-50">
                      <div className="bg-gray-200 rounded h-28 flex items-center justify-center">
                        <p className="text-sm text-gray-500">Map view available in premium</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-center rounded-lg bg-gray-50">
                    <Lock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <h3 className="text-lg font-medium">Premium Content</h3>
                    <p className="mb-3 text-sm text-gray-500">
                      Upgrade to premium to view location details and map
                    </p>
                    <Link to="/premium">
                      <Button className="w-full bg-gikomba-orange hover:bg-orange-600">
                        Upgrade Now
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WholesalerDetail;
