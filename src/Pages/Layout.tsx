import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {

  const location = useLocation();

  const pages = ['Intro', 'About', 'Projects', 'Contact'];

  const styles = {
    _clicked: "shadow-sm shadow-gray-300 min-w-1/8 _button text-[1rem] h-12 opacity-75 bg-blue-900 font-mono px-3 flex justify-center items-center text-center rounded-md cursor-pointer text-center",
    _notClicked: "shadow-md shadow-gray-500 min-w-1/8 h-12 shadow1 text-[1rem] opacity-75 border-solid border-blue-900 border-2 font-mono flex justify-center items-center text-center px-3 rounded-md cursor-pointer text-center",
  };

  return (
      <div className="grid h-screen w-screen mx-auto">
        <div className="items-center justify-evenly icons h-[5vh] text-blue-800 flex w-1/3 mx-auto">
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
   
        <div className='footer grid justify-content-between h-[15vh] w-screen m-auto'>
          <svg className="w-2/3 h-1 mx-auto" viewBox="0 100 1">
            <line x1="0" x2="100%" stroke="#55B" strokeWidth="2" />
          </svg>
          <div className="w-2/3 justify-evenly flex buttons m-auto">

            {/* Navigation buttons */}
            {pages.map((label, index) => (
              <Link
                key={index}
                to={`/${label.toLowerCase()}`}
                className={location.pathname === `/${label.toLowerCase()}` ? styles._clicked:styles._notClicked}
              >
                {label}
              </Link>
            ))}

            {/* resume button */}
            <a href="/myResume.pdf" className="shadow-md shadow-gray-500 min-w-1/8 flex justify-center items-center text-center px-3 bg-black opacity-40 border-solid border-blue-900 border-1 text-white font-mono rounded-md cursor-pointer" target="_blank" rel="noopener noreferrer">
              Resume&#8599;
            </a>
          </div>
          <code className="flex items-center mx-auto text-gray-600 text-[1rem] text-center">&copy;2025, Designed and built by katlego mailula using <a className="text-gray-400 font-bold ml-2" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">visual studio code</a>.</code>
            
        </div>
      </div>
  );
};

export default Layout;