import CardWidget from "../CardWidget";
import "./navbar.css"

function NavBar() {
    return <div className="Navbar">
        <img src="" alt="" />
        <ul>
            <li><button>Lista 1</button></li>
            <li><button>Lista 2</button></li>
            <li><button>Lista 3</button></li>   
        </ul>
        <CardWidget/>
    </div>
}

export default NavBar;