import {  Outlet } from "react-router-dom"
import Navbar from "./components/Nav"




function App() {


  return (
    <div className="App">
      <Navbar/>
     

      <h2>Indication Movie</h2>

      <Outlet/>
    </div>
  )
}

export default App
