import { Outlet, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import MobileMenu from "../components/MobileMenu"
import DesktopMenu from '../components/DesktopMenu';

export const pathsOrder:string[] = ["/", "Intro"];
export const pages:string[] = ['Intro', 'About', 'Projects', 'Contact'];

//Used to create "swipe left/right" animation when loading components and styling nav buttons
export function handleNavigation(currentPath:string){
    if(pathsOrder[pathsOrder.length-1] != currentPath && currentPath) pathsOrder.push(currentPath);
    if(pathsOrder.length>2) pathsOrder.shift();
    (pathsOrder[pathsOrder.length-1] != currentPath) && currentPath?console.log(pathsOrder):null;
  }

const Layout = () => {

  const location = useLocation(); //Used to trigger a rerender on nav button clicks
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(()=>{
    const handleResize = ()=> {
      setScreenWidth(window.innerWidth);
    }

    handleNavigation(location.pathname.slice(1));

    window.addEventListener('resize', handleResize);

    return ()=> {
      window.removeEventListener('resize', handleResize);
    }
  }, [location]); 

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

        <Outlet />
        
      <div className='footer grid justify-content-between h-[15vh] w-screen m-auto'>
        <svg className="w-2/3 h-1 mx-auto" viewBox="0 100 1">
          <line x1="0" x2="100%" stroke="#55B" strokeWidth="2" />
        </svg>

        { screenWidth<768? <MobileMenu /> : <DesktopMenu /> }

        <code className="rounded-md px-2 flex bg-black items-center h-fit  mx-auto text-gray-600 whitespace-nowrap text-center">&copy;2025, Designed and built by katlego mailula using <a className="text-gray-400 font-bold ml-2" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">visual studio code</a>.</code>
          
      </div>
      
    </div>
  );
};

export default Layout;