const NoPage = () => {
    return (
        <div className="grid bg-black h-[80dvh] w-9/10 md:w-3/4 opacity-75 m-auto">
            
            <div className="overflow-auto p-10 w-fit m-auto h-fit wrapper">
                <h1 className="text-2xl">Page not found!</h1>
                <p>
                    <br></br>
                    The page you've requested is not available.<br></br>
                    Check the url for errors or use the buttons to navigate.
                </p>
            </div>
        </div>
    )
};

export default NoPage;