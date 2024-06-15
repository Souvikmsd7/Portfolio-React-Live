import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { Timeline } from './components/Timeline'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LocomotiveScroll from 'locomotive-scroll';
import AniCursor from './components/AnimatedCursor'



function App() {


  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-white text-black font-mono overflow-hidden'>
    <AniCursor />
    <Hero />
    <About />
    {/* <Projects /> */}
    {/* <Timeline /> */}
    <Contact />
    </div>
  )
}

export default App
