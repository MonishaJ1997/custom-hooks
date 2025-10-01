import React from "react";
import { useFetch } from "./useFetch.js";

const FetchExample = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <div><h2>{data.title}</h2><p>{data.body}</p></div>;
};

export default FetchExample;
