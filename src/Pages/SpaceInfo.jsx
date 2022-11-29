// import { useRef } from "react";
import {InfoCard} from "../Components/InfoCard";
import planet1 from "../images/Asset1.png";
import planet2 from "../images/Asset2.png";
import planet3 from "../images/Asset3.png";
import planet4 from "../images/Asset4.png";
import planet5 from "../images/Asset5.png";
import planet6 from "../images/Asset6.png";
import planet7 from "../images/Asset7.png";
import planet8 from "../images/Asset8.png";
import planet9 from "../images/Asset9.png";

const SpaceInfo = () => {
    return(
        <main>
            <h1>Hello Friends</h1>
            <section>
                <div className="cardText">
                    <h1>Space Info</h1>
                </div>
                <div className="cardContainer">
                    <InfoCard image={planet1} info="Text 1" />
                    <InfoCard image={planet2} info="Text 2" />
                    <InfoCard image={planet3} info="Text 3" />
                    <InfoCard image={planet4} info="Text 4" />
                    <InfoCard image={planet5} info="Text 5" />
                    <InfoCard image={planet6} info="Text 6" />
                    <InfoCard image={planet7} info="Text 7" />
                    <InfoCard image={planet8} info="Text 8" />
                    <InfoCard image={planet9} info="Text 9" />
                </div>
            </section>
        </main>
    )
}

export default SpaceInfo;