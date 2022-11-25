import FunFact1 from '../Components/FunFact1'
import FunFact2 from '../Components/FunFact2'
import { useRef } from 'react'

const FunFacts = () => {
    const main = useRef(null);

    return(
        <main className='funfact' ref={main}>
            <FunFact1 fact="200 Billion - The Approximate Number Of Stars In The Milky Way Galaxy" />
            <FunFact2 fact="7 Trillion - The Approximate Number Of Galaxies In The Observable Universe." />
            <FunFact1 fact="6,000 Years - The Length Of Time It Would Take To Count The Milky Way's Stars At A Rate Of One A Second."/>
            <FunFact2 fact="1,600 Light Years - The Distance From Earth To The Nearest Black Hole."/>
            <FunFact1 fact="12 People Have Walked On The Moon."/>
            <FunFact2 fact="There Are More Trees On Earth Than Stars In The Milky Way."/>
            <FunFact1 fact="1665 : The Year Jupiter's Great Red Spot Was First Seen."/>
            <FunFact2 fact="One Day On Venus Is Longer Than One Year."/>
            <FunFact1 fact="There Is A Planet Made Of Diamonds"/>
        </main>
    )
}

export default FunFacts;