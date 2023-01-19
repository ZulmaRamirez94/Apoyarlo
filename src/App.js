import './App.css';
import MiComponente from './Components/MiComponente';
import MiComponente1 from './Components/MiComponente1';
import MiComponente2 from './Components/MiComponente2';

function App() {
    return (
      <div className="App">
        <MiComponente nombre={"Doe, Jane"}/>
        <MiComponente1 edad={45}/>
        <MiComponente2 colorCabello={"Black"}/>
        <MiComponente nombre={"Smith, John"}/>
        <MiComponente1 edad={88}/>
        <MiComponente2 colorCabello={"Brown"}/>
        <MiComponente nombre={"Fillmore, Millarrd"}/>
        <MiComponente1 edad={50}/>
        <MiComponente2 colorCabello={"Brown"}/>
        <MiComponente nombre={"Smith, Maria"}/>
        <MiComponente1 edad={62}/>
        <MiComponente2 colorCabello={"Brown"}/>
      </div>
    );
  }

export default App;
