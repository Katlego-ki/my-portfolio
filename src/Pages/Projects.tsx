import {pages,pathsOrder} from "./Layout";
import sourceCode from "../assets/icons/project-icons/icon1.png"
import play from "../assets/icons/project-icons/icon5.png"
import web from "../assets/icons/project-icons/web-icon.png"
import desktop from "../assets/icons/project-icons/icons8-laptop-48.png"

const Projects = () => {

    const animate:string = pages.indexOf(pathsOrder[1])>pages.indexOf(pathsOrder[0])?"animate-sl":"animate-sr";

    return ( 
        <div className="grid overflow-hidden opacity-90 h-[80dvh] w-9/10 md:w-3/4 mx-auto bg-black rounded-lg">
            <h1 className="border-solid w-full h-fit border-2 border-gray-400 text-center rounded-md mx-auto text-[23px] font-bold font-mono">My Projects:</h1>
            <div className={`${animate} overflow-auto pb-[10vh] wrapper`}>
                <p className="my-[5vh] w-9/10 md:w-3/5 text-center text-lg font-mono mx-auto">Below are some of the projects I have worked on. You can visit 
                <a className="ml-2 font-bold underline" href="https://github.com/Katlego-ki" target="_blank" rel="noopener" >my github profile</a> to access the source code of each project.</p>
    
                <h2 className="mb-[3vh] text-center font-mono font-bold">Web Applications <img className="inline bg-blue-900 rounded-full" src={web} alt="Web icon by Icons8" width={18} height={18} /> </h2> 
                <div className="grid gap-[5vh]">
                    {/* ================= my porfolio ================ */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4">
                        <div className="portfolio m-auto md:h-[10vw] lg:h-[8vw] aspect-[2.2] h-[30vw] rounded-sm border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">My Portfolio </p>  
                                <a className="mt-0.5" title="view source code" href="https://github.com/Katlego-ki/my-portfolio" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1 ml-3" src={sourceCode} alt="fork-code-icon" /></a>
                            </div>
                        </div>

                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; My Portfolio</p> 
                            <p>&#9643; Build Tools : React | Typescript | TailwindCSS </p>
                        </div>
                    </div>
                    
                    {/* =========== e-learning site template =============== */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="e-learn m-auto md:h-[10vw] lg:h-[8vw] aspect-[2.2] h-[30vw] rounded-sm  border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">website template </p>  
                                <a className="mt-0.5" title="view source code" href="https://github.com/Katlego-ki/e-Learning-Frontend-Template" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1 ml-3" src={sourceCode} alt="fork-code-icon" /></a>
                            </div>
                        </div>
                        
                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : A frontend template for a typical e-learning website. </p> 
                            <p>&#9643; Build Tools : React | Javascript | MUI </p>
                        </div>
                    </div>

                    {/* =========== Memory-match game =========== */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="mm-game m-auto md:h-[10vw] lg:h-[8vw] aspect-[2.2] h-[30vw] rounded-sm  border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">Memory-match</p> 
                                <a className="mt-0.5" title="view source code" href="https://github.com/Katlego-ki/Card-Memory-Match" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1 ml-2" src={sourceCode} alt="fork-code-icon" /></a>
                                <a className="mt-0.5" title="Play Game" href="https://card-memory-match.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1 ml-1 " src={play} alt="play-icon" /></a>

                            </div>
                        </div>
                        
                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : A fun game where you flip cards to find matching pairs before time elapses. </p> 
                            <p>&#9643; Build Tools : Javascript | HTML/CSS </p>
                        </div>
                    </div>
                </div>

                <h2 className="mt-[10vh] mb-[3vh] h-fit text-center font-mono font-bold">Desktop Applications <img className="inline" src={desktop} alt="Desktop icon by Icons8" width={20} height={20} /> </h2>
                <div className="grid gap-[5vh]">

                    {/* =========== Pig game =========== */}                   
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="pig-game m-auto md:h-[10vw] lg:h-[8vw] aspect-[2.2] h-[30vw] rounded-sm border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">Pig Game </p> 
                                <a className="mt-0.5" title="view source code" href="https://github.com/Katlego-ki/PigGame"  target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1 ml-2" src={sourceCode} alt="fork-code-icon" /></a>
                            </div>                  
                        </div>

                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : The classic 2 player dice game, first player to reach 100 wins. </p> 
                            <p>&#9643; Build Tools : C# | WPF (.Net) </p>
                        </div> 
                    </div>

                    {/* =========== Desktop Chess ============ */}
                    <div className="grid gap-[2vh] md:grid-cols-2 m-auto w-3/4" >
                        <div className="chess m-auto md:h-[10vw] lg:h-[8vw] aspect-[2.2] h-[30vw] rounded-sm border-solid border-2 border-blue-900 shadow-lg shadow-gray-800 bg-center bg-no-repeat bg-cover">
                            <div className="flex justify-center whitespace-nowrap overflow-x-auto bg-blue-900">
                                <p className="flex inline whitespace-nowrap text-lg font-mono cursor-default">Desktop Chess </p> 
                                <a className="mt-0.5" title="view source code" href="https://github.com/Katlego-ki/Desktop-Chess"  target="_blank" rel="noopener noreferrer"><img className="flex inline max-w-5 mb-1 ml-2" src={sourceCode} alt="fork-code-icon" /></a>
                            </div>                  
                        </div>

                        <div className="w-fit md:w-full m-auto">
                            <p>&#9643; Description : A standard desktop chess app.</p> 
                            <p>&#9643; Build Tools : C# | WPF (.Net) </p>
                            <p className="text-green-500 font-bold"> In progress!</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;