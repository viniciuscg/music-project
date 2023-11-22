import Details from './Pages/Details'
import Home from './Pages/Home'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Details" element={<Details/>}/>
    </Routes>
  )
}

export default App
