import { Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
import MobileMenu from "../components/MobileMenu"
import DesktopMenu from '../components/DesktopMenu';

export const pathsOrder:string[] = ["/", "Intro"];
export const pages = ['Intro', 'About', 'Projects', 'Contact'];

//Used to create "swipe left/right" animation when loading components
export function handleNavigation(currentPath:string){
  if(pathsOrder[pathsOrder.length-1] != currentPath) {
    pathsOrder.push(currentPath); 
    pathsOrder.shift();
  }
}

const Layout = () => {

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  //To add an event listener for changes in screen width.
  useEffect(()=>{
    const handleResize = ()=> {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return ()=> {
      window.removeEventListener('resize', handleResize);
    }
  }, []); 

  return (
    <div className="grid h-full w-full mx-auto">
      <div className={`items-center justify-evenly icons h-[5vh] text-blue-800 flex ${screenWidth<700?'w-2/3':'w-1/3'} mx-auto`}>
        <a href="mailto:katlegobairvin@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <i className="text-2xl mx-auto mdi mdi-email"></i>
        </a>
        <a href="https://www.linkedin.com/in/katlegoAgua" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
          <i className="text-2xl mx-auto mdi mdi-linkedin"></i>
        </a>
        <a href="https://github.com/Katlego-ki" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
          <i className="text-2xl mx-auto mdi mdi-github"></i>
        </a>
      </div>

        {/* Pages rendered here */}
        <Outlet /> 
        
      <div className='footer grid justify-content-between h-[15vh] w-screen m-auto'>
        <svg className="w-2/3 h-1 mx-auto" viewBox="0 100 1">
          <line x1="0" x2="100%" stroke="#55B" strokeWidth="2" />
        </svg>

        { screenWidth<768? <MobileMenu /> : <DesktopMenu /> }

        <code className="rounded-md px-2 flex bg-black items-center h-fit mx-auto text-gray-600 whitespace-nowrap text-center">&copy;2025, Developed by katlego mailula using <a className="text-gray-400 font-bold ml-2" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">visual studio code</a>.</code>
          
      </div>
      
    </div>
  );
};

export default Layout;