import mypic from '../assets/images/mypicture.jpg';
const Intro = () => {
  return (
    <div className='grid h-[80vh]'>

      <div className="overflow-hidden h-[30vh] aspect-square shadow-lg shadow m-auto rounded-full">
            <img src={mypic} alt="my-picture" className="w-auto h-full object-cover" />
      </div>
      <div className="grid rounded-lg m-auto w-1/2 h-[25vh] p-5 border-solid border-1 opacity-50 bg-black border-gray-600 mx-auto">
          <h1 className="font-mono opacity-85 text-center text-[1.5rem] h-fit">Hi, my name is <code className=''>Katlego Mailula</code>, I'm interested in:</h1>
          <ul className="mylist w-1/2 m-auto opacity-70 font-mono text-white">
            <li>&#9658; Software Development/Engineering</li>
            <li>&#9658; Mathematics</li>
            <li>&#9658; Good Looking Websites</li>
          </ul>
      </div>
    </div>
   
  )
}

export default Intro