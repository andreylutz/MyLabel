import "../../styles/NavLink.scss";

import useSound from "use-sound";
import suondClick from "../../sound/click.mp3";
import soundHover from "../../sound/jedai.mp3";

const NavLink = ({ title = "Link" }) => {
  const [playClick] = useSound(suondClick, { volume: 0.3 });
  const [playHover, { stopHover }] = useSound(soundHover, { volume: 0.1 });

  return (
    <div style={{ marginTop: "10%" }}>
      <div
        onClick={playClick}
        onMouseEnter={() => {
          playHover();
        }}
        onMouseLeave={() => {
          stopHover();
        }}
        className="navLink"
      >
        {title}
      </div>
    </div>
  );
};

export default NavLink;
