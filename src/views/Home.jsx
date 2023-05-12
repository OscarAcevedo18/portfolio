import React from "react";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="container">
      <div className="container-card">
        <div className="card">
          <h1>About Me</h1>
          <div className="log">
            <i class="fa-solid fa-user-tie fa-fade"></i>
          </div>
        </div>
        <div className="card">
          <h1>Skills</h1>
          <div className="log">
            <i class="fa-sharp fa-solid fa-code fa-fade"></i>
          </div>
        </div>
        <div className="card">
          <a href="https://github.com/OscarAcevedo18" target="_blank">
            <h1>GitHub</h1>
          </a>
          <div className="log">
            <i class="fa-brands fa-github fa-fade"></i>
          </div>
        </div>
        <div className="card">
          <a
            href="https://www.linkedin.com/in/oscar-acevedo-vilches-29119a188/"
            target="_blank"
          >
            <h1>Linkedin</h1>
          </a>
          <div className="log">
            <i class="fa-brands fa-linkedin fa-fade"></i>
          </div>
        </div>
      </div>
      <div>
        <hr className="line"></hr>
      </div>
      <div className="title">
        <div className="icon">
          <i class="fa-solid fa-code-pull-request fa-bounce"></i>
        </div>
        <h2 className="sub">
          Hi, I'm <br />
          Oscar Acevedo Vilches <br />
          Full Stack Developer
        </h2>
      </div>

      {/* About */}
      <About />

      {/* SKILLS */}
      <Skills />
    </div>
  );
};
export default Home;
