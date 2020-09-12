import React from "react"
import { SocialIcon } from "react-social-icons"

function Footer() {
  return (
    <div>
      <footer className="py-2" style={{ backgroundColor: "#8fbc8f" }}>
        <div className="container">
          <p className="float-right">Jewell Huffman | © Copyright 2019</p>
          <p>
            Design Inspired from{" "}
            <a href="https://graphicburger.com/cuda-single-page-portfolio-template/">
              Cuda
            </a>
          </p>
          <div className="freepik">
            Icons made by{" "}
            <a
              href="https://www.freepik.com/?__hstc=57440181.5efde453cddf611e3269badc0f78e347.1563446622471.1563446622471.1563458509765.2&__hssc=57440181.1.1563458509765&__hsfp=226280184"
              title="Freepik"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
            <br />
            <br />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
