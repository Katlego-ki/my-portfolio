import "../App.css";
const Projects = () => {
    return ( 
        <div className="overflow-auto pb-[10vh] grid opacity-50 h-[80vh] w-3/4 mx-auto bg-black rounded-lg">
            <h1 className="border-solid w-full h-fit border-2 border-gray-400 text-center rounded-md mx-auto text-4xl font-mono">Projects:</h1>
            <p className="my-[5vh] h-fit text-center text-lg font-mono">Below are some of the projects I have worked on. You can visit <br/>
                 <a className="font-bold underline" href="https://github.com/Katlego-ki" target="_blank" rel="noopener" >my github profile</a> to view the source code of each project.</p>
    
            <h2 className="mb-[3vh] h-fit text-center font-mono">Web Applications.</h2>
            
            <div className="flex justify-evenly h-fit">
                <a className="w-1/4 h-fit"  href="https://github.com/Katlego-ki/my-portfolio" target="_blank" rel="noopener noreferrer"  >
                    <div className="portfolio w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <p className="text-center bg-blue-900 text-lg font-mono">My Portfolio</p>
                    </div>
                </a>
                <a className="w-1/4 h-fit" href="https://frontend-katlegobairvin-gmailcom-katlego-s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" >
                    <div className="e-learn w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <p className="text-center bg-blue-900 text-lg font-mono">e-learning site template</p>
                    </div>
                </a>
                <a className="w-1/4 h-fit" href="https://card-memory-match.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="mm-game w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <p className="text-center bg-blue-900 text-lg font-mono">Memory-match game</p>
                    </div>
                </a>
            </div>

            <h2 className="mt-[10vh] h-fit text-center font-mono">Desktop Applications.</h2>
            <div className="mt-[3vh] flex justify-evenly h-fit">
                <a className="w-1/4 h-fit"  href="https://github.com/Katlego-ki/PigGame" target="_blank" rel="noopener noreferrer">
                    <div className="pig-game w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <p className="text-center bg-blue-900 text-lg font-mono">Pig Game</p>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Projects;