import "../App.css";
const Projects = () => {
    return (
        <div className="grid opacity-50 h-[80vh] w-3/4 mx-auto bg-black rounded-lg">
            <h1 className="border-solid w-full h-fit border-2 border-gray-400 text-center rounded-md mx-auto text-4xl font-mono">Projects:</h1>
            <p className="h-fit text-center text-lg font-mono">Below are some of the projects I have worked on. You can visit <br/>
                 <a className="font-bold underline" href="https://github.com/Katlego-ki" target="_blank" rel="noopener" >my github profile</a> to view the source code of each project.</p>
    
            <h1 className="h-fit text-center font-mono">Web Applications.</h1>
            
            <div className="flex justify-evenly h-[50vh]">
                <a className="w-1/4 h-full"  href="https://github.com/Katlego-ki/my-portfolio" target="_blank" rel="noopener noreferrer"  >
                    <div className="portfolio shadow1 w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                    <h2 className="text-center bg-blue-900 text-lg font-mono">My Portfolio</h2>
                    </div>
                </a>
                <a className="w-1/4 h-full" href="https://frontend-katlegobairvin-gmailcom-katlego-s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" >
                    <div className="project e-learn shadow1 w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <h2 className="text-center bg-blue-900 text-lg font-mono">e-learning site template</h2>
                    </div>
                </a>
                <a className="w-1/4 h-full" href="https://card-memory-match.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="project mm-game shadow1 w-full h-[25vh] rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <h2 className="text-center bg-blue-900 text-lg font-mono">Memory-match game</h2>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Projects;