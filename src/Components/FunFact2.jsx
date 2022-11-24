import planet from "../images/newplanet.png";

const FunFact2 = ({fact}) => {
    return(
        <section className="funfact2">
            <div className="textContainer">
                <h2>{fact}</h2>
            </div>
            <div className="imgContainer">
                <img src={planet}/>
            </div>
        </section>
    )
}

export default FunFact2;