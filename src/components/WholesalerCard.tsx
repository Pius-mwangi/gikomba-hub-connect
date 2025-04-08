
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Wholesaler } from "@/types";
import { Star, Heart } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";

interface WholesalerCardProps {
  wholesaler: Wholesaler;
}

const WholesalerCard: React.FC<WholesalerCardProps> = ({ wholesaler }) => {
  const { favorites, toggleFavorite, user } = useApp();
  const isFavorite = favorites.includes(wholesaler.id);

  return (
    <div className="overflow-hidden transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md group">
      <Link to={`/wholesalers/${wholesaler.id}`}>
        <div className="relative h-40 overflow-hidden bg-muted">
          <img
            src={wholesaler.coverImage}
            alt={wholesaler.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-3">
            <div className="flex items-center">
              <img
                src={wholesaler.logo}
                alt={`${wholesaler.name} logo`}
                className="w-10 h-10 mr-2 border-2 border-white rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{wholesaler.name}</h3>
                <div className="flex items-center text-white">
                  <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">{wholesaler.rating}</span>
                  <span className="mx-1 text-xs text-gray-300">
                    ({wholesaler.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-wrap gap-1">
            {wholesaler.verified && (
              <Badge variant="outline" className="text-xs border-gikomba-blue text-gikomba-blue">
                Verified
              </Badge>
            )}
            {wholesaler.premium && (
              <Badge className="text-xs bg-gikomba-blue text-white">
                Premium
              </Badge>
            )}
            {wholesaler.featured && (
              <Badge className="text-xs bg-gikomba-yellow text-black">
                Featured
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(wholesaler.id);
            }}
            className={`hover:bg-transparent ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>

        <Link to={`/wholesalers/${wholesaler.id}`}>
          <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
            {wholesaler.description}
          </p>

          <div className="text-xs text-muted-foreground">
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {wholesaler.location.section}
            </p>
            <p>
              <span className="font-semibold">Sells:</span>{" "}
              {wholesaler.stockItems.slice(0, 2).map(item => item.name).join(", ")}
              {wholesaler.stockItems.length > 2 ? "..." : ""}
            </p>
          </div>

          {user?.hasPaidAccess ? (
            <p className="mt-2 text-sm font-medium text-gikomba-green">
              Contact info available
            </p>
          ) : (
            <p className="mt-2 text-sm font-medium text-gikomba-blue">
              Unlock contact info with Premium
            </p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default WholesalerCard;
