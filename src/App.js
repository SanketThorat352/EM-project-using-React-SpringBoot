
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddEmployee from './components/AddEmployee';
import Employeelist from './components/Employeelist';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Employeelist/>}/>
    <Route path="/" element={<Employeelist/>}/>
   <Route path="/AddEmployee" element={<AddEmployee />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
