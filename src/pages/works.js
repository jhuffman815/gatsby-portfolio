import React from "react";
import { Works, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout";
import Project from "../components/Project";

const webProjects = [
    {image: "newtube.png", title: "Youtube Clone", link: " https://jhuffman-youtube-clone.netlify.com/"},
    {image: "evernote.png", title: "Evernote-Clone", link: "https://jhuffman-evernote-clone.netlify.com"},
    {image: "tictactoe.png", title: "Tic-Tac-Toe", link: "https://jhuffman815.github.io/tic-tac-toe/"},
    {image: "calculator.png", title: "Calculator", link: " https://jhuffman815.github.io/calculator/"},
    {image: "quote.png", title: "Quote Generator", link: "https://jhuffman815.github.io/Quote-Generator/"},
    {image: "exercise.png", title: "Exercise Tracker", link: "https://jhuffman-exercise-tracker.netlify.com/"},
    {image: "meme.png", title: "Javascript Mini-Apps", link: "https://jhuffman-meme-generator.netlify.app/"},
    {image: "speedtypinggame.png", title: "Speedtyping Game", link: "https://jhuffman-speedtyping-game.netlify.app/"},
]

const mobileProjects = [
    
]

export default () => (
    <Layout>
        <Works>
            <GenericH2 none dark some style={{textAlign: 'center'}}>Web</GenericH2>
            <section class="gallery__flex">
             { webProjects && webProjects.map(proj => <Project key={proj.title} project={proj} />)}
            </section>
        </Works>
    </Layout>
)