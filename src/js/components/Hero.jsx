const Hero = () => {
    return (
        <>
        <div className="px-3 py-5 ms-2 mt-4 mb-5 text-start bg-light">
            <h1 className="display-2 ms-4">A Warm Welcome!</h1>
            <div className="">
            <p className="lead ms-4 justify-content-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna augue, tincidunt nec cursus ac, pellentesque eget orci. Cras nec risus quis velit commodo placerat.</p>
            <div className="d-flex justify-content-start">
                <button type="button" className="btn btn-primary ms-4 btn-lg gap-3">Call to Action!</button>
            </div>
            </div>
        </div>
        </>
    );
};

export default Hero;