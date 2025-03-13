import mypic from '../assets/images/mypicture.jpg';
const Intro = () => {
  return (
    <>
      <div className="overflow-hidden h-1/3 aspect-square mx-auto mt-30 rounded-full">
            <img src={mypic} alt="my-picture" className="w-auto h-full object-cover" />
      </div>
          <h1 className="font-mono opacity-85 text-2xl text-center mt-10">Hi, my name is Katlego Mailula, I'm interested in:</h1>
          <ul className="mt-4 mb-20 w-1/5 mx-auto opacity-70 font-mono text-white">
            <li>&#9658; Software Development/Engineering</li>
            <li>&#9658; Mathematics</li>
            <li>&#9658; Good Looking Websites</li>
          </ul>
    </>
  )
}

export default Intro