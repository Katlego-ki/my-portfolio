const Contact = () => {
    return (
        <div className="grid opacity-90 h-[80dvh] w-9/10 md:w-3/4 mx-auto bg-black rounded-lg overflow-x-hidden">
            <h1 className="border-solid border-2 border-gray-400 text-center w-full h-fit rounded-md mx-auto text-[23px] font-mono">Contact:</h1>
            
            <div className="animate-sl overflow-auto w-fit mx-auto h-fit wrapper">
                <h2 className="grid m-auto text-center">Feel free to contact me at <a className="underline font-bold" href="mailto:katlegobairvin@gmail.com">katlegobairvin@gmail.com</a></h2>
            </div>
        </div>
    )
};

export default Contact