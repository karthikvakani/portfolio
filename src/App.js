import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Containers/Home'
import About from './Containers/About'
import Contact from './Containers/Contact'
import Projects from './Containers/Projects'
import Resume from './Containers/Resume'
import NavBar from './Components/NavBar';
import Skills from './Containers/Skills';




function App() {
  return (
    <div className="App">

      <NavBar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/contact' element={<Contact/>}/>
        <Route index path='/skills' element={<Skills/>}/>
        <Route index path='/projects' element={<Projects/>}/>
        <Route index path='/resume' element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
