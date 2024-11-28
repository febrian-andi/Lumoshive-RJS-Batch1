import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const prefetchPage = () => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = "/blog/1";
    document.head.appendChild(link);
    console.log("prefetching");
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="/blog/1" onMouseOver={prefetchPage}>
        Blog
      </Link>
    </div>
  );
};

export default Home;