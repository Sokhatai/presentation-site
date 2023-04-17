import "../style/header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div>
            <h1>
                Développeuse Web
            </h1>
            <h2>
                Corentin AUGUIN PHOTHISENE
            </h2>

            <div className="headerNav">
                <Link to="/accueil">Accueil</Link>
            </div>

            
            <div className="headerNav">
                <Link to="/contact">Contact</Link>
            </div>

            
            <div className="headerNav">
                <Link to="/projets">Projets</Link>
            </div>

            
            <div className="headerNav">
                <Link to="/streaming">Streaming</Link>
            </div>
        </div>
    )
}