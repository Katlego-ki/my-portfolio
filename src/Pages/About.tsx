import '../App.css';

const About = () => {
  return (
    <div className="grid bg opacity-90 h-[80vh] w-3/4 mx-auto bg-black rounded-lg">
      <h1 className="border-solid border-2 border-gray-400 w-full h-fit text-center rounded-md mx-auto text-4xl font-mono">About me:</h1>
      
      <div className="animate-onload overflow-auto pb-[10vh]">
        <p className="p-5 h-fit m-auto text-center w-2/3 text-lg bg-black">
          I'm a mathematician (BSC) with a passion for Software Engineering. 
          I believe I have an eye for UI/UX design but I'm more fascinated by how 
          everything works together to deliver successful software solutions to people and businesses.
        </p>

        <h2 className="my-[3vh] text-center h-fit mx-auto text-2xl font-mono">My Tech Stack :</h2>
        <div className="mb-[7vh] shadow-md shadow-gray-900 bg-gray-800 flex justify-between h-fit w-2/3 p-2 rounded-md mx-auto">
          <div className="text-center w-1/15">
            <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="c#" className="w-full mx-auto"/>
            <p className="text-white">C#</p>
          </div>
          <div className="text-center w-1/15">
            <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="jv" className="w-full mx-auto"/>
            <p className="text-white">Java</p>
          </div>
          <div className="text-center w-1/15">
            <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="js" className="w-full mx-auto"/>
            <p className="text-white text-[1.0rem]">JS</p>
          </div>
          <div className="text-center w-1/15">
            <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="ts" className="w-full mx-auto"/>
            <p className="text-white">TS</p>
          </div>
          <div className="text-center w-1/15">
            <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="rct" className="w-full mx-auto"/>
            <p className="text-white">React</p>
          </div>
          
          <div className="text-center w-1/15">
            <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="tw" className="w-full mx-auto"/>
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
          <h2 className="mb-[1vh] text-center mx-auto text-2xl font-mono">I'm Open to the following roles in Software Engineering :</h2>
          <p className="text-center text-lg bg-black">
            &#9658; Graduate Programmes.<br></br>
            &#9658; Junior Roles.<br></br>
            &#9658; Internships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;