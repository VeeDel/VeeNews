import { allData, socialMedias } from "../constants";
import logo from "../assets/site-logo.svg";
export default function Footer() {
  return (
    <footer className="max-container flex flex-row gap-5">
      <div>
        <img src={logo} alt={logo} />
        <div className="flex gap-3">
          {socialMedias.map((item) => (
            <img key={item.label} width={30} src={item.logo} className="mt-4" />
          ))}
        </div>
        {}
      </div>
    </footer>
  );
}
