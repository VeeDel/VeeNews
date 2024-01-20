import { allData, socialMedias } from "../constants";
import logo from "../assets/site-logo.svg";
export default function Footer() {
  return (
    <footer className="max-container flex gap-5">
      <div>
        <img src={logo} alt="" />
        <div className="flex gap-3">
          {socialMedias.map((item) => (
            <img key={item.label} width={30} src={item.logo} className="mt-4" />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        {allData.map((data) => (
          <div className="my-2 justify-center itc" key={data.category}>
            <h1 className="font-semibold text-xl my-2">{data.category}</h1>
            <div className="text-lg text-gray-500 flex flex-col gap-2">
              {data.data.map((data) => (
                <p key={data.text}>
                  <a href={data.link}>{data.text}</a>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
