import planet from "../images/newplanet.png";

const FunFact1 = ({fact}) => {
    return(
        <section className="funfact1">
            <div className="imgContainer">
                <img src={planet}/>
            </div>
            <div className="textContainer">
                <h2>{fact}</h2>
            </div>
        </section>
    )
}

export default FunFact1;