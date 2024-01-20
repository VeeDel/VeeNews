import VerticleCard from "../components/VerticleCard";
import { AnotherApps } from "../constants";
import Headlins from "../components/Headlins";

export default function Apps() {
  return (
    <section>
      <section className="max-container border-b pb-5">
        <div>
          <Headlins Headline={"Apps"} ViewMore={"More in Apps"} />
          <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-4">
            {AnotherApps.map((news) => (
              <VerticleCard {...news} key={news.label} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
