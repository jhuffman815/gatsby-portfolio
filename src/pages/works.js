import React from "react";
import { Works, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout";
import Project from "../components/Project";

const projects = [
    {image: "newtube.png", title: "Newtube", link: " https://jhuffman-youtube-clone.netlify.com/"},
    {image: "evernote.png", title: "Evernote-Clone", link: "https://jhuffman-evernote-clone.netlify.com"},
    {image: "tictactoe.png", title: "Tic-Tac-Toe", link: "https://jhuffman815.github.io/tic-tac-toe/"},
    {image: "calculator.png", title: "Calculator", link: " https://jhuffman815.github.io/calculator/"},
    {image: "cryptocurrency.png", title: "Cryptocurrency App", link: "https://github.com/jhuffman815/react-native-redux-crypto-tracker/"},
    {image: "quote.png", title: "Quote Generator", link: "https://jhuffman815.github.io/Quote-Generator/"},
    {image: "responsive2.png", title: "Responsive Site2- POC", link: "https://shikhacorps.in/cssgridresponsive/"},
    {image: "styleconferences.png", title: "Style Conferences", link: "https://nabendu82.github.io/shayhowe/index.html"},
    {image: "itunes.png", title: "iTunes Clone - POC", link: "https://shikhacorps.in/mytunes/"},
    {image: "parallax.png", title: "Parallax Site - POC", link: "https://shikhacorps.in/parallaxsite/"},
    {image: "photography.png", title: "PhotoGraphy Site-POC", link: "https://shikhacorps.in/photographysite/"},
    {image: "yelpcamp.png", title: "YelpCamp", link: "https://hidden-coast-48928.herokuapp.com/"},
    {image: "blogsite.png", title: "Blog Site", link: "https://serene-wildwood-22136.herokuapp.com/blogs"},
    {image: "portfolio.png", title: "Portfolio Site", link: "https://nabendu82.github.io/"},
]

export default () => (
    <Layout>
        <Works>
            <GenericH2 none dark some style={{textAlign: 'center'}}>Projects</GenericH2>
            <section class="gallery__flex">
             { projects && projects.map(proj => <Project key={proj.title} project={proj} />)}
            </section>
        </Works>
    </Layout>
)