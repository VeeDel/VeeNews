import { Calendar, User } from "phosphor-react";
import appleLogo from "../assets/appkeimg.jpg";
import { apps } from "../constants";
import { useEffect } from "react";
import { UseFetch } from "../hooks/useFetch";
import { useState } from "react";
import { object } from "prop-types";

export default function Hero() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const fetchDataNews = async () => {
      try {
        const response = await UseFetch("technology");
        const selectedNews = response.articles
          .filter((item) => item.urlToImage !== null)
          .slice(0, 1);
        setNewsData(...selectedNews);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchDataNews();
  }, []);

  return (
    <section className="max-container mt-5">
      <div className="flex justify-center flex-col lg:flex-row gap-4 px-5">
        <div
          className="flex lg:w-3/4 flex-col justify-end  bg-primary bg-cover bg-center max-md:h-full h-auto   p-7 text-white"
          style={{
            backgroundImage: `url(${newsData.urlToImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <p className="uppercase text-sm font-bold rounded-md"></p>
          <a href="/">
            <h1
              className="text-2xl cursor-pointer hover:text-purple-300 ease-in-out duration-300 transition font-semibold"
              style={{ zIndex: 2 }}
            >
              {newsData.title}
            </h1>{" "}
          </a>
          <ul className="pt-2 gap-2 flex">
            <li className="flex gap-1 justify-center items-center">
              <User />
              {newsData.author}
            </li>
            <li className="flex gap-1 justify-center items-center">
              {/* <Calendar /> {newsData.publishedAt.slice(0, 10)} */}
            </li>
          </ul>
          <p className="pt-2">{newsData.description}...</p>
        </div>
        <div className="flex gap-4 lg:w-1/4 lg:flex-col max-sm:flex-col">
          <div>
            <img src={appleLogo} alt="main News" />
          </div>
          <div className="max-lg:grid max-sm:grid-cols-1 grid-cols-2 justify-center items-center  gap-4 w-auto">
            {apps.map((news) => (
              <div key={news.topic} className="border-purple-400 ">
                <h1 className="topic-headline">{news.topic}</h1>
                <p className="info-text">{news.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
