import Logo from '../images/logo.gif';
import github from '../images/githubIcon.svg';

const Navbar = () => {
    return(
        <nav>
            <a href='/' className='logo'>
                <img src={Logo} alt="planet" />
                <p>Spacefolio</p>
            </a>
            <div className='navlist'>
                <a href='/#/funfact'>Fun Facts</a>
                <a href='/#/spacequiz'>Quiz</a>
                <a href='/#/spaceinfo'>Space Info</a>
                <a href='https://github.com/Mohit-Vaswani/spacefolio'><img src={github} alt="github logo"/></a>
            </div>
        </nav>
    )
}

export default Navbar;