
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/mockData";

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="mb-2 text-3xl font-bold">Categories</h1>
          <p className="mb-8 text-muted-foreground">
            Browse all categories of wholesalers available in Gikomba Market
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
