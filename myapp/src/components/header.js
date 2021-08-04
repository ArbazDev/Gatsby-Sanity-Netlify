import { Link } from "gatsby";
import * as React from "react"
import "../components/header.css"

function NewComponent() {
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">
        <b>DELIS TRANSPORT</b>
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span  />
        <span  />
        <span  />
      </label>
    </div>
    <div className="nav-links">
      <Link to = "/posnaj/" target="_blank"><b>OFERTA</b></Link>
      <Link to = "/article/" target="_blank"><b>O NAS</b></Link>
      <Link to = "/kontakt/" target="_blank"><b>KONTAKT</b></Link>
      <button className="contact"><Link to = "/kontakt/" target="_blank"><b>CONTACT US</b></Link></button>
    </div>
  </div>
);
}

 export default NewComponent;
