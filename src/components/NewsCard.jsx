import { Calendar, User } from "phosphor-react";
import PropTypes from "prop-types";
export default function NewsCard({
  title,
  description,
  urlToImage,
  author,
  publishedAt,
}) {
  return (
    <div className="flex max-md:flex-col justify-center items-center  gap-6 bg-white p-4 rounded-lg shadow-md">
      <div
        className=" w-[500px] h-[100%] "
        style={{
          backgroundImage: `url(${urlToImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col gap-2">
        <p className="topic-headline text-purple-600">Technology</p>
        <h2 className="font-bold text-lg">{title} </h2>
        <p className="info-text text-gray-700">{description}</p>
        <ul className="pt-2 gap-2 flex text-sm">
          <li className="flex items-center">
            <User size={16} className="mr-1" />
            {author}
          </li>
          <li className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {publishedAt.slice(0, 10)}
          </li>
        </ul>
      </div>
    </div>
  );
}
