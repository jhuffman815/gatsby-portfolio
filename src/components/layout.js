import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Header, Footer, GenericH2, GenereicPara } from '../styles/IndexStyles';
import { Link } from "gatsby";

export default ({ children }) => (
    <div>
        <Header>
            <GenericH2 none>
                <Link to="/" style={{color: '#fa6969'}}>Jewell Huffman</Link>
            </GenericH2>
            <div className="menu__items">
                <Link to="/works"><GenereicPara lessSize lessSpacing grey>PROJECTS</GenereicPara></Link>
                
            </div>
        </Header>
        {children}
        <Footer>
            <div class="icons">
                <Link to="https://twitter.com/jewell_huffman"><FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth /></Link> 
                <Link to="https://www.linkedin.com/in/jewell-huffman-84a4016a/"><FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth /></Link>
                <Link to="https://github.com/jhuffman815"><FontAwesomeIcon icon={faGithub} size="2x" fixedWidth /></Link>
            </div>
            <div class="copyright">
                <span>&copy; 2019, Jewell Huffman | </span>
                <span>Made with ❤️ and ☕️</span>
            </div>
        </Footer>
    </div>
)