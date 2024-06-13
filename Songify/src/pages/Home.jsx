import { Navbar } from "../components/Navbar"
import "./styles/home.css"

export function Home() {
    return(
        <div className="home-container">
            <Navbar />
            <div className="first-page-container">
                <div className="last-news">
                   <img src="images/donda-collage.png"/>
                </div>
            </div>
            <div className="second-container">
            </div>
        </div>
    )
}