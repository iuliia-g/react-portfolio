import "./Intro.css"
import Me from "../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Iuliia</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                        <div className="i-title-item">ICT Student</div>
                        <div className="i-title-item">Software Development Student</div>
                        <div className="i-title-item">React & JavaScript Enthusiast</div>
                        <div className="i-title-item">Web & WordPress Developer</div>
                        <div className="i-title-item">Based in Oulu, Finland</div>
                        </div>
                    </div>
                    <br />
                    <p className="i-desc">
                        I’m an ICT student focused on software and web development, building projects and developing skills in React, JavaScript, HTML, CSS, PHP, WordPress, and MySQL.
                    </p>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro