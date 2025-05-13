
import './App.css'
import DifSection from './components/DifSection'
import DiversionSection from './components/DiversionSection'
import HeaderPV from './components/HeaderPV'
import Navbar from './components/Navbar'
import PreescolarSection from './components/PreescolarSection'


function App() {


  return (
    <main className="w-full montserrat min-h-screen">
      <Navbar />
      <HeaderPV/>
      <PreescolarSection />
      <DifSection/>
      <DiversionSection/>
    </main>
  )
}

export default App
