import FunFact1 from '../Components/FunFact1'
import FunFact2 from '../Components/FunFact2'
import { useRef } from 'react'

const FunFacts = () => {
    const main = useRef(null);

    return(
        <main className='funfact' ref={main}>
            <FunFact1 fact="I am a developer" />
            <FunFact2 fact="Am I a developer" />
        </main>
    )
}

export default FunFacts;