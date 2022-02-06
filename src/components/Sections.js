import React from 'react';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

// gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sections = ({ pageUrl, url, gitUrl, name, id, background_images }) => {
  const boxs = useRef([]);
  const section = useRef([]);

  useEffect(() => {
    if (background_images) {
      section.current.forEach((el, index) => {
        const links = el.querySelector('.links');
        const img = el.querySelector('.img');
        const title = el.querySelector('.title');
        const box = el.querySelector('.box');

        const foreground1 = el.querySelector(`#img1`);
        const foreground2 = el.querySelector('#img2');
        const foreground3 = el.querySelector('#img3');

        const tl = gsap
          .timeline({ ease: 'none' })
          .to(box, { x: '150vw', rotate: 356, ease: 'none', duration: 4 })
          .from(
            foreground1,
            {
              y: '50px',
              duration: 1,
            },
            '=<'
          )
          .from(
            foreground2,
            {
              y: '150px',
              duration: 1,
            },
            '=<'
          )
          .from(
            foreground3,
            {
              y: '300px',
              duration: 1,
            },
            '=<'
          )
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
            { xPercent: 200, opacity: 0 },
            { xPercent: 50, opacity: 1 },
            '=<'
          )
          .from(
            links,
            {
              opacity: 0,
              y: '-200px',
            },
            '-=3.5'
          );

        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          toggleActions: 'play none none reverse',
          stagger: 2,
          scrub: true,
          animation: tl,
          pin: el,
          pinSpacing: true,
        });
      });
    }
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

  // template
  return (
    <Container className='App' ref={addToRef}>
      {background_images.map((el, index) => {
        if (index !== 0) {
          return (
            <img
              key={index}
              id={`img${index}`}
              src={el}
              alt=''
              className='parallax foreground-1'
            />
          );
        } else {
          return (
            <img
              key={index}
              src={el}
              alt=''
              className='parallax foreground-1'
            />
          );
        }
      })}
      <div className='main-container' key={id}>
        <h2 className='title'>{name}</h2>
        <img className='img' src={url} alt='' />
        <div className='links'>
          <a
            className='link'
            target='_blank'
            rel='noopener noreferrer'
            href={gitUrl}
          >
            Source
          </a>
          <a
            className='link'
            target='_blank'
            rel='noopener noreferrer'
            href={pageUrl}
          >
            Visit
          </a>
        </div>
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
  text-align: center;

  .main-container {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .title {
    font-size: 3rem;
    color: #000;
    letter-spacing: 0.3rem;
  }
  img {
    object-fit: cover;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 30%;
      flex-direction: row;
      transform: translate(-30%, -50%);
    }
  }
  .link {
    letter-spacing: 0.3rem;
    text-decoration: none;
    background: #fff;
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    border: 2px solid #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:hover {
      color: #fff;
      background: #000;
    }
  }
  a {
    text-decoration: none;
  }
  p {
    font-size: 3rem;
    color: red;
  }
  .content {
    z-index: 100;
    border: 2px solid red;
  }
  .img {
    width: 100%;
    max-width: 600px;
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
    bottom: 5%;
    color: red;
  }

  /* bg and foreground */
  .parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
    /* display: none; */
  }
`;
