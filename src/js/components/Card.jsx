const cardStyle = {width: "18rem"};

const Card = () => {
    return (
        <>
            <div className="card ms-2" style={cardStyle}>
            <img className="card-img-top" src="https://static.inaturalist.org/photos/29148426/medium.jpeg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-footer bg-transparent border-success"></div>
            <a href="#" class="btn btn-primary">Find Out More</a>
            </div>
        </>
    );
};

export default Card;