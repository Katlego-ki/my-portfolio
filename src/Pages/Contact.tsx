const Contact = () => {
    return (
        <div className="grid opacity-90 h-[80dvh] w-9/10 md:w-3/4 mx-auto bg-black rounded-lg overflow-x-hidden">
            <h1 className="border-solid border-2 border-gray-400 text-center w-full h-fit rounded-md mx-auto text-[23px] font-mono">Contact:</h1>
            
            <div className="animate-sl overflow-auto w-fit mx-auto wrapper">
                <a className="grid shadow-sm shadow-gray-600 bg-gray-900 p-5 rounded-2xl m-auto text-xl text-center" href="mailto:katlegobairvin@gmail.com">Feel free to contact me at <span className="underline font-bold">katlegobairvin@gmail.com</span></a>
            </div>
        </div>
    )
};

export default Contact