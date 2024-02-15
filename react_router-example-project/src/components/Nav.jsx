import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import { useLoginContextCall } from "../context/LoginProvider";
// import { LoginContext } from "../context/LoginContext";

function Nav() {
  const {user,setUser}=useLoginContextCall()
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/people" className="nav-link" aria-current="page">
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/paths" className="nav-link" aria-current="page">
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" aria-current="page">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              {user.email && user.password ? (
                <NavLink to="/login" className="nav-link" aria-current="page" onClick={()=>setUser({email:"",password:""})}>
                logout
              </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link" aria-current="page">
                login
              </NavLink>
              )}
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
