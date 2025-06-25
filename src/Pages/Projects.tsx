import "../App.css";
import launch from "../assets/icons/open_in_new.svg";
import {pages,pathsOrder} from "./Layout";

const Projects = () => {

    const animate:string = pages.indexOf(pathsOrder[1])>pages.indexOf(pathsOrder[0])?"animate-sl":"animate-sr";

    return ( 
        <div className="grid overflow-hidden opacity-90 h-[80dvh] w-9/10 md:w-3/4 mx-auto bg-black rounded-lg">
            <h1 className="border-solid w-full h-fit border-2 border-gray-400 text-center rounded-md mx-auto text-[23px] font-mono">My Projects:</h1>
            <div className={`${animate} overflow-auto pb-[10vh] wrapper`}>
                <p className="my-[5vh] w-9/10 md:w-3/5 text-center text-lg font-mono mx-auto">Below are some of the projects I have worked on. You can visit 
                <a className="ml-2 font-bold underline" href="https://github.com/Katlego-ki" target="_blank" rel="noopener" >my github profile</a> to access the source code of each project.</p>
    
                <h2 className="mb-[3vh] text-center font-mono">Web Applications.</h2> 
                <div className="grid gap-[5vh]">
                    {/* ================= my porfolio ================ */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4">
                        <div className="portfolio m-auto md:h-[12vh] lg:h-[16vh] aspect-[2.2] h-[30vw] rounded-sm border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">My Portfolio </p>  
                                <a className="mt-0.5" title="view on github" href="https://github.com/Katlego-ki/my-portfolio" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1" src={launch} alt="launch-icon" /></a>
                            </div>
                        </div>

                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; My Portfolio</p> 
                            <p> &#9643; Build Tools : React | Typescript | TailwindCSS </p>
                        </div>
                    </div>
                    
                    {/* =========== e-learning site template =============== */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="e-learn m-auto md:h-[12vh] lg:h-[16vh] aspect-[2.2] h-[30vw] rounded-sm  border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">website template </p>  
                                <a className="mt-0.5" title="Launch App" href="https://frontend-katlegobairvin-gmailcom-katlego-s-projects.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1" src={launch} alt="launch-icon" /></a>
                            </div>
                        </div>
                        
                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : A frontend template for a typical e-learning website. </p> 
                            <p> &#9643; Build Tools : React | Javascript | MUI </p>
                        </div>
                    </div>

                    {/* =========== Memory-match game =========== */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="mm-game m-auto md:h-[12vh] lg:h-[16vh] aspect-[2.2] h-[30vw] rounded-sm  border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">Memory-match</p> 
                                <a className="mt-0.5" title="Launch App" href="https://card-memory-match.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1" src={launch} alt="launch-icon" /></a>
                            </div>
                        </div>
                        
                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : A fun game where you flip cards to find matching pairs before time elapses. </p> 
                            <p> &#9643; Build Tools : Javascript | HTML/CSS </p>
                        </div>
                    </div>
                </div>

                <h2 className="mt-[10vh] mb-[3vh] h-fit text-center font-mono">Desktop Applications.</h2>
                <div className="grid gap-[5vh]">
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="pig-game m-auto md:h-[12vh] lg:h-[16vh] aspect-[2.2] h-[30vw] rounded-sm border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">Pig Game </p> 
                                <a className="mt-0.5" title="Launch App" href="https://github.com/Katlego-ki/PigGame"  target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1" src={launch} alt="launch-icon" /></a>
                            </div>                  
                        </div>

                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : The classic 2 player dice game, first player to reach 100 wins. </p> 
                            <p className=""> &#9643; Build Tools : C# | WPF (.Net) </p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;