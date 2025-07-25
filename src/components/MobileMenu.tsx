import {Link, useLocation} from 'react-router-dom'
import {pages, handleNavigation} from '../Pages/Layout'
import resume from '../assets/icons/navigation-icons/download.png'
import projects from '../assets/icons/navigation-icons/Projects.png'
import about from '../assets/icons/navigation-icons/About.png'
import intro from '../assets/icons/navigation-icons/Intro.png'
import contact from '../assets/icons/navigation-icons/Contact.png'

const myIcons = [intro, about, projects, contact];

const MobileMenu = () => {
    const location = useLocation();
    return(
        <div className="w-9/10 rounded-md bg-black opacity-75 p-1 justify-evenly flex buttons m-auto">

            {/*======== Navigation buttons ========*/}
            {pages.map((label, index) => (
                <Link
                    key={index}
                    to={label}
                    onClick={() => handleNavigation(label)}
                    className={`${(location.pathname == '/'+label) ||(location.pathname =="/"&& label==="Intro")?'text-blue-500 font-bold':'grayscale'}`}
                >
                    <img className={`w-[2rem] mx-auto`} src={myIcons[index]} alt="page-icon" />
                    <p>{label}</p>
                </Link>
            ))}

            {/*======== resume button ========*/}
            <a href="/myResume.pdf" target="_blank" rel="noopener noreferrer">
                <img className="w-[2rem] mx-auto grayscale" src={resume} alt="download-icon" />
                <p className='items-center text-[1rem] font-mono'>Resume</p>
            </a>
        </div>
    )
}

export default MobileMenu;