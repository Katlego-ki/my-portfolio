import "../App.css";
const Projects = () => {
    return (
        <div className="flex-column justify-center bg opacity-50 h-2/3 w-3/4 mx-auto bg-black mt-10 rounded-lg">
            <h1 className="border-solid border-2 border-gray-400 text-center rounded-md mx-auto text-4xl font-mono">Projects:</h1>
            <p className="text-center text-lg mt-10 font-mono">Below are some of the projects I have worked on. You can visit <br/>
                 <a className="font-bold text-underline" href="https://github.com/Katlego-ki" target="_blank" rel="noopener" >my github profile </a>to view the source code of each project.</p>
    
            <h1 className="text-center mt-10 font-mono">Web Applications.</h1>
            
            <div className="flex justify-center h-1/3">
                <a className="w-1/4 h-full m-5 "  href="https://github.com/Katlego-ki/my-portfolio" target="_blank" rel="noopener noreferrer"  >
                    <div className="portfolio shadow1 w-full h-full rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                    <h2 className="text-center bg-blue-900 text-lg font-mono">My Portfolio</h2>
                    </div>
                </a>
                <a className="w-1/4 h-full m-5 " href="https://frontend-katlegobairvin-gmailcom-katlego-s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" >
                    <div className="e-learn shadow1 w-full h-full rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <h2 className="text-center bg-blue-900 text-lg font-mono">e-learning site template</h2>
                    </div>
                </a>
                <a className="w-1/4 h-full m-5 " href="https://card-memory-match.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="mm-game shadow1 w-full h-full rounded-lg border-solid border-2 border-blue-900 shadow-md shadow-gray-500 bg-center bg-no-repeat bg-cover">
                        <h2 className="text-center bg-blue-900 text-lg font-mono">Memory-match game</h2>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Projects;