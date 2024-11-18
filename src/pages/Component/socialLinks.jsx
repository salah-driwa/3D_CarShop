import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    name: 'Facebook',
    icon: <FaFacebook />,
    url: 'https://facebook.com',
    color: 'text-blue-600',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com',
    color: 'text-pink-500',
  },
  {
    id: 3,
    name: 'YouTube',
    icon: <FaYoutube />,
    url: 'https://youtube.com',
    color: 'text-red-600',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com',
    color: 'text-blue-400',
  },
];

function SocialIcons() {
  return (
    <div className="flex space-x-6 justify-center items-center mt-4">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={` text-white bg-gray-400/20 p-2
            rounded-full text-2xl hover:scale-110 transition-transform`}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
