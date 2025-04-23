
const About = () => {
  return (
    <div className="grid bg opacity-50 h-[80vh] w-3/4 mx-auto bg-black rounded-lg">
      <h1 className="border-solid border-2 border-gray-400 w-full h-fit text-center rounded-md mx-auto text-4xl font-mono">About me:</h1>
      <p className="text-center text-lg bg-black">
        I'm a mathematician (BSC) with a passion for Software Engineering. 
        <br></br> I believe I have an eye for UI/UX design but I'm more fascinated by how 
        <br></br> everything works together to deliver successful software solutions to people and businesses.
      </p>

      <h2 className="text-center mx-auto text-2xl font-mono">My Tech Stack :</h2>
      <div className="shadow1 bg-gray-800 flex justify-between h-fit w-2/3 p-2 rounded-md mx-auto">
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="c#" className="w-full mx-auto"/>
          <p className="text-white">C#</p>
        </div>
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="java" className="w-full mx-auto"/>
          <p className="text-white">Java</p>
        </div>
        <div className="text-center bg-green-900 w-1/15">
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript" className="w-full mx-auto"/>
          <p className="text-white text-[1.0rem]">JS</p>
        </div>
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="typescript" className="w-full mx-auto"/>
          <p className="text-white">TS</p>
        </div>
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" className="w-full mx-auto"/>
          <p className="text-white">React</p>
        </div>
        
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="tailwindcss" className="w-full mx-auto"/>
          <p className="text-white">TWCSS</p>
        </div>
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="html" className="w-full mx-auto"/>
          <p className="text-white">MUI</p>
        </div>
        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="mysql" className="w-full mx-auto"/>
          <p className="text-white">MySQL</p>
        </div>

        <div className="text-center w-1/15">
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="git" className="w-full mx-auto"/>
          <p className="text-white">Git</p>
        </div>
      </div>

      <div className="w-2/3 mx-auto">
        <h2 className="text-center mx-auto text-2xl font-mono">I'm Open to the following roles in Software Engineering :</h2>
        <p className="text-center text-lg bg-black">
          &#9658; Graduate Programmes.<br></br>
          &#9658; Junior Roles.<br></br>
          &#9658; Internships.</p>
      </div>
    </div>
  );
};

export default About;