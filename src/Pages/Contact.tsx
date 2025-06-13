const Contact = () => {
    return (
        <div className="flex-column justify-center bg opacity-90 h-[80vh] w-9/10 md:w-3/4 mx-auto bg-black rounded-lg wrapper">
            <h1 className="border-solid border-2 border-gray-400 text-center h-fit rounded-md mx-auto text-[23px] font-mono">Contact:</h1>
            
            <div className="animate-sl w-9/10 md:w-3/4 overflow-auto pb-[10vh] wrapper">
                <h2 className="m-auto mt-[35vh] text-xl text-center">Feel free to contact me at <a className="underline font-bold" href="mailto:katlegobairvin@gmail.com">katlegobairvin@gmail.com</a></h2>
            </div>
        </div>
    )
};

export default Contact