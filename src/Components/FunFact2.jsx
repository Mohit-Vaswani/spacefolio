const FunFact2 = (props) => {
    return(
        <section className="funfact2">
            <div className="textContainer">
                <h2>{props.fact}</h2>
            </div>
            <div className="imgContainer">
                <img className="rotate" src={props.planet}/>
            </div>
        </section>
    )
}

export default FunFact2;