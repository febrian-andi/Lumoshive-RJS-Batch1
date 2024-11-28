import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Cache() {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //       "Cache-control": `max-age=${60 * 60 * 24 * 7}`,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );

  if (error) return "An error has occured.";
  if (isLoading) return "Loading...";

  return (
    <div className="container">
      <h1>Cache</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default Cache;