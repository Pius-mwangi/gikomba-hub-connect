
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WholesalerCard from "@/components/WholesalerCard";
import { categories, wholesalers } from "@/data/mockData";
import { Category, Wholesaler } from "@/types";

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryWholesalers, setCategoryWholesalers] = useState<Wholesaler[]>([]);

  useEffect(() => {
    // Find the category by slug
    const foundCategory = categories.find((cat) => cat.slug === slug);
    setCategory(foundCategory || null);

    // If category is found, filter wholesalers by category
    if (foundCategory) {
      const filteredWholesalers = wholesalers.filter((wholesaler) =>
        wholesaler.categories.includes(foundCategory.id)
      );
      setCategoryWholesalers(filteredWholesalers);
    }
  }, [slug]);

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 py-8">
          <div className="container px-4 mx-auto md:px-6">
            <h1 className="mb-2 text-3xl font-bold">Category Not Found</h1>
            <p className="text-muted-foreground">
              The category you are looking for does not exist.
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
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="mb-2 text-3xl font-bold">{category.name}</h1>
          <p className="mb-8 text-muted-foreground">{category.description}</p>

          {categoryWholesalers.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryWholesalers.map((wholesaler) => (
                <WholesalerCard key={wholesaler.id} wholesaler={wholesaler} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold">No Wholesalers Found</h3>
              <p className="mt-2 text-muted-foreground">
                There are currently no wholesalers in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
