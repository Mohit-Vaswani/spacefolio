import { useRef } from "react";

const Home = () => {
  const welcome = useRef(null);
  const space = useRef(null);
  const paragraph = useRef(null);

  return (
    <main>
      <section className="homeSection">
        <div>
          <div className="mainText">
            <h3 ref={welcome}>Welcome to the</h3>
            <h1 ref={space}>Space</h1>
          </div>
          <p ref={paragraph}>
            Welcome to the fascinating and entertaining world of space. Here,
            you can play a little quiz game while learning about several
            planets.
          </p>
          <a href="/#/spaceinfo">
            <button className="btn wobble-hor-bottom">Explore</button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
