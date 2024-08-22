import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Details from "./pages/Details"

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/moviedetails/:id" element={<Details />}></Route>
        <Route path="*" element={ <Navigate to="/" /> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
