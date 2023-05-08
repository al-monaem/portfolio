import { useRef } from 'react';
import './App.css';
import About from './components/About/About';
import Bio from './components/Bio/Bio';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {

  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const onClick = (e) => {
    console.log(e.target.id)
    if (e.target.id === "home")
      homeRef.current.scrollIntoView({ behavior: 'smooth' })
    if (e.target.id === "projects")
      projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='overflow-x-clip'>
      <Header onClick={onClick} />
      <Bio refs={homeRef} onClick={onClick} />
      <About />
      <Projects refs={projectsRef} />
    </div>
  );
}

export default App;
