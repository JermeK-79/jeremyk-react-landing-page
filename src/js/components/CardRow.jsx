import Card from "./Card";

const CardRow = () => {
    return(
       <>
       
       <div className="container">
            <div className="row justify-content-evenly">
                <div className="col-10 d-flex flex-column flex-md-row">
                <Card />
                <Card />
                <Card />
                <Card />
                </div> 
            </div> 
        </div>
       </>
    );
};

export default CardRow;

