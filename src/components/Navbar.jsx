import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" mb:h-20 w-auto mb-8 flex justify-center items-center">
      <ul className="gap-10 mb:text-xl flex gap-20">
        <li>Intro</li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="aboutMe" smooth={true} duration={500}>
            About-me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
