import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="section bg-theme-dark py-8">
      <div className="container text-center">
        {/* footer menu */}
        <ul className="mb-8 flex flex-wrap justify-center space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link 
                href={menu.url} 
                className="p-4 text-light hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* social icons */}
        <div className="mb-8">
          <Social source={social} className="social-icons flex justify-center space-x-4" />
        </div>
        {/* divider */}
        <div className="border-t border-light my-4" />
        {/* copyright */}
        <div className="text-light">
          {markdownify(copyright, "p", "text-light")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
