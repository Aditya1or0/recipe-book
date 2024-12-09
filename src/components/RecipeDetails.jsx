import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipePage() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      );
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">
        {recipe.title}
      </h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-2xl mb-8 rounded-lg shadow-md"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
            Ingredients
          </h2>
          <ul className="list-disc pl-5 dark:text-gray-300">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
            Instructions
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            className="prose max-w-none dark:text-gray-300"
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
          Summary
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
          className="prose max-w-none dark:text-gray-300"
        />
      </div>
    </div>
  );
}

export default RecipePage;
