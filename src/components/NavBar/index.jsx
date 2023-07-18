import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="navBrand">
                    <a href="#">ECOMMERCE</a>
                </div>
                <ul className="navList">
                    <li><a className="navLink" href="#">Categoria 1</a></li>
                    <li><a className="navLink" href="#">Categoria 2</a></li>
                    <li><a className="navLink" href="#">Carrito</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;