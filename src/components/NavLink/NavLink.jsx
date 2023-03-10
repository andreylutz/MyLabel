import "../../styles/NavLink.scss";

const NavLink = ({ title = "Link" }) => {
  return (
    <div>
      <div className="navLink">{title}</div>
    </div>
  );
};

export default NavLink;
