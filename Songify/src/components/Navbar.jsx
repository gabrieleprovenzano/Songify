import "./styles/navbar.css"

export function Navbar() {
    return(
        <div className="navbar-container">
            <div className="icon-container">
                <img src="images\icons8-menu-24.png" id="menu-icon"/>
                <img src="images/zHub.png" id="Z-icon"/>
                <img src="images\userIcon.png" id="user-icon"/>
            </div>
        </div>
    )
}