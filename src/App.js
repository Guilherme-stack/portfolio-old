import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Sobre from './sobre/sobre';
import Skills from './skills/skills';
import Cases from './cases/cases';
import Experiencia from './experiencia/experiencia';
import Contato from './contato/contato';
import Rodape from './rodape/rodape';
import Redes from './redes/redes';

function App() {
    return (  
        <div>
           <Home></Home>
           <Sobre></Sobre>
           <Skills></Skills>
           <Cases></Cases>
           <Experiencia></Experiencia>
           <Contato></Contato>
           <Rodape></Rodape>
           <Redes></Redes>
        </div>
    );
}

export default App;