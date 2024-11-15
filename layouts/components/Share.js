import config from "@config/config.json";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io5";

const Share = ({ title, description, slug, className }) => {
  // destructuring items from config object
  const { base_url } = config.site;

  return (
    <ul className={`flex space-x-4 ${className}`}>
      <li>
        <a
          aria-label="facebook share button"
          href={`https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          <IoLogoFacebook />
        </a>
      </li>
      <li>
        <a
          aria-label="twitter share button"
          href={`https://twitter.com/intent/tweet/?text=${title}&url=${base_url}/${slug}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300"
        >
          <IoLogoTwitter />
        </a>
      </li>
      <li>
        <a
          aria-label="linkedin share button"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}&title=${title}&summary=${description}&source=${base_url}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition duration-300"
        >
          <IoLogoLinkedin />
        </a>
      </li>
      <li>
        <a
          aria-label="pinterest share button"
          href={`https://pinterest.com/pin/create/button/?url=${base_url}/${slug}&media=&description=${description}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition duration-300"
        >
          <IoLogoPinterest />
        </a>
      </li>
    </ul>
  );
};

export default Share;
