
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WholesalerCard from "@/components/WholesalerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import { wholesalers } from "@/data/mockData";
import { Wholesaler } from "@/types";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [searchResults, setSearchResults] = useState<Wholesaler[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  useEffect(() => {
    if (queryParam) {
      const query = queryParam.toLowerCase();
      const results = wholesalers.filter((wholesaler) => {
        // Search in name, description
        const nameMatch = wholesaler.name.toLowerCase().includes(query);
        const descMatch = wholesaler.description.toLowerCase().includes(query);
        
        // Search in stock items
        const stockMatch = wholesaler.stockItems.some(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        
        return nameMatch || descMatch || stockMatch;
      });
      
      setSearchResults(results);
    }
  }, [queryParam]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="mb-2 text-3xl font-bold">Search Results</h1>
          <p className="mb-6 text-muted-foreground">
            {queryParam
              ? `Search results for "${queryParam}"`
              : "Enter a search term to find wholesalers"}
          </p>

          {/* Search form */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex max-w-xl gap-2">
              <Input
                type="search"
                placeholder="Search wholesalers or products..."
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="bg-gikomba-blue hover:bg-blue-700">
                <SearchIcon className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>
          </div>

          {/* Search results */}
          {queryParam ? (
            searchResults.length > 0 ? (
              <div>
                <p className="mb-4 text-muted-foreground">
                  Found {searchResults.length} wholesaler
                  {searchResults.length !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map((wholesaler) => (
                    <WholesalerCard key={wholesaler.id} wholesaler={wholesaler} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-100 rounded-lg">
                <SearchIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold">No Results Found</h3>
                <p className="mt-2 text-muted-foreground">
                  We couldn't find any wholesalers matching "{queryParam}"
                </p>
                <p className="mt-1 text-muted-foreground">
                  Try different keywords or browse by category
                </p>
              </div>
            )
          ) : (
            <div className="p-8 text-center bg-gray-100 rounded-lg">
              <SearchIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold">Enter a Search Term</h3>
              <p className="mt-2 text-muted-foreground">
                Search for wholesalers, products, or categories
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
