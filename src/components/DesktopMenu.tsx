import {Link, useLocation} from 'react-router-dom'
import {pages, handleNavigation} from '../Pages/Layout'
import launch from '../assets/icons/open_in_new.svg'

const styles = {
    _clicked: "shadow-sm shadow-gray-400 min-w-1/8 _button text-[1rem] h-12 bg-blue-900 font-mono px-3 flex justify-center items-center text-center rounded-md cursor-pointer text-center",
    _notClicked: "shadow-md shadow-gray-600 min-w-1/8 h-12 shadow1 text-[1rem] opacity-90 bg-[#0b1337] border-solid border-blue-900 border-1 font-mono flex justify-center items-center text-center px-3 rounded-md cursor-pointer text-center",
};

const DesktopMenu = ()=> {
  const location = useLocation();

    return(
          <div className="w-2/3 justify-evenly flex buttons m-auto">

          {/* Navigation buttons */}
          {pages.map((label, index) => (
            <Link
              key={index}
              to={`${label}`}
              onClick={() => handleNavigation(label)}
              className={`${location.pathname.slice(1) === label ? styles._clicked:styles._notClicked} ${location.pathname==="/" && label==="Intro"?styles._clicked:""}`}
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
    )
}

export default DesktopMenu;