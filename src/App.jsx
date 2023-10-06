import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {Cursos} from "./pages/Cursos";
import {Contato} from "./pages/Contato";
import {Page404} from "./pages/Page404"
import {Menu} from "./components/Menu";
import {Detalhes} from "./pages/Detalhes";
import { GlobalStyles } from "./pages/styles";

export const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cursos" element={<Cursos/>}/>
        <Route path="contato" element={<Contato/>}/>
        <Route path="detalhes/:id" element={<Detalhes/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}




