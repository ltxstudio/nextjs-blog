import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="section bg-theme-dark py-12 lg:py-16 text-light">
      <div className="container mx-auto px-4 md:px-8">
        {/* Footer Menu */}
        <ul className="mb-8 flex flex-wrap justify-center space-x-6 md:space-x-12">
          {menu.footer.map((item) => (
            <li className="inline-block" key={item.name}>
              <Link 
                href={item.url} 
                className="text-lg font-medium py-2 px-4 text-light hover:text-primary hover:bg-theme-light rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="mb-8 flex justify-center space-x-6">
          <Social source={social} className="social-icons flex space-x-6 text-light" />
        </div>

        {/* Divider */}
        <div className="border-t border-light opacity-20 my-6 md:my-8" />

        {/* Copyright */}
        <div className="text-sm md:text-base text-center text-light opacity-80">
          {markdownify(copyright, "p", "text-light")}
        </div>
      </div>

      {/* Additional Footer Background Section */}
      <div className="bg-theme-dark-2 py-8">
        <div className="container mx-auto px-4 text-center text-light">
          <p className="text-sm md:text-base opacity-70">
            Designed and developed by YourCompanyName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
