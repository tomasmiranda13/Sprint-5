import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="position-nav">
        <img className="logo" src="./icons/logo.svg" alt=" " />
        <ul className="position-ul">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#sign-in">Sign In</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
