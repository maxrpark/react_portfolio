import React from 'react';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

// gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Sections = ({
  pageUrl,
  url,
  gitUrl,
  name,
  id,
  background_images,
  shortDsc,
  tags,
}) => {
  const section = useRef([]);

  useEffect(() => {
    if (background_images) {
      section.current.forEach((el, index) => {
        // parallax bg
        const foreground1 = el.querySelector(`#img1`);
        const foreground2 = el.querySelector('#img2');
        const foreground3 = el.querySelector('#img3');
        const foreground4 = el.querySelector('#img4');

        // content elements
        const links = el.querySelector('.links');
        const sectionLeft = el.querySelector('.section-left');
        const projectDescription = el.querySelector('.project-destails');
        const title = el.querySelector('.title');

        ScrollTrigger.matchMedia({
          // large

          '(min-width: 966px)': function () {
            ScrollTrigger.saveStyles([
              foreground1,
              foreground2,
              foreground3,
              foreground4,
              links,
              sectionLeft,
              projectDescription,
              title,
            ]); // save styles
            const tl = gsap
              .timeline({ ease: 'none' })
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
                foreground4,
                {
                  y: '350px',
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
                sectionLeft,
                { xPercent: 200, opacity: 0 },
                { xPercent: 50, opacity: 1 },
                '=<'
              )
              .from(projectDescription, {
                opacity: 0,
                yPercent: '+=100',
              })
              .from(links, {
                opacity: 0,
                y: '-200px',
              });
            ScrollTrigger.create({
              trigger: el,
              start: 'top top',
              markers: true,
              toggleActions: 'play none none reverse',
              // stagger: 2,
              scrub: true,
              animation: tl,
              pin: el,
              pinSpacing: true,
            });
          },
          '(max-width: 965px)': function () {
            ScrollTrigger.saveStyles([
              foreground1,
              foreground2,
              foreground3,
              foreground4,
              links,
              sectionLeft,
              projectDescription,
              title,
            ]); // save styles
            const tl = gsap
              .timeline({ ease: 'none' })
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
                foreground4,
                {
                  y: '350px',
                  duration: 1,
                },
                '=<'
              )
              // end of backgrounds
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
                sectionLeft,
                { yPercent: 200, opacity: 0 },
                { yPercent: 0, opacity: 1 },
                '=<'
              )
              .from(projectDescription, {
                opacity: 0,
                yPercent: '+=100',
              })
              .from(links, {
                opacity: 0,
                y: '200px',
              });
            ScrollTrigger.create({
              trigger: el,
              start: 'top top',
              markers: true,
              toggleActions: 'play none none reverse',
              // stagger: 2,
              scrub: true,
              animation: tl,
              pin: el,
              pinSpacing: true,
            });
          },

          // medium
          '(min-width: 687px) and (max-width: 959px)': function () {
            // The ScrollTriggers created inside these functions are segregated and get
            // reverted/killed when the media query doesn't match anymore.
          },

          // small
          '(max-width: 599px)': function () {
            // The ScrollTriggers created inside these functions are segregated and get
            // reverted/killed when the media query doesn't match anymore.
          },

          // all
          all: function () {
            // ScrollTriggers created here aren't associated with a particular media query,
            // so they persist.
          },
        });
      });
    }
  });

  const addToRef = (el) => {
    if (el && !section.current.includes(el)) {
      section.current.push(el);
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
              className={`parallax foreground-1 img${index}`}
            />
          );
        } else {
          return (
            <img key={index} src={el} alt='' className='parallax foreground' />
          );
        }
      })}

      <article className='main-container' key={id}>
        <h2 className='title'>{name}</h2>
        <div className='section-left'>
          <img className='img' src={url} alt='' />
          <div className='project-destails'>
            <div className='project-descriptions'>
              <h2 className='dsc-title'>About</h2>
              <p className='dsc'>{shortDsc}</p>
            </div>
            <div className='tags '>
              {tags.map((tag) => {
                return (
                  <p className='btn' key={tag}>
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className='links'>
          <a
            className='link btn source'
            target='_blank'
            rel='noopener noreferrer'
            href={gitUrl}
          ></a>
          <a
            className='link btn visit'
            target='_blank'
            rel='noopener noreferrer'
            href={pageUrl}
          ></a>
        </div>
      </article>
    </Container>
  );
};

export default Sections;

// styles
const Container = styled.div`
  text-align: center;
  position: relative;
  padding: 1rem;

  /* bg and foreground */
  .parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
    @media screen and (max-width: 965px) {
      object-fit: cover;
    }
  }
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
    font-size: 1.7rem;
    color: #000;
    letter-spacing: 0.3rem;
  }

  @media screen and (min-width: 965px) {
    .title {
      font-size: 3rem;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
    height: 100%;

    @media screen and (min-width: 965px) {
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translate(-30%, -50%);
    }
  }
  .link {
    position: relative;
    overflow: hidden;
    ::before {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: 400;
      border: 2px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ::after {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Font Awesome 5 Free';
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      display: none;
      justify-content: center;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      transform: scale(1.1);
      height: 140px;
      color: #fff;
      background: #000;
      border-radius: 100%;
      transform: rotate(360deg);
      transition: all 0.6s;
      ::before {
        display: none;
      }
      ::after {
        display: flex;
        height: 140px;
      }
    }
  }

  .source {
    ::before {
      content: 'GitHub';
    }
    ::after {
      content: '\f0c1';
    }
  }

  .visit {
    ::before {
      content: 'Visit';
    }
    ::after {
      content: '\f0c1';
    }
  }

  .section-left {
    max-width: 600px;
    margin: 2rem 0;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 965px) {
      min-height: 50vh;
      .img {
        min-height: 50vh;
      }
    }
  }

  .project-destails {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.7);
    font-family: var(--secundary-font);
    gap: 1rem;

    .project-descriptions {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h2 {
        color: #fff;
        font-size: 2rem;
        font-weight: 900;
        font-family: var(--primary-font);
        letter-spacing: 0.3rem;
      }
      .dsc {
        color: #fff;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    }

    .tags {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      justify-self: flex-end;
      flex-wrap: wrap;

      .btn {
        height: 50px;
        width: 100px;
        font-size: 16px;
        text-transform: capitalize;
        letter-spacing: normal;
      }
    }
    @media screen and (max-width: 965px) {
      padding: 1rem;
      .project-descriptions {
        h2 {
          font-size: 1.5rem;
        }
        .dsc {
          font-size: 1rem;
        }
      }
      .tags {
        gap: 0.5rem;
        .btn {
          height: 10px;
          min-width: 80px;
        }
      }
    }
  }
`;
