import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetails from "./components/RecipeDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
