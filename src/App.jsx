import './App.css'
import CincoPilares from './components/CincoPilares'
import DifSection from './components/DifSection'
import DifSectionCuatro from './components/DifSectionCuatro'
import DifSectionDos from './components/DifSectionDos'
import DifSectionTres from './components/DifSectionTres'
import DiversionSection from './components/DiversionSection'
import DosSemanas from './components/DosSemanas'
import HeaderPV from './components/HeaderPV'
import InscribeloAhora from './components/InscribeloAhora'
import Navbar from './components/Navbar'
import PreescolarSection from './components/PreescolarSection'
import PrimariaAltaSection from './components/PrimariaAltaSection'
import PrimariaBajaSection from './components/PrimariaBajaSection'
import SecundariaSection from './components/SecundariaSection'
import SistemaLEGO from './components/SistemaLEGO'
import Testimonios from './components/Testimonios'
import WhatsappButton from './components/WhatsappButton'

function App() {
  return (
    <main className="w-full montserrat min-h-screen">
      <Navbar />
      <HeaderPV />
      <DiversionSection />
      <DosSemanas />
      <CincoPilares />
      <SistemaLEGO />
      <PreescolarSection />
      <DifSection />
      <PrimariaBajaSection />
      <DifSectionDos />
      <PrimariaAltaSection />
      <DifSectionTres />
      <SecundariaSection />
      <DifSectionCuatro />
      <Testimonios />
      <InscribeloAhora />
      <WhatsappButton />
    </main>
  )
}

export default App
