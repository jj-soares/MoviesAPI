import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Movies from './Pages/Movies'
import Search from './Pages/Search'
import Home from "./Pages/Home"
import GlobalStyle from './Style/globalStyle'

import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route element={<App/>} >
            <Route path='/' element={<Home/>}/>
            <Route path='/movies/:id' element={<Movies/>}/>
            <Route path='search' element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
<GlobalStyle/>
  </>
)
