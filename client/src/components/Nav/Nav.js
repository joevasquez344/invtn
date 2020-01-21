import React from 'react';
import { withRouter } from "react-router"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/Home" className="navbar-brand">INVTN</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Men's</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/MTshirts" className={window.location.pathname === "/MTshirts" ? "nav-link active" : "nav-link"}>
                                T-Shirts</Link>
                            <Link to="/MSweatshirts" className={window.location.pathname === "/MSweatshirts" ? "nav-link" : "nav-link"}>
                                Sweatshirts & Hoodies
                            </Link>
                            <Link to="/MShoes" className={window.location.pathname === "/MShoes" ? "nav-link" : "nav-link"}>
                                Shoes
                            </Link>
                            <Link to="/Accessories" className={window.location.pathname === "/Accessories" ? "nav-link" : "nav-link"}>
                                Accessories
                            </Link>
                            <div class="dropdown-divider"></div>
                            <Link to="/MClothing" className={window.location.pathname === "/MClothing" ? "nav-link" : "nav-link"}>
                                All Men's Clothing
                            </Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Women's</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/WTshirts" className={window.location.pathname === "/WTshirts" ? "nav-link active" : "nav-link"}>
                                T-Shirts</Link>
                            <Link to="/WSweatshirts" className={window.location.pathname === "/WSweatshirts" ? "nav-link" : "nav-link"}>
                                Sweatshirts & Hoodies
                            </Link>
                            <Link to="/WShoes" className={window.location.pathname === "/WShoes" ? "nav-link" : "nav-link"}>
                                Shoes
                            </Link>
                            <Link to="/Accessories" className={window.location.pathname === "/Accessories" ? "nav-link" : "nav-link"}>
                                Accessories
                            </Link>
                            <div class="dropdown-divider"></div>
                            <Link to="/WClothing" className={window.location.pathname === "/WClothing" ? "nav-link" : "nav-link"}>
                                All Women's Clothing
                            </Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Refund Policy</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default withRouter(Nav);