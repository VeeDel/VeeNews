import React from "react";
import { useEffect } from "react";
import { UseFetch } from "./useFetch";

export default function useNewsData(category, start, count) {
  const [newsData, setNewsData] = React.useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      const response = await UseFetch(category);
      const selectedNews = response.articles
        .filter((item) => item.urlToImage !== null)
        .slice(start, count);
      setNewsData(selectedNews);
    };
    fetchNewsData();
  }, [category, count]);
  return newsData;
}
