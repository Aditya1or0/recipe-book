import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          query
            ? `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`
            : `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch recipes. Please check your API key or usage limits."
          );
        }

        const data = await response.json();
        setRecipes(query ? data.results || [] : data.recipes || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        {query ? `Search Results for "${query}"` : "Featured Recipes"}
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-rose-500" />
        </div>
      ) : recipes.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">
          {query
            ? "No recipes found for your search term."
            : "Sorry, we couldn't fetch recipes. Please try again later."}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="bg-white dark:bg-[#111] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                    {recipe.title}
                  </h2>
                  {recipe.readyInMinutes && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ready in {recipe.readyInMinutes} minutes
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
