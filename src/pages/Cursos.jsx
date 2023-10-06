import { Link } from "react-router-dom";
import { Titulo } from "./styles";

export const Cursos = () => {
    return(
        <>
            <Titulo>Lista de cursos: </Titulo>
            <ul>
                <li>
                    <Link to="/detalhes/programacao">Programação Fullstack</Link>
                </li>
                <li>
                    <Link to="/detalhes/data">Data Science</Link>
                </li>
                <li>
                    <Link to="/detalhes/marketing">Marketing Digital</Link>
                </li>
                <li>
                    <Link to="/detalhes/design">Design Fullstack</Link>
                </li>

                <li>
                    <Link to="/detalhes/art">Art Design</Link>
                </li>
                <li>
                    <Link to="/detalhes/film">Film Design</Link>
                </li>
                <li>
                    <Link to="/detalhes/fotografia">Fotografia Design</Link>
                </li>
            </ul>
        </>
    )
}

