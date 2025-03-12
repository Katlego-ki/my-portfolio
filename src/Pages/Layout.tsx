import mypic from '../assets/images/mypicture.jpg';

const Layout = () => {

  //you'll play with decos at the end
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
      <div className="w-15 h-1 bg-blue-900 absolute bottom-5 right-10 rounded-md "></div>
      
      <div className="h-full w-full mx-auto">
        <div className="overflow-hidden h-1/3 aspect-square mx-auto mt-30 rounded-full">
          <img src={mypic} alt="my-picture" className="w-auto h-full object-cover" />
        </div>
        <h1 className="font-mono text-2xl text-center">Hi, my name is Katlego Mailula, I'm interested in:</h1>
        <ul className="mt-4 w-1/5 mx-auto font-mono text-white">
          <li>&#9658; Software Development/Engineering</li>
          <li>&#9658; Mathematics</li>
          <li>&#9658; Good Looking Websites</li>
        </ul>

        <svg className="w-2/3 h-1 mx-auto mt-20" viewBox="0 100 1">
          <line x1="0" x2="100%" stroke="#55B" strokeWidth="2" />
        </svg>

        <div className="w-1/2 mx-auto mt-10 flex justify-between">
          <button className="w-30 bg-blue-900 text-white font-mono px-3 py-2 rounded-md">About</button>
          <button className="w-30 bg-blue-900 text-white font-mono px-3 py-2 rounded-md">Projects</button>
          <button className="w-30 bg-blue-900 text-white font-mono px-3 py-2 rounded-md">Contact</button>
          <button className="w-30 bg-blue-900 text-white font-mono px-3 py-2 rounded-md">Tech Stack</button>
          <button className="w-30 bg-blue-900 text-white font-mono px-3 py-2 rounded-md">Resume</button>
        </div>

      </div>
      
      
    </div>
    </>
  );
};

export default Layout;