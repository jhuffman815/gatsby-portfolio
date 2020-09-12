import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function TeamItem() {
  return (
    <Fade bottom>
      <div >
        <img src="https://imagizer.imageshack.com/v2/800x600q90/922/pYPogW.jpg" className="img-fluid rounded-circle" width="300px" alt=""/>
        <h3 className="mt-5">Jewell Huffman</h3>
        <p>
        I hand code beautiful websites using HTML5, CSS3, JS -- fully customizable and efficient. In my free time, I attend meetups, listen to engineering podcasts, read tech blogs, and take online courses in order to help me develop a growth mindset and become a better developer. 
        I am also an avid rock climber and love to get outside as much as possible.
        </p>
        <SocialIcon className="mr-4" url={"https://twitter.com/jewell_huffman"} />
        <SocialIcon className="mr-4" url={"https://github.com/jhuffman815"} />
        <SocialIcon className="mr-4" url={"https://www.linkedin.com/in/jewell-huffman-84a4016a/"} />
      </div>
    </Fade>
  )
}

export default TeamItem
