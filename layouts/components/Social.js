import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";

const Social = ({ source, className }) => {
  const {
    facebook,
    twitter,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
  } = source;
  
  const socialIcons = [
    { name: 'facebook', icon: IoLogoFacebook, color: 'text-blue-600', link: facebook },
    { name: 'twitter', icon: IoLogoTwitter, color: 'text-blue-400', link: twitter },
    { name: 'instagram', icon: IoLogoInstagram, color: 'text-pink-600', link: instagram },
    { name: 'youtube', icon: IoLogoYoutube, color: 'text-red-600', link: youtube },
    { name: 'linkedin', icon: IoLogoLinkedin, color: 'text-blue-700', link: linkedin },
    { name: 'github', icon: IoLogoGithub, color: 'text-gray-800', link: github },
    { name: 'gitlab', icon: IoLogoGitlab, color: 'text-orange-500', link: gitlab },
    { name: 'medium', icon: IoLogoMedium, color: 'text-green-500', link: medium },
    { name: 'codepen', icon: IoLogoCodepen, color: 'text-yellow-500', link: codepen },
    { name: 'bitbucket', icon: IoLogoBitbucket, color: 'text-blue-500', link: bitbucket },
    { name: 'dribbble', icon: IoLogoDribbble, color: 'text-pink-500', link: dribbble },
    { name: 'behance', icon: IoLogoBehance, color: 'text-blue-500', link: behance },
    { name: 'pinterest', icon: IoLogoPinterest, color: 'text-red-500', link: pinterest },
    { name: 'soundcloud', icon: IoLogoSoundcloud, color: 'text-orange-500', link: soundcloud },
    { name: 'tumblr', icon: IoLogoTumblr, color: 'text-purple-600', link: tumblr },
    { name: 'reddit', icon: IoLogoReddit, color: 'text-orange-600', link: reddit },
    { name: 'vk', icon: IoLogoVk, color: 'text-blue-500', link: vk },
    { name: 'whatsapp', icon: IoLogoWhatsapp, color: 'text-green-600', link: whatsapp },
    { name: 'snapchat', icon: IoLogoSnapchat, color: 'text-yellow-400', link: snapchat },
    { name: 'vimeo', icon: IoLogoVimeo, color: 'text-green-500', link: vimeo },
    { name: 'tiktok', icon: IoLogoTiktok, color: 'text-black', link: tiktok },
    { name: 'foursquare', icon: IoLogoFoursquare, color: 'text-blue-500', link: foursquare },
    { name: 'skype', icon: IoLogoSkype, color: 'text-blue-600', link: skype },
    { name: 'website', icon: IoGlobeOutline, color: 'text-gray-500', link: website },
    { name: 'rss', icon: IoLogoRss, color: 'text-yellow-500', link: rss },
    { name: 'email', icon: IoMail, color: 'text-gray-600', link: email },
    { name: 'phone', icon: IoCall, color: 'text-green-500', link: phone },
    { name: 'address', icon: IoLocation, color: 'text-red-500', link: address },
  ];

  return (
    <ul className={`${className} flex flex-wrap justify-center gap-4 md:gap-6`}>
      {socialIcons.map(({ name, icon: Icon, color, link }, i) => (
        link ? (
          <li key={i} className="inline-block">
            <a
              aria-label={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`p-4 rounded-full text-2xl ${color} hover:bg-gray-800 hover:text-white transition-all ease-in-out transform hover:scale-110`}
            >
              <Icon />
            </a>
          </li>
        ) : null
      ))}
    </ul>
  );
};

export default Social;
