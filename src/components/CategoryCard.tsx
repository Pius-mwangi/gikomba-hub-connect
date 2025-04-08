
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/categories/${category.slug}`}>
      <div className="overflow-hidden transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md group">
        <div className="relative h-40 overflow-hidden bg-muted">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
