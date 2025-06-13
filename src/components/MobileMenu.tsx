import {Link, useLocation} from 'react-router-dom'
import {pages, handleNavigation} from '../Pages/Layout'
import resume from '../assets/icons/download.png'
import projects from '../assets/icons/projects.png'
import about from '../assets/icons/about.png'
import intro from '../assets/icons/intro.png'
import contact from '../assets/icons/contact.png'


const myIcons = [intro, about, projects, contact];

const MobileMenu = () => {
    const location = useLocation();
    return(
        <div className="w-9/10 rounded-md bg-black opacity-75 p-1 justify-evenly flex buttons m-auto">

        {/* Navigation buttons */}
        {pages.map((label, index) => (
            <Link
            key={index}
            to={label}
            onClick={() => handleNavigation(label)}
            >
            <img className="w-[2rem] mx-auto" src={myIcons[index]} alt="page-icon" />
            <p className={`font-bold ${location.pathname.slice(1) === label? 'text-blue-500 underline':''} ${location.pathname==="/"&& label==="Intro"?'text-blue-500 underline':''}`}>{label}</p>
            </Link>
        ))}

        {/* resume button */}
        <a href="/myResume.pdf" target="_blank" rel="noopener noreferrer">
            
            <img className="w-[2rem] mx-auto" src={resume} alt="download-icon" />
            <p className='items-center font-bold text-[1rem] font-mono'>Resume</p>
        </a>
        
        </div>
    )
}

export default MobileMenu;