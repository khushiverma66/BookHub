import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub, founded by a passionate group of bibliophiles, emerged as a literary haven in 2023. Born out of a shared love for books, the platform was established to connect readers with an extensive array of literary treasures. The founders envisioned a digital space where avid readers and newcomers alike could seamlessly explore, discover, and discuss books. BookHub quickly gained recognition for its user-friendly interface, in-depth book database, and vibrant community. Over the years, it has evolved into a go-to resource for book enthusiasts, providing a dynamic platform for sharing, reviewing, and finding the perfect read. Today, BookHub remains dedicated to fostering a love of reading worldwide.</p>
            <p className='fs-17'>As BookHub continues to grow, it remains committed to its mission of promoting literary exploration and fostering a global community of passionate readers. With a bright future ahead, BookHub invites book lovers to embark on an everlasting literary journey, together.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
