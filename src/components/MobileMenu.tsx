import {Link} from 'react-router-dom'
import {pages,pathsOrder, navButtonClick} from '../Pages/Layout'
import launch from '../assets/icons/open_in_new.svg'

const MobileMenu = ()=> {
    return(
        <div className="w-full bg-black opacity-75 justify-evenly flex buttons m-auto">

        {/* Navigation buttons */}
        {pages.map((label, index) => (
            <Link
            key={index}
            to={`/${label.toLowerCase()}`}
            onClick={() => navButtonClick(label)}
            className={`font-bold ${pathsOrder[1] === label ? 'text-blue-500 underline':''}`}
            >
            {label}
            </Link>
        ))}

        {/* resume button */}
        <a href="/myResume.pdf" className="flex text-underline items-center font-bold text-[1rem] font-mono cursor-pointer" target="_blank" rel="noopener noreferrer">
            Resume
            <img className="flex inline w-[1rem] ml-1" src={launch} alt="launch-icon" />
        </a>
        
        </div>
    )
}

export default MobileMenu;