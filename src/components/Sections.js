import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
// gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Sections = ({ game, pageUrl, url, name, id }) => {
  const boxs = useRef([]);
  const section = useRef([]);

  useEffect(() => {
    // boxs.current.forEach((el, index) => {
    //   gsap.to(el, {
    //     x: `150vw`,
    //     rotate: 356,
    //     ease: 'none',
    //     scrollTrigger: {
    //       trigger: section.current[index],
    //       start: `top top`,
    //       scrub: true,
    //       toggleActions: 'play none none reverse',
    //       pin: section.current[index],
    //     },
    //   });
    // });

    section.current.forEach((el, index) => {
      let link = el.querySelector('.link');
      // console.log(link);
      let img = el.querySelector('.img');
      let title = el.querySelector('.title');
      let box = el.querySelector('.box');
      console.log(box);

      let tl = gsap
        .timeline({ ease: 'none' })
        .to(box, { x: '150vw', rotate: 356, ease: 'none', duration: 4 })
        .from(
          title,
          {
            y: '-200px',
            duration: 1,
            opacity: 0,
          },
          '=<'
        )
        .fromTo(
          img,
          { xPercent: 200, stagger: 0.1, opacity: 0 },
          { xPercent: 50, opacity: 1, duration: 2 },
          '=<'
        );

      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        toggleActions: 'play none none reverse',
        markers: true,
        id: `${id}`,
        stagger: 2,
        scrub: true,
        animation: tl,
        pin: el,
        pinSpacing: true,
      });

      // gsap.to(el, {
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: el,
      //     start: 'top top',
      //     toggleActions: 'play none none reverse',
      //     markers: true,
      //     scrub: true,
      //     animation: tl,
      //     // pin: true,
      //     // pinSpacing: true,
      //   },
      // });
    });
  });

  const addToRef = (el) => {
    if (el && !section.current.includes(el)) {
      section.current.push(el);
    }
  };

  const addToBox = (el) => {
    if (el && !boxs.current.includes(el)) {
      boxs.current.push(el);
    }
  };
  return (
    <Container className='App'>
      <div
        className='hello'
        style={{
          backgroundImage: `url(${game})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        ref={addToRef}
        key={id}
      >
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href={pageUrl}
        >
          <p className='title'>{name}</p>
          <img className='img' src={url} alt='' />
          {/* <img src={game} alt='' /> */}
        </a>
        <div ref={addToBox} className='box b'>
          b
        </div>
      </div>
    </Container>
  );
};

export default Sections;

// styles
const Container = styled.div`
  overflow: hidden;
  .hello {
    /* import game from './game.jpeg';game; */
    /* background: url({game}); */
    position: relative;
    border: 2px solid;
    /* height: 600px; */
    height: 100vh;
  }
  text-align: center;
  a {
    text-decoration: none;
  }
  p {
    font-size: 3rem;
    color: red;
  }
  img {
    width: 100%;
    max-width: 600px;
    /* height: 500px; */
    margin: 2rem 0;
    object-fit: cover;
  }

  /* gsap */
  .box {
    width: 100px;
    height: 100px;
    background-color: #28a92b;
    position: absolute;
    bottom: 0;
    left: -100px;
    z-index: 100;
    line-height: 100px;
    font-size: 50px;
    text-align: center;
    border-radius: 50%;
  }

  .b {
    bottom: 23%;
    color: red;
  }
`;
