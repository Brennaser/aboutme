import { menuitems } from "../menuitems";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navigation">
            <nav>
                <ul className="menus">
                    {menuitems.map((menu, index) => {
                        return <li className="menu-items">
                            <Link to={menu.link} key={index}>{menu.title}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </div>
    );
}