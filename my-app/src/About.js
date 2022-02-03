import React from "react";
import './About.css';
import aboutImg from './img/preview.jpg'
function About() {
  // up to top bottom 
  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active",window.scrollY > 0)
  });
  return (
  <div>
      <div className="about component__space" id="About">
          <div className="container">
              <div className="row">
                  <div className="col__2">
                      <img src={aboutImg} alt="" className="about__img"/>
                  </div>
                  <div className="col__2">
                      <h1 className="about__heading">
                          About Me
                      </h1>
                      <div className="about__meta">
                          <p className="about__text p__color">
                            Hey, I am a D4rk3nc0d1ng, I am a Mern Stack Developer and also a  CTF Player,Bug Hunter. I am a member of Grey Hat Hacker Community.
                            I have a lot of project of webdevelopments. I have written some  ctf web challenges writteups. I am Shareing some of them to you.
                          </p>

                          <p className="about__text p__color">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       Sunt deleniti iure enim facilis ipsam, et illum perspiciatis sequi aspernatur amet odio officiis dolorem nihil recusandae consequuntur. 
                       Possimus est quaerat corporis.
                          </p>

                          <p className="about__text p__color">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                           Ex ratione voluptate laborum repudiandae itaque repellendus deleniti blanditiis molestiae laudantium! Reiciendis, tempora? 
                           Quae porro modi minus quos quia illum expedita libero!
                          </p>
                            <div className="about__button d__flex align__items__center">
                            <a href="#">
                                 <button className="about btn pointer">Download Cv</button>
                            </a>
                         <a href="#">
                            <button className="about btn pointer">Hire Me</button>
                         </a>

                            </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="up__to__top__btn">
            <a href="#" className="bottom__to__top">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
              <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
            </a>
          </div>
      </div>
    </div>
  );
}

export default About;
