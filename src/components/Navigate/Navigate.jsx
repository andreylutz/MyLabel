import "../../styles/Navigate.scss";

import { v4 as uuidv4 } from "uuid";

// navigate
import { Link } from "react-router-dom";

// sound
import useSound from "use-sound";
import suondClick from "../../sound/click.mp3";
import soundHover from "../../sound/jedai.mp3";

// components
import Avatar from "../Avatar/Avatar";
import NavLink from "../NavLink/NavLink";
import Contacts from "../Contacts/Contacts";

// Navigation menu items
const navItems = [
  { title: "Про меня", path: "/about_me" },
  { title: "Мои навыки", path: "/my_skills" },
  { title: "Мой опыт", path: "/work" },
  { title: "Контакты", path: "/contacts" },
  { title: "Мой блог", path: "/blog" },
];

const Navigate = ({ title }) => {
  const [playClick] = useSound(suondClick, { volume: 0.3 });
  const [playHover, { stopHover }] = useSound(soundHover, { volume: 0.1 });

  return (
    <div id="navigate-box">
      <Link to={"/"}>
        <Avatar />
      </Link>
      {navItems.map((navItem) => (
        <Link
          className="link"
          onClick={playClick}
          onMouseEnter={() => playHover()}
          onMouseLeave={() => stopHover()}
          key={uuidv4()}
          to={navItem.path}
        >
          <NavLink title={navItem.title} />
        </Link>
      ))}
      <Contacts />
    </div>
  );
};

export default Navigate;
