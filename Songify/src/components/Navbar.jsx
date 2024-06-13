import "./styles/navbar.css"

export function Navbar() {
    return(
        <div className="navbar-container">
            <div className="icon-container">
                <img src="images/yzy.png" alt="shop" id="yzy-cart" />
                <div className="donda-logo">
                    <img id="church" src="images/church.png" />
                    <img src="images/donda-logo.png"  alt="donda-logo" id="donda-logo"/>
                </div>
                <img id="yzy-user" src="images/yzy-user.png"/>
            </div>
        </div>
    )
}