import Headlins from "../components/Headlins";
import NewsOnImage from "../components/NewsOnImage";
import { games } from "../constants";
export default function MustRead() {
  return (
    <section className="max-container">
      <div>
        <Headlins Headline={"Games"} ViewMore={"View All"} />
        <div className="flex max-md:flex-col max-md:gap-1">
          {games.map((news) => (
            <div className=" w-full object-cover" key={news.title}>
              <NewsOnImage {...news} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
