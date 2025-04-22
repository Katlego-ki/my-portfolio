import mypic from '../assets/images/mypicture.jpg';
const Intro = () => {
  return (
    <div className='h-[80vh]'>

      <div className="overflow-hidden h-1/3 aspect-square shadow-lg shadow m-auto rounded-full">
            <img src={mypic} alt="my-picture" className="w-auto h-full object-cover" />
      </div>
      <div className="rounded-lg  m-auto w-1/2 h-1/5 p-5 border-solid border-1 bg opacity-50 bg-black border-gray-600 mx-auto">
          <h1 className="font-mono opacity-85 text-center">Hi, my name is Katlego Mailula, I'm interested in:</h1>
          <ul className="mylist bg-black w-1/2 m-auto opacity-70 font-mono text-white">
            
            <li>&#9658; Software Development/Engineering</li>
            <li>&#9658; Mathematics</li>
            <li>&#9658; Good Looking Websites</li>
          </ul>
      </div>
    </div>
   
  )
}

export default Intro