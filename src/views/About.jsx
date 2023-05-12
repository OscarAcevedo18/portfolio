import React from "react";
// import { useParams } from "react-router-dom";

const About = () => {
  return (
    <div className="container-about">
      <div className="card">
        <h1>About Me</h1>
        <div className="log">
          <i class="fa-solid fa-user-tie fa-fade"></i>
        </div>
      </div>
      <div className="card-about">
        <h3>
          Soy una persona pro activa, con mucha ambición y ganas de aprender.
          Busco perfeccionarme en la Programación,
          <br /> me gustan los retos y quiero seguir aprendiendo así como
          capacitarme en el rubro. <br />
          Espero aprender de la mejor manera varios lenguajes de programación
          así como dominar el idioma ingles <br /> para obtener más
          posibilidades.
        </h3>
        <hr className="line"></hr>
        <h3>
          I am a pro-active person, with a lot of ambition and desire to learn.
          I am looking to improve my programming skills, <br /> I like
          challenges and I want to keep learning as well as training in the
          field. <br />I hope to learn in the best way several programming
          languages as well as mastering the English language <br /> to get more
          possibilities.
        </h3>
      </div>
    </div>
  );
};
export default About;
