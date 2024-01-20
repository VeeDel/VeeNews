import logo from "../assets/site-logo.svg";
import { navlinks } from "../constants";
export default function Nav() {
  return (
    <header className="padding-x py-8  z-10 w-full">
      <nav className="max-container flex justify-between items-center gap-20">
        <div className="flex gap-6">
          <a href="/">
            <img src={logo} alt="logo" height={29} width={130} />
          </a>
          <ul className=" hidden md:flex justify-center items-center gap-6 font-bold uppercase text-sm">
            {navlinks.map((link) => (
              <li
                key={link.label}
                className="hover:text-purple-600 cursor-pointer"
              >
                <a href={link.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden gap-6 font-semibold justify-center items-center md:flex">
          <h1 className="text-purple-600 text-lg font-bold hover:text-purple-800 hover:underline">
            <a href="/subscribe">Subscribe</a>
          </h1>
          <h1 className="text-gray-400">
            <a href="/signup">SignUp</a>
          </h1>
        </div>
        <div className=" font-bold hidden max-md:block">Burger Menu</div>
      </nav>
    </header>
  );
}
