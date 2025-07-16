import Home from "./components/Home"
import Navbar from "./components/Navbar"
import WatchList from "./components/WatchList"
import { Route , Routes } from "react-router-dom"
import './App.css'
import WatchListContextWrapper from "./context/WatchListContext"


function App() {


  return (
    <>
    <Navbar>
    </Navbar>
    <WatchListContextWrapper>
    <Routes>
     <Route path="/" element={<Home></Home>}/>
      <Route path="/watchlist" element={<WatchList></WatchList>}/>
    </Routes>
    </WatchListContextWrapper>
    </>
  )
}

export default App