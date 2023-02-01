import Shop from './components/Shop';
import { Navbar } from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Footer } from './components/Footer';



export const App = () => {

  return (
    <div className='App'>
    
        <Navbar/>
        <ToastContainer />
        <Shop/>
        <Footer/>
     </div>
 
   

    
  )
}
export default App
