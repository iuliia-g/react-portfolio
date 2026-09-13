import "./About.css"
import bg from "../img/bg.png"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={bg} alt="" className="a-img" />
          </div>
        </div> 


        <div className="a-right">
         <h1 className="a-title">About Me</h1>

          <p className="a-sub">
            Before transitioning into IT, I gained over seven years of professional
            experience in healthcare environments, including hospitals and operating rooms.
          </p>

          <p className="a-desc">
            Today I am an ICT student focused on software and web development. I enjoy
            building projects with React, JavaScript, HTML, CSS, PHP and MySQL while
            continuously expanding my technical skills through practical development work.
          </p>
          <div className="a-skills">
            
          <h3>Technical Skills</h3>

          <div className="a-skill-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>WordPress</span>
            <span>REST API</span>
          </div>
         </div>
        </div>
    </div>
  )
}

export default About