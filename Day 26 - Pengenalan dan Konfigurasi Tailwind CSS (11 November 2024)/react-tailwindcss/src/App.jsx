import React, { useMemo, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemList";
import articleData from "./data/articleData";
import ButtonScrollUp from "./components/ButtonScrollUp";

function App() {
  const [articles, setArticles] = useState(articleData);

  const siaranPers = useMemo(() => {
    return articles.filter((article) => article.category === "Siaran Pers");
  }, [articles]);

  const behindTheScene = useMemo(() => {
    return articles.filter(
      (article) => article.category === "Behind The Scene"
    );
  }, [articles]);

  return (
    <div>
      <header className="mx-auto px-4 lg:px-24">
        <Navbar />
      </header>
      <main className="mx-auto px-4 lg:px-24">
        <Hero />
        <ItemListContainer 
          article={siaranPers} 
          category={"Siaran Pers"} 
        />
        <ItemListContainer
          article={behindTheScene}
          category={"Behind The Scene"}
        />
      </main>
      <Footer />
      <ButtonScrollUp />
    </div>
  );
}

export default App;
