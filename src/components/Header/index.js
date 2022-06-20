import { Link } from "react-router-dom";
import './index.css'

function Header(){
    return(
        <header>
            <h1 className="logo">
                Nutri
            </h1>
            <div className="menu">
                <Link to="/">HOME</Link>

            </div>
        </header>
    )
}

export default Header;