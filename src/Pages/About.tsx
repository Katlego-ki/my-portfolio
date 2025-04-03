
const About = () => {
  return (
    <div className="flex-column justify-center bg opacity-50 h-2/3 w-3/4 mx-auto bg-black mt-10 rounded-lg">
      <h1 className="border-solid border-2 border-gray-400 text-center rounded-md mx-auto text-4xl font-mono">About me:</h1>
      <p className="text-center text-lg bg-black mt-10">
        I'm a mathematician (BSC) with a passion for Software Engineering. 
        <br></br> I believe I have an eye for UI/UX design but I'm more fascinated by how 
        <br></br> everything works together to deliver successful software solutions to people and businesses.
      </p>

      <h2 className="text-center mx-auto text-2xl font-mono mt-15">My Tech Stack :</h2>
      <div className="shadow1 bg-gray-800 flex justify-between w-2/3 mt-5 p-2 rounded-md mx-auto">
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="c#" className="w-15 h-15 mx-auto"/>
          <p className="text-white">C#</p>
        </div>
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="java" className="w-15 h-15 mx-auto"/>
          <p className="text-white">Java</p>
        </div>
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript" className="w-15 h-15 mx-auto"/>
          <p className="text-white">JavaScript</p>
        </div>
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="typescript" className="w-15 h-15 mx-auto"/>
          <p className="text-white">TypeScript</p>
        </div>
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" className="w-15 h-15 mx-auto"/>
          <p className="text-white">React</p>
        </div>
        
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="tailwindcss" className="w-15 h-15 mx-auto"/>
          <p className="text-white">TailwindCSS</p>
        </div>
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="html" className="w-15 h-15 mx-auto"/>
          <p className="text-white">Material UI</p>
        </div>
        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="mysql" className="w-15 h-15 mx-auto"/>
          <p className="text-white">MySQL</p>
        </div>

        <div className="text-center mx-2">
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="git" className="w-15 h-15 mx-auto"/>
          <p className="text-white">Git</p>
        </div>
      </div>

      <div className="w-2/3 mx-auto mt-10">
        <h2 className="text-center mx-auto text-2xl font-mono mt-15">I'm Open to the following roles in Software Engineering :</h2>
        <p className="text-center text-lg bg-black mt-4">
          &#9658; Graduate Programmes.<br></br>
          &#9658; Junior Roles.<br></br>
          &#9658; Internships.</p>
      </div>
    </div>
  );
};

export default About;