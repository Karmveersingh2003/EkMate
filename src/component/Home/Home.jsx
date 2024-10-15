import React, { useState,useEffect } from 'react';
import './home.css';
import "../Navbar/navbar.css"
import admin from "./img/admins.jpg"
import student from "./img/students.jpg"
import faculty from "./img/faculty.jpg"

export default function Home() {
   
  return (
    <>
     
      {/* Header */}
      <header id="home">
        <div className="header-content">
          <h2 id="quote">Welcome To EkMate </h2>
          <div className="line"></div>
          <h1>Your One-Stop Solution For Campus Transportation Management </h1>
          <a
            href="#about"
            className="ctn"
            onClick={() => {
              document.querySelector('#quad').style.border = '2px solid whitesmoke';
              document.querySelector('#quad').style.borderRadius = '20px';
            }}
          >
            Learn more
          </a>
        </div>
      </header>

      {/* Events Section */}
      <section className="events" id="events">
        <div className="container">
          <div className="title">
            <h1 className="dark">Upcoming Events</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <article className="card col">
              <img className="card-img" src={student} alt="Everest camp trek" />
              <h4 className="dark">For Students</h4>
              <p className="font-color">
                Everest base camp trek is without a doubt, one of the most renowned travel destinations in the world.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
            <article className="card col">
              <img src={faculty} alt="Walking holidays" />
              <h4 className="dark">For Faculties</h4>
              <p className="font-color">
                Join small guided group walks, enjoy a challenging trek, or a luxury private guided walk which can be made especially for you.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
            <article className="card col">
              <img src={admin} alt="Andaman Beaches" />
              <h4 className="dark">For Admins</h4>
              <p className="font-color">
                Diving in Andaman Beaches is exceptional. The coastal belt surroundings are one of the richest coral reef ecosystems in the world.
              </p>
              <a href="#" className="ctn">All Details</a>
            </article>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore" id="explore">
        <div className="explore-content">
          <h1>EXPLORE THE JIET</h1>
          <div className="line"></div>
          <p>
            “Travel makes one modest. You see what a tiny place you occupy in the world.”– Gustav Flaubert <br />
            Exploring will make you want to pack your bag, book that ticket and jet away.
          </p>
          <a href="#" className="ctn">Explore more</a>
        </div>
      </section>

      {/* Tours Section */}
      <section className="tours" id="tours">
        <div className="container row">
          <div className="col content-col">
            <h1 className="font-color">UPCOMING TOURS & DESTINATION</h1>
            <div className="line"></div>
            <p>
              Wed 28 Sept 2023: Port of Spain City Tour and Birdseye Fort View.<br />
              Sat 1 Oct 2023: Tour the Gasparee Caves.<br />
              Tues 4 Oct 2023: Trinidad North Coast Experience.<br />
              And many more...
            </p>
            <a href="#" className="ctn">Learn more</a>
          </div>
          <div className="image-col">
            <div className="image-gallery">
              <img src="./img/img3.png" alt="" />
              <img src="./img/img4.png" alt="" />
              <img src="./img/img5.png" alt="" />
              <img src="./img/img6.png" alt="" />
            </div>
          </div>
        </div>
        <br />
      </section>

      {/* About Section
      <section id="about">
        <div className="title">
          <h1 className="font-color">About Us</h1>
          <div className="line"></div>
        </div>
        <br />
        <div id="about_us">
          <div className="boxx">
            <div className="containerx">
              <input type="radio" name="slider" id="item-1" defaultChecked />
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />
              <div className="cards">
                <label className="cardt" htmlFor="item-1" id="col-img-1">
                  <img src="./img/carousel-img4.jpg" alt="" />
                </label>
                <label className="cardt" htmlFor="item-2" id="col-img-2">
                  <img src="./img/carousel-img5.jpg" alt="" />
                </label>
                <label className="cardt" htmlFor="item-3" id="col-img-3">
                  <img src="./img/carousel-img6.jpg" alt="" />
                </label>
              </div>
            </div>
            <span id="about-quad">
              <a href="#home">
                <center>
                  <h1 style={{ fontFamily: 'var(--ff-montserrat)', color: 'white' }}>
                    Find that
                  </h1>
                  <br />
                  <img
                    className="img2"
                    src="./img/mountain_dark.jpg"
                    width="200"
                    style={{ borderRadius: '12%' }}
                    alt="Adventure"
                  />
                  <br />
                  <h1 className="logo" style={{ fontSize: '50px' }}>
                    ADVENTURE
                  </h1>
                </center>
              </a>
            </span>
          </div>
        </div>
      </section> */}

      
    </>
  );
}


