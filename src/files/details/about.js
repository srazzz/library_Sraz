// displays the details of RGUKT
import React from 'react';
import './about.css'
function About() {
    return (
        <>
        <div>
        <section>
          <div className="image">
            
          </div>
          <div className="content">
            <h2>About Us</h2>
            <span>{/* line here */}</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
            <ul className="links">
              <li><a href="a">work</a></li>
              <div className="vertical-line" />
              <li><a href="a">service</a></li>
              <div className="vertical-line" />
              <li><a href="a">contact</a></li>
            </ul>
            <ul className="icons">
              <li>
                <i className="fa fa-twitter" />
              </li>
              <li>
                <i className="fa fa-facebook" />
              </li>
              <li>
                <i className="fa fa-github" />
              </li>
              <li>
                <i className="fa fa-pinterest" />
              </li>
            </ul>
          </div>
        </section><br /><br />
        <div className="credit">Made with <span style={{color: 'tomato'}}>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>
      </div>
        </>
    )
}
export default About;