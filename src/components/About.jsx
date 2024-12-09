import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        About My Recipe Book
      </h1>
      <div className="bg-white dark:bg-[#111] shadow-lg rounded-lg p-6 mb-8">
        <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
          Welcome to{" "}
          <span className="font-semibold text-rose-400">Recipe Book</span> – a
          delightful collection of delicious recipes designed to inspire your
          cooking adventures! Whether you're a beginner or a seasoned chef, this
          interactive app makes it easy to explore new dishes, save your
          favorites, and create culinary masterpieces right in your own kitchen.
        </p>
        <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
          With a sleek and user-friendly design, you can:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-rose-400 ">
              Discover New Recipes:
            </span>{" "}
            Browse a wide variety of recipes, from comforting classics to
            exciting new flavors.
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-rose-400">
              Save Your Favorites:
            </span>{" "}
            Create a personalized collection of your go-to recipes, ensuring
            that you always have them at your fingertips.
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-rose-400">
              Search with Ease:
            </span>{" "}
            Find recipes by ingredients, cuisine, or meal type with our powerful
            search function.
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-rose-400">
              Step-by-Step Instructions:
            </span>{" "}
            Follow easy-to-understand instructions and cooking tips to create
            each dish with confidence.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
          This project was built with React, offering a smooth, responsive, and
          dynamic experience for users. The goal is to make cooking fun,
          accessible, and stress-free. Whether you're looking to try something
          new or simply need inspiration for dinner,{" "}
          <span className="font-semibold text-rose-400">My Recipe Book</span> is
          here to help.
        </p>
        <p className="text-lg text-gray-700 italic dark:text-gray-300">
          Happy cooking, and enjoy your culinary journey!
        </p>
      </div>
      <div className="bg-rose-200 rounded-lg p-6 dark:bg-[#111]">
        <h2 className="text-2xl font-bold mb-4 text-rose-800 dark:text-rose-500">
          Our Mission
        </h2>
        <p className="text-gray-900 dark:text-gray-300">
          At Recipe Book, we're passionate about bringing people together
          through the joy of cooking. Our mission is to inspire creativity in
          the kitchen, promote healthy eating habits, and make cooking an
          enjoyable experience for everyone, regardless of their skill level.
        </p>
      </div>
    </div>
  );
};

export default About;
