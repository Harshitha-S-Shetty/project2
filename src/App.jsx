import './App.css'
import Header from './Components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import PostJob from './Pages/PostJob'
import ViewJob from './Pages/ViewJob'
import EditJob from './Pages/EditJob'
import SingleView from './Pages/SingleView'
import Register from './Pages/Register'
import Login from './Pages/LogIn'



function App() {
 

  return (
    <> 
    <BrowserRouter>                
    <Header/>            
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/postjob" element={<PostJob/>}/>
      <Route path="/viewjob" element={<ViewJob/>}/>
      <Route path="/editjob/:id" element={<EditJob/>}/>
      <Route path="/singlejob/:id" element={<SingleView/>}/>
      <Route path="/registerjob" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
