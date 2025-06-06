import { Outlet, Link, useLocation } from 'react-router-dom';
import launch from "../assets/icons/open_in_new.svg"
import showMenuIcon from "../assets/icons/show_menu.png"
import { useEffect, useState } from 'react';
import MobileMenu from "../components/MobileMenu"

export const pathsOrder:string[] = ["/"];
export const pages:string[] = ['Intro', 'About', 'Projects', 'Contact'];

const Layout = () => {

  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [showMenu, toggleMenu] = useState(false); //for mobile

  useEffect(()=>{
    const handleResize = ()=> {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return ()=> {
      window.removeEventListener('resize', handleResize);
    }
  }, []); 

  // Used to create "swipe left/right" animation when loading components
  function navButtonClick(currentPath:string){
    if(pathsOrder[pathsOrder.length-1] != currentPath) pathsOrder.push(currentPath);
    if(pathsOrder.length>2) pathsOrder.shift();
    console.log(pathsOrder);
  }

  const styles = {
    _clicked: "shadow-sm shadow-gray-400 min-w-1/8 _button text-[1rem] h-12 bg-blue-900 font-mono px-3 flex justify-center items-center text-center rounded-md cursor-pointer text-center",
    _notClicked: "shadow-md shadow-gray-600 min-w-1/8 h-12 shadow1 text-[1rem] opacity-90 bg-[#0b1337] border-solid border-blue-900 border-1 font-mono flex justify-center items-center text-center px-3 rounded-md cursor-pointer text-center",
  };

  return (
      <div className="grid h-screen w-screen mx-auto">
        <div className="items-center justify-evenly icons h-[5vh] text-blue-800 flex w-1/3 mx-auto">
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
        {screenWidth>700?null: 
        <button className='absolute cursor-pointer right-[5vw] top-[5vh] w-[2rem]' onClick={()=>toggleMenu(!showMenu)} type='button'>

          { showMenu?<img src={launch} alt='show-menu-icon'></img> : <img src={showMenuIcon} alt='show-menu-icon'></img>}
          </button>
        }
        {showMenu? <MobileMenu /> : null}


          <Outlet />
        {screenWidth<700?null:
        <div className='footer grid justify-content-between h-[15vh] w-screen m-auto'>
          <svg className="w-2/3 h-1 mx-auto" viewBox="0 100 1">
            <line x1="0" x2="100%" stroke="#55B" strokeWidth="2" />
          </svg>

          {/* ====== Can be replaced with <NavBar /> ====== */}
          <div className="w-2/3 justify-evenly flex buttons m-auto">

            {/* Navigation buttons */}
            {pages.map((label, index) => (
              <Link
                key={index}
                to={`/${label.toLowerCase()}`}
                onClick={() => navButtonClick(label)}
                className={location.pathname === `/${label.toLowerCase()}` ? styles._clicked:styles._notClicked}
              >
                {label}
              </Link>
            ))}

            {/* resume button */}
            <a href="/myResume.pdf" className="shadow-md shadow-gray-700 min-w-1/8 flex justify-center items-center text-center px-3 bg-black opacity-80 border-solid border-blue-900 border-1 text-white font-mono rounded-md cursor-pointer" target="_blank" rel="noopener noreferrer">
              Resume
              <img className="flex inline w-5 ml-1" src={launch} alt="launch-icon" />
            </a>
          </div>
          <code className="rounded-md px-2 flex bg-black items-center h-fit  mx-auto text-gray-600 whitespace-nowrap text-center">&copy;2025, Designed and built by katlego mailula using <a className="text-gray-400 font-bold ml-2" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">visual studio code</a>.</code>
            
        </div>}
      </div>
  );
};

export default Layout;