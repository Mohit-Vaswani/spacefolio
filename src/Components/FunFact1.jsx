const FunFact1 = (props) => {
  return (
    <section className="funfact1">
      <div className="imgContainer">
        <img className="rotate" src={props.planet} />
      </div>
      <div className="textContainer">
        <h2>{props.fact}</h2>
      </div>
    </section>
  );
};

export default FunFact1;
