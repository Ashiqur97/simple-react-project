import React from 'react';
import './Blog.css';
import Blog1 from './img/CTF.png'
import Blog2 from './img/bug.jpg'
import Blog3 from './img/Hawk.png'
function Blog() {
  return ( 
  <div className="blog component__space" id="Blog">
      <div className="heading">
          <h1 className="heading">CTF WEB WRITTEUP</h1>
          <p className="heading p__color">
              There are some ctf web category writteup
          </p>
          <p className="heading p__color">
              so, it will help for beginner.
          </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                  <div className=".project__box__img pointer relative">
                      <div className="project__img__box">
                          <img src={Blog1} alt="" className="project__img"/>
                      </div>
                      <div className="mask__effect"></div>
                  </div> 
                    <div className="Blog__meta absolute">
                            <h3 className="project__text">Web</h3>
                            <h2 className="project__text">Web design refers to the design of websites that are displayed on the internet</h2>
                            <a href="#" className="blog project__btn btn">Read More</a>
  
                        </div>
                  </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                  <div className=".project__box__img pointer relative">
                      <div className="project__img__box">
                          <img src={Blog2} alt="" className="project__img"/>
                      </div>
                      <div className="mask__effect"></div>
                  </div> 
                    <div className="Blog__meta absolute">
                            <h3 className="project__text">Bug Bounty</h3>
                            <h2 className="project__text">A bug bounty program is a deal offered by many websites, can receive recognition and compensationfor reporting bugs</h2>
                            <a href="#" className="blog project__btn btn">Read More</a>
  
                        </div>
                  </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                  <div className=".project__box__img pointer relative">
                      <div className="project__img__box">
                          <img src={Blog3} alt="" className="project__img"/>
                      </div>
                      <div className="mask__effect"></div>
                  </div> 
                    <div className="Blog__meta absolute">
                            <h3 className="project__text">XSS</h3>
                            <h2 className="project__text">xss means cross site scripting. it's a one kind of malicious code.</h2>
                            <a href="#" className="blog project__btn btn">Read More</a>
  
                        </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
  );
}

export default Blog;


    