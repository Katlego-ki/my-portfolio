import mypic from '../assets/images/my_picture.jpg';
import '../App.css';

const Intro = () => {
  return (
    <div className='grid w-fit m-auto opacity-90 h-[80vh]'>

      <div className="overflow-hidden h-[33vh] mt-[10vh] aspect-square shadow-md shadow-gray-500 m-auto rounded-full">
            <img src={mypic} alt="my-picture" className="w-auto h-full object-cover" />
      </div>
      
      <div className="animate-sr listA shadow-md shadow-gray-700 grid rounded-lg m-auto h-fit mb-[8vh] p-7 border-solid border-1 bg-black border-gray-600 mx-auto">
          <h2 className="font-mono opacity-85 text-center text-[1.5rem] h-fit">Hi, my name is <span className='font-bold text-blue-500'>Katlego Mailula</span>, I'm interested in:</h2>
          <ul className="mylist w-fit m-auto opacity-70 font-mono text-[1em] text-white">
            <li>&#9658; Software Development/Engineering</li>
            <li>&#9658; Mathematics</li>
            <li>&#9658; Good Looking Websites</li>
          </ul>
      </div>
    </div>
  )
}

export default Intro