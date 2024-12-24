import Header from "./Header"
import Body from "./Body"
import { Outlet } from "react-router-dom"

function App() {
  

  return (
  <div>
     <Header/>
     <Outlet/>
  </div>  
   
  )
}

export default App
