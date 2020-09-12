
import React from "react";
import Project from "../components/Project"


const webProjects = [
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/WKu01O.png", title: "Youtube Clone", link: " https://jhuffman-youtube-clone.netlify.com/"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/CQt0aA.png", title: "Evernote-Clone", link: "https://jhuffman-evernote-clone.netlify.com"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/jNDKhG.png", title: "Tic-Tac-Toe", link: "https://jhuffman815.github.io/tic-tac-toe/"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/922/zQ9ZI8.png", title: "Calculator", link: " https://jhuffman815.github.io/calculator/"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/v4lJ6k.png", title: "Quote Generator", link: "https://jhuffman815.github.io/Quote-Generator/"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/weFGoJ.png", title: "Exercise Tracker", link: "https://jhuffman-exercise-tracker.netlify.com/"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/6xxz8o.png", title: "Meme Generator", link: "https://jhuffman-meme-generator.netlify.app/"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/923/2CA6c9.png", title: "Speedtyping Game", link: "https://jhuffman-speedtyping-game.netlify.app/"},
]

const mobileProjects = [
    {image: "https://imagizer.imageshack.com/v2/800x600q90/923/N0Vcwa.png", title: "Clima Weather App", link: "https://github.com/jhuffman815/ClimaWeather"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/922/Nn4afD.png", title: "Xylophone Intrument App", link: "https://github.com/jhuffman815/Xylophone"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/924/57vEWU.png", title: "Egg Timer", link: "https://github.com/jhuffman815/EggTimer"},
    {image: "https://imagizer.imageshack.com/v2/800x600q90/923/W6Er7O.png", title: "Fuxin (in development)", link: "/ "}
]

export default () => (

    <div id ="work" className="container-fluid" style={{ backgroundColor: "#bc8f8f" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Projects </h1>
          <div className="row">
          { webProjects && webProjects.map(proj => <Project key={proj.title} project={proj} />)}
          { mobileProjects && mobileProjects.map(proj => <Project key={proj.title} project={proj} />)}
          </div>
        </div>
      </div>
    </div>
)






