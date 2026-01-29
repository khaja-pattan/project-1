import Layout from './KhajaPages/Layout'
import Footer from './Footer/Footer'
import { Routes , Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>

      <Footer/>
      
 

    </>
  )
}

export default App