import { useEffect } from "react";
import Headlins from "../components/Headlins";
import NewsOnImage from "../components/NewsOnImage";
import { animeNews } from "../constants";
import { UseFetch } from "../hooks/useFetch";
import { useState } from "react";
export default function MustRead() {
  const [newsData, setNewsData] = useState();
  useEffect(() => {
    const fetchDataNews = async () => {
      const response = await UseFetch("technology");
      console.log(response);
      const selectedNews = response.articles
        .filter((item) => item.urlToImage !== null)
        .slice(0, 2);
      setNewsData(selectedNews);
      console.log(newsData);
    };
    fetchDataNews();
  }, []);
  return (
    <section className="max-container">
      <div>
        <Headlins Headline={"Anime News"} ViewMore={"View All"} />
        <div className="flex max-md:flex-col gap-1">
          {animeNews.map((news) => (
            <div className=" w-full object-cover" key={news.title}>
              <NewsOnImage {...news} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
