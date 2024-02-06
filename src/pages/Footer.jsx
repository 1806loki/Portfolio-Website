/* eslint-disable react/no-unescaped-entities */
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="p-6 border-t-2  ">
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">
          "I turn website dreams into digital realities – if it's imaginable, it's achievable in my hands"
        </p>
        <p>- An Full Stack Alchemist</p>
        <ul className="flex space-x-4 mt-4">
          <li>
            <a href="https://twitter.com/Lokesh8919">
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/1806loki"
              className="hover:text-gray-300"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lokesh-thalathoti-14a3491b4/"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lokesh_1805/"
              className="hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="mailto:thalathotilokesh@gmail.com" className="hover:text-gray-300">
              <BiLogoGmail size={20} />
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-4 text-right text-sm">Created by ©️ Loki with Love ❤️</p>
    </footer>
  );
};

export default Footer;
