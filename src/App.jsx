import Nav from "./components/Nav";
import Apps from "./sections/Apps";
import EditorsPick from "./sections/EditorsPick";
import GadgetAndSoftware from "./sections/GadgetAndSoftware";
import Hero from "./sections/Hero";
import MustRead from "./sections/MustRead";
import TechReview from "./sections/TechReview";
import Footer from "./sections/Footer";
import Technology from "./sections/Technology";
import Games from "./sections/games";
import Subscribe from "./components/Subscribe";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="relative xl:padding-l wide:padding-r">
        <Hero />
      </section>
      <section className="padding">
        <EditorsPick />
      </section>
      <section className="padding">
        <TechReview />
      </section>
      <section className="padding">
        <MustRead />
      </section>
      <section className="padding">
        <Technology />
      </section>
      <section className="padding">
        <GadgetAndSoftware />
      </section>
      <section className="padding">
        <Apps />
      </section>
      <section className="padding">
        <Games />
      </section>
      <section className="padding"></section>
      <section></section>
      <Footer />
    </main>
  );
}
