import './App.css'
import { Information } from './components/Information';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skill } from './components/Skill';
import { Timeline } from './components/Timeline';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className="w-full flex justify-center items-center px-4 md:px-10 lg:px-20">
        <div className="container mx-auto">
          <Information />
          <div className='border-b border-purple-300'></div>
          <div id="about"><About /></div>
          <div className='border-b border-purple-300'></div>
          <div id="skill"><Skill /></div>
          <div className='border-b border-purple-300'></div>
          <div id="project"><Project /></div>
          <div className='border-b border-purple-300'></div>
          <div id="timeline"><Timeline /></div>
          <div className='border-b border-purple-300'></div>
          <div id="contact"><Contact /></div>
          <div className='border-b border-purple-300'></div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
