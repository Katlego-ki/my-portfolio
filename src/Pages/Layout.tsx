import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const pages = ['Intro', 'About', 'Projects', 'Contact'];

  const styles = {
    _clicked: "w-1/8 _button opacity-75 bg-blue-900 font-mono px-3 py-2 rounded-md cursor-pointer text-center",
    _notClicked: "w-1/8 shadow1 opacity-75 border-solid border-blue-900 border-2 font-mono px-3 py-2 rounded-md cursor-pointer text-center",
  };
  //alternatively [true, false, false, false] but this is more dynamic
  const [buttonClicked, setButtonClicked] = useState<boolean[]>([true,...Array(3).fill(false)]);

  const handleClick = (index: number) => {
    setButtonClicked(prevState => {
      const newState = [...prevState];
      newState[index]?true:newState[index] = !newState[index];

      // Apply the logic to set the other buttons to false when one button is clicked
      for (let i = 0; i < newState.length; i++) {
        if (i !== index) {
          newState[i] = false;
        }
      }
      return newState;
    });
  };

  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="w-1 h-15 bg-blue-900 absolute top-10 left-5 rounded-md"></div>
        <div className="w-15 h-1 bg-blue-900 absolute top-5 left-10 rounded-md"></div>

        <div className="w-1 h-15 bg-blue-900 absolute top-10 right-5 rounded-md"></div>
        <div className="w-15 h-1 bg-blue-900 absolute top-5 right-10 rounded-md"></div>

        <div className="w-1 h-15 bg-blue-900 absolute bottom-10 left-5 rounded-md"></div>
        <div className="w-15 h-1 bg-blue-900 absolute bottom-5 left-10 rounded-md"></div>

        <div className="w-1 h-15 bg-blue-900 absolute bottom-10 right-5 rounded-md"></div>
        <div className="w-15 h-1 bg-blue-900 absolute bottom-5 right-10 rounded-md"></div>

        <div className="h-full w-full mx-auto">
          <div className="icons text-blue-800 mt-5 flex justify-between w-1/8 mx-auto">
            <a href="mailto:katlegobairvin@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <i className="text-2xl mx-auto mdi mdi-email"></i>
            </a>
            <a href="https://www.linkedin.com/in/katlegoAgua" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <i className="text-2xl mx-auto mdi mdi-linkedin"></i>
            </a>
            <a href="https://github.com/Katlego-ki" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <i className="text-2xl mx-auto mdi mdi-github"></i>
            </a>
          </div>

          <Outlet />

          <div className='footer w-full fixed bottom-10'>
            <svg className="w-2/3 h-1 mx-auto " viewBox="0 100 1">
              <line x1="0" x2="100%" stroke="#55B" strokeWidth="2" />
            </svg>
            <div className="buttons mt-10 w-1/2 mx-auto flex justify-between">
              {pages.map((label, index) => (
                <Link
                  key={index}
                  to={`/${label.toLowerCase()}`}
                  className={buttonClicked[index] ? styles._clicked : styles._notClicked}
                  onClick={() => handleClick(index)}
                >
                  {label}
                </Link>
              ))}
              {/*resume button*/}
              <a href="/myResume.pdf" className="shadow1 w-35 text-center bg-black opacity-40 border-solid border-blue-900 border-1 text-white font-mono px-3 py-2 rounded-md cursor-pointer" target="_blank" rel="noopener noreferrer">
                Resume &#8599;
              </a>
            </div>
            <p className="mx-auto mt-10 text-gray-600 text-sm text-center">&copy;2025, Designed and built by katlego mailula using <a className="text-gray-400" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><b>visual studio code</b></a>.</p>
            
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Layout;