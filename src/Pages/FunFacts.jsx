import FunFact1 from "../Components/FunFact1";
import FunFact2 from "../Components/FunFact2";
import { useRef } from "react";
import planet1 from "../images/Asset1.png";
import planet2 from "../images/Asset2.png";
import planet3 from "../images/Asset3.png";
import planet4 from "../images/Asset4.png";
import planet5 from "../images/Asset5.png";
import planet6 from "../images/Asset6.png";
import planet7 from "../images/Asset7.png";
import planet8 from "../images/Asset8.png";
import planet9 from "../images/Asset9.png";

const FunFacts = () => {
  const main = useRef(null);

  return (
    <main className="funfact" ref={main}>
      <FunFact1
        fact="200 Billion - The Approximate Number Of Stars In The Milky Way Galaxy"
        planet={planet1}
      />
      <FunFact2
        fact="7 Trillion - The Approximate Number Of Galaxies In The Observable Universe."
        planet={planet2}
      />
      <FunFact1
        fact="6,000 Years - The Length Of Time It Would Take To Count The Milky Way's Stars At A Rate Of One A Second."
        planet={planet6}
      />
      <FunFact2
        fact="1,600 Light Years - The Distance From Earth To The Nearest Black Hole."
        planet={planet8}
      />
      <FunFact1 fact="12 People Have Walked On The Moon." planet={planet7} />
      <FunFact2
        fact="There Are More Trees On Earth Than Stars In The Milky Way."
        planet={planet5}
      />
      <FunFact1
        fact="1665 : The Year Jupiter's Great Red Spot Was First Seen."
        planet={planet3}
      />
      <FunFact2
        fact="One Day On Venus Is Longer Than One Year."
        planet={planet9}
      />
      <FunFact1 fact="There Is A Planet Made Of Diamonds" planet={planet4} />
    </main>
  );
};

export default FunFacts;