import './assets/style.css'
import Navbar from './Component/Navbar'
import Body from './Main/Body'
import AboutUs from './Main/AboutUs'
import Servis from './Main/Servis'
import Ourmenu from './Main/Ourmenu'

export default function App(){
  return(
    <div className='bg-dark'> 
      <Navbar/>
      <Body/>
      <AboutUs/>
      <Servis/>
      <Ourmenu/>
      <Contact/>
      
      <div className='p-2'></div>
    </div>
  )
}
