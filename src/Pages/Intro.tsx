import mypic from '../assets/images/mypicture.jpg';
import '../App.css';

//const buttonState:boolean[] = [true, false, false, false] 
const Intro = () => {
  return (
    <div className='grid h-[80vh]'>

      <div className="overflow-hidden h-[33vh] mt-[10vh] aspect-square shadow-lg shadow m-auto rounded-full">
            <img src={mypic} alt="my-picture" className="w-auto h-full object-cover" />
      </div>
      <div className="grid rounded-lg m-auto h-fit mb-[8vh] p-7 border-solid border-1 opacity-50 bg-black border-gray-600 mx-auto">
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