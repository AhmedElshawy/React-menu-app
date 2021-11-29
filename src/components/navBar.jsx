import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    
    return ( 
        <React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to='/home'>Menu</Link>
        <Link className="nav-link" to='/cart'>Shopping cart</Link>
        <Link className="nav-link" to='/admin'>Admin</Link>
      </div>
    </div>
  </div>
</nav>
        </React.Fragment>
     );
}
 
export default Navbar;