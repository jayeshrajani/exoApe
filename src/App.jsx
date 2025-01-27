
// import './App.css'

import Images from "./components/Images"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import PlayReel from "./components/PlayReel"
import Work from "./components/Work"
import Spread from "./components/Spread"

import LocomotiveScroll from 'locomotive-scroll';




function App() {
  
  

const locomotiveScroll = new LocomotiveScroll();

 

  return (
    <>
    <div className="w-full min-h-screen bg-zinc-800">
      <Navbar/>
      <Landing/>
      <Work/>
      <PlayReel/>
      <Images/>
      <Spread/>
    </div>
      </>
  )
}

export default App
