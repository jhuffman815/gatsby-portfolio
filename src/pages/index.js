import React, { Component } from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, SectionFour, FormFive, FlexBoxIndex, GenereicPara, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faHtml5, faJs, faReact, faCss3, faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby-link';

library.add(faHeart, faCode, faGem, fab, fas);

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 'form-name': form.getAttribute('name'), ...this.state })
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch(error => alert(error));


      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

      render() {
        const { name, email, message } = this.state;
          return (
            <Layout>
                <section style={{ position: 'relative' }}>
                    <Banner></Banner>
                    <TextWrapper>
                        <div>
                            <h2>HI, I'M JEWELL!</h2>
                            <h3>Welcome to my site :) </h3><br/>
                            <Link to="/works">My Work</Link>
                        </div>
                    </TextWrapper>
                    <MoreText>Scroll to Learn More</MoreText>
                </section>
                <SectionTwo>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="pic01.jpg" alt="pic01"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>About Me</GenericH2>
                            <GenereicPara lessSize lessSpacing>I hand code beautiful websites using HTML5, CSS3, JS -- fully customizable and efficient. No Worpress websites here.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex inverse>
                        <div className="text__section3">
                        <GenereicPara lessSize lessSpacing>In my free time, I attend meetups, listen to engineering podcasts, read tech blogs, and take other online courses in order to help me develop a growth mindset and become a better developer.</GenereicPara>
                          
                        </div>
                        <div className="image">
                            <img src="jewel.jpg" alt="pic02"/>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="pic03.jpg" alt="pic03"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Mobile App Development</GenericH2>
                            <GenereicPara lessSize lessSpacing>I develop mobile apps in React Native, which can be used in both iOS and Android.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                </SectionTwo>
                <SectionThree>
                    <div>
                        <GenericH2>What I Hope To Do</GenericH2>
                        <GenereicPara lessSize grey>My mission as a developer is to contribute to applications that empower and improve lives. I believe that through code we can make the world a better place by building products that empower communities. </GenereicPara>
                
                    </div>
                    <span>
                        <FontAwesomeIcon icon="gem" color="#fa6969" size="6x" style={{marginRight: '3rem'}}
                            fixedWidth border
                        />
                        <FontAwesomeIcon icon="heart" color="#008080" size="6x" style={{marginRight: '3rem'}}
                            fixedWidth border
                        />
                        <FontAwesomeIcon icon="code" color="#737373" size="6x" fixedWidth border />
                    </span>
                </SectionThree>
                <SectionFour>
                    <div className="header__section4">
                        <div className="title__section4">Technologies</div>
                        <GenereicPara lessSize grey>I strive to incorporate the latest technologies to provide clients<br />
                            with scalable and maintainable products.
                        </GenereicPara>
                    </div>
                    <div className="grid__section4">
                        <div className="item1" style={{ backgroundColor: '#4D508E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faReact} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>React</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Modern JavaScript framework which will make your web application extremely fast and,
                                    at the same time, handy for every user.</GenereicPara>
                        </div>
                        <div className="item2" style={{ backgroundColor: '#4A4D89' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon="code" color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>React Native</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Cross-platform for mobile app development based on Javascript,
                                    whose resulting code is compiled to Android and iOS.</GenereicPara>
                        </div>
                        <div className="item3" style={{ backgroundColor: '#484A83' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faJs} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>JavaScript</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>JavaScript is the language of the web.
                                    It is used for Web development, mobile development and app development and everything else.</GenereicPara>
                        </div>
                        <div className="item4" style={{ backgroundColor: '#45477E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faHtml5} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>HTML5</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>HTML, a standardized system for tagging text files
                                    to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</GenereicPara>
                        </div>
                        <div className="item5" style={{ backgroundColor: '#424479' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faCss3} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>CSS3</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>CSS is a style sheet language used for describing the
                                    presentation of a document written in a markup language like HTML.</GenereicPara>
                        </div>
                        <div className="item6" style={{ backgroundColor: '#3F4174' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faGalacticSenate} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Gatsby</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Gatsby is a free and open source framework based on React
                                    that helps developers build blazing fast websites and apps</GenereicPara>
                        </div>
                    </div>
                </SectionFour>
                <section style={{ position: 'relative' }}>
                    <Banner parallax></Banner>
                    <FormFive>
                        <form name="contact"
                              method="post"
                              action="/thanks/"
                              data-netlify="true"
                              onSubmit={this.handleSubmit}>
                            <div className="fields">
                                <GenericH2 none>Contact Me</GenericH2>
                                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={this.handleChange} />
                                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                <textarea name="message" id="message" placeholder="Message" rows="7" value={message} onChange={this.handleChange}></textarea>
                                <div className="actions">
                                    <input type="submit" value="Send Message" className="button__primary" />
                                </div>
                            </div>
                        </form>
                    </FormFive>
                </section>
            </Layout>
        )
      }
}

export default IndexPage;
