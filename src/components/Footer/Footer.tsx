import './Footer.css'
import { Link } from "react-router-dom";
import { BiChevronRight, BiSearch, BiSync, BiData, BiUser } from "react-icons/bi";
import { ImInfo,ImListNumbered } from "react-icons/im";
import { SiDiscord, SiTwitter, SiGithub, SiSteam } from "react-icons/si";



export function Footer() {

    return(
        <div>
            <Link to="/donate/" className='welding-torch'  >

                <span className='welding-torch-text'>
                    SteamDB has been running ad-free since 2012.<br/> 
                    <b>Find out how you can contribute.</b>
                </span>

                <div className='welding-torch-I'>
                    <BiChevronRight size={40} />
                </div>
                
            </Link>

            <div className='footer'>
                <div className='footer-all'>
                    <div className='footer-menu'>
                        <ul>
                            <li className='footer-ti'><ImInfo size={16}/> ABOUT</li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/discord">Discord</Link></li>
                            <li><Link to="/faq">FAQ & help</Link></li>
                            <li><Link to="/donate">Donate & contribute</Link></li>
                            <li><Link to="/extension">Browser extension</Link></li>
                        </ul>
                        <ul>
                            <li className='footer-ti'><BiSearch size={18}/> TOOLS</li>
                            <li><Link to="/sale">Sales</Link></li>
                            <li><Link to="/graph">Charts</Link></li>
                            <li><Link to="/calculator">Calculator</Link></li>
                            <li><Link to="/patchnotes">Patch notes</Link></li>
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/instantsearch">Instant search</Link></li>
                            <li><Link to="/history">When is next sale?</Link></li>
                        </ul>
                        <ul>
                            <li className='footer-ti'><BiSync size={18}/> TRACKING</li>
                            <li><Link to="/sale">Apps</Link></li>
                            <li><Link to="/graph">Packages</Link></li>
                            <li><Link to="/calculator">Bundles</Link></li>
                            <li><Link to="/patchnotes">History</Link></li>
                            <li><Link to="/search">Price changes</Link></li>
                            <li><Link to="/instantsearch">Free promotions</Link></li>
                            <li><Link to="/history">Technologies & built with</Link></li>
                        </ul>
                        <ul>
                            <li className='footer-ti'><BiData size={18}/> BATABASE</li>
                            <li><Link to="/sale">User tags</Link></li>
                            <li><Link to="/graph">Upcoming releases</Link></li>
                            <li><Link to="/calculator">Most followed upcoming</Link></li>
                            <li><Link to="/patchnotes">Release calendar</Link></li>
                            <li><Link to="/search">Game releases by year</Link></li>
                            <li><Link to="/instantsearch">Profile badges</Link></li>
                            <li><Link to="/history">Developers</Link></li>
                            <li><Link to="/history">Publishers</Link></li>
                        </ul>
                        <ul>
                            <li className='footer-ti'><ImListNumbered size={16 }/> RANKINGS</li>
                            <li><Link to="/">Top rated games</Link></li>
                            <li><Link to="/">Top game owners</Link></li>
                            <li><Link to="/">Top profile levels</Link></li>
                            <li><Link to="/">Top selling games</Link></li>
                            <li><Link to="/">Top selling games last week</Link></li>
                            <li><Link to="/">Most followed games</Link></li>
                            <li><Link to="/">Most wishlisted games</Link></li>
                        </ul>
                        <ul>
                            <li className='footer-ti'><BiUser size={16}/> ACCOUNT</li>
                            <li><Link to="/">Sign in via Steam</Link></li>
                            <li><Link to="/">Free packages</Link></li>
                            <li><Link to=""></Link></li>
                            <li><Link to="/">Steam Status</Link></li>
                            <li><Link to="/">Steam Web API</Link></li>
                        </ul>
                    </div>

                    <div className='footer-copyright'>
                        
                        <div>
                            <p>SteamDB is a hobby project and is not affiliated with Valve or Steam. All times on the site are UTC. 
                                <Link to="/faq/#what-steamdb-is-not">Fair use disclaimer</Link> ·
                                <Link to="/faq/#privacy">Privacy</Link>
                            </p>
                            <p>Steam and the Steam logo are trademarks of Valve Corporation. All other trademarks are property of their respective owners.</p>
                        </div>

                        <div className='footer-buttons'>
                            <Link to="/"><SiDiscord size={30}/></Link>
                            <Link to="/"><SiTwitter size={30}/></Link>
                            <Link to="/"><SiGithub size={30}/></Link>
                            <Link to="/"><SiSteam size={30}/></Link>
                                
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}