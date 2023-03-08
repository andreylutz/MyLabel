import "../../styles/NavLink.scss";

const NavLink = ({ title = "Link" }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="navLink">Hover me</div>
    </div>
  );
};

export default NavLink;
