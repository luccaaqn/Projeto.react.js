import { Link } from "react-router-dom";
import { Sub } from "../pages/styles";

export const Menu =() => {
    return(
         <>
        <Sub>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/cursos">Cursos</Link>
                </li>

                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </Sub>

        </>
    )
}
    
