const Contact = () => {
    return (
        <div className="grid opacity-90 h-[80dvh] w-9/10 md:w-3/4 mx-auto bg-black rounded-lg overflow-x-hidden">
            <h1 className="border-solid border-2 border-gray-400 text-center w-full h-fit rounded-md mx-auto text-[23px] font-bold font-mono">Contact:</h1>
            
            <div className="animate-sl overflow-auto w-fit mx-auto h-fit wrapper text-center">
                <h1 className="grid m-auto text-[19px] font-bold">Feel free to contact me at :</h1> 

                {/* Email */}
                <a className="text-lg block" href="mailto:katlegobairvin@gmail.com">
                    <img className="w-8 inline mx-3" src="https://img.icons8.com/color/48/000000/email.png" alt="email-icon"></img>katlegobairvin@gmail.com
                </a>

                {/* WhatsApp */}
                <a className="text-lg block" href="https://wa.me/27764849721" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 inline mx-3" src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp-icon"></img>Chat on WhatsApp
                </a>
                
                {/* Phone */}
                <a className="text-lg block" href="tel:+27764849721">
                    <img className="w-8 inline mx-3" src="https://img.icons8.com/color/48/000000/phone.png" alt="phone-icon"></img>+27 76 484 9721
                </a>

            </div>
        </div>
    )
};

export default Contact