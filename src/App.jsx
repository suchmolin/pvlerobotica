import './App.css'
import CincoPilares from './components/CincoPilares'
import DifSection from './components/DifSection'
import DifSectionDos from './components/DifSectionDos'
import DiversionSection from './components/DiversionSection'
import HeaderPV from './components/HeaderPV'
import Navbar from './components/Navbar'
import PreescolarSection from './components/PreescolarSection'
import PrimariaBajaSection from './components/PrimariaBajaSection'

function App() {
  return (
    <main className="w-full montserrat min-h-screen">
      <Navbar />
      <HeaderPV />
      <PreescolarSection />
      <DifSection />
      <DiversionSection />
      <PrimariaBajaSection />
      <DifSectionDos />
      <CincoPilares />
    </main>
  )
}

export default App
