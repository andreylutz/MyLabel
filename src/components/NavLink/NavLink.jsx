import "../../styles/NavLink.scss";

const NavLink = ({ title = "Link" }) => {
  return (
    <div style={{ marginTop: "10%" }}>
      <div className="navLink">{title}</div>
    </div>
  );
};

export default NavLink;
